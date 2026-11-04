import os
import re

files_to_convert = [
    ("Buttons", "andrew-demchenk0_yellow-otter-87.html", "UivGalleryBtn", "Exhibition Explore Button"),
    ("Buttons", "vinodjangid07_average-pig-54.html", "UivPrintBtn", "Acquire Fine-Art Print"),
    ("Buttons", "VassoD_smooth-earwig-8.html", "UivCatalogBtn", "Download Monograph PDF"),
    ("Buttons", "satyamchaudharydev_great-seahorse-44.html", "UivInquireBtn", "Private Viewing Request"),
    ("Toggle-switches", "gharsh11032000_brave-pug-20.html", "UivContrastToggle", "Curatorial Contrast Toggle"),
    ("Toggle-switches", "Javierrocadev_proud-goat-59.html", "UivAudioToggle", "Contemplative Audio Ambience"),
    ("Toggle-switches", "BurgiSimon_breezy-donkey-2.html", "UivSeriesToggle", "Series 04 / Archive Switch"),
    ("Toggle-switches", "ercnersoy_evil-eel-92.html", "UivCurrencyToggle", "Currency USD/EUR/GBP"),
    ("Cards", "JkHuger_spotty-swan-68.html", "UivArtworkCard", "Museum Matting Artwork Card"),
    ("Cards", "Gaurav-WebDev_curly-lionfish-2.html", "UivSeriesCard", "Series Metadata Card"),
    ("Cards", "Yaya12085_hard-mole-83.html", "UivEditionCard", "Limited Silver Gelatin Edition"),
    ("Cards", "AmIt-DasIT_quick-frog-32.html", "UivPlaqueCard", "Gallery Wall Plaque"),
    ("Inputs", "Mhyar-nsi_selfish-parrot-52.html", "UivCollectorNameInput", "Collector Full Name Input"),
    ("Inputs", "guilhermeyohan_hot-termite-89.html", "UivCollectorEmailInput", "Collector Email Input"),
    ("Inputs", "JaydipPrajapati1910_bitter-octopus-23.html", "UivCollectorPhoneInput", "Collector Phone Input"),
    ("loaders", "JkHuger_dangerous-dolphin-42.html", "UivZenOrbitLoader", "Archival Sync Balance Loader"),
    ("loaders", "StealthWorm_pink-duck-62.html", "UivEtherealLoader", "Film Scan Progress Loader"),
    ("loaders", "terenceodonoghue_rare-cow-16.html", "UivSubtleSpinLoader", "Darkroom Exposure Loader"),
    ("Tooltips", "themrsami_quick-zebra-71.html", "UivProvenanceTooltip", "Artwork Provenance Tooltip"),
    ("Tooltips", "JhaveLang_strange-wasp-98.html", "UivCoordTooltip", "Geographic Coordinate Tooltip"),
    ("Checkboxes", "JOBOYA_mean-dolphin-53.html", "UivFramingCheckbox", "Include Museum Glass Framing"),
    ("Checkboxes", "adamgiebl_proud-donkey-24.html", "UivCertificateCheckbox", "Signed Certificate of Authenticity")
]

base_dir = "/root/Evolução Inteligente/arsenal/uiverse-galaxy"
out_dir = "/root/Evolução Inteligente/inner-journey-flagship/src/components"
os.makedirs(out_dir, exist_ok=True)
out_path = os.path.join(out_dir, "uiverse-collection.tsx")

output = [
    'import React from "react";\n',
    '// 22 Real Uiverse Components curated for SHADOW / VISUAL ARCHIVE: The Inner Journey\n'
]

for idx, (cat, fname, comp_name, desc) in enumerate(files_to_convert):
    fpath = os.path.join(base_dir, cat, fname)
    if not os.path.exists(fpath):
        print(f"Warning: {fpath} not found!")
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
    css = style_match.group(1) if style_match else ""
    html = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL).strip()

    prefix = f"ij_uiv_{idx}_"
    # Find all class names in CSS and replace them
    classes = sorted(list(set(re.findall(r'\.([a-zA-Z0-9_\-]+)', css))), key=lambda x: -len(x))
    for c in classes:
        css = re.sub(r'\.' + re.escape(c) + r'(?=[^a-zA-Z0-9_\-]|$)', '.' + prefix + c, css)
        html = re.sub(r'class="([^"]*)\b' + re.escape(c) + r'\b([^"]*)"', r'class="\1' + prefix + c + r'\2"', html)
        html = re.sub(r"class='([^']*)\b" + re.escape(c) + r"\b([^']*)'", r"class='\1" + prefix + c + r"\2'", html)

    # Scoped IDs
    ids = sorted(list(set(re.findall(r'#([a-zA-Z0-9_\-]+)', css))), key=lambda x: -len(x))
    for id_val in ids:
        css = re.sub(r'#' + re.escape(id_val) + r'(?=[^a-zA-Z0-9_\-]|$)', '#' + prefix + id_val, css)
        html = re.sub(r'id="([^"]*)\b' + re.escape(id_val) + r'\b([^"]*)"', r'id="\1' + prefix + id_val + r'\2"', html)
        html = re.sub(r'for="([^"]*)\b' + re.escape(id_val) + r'\b([^"]*)"', r'for="\1' + prefix + id_val + r'\2"', html)

    html = html.replace('class=', 'className=')
    html = html.replace('for=', 'htmlFor=')
    html = re.sub(r'<input([^>]*)(?<!/)>', r'<input\1 />', html)
    html = re.sub(r'<img([^>]*)(?<!/)>', r'<img\1 />', html)
    html = re.sub(r'<br(?:\s*)>', r'<br />', html)
    html = re.sub(r'<hr(?:\s*)>', r'<hr />', html)
    html = html.replace('stroke-width=', 'strokeWidth=')
    html = html.replace('stroke-linecap=', 'strokeLinecap=')
    html = html.replace('stroke-linejoin=', 'strokeLinejoin=')
    html = html.replace('fill-rule=', 'fillRule=')
    html = html.replace('clip-rule=', 'clipRule=')
    html = html.replace('tabindex=', 'tabIndex=')
    html = html.replace('viewbox=', 'viewBox=')
    html = html.replace('stop-color=', 'stopColor=')

    html = re.sub(r'<!--.*?-->', '', html, flags=re.DOTALL).strip()
    escaped_html = html.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    escaped_css = css.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

    comp_code = (
        f"// --- {comp_name} ({desc} - Source: {cat}/{fname}) ---\n"
        f"export const {comp_name}: React.FC<React.HTMLAttributes<HTMLDivElement> & Record<string, any>> = ({{ className = '', ...props }}) => {{\n"
        f"  return (\n"
        f"    <div className={{\"ij-uiv-wrapper inline-block \" + className}} {{...props}}>\n"
        f"      <style>{{\n`{escaped_css}`\n}}</style>\n"
        f"      <div dangerouslySetInnerHTML={{{{ __html: `{escaped_html}` }}}} />\n"
        f"    </div>\n"
        f"  );\n"
        f"}};\n"
    )
    output.append(comp_code)

with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(output))

print(f"SUCCESS: Generated {len(files_to_convert)} Uiverse components in {out_path}!")
