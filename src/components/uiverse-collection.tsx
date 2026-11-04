import React from "react";

// 22 Real Uiverse Components curated for SHADOW / VISUAL ARCHIVE: The Inner Journey

// --- UivGalleryBtn (Exhibition Explore Button - Source: Buttons/andrew-demchenk0_yellow-otter-87.html) ---
export const UivGalleryBtn: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_0_io by andrew-demchenk0 - Tags: icon, black, button, Microphone, record, opacity */
.ij_uiv_0_button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 8px;
  height: 40px;
  width: 114px;
  border: none;
  background: #ij_uiv_0_1b1b1cde;
  border-radius: 20px;
  cursor: pointer;
}

.ij_uiv_0_lable {
  line-height: 20px;
  font-size: 17px;
  color: #ij_uiv_0_FF342B;
  font-family: sans-serif;
  letter-spacing: 1px;
}

.ij_uiv_0_button:hover {
  background: #ij_uiv_0_1b1b1c;
}

.ij_uiv_0_button:hover .ij_uiv_0_svg-icon {
  animation: scale 1s linear infinite;
}

@keyframes scale {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.ij_uiv_0_05) rotate(10deg);
  }

  100% {
    transform: scale(1);
  }
}
`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<button className="ij_uiv_0_button">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" className="ij_uiv_0_svg-icon"><g strokeWidth="2" strokeLinecap="round" stroke="#ff342b"><rect y="3" x="9" width="6" rx="3" height="11"></rect><path d="m12 18v3"></path><path d="m8 21h8"></path><path d="m19 11c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7"></path></g></svg>
  <span className="ij_uiv_0_lable">Record</span>
</button>` }} />
    </div>
  );
};

// --- UivPrintBtn (Acquire Fine-Art Print - Source: Buttons/vinodjangid07_average-pig-54.html) ---
export const UivPrintBtn: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_1_io by vinodjangid07  - Tags: animation, black, button, code, hover effect */
.ij_uiv_1_button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 45px;
  width: 45px;
  border: none;
  border-radius: 10px;
  background-color: black;
  cursor: pointer;
  transition: all 0.ij_uiv_1_3s;
  overflow: hidden;
}
.ij_uiv_1_bracket {
  font-size: 18px;
  transition: all 0.ij_uiv_1_3s;
  color: rgb(182, 104, 255);
}
.ij_uiv_1_text {
  font-size: 15px;
  width: 0;
  transform: scale(0);
  transition: all 0.ij_uiv_1_3s;
  color: white;
}
.ij_uiv_1_button:hover {
  width: 100px;
}
.ij_uiv_1_button:hover .ij_uiv_1_text {
  transform: scale(1);
  width: 40px;
}

`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<button className="ij_uiv_1_button">
  <span className="ij_uiv_1_bracket left">❴</span>
  <span className="ij_uiv_1_text">Code</span>
  <span className="ij_uiv_1_bracket right">❵</span>
</button>` }} />
    </div>
  );
};

// --- UivCatalogBtn (Download Monograph PDF - Source: Buttons/VassoD_smooth-earwig-8.html) ---
export const UivCatalogBtn: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
``
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<button
  className="relative overflow-hidden rounded-lg h-12 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-pink-400 before:via-purple-400 before:to-indigo-400"
>
  <span className="relative text-white font-bold px-8 py-8"> Hover me </span>
</button>` }} />
    </div>
  );
};

// --- UivInquireBtn (Private Viewing Request - Source: Buttons/satyamchaudharydev_great-seahorse-44.html) ---
export const UivInquireBtn: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_3_io by satyamchaudharydev - Tags: icon, button, 3d button */
/* inspired from this svgbackgrounds.ij_uiv_3_com/ */
.ij_uiv_3_button {
  width: fit-content;
  display: flex;
  padding: 0.ij_uiv_3_8em 1.ij_uiv_3_1em;
  gap: 0.ij_uiv_3_4rem;
  border: none;
  font-weight: bold;
  border-radius: 30px;
  text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
  background: linear-gradient(15deg, #ij_uiv_3_880088, #ij_uiv_3_aa2068, #ij_uiv_3_cc3f47, #ij_uiv_3_de6f3d, #ij_uiv_3_f09f33, #ij_uiv_3_de6f3d, #ij_uiv_3_cc3f47, #ij_uiv_3_aa2068, #ij_uiv_3_880088) no-repeat;
  background-size: 300%;
  background-position: left center;
  transition: background .ij_uiv_3_3s ease;
  color: #ij_uiv_3_fff;
}

.ij_uiv_3_button:hover {
  background-size: 320%;
  background-position: right center;
}

.ij_uiv_3_button:hover svg {
  fill: #ij_uiv_3_fff;
}

.ij_uiv_3_button svg {
  width: 23px;
  fill: #ij_uiv_3_f09f33;
  transition: .ij_uiv_3_3s ease;
}
`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<button className="ij_uiv_3_button">
    <svg viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
    </svg>
    Unlock Pro
</button>` }} />
    </div>
  );
};

// --- UivContrastToggle (Curatorial Contrast Toggle - Source: Toggle-switches/gharsh11032000_brave-pug-20.html) ---
export const UivContrastToggle: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_4_io by gharsh11032000 - Tags: switch, checkbox, toggle, toggle switch */
/* The switch - the box around the slider */
.ij_uiv_4_switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.ij_uiv_4_5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.ij_uiv_4_switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.ij_uiv_4_slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border: 2px solid #ij_uiv_4_414141;
  border-radius: 50px;
  transition: all 0.ij_uiv_4_4s cubic-bezier(0.ij_uiv_4_175, 0.ij_uiv_4_885, 0.ij_uiv_4_32, 1.ij_uiv_4_275);
}

.ij_uiv_4_slider:before {
  position: absolute;
  content: "";
  height: 1.ij_uiv_4_4em;
  width: 1.ij_uiv_4_4em;
  left: 0.ij_uiv_4_2em;
  bottom: 0.ij_uiv_4_2em;
  background-color: white;
  border-radius: inherit;
  transition: all 0.ij_uiv_4_4s cubic-bezier(0.ij_uiv_4_23, 1, 0.ij_uiv_4_320, 1);
}

.ij_uiv_4_switch input:checked + .ij_uiv_4_slider {
  box-shadow: 0 0 20px rgba(9, 117, 241, 0.ij_uiv_4_8);
  border: 2px solid #ij_uiv_4_0974f1;
}

.ij_uiv_4_switch input:checked + .ij_uiv_4_slider:before {
  transform: translateX(1.ij_uiv_4_5em);
}
`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<label className="ij_uiv_4_switch">
  <input type="checkbox" />
  <span className="ij_uiv_4_slider"></span>
</label>` }} />
    </div>
  );
};

// --- UivAudioToggle (Contemplative Audio Ambience - Source: Toggle-switches/Javierrocadev_proud-goat-59.html) ---
export const UivAudioToggle: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
``
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<label className="relative inline-flex items-center cursor-pointer">
  <input className="sr-only peer" value="" type="checkbox" />
    <div className="peer ring-2 ring-gray-900 bg-gradient-to-r from-rose-400 to-red-900 rounded-full outline-none duration-300 after:duration-500 w-20 h-8  shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900 shadow-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-900  after:content-[''] after:rounded-full after:absolute after:outline-none after:h-12 after:w-12 after:bg-gray-50 after:-top-2 after:-left-2 after:flex after:justify-center after:items-center after:border-4 after:border-gray-900  peer-checked:after:translate-x-14">
  </div>
</label>` }} />
    </div>
  );
};

