/* ==========================================================================
   Parth Engineering Website Core Logic & Administrative Portal
   ========================================================================== */

// 1. DEFAULT catalog (16 premium heavy industrial products matching official brochure details)
const DEFAULT_PRODUCTS = [
    {
        id: "parth-radiator-orange",
        name: "CACW Heat Exchanger with Enclosure Shroud (Naval)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "CDA Approved",
        image: "assets/1780297226032.png",
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
        image: "assets/1780325884295.png",
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
        image: "assets/image_20da5ea3.png",
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
        image: "assets/image_22b7ebb.png",
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
        image: "assets/image_29f87786.png",
        excerpt: "Optimized oil cooler for mill turbines, power turbines, and furnace transformers.",
        description: "Built specifically to extract heat from turbine lube oil loops and furnace transformers. Utilizing heavy-gauge carbon steel shells and multi-pass internal baffles, this cooler routes oil across high-dwell copper or copper-nickel tube bundles, achieving maximum temperature drops with minimal pressure drops.",
        features: [
            "Ideal for mill turbines, power turbines, and furnace transformers",
            "Fixed tube or floating head type layouts for cleaning convenience",
            "Segmented internal baffles induce turbulent oil paths for cooling",
            "Multi-pass tube side layout maximizes contact surface areas",
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
        image: "assets/image_34ae1bf4.png",
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
        image: "assets/image_36f63ab2.png",
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
        image: "assets/image_41a633d1.png",
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
        image: "assets/image_4ec85615.png",
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
        image: "assets/image_590d638e.png",
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
        image: "assets/image_60ef3838.png",
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
        image: "assets/image_64f8b168.png",
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
        image: "assets/image_732d6ed8.png",
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
        image: "assets/image_88c13d.png",
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
        image: "assets/image_8d95e9f6.png",
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
        image: "assets/image_942ff17f.png",
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
    },
    {
        id: "parth-radiator-cda",
        name: "CACW Alternator Cooler (Model CACW-1200)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Marine Duty",
        image: "assets/image_98ec0437.png",
        excerpt: "Customized marine air cooler with heavy protective steel frame and Cu-Ni tubes.",
        description: "Specialized CACW marine alternator air cooler. Built to meet naval requirements, this heat exchanger handles high-capacity cooling for alternator frames while preventing thermal scale or saltwater corrosion in maritime environments.",
        features: [
            "Heavy IS 2062 carbon steel structural enclosing framework",
            "Concentric marine-duty copper-nickel tube bundles",
            "Automatic torque-expanded tube sheets prevent thermal scale leaks",
            "Staggered multi-row tube alignment optimizes heat transfer"
        ],
        specifications: {
            "Core Tubes MOC": "Seamless Copper-Nickel (Cu-Ni 90:10)",
            "Frames paint": "Polyurethane industrial grey paint",
            "Operating Pressure": "10 Bar max working threshold",
            "Seawater Headers": "Sacrificial zinc anode protection"
        }
    },
    {
        id: "parth-double-tube-var",
        name: "Marine Double Tube Heat Exchanger (Model DTHX-500)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Fail-Safe",
        image: "assets/image_a60a6044.png",
        excerpt: "Concentric double-wall marine heat exchanger with fail-safe leakage detection slots.",
        description: "Engineered specifically for heavy marine motors. Routes cooling water across concentric double-walled copper-nickel tube bundles, providing complete physical separation of process fluids and visual leak detection slots.",
        features: [
            "Concentric double-wall tube barrier avoids cross-contamination",
            "Visual leakage detection channels prevent internal scaling",
            "High-dwell copper fins optimize heat-transfer coefficients",
            "Bullet expanded tube-to-tube sheets for secure mounting"
        ],
        specifications: {
            "Inner Tube": "Seamless Copper-Nickel (Cu-Ni 90:10)",
            "Outer Tube": "Seamless Copper",
            "Design standards": "ASME Section VIII Div 1 & CDA Marine",
            "Hydrostatic Test": "Tested at 1.5x design pressure"
        }
    },
    {
        id: "parth-alternator-radiator-var",
        name: "Heavy-Duty Alternator Radiator (Model AR-1500)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "2.0 MW Ready",
        image: "assets/image_b34b4073.png",
        excerpt: "Large-capacity radiator core with openable headers, optimized for 2.0 MW DG Sets.",
        description: "Large industrial air cooler radiator. Designed for power generation loops, it features openable headers for mechanical tube cleaning and thick galvanized steel side frames to withstand continuous vibration.",
        features: [
            "Sized for continuous duty 1.5 MW to 2.0 MW power systems",
            "Openable headers on both sides allow direct tube cleaning",
            "Staggered copper fin wraps maximize heat-transfer surface area",
            "Galvanized side frameworks protect core stack integrity"
        ],
        specifications: {
            "Heating Tubes": "Seamless Copper or SS304 core",
            "Headers material": "Heavy-duty Carbon Steel (openable type)",
            "Working Pressure": "10 Bar (Tested at 15 Bar hydro)",
            "Flange connections": "DN80 standard flanged bypass inlet/outlet"
        }
    },
    {
        id: "parth-ht-radiator-var",
        name: "ASME Finned HT Motor Radiator (Model HTR-800)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "High-Tension",
        image: "assets/image_b9ad94 (1).png",
        excerpt: "High-density copper finned radiator, optimized for large high-tension motor cooling loops.",
        description: "Heavy-duty HT motor cooling radiator core. Built to handle scale-free heat dissipation in steel mills and chemical refineries, this core uses mechanically expanded copper fin tubes to ensure optimal heat conductivity.",
        features: [
            "Designed for large high-tension (HT) motor oil and water loops",
            "Staggered fin tube alignment improves thermal performance",
            "Mechanical expansion ensures zero core air-gaps for conduction",
            "Rigid carbon steel side frame prevents structural warping"
        ],
        specifications: {
            "Core Tubes": "Seamless Copper / Cu-Ni (90:10)",
            "Fin Grid Wrap": "Spiral grooved copper / Wire wound copper",
            "Operating Temp": "Continuous run times up to 135°C",
            "Hydrostatic Test": "Factory tested at 18 Bar"
        }
    },
    {
        id: "parth-shell-condenser-var",
        name: "High-Pressure Shell & Tube Condenser (Model STC-150)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "TEMA Class C",
        image: "assets/image_beb7e65c.png",
        excerpt: "Multi-pass fluid process shell and tube heat exchanger for turbine steam and oil cooling.",
        description: "Process shell and tube condenser. Designed in compliance with TEMA Class C guidelines, this multi-pass heat exchanger handles high-capacity steam condensation and turbine oil cooling in heavy processing plants.",
        features: [
            "Complies with ASME Section VIII and TEMA design standards",
            "Thick boiler-grade carbon steel shell casing for pressure containment",
            "Torque-expanded tube-to-tube plate joints avoid fluid leaks",
            "Multi-pass design maximizes heat transfer surface area"
        ],
        specifications: {
            "Shell & Headers": "Carbon Steel IS 2062",
            "Tube bundle MOC": "Seamless Copper / Cu-Ni (90:10 / 70:30)",
            "Joint Construction": "Torque expanded tube sheets",
            "Hydrostatic Test": "Tested at 10 kg/cm²"
        }
    },
    {
        id: "parth-distillery-reboiler-var",
        name: "Process Reboiler Stack (Model PRB-300)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "U-Tube Type",
        image: "assets/image_c3593ce2.png",
        excerpt: "High-capacity reboiler stack with U-Tube bundle, customized for distilleries.",
        description: "Heavy distillery process reboiler. Features a removable ASME U-tube bundle layout for easy mechanical cleaning, and a spot-radiographed shell casing built to withstand aggressive ethanol and chemical vapors.",
        features: [
            "Removable U-tube bundle layout allows complete cleaning access",
            "Spot-radiographed shell welds certify structural integrity",
            "Alloy tube elements resist continuous corrosion",
            "Heavy-duty saddle footings simplify stable floor mounting"
        ],
        specifications: {
            "Bundle Layout": "ASME U-Tube design TEMA Class C",
            "Tubes Metallurgy": "Seamless SS304 or SS316L",
            "Shell Casing": "Boiler plate Carbon Steel IS 2062",
            "Working Pressure": "10 kg/cm² operating threshold"
        }
    },
    {
        id: "parth-centrifugal-blower-var",
        name: "Centrifugal Air Blower (Model CAB-100)",
        category: "air-movement",
        price: "Custom Quote",
        badge: "Direct Drive",
        image: "assets/image_ce0ebd40.png",
        excerpt: "Direct-drive centrifugal blower with SS304 steam heating fin tubes, sized for sugar hoppers.",
        description: "Industrial hot air supply blower. Combines a dynamically balanced scroll impeller with a steam heater core, providing continuous hot air flow to dry products in sugar and food processing plants.",
        features: [
            "Volumetric air capacity ranges from 8000 to 12500 m³/hr",
            "Direct-drive design powered by 7.5 HP / 1440 RPM TEFC motor",
            "SS304 heating core tubes with helical GI spiral fins",
            "Impellers dynamically balanced to ISO G2.5 for vibration-free runtimes"
        ],
        specifications: {
            "Static Pressure": "110 mm WG to 140 mm WG",
            "Motor Power": "7.5 HP direct-coupled motor",
            "Heating fin tubes": "SS304 seamless with GI spiral fins",
            "Scroll Housing": "Continuously welded Carbon Steel plate"
        }
    },
    {
        id: "parth-pressure-vessel-var",
        name: "ASME Compressed Air Buffer Vessel (Model AV-1000)",
        category: "fabrication",
        price: "Custom Quote",
        badge: "RT-3 Inspected",
        image: "assets/image_e1f25d3d.png",
        excerpt: "High-pressure carbon steel buffer tank with internal rust-resistant epoxy lining.",
        description: "ASME code compressed air buffer receiver. Fabricated using high-strength boiler plate carbon steel, this vessel is designed for compressed air storage, nitrogen buffering, or gas mixing under high pressure.",
        features: [
            "ASME Section VIII Div 1 Boiler Code compliant construction",
            "Weld seams 100% checked via spot radiography (RT-3)",
            "Moisture-resistant internal epoxy coating prevents interior rust",
            "Four reinforced flanged service ports with heavy gaskets"
        ],
        specifications: {
            "Volume capacity": "1000 Liters (1.0 m³)",
            "Shell Plate MOC": "Boiler grade Carbon Steel (8mm / 10mm thickness)",
            "Max working pressure": "16 Bar (Factory hydro-tested at 24 Bar)",
            "Connections": "4x DN50 (2\") RF Flanges"
        }
    },
    {
        id: "parth-turbine-cooler-var",
        name: "Turbine Lube Oil Cooler (Model OCS-400)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Multi-Pass",
        image: "assets/image_ee27cfdc.png",
        excerpt: "Series-linked shell & tube lube oil cooler stack, optimized for power turbines.",
        description: "Heavy turbine lube oil cooler barrel. Designed to lower the temperatures of high-velocity oil loops in mill turbines and furnace transformers, this barrel uses internal baffles to create highly turbulent, efficient flow cycles.",
        features: [
            "Fixed tube or floating head layouts for custom configurations",
            "Segmented internal baffles create turbulent flow for heat removal",
            "Finished in protective grey polyurethane anti-corrosive primer",
            "Torque-expanded joints assure zero water-in-oil leakages"
        ],
        specifications: {
            "Internal Tubes MOC": "Seamless Copper-Nickel (Cu-Ni 90:10)",
            "Shell Casing": "Heavy Carbon Steel IS 2062 barrel",
            "Working Pressure": "10 Bar shell / 10 Bar tube side",
            "Hydrostatic Test": "Tested at 10 kg/cm²"
        }
    },
    {
        id: "parth-sulphur-scrubber-var",
        name: "Sulphur Scrubber & HRU (Model HRU-500)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Alloy Core",
        image: "assets/image_f2140cc9 (1).png",
        excerpt: "Corrosion-resistant heat recovery unit and flue-gas scrubber for sulphur burners.",
        description: "Process heat recovery unit. Sized specifically to capture flue gas heat from chemical sulphur burners, this unit uses SS316L tubes and box headers to resist highly acidic and hot combustion gases.",
        features: [
            "Designed for sulphur burning exhausts in sugar and chemical plants",
            "Stainless steel SS316L core elements resist continuous acid scaling",
            "Heavy-plate structural headers absorb extreme thermal shocks",
            "Spot-radiographed weld joints ensure pressure safety"
        ],
        specifications: {
            "Core Tubes MOC": "Seamless SS316L / Copper-Nickel alloy",
            "Operating Temp": "Handles hot flue gas streams up to 350°C",
            "Casing Metallurgy": "Heavy ASTM A36 / IS 2062 Carbon Steel",
            "Hydrostatic Test": "Factory tested at 10 Bar pressure"
        }
    },
    {
        id: "parth-sulphur-scrubber-var-2",
        name: "Sulphur Scrubber & HRU (Model HRU-500A)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Alloy Core",
        image: "assets/image_f2140cc9.png",
        excerpt: "Corrosion-resistant heat recovery unit and flue-gas scrubber for sulphur burners.",
        description: "Process heat recovery unit. Sized specifically to capture flue gas heat from chemical sulphur burners, this unit uses SS316L tubes and box headers to resist highly acidic and hot combustion gases.",
        features: [
            "Designed for sulphur burning exhausts in sugar and chemical plants",
            "Stainless steel SS316L core elements resist continuous acid scaling",
            "Heavy-plate structural headers absorb extreme thermal shocks",
            "Spot-radiographed weld joints ensure pressure safety"
        ],
        specifications: {
            "Core Tubes MOC": "Seamless SS316L / Copper-Nickel alloy",
            "Operating Temp": "Handles hot flue gas streams up to 350°C",
            "Casing Metallurgy": "Heavy ASTM A36 / IS 2062 Carbon Steel",
            "Hydrostatic Test": "Factory tested at 10 Bar pressure"
        }
    },
    {
        id: "parth-sulphur-scrubber-var-3",
        name: "Sulphur Scrubber & HRU (Model HRU-500B)",
        category: "heat-transfer",
        price: "Custom Quote",
        badge: "Alloy Core",
        image: "assets/image_f2140cc9 (2).png",
        excerpt: "Corrosion-resistant heat recovery unit and flue-gas scrubber for sulphur burners.",
        description: "Process heat recovery unit. Sized specifically to capture flue gas heat from chemical sulphur burners, this unit uses SS316L tubes and box headers to resist highly acidic and hot combustion gases.",
        features: [
            "Designed for sulphur burning exhausts in sugar and chemical plants",
            "Stainless steel SS316L core elements resist continuous acid scaling",
            "Heavy-plate structural headers absorb extreme thermal shocks",
            "Spot-radiographed weld joints ensure pressure safety"
        ],
        specifications: {
            "Core Tubes MOC": "Seamless SS316L / Copper-Nickel alloy",
            "Operating Temp": "Handles hot flue gas streams up to 350°C",
            "Casing Metallurgy": "Heavy ASTM A36 / IS 2062 Carbon Steel",
            "Hydrostatic Test": "Factory tested at 10 Bar pressure"
        }
    }
];

// 2. Global State Variable
const STATE = {
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'default',
    theme: 'dark',
    products: [] // Loaded dynamically from localStorage
};

// ==========================================================================
// Initialization & Event Binding
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadCatalog();
    renderProducts();
    setupEventListeners();
    setupHeaderScroll();
    initScrollAnimations();
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
    const stored = localStorage.getItem('parth-catalog-products-v4');
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
            
            const isMissingNewDefaults = !STATE.products.some(p => p.id === 'parth-sulphur-scrubber-var-3');
            
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
    localStorage.setItem('parth-catalog-products-v4', JSON.stringify(STATE.products));
}

