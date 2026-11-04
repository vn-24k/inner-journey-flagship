import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Real WebGL Fluid Displacement & Chromatic Aberration Shader
// Directly extracted and adapted from:
// /root/Evolução Inteligente/arsenal/repos/deformation-effect/script.js
interface DeformationCanvasProps {
  imageSrc: string;
  className?: string;
}

export const DeformationCanvas: React.FC<DeformationCanvasProps> = ({
  imageSrc,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 900;

    const GRID_SIZE = 28;
    const MOUSE_RADIUS = 0.28;
    const STRENGTH = 0.12;
    const RELAXATION = 0.93;
    const DISPLACEMENT = 0.022;
    const ABERRATION = 0.2;

    const mouse = { x: 0.5, y: 0.5, prevX: 0.5, prevY: 0.5, vX: 0, vY: 0 };

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    let gridX = GRID_SIZE;
    let gridY = GRID_SIZE;

    function createDataTexture() {
      const aspect = width / height;
      gridX = aspect >= 1 ? Math.round(GRID_SIZE * aspect) : GRID_SIZE;
      gridY = aspect >= 1 ? GRID_SIZE : Math.round(GRID_SIZE / aspect);

      const data = new Float32Array(gridX * gridY * 4);
      const texture = new THREE.DataTexture(
        data,
        gridX,
        gridY,
        THREE.RGBAFormat,
        THREE.FloatType
      );
      texture.magFilter = texture.minFilter = THREE.NearestFilter;
      texture.needsUpdate = true;
      return texture;
    }

    let dataTexture = createDataTexture();

    const textureLoader = new THREE.TextureLoader();
    const artTexture = textureLoader.load(imageSrc, (tex) => {
      tex.minFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      updateCoverScale(tex.image.width, tex.image.height);
    });

    let mesh: THREE.Mesh | null = null;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: artTexture },
        uDataTexture: { value: dataTexture },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform sampler2D uDataTexture;
        varying vec2 vUv;
        void main() {
          vec4 offset = texture2D(uDataTexture, vUv);
          vec2 shift = ${DISPLACEMENT} * offset.rg;
          vec2 split = shift * ${ABERRATION};

          // Chromatic aberration split sampling
          float r = texture2D(uTexture, vUv - shift + split).r;
          float g = texture2D(uTexture, vUv - shift).g;
          float b = texture2D(uTexture, vUv - shift - split).b;

          gl_FragColor = vec4(r, g, b, 1.0);
        }
      `,
    });

    function updateCoverScale(imgWidth = 1000, imgHeight = 1500) {
      const imgAspect = imgWidth / imgHeight;
      const containerAspect = width / height;
      const scaleX = containerAspect < imgAspect ? imgAspect / containerAspect : 1;
      const scaleY = containerAspect > imgAspect ? containerAspect / imgAspect : 1;

      if (mesh) {
        mesh.geometry.dispose();
        mesh.geometry = new THREE.PlaneGeometry(2 * scaleX, 2 * scaleY);
      } else {
        mesh = new THREE.Mesh(new THREE.PlaneGeometry(2 * scaleX, 2 * scaleY), material);
        scene.add(mesh);
      }
    }

    updateCoverScale();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      mouse.vX = x - mouse.prevX;
      mouse.vY = y - mouse.prevY;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = x;
      mouse.y = y;
    };

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      renderer.setSize(width, height);
      dataTexture = createDataTexture();
      material.uniforms.uDataTexture.value = dataTexture;
      if (artTexture.image) {
        updateCoverScale(artTexture.image.width, artTexture.image.height);
      }
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);

    function updateDataTexture() {
      const data = dataTexture.image.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i] *= RELAXATION;
        data[i + 1] *= RELAXATION;
      }

      const gridMouseX = gridX * mouse.x;
      const gridMouseY = gridY * (1 - mouse.y);
      const maxDist = GRID_SIZE * MOUSE_RADIUS;

      for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
          const dist = Math.hypot(gridMouseX - i, gridMouseY - j);
          if (dist < maxDist) {
            const index = 4 * (i + gridX * j);
            const power = Math.min(maxDist / dist, 10);
            data[index] += STRENGTH * 100 * mouse.vX * power;
            data[index + 1] -= STRENGTH * 100 * mouse.vY * power;
          }
        }
      }

      mouse.vX *= 0.88;
      mouse.vY *= 0.88;
      dataTexture.needsUpdate = true;
    }

    let animId: number;
    const animate = () => {
      updateDataTexture();
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
      material.dispose();
      artTexture.dispose();
      dataTexture.dispose();
      renderer.dispose();
    };
  }, [imageSrc]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}
    />
  );
};