// --- UivSeriesToggle (Series 04 / Archive Switch - Source: Toggle-switches/BurgiSimon_breezy-donkey-2.html) ---
export const UivSeriesToggle: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_6_io by BurgiSimon  - Tags: simple, animation, red, green, switch, animated, css, toggle switch */
/* The switch - the box around the slider */
.ij_uiv_6_switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 4.ij_uiv_6_5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.ij_uiv_6_switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.ij_uiv_6_slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ij_uiv_6_ff3636;
  transition: 0.ij_uiv_6_1s;
  transition-delay: 0.ij_uiv_6_2s;
  border-radius: 30px;
}

.ij_uiv_6_slider:before {
  position: absolute;
  content: "";
  height: 1.ij_uiv_6_4em;
  width: 1.ij_uiv_6_4em;
  border-radius: 20px;
  left: 0.ij_uiv_6_3em;
  bottom: 0.ij_uiv_6_3em;
  background-color: white;
  transition-delay: 0.ij_uiv_6_2s;
  transition: 0.ij_uiv_6_1s;
}

.ij_uiv_6_switch input:checked + .ij_uiv_6_slider {
  transition-delay: 0.ij_uiv_6_2s;
  background-color: #ij_uiv_6_00c763;
}

.ij_uiv_6_switch input:focus + .ij_uiv_6_slider {
  transition-delay: 0.ij_uiv_6_2s;
  box-shadow: 0 0 1px #ij_uiv_6_00c763;
}

.ij_uiv_6_switch input:checked + .ij_uiv_6_slider:before {
  transform: translateX(2.ij_uiv_6_5em);
  transition-delay: 0.ij_uiv_6_2s;
  transition-duration: 0.ij_uiv_6_1s;
}

/* Animation Right */
@keyframes slideRight {
  0% {
    transform: translateX(0) translateY(0);
  }
  20% {
    transform: translateX(0.ij_uiv_6_5em) translateY(-1.ij_uiv_6_5em);
  }
  40% {
    transform: translateX(1em) translateY(-1.ij_uiv_6_75em); /* Highest Point */
  }
  60% {
    transform: translateX(1.ij_uiv_6_5em) translateY(-1.ij_uiv_6_5em);
  }
  80% {
    transform: translateX(2em) translateY(-1.ij_uiv_6_25em);
  }
  100% {
    transform: translateX(2.ij_uiv_6_5em) translateY(0);
  }
}

/* Slide Animation Left */
@keyframes slideLeft {
  0% {
    transform: translateX(2.ij_uiv_6_5em) translateY(0);
  }
  20% {
    transform: translateX(2em) translateY(-0.ij_uiv_6_25em);
  }
  40% {
    transform: translateX(1.ij_uiv_6_5em) translateY(-0.ij_uiv_6_5em); /* Highest Point */
  }
  60% {
    transform: translateX(1em) translateY(-0.ij_uiv_6_75em);
  }
  80% {
    transform: translateX(0.ij_uiv_6_5em) translateY(-0.ij_uiv_6_5em);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

.ij_uiv_6_switch input:checked + .ij_uiv_6_slider:before {
  animation: slideRight 0.ij_uiv_6_15s forwards;
}

.ij_uiv_6_switch input:not(:checked) + .ij_uiv_6_slider:before {
  animation: slideLeft 0.ij_uiv_6_15s forwards;
}

`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<label className="ij_uiv_6_switch">
  <input type="checkbox" />
  <span className="ij_uiv_6_slider"></span>
</label>` }} />
    </div>
  );
};

// --- UivCurrencyToggle (Currency USD/EUR/GBP - Source: Toggle-switches/ercnersoy_evil-eel-92.html) ---
export const UivCurrencyToggle: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_7_io by ercnersoy  - Tags: simple, switch, creative */
/* The switch - the box around the slider */
.ij_uiv_7_switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.ij_uiv_7_5em;
  height: 1.ij_uiv_7_5em;
}
/* Hide default HTML checkbox */
.ij_uiv_7_switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
/* The slider */
.ij_uiv_7_slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #ij_uiv_7_ccc;
  transition: 0.ij_uiv_7_4s;
  border-radius: 1rem 0rem 1rem;
}

.ij_uiv_7_slider:before {
  position: absolute;
  content: "";
  height: 1.ij_uiv_7_5em;
  width: 1.ij_uiv_7_4em;
  left: 0em;
  bottom: 0em;
  background-color: white;
  transition: 0.ij_uiv_7_4s;
  border-radius: 1rem 0rem 1rem;
  border: 3px solid white;
}

.ij_uiv_7_ch:checked + .ij_uiv_7_slider {
  background-color: #ij_uiv_7_72eb67;
}

.ij_uiv_7_ch:focus + .ij_uiv_7_slider {
  box-shadow: 0 0 1px #ij_uiv_7_2196f3;
}

.ij_uiv_7_ch:checked + .ij_uiv_7_slider:before {
  transform: translateX(2.ij_uiv_7_2em);
  background-color: green;
  box-shadow: 0px 0px 40px 5px #ij_uiv_7_72eb67;
  border: 3px solid white;
}

.ij_uiv_7_ch:checked + .ij_uiv_7_slider::after {
  content: "|";
  color: white;
  position: absolute;
  right: 0.ij_uiv_7_3rem;
  top: -3.ij_uiv_7_3px;
  transform: rotate(45deg);
}

`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<label className="ij_uiv_7_switch">
  <input className="ij_uiv_7_ch" type="checkbox" />
  <span className="ij_uiv_7_slider"></span>
</label>` }} />
    </div>
  );
};

// --- UivArtworkCard (Museum Matting Artwork Card - Source: Cards/JkHuger_spotty-swan-68.html) ---
export const UivArtworkCard: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_8_io by JkHuger - Tags: card, glossy, debitcard */
.ij_uiv_8_card,
.ij_uiv_8_card__chip {
  overflow: hidden;
  position: relative;
}

