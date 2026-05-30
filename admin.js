/* ==========================================================================
   Parth Engineering - Administrative Catalog Dashboard Logic
   ========================================================================== */

const DEFAULT_PRODUCTS = [
    {
        id: "parth-radiator-orange",
        name: "Air-Cooled Finned Radiator (Orange)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Flagship",
        image: "assets/20200828_145056.jpg.jpeg",
        excerpt: "Industrial liquid-to-air cooling heat exchanger, protective rust-resistant orange coating and dual flanged connections.",
        description: "The Parth Air-Cooled Finned Radiator (Orange) represents our flagship thermal design. Sized for rigorous high-temperature process cooling in steel mills, energy plants, and fabrication workshops. Manufactured with heavy carbon steel structural mounting plates and painted in a highly durable safety orange finish, this radiator utilizes high-integrity copper tubes mechanically bonded to aluminum fins. Staggered multi-row tube depths maximize heat-transfer coefficients.",
        features: [
            "Heavy carbon steel plates protect against high shop vibrations",
            "Double-embossed fin mechanics ensure 100% metal-to-metal contact",
            "Dual flanged DN80 connection ports support high circulation volumes",
            "Anti-rust safety orange poly-enamel coating protects casing integrity",
            "Continuously hydro-tested at 1.5x working pressure for leak protection",
            "Accompanied by full ASME Section VIII thermal calculation datasheets"
        ],
        specifications: {
            "Tube Core Material": "Seamless Copper-Nickel (90/10 ratio)",
            "Fin Grid Material": "High-density corrugated Aluminum",
            "Working Pressure": "16 bar (Tested at 24 bar hydro)",
            "Flange Standards": "ANSI B16.5 / DIN 2576 (DN80 / 3\")",
            "Dimensions": "1200mm x 950mm x 450mm",
            "Dry Weight": "180 kg"
        }
    },
    {
        id: "parth-radiator-grey-mesh",
        name: "Process Finned Radiator (Grey Mesh)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Heavy Duty",
        image: "assets/20220819_173459.jpg.jpeg",
        excerpt: "Heavy-duty process cooler featuring carbon steel casing, robust black protective front mesh, and dual top flanged ports.",
        description: "The Parth Grey Mesh Radiator is custom engineered for dusty, demanding plant environments. Enclosed within a heavy-gauge steel casing finished in structural grey enamel, it features a heavy-duty black carbon steel protective wire mesh screen on the front face to protect the delicate aluminum fins from particulate impact and physical debris. Twin top-mounted ports allow easy air bleeding and fluid circulation.",
        features: [
            "Heavy-duty protective front wire mesh screen blocks debris impact",
            "Thick carbon steel casing finished in industrial grey paint",
            "Automatic fin collaring guarantees tight tube-to-fin mechanical bond",
            "Statically stress-tested to operate under continuous high flow pressures",
            "100% pneumatic leak tested at the factory before dispatch",
            "Engineered to match standard heavy-duty processing dimensions"
        ],
        specifications: {
            "Materials": "Carbon Steel Frame, Copper Core, Aluminum Fins",
            "Protection": "Heavy-Duty steel mesh faceplate",
            "Working Pressure": "12 bar (Pneumatic tested at 18 bar)",
            "Connections": "2x Top-mounted flanged connection necks",
            "Application": "Chemical processing, dust-prone factories",
            "Casing Paint": "High-durability structural grey enamel"
        }
    },
    {
        id: "parth-radiator-grey",
        name: "Finned Tube Process Cooler (Grey)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "New Design",
        image: "assets/20190818_111132.jpg.jpeg",
        excerpt: "Air-cooled finned tube heat exchanger in a standard grey finish with multiple side flanged nozzles.",
        description: "Built for clean liquid-to-air cooling loops, this finned radiator provides high-capacity heat dissipation inside a compact structural frame. The grey corrosion-resistant coating integrates cleanly into standard grey-themed industrial assembly bays. Outfitted with multiple flanged nozzles along the inlet header to allow versatile liquid bypass configurations.",
        features: [
            "Multiple side-flanged nozzles support convenient liquid bypass",
            "Vibration-isolated base brackets ensure stable workshop mounting",
            "High-dwell staggered copper tubes maximize thermal exchange surface",
            "Thick galvanized steel side panels support the core frame",
            "Corrosion-resistant grey polyurethane coating shields the exterior",
            "Designed in strict compliance with TEMA Class C guidelines"
        ],
        specifications: {
            "Internal Tubes": "Seamless copper heating tubes",
            "Fins Layout": "Dense Aluminum fins, mechanical collar expand",
            "Design Temperature": "Up to 150°C",
            "Hydrostatic Test": "Factory tested at 1.5x design pressure",
            "Nozzle Connections": "DN50 flanged bypass layout",
            "Casing Material": "14-gauge Hot-Dip Galvanized Casing"
        }
    },
    {
        id: "parth-shell-tube-raw",
        name: "High-Pressure Shell & Tube Exchanger",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Heavy Fab",
        image: "assets/20240812_165457.jpg.jpeg",
        excerpt: "High-capacity fluid process heat exchanger with a polished metallic shell and reinforced red structural flanges.",
        description: "The Raw Metallic Shell & Tube Heat Exchanger represents the peak of our high-pressure welding and fabrication capabilities. Pictured in its raw metallic finish inside our GIDC workshop before paint coating, this exchanger features heavy-wall carbon steel shell casing and thick red-painted circular locking flanges. Precision-drilled internal tube sheets house high-dwell copper-nickel tube bundles.",
        features: [
            "Thick boiler-grade carbon steel shell provides maximum strength",
            "Polished raw metallic steel finish showcases high welding integrity",
            "Reinforced red-painted circular locking flanges prevent joint leaks",
            "Precision internal tube sheets drill-tapered to prevent tube wear",
            "Spot-radiographed welding seams validate long operational lifecycles",
            "Designed in strict compliance with ASME Sec VIII Div 1 codes"
        ],
        specifications: {
            "Shell Casing Standard": "ASTM A53 Heavy-wall Carbon Steel",
            "Internal Tubes Bundle": "High-integrity Copper-Nickel (90/10)",
            "Weld Testing": "Nondestructive spot radiographic (RT) check",
            "Operating Pressure (Shell/Tube)": "20 bar / 16 bar",
            "Flange Bolts Pattern": "Multi-bolt heavy ANSI pattern",
            "Weight (Dry)": "220 kg"
        }
    },
    {
        id: "parth-oil-cooler",
        name: "Double-Pass Industrial Oil Cooler",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "TEMA Class C",
        image: "assets/20240722_164024.jpg.jpeg",
        excerpt: "Multi-pass shell and tube heat exchanger optimized for lube oil cooling and machinery heat extraction loops.",
        description: "Optimized for machine tool lubrication oil cooling and hydraulic heat dissipation. The Parth Double-Pass Oil Cooler utilizes a long-barrel shell design that routes cooling liquid across a multi-pass internal baffle array, ensuring high heat-transfer coefficients while keeping pressure drops to a minimum. Finished in structural grey paint.",
        features: [
            "Long-barrel multi-pass shell design guarantees high fluid contact",
            "Internal segment baffles induce turbulent oil flow for heat transfer",
            "Equipped with thick base support brackets for stable alignment",
            "Removable end bonnet covers allow direct cleaning of internal tubes",
            "Corrosion-resistant epoxy barrier applied to internal surfaces",
            "TEMA Class C standard compliant construction"
        ],
        specifications: {
            "Type": "Shell & Tube (Double-Pass layout)",
            "Shell Casing Paint": "Corrosion-resistant industrial grey coating",
            "Tube Core Material": "Seamless Copper-Nickel (C70600)",
            "Total Surface Area": "4.5 m²",
            "Operating Pressure": "Shell 20 bar / Tube 16 bar",
            "Standard Mountings": "Dual pre-drilled saddle plates"
        }
    },
    {
        id: "parth-utube-exchanger",
        name: "High-Capacity U-Tube Exchanger (Grey)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Custom Fab",
        image: "assets/20191002_135919.jpg.jpeg",
        excerpt: "Industrial double-pass shell and tube heat exchanger featuring a massive pre-fabricated flanged U-bend bypass header.",
        description: "The Parth High-Capacity U-Tube Exchanger is custom-fabricated for high-dwell heat absorption and intensive thermal condensation loops. Featuring a long-barrel carbon steel shell casing finished in our structural grey enamel, it integrates a prominent pre-fabricated flanged U-bend bypass header on top. This specialized double-pass header geometry forces turbulent fluid paths, maximizing mechanical contact times and temperature drops while minimizing internal pressure bottlenecks.",
        features: [
            "Robust top-mounted flanged U-bend bypass header routes dual-pass flows",
            "Long-barrel heavy-duty carbon steel shell casing painted in structural grey",
            "ASME Section VIII Div 1 compliant weld structures with spot radiography",
            "Copper-Nickel (90/10) core tube bundles resist heavy chemical scaling",
            "Vibration-dampened saddle mounting brackets for solid alignment safety",
            "Pneumatically factory leak-checked at 1.5x design pressure (24 bar hydro)"
        ],
        specifications: {
            "Layout Design": "ASME Shell & Tube (With external U-header bypass loop)",
            "Core Tube Metallurgy": "Seamless high-purity Copper-Nickel (C70600)",
            "Design Flow Pressure": "Shell 16 bar / Tube 20 bar",
            "Test Pressure (Hydro)": "24 bar hydrostatic testing certificate",
            "Flange Nozzles Spec": "ANSI B16.5 Standard DN50 RF nozzle joints",
            "Max Operating Temp": "Up to 180°C under continuous run"
        }
    },
    {
        id: "centrifugal-blower",
        name: "Centrifugal Air Blower Fan",
        category: "air-movement",
        price: "Custom Quote",
        badge: "Heavy Duty",
        image: "assets/IMG-20260408-WA0063.jpg.jpeg",
        excerpt: "High-volume centrifugal blower, featuring backward-curved steel impellers, safety-orange casing, and direct-coupled shafts.",
        description: "Engineered to deliver continuous air volumes against high static resistances. The Parth Centrifugal Blower Fan excels in industrial ventilation, dust extraction, and process combustion air supply. Outfitted with continuously welded scroll housing and dynamically balanced impellers to ensure G2.5 vibration-free running.",
        features: [
            "Thick continuously welded steel scroll casing for high durability",
            "Dynamically balanced backward-curved impellers (ISO G2.5 standard)",
            "Direct-coupled high-torque TEFC induction motors (IP55 enclosure)",
            "Heavy-duty oil-lubricated bearings with external grease points",
            "Rotatable casing design allows up to 8 discharge angles",
            "Optional spark-resistant construction for hazardous fumes"
        ],
        specifications: {
            "Volumetric Flow Rate": "4500 m³/hr (2650 CFM)",
            "Static Outlet Pressure": "3800 Pa (15.2 in. WG)",
            "Main Drive Motor": "15 kW (20 HP) 3-Phase induction TEFC",
            "Impeller Spec": "560mm Diameter, backward-curved high-grade steel",
            "Rotational Operating Speed": "2900 RPM",
            "Sound Level Rating": "78 dBA at 1.5 meters"
        }
    },
    {
        id: "pressure-vessel",
        name: "ASME Process Pressure Vessel",
        category: "fabrication",
        price: "Custom Quote",
        badge: "ASME U-Stamp",
        image: "assets/20221013_192116.jpg.jpeg",
        excerpt: "Custom carbon steel pressure vessel cylinder, certified for compressed air storage, chemical mixing, or high-pressure gas receiver loops.",
        description: "The ASME Process Pressure Vessel represents the peak of our steel fabrication capabilities. Fabricated by our certified welding team, these tanks are designed for compressed air containment, nitrogen receivers, or process buffer tanks. Fully spot-radiographed to ensure absolute weld joint integrity, and lined inside with an advanced anti-corrosion epoxy barrier.",
        features: [
            "Fully ASME Section VIII Division 1 compliant code construction",
            "Spot radiographed welding seams (RT-3) for structural validation",
            "Internal moisture-resistant epoxy coating to prevent interior rust",
            "Four reinforced flanged service nozzle ports with heavy nozzle necks",
            "Supplied with standard calibrated safety valve, pressure gauge, and drain",
            "Thick base mounting pads with anchoring holes for seismic stability"
        ],
        specifications: {
            "Total Fluid Volume": "1000 Liters (1.0 m³)",
            "Shell / Head Steel Thickness": "8mm / 10mm Boiler Plate Carbon Steel",
            "Max Allowable Pressure": "16 bar (Tested at 24 bar hydro)",
            "Code Stamping & Registry": "ASME 'U' Stamp / National Board Registered",
            "External Coating": "Anti-corrosion orange polyurethane coating",
            "Main Flanged Connections": "4x DN50 (2\") RF Flanges"
        }
    },
    {
        id: "parth-copper-condenser",
        name: "Copper Core Finned Radiator Bank",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "High Temp",
        image: "assets/20191002_135751.jpg.jpeg",
        excerpt: "High-density copper tube finned radiator core stack designed for alternator and heavy HT motor cooling.",
        description: "The Copper Core Finned Radiator Bank features dense seamless copper heating tubes mechanically expanded into corrugated aluminum fins to guarantee maximum thermal surface area contact. Designed for alternator housing, generators, and HT motor cooling systems.",
        features: [
            "Dense seamless copper core tubes prevent heat scaling",
            "Automatic mechanical tube expansion secures 100% core contact",
            "Rigid structural framing supports multi-row tube depths",
            "Standard high-volume flanged intake and bleed ports"
        ],
        specifications: {
            "Materials": "Copper core, Aluminum fins, Carbon Steel Frame",
            "Design Temp": "Up to 150°C",
            "Core Layout": "Multi-row staggered staggered tube grid",
            "Factory Test": "1.5x hydrostatic pressure testing"
        }
    },
    {
        id: "parth-green-condenser",
        name: "Sinnar Green Process Condenser",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Process Grade",
        image: "assets/20221013_193105.jpg.jpeg",
        excerpt: "Heavy-duty green process condenser stack custom fabricated for chemical, pharmaceutical, and distillery plants.",
        description: "The Sinnar Green Process Condenser represents a specialized chemical processing build. Finished in high-resistance green industrial protective primer to shield against continuous ambient moisture and corrosive vapours.",
        features: [
            "Corrosion-resistant green chemical safety barrier primer",
            "Heavy-wall carbon steel structural housing secures core bundle",
            "Dual-bolted inspection doors allow direct cleaning and access",
            "ASME Section VIII Div 1 weld compliance certified"
        ],
        specifications: {
            "Coating": "Chemical-resistance green poly-epoxy primer",
            "Weld Quality": "100% radiographically tested seams",
            "Application": "Chemical refinery, distillery processes",
            "Mounts": "Reinforced structural footings"
        }
    },
    {
        id: "parth-twin-exchangers",
        name: "Twin Process Shell & Tube Exchangers",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Parallel Flow",
        image: "assets/20230923_035410.jpg.jpeg",
        excerpt: "Twin industrial shell and tube heat exchangers designed for parallel flow lubrication oil loops.",
        description: "Specially designed to handle continuous processing bypass operations. The Twin Shell & Tube Exchangers operate in parallel, allowing plant operators to divert hot oil lines during maintenance without stopping turbine cycles.",
        features: [
            "Parallel double-barrel system supports continuous runtime",
            "Seamless copper-nickel internal tube core bundles",
            "Heavy circular locking flanges ensure zero-leak seals",
            "Dual bleeding and fluid bypass nozzles pre-welded"
        ],
        specifications: {
            "Design Type": "Parallel Double-Barrel Shell & Tube",
            "Operating Pressure": "Shell 20 bar / Tube 16 bar",
            "Standards": "ASME Section VIII Standards / TEMA Class C",
            "Dry Weight": "320 kg (Combined)"
        }
    },
    {
        id: "parth-triple-crane",
        name: "Triple-Stack Process Exchanger Bank",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Custom Build",
        image: "assets/20230923_035439.jpg.jpeg",
        excerpt: "Triple-stack linked process heat exchangers hanging on workshop crane prior to final hydrostatic testing.",
        description: "Representing our advanced multi-pass thermal engineering capability, the Triple-Stack Process Exchanger Bank links three high-pressure shell and tube exchangers vertically in series to maximize temperature drop spans.",
        features: [
            "Triple-link shell assembly maximizes dwell heat transfers",
            "ASME Section VIII Div 1 spot radiographed welding",
            "Heavy carbon steel mounting saddles pre-welded to shells",
            "Reinforced circular flanges prevent joint failures"
        ],
        specifications: {
            "Materials": "ASTM A53 Boiler-Grade Carbon Steel Shells",
            "Testing": "Factory hydro-tested at 24 bar (1.5x design pressure)",
            "Connections": "High-pressure ANSI flanged nozzle ports",
            "Weight": "480 kg"
        }
    },
    {
        id: "parth-red-double-box",
        name: "ASME Red Double-Box Exchanger",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Heavy Fab",
        image: "assets/20240329_183445.jpg.jpeg",
        excerpt: "Heavy-duty red-painted industrial double-box exchanger for steel mill heating loops.",
        description: "The Red Double-Box Heat Exchanger is specially fabricated for heavy-duty industrial steam loops in steel mills and paper processing plants. Features massive bolted header plates finished in high-heat industrial red primer.",
        features: [
            "Red circular structural backing flanges prevent gasket leaks",
            "High-dwell copper tube bundles mechanical-collar expanded",
            "Radiographed welding seams support extreme temperature cycles",
            "Advanced chemical oxide primer protects against ambient moisture"
        ],
        specifications: {
            "Shell Construction": "ASTM A36 Heavy Carbon Steel Plate Casing",
            "Design Temperature": "Up to 220°C operating temperature",
            "Weld Quality": "Spot radiographic weld inspection certified",
            "Flange Standards": "Heavy ANSI pattern multi-bolt flanges"
        }
    },
    {
        id: "parth-three-coolers",
        name: "Triple Finned Radiator Core Bank",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "New Launch",
        image: "assets/20240812_165507.jpg.jpeg",
        excerpt: "Bank of three industrial grey-finished process finned coolers standing in final assembly.",
        description: "The Triple Finned Radiator Bank is built to satisfy large-scale process plant cooling requirements. Stood upright in our Sinnar assembly bays, these units demonstrate our high-volume production capability.",
        features: [
            "Triple core layout supports parallel or serial installation",
            "High-density aluminum corrugated fin grid mechanics",
            "Thick galvanized carbon steel protective casing frame",
            "Factory hydro-tested to ensure zero operational leaks"
        ],
        specifications: {
            "Structure": "Carbon steel framing, seamless copper tubes",
            "Max Pressure": "16 bar continuous operating envelope",
            "Weld Class": "ISO 9001:2015 certified welding shop",
            "Paint Finish": "Corrosion-resistant grey polyurethane coating"
        }
    },
    {
        id: "parth-grey-process-cooler",
        name: "Finned Single-Pass Process Cooler",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Standard Build",
        image: "assets/20240812_165513.jpg.jpeg",
        excerpt: "Heavy-duty single-pass grey process cooler designed for clean liquid bypass loops.",
        description: "A compact single-pass process radiator designed for easy modular integration into clean liquid-to-air cooling systems. Features a solid-shell design painted in our flagship grey protective enamel.",
        features: [
            "Single-pass core routing minimizes internal fluid drag",
            "Staggered copper tube row grid maximizes air envelope contact",
            "Pre-drilled side mounting tabs support immediate installation",
            "Pneumatically tested at 1.5x working pressure"
        ],
        specifications: {
            "Tubes Material": "Seamless high-purity copper core",
            "Operating Pressure": "12 bar continuous rating",
            "Fluid Connections": "DN50 flanged bypass connection ports",
            "Casing Material": "14-gauge Hot-Dip Galvanized sheet metal casing"
        }
    },
    {
        id: "parth-rectangular-exchanger",
        name: "ASME Rectangular Header Exchanger",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "ASME Certified",
        image: "assets/20251119_174212.jpg.jpeg",
        excerpt: "ASME-certified rectangular header process exchanger with pre-installed flanged bypass piping.",
        description: "The ASME Rectangular Header Exchanger is engineered for high-pressure gas extraction loops. Outfitted with pre-welded flanged bypass piping for quick connection into process lines.",
        features: [
            "Heavy-plate rectangular header absorbs high pressure shocks",
            "Integrated pre-welded flanged bypass piping minimizes shop piping",
            "Radia-tested seamless copper-nickel core heating tube bundle",
            "Full structural grey protective coating defends against moisture"
        ],
        specifications: {
            "Header Design": "ASME-certified heavy-plate box header",
            "Flange Connections": "Dual DN40 flanged inlet/outlet bypass",
            "Operating Pressure": "16 bar design (24 bar hydro tested)",
            "Dry Weight": "210 kg"
        }
    }
];