function resetCatalogToDefault() {
    if (confirm("Are you sure you want to reset the catalog database? This will clear all custom added items and restore the default 28 engineering products.")) {
        STATE.products = [...DEFAULT_PRODUCTS];
        saveCatalog();
        renderProducts();
        alert("Catalog database has been successfully reset to defaults.");
    }
}

// ==========================================================================
// Product Rendering & Filtering Logic
// ==========================================================================

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    // Filter Products
    let filtered = STATE.products.filter(prod => {
        const matchesCategory = STATE.activeCategory === 'all' || prod.category === STATE.activeCategory;
        const matchesSearch = prod.name.toLowerCase().includes(STATE.searchQuery) ||
                             prod.excerpt.toLowerCase().includes(STATE.searchQuery) ||
                             prod.category.toLowerCase().includes(STATE.searchQuery);
        return matchesCategory && matchesSearch;
    });
    
    // Sort Products
    if (STATE.sortBy === 'name-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    // Check if empty
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <h3>No Engineering Products Found</h3>
                <p>We couldn't find any products matching "${STATE.searchQuery}". Try a different search term or category.</p>
            </div>
        `;
        return;
    }
    
    // Render Cards
    grid.innerHTML = filtered.map(prod => `
        <article class="product-card glass" onclick="openProductModal('${prod.id}')">
            <div class="product-image-container">
                ${prod.badge ? `<span class="badge product-card-badge">${prod.badge}</span>` : ''}
                <img src="${prod.image}" alt="${prod.name}" class="product-card-img" loading="lazy">
            </div>
            <div class="product-card-info">
                <span class="product-card-category">${prod.category.replace('-', ' ')}</span>
                <h3 class="product-card-title">${prod.name}</h3>
                <p class="product-card-excerpt">${prod.excerpt}</p>
                <div class="product-card-footer">
                    <span class="product-card-price">${prod.price}</span>
                    <button class="view-btn">
                        <span>Details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

// ==========================================================================
// Modal Product Details Handlers
// ==========================================================================

window.openProductModal = function(productId) {
    const prod = STATE.products.find(p => p.id === productId);
    if (!prod) return;
    
    const backdrop = document.getElementById('modal-backdrop');
    if (!backdrop) return;
    
    // Fill basic details
    document.getElementById('modal-img').src = prod.image;
    document.getElementById('modal-img').alt = prod.name;
    document.getElementById('modal-category').textContent = prod.category.replace('-', ' ');
    document.getElementById('modal-title').textContent = prod.name;
    document.getElementById('modal-price').textContent = prod.price;
    document.getElementById('modal-description').textContent = prod.description;
    
    // Fill tabs content
    const featuresList = document.getElementById('modal-features-list');
    featuresList.innerHTML = prod.features.map(feat => `
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${feat}</span>
        </li>
    `).join('');
    
    const specsList = document.getElementById('modal-specs-list');
    specsList.innerHTML = Object.entries(prod.specifications).map(([key, val]) => `
        <li>
            <span class="spec-name">${key}</span>
            <span class="spec-val">${val}</span>
        </li>
    `).join('');
    
    // Reset tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.querySelector('.tab-btn[data-tab="features"]').classList.add('active');
    document.getElementById('tab-features').classList.add('active');
    
    // Disable background scrolling
    document.body.style.overflow = 'hidden';
    
    // Open modal
    backdrop.classList.add('open');
};

window.closeProductModal = function() {
    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) {
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
    }
};