.ij_uiv_8_card,
.ij_uiv_8_card__chip-texture,
.ij_uiv_8_card__texture {
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.ij_uiv_8_card {
  animation-name: rotate_500;
  background-color: var(--primary);
  background-image: radial-gradient(circle at 100% 0%,hsla(0,0%,100%,0.ij_uiv_8_08) 29.ij_uiv_8_5%,hsla(0,0%,100%,0) 30%),
        radial-gradient(circle at 100% 0%,hsla(0,0%,100%,0.ij_uiv_8_08) 39.ij_uiv_8_5%,hsla(0,0%,100%,0) 40%),
        radial-gradient(circle at 100% 0%,hsla(0,0%,100%,0.ij_uiv_8_08) 49.ij_uiv_8_5%,hsla(0,0%,100%,0) 50%);
  border-radius: 0.ij_uiv_8_5em;
  box-shadow: 0 0 0 hsl(0,0%,80%),
        0 0 0 hsl(0,0%,100%),
        -0.ij_uiv_8_2rem 0 0.ij_uiv_8_75rem 0 hsla(0,0%,0%,0.ij_uiv_8_3);
  color: hsl(0,0%,100%);
  width: 10.ij_uiv_8_3em;
  height: 6.ij_uiv_8_8em;
  transform: translate3d(0,0,0);
}

.ij_uiv_8_card__info,
.ij_uiv_8_card__chip-texture,
.ij_uiv_8_card__texture {
  position: absolute;
}

.ij_uiv_8_card__chip-texture,
.ij_uiv_8_card__texture {
  animation-name: texture;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
}

.ij_uiv_8_card__info {
  font: 0.ij_uiv_8_75em/1 "DM Sans", sans-serif;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.ij_uiv_8_75rem;
  inset: 0;
}

.ij_uiv_8_card__logo,
.ij_uiv_8_card__number {
  width: 100%;
}

.ij_uiv_8_card__logo {
  font-weight: bold;
  font-style: italic;
}

.ij_uiv_8_card__chip {
  background-image: linear-gradient(hsl(0,0%,70%),hsl(0,0%,80%));
  border-radius: 0.ij_uiv_8_2rem;
  box-shadow: 0 0 0 0.ij_uiv_8_05rem hsla(0,0%,0%,0.ij_uiv_8_5) inset;
  width: 1.ij_uiv_8_25rem;
  height: 1.ij_uiv_8_25rem;
  transform: translate3d(0,0,0);
}

.ij_uiv_8_card__chip-lines {
  width: 100%;
  height: auto;
}

.ij_uiv_8_card__chip-texture {
  background-image: linear-gradient(-80deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0.ij_uiv_8_6) 48% 52%,hsla(0,0%,100%,0));
}

.ij_uiv_8_card__type {
  align-self: flex-end;
  margin-left: auto;
}

.ij_uiv_8_card__digit-group,
.ij_uiv_8_card__exp-date,
.ij_uiv_8_card__name {
  background: linear-gradient(hsl(0,0%,100%),hsl(0,0%,85%) 15% 55%,hsl(0,0%,70%) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Courier Prime", monospace;
  filter: drop-shadow(0 0.ij_uiv_8_05rem hsla(0,0%,0%,0.ij_uiv_8_3));
}

.ij_uiv_8_card__number {
  font-size: 0.ij_uiv_8_8rem;
  display: flex;
  justify-content: space-between;
}

.ij_uiv_8_card__valid-thru,
.ij_uiv_8_card__name {
  text-transform: uppercase;
}

.ij_uiv_8_card__valid-thru,
.ij_uiv_8_card__exp-date {
  margin-bottom: 0.ij_uiv_8_25rem;
  width: 50%;
}

.ij_uiv_8_card__valid-thru {
  font-size: 0.ij_uiv_8_3rem;
  padding-right: 0.ij_uiv_8_25rem;
  text-align: right;
}

.ij_uiv_8_card__exp-date,
.ij_uiv_8_card__name {
  font-size: 0.ij_uiv_8_6rem;
}

.ij_uiv_8_card__exp-date {
  padding-left: 0.ij_uiv_8_25rem;
}

.ij_uiv_8_card__name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 6.ij_uiv_8_25rem;
}

.ij_uiv_8_card__vendor,
.ij_uiv_8_card__vendor:before,
.ij_uiv_8_card__vendor:after {
  position: absolute;
}

.ij_uiv_8_card__vendor {
  right: 0.ij_uiv_8_375rem;
  bottom: 0.ij_uiv_8_375rem;
  width: 2.ij_uiv_8_55rem;
  height: 1.ij_uiv_8_5rem;
}

.ij_uiv_8_card__vendor:before,
.ij_uiv_8_card__vendor:after {
  border-radius: 50%;
  content: "";
  display: block;
  top: 0;
  width: 1.ij_uiv_8_5rem;
  height: 1.ij_uiv_8_5rem;
}

.ij_uiv_8_card__vendor:before {
  background-color: #ij_uiv_8_e71d1a;
  left: 0;
}

.ij_uiv_8_card__vendor:after {
  background-color: #ij_uiv_8_fa5e03;
  box-shadow: -1.ij_uiv_8_05rem 0 0 #ij_uiv_8_f59d1a inset;
  right: 0;
}

.ij_uiv_8_card__vendor-sr {
  clip: rect(1px,1px,1px,1px);
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

.ij_uiv_8_card__texture {
  animation-name: texture;
  background-image: linear-gradient(-80deg,hsla(0,0%,100%,0.ij_uiv_8_3) 25%,hsla(0,0%,100%,0) 45%);
}
 
/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(var(--hue),10%,30%);
    --fg: hsl(var(--hue),10%,90%);
  }
}

/* Animation */
@keyframes rotate_500 {
  from,
    to {
    animation-timing-function: ease-in;
    box-shadow: 0 0 0 hsl(0,0%,80%),
            0.ij_uiv_8_1rem 0 0 hsl(0,0%,100%),
            -0.ij_uiv_8_2rem 0 0.ij_uiv_8_75rem 0 hsla(0,0%,0%,0.ij_uiv_8_3);
    transform: rotateY(-10deg);
  }

  25%,
    75% {
    animation-timing-function: ease-out;
    box-shadow: 0 0 0 hsl(0,0%,80%),
            0 0 0 hsl(0,0%,100%),
            -0.ij_uiv_8_25rem -0.ij_uiv_8_05rem 1rem 0.ij_uiv_8_15rem hsla(0,0%,0%,0.ij_uiv_8_3);
    transform: rotateY(0deg);
  }

  50% {
    animation-timing-function: ease-in;
    box-shadow: -0.ij_uiv_8_1rem 0 0 hsl(0,0%,80%),
            0 0 0 hsl(0,0%,100%),
            -0.ij_uiv_8_3rem -0.ij_uiv_8_1rem 1.ij_uiv_8_5rem 0.ij_uiv_8_3rem hsla(0,0%,0%,0.ij_uiv_8_3);
    transform: rotateY(10deg);
  }
}

@keyframes texture {
  from,
    to {
    transform: translate3d(0,0,0);
  }

  50% {
    transform: translate3d(-50%,0,0);
  }
}                
`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div className="ij_uiv_8_card">
<div className="ij_uiv_8_card__info">
    <div className="ij_uiv_8_card__logo">MasterCard</div>
    <div className="ij_uiv_8_card__chip">
        <svg className="ij_uiv_8_card__chip-lines" role="img" width="20px" height="20px" viewBox="0 0 100 100" aria-label="Chip">
            <g opacity="0.8">
                <polyline points="0,50 35,50" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="0,20 20,20 35,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="50,0 50,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="65,35 80,20 100,20" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="100,50 65,50" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="35,35 65,35 65,65 35,65 35,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="0,80 20,80 35,65" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="50,100 50,65" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="65,65 80,80 100,80" fill="none" stroke="#000" strokeWidth="2"></polyline>
            </g>
        </svg>
        <div className="ij_uiv_8_card__chip-texture"></div>
    </div>
      <div className="ij_uiv_8_card__type">debit</div>
      <div className="ij_uiv_8_card__number">
        <span className="ij_uiv_8_card__digit-group">0123</span>
        <span className="ij_uiv_8_card__digit-group">4567</span>
        <span className="ij_uiv_8_card__digit-group">8901</span>
        <span className="ij_uiv_8_card__digit-group">2345</span>
    </div>
      <div className="ij_uiv_8_card__valid-thru" aria-label="Valid thru">Valid<br />thru</div>
      <div className="ij_uiv_8_card__exp-date"><time datetime="2038-01">01/38</time></div>
      <div className="ij_uiv_8_card__name" aria-label="Dee Stroyer">Jk Huger</div>
      <div className="ij_uiv_8_card__vendor" role="img" aria-labelledby="card-vendor">
      <span id="card-vendor" className="ij_uiv_8_card__vendor-sr">Mastercard</span>
    </div>
<div className="ij_uiv_8_card__texture"></div>
        </div>
            </div>` }} />
    </div>
  );
};

