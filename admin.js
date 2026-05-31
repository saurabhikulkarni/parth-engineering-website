/* ==========================================================================
   Parth Engineering - Administrative Catalog Dashboard Logic
   ========================================================================== */

const DEFAULT_PRODUCTS = [
    {
        id: "parth-radiator-orange",
        name: "CACW Heat Exchanger with Enclosure Shroud (Naval)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "CDA Approved",
        image: "assets/20200828_145056.jpg.jpeg",
        excerpt: "High-efficiency marine CACW cooler suitable for 800 kW to 2000 kW alternator systems on Indian Navy ships.",
        description: "Our CACW Heat Exchangers with enclosure shrouds are built to withstand rigorous naval conditions. Designed for 800 kW to 2000 kW alternators on Indian Navy ships under CDA guidelines. Heavy carbon steel enclosure sheets prevent vibration fatigue under continuous ship operations. Incorporates automatic mechanical tube expansions, high-dwelling copper-nickel cooling tubes, and sacrificial zinc anode plugs for total saltwater corrosion defense.",
        features: [
            "Suitable for 800 kW to 2000 kW marine alternators (CDA compliant)",
            "Heavy Carbon Steel (IS 2062) shroud enclosure (5mm to 10mm thickness)",
            "Integrated inspection doors, air inlet, and outlet duct openings",
            "Mounting frame precision-fabricated to match alternator top profile",
            "Torque expanded tube-to-tube sheet joints for robust leak protection",
            "Includes zinc anode plug for absolute saltwater corrosion defense"
        ],
        specifications: {
            "Enclosure / Shroud Material": "C.S. IS 2062 (5 mm to 10 mm thickness)",
            "Tube Core Material": "Seamless Copper-Nickel (Cu-Ni 90:10 / 70:30)",
            "Fin Grid Type": "Spiral grooved copper & wire wound type",
            "Tube Sheet Metallurgy": "SS316L (16 mm thickness)",
            "Headers & Nozzles": "SS316L with zinc anode plugs",
            "Hydrostatic Test": "Tested at 10 Bar (1.5x design pressure)"
        }
    },
    {
        id: "parth-radiator-grey-mesh",
        name: "Double Tube Type Heat Exchanger (Naval)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Marine Grade",
        image: "assets/20220819_173459.jpg.jpeg",
        excerpt: "Fail-safe double-tube heat exchanger for 250 kW to 2000 kW motors and alternators in marine environments.",
        description: "The Parth Double Tube Type Heat Exchanger is engineered specifically for 250 kW to 2000 kW naval motor and alternator systems (CDA compliant). Incorporates concentric inner and outer tubes to prevent oil-water contamination in critical marine setups. Features bullet expansion throughout the tube layout and torque-expanded tube sheets to secure joints.",
        features: [
            "Double-wall tube barrier prevents internal fluid cross-contamination",
            "Designed for 250 kW to 2000 kW motors & alternators (CDA)",
            "Concentric inner copper-nickel tube and outer copper tube system",
            "Mechanical bullet expansion throughout the entire tube length",
            "Torque expanded tube to tube sheet joints for secure locking",
            "Fully certified for third party inspection and material stamping"
        ],
        specifications: {
            "Inner Tube Material": "Seamless Copper-Nickel (Cu-Ni 90:10)",
            "Outer Tube Material": "Seamless Copper",
            "Fin Material": "High-dwell Copper fins",
            "Tube Sheet Material": "SS316L (12 mm / 16 mm thickness)",
            "Headers & Nozzles": "SS316L marine grade headers",
            "Hydrostatic Test": "Tested at 10 Bar pressure"
        }
    },
    {
        id: "parth-radiator-grey",
        name: "Air Cooler Radiator for Alternators & DG Sets",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "1.5 MW Max",
        image: "assets/20190818_111132.jpg.jpeg",
        excerpt: "Heavy-duty industrial air cooler/radiator suitable for 1.5 MT to 1.5 MW alternators and DG sets.",
        description: "Engineered for massive thermal dissipation in alternators, DG sets, and HT motors. Featuring openable type headers on both sides to allow direct tube cleaning, this radiator utilizes spiral crimped or wire wound copper and aluminum fins for maximum air contact efficiency.",
        features: [
            "Manufacturing capacity range suitable for 1.5 MT to 1.5 MW setups",
            "Openable headers on both sides for effortless mechanical tube cleaning",
            "Spiral crimped copper & aluminum or wire wound copper fins",
            "Staggered multi-row tube depths maximize heat-transfer coefficients",
            "Thick hot-dip galvanized side frames protect the core stack",
            "100% factory hydro-tested at 10 Bar working pressure"
        ],
        specifications: {
            "Tubes Metallurgy": "Copper, Cu-Ni (90:10 / 70:30), SS304 Seamless",
            "Tube Diameter": "1/2\" OD to 3/4\" OD",
            "Fin Grid Type": "Spiral crimped copper & aluminum, wire wound copper",
            "Headers Material": "C.S. IS 2062, SS304, SS316 (openable type)",
            "Tube Sheets": "Heavy carbon steel or stainless steel sheets",
            "Hydrostatic Test": "Tested at 10 Bar pressure"
        }
    },
    {
        id: "parth-shell-tube-raw",
        name: "ASME Shell & Tube Heat Exchanger",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Boiler Grade",
        image: "assets/20240812_165457.jpg.jpeg",
        excerpt: "High-pressure fluid process shell and tube heat exchanger for mill turbine and power plants.",
        description: "Designed for rigorous processing loops in sugar industries, distillery plants, steel mills, and power plants. This high-capacity shell and tube heat exchanger handles oil cooling, compressor cooling, or steam superheating. Utilizes torque expanded tube to tube plate joints inside a robust IS 2062 carbon steel shell.",
        features: [
            "Engineered in compliance with TEMA and ASME Section VIII guidelines",
            "Thick boiler-grade carbon steel shell casing for pressure durability",
            "Torque expanded tube-to-tube plate joints prevent high stress leaks",
            "Supports multi-pass routing on both shell and tube sides",
            "Available in fixed tube, floating head, or double tube layouts",
            "Vertical or horizontal mounting base configurations available"
        ],
        specifications: {
            "Tube Metallurgy": "Copper, Cu-Ni (90:10 / 70:30), SS304 (seamless)",
            "Shell & Headers": "Heavy Carbon Steel IS 2062",
            "Tube Sheets Material": "Carbon Steel IS 2062",
            "Operating Temperature": "Up to 200°C continuous duty",
            "Joint Construction": "Torque expanded tube sheets",
            "Hydrostatic Test": "Tested at 10 kg/cm² (approx. 10 Bar)"
        }
    },
    {
        id: "parth-oil-cooler",
        name: "Shell & Tube Turbine Lube Oil Cooler",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Turbine Class",
        image: "assets/20240722_164024.jpg.jpeg",
        excerpt: "Optimized oil cooler for mill turbines, power turbines, and furnace transformers.",
        description: "Built specifically to extract heat from turbine lube oil loops and furnace transformers. Utilizing heavy-gauge carbon steel shells and multi-pass internal baffles, this cooler routes oil across high-dwell copper or copper-nickel tube bundles, achieving maximum temperature drops with minimal pressure drops.",
        features: [
            "Ideal for mill turbines, power turbines, and furnace transformers",
            "Fixed tube or floating head type layouts for cleaning convenience",
            "Segmented internal baffles induce turbulent oil paths for cooling",
            "Multi-pass tube side layout maximize contact surface areas",
            "Finished in anti-corrosive polyurethane industrial primer",
            "Torque expanded tube-to-plate joints with 10 kg/cm² testing"
        ],
        specifications: {
            "Internal Tubes": "Seamless Copper, Cu-Ni (90:10), SS304",
            "Shell Casing Paint": "Industrial grey enamel barrier",
            "Mountings": "Dual pre-drilled carbon steel saddle brackets",
            "Operating Pressure": "Shell side 10 bar / Tube side 10 bar",
            "Flow Path": "Multi-pass flow configuration",
            "Hydrostatic Test": "Factory tested at 10 kg/cm²"
        }
    },
    {
        id: "parth-utube-exchanger",
        name: "Distillery Process Condenser & Reboiler",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Distillery Grade",
        image: "assets/20191002_135919.jpg.jpeg",
        excerpt: "High-dwell process condenser, chiller, and reboiler stack for distillery and chemical plants.",
        description: "Our Distillery Process Condensers, Chillers, and Reboilers represent premium chemical engineering. Customized with high-density copper or stainless steel tube bundles and heavy carbon steel IS 2062 frames, these units are designed to withstand corrosive ethanol, chemical vapors, and thermal shocks.",
        features: [
            "Custom engineered for distillery plants and chemical refineries",
            "Designed as high-capacity process condensations and reboiling loops",
            "Seamless copper-nickel or SS304 tubes resist chemical wear",
            "Equipped with thick base support brackets for stable alignment",
            "Spot-radiographed welds ensure absolute shell safety compliance",
            "Continuously tested at 10 kg/cm² for zero vapor leaks"
        ],
        specifications: {
            "MOC Shell & Headers": "Carbon Steel IS 2062 / SS304",
            "MOC Tube Bundle": "Seamless Copper-Nickel or SS304",
            "Layout Type": "ASME U-Tube or Fixed Tube Sheet layout",
            "Operating Pressure": "Shell 10 bar / Tube 10 bar",
            "Design Standards": "ASME Section VIII Div 1 & TEMA Class C",
            "Hydrostatic Test": "Tested at 10 kg/cm²"
        }
    },
    {
        id: "centrifugal-blower",
        name: "Centrifugal Hot Air Blower & Steam Heater",
        category: "air-movement",
        price: "Custom Quote",
        badge: "Sugar Industry",
        image: "assets/IMG-20260408-WA0063.jpg.jpeg",
        excerpt: "High-volume steam heater fin tube type blower fan, custom-engineered for sugar industry hoppers.",
        description: "Designed for continuous hot air supply to sugar hoppers and air heating processes. Combines a high-volume dynamically balanced centrifugal blower with an integrated steam heater fin tube core. Utilizes SS304 seamless tubes with GI spiral fins for excellent heat transmission.",
        features: [
            "High capacity ranges from 8000 m³/hr to 12,500 m³/hr",
            "Static outlet pressure handles 110 mm WG to 140 mm WG",
            "Direct-drive system powered by 5 HP to 10 HP TEFC motor",
            "SS304 seamless heating tubes with GI spiral fin wraps",
            "Dynamically balanced backward-curved impellers (ISO G2.5)",
            "Thick continuously welded scroll casing with orange safety paint"
        ],
        specifications: {
            "Volumetric Capacity": "8000 m³/hr to 12,500 m³/hr",
            "Static Pressure": "110 mm WG to 140 mm WG",
            "Drive Motor Spec": "5 HP to 10 HP / 1440 RPM direct-coupled",
            "Heating Fin Tubes": "SS304 seamless core with GI spiral fins",
            "Casing Material": "Thick continuously welded Carbon Steel",
            "Operating Temp": "Continuous steam cycles up to 180°C"
        }
    },
    {
        id: "pressure-vessel",
        name: "ASME Process Pressure Vessel",
        category: "fabrication",
        price: "Custom Quote",
        badge: "ASME U-Stamp",
        image: "assets/20221013_192116.jpg.jpeg",
        excerpt: "Heavy carbon steel pressure vessel cylinder, certified for compressed air storage, mixing, or gas receivers.",
        description: "Representing our elite welding and steel fabrication capabilities. Fabricated by certified engineers, these ASME process vessels handle high-pressure gas receivers, nitrogen buffers, or chemical mixing under Section VIII Boiler Code standards.",
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
        name: "Fin Tube Type Radiator for HT Motors",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "HT Motor Grade",
        image: "assets/20191002_135751.jpg.jpeg",
        excerpt: "High-density spiral grooved copper finned radiator core specifically designed for HT motor cooling.",
        description: "The Parth Fin Tube Type Radiator is engineered for large high-tension (HT) motors operating in power stations, steel mills, and cement industries. Outfitted with high-density spiral grooved copper core tubes mechanically expanded to eliminate air gaps, providing maximum heat transfer under high load operations.",
        features: [
            "Specifically designed for large high-tension (HT) motor cooling loops",
            "High-density spiral grooved copper or wire wound copper fins",
            "Seamless copper or copper-nickel core tubes resist thermal scale",
            "Rigid carbon steel side frame prevents mechanical deflection",
            "Supports multi-row tube depths to handle large oil or water flows",
            "Factory pressure tested at 1.5x working pressure for safety"
        ],
        specifications: {
            "Internal Core Tubes": "Seamless Copper or Cu-Ni (90:10)",
            "Fin Grid MOC": "Spiral grooved Copper / Wire wound Copper",
            "Operating Pressure": "12 Bar (Tested at 18 Bar hydro)",
            "Flanged Connections": "ANSI standard flanged inlet/outlet headers",
            "Casing Material": "Heavy galvanized structural carbon steel",
            "Design Temperature": "Continuous run up to 135°C"
        }
    },
    {
        id: "parth-green-condenser",
        name: "Chiller, Condenser & Reboiler (Chemical)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Chemical Grade",
        image: "assets/20221013_193105.jpg.jpeg",
        excerpt: "Process chillers, chemical condensers, and reboilers finished in anti-corrosive epoxy green coatings.",
        description: "Specialized chemical and pharmaceutical process chiller and reboiler stacks. Finished in high-resistance green industrial protective primer to shield against corrosive vapors, vaporized chemicals, and continuous ambient moisture.",
        features: [
            "Perfect for aggressive vapor chilling, condensing, and reboiling",
            "Heavy-duty green poly-epoxy primer resists corrosive chemicals",
            "Thick carbon steel IS 2062 shell houses custom alloy tube bundles",
            "Integrated inspection windows and vapor bypass flanged necks",
            "Spot-radiographed welds ensure absolute structural containment",
            "Tested continuously at 10 kg/cm² for zero vapor leaks"
        ],
        specifications: {
            "Shell Construction": "Carbon Steel IS 2062 / SS304",
            "Tubes Material": "SS304 / SS316 Seamless, Copper-Nickel",
            "Exterior Finish": "Corrosion-resistant poly-epoxy chemical primer",
            "Weld Inspection": "100% radiographic weld check certified",
            "Working Pressure": "10 kg/cm² operating threshold",
            "Standard Mounts": "Heavy saddle footings for stable refinery mounting"
        }
    },
    {
        id: "parth-twin-exchangers",
        name: "Twin Alternator Radiator CACW Bank",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Parallel Duty",
        image: "assets/20230923_035410.jpg.jpeg",
        excerpt: "Parallel twin CACW heat exchangers for 800 kW to 2000 kW alternators on naval ships.",
        description: "Designed for redundancy in marine power generation. The Twin Alternator Radiator CACW Bank links two high-capacity coolers in parallel, allowing continuous thermal regulation of naval alternators even during maintenance cycles.",
        features: [
            "Redundant parallel setup allows cleaning without alternator shutdown",
            "CACW shroud fits 800 kW to 2000 kW alternators (CDA compliant)",
            "Spiral grooved copper tubes torque-expanded to SS316L sheets",
            "Equipped with sacrificial zinc anodes on seawater headers",
            "Thick C.S. IS 2062 structural casings with inspection doors",
            "Double-pass flow paths guarantee optimal air cooling"
        ],
        specifications: {
            "Layout Setup": "Parallel linked double-shroud system",
            "Alternator Rating": "Sized for 800 kW to 2000 kW alternators",
            "Headers Metallurgy": "SS316L with zinc anode plugs",
            "Fins Metallurgy": "Spiral grooved copper & wire wound copper",
            "Design Code": "CDA Naval standards / ASME Section VIII",
            "Hydrostatic Test": "Tested at 10 Bar pressure"
        }
    },
    {
        id: "parth-triple-crane",
        name: "Multi-Pass Turbine Oil Cooler Stack",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Power Sector",
        image: "assets/20230923_035439.jpg.jpeg",
        excerpt: "Triple-stack series-linked lube oil coolers for mill turbines, power turbines & furnace transformers.",
        description: "Our advanced multi-pass thermal stack links three shell and tube oil coolers in series. Engineered for massive power turbines, mill drives, and furnace transformers, this system routes oil through continuous series-linked heat exchange stages to extract maximum heat.",
        features: [
            "Triple-stacked serial configuration maximizes oil temperature drops",
            "Excellent for heavy-duty mill turbines and furnace transformers",
            "Torque-expanded seamless copper or copper-nickel core tube bundles",
            "Independent flanged bypass allows individual barrel maintenance",
            "Spot-radiographed welds ensure pressure security under flow spikes",
            "TEMA Class C and ASME Section VIII compliant design"
        ],
        specifications: {
            "Layout Type": "ASME Shell & Tube (Triple series stack)",
            "Casing Shell Material": "Heavy Carbon Steel IS 2062",
            "Operating Pressure": "Shell side 10 bar / Tube side 10 bar",
            "Core Tubes Material": "Seamless Copper-Nickel (Cu-Ni 90:10 / 70:30)",
            "Test Pressure": "10 kg/cm² hydrostatic test certificate",
            "Weight": "480 kg combined dry weight"
        }
    },
    {
        id: "parth-red-double-box",
        name: "Centrifugal Machine Super Heater",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Sugar Industry",
        image: "assets/20240329_183445.jpg.jpeg",
        excerpt: "Heavy-duty steam-heated process super heater for centrifugal machines in sugar plants.",
        description: "The Centrifugal Machine Super Heater and Transient Heater represent robust processing loop solutions for sugar hoppers and centrifugal separation chambers. Heavy-wall carbon steel frames enclose seamless copper-nickel tube bundles.",
        features: [
            "Ideal for sugar centrifugals and high-dwell heating loops",
            "Heavy carbon steel IS 2062 headers and shell structures",
            "Seamless copper, copper-nickel, or SS304 torque expanded tubes",
            "High-temperature resistant oxide primer prevents corrosion",
            "Equipped with massive bolted header plates for safety",
            "Engineered in compliance with TEMA and ASME codes"
        ],
        specifications: {
            "Design Standard": "ASME Section VIII Div 1 Boiler Code",
            "Tube Metallurgy": "Seamless Copper, Cu-Ni (90:10), SS304",
            "Shell & Headers": "Carbon Steel IS 2062",
            "Hydrostatic Test": "Tested at 10 kg/cm²",
            "Design Temperature": "Up to 220°C steam pressure",
            "Connections": "Multi-bolt heavy flanged nozzles"
        }
    },
    {
        id: "parth-three-coolers",
        name: "Compressor Intercooler & Aftercooler Bank",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Compressed Air",
        image: "assets/20240812_165507.jpg.jpeg",
        excerpt: "High-efficiency intercooler and aftercooler radiator bank for multi-stage air compressors.",
        description: "Designed to handle compressed air heat extraction. Utilizing copper or copper-nickel core tubes mechanically expanded into aluminum or copper spiral fins, this radiator bank serves as the primary cooling stage between compressor cycles.",
        features: [
            "Perfect for heavy-duty multi-stage compressor air loops",
            "Aluminum or copper fins for sugar, steel, and power plants",
            "Spiral crimped or wire wound fins optimize thermal heat drop",
            "Openable headers on both sides for cleaning access",
            "Staggered multi-row core layout limits pressure bottlenecks",
            "100% hydrostatically leak checked at 10 Bar working pressure"
        ],
        specifications: {
            "Manufacturing Range": "Suitable for 1.5 MT to 1.5 MW compressors",
            "Tubes MOC": "Copper, Cu-Ni (90:10 / 70:30), SS304 seamless",
            "Fin Type": "Spiral crimped copper & aluminum, wire wound",
            "Header Material": "C.S. IS 2062, SS304, SS316 (openable headers)",
            "Operating Pressure": "10 Bar (150 PSI) continuous run",
            "Tube Size": "1/2\" OD to 3/4\" OD"
        }
    },
    {
        id: "parth-grey-process-cooler",
        name: "Centrifugal Machine Transient Heater",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Transient Heat",
        image: "assets/20240812_165513.jpg.jpeg",
        excerpt: "High-integrity transient steam heater, utilizing SS304 seamless tubes with GI spiral fins.",
        description: "Specialized transient steam heater for centrifugal separation and drying machines. Compact, heavy-duty single-pass core routing minimizes internal fluid drag while maximizing steam heat transfer.",
        features: [
            "Sized for centrifugal drying and transient steam heating",
            "SS304 seamless heating tubes with GI spiral fin wraps",
            "Heavy-wall carbon steel IS 2062 headers and frame casing",
            "Torque expanded tube-to-plate joints avoid gasket failures",
            "Anti-rust structural grey polyurethane paint shields casing",
            "Pneumatically factory leak-tested at 10 kg/cm² pressure"
        ],
        specifications: {
            "Core Heating Tubes": "SS304 seamless core",
            "Fin Material": "GI spiral fin wrapping",
            "Mountings": "Pre-drilled side anchoring brackets",
            "Operating Pressure": "Steam lines up to 10 kg/cm²",
            "Nozzles Spec": "ANSI flanged inlet/outlet bypass",
            "Joint Construction": "Torque expanded tube sheets"
        }
    },
    {
        id: "parth-rectangular-exchanger",
        name: "Heat Recovery Unit & Cooling Scrubber",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Sulphur Burner",
        image: "assets/20251119_174212.jpg.jpeg",
        excerpt: "Process heat recovery unit and cooling scrubber designed for industrial sulphur burners.",
        description: "Engineered specifically for sulphur burners in sugar mills and chemical plants. Our Heat Recovery Units and Cooling Scrubbers are built to capture extreme heat from combustion exhausts while resisting highly acidic sulphur byproducts.",
        features: [
            "Customized for sulphur burners in sugar & chemical plants",
            "High heat capture with integrated cooling gas scrubbers",
            "Corrosion-resistant alloys or SS316L internal core elements",
            "Heavy-plate box headers absorb massive thermal shocks",
            "Pre-installed flanged bypass piping for quick installation",
            "Weld structures checked via non-destructive spot radiography"
        ],
        specifications: {
            "MOC Core Tubes": "Seamless SS316L / Copper-Nickel alloy",
            "MOC Housing": "Heavy ASTM A36 / IS 2062 Carbon Steel",
            "Flow Pressure Design": "Shell 10 bar / Tube 10 bar",
            "Test Certification": "Factory hydro-tested at 10 Bar",
            "Operating Temperature": "Continuous hot flue gas exposure up to 350°C",
            "Flange Connections": "DN50 flanged bypass connection ports"
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
    const stored = localStorage.getItem('parth-catalog-products-v2');
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
    localStorage.setItem('parth-catalog-products-v2', JSON.stringify(STATE.products));
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
