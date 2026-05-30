/* ==========================================================================
   Parth Engineering Website Core Logic & Administrative Portal
   ========================================================================== */

// 1. DEFAULT catalog (7 premium heavy industrial products, featuring 5 actual photos)
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
    if (confirm("Are you sure you want to reset the catalog database? This will clear all custom added items and restore the default 7 engineering products.")) {
        STATE.products = [...DEFAULT_PRODUCTS];
        saveCatalog();
        renderProducts();
        renderAdminList();
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