// --- UivSeriesCard (Series Metadata Card - Source: Cards/Gaurav-WebDev_curly-lionfish-2.html) ---
export const UivSeriesCard: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_9_io by Gaurav-WebDev - Tags: card, hover effect, cool card */
.ij_uiv_9_card {
  width: 190px;
  height: 254px;
  background: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: #ij_uiv_9_333;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  transition: all 0.ij_uiv_9_7s ease-in-out;
  overflow: hidden;
}

.ij_uiv_9_card::before {
  content: "";
  position: absolute;
  height: 40%;
  width: 100%;
  background-color: #ij_uiv_9_088080;
  bottom: 0;
  right: 0;
  transform: translatey(70px);
  border-radius: 100%;
  transition: all 0.ij_uiv_9_7s ease-in-out;
}

.ij_uiv_9_c-txt {
  z-index: 2;
}

.ij_uiv_9_card:hover::before {
  transform: scale(7) translate(-20px);
}

.ij_uiv_9_card:hover {
  box-shadow: 1px -10px 500px 500px #ij_uiv_9_9fe4e44a;
  color: #ij_uiv_9_f3f3f3;
}

`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div className="ij_uiv_9_card">
  <p className="ij_uiv_9_c-txt">Hover Me</p>
</div>` }} />
    </div>
  );
};

// --- UivEditionCard (Limited Silver Gelatin Edition - Source: Cards/Yaya12085_hard-mole-83.html) ---
export const UivEditionCard: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_10_io by Yaya12085 - Tags: card */
.ij_uiv_10_card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.ij_uiv_10_75rem;
  background-color: white;
  width: 300px;
  height: 370px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.ij_uiv_10_1),
  0 2px 4px -2px rgba(0,0,0,.ij_uiv_10_1);
}

.ij_uiv_10_header {
  position: relative;
  background-clip: border-box;
  margin-top: 1.ij_uiv_10_5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.ij_uiv_10_75rem;
  background-color: rgb(33 150 243);
  box-shadow: 0 10px 15px -3px rgba(33,150,243,.ij_uiv_10_4),0 4px 6px -4px rgba(33,150,243,.ij_uiv_10_4);
  height: 14rem;
}

.ij_uiv_10_info {
  border: none;
  padding: 1.ij_uiv_10_5rem;
  text-align: center;
}

.ij_uiv_10_title {
  color: rgb(38 50 56);
  letter-spacing: 0;
  line-height: 1.ij_uiv_10_375;
  font-weight: 600;
  font-size: 1.ij_uiv_10_25rem;
  margin-bottom: 0.ij_uiv_10_5rem;
}

.ij_uiv_10_footer {
  padding: 0.ij_uiv_10_75rem;
  border: 1px solid rgb(236 239 241);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 140, 255, 0.ij_uiv_10_082);
}

.ij_uiv_10_tag {
  font-weight: 300;
  font-size: .ij_uiv_10_75rem;
  display: block;
}

.ij_uiv_10_action {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: none;
  outline: none;
  box-shadow: 0 4px 6px -1px rgba(33,150,243,.ij_uiv_10_4),0 2px 4px -2px rgba(33,150,243,.ij_uiv_10_4);
  color: rgb(255 255 255);
  text-transform: uppercase;
  font-weight: 700;
  font-size: .ij_uiv_10_75rem;
  padding: 0.ij_uiv_10_75rem 1.ij_uiv_10_5rem;
  background-color: rgb(33 150 243);
  border-radius: 0.ij_uiv_10_5rem;
}


`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div className="ij_uiv_10_card">
<div className="ij_uiv_10_header"></div>
<div className="ij_uiv_10_info">
  <p className="ij_uiv_10_title">How to make this material card ?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi. </p>
</div>
<div className="ij_uiv_10_footer">
  <p className="ij_uiv_10_tag">#HTML #CSS </p>
  <button type="button" className="ij_uiv_10_action">Get started </button>
</div>
</div>` }} />
    </div>
  );
};

// --- UivPlaqueCard (Gallery Wall Plaque - Source: Cards/AmIt-DasIT_quick-frog-32.html) ---
export const UivPlaqueCard: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_11_io by AmIt-DasIT - Tags: card */
.ij_uiv_11_card {
  width: 310px;
  height: 330px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  padding: 5px;
  color: white;
  z-index: 1030;
  transition: 0.ij_uiv_11_4s;
  overflow: hidden;
  position: relative;
  animation: shadow 3s linear infinite;
}

.ij_uiv_11_card::before {
  content: "";
  position: absolute;
  top: -27%;
  width: 550px;
  height: 550px;
  z-index: -1;
  background-image: conic-gradient(transparent, transparent, transparent, crimson);
  animation: rotate 3s linear infinite;
  /* animation-delay: 1.ij_uiv_11_5s; */
}