// 2. Global State Variable
const STATE = {
    theme: 'dark',
    products: [] // Loaded dynamically from localStorage
};

// ==========================================================================
// Initialization & Event Binding
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadCatalog();
    renderAdminCatalog();
    setupAdminEventListeners();
});

// ==========================================================================
// Theme Management
// ==========================================================================

function initTheme() {
    const savedTheme = localStorage.getItem('parth-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        STATE.theme = savedTheme;
    } else {
        STATE.theme = systemPrefersDark ? 'dark' : 'light';
    }
    
    document.documentElement.setAttribute('data-theme', STATE.theme);
}

function toggleTheme() {
    STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', STATE.theme);
    localStorage.setItem('parth-theme', STATE.theme);
}

// ==========================================================================
// Catalog Database Sync (Local Storage)
// ==========================================================================

function loadCatalog() {
    const stored = localStorage.getItem('parth-catalog-products');
    if (stored) {
        try {
            STATE.products = JSON.parse(stored);
            
            // Auto-migrate old mock assets or missing new defaults to today's real high-resolution photographs
            const hasOldAssets = STATE.products.some(p => 
                p.image && (
                    p.image.includes('pressure_vessel.png') || 
                    p.image.includes('centrifugal_blower.png') || 
                    p.image.includes('industrial_radiator.jpg') ||
                    p.image.includes('radiator_mesh.jpg') ||
                    p.image.includes('radiator_grey.jpg') ||
                    p.image.includes('shell_exchanger_raw.jpg') ||
                    p.image.includes('oil_cooler_grey.jpg') ||
                    p.image.includes('oil_cooler_grey_portrait.jpg')
                )
            );
            
            const isMissingNewDefaults = !STATE.products.some(p => p.id === 'parth-three-coolers');
            
            if (hasOldAssets || isMissingNewDefaults) {
                console.log("Old mock assets or missing default products detected. Automatically migrating to today's real Sinnar workshop photos.");
                STATE.products = [...DEFAULT_PRODUCTS];
                saveCatalog();
            }
        } catch (e) {
            console.error("Failed to parse stored catalog, resetting.", e);
            STATE.products = [...DEFAULT_PRODUCTS];
            saveCatalog();
        }
    } else {
        STATE.products = [...DEFAULT_PRODUCTS];
        saveCatalog();
    }
}