function handleTabClick(e) {
    const tabName = e.target.getAttribute('data-tab');
    if (!tabName) return;
    
    // Deactivate all
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    // Activate clicked
    e.target.classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');
}



// ==========================================================================
// Event Listeners & Scroll Utilities
// ==========================================================================

function setupEventListeners() {
    // Theme Switcher
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    
    // Category selection
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            e.target.classList.add('active');
            STATE.activeCategory = e.target.getAttribute('data-category');
            renderProducts();
        });
    });
    
    // Search input
    const searchInput = document.getElementById('search-products');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            STATE.searchQuery = e.target.value.toLowerCase().trim();
            renderProducts();
        });
    }
    
    // Sort dropdown
    const sortSelect = document.getElementById('sort-products');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            STATE.sortBy = e.target.value;
            renderProducts();
        });
    }
    
    // Details Modal Close clicking outside
    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) {
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
                closeProductModal();
            }
        });
    }
    
    // Details Modal Close Button
    const modalClose = document.getElementById('modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeProductModal);
    }
    
    // Details Modal Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', handleTabClick);
    });
    

    
    // Mobile Drawer Navigation Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navBar = document.getElementById('main-nav');
    if (menuBtn && navBar) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navBar.classList.toggle('active');
        });
        
        navBar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navBar.classList.remove('active');
            });
        });
    }
    
    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Newsletter Form Handler
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

function setupHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ==========================================================================
// Contact Form & Newsletter Submissions
// ==========================================================================

function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('.btn[type="submit"]');
    if (!submitBtn) return;
    
    const originalText = submitBtn.innerHTML;
    
    // Basic Form validation
    const name = form.querySelector('#contact-name').value.trim();
    const email = form.querySelector('#contact-email').value.trim();
    const subject = form.querySelector('#contact-subject').value.trim();
    const message = form.querySelector('#contact-message').value.trim();
    
    if (!name || !email || !subject || !message) {
        alert("Please fill in all the required fields.");
        return;
    }
    
    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    // Professional success visual state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <svg class="animate-spin" style="width:18px;height:18px;margin-right:8px;stroke:#fff;animation:spin 1s linear infinite" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" stroke-width="4"></circle>
            <path stroke="#fff" stroke-width="4" stroke-linecap="round" d="M4 12a8 8 0 018-8"></path>
        </svg>
        <span>Submitting Quote Request...</span>
    `;
    
    // Add temporary CSS spin animation
    const style = document.createElement('style');
    style.id = 'temp-spin-css';
    style.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
    document.head.appendChild(style);
    
    setTimeout(() => {
        // Success state
        submitBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Quote Inquiry Sent!</span>
        `;
        submitBtn.style.background = '#059669'; // Success green background
        
        // Reset form inputs
        form.reset();
        
        // Restore button after 3 seconds
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            submitBtn.innerHTML = originalText;
            const tempSpin = document.getElementById('temp-spin-css');
            if (tempSpin) tempSpin.remove();
        }, 3500);
        
    }, 1800); // Simulate network latency
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const emailInput = form.querySelector('.form-input');
    const submitBtn = form.querySelector('.btn');
    if (!emailInput || !submitBtn) return;
    
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `...`;
    
    setTimeout(() => {
        submitBtn.innerHTML = `✓`;
        submitBtn.style.background = '#059669';
        emailInput.value = '';
        emailInput.placeholder = "Thank you for subscribing!";
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            submitBtn.innerHTML = originalText;
            emailInput.placeholder = "Enter your email";
        }, 3000);
    }, 1000);
}