.ij_uiv_11_card::after {
  content: "";
  position: absolute;
  bottom: -30%;
  width: 550px;
  height: 550px;
  transform: rotate(180deg);
  background-image: conic-gradient(transparent, transparent, transparent, yellow);
  z-index: -1;
  animation: rotate1 3s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate1 {
  0% {
    transform: rotate(180deg);
  }

  0% {
    transform: rotate(-180deg);
  }
}

@keyframes shadow {
  0% {
    box-shadow: 6px 6px 15px rgba(255, 194, 80, 0.ij_uiv_11_25),
  -6px -6px 20px rgba(255, 0, 0, 0.ij_uiv_11_25);
  }

  50% {
    box-shadow: -6px -6px 15px rgba(255, 194, 80, 0.ij_uiv_11_25),
  6px 6px 20px rgba(255, 0, 0, 0.ij_uiv_11_25);
  }

  100% {
    box-shadow: 6px 6px 15px rgba(255, 194, 80, 0.ij_uiv_11_25),
  -6px -6px 20px rgba(255, 0, 0, 0.ij_uiv_11_25);
  }
}

.ij_uiv_11_card .ij_uiv_11_heading {
  font-size: 18px;
  font-weight: 800;
  background-size: 300% 300%;
  background-image: linear-gradient(to right, #ij_uiv_11_d52643, yellow, yellowgreen);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  z-index: 1000;
  animation: AnimateBG 4s ease infinite;
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.ij_uiv_11_card .ij_uiv_11_content {
  display: flex;
  width: 301px;
  height: 322px;
  border-radius: 15px;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: rgb(28, 28, 28);
  gap: 20px;
}

.ij_uiv_11_card .ij_uiv_11_content .ij_uiv_11_item {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 600;
  transition: 1s;
}

.ij_uiv_11_card .ij_uiv_11_content .ij_uiv_11_item:hover svg path {
  stroke: #ij_uiv_11_26d526
}

.ij_uiv_11_card .ij_uiv_11_content .ij_uiv_11_item:hover svg {
  animation: anima 2s;
}

@keyframes anima {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.ij_uiv_11_card .ij_uiv_11_content .ij_uiv_11_item--post:hover svg {
  animation: launch 2s;
}

@keyframes launch {
  0% {
    transform: translateX(0px);
  }

  10% {
    transform: translateY(20px);
  }

  75% {
    transform: translateY(-250px) rotate(10deg) translateX(20px);
    opacity: 0;
  }

  80% {
    transform: translateY(5px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.ij_uiv_11_card button {
  padding: 10px 30px;
  border-radius: 20px;
  font-size: 15px;
  z-index: 1000;
  border: none;
  font-weight: 600;
  background: linear-gradient(to right, #ij_uiv_11_26d526, yellow);
  cursor: pointer;
}

.ij_uiv_11_card button:hover {
  background: linear-gradient(to right, #ij_uiv_11_4bff4b, rgb(255, 255, 86));
}
`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div className="ij_uiv_11_card">
    <div className="ij_uiv_11_heading">Join the Open-Source <span>Galaxy</span></div>
    <div className="ij_uiv_11_content">
        <div className="item ij_uiv_11_item--create">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
            </svg>
            <span>Create</span>
        </div>
        <div className="ij_uiv_11_item ij_uiv_11_item--post">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M4.99958 12.9998C4.99958 7.91186 7.90222 3.56348 11.9996 1.81787C16.0969 3.56348 18.9996 7.91186 18.9996 12.9998C18.9996 13.8227 18.9236 14.6263 18.779 15.4026L20.7194 17.2352C20.8845 17.3911 20.9238 17.6388 20.815 17.8381L18.3196 22.4132C18.1873 22.6556 17.8836 22.7449 17.6412 22.6127C17.5993 22.5898 17.5608 22.5611 17.5271 22.5273L15.2925 20.2927C15.1049 20.1052 14.8506 19.9998 14.5854 19.9998H9.41379C9.14857 19.9998 8.89422 20.1052 8.70668 20.2927L6.47209 22.5273C6.27683 22.7226 5.96025 22.7226 5.76498 22.5273C5.73122 22.4935 5.70246 22.4551 5.67959 22.4132L3.18412 17.8381C3.07537 17.6388 3.11464 17.3911 3.27975 17.2352L5.22014 15.4026C5.07551 14.6263 4.99958 13.8227 4.99958 12.9998ZM6.47542 19.6955L7.29247 18.8785C7.85508 18.3159 8.61814 17.9998 9.41379 17.9998H14.5854C15.381 17.9998 16.1441 18.3159 16.7067 18.8785L17.5237 19.6955L18.5056 17.8954L17.4058 16.8566C16.9117 16.39 16.6884 15.7044 16.8128 15.0363C16.9366 14.3721 16.9996 13.691 16.9996 12.9998C16.9996 9.13025 15.0045 5.69953 11.9996 4.04021C8.99462 5.69953 6.99958 9.13025 6.99958 12.9998C6.99958 13.691 7.06255 14.3721 7.18631 15.0363C7.31078 15.7044 7.08746 16.39 6.59338 16.8566L5.49353 17.8954L6.47542 19.6955ZM11.9996 12.9998C10.895 12.9998 9.99958 12.1044 9.99958 10.9998C9.99958 9.89525 10.895 8.99982 11.9996 8.99982C13.1041 8.99982 13.9996 9.89525 13.9996 10.9998C13.9996 12.1044 13.1041 12.9998 11.9996 12.9998Z"></path>
            </svg>
            <span>Post</span>
        </div>
        <div className="item ij_uiv_11_item--inspire">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"></path>
            </svg>
            <span>Inspire</span>
        </div>
    </div>
    <button>Code to Infinity!</button>
</div>` }} />
    </div>
  );
};

// --- UivCollectorNameInput (Collector Full Name Input - Source: Inputs/Mhyar-nsi_selfish-parrot-52.html) ---
export const UivCollectorNameInput: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_12_io by Mhyar-nsi - Tags: input, ring */
.ij_uiv_12_input {
  font-family: monospace;
  max-width: 190px;
  outline: none;
  border: 1px solid #ij_uiv_12_dadada;
  padding: 10px;
  border-radius: 5px;
  background-color: #ij_uiv_12_f3f7fe;
  transition: .ij_uiv_12_3s;
  color: #ij_uiv_12_3b82f6;
}

.ij_uiv_12_input:focus {
  border: 1px solid #ij_uiv_12_3b82f6;
  box-shadow: 0 0 0 4px #ij_uiv_12_3b83f65f
}
`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<input placeholder="Type here..." className="ij_uiv_12_input" name="text" type="text" />` }} />
    </div>
  );
};

// --- UivCollectorEmailInput (Collector Email Input - Source: Inputs/guilhermeyohan_hot-termite-89.html) ---
export const UivCollectorEmailInput: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_13_io by guilhermeyohan - Tags: input */
.ij_uiv_13_input-form {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
}

.ij_uiv_13_input {
  border: solid 1.ij_uiv_13_9px #ij_uiv_13_9e9e9e;
  border-radius: 1.ij_uiv_13_3rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #ij_uiv_13_000000;
  transition: border 150ms cubic-bezier(0.ij_uiv_13_4,0,0.ij_uiv_13_2,1);
}

.ij_uiv_13_textUser {
  position: absolute;
  left: 15px;
  color: #ij_uiv_13_666666;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 150ms cubic-bezier(0.ij_uiv_13_4,0,0.ij_uiv_13_2,1);
}

.ij_uiv_13_input:focus, input:valid {
  outline: none;
  box-shadow: 1px 2px 5px rgba(133, 133, 133, 0.ij_uiv_13_523);
  background-image: linear-gradient(to top, rgba(182, 182, 182, 0.ij_uiv_13_199), rgba(252, 252, 252, 0));
  transition: background 4s ease-in-out;
}

.ij_uiv_13_input:focus ~ label, input:valid ~ label {
  transform: translateY(-95%) scale(0.ij_uiv_13_9);
  padding: 0 .ij_uiv_13_2em;
  color: #ij_uiv_13_000000be;
  left: 80px;
}

.ij_uiv_13_input:hover {
  border: solid 1.ij_uiv_13_9px #ij_uiv_13_000002;
  transform: scale(1.ij_uiv_13_03);
  box-shadow: 1px 1px 5px rgba(133, 133, 133, 0.ij_uiv_13_523);
  transition: border-color 1s ease-in-out;
}
`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div className="ij_uiv_13_input-form">
    <input className="ij_uiv_13_input" name="text" type="text" required="" />
    <label className="ij_uiv_13_textUser">Click Here</label>
  </div>` }} />
    </div>
  );
};

// --- UivCollectorPhoneInput (Collector Phone Input - Source: Inputs/JaydipPrajapati1910_bitter-octopus-23.html) ---
export const UivCollectorPhoneInput: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_14_io by JaydipPrajapati1910 - Tags: neumorphism, input */
.ij_uiv_14_input {
  max-width: 190px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #ij_uiv_14_555;
  padding: 15px 5px 10px 20px;
  box-shadow: inset 8px 8px 8px #ij_uiv_14_cbced1,
              inset -8px -8px 8px #ij_uiv_14_ffffff;
  border-radius: 25px;
}