function saveCatalog() {
    localStorage.setItem('parth-catalog-products', JSON.stringify(STATE.products));
}

function resetCatalogToDefault() {
    if (confirm("Are you sure you want to reset the catalog database? This will clear all custom added items and restore the default 16 engineering products.")) {
        STATE.products = [...DEFAULT_PRODUCTS];
        saveCatalog();
        renderAdminCatalog();
        alert("Catalog database has been successfully reset to defaults.");
    }
}

// ==========================================================================
// Catalog Admin Rendering & Listing Controller
// ==========================================================================

function renderAdminCatalog() {
    const listContainer = document.getElementById('admin-catalog-list');
    const countBadge = document.getElementById('product-count');
    if (!listContainer) return;
    
    // Update count indicator
    if (countBadge) {
        countBadge.textContent = `${STATE.products.length} Items`;
    }
    
    if (STATE.products.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
                <p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">Inventory is Empty</p>
                <p style="font-size: 0.9rem;">Add equipment using the left form or click Reset to restore defaults.</p>
            </div>
        `;
        return;
    }
    
    listContainer.innerHTML = STATE.products.map(prod => `
        <div class="dashboard-item">
            <div class="dashboard-item-meta">
                <img src="${prod.image}" alt="${prod.name}" onerror="this.src='assets/industrial_radiator.jpg';">
                <div>
                    <div class="dashboard-item-title">${prod.name}</div>
                    <div class="dashboard-item-cat">${prod.category.replace('-', ' ')}</div>
                </div>
            </div>
            <button class="btn-delete-item" onclick="deleteProductItem('${prod.id}')" title="Delete Product">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
        </div>
    `).join('');
}

window.deleteProductItem = function(productId) {
    const prod = STATE.products.find(p => p.id === productId);
    const prodName = prod ? prod.name : "this item";
    if (confirm(`Are you sure you want to delete "${prodName}" from the catalog?`)) {
        STATE.products = STATE.products.filter(p => p.id !== productId);
        saveCatalog();
        renderAdminCatalog();
    }
};

function handleAddProductSubmit(e) {
    e.preventDefault();
    const form = e.target;
    
    const name = form.querySelector('#prod-name').value.trim();
    const category = form.querySelector('#prod-category').value;
    const price = form.querySelector('#prod-price').value.trim() || "Custom Quote";
    const badge = form.querySelector('#prod-badge').value.trim();
    const image = form.querySelector('#prod-image').value.trim() || "assets/industrial_radiator.jpg";
    const excerpt = form.querySelector('#prod-excerpt').value.trim();
    const description = form.querySelector('#prod-desc').value.trim();
    
    const featuresRaw = form.querySelector('#prod-features').value.trim();
    const specsRaw = form.querySelector('#prod-specs').value.trim();
    
    if (!name || !excerpt || !description) {
        alert("Please fill in all core product information fields.");
        return;
    }
    
    // Parse key features (comma-separated or line-separated)
    const features = featuresRaw ? featuresRaw.split('\n').map(s => s.trim()).filter(Boolean) : [
        "Premium quality materials and manufacturing controls",
        "Factory hydro-tested at 1.5x working pressure",
        "Full documentation and spec data sheets provided"
    ];
    
    // Parse specifications (key: value pairs, line-separated)
    const specifications = {};
    if (specsRaw) {
        specsRaw.split('\n').forEach(line => {
            const parts = line.split(':');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const val = parts.slice(1).join(':').trim();
                if (key && val) {
                    specifications[key] = val;
                }
            }
        });
    }
    
    // Ensure default specifications if empty
    if (Object.keys(specifications).length === 0) {
        specifications["Materials"] = "Boiler Carbon Steel Casing, Copper Tubes";
        specifications["Working Pressure"] = "16 bar (Tested at 24 bar)";
        specifications["Design Standard"] = "ASME Section VIII Div 1";
    }
    
    // Generate unique ID
    const id = "custom-" + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Add product to list
    const newProduct = {
        id, name, category, price, badge, image, excerpt, description, features, specifications
    };
    
    STATE.products.push(newProduct);
    saveCatalog();
    renderAdminCatalog();
    
    // Success notification and reset
    alert(`Product "${name}" successfully added to the catalog!`);
    form.reset();
    
    // Reset preview thumbnail
    const imagePreview = document.getElementById('prod-image-preview');
    if (imagePreview) {
        imagePreview.style.backgroundImage = '';
        imagePreview.textContent = 'No Image';
    }
}

// ==========================================================================
// Event Listeners Binding
// ==========================================================================

function setupAdminEventListeners() {
    // Theme Switcher
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    
    // Admin Form Submit
    const adminForm = document.getElementById('admin-form');
    if (adminForm) {
        adminForm.addEventListener('submit', handleAddProductSubmit);
    }
    
    // Catalog Admin Reset Button
    const adminReset = document.getElementById('btn-admin-reset');
    if (adminReset) {
        adminReset.addEventListener('click', resetCatalogToDefault);
    }
    
    // Catalog Admin Image File Reader (Base64 conversion & preview)
    const imageFile = document.getElementById('prod-image-file');
    const imageText = document.getElementById('prod-image');
    const imagePreview = document.getElementById('prod-image-preview');
    
    if (imageFile && imageText && imagePreview) {
        imageFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert("Please select a valid image file.");
                    imageFile.value = '';
                    return;
                }
                if (file.size > 1.8 * 1024 * 1024) {
                    alert("This image is quite large. To prevent browser memory limits, we recommend using images smaller than 1.8MB.");
                }
                
                const reader = new FileReader();
                reader.onload = (event) => {
                    const dataUrl = event.target.result;
                    imageText.value = dataUrl;
                    imagePreview.style.backgroundImage = `url('${dataUrl}')`;
                    imagePreview.textContent = '';
                };
                reader.onerror = () => {
                    alert("Error reading file.");
                };
                reader.readAsDataURL(file);
            }
        });
        
        imageText.addEventListener('input', () => {
            const val = imageText.value.trim();
            if (val) {
                imagePreview.style.backgroundImage = `url('${val}')`;
                imagePreview.textContent = '';
            } else {
                imagePreview.style.backgroundImage = '';
                imagePreview.textContent = 'No Image';
            }
        });
    }
}