// ==========================================================================
// Brochure PDF Generation & Dynamic Script Loading
// ==========================================================================

window.downloadBrochurePDF = function(event) {
    if (event) event.preventDefault();
    
    const heroBtn = document.getElementById('hero-download-brochure');
    const previewBtn = document.getElementById('btn-download-brochure');
    
    const setBtnState = (loading, text) => {
        [heroBtn, previewBtn].forEach(btn => {
            if (!btn) return;
            btn.disabled = loading;
            const textSpan = btn.querySelector('span');
            if (textSpan) textSpan.textContent = text;
        });
    };
    
    const generatePDF = () => {
        setBtnState(true, "Compiling PDF...");
        
        const element = document.getElementById('brochure-print-template');
        if (!element) {
            alert("Brochure print template not found!");
            setBtnState(false, "Download Brochure");
            return;
        }
        
        const opt = {
            margin: 0,
            filename: 'Parth_Engineering_Brochure.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                useCORS: true, 
                letterRendering: true,
                logging: false
            },
            jsPDF: { unit: 'px', format: [1120, 792], orientation: 'landscape' },
            pagebreak: { mode: 'css' }
        };
        
        html2pdf().set(opt).from(element).save().then(() => {
            setBtnState(false, "Download Brochure");
            
            const successAlert = document.createElement('div');
            successAlert.style.position = 'fixed';
            successAlert.style.bottom = '20px';
            successAlert.style.right = '20px';
            successAlert.style.background = '#059669';
            successAlert.style.color = '#ffffff';
            successAlert.style.padding = '12px 24px';
            successAlert.style.borderRadius = '8px';
            successAlert.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
            successAlert.style.zIndex = '9999';
            successAlert.style.fontFamily = "'Outfit', sans-serif";
            successAlert.style.fontSize = '0.9rem';
            successAlert.style.fontWeight = '600';
            successAlert.style.display = 'flex';
            successAlert.style.alignItems = 'center';
            successAlert.style.gap = '8px';
            successAlert.style.animation = 'slideIn 0.3s ease-out';
            successAlert.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Brochure Downloaded!</span>
            `;
            
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes slideIn {
                    from { transform: translateY(100px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(successAlert);
            setTimeout(() => {
                successAlert.remove();
                style.remove();
            }, 4000);
        }).catch(err => {
            console.error("PDF generation failed:", err);
            alert("Failed to generate PDF brochure. Please try again.");
            setBtnState(false, "Download Brochure");
        });
    };
    
    if (typeof html2pdf === 'undefined') {
        setBtnState(true, "Loading PDF Engine...");
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        script.crossOrigin = 'anonymous';
        script.onload = () => {
            generatePDF();
        };
        script.onerror = () => {
            alert("Could not load the PDF engine. Check your connection.");
            setBtnState(false, "Download Brochure");
        };
        document.head.appendChild(script);
    } else {
        generatePDF();
    }
};

// ==========================================================================
// Premium UI/UX Animation & Interaction Logic
// ==========================================================================

function initScrollAnimations() {
    // 1. Scroll-Reveal Animation Engine (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.12 // Trigger when 12% of the element is visible
        };
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Once revealed, no need to observe again
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('revealed'));
    }

    // 2. Scroll Progress Indicator and Back-to-Top Button Handler
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        // Calculate scroll progress percentage
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        if (scrollHeight > 0) {
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            if (progressBar) {
                progressBar.style.width = scrollPercentage + '%';
            }
        }

        // Toggle back-to-top button visibility
        if (backToTopBtn) {
            if (scrollTop > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    // 3. Back-to-Top Click Event
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