.ij_uiv_14_input::placeholder {
  color: #ij_uiv_14_555;
  transition: all 0.ij_uiv_14_3s ease;
}

.ij_uiv_14_input:focus::placeholder {
  color: #ij_uiv_14_999;
}
`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<input placeholder="Username" type="text" name="text" className="ij_uiv_14_input" />` }} />
    </div>
  );
};

// --- UivZenOrbitLoader (Archival Sync Balance Loader - Source: loaders/JkHuger_dangerous-dolphin-42.html) ---
export const UivZenOrbitLoader: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_15_io by JkHuger - Tags: loader */
.ij_uiv_15_rocket {
  position: absolute;
  top: 20%;
  width: 80px;
  left: calc(50% - 40px);
}

.ij_uiv_15_rocket .ij_uiv_15_rocket-body {
  width: 80px;
  left: calc(50% - 50px);
  animation: bounce 0.ij_uiv_15_5s infinite;
}

.ij_uiv_15_rocket .ij_uiv_15_rocket-body .ij_uiv_15_body {
  background-color: #ij_uiv_15_dadada;
  height: 180px;
  left: calc(50% - 50px);
  border-top-right-radius: 100%;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top: 5px solid #ij_uiv_15_f5f5f5;
}

.ij_uiv_15_rocket .ij_uiv_15_rocket-body:before {
  content: '';
  position: absolute;
  left: calc(50% - 24px);
  width: 48px;
  height: 13px;
  background-color: #ij_uiv_15_554842;
  bottom: -13px;
  border-bottom-right-radius: 60%;
  border-bottom-left-radius: 60%;
}

.ij_uiv_15_rocket .ij_uiv_15_window {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #ij_uiv_15_a75248;
  left: calc(50% - 25px);
  top: 40px;
  border: 5px solid #ij_uiv_15_b4b2b2;
}

.ij_uiv_15_rocket .ij_uiv_15_fin {
  position: absolute;
  z-index: -100;
  height: 55px;
  width: 50px;
  background-color: #ij_uiv_15_a75248;
}

.ij_uiv_15_rocket .ij_uiv_15_fin-left {
  left: -30px;
  top: calc(100% - 55px);
  border-top-left-radius: 80%;
  border-bottom-left-radius: 20%;
}

.ij_uiv_15_rocket .ij_uiv_15_fin-right {
  right: -30px;
  top: calc(100% - 55px);
  border-top-right-radius: 80%;
  border-bottom-right-radius: 20%;
}

.ij_uiv_15_rocket .ij_uiv_15_exhaust-flame {
  position: absolute;
  top: 90%;
  width: 28px;
  background: linear-gradient(to bottom, transparent 10%, #ij_uiv_15_f5f5f5 100%);
  height: 150px;
  left: calc(50% - 14px);
  animation: exhaust 0.ij_uiv_15_2s infinite;
}

.ij_uiv_15_rocket .ij_uiv_15_exhaust-fumes li {
  width: 60px;
  height: 60px;
  background-color: #ij_uiv_15_f5f5f5;
  list-style: none;
  position: absolute;
  border-radius: 100%;
}

.ij_uiv_15_rocket .ij_uiv_15_exhaust-fumes li:first-child {
  width: 200px;
  height: 200px;
  bottom: -300px;
  animation: fumes 5s infinite;
}

.ij_uiv_15_rocket .ij_uiv_15_exhaust-fumes li:nth-child(2) {
  width: 150px;
  height: 150px;
  left: -120px;
  top: 260px;
  animation: fumes 3.ij_uiv_15_2s infinite;
}

.ij_uiv_15_rocket .ij_uiv_15_exhaust-fumes li:nth-child(3) {
  width: 120px;
  height: 120px;
  left: -40px;
  top: 330px;
  animation: fumes 3s 1s infinite;
}

.ij_uiv_15_rocket .ij_uiv_15_exhaust-fumes li:nth-child(4) {
  width: 100px;
  height: 100px;
  left: -170px;
  animation: fumes 4s 2s infinite;
  top: 380px;
}

.ij_uiv_15_rocket .ij_uiv_15_exhaust-fumes li:nth-child(5) {
  width: 130px;
  height: 130px;
  left: -120px;
  top: 350px;
  animation: fumes 5s infinite;
}

.ij_uiv_15_rocket .ij_uiv_15_exhaust-fumes li:nth-child(6) {
  width: 200px;
  height: 200px;
  left: -60px;
  top: 280px;
  animation: fumes2 10s infinite;
}

.ij_uiv_15_rocket .ij_uiv_15_exhaust-fumes li:nth-child(7) {
  width: 100px;
  height: 100px;
  left: -100px;
  top: 320px;
}

.ij_uiv_15_rocket .ij_uiv_15_exhaust-fumes li:nth-child(8) {
  width: 110px;
  height: 110px;
  left: 70px;
  top: 340px;
}

.ij_uiv_15_rocket .ij_uiv_15_exhaust-fumes li:nth-child(9) {
  width: 90px;
  height: 90px;
  left: 200px;
  top: 380px;
  animation: fumes 20s infinite;
}

.ij_uiv_15_star li {
  list-style: none;
  position: absolute;
}

.ij_uiv_15_star li:before, .ij_uiv_15_star li:after {
  content: '';
  position: absolute;
  background-color: #ij_uiv_15_f5f5f5;
}

.ij_uiv_15_star li:before {
  width: 10px;
  height: 2px;
  border-radius: 50%;
}

.ij_uiv_15_star li:after {
  height: 8px;
  width: 2px;
  left: 4px;
  top: -3px;
}

.ij_uiv_15_star li:first-child {
  top: -30px;
  left: -210px;
  animation: twinkle 0.ij_uiv_15_4s infinite;
}

.ij_uiv_15_star li:nth-child(2) {
  top: 0;
  left: 60px;
  animation: twinkle 0.ij_uiv_15_5s infinite;
}

.ij_uiv_15_star li:nth-child(2):before {
  height: 1px;
  width: 5px;
}

.ij_uiv_15_star li:nth-child(2):after {
  width: 1px;
  height: 5px;
  top: -2px;
  left: 2px;
}

.ij_uiv_15_star li:nth-child(3) {
  left: 120px;
  top: 220px;
  animation: twinkle 1s infinite;
}

.ij_uiv_15_star li:nth-child(4) {
  left: -100px;
  top: 200px;
  animation: twinkle 0.ij_uiv_15_5s ease infinite;
}

.ij_uiv_15_star li:nth-child(5) {
  left: 170px;
  top: 100px;
  animation: twinkle 0.ij_uiv_15_4s ease infinite;
}

.ij_uiv_15_star li:nth-child(6) {
  top: 87px;
  left: -79px;
  animation: twinkle 0.ij_uiv_15_2s infinite;
}

.ij_uiv_15_star li:nth-child(6):before {
  height: 1px;
  width: 5px;
}

.ij_uiv_15_star li:nth-child(6):after {
  width: 1px;
  height: 5px;
  top: -2px;
  left: 2px;
}

@keyframes fumes {
  50% {
    transform: scale(1.ij_uiv_15_5);
    background-color: transparent;
  }

  51% {
    transform: scale(0.ij_uiv_15_8);
  }

  100% {
    background-color: #ij_uiv_15_f5f5f5;
    transform: scale(1);
  }
}

@keyframes bounce {
  0% {
    transform: translate3d(0px, 0px, 0);
  }

  50% {
    transform: translate3d(0px, -4px, 0);
  }

  100% {
    transform: translate3d(0px, 0px, 0);
  }
}

@keyframes exhaust {
  0% {
    background: linear-gradient(to bottom, transparent 10%, #ij_uiv_15_f5f5f5 100%);
  }

  50% {
    background: linear-gradient(to bottom, transparent 8%, #ij_uiv_15_f5f5f5 100%);
  }

  75% {
    background: linear-gradient(to bottom, transparent 12%, #ij_uiv_15_f5f5f5 100%);
  }
}

@keyframes fumes2 {
  50% {
    transform: scale(1.ij_uiv_15_1);
  }
}

@keyframes twinkle {
  80% {
    transform: scale(1.ij_uiv_15_1);
    opacity: 0.ij_uiv_15_7;
  }
}
 
`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div className="ij_uiv_15_rocket">
    <div className="ij_uiv_15_rocket-ij_uiv_15_body">
      <div className="ij_uiv_15_body"></div>
      <div className="ij_uiv_15_fin ij_uiv_15_fin-left"></div>
      <div className="ij_uiv_15_fin ij_uiv_15_fin-right"></div>
      <div className="ij_uiv_15_window"></div>
    </div>
    <div className="ij_uiv_15_exhaust-flame"></div>
    <ul className="ij_uiv_15_exhaust-fumes">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul className="ij_uiv_15_star">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>` }} />
    </div>
  );
};

// --- UivEtherealLoader (Film Scan Progress Loader - Source: loaders/StealthWorm_pink-duck-62.html) ---
export const UivEtherealLoader: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_16_io by StealthWorm - Tags: loading, interstellar, black hole */
.ij_uiv_16_loader {
  display: flex;
  width: 8rem;
  height: 8rem;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
}

.ij_uiv_16_curve {
  width: 180%;
  height: 180%;
  position: absolute;
  animation: rotate 8s linear infinite;
  fill: transparent;
}

.ij_uiv_16_curve text {
  letter-spacing: 20px;
  text-transform: uppercase;
  font: 1.ij_uiv_16_5em "Fira Sans", sans-serif;
  fill: white;
  filter: drop-shadow(0 2px 8px black);
}

.ij_uiv_16_blackhole {
  z-index: -1;
  display: flex;
  position: absolute;
  width: 8rem;
  height: 8rem;
  align-items: center;
  justify-content: center;
}

.ij_uiv_16_blackhole-circle {
  z-index: 0;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at center, black 25%, white 35%, white 100%);
  box-shadow: 0px 0px 2rem #ij_uiv_16_c2babb;
  align-items: center;
  justify-content: center;
}

.ij_uiv_16_blackhole-circle::after {
  z-index: 0;
  position: absolute;
  content: "";
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid white;
  background: radial-gradient(circle at center, black 35%, white 60%, white 100%);
  box-shadow: 0px 0px 5rem #ij_uiv_16_c2babb;
  align-items: center;
  justify-content: center;
  filter: blur(4px);
  animation: pulseAnimation linear infinite 2s alternate-reverse;
}

.ij_uiv_16_blackhole-circle::before {
  z-index: 1;
  content: "";
  display: flex;
  width: 4rem;
  height: 4rem;
  border: 2px solid #ij_uiv_16_ffffff;
  box-shadow: 3px 3px 10px #ij_uiv_16_c2babb, inset 0 0 1rem #ij_uiv_16_ffffff;
  border-radius: 50%;
  top: 5rem;
  filter: blur(0.ij_uiv_16_5px);
  animation: rotate linear infinite 3s;
}

.ij_uiv_16_blackhole-disc {
  position: absolute;
  z-index: 0;
  display: flex;
  width: 5rem;
  height: 10rem;
  border-radius: 50%;
  background: radial-gradient(circle at center, #ij_uiv_16_ffffff 80%, #ij_uiv_16_353535 90%, white 100%);
  filter: blur(1rem) brightness(130%);
  border: 1rem solid white;
  box-shadow: 0px 0px 3rem #ij_uiv_16_d7c4be;
  transform: rotate3d(1, 1, 1, 220deg);
  animation: pulseAnimation2 linear infinite 2s alternate-reverse;
  justify-content: center;
  align-items: center;
}

.ij_uiv_16_blackhole-disc::before {
  content: "";
  position: absolute;
  z-index: 0;
  display: flex;
  width: 5rem;
  height: 10rem;
  border-radius: 50%;
  background: radial-gradient(circle at center, #ij_uiv_16_ffffff 80%, #ij_uiv_16_353535 90%, white 100%);
  filter: blur(3rem);
  border: 1rem solid white;
  box-shadow: 0px 0px 6rem #ij_uiv_16_d7c4be;
  animation: pulseAnimation linear infinite 2s alternate-reverse;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulseAnimation {
  0% {
    box-shadow: 0px 0px 3rem #ij_uiv_16_c2babb;
    transform: scale(1);
  }

  100% {
    box-shadow: 0px 0px 5rem #ij_uiv_16_c2babb;
    transform: scale(1.ij_uiv_16_09);
  }
}

@keyframes pulseAnimation2 {
  0% {
    box-shadow: 0px 0px 3rem #ij_uiv_16_c2babb;
    transform: rotate3d(1, 1, 1, 220deg) scale(1);
  }

  100% {
    box-shadow: 0px 0px 5rem #ij_uiv_16_c2babb;
    transform: rotate3d(1, 1, 1, 220deg)  scale(.ij_uiv_16_95);
  }
}

`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div className="ij_uiv_16_loader">
  <div className="ij_uiv_16_blackhole">
    <div className="ij_uiv_16_blackhole-circle"></div>
    <div className="ij_uiv_16_blackhole-disc"></div>
  </div>

  <div className="ij_uiv_16_curve">
    <svg viewBox="0 0 500 500">
      <path id="loading" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"></path>
      <text width="500">
        <textPath xlink:href="#loading">
          loading...
        </textPath>
      </text>
    </svg>
  </div>
</div>` }} />
    </div>
  );
};

// --- UivSubtleSpinLoader (Darkroom Exposure Loader - Source: loaders/terenceodonoghue_rare-cow-16.html) ---
export const UivSubtleSpinLoader: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_17_io by terenceodonoghue - Tags: loader */
.ij_uiv_17_container {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  height: 96px;
  width: 96px;
  animation: rotate_3922 1.ij_uiv_17_2s linear infinite;
  background-color: #ij_uiv_17_9b59b6;
  background-image: linear-gradient(#ij_uiv_17_9b59b6, #ij_uiv_17_84cdfa, #ij_uiv_17_5ad1cd);
}

.ij_uiv_17_container span {
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: #ij_uiv_17_9b59b6;
  background-image: linear-gradient(#ij_uiv_17_9b59b6, #ij_uiv_17_84cdfa, #ij_uiv_17_5ad1cd);
}

.ij_uiv_17_container span:nth-of-type(1) {
  filter: blur(5px);
}

.ij_uiv_17_container span:nth-of-type(2) {
  filter: blur(10px);
}

.ij_uiv_17_container span:nth-of-type(3) {
  filter: blur(25px);
}

.ij_uiv_17_container span:nth-of-type(4) {
  filter: blur(50px);
}

.ij_uiv_17_container::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: #ij_uiv_17_fff;
  border: solid 5px #ij_uiv_17_ffffff;
  border-radius: 50%;
}

@keyframes rotate_3922 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div className="ij_uiv_17_container">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>` }} />
    </div>
  );
};

// --- UivProvenanceTooltip (Artwork Provenance Tooltip - Source: Tooltips/themrsami_quick-zebra-71.html) ---
export const UivProvenanceTooltip: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
``
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div className="relative group inline-block">
  <div
    className="bg-white py-2 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 14"
      height="25"
      width="25"
    >
      <path
        fill="#FFA000"
        d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z"
      ></path>
      <path
        fill="#FFCA28"
        d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z"
      ></path>
    </svg>
    <p>Project Structure</p>
  </div>

  <div
    className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
  >
    <ul className="p-4 space-y-1">
      <li className="py-1">📁 src</li>
      <li className="pl-4 py-1">📁 app</li>
      <li className="pl-8 py-1">📄 layout.js</li>
      <li className="pl-8 py-1">📄 page.js</li>
      <li className="pl-4 py-1">📁 components</li>
      <li className="pl-8 py-1">📄 header.js</li>
      <li className="pl-8 py-1">📄 footer.js</li>
      <li className="pl-4 py-1">📁 styles</li>
      <li className="pl-8 py-1">📄 globals.css</li>
    </ul>
  </div>
</div>` }} />
    </div>
  );
};

// --- UivCoordTooltip (Geographic Coordinate Tooltip - Source: Tooltips/JhaveLang_strange-wasp-98.html) ---
export const UivCoordTooltip: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_19_io by JhaveLang  - Tags: simple, tooltip, animation */
/* This is an example, feel free to delete this code */
.ij_uiv_19_tooltip-container {
  --background: linear-gradient(45deg, #ij_uiv_19_22d3ee, #ij_uiv_19_1f9df5);
  position: relative;
  background: var(--background);
  cursor: pointer;
  transition: all 0.ij_uiv_19_2s;
  font-size: 17px;
  padding: 0.ij_uiv_19_7em 1.ij_uiv_19_8em;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.ij_uiv_19_1);
  color: #ij_uiv_19_fff;
}

.ij_uiv_19_tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) scale(0.ij_uiv_19_8);
  transform-origin: bottom;
  padding: 0.ij_uiv_19_3em 0.ij_uiv_19_6em;
  opacity: 0;
  pointer-events: none;
  transition: all 0.ij_uiv_19_3s;
  background: var(--background);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.ij_uiv_19_1);
}

.ij_uiv_19_tooltip::before {
  position: absolute;
  content: "";
  height: 0.ij_uiv_19_6em;
  width: 0.ij_uiv_19_6em;
  bottom: -0.ij_uiv_19_2em;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  background: var(--background);
}

.ij_uiv_19_tooltip-container:hover .ij_uiv_19_tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) scale(1);
}
.ij_uiv_19_tooltip-container:hover {
  transform: scale(0.ij_uiv_19_9);
}

`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div className="ij_uiv_19_tooltip-container">
  <span className="ij_uiv_19_tooltip">Uiverse.io</span>
  <span className="text">Tooltip</span>
</div>` }} />
    </div>
  );
};

// --- UivFramingCheckbox (Include Museum Glass Framing - Source: Checkboxes/JOBOYA_mean-dolphin-53.html) ---
export const UivFramingCheckbox: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_20_io by JOBOYA - Tags: checkbox */
.ij_uiv_20_checkbox {
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  color: #ij_uiv_20_666;
  line-height: 1.ij_uiv_20_5;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
  user-select: none;
}

.ij_uiv_20_checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.ij_uiv_20_checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  border: 2px solid #ij_uiv_20_666;
  border-radius: 5px;
  transition: all 0.ij_uiv_20_2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.ij_uiv_20_2);
}

.ij_uiv_20_checkbox:hover .ij_uiv_20_checkmark {
  transform: translateX(-20px) translateY(-2px) rotate(10deg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.ij_uiv_20_3);
}

.ij_uiv_20_checkbox input:checked ~ .ij_uiv_20_checkmark {
  background-color: #ij_uiv_20_666;
  border-color: #ij_uiv_20_666;
}

.ij_uiv_20_checkbox input:checked ~ .ij_uiv_20_checkmark:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 14px;
  border: solid #ij_uiv_20_fff;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -50%) rotate(45deg);
}

.ij_uiv_20_text {
  margin-left: 40px;
  display: inline-block;
  transition: all 0.ij_uiv_20_2s ease-in-out;
}

`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<label className="ij_uiv_20_checkbox">
  <input type="checkbox" />
  <span className="ij_uiv_20_checkmark"></span>
  <span className="ij_uiv_20_text">Agree</span>
</label>` }} />
    </div>
  );
};

// --- UivCertificateCheckbox (Signed Certificate of Authenticity - Source: Checkboxes/adamgiebl_proud-donkey-24.html) ---
export const UivCertificateCheckbox: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({ className = '', ...props }) => {
  return (
    <div className={"ij-uiv-wrapper inline-block " + className} {...props}>
      <style>{
`
/* From Uiverse.ij_uiv_21_io by adamgiebl - Tags: checkbox */
/* Hide the default checkbox */
.ij_uiv_21_container input {
 position: absolute;
 opacity: 0;
 cursor: pointer;
 height: 0;
 width: 0;
}

.ij_uiv_21_container {
 display: block;
 position: relative;
 cursor: pointer;
 font-size: 20px;
 user-select: none;
}

/* Create a custom checkbox */
.ij_uiv_21_checkmark {
 position: relative;
 top: 0;
 left: 0;
 height: 1.ij_uiv_21_3em;
 width: 1.ij_uiv_21_3em;
 background-color: #ij_uiv_21_ccc;
 transition: all 0.ij_uiv_21_3s;
 border-radius: 5px;
}

/* When the checkbox is checked, add a blue background */
.ij_uiv_21_container input:checked ~ .ij_uiv_21_checkmark {
 background-color: #ij_uiv_21_47da99;
 animation: pop 0.ij_uiv_21_5s;
 animation-direction: alternate;
}

/* Create the checkmark/indicator (hidden when not checked) */
.ij_uiv_21_checkmark:after {
 content: "";
 position: absolute;
 display: none;
}

/* Show the checkmark when checked */
.ij_uiv_21_container input:checked ~ .ij_uiv_21_checkmark:after {
 display: block;
}

/* Style the checkmark/indicator */
.ij_uiv_21_container .ij_uiv_21_checkmark:after {
 left: 0.ij_uiv_21_45em;
 top: 0.ij_uiv_21_25em;
 width: 0.ij_uiv_21_25em;
 height: 0.ij_uiv_21_5em;
 border: solid white;
 border-width: 0 0.ij_uiv_21_15em 0.ij_uiv_21_15em 0;
 transform: rotate(45deg);
}

@keyframes pop {
 0% {
  transform: scale(1);
 }

 50% {
  transform: scale(0.ij_uiv_21_9);
 }

 100% {
  transform: scale(1);
 }
}
`
}</style>
      <div dangerouslySetInnerHTML={{ __html: `<label className="ij_uiv_21_container">
  <input type="checkbox" checked="checked" />
  <div className="ij_uiv_21_checkmark"></div>
</label>` }} />
    </div>
  );
};
