/* ============================================================
   GARI BAZAR BD — Car Inventory Data & Filtering Logic
   ============================================================ */

const carInventory = [
  {
    id: 1,
    brand: "Toyota",
    model: "Crown Royal Saloon G",
    bengaliName: "টোয়োটা ক্রাউন রয়্যাল সেলুন জি",
    year: 2018,
    price: "৳ ৫৪,০০,০০০",
    priceNum: 5400000,
    fuel: "Hybrid",
    transmission: "Automatic",
    cc: "2500",
    mileage: "24,000 km",
    color: "Prestige Black",
    condition: "Reconditioned",
    badge: "Premium",
    grade: "5.0 / S (Pristine)",
    bodyType: "Sedan",
    image: "images/car_toyota_crown.png",
    description: "The ultimate symbol of prestige, sophistication, and executive comfort. This Toyota Crown Royal Saloon G offers unparalleled passenger luxury, whisper-quiet cabin acoustics, and a silky smooth drive powered by a 2.5L hybrid drivetrain.",
    features: [
      "Premium Beige Leather Interior",
      "Adaptive Variable Suspension",
      "Pre-Collision Safety",
      "Rear Power Reclining Seats",
      "Soft Touch Close Doors",
      "Premium 10-Speaker Audio",
      "Ventilated Seats",
      "Keyless Entry & Push Start",
      "Power Trunk",
      "Multi-zone Climate Control",
      "Lane Departure Warning",
      "Blind Spot Monitor"
    ]
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Corolla Cross Hybrid GT",
    bengaliName: "টোয়োটা করোলা ক্রস হাইব্রিড জিটি",
    year: 2021,
    price: "৳ ৪৩,৫০,০০০",
    priceNum: 4350000,
    fuel: "Hybrid",
    transmission: "CVT",
    cc: "1800",
    mileage: "12,500 km",
    color: "Crimson Red Metallic",
    condition: "Reconditioned",
    badge: "New Arrival",
    badgeClass: "new",
    grade: "4.5 / A",
    bodyType: "SUV",
    image: "images/car_corolla_cross.png",
    description: "The Toyota Corolla Cross Hybrid is the perfect combination of dynamic styling, extreme fuel efficiency, and state-of-the-art safety. With its 1.8L hybrid engine, it can deliver mileage up to 25-30 km per liter under ideal ECO driving conditions.",
    features: [
      "Toyota Safety Sense 2.0",
      "Panoramic Glass Roof",
      "Power Leather Seats",
      "360-Degree Camera",
      "Dual Zone Auto AC",
      "LED Projector Beam Lamps",
      "18-inch Alloy Wheels",
      "Pre-collision System",
      "Lane Trace Assist",
      "Auto High Beam",
      "7 Airbags"
    ]
  },
  {
    id: 3,
    brand: "Toyota",
    model: "Allion A15 G-Plus",
    bengaliName: "টোয়োটা অ্যালিয়ন এ১৫ জি-প্লাস",
    year: 2020,
    price: "৳ ৩৮,০০,০০০",
    priceNum: 3800000,
    fuel: "Petrol",
    transmission: "CVT",
    cc: "1500",
    mileage: "28,000 km",
    color: "Silver Metallic",
    condition: "Reconditioned",
    badge: "Popular",
    grade: "4.0 / B",
    bodyType: "Sedan",
    image: "images/car_toyota_allion.png",
    description: "Toyota Allion A15 G-Plus — বাংলাদেশের সবচেয়ে জনপ্রিয় সেডান। ফুয়েল ইফিসিয়েন্ট, আরামদায়ক এবং স্টাইলিশ। দৈনন্দিন ব্যবহারের জন্য পারফেক্ট।",
    features: [
      "Push Start Button",
      "Smart Key System",
      "Multi-function Steering",
      "Fabric & Leather Combined Seats",
      "Rear Camera",
      "Bluetooth Connectivity",
      "Auto AC",
      "ABS with EBD",
      "LED Tail Lights",
      "Fog Lamps",
      "Power Windows (All)",
      "USB Charging Ports"
    ]
  },
  {
    id: 4,
    brand: "Toyota",
    model: "Premio F-EX 2.0",
    bengaliName: "টোয়োটা প্রেমিও এফ-ইএক্স ২.০",
    year: 2018,
    price: "৳ ৪২,০০,০০০",
    priceNum: 4200000,
    fuel: "Petrol",
    transmission: "CVT",
    cc: "2000",
    mileage: "35,000 km",
    color: "Black",
    condition: "Reconditioned",
    badge: "Hot Deal",
    grade: "4.0 / B",
    bodyType: "Sedan",
    image: "images/car_toyota_premio.png",
    description: "Toyota Premio F-EX 2.0 — ২০০০cc পাওয়ারফুল ইঞ্জিন সহ প্রিমিয়াম সেডান। এক্সিকিউটিভ ক্লাসের আরামদায়কতা ও পারফরম্যান্স।",
    features: [
      "2.0L Engine",
      "Full Leather Seats",
      "Wood Panel Interior",
      "Rear Camera with Sensors",
      "Cruise Control",
      "Auto Folding Mirrors",
      "HID Headlights",
      "Multi-info Display",
      "Dual Airbags",
      "Smart Entry System",
      "Power Driver Seat",
      "Auto Headlights"
    ]
  },
  {
    id: 13,
    brand: "Toyota",
    model: "C-HR (New Shape)",
    bengaliName: "টোয়োটা সি-এইচআর (২০২১)",
    year: 2021,
    price: "৳ ৩৪,০০,০০০",
    priceNum: 3400000,
    fuel: "Hybrid",
    transmission: "CVT",
    cc: "1800",
    mileage: "50,000 km",
    color: "Black (কালো)",
    condition: "Reconditioned",
    badge: "Special Offer",
    badgeClass: "new",
    grade: "4.5",
    bodyType: "Crossover",
    image: "images/car_honda_civic.png",
    description: "স্পেশাল অফার: ২০২১ মডেলের নিউ শেপের কালো রঙের Toyota C-HR (রিকন্ডিশনড)। এই গাড়িটি কিনলে ৩ বছরের ফ্রি সার্ভিস ওয়ারেন্টি এবং ৭০% পর্যন্ত ব্যাংক লোনের সুবিধা পাওয়া যাবে। গাড়িটি আমাদের ইসিবি (ECB) ব্রাঞ্চে এভেইলেবল আছে।",
    features: [
      "New Shape Design",
      "3 Years Free Service Warranty",
      "70% Bank Loan Available",
      "Available at ECB Branch",
      "Toyota Safety Sense",
      "Push Start & Smart Key"
    ]
  },
  {
    id: 14,
    brand: "Toyota",
    model: "Harrier Progress Metal",
    bengaliName: "টোয়োটা হ্যারিয়ার প্রগ্রেস মেটাল",
    year: 2020,
    price: "৳ ৭৮,০০,০০০",
    priceNum: 7800000,
    fuel: "Hybrid",
    transmission: "CVT",
    cc: "2500",
    mileage: "16,000 km",
    color: "Sparkling Black Metallic",
    condition: "Reconditioned",
    badge: "Luxury",
    grade: "5.0 / S (Auction Grade)",
    bodyType: "SUV",
    image: "images/car_toyota_harrier.png",
    description: "The Toyota Harrier Progress Metal is the pinnacle of elegant, high-performance SUV luxury. Features the highly refined 2.5L hybrid engine, premium JBL entertainment system, and gorgeous interior craftsmanship.",
    features: [
      "Panoramic Panoramic Sliding Roof",
      "JBL Premium 12-Speaker Sound System",
      "Premium Nappa Burgundy Leather seats",
      "Heated & Ventilated Front Seats",
      "Heated Leather Steering Wheel",
      "Adaptive High Beam System (AHS)"
    ]
  },
  {
    id: 5,
    brand: "Toyota",
    model: "Corolla Axio Hybrid G",
    bengaliName: "টোয়োটা করোলা অ্যাক্সিও হাইব্রিড জি",
    year: 2021,
    price: "৳ ৩৫,০০,০০০",
    priceNum: 3500000,
    fuel: "Hybrid",
    transmission: "CVT",
    cc: "1500",
    mileage: "22,000 km",
    color: "Pearl White",
    condition: "Reconditioned",
    badge: "Eco",
    badgeClass: "new",
    grade: "4.0 / A",
    bodyType: "Sedan",
    image: "images/car_toyota_axio.png",
    description: "Toyota Corolla Axio Hybrid G — হাইব্রিড টেকনোলজি সহ ফুয়েল ইফিসিয়েন্ট সেডান। শহরের রাস্তায় লিটারে ২৫-৩০ কিমি মাইলেজ।",
    features: [
      "Hybrid Synergy Drive",
      "Excellent Fuel Economy",
      "Toyota Safety Sense C",
      "LED Headlights",
      "7\" Touch Display",
      "Rear Camera",
      "Smart Key",
      "Push Start",
      "Auto AC",
      "4 Airbags",
      "Vehicle Stability Control",
      "Hill Start Assist"
    ]
  },
  {
    id: 6,
    brand: "Honda",
    model: "Civic RS Turbo",
    bengaliName: "হোন্ডা সিভিক আরএস টার্বো",
    year: 2022,
    price: "৳ ৭২,০০,০০০",
    priceNum: 7200000,
    fuel: "Petrol",
    transmission: "CVT",
    cc: "1500 Turbo",
    mileage: "12,000 km",
    color: "Rallye Red",
    condition: "Reconditioned",
    badge: "Sporty",
    grade: "4.5 / A",
    bodyType: "Sedan",
    image: "images/car_honda_civic.png",
    description: "Honda Civic RS Turbo — স্পোর্টি ডিজাইন, টার্বোচার্জড ইঞ্জিন, অত্যাধুনিক সেফটি ফিচার সহ প্রিমিয়াম সেডান। তরুণ প্রজন্মের প্রথম পছন্দ।",
    features: [
      "1.5L VTEC Turbo Engine",
      "Honda SENSING Suite",
      "9\" Touchscreen",
      "Bose Premium Audio",
      "Wireless Apple CarPlay",
      "Adaptive Cruise Control",
      "Lane Keeping Assist",
      "Collision Mitigation Braking",
      "Road Departure Mitigation",
      "Heated Front Seats",
      "Wireless Phone Charger",
      "Sport Mode & Paddle Shifters"
    ]
  },
  {
    id: 7,
    brand: "Mitsubishi",
    model: "Pajero Sport GLS 4WD",
    bengaliName: "মিতসুবিশি পাজেরো স্পোর্ট জিএলএস ফোরডব্লিউডি",
    year: 2020,
    price: "৳ ৮৫,০০,০০০",
    priceNum: 8500000,
    fuel: "Diesel",
    transmission: "Automatic",
    cc: "2400",
    mileage: "40,000 km",
    color: "Dark Grey",
    condition: "Reconditioned",
    badge: "4WD",
    grade: "4.0 / B",
    bodyType: "SUV",
    image: "images/car_mitsubishi_pajero.png",
    description: "Mitsubishi Pajero Sport GLS 4WD — পাওয়ারফুল ডিজেল ইঞ্জিন, ফুল-টাইম ফোর-হুইল ড্রাইভ। অফ-রোড ও হাইওয়ে উভয় জায়গায় অসাধারণ পারফরম্যান্স।",
    features: [
      "2.4L Diesel Turbo Engine",
      "Super Select 4WD-II",
      "8\" Touchscreen Navigation",
      "8 Airbags",
      "Forward Collision Mitigation",
      "Blind Spot Warning",
      "Rear Cross Traffic Alert",
      "Leather Seats",
      "Power Tailgate",
      "Hill Descent Control",
      "Multi-around Monitor",
      "Cruise Control"
    ]
  },
  {
    id: 8,
    brand: "Nissan",
    model: "X-Trail Hybrid 4WD",
    bengaliName: "নিসান এক্স-ট্রেইল হাইব্রিড ফোরডব্লিউডি",
    year: 2021,
    price: "৳ ৫৮,০০,০০০",
    priceNum: 5800000,
    fuel: "Hybrid",
    transmission: "CVT",
    cc: "2000",
    mileage: "30,000 km",
    color: "Metallic Blue",
    condition: "Reconditioned",
    badge: "4WD",
    grade: "4.0 / A",
    bodyType: "SUV",
    image: "images/car_nissan_xtrail.png",
    description: "Nissan X-Trail Hybrid 4WD — হাইব্রিড প্রযুক্তি ও ফোর-হুইল ড্রাইভ সহ ফ্যামিলি SUV। ৭ সিটার, স্পেসিয়াস ইন্টেরিয়র।",
    features: [
      "Intelligent Hybrid System",
      "Intelligent 4WD",
      "ProPILOT Assist",
      "7-Seater Configuration",
      "Around View Monitor",
      "Intelligent Emergency Braking",
      "Blind Spot Warning",
      "Leather Seats",
      "Panoramic Sunroof",
      "Dual Zone Climate Control",
      "Remote Start",
      "Power Rear Gate"
    ]
  },
  {
    id: 9,
    brand: "Toyota",
    model: "Harrier Progress Metal",
    bengaliName: "টোয়োটা হ্যারিয়ার প্রগ্রেস মেটাল",
    year: 2020,
    price: "৳ ৭৮,০০,০০০",
    priceNum: 7800000,
    fuel: "Hybrid",
    transmission: "CVT",
    cc: "2500",
    mileage: "16,000 km",
    color: "Sparkling Black Metallic",
    condition: "Reconditioned",
    badge: "Luxury",
    grade: "5.0 / S (Auction Grade)",
    bodyType: "SUV",
    image: "images/car_toyota_harrier.png",
    description: "The Toyota Harrier Progress Metal is the pinnacle of elegant, high-performance SUV luxury. Features the highly refined 2.5L hybrid engine, premium JBL entertainment system, and gorgeous interior craftsmanship.",
    features: [
      "Panoramic Panoramic Sliding Roof",
      "JBL Premium 12-Speaker Sound System",
      "Premium Nappa Burgundy Leather seats",
      "Heated & Ventilated Front Seats",
      "Heated Leather Steering Wheel",
      "Adaptive High Beam System (AHS)"
    ]
  },
  {
    id: 10,
    brand: "Toyota",
    model: "Noah Hybrid S-Z",
    bengaliName: "টোয়োটা নোয়া হাইব্রিড এস-জেড",
    year: 2023,
    price: "৳ ৭৫,০০,০০০",
    priceNum: 7500000,
    fuel: "Hybrid",
    transmission: "CVT",
    cc: "1800",
    mileage: "8,000 km",
    color: "White",
    condition: "Reconditioned",
    badge: "Family",
    badgeClass: "new",
    grade: "4.5 / A",
    bodyType: "MPV",
    image: "images/car_toyota_noah.png",
    description: "Toyota Noah Hybrid S-Z — ফ্যামিলি ট্রাভেলের জন্য পারফেক্ট মিনিভ্যান। ৭ সিটার, স্লাইডিং ডোর, হাইব্রিড ইঞ্জিন, প্রশস্ত ইন্টেরিয়র।",
    features: [
      "1.8L Hybrid Engine",
      "7-Seater with Captain Seats",
      "Both Side Power Sliding Doors",
      "Toyota Safety Sense 3",
      "10.5\" Touchscreen",
      "Digital Rearview Mirror",
      "Hands-free Dual Power Sliding Doors",
      "Ottoman Seats (2nd Row)",
      "Ceiling Rear AC",
      "BSM & RCTA",
      "Parking Support Brake",
      "Advanced Park Assist"
    ]
  },
  {
    id: 11,
    brand: "Toyota",
    model: "Land Cruiser Prado TX-L",
    bengaliName: "টোয়োটা ল্যান্ড ক্রুজার প্রাডো টিএক্স-এল",
    year: 2019,
    price: "৳ ১,৭৫,০০,০০০",
    priceNum: 17500000,
    fuel: "Octane",
    transmission: "Automatic",
    cc: "2700",
    mileage: "18,500 km",
    color: "Crystal White Pearl",
    condition: "Reconditioned",
    badge: "Premium",
    grade: "4.5 / A",
    bodyType: "SUV",
    image: "images/car_toyota_crown.png",
    description: "An absolute titan on Bangladeshi roads. The Land Cruiser Prado TX-L represents rugged off-road capability matched with supreme urban luxury. It is perfectly suited for Dhaka's elite lifestyle and long-distance highway cruises.",
    features: [
      "Beige Leather 7-Seater Layout",
      "Electric Tilting Sunroof",
      "Modellista Aero Bodykit",
      "Toyota Safety Sense Package",
      "Full-Time 4WD Active Traction Control",
      "Dual LED Headlamps",
      "Crawl Control",
      "Multi-terrain Select",
      "JBL Sound System",
      "Pre-collision System",
      "Adaptive Variable Suspension",
      "Downhill Assist Control"
    ]
  },
  {
    id: 12,
    brand: "Honda",
    model: "Vezel e:HEV Z",
    bengaliName: "হোন্ডা ভেজেল ই:এইচইভি জেড",
    year: 2023,
    price: "৳ ৫২,০০,০০০",
    priceNum: 5200000,
    fuel: "Hybrid",
    transmission: "CVT",
    cc: "1500",
    mileage: "10,000 km",
    color: "Crystal Blue",
    condition: "Reconditioned",
    badge: "New Arrival",
    badgeClass: "new",
    grade: "4.5 / A",
    bodyType: "SUV",
    image: "images/car_nissan_xtrail.png",
    description: "Honda Vezel e:HEV Z — কমপ্যাক্ট SUV ক্যাটাগরিতে সেরা পছন্দ। হাইব্রিড ইঞ্জিন, স্টাইলিশ ডিজাইন, Honda SENSING সেফটি সুইট।",
    features: [
      "e:HEV Hybrid System",
      "Honda SENSING",
      "9\" Touchscreen",
      "Wireless Apple CarPlay",
      "LED Headlights",
      "Auto Brake Hold",
      "Electric Parking Brake",
      "Rear Wide Camera",
      "Dual Zone AC",
      "Walk Away Auto Lock",
      "Side Curtain Airbags",
      "Collision Mitigation Braking"
    ]
  }
];

// ── Filter & Render Functions ──

function getUniqueBrands() {
  return [...new Set(carInventory.map(car => car.brand))].sort();
}

function getUniqueYears() {
  return [...new Set(carInventory.map(car => car.year))].sort((a, b) => b - a);
}

function getUniqueFuelTypes() {
  return [...new Set(carInventory.map(car => car.fuel))].sort();
}

function filterCars(filters) {
  return carInventory.filter(car => {
    if (filters.brand && car.brand !== filters.brand) return false;
    if (filters.fuel && car.fuel !== filters.fuel) return false;
    if (filters.year && car.year !== parseInt(filters.year)) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        if (car.priceNum < min || car.priceNum > max) return false;
      } else {
        if (car.priceNum < min) return false;
      }
    }
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const searchStr = `${car.brand} ${car.model} ${car.year} ${car.fuel} ${car.color} ${car.condition}`.toLowerCase();
      if (!searchStr.includes(searchTerm)) return false;
    }
    return true;
  });
}

function createCarCard(car) {
  const badgeClass = car.badgeClass || '';
  return `
    <article class="car-card animate-on-scroll" data-car-id="${car.id}">
      <div class="car-card-badge ${badgeClass}">${car.badge}</div>
      <div class="car-card-favorite" onclick="toggleFavorite(this, event)" title="ফেভারিটে যোগ করুন">♡</div>
      <div class="car-card-image">
        <img src="${car.image}" alt="${car.brand} ${car.model} ${car.year}" loading="lazy">
      </div>
      <div class="car-card-body">
        <div class="car-card-brand">${car.brand}</div>
        <h3 class="car-card-title">${car.model}</h3>
        <div class="car-card-specs">
          <span class="car-spec">
            <span class="car-spec-icon">📅</span> ${car.year}
          </span>
          <span class="car-spec">
            <span class="car-spec-icon">⛽</span> ${car.fuel}
          </span>
          <span class="car-spec">
            <span class="car-spec-icon">⚙️</span> ${car.cc}cc
          </span>
          <span class="car-spec">
            <span class="car-spec-icon">🔄</span> ${car.transmission}
          </span>
        </div>
        <div class="car-card-footer">
          <div class="car-price">
            <span class="car-price-label">মূল্য</span>
            <span class="car-price-value">${car.price}</span>
          </div>
          <button class="car-card-btn" onclick="openCarModal(${car.id})">বিস্তারিত →</button>
        </div>
      </div>
    </article>
  `;
}

function renderCars(cars) {
  const grid = document.getElementById('carGrid');
  const count = document.getElementById('carCount');

  if (!grid) return;

  if (cars.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin-bottom: 0.5rem;">কোনো গাড়ি পাওয়া যায়নি</h3>
        <p style="color: var(--text-muted);">অনুগ্রহ করে আপনার সার্চ ফিল্টার পরিবর্তন করুন</p>
      </div>
    `;
  } else {
    grid.innerHTML = cars.map(car => createCarCard(car)).join('');

    // Re-trigger scroll animations
    setTimeout(() => {
      const cards = grid.querySelectorAll('.animate-on-scroll');
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
        setTimeout(() => card.classList.add('animated'), 50);
      });
    }, 100);
  }

  if (count) {
    count.innerHTML = `মোট <strong>${cars.length}</strong>টি গাড়ি পাওয়া গেছে`;
  }
}

function openCarModal(carId) {
  const car = carInventory.find(c => c.id === carId);
  if (!car) return;

  const modal = document.getElementById('carModal');
  const overlay = document.getElementById('modalOverlay');

  document.getElementById('modalImage').src = car.image;
  document.getElementById('modalImage').alt = `${car.brand} ${car.model}`;
  document.getElementById('modalBrand').textContent = car.brand;
  document.getElementById('modalTitle').textContent = `${car.model} (${car.year})`;
  document.getElementById('modalPrice').textContent = car.price;
  document.getElementById('modalDescription').textContent = car.description;

  // Specs
  document.getElementById('modalYear').textContent = car.year;
  document.getElementById('modalFuel').textContent = car.fuel;
  document.getElementById('modalCC').textContent = car.cc + 'cc';
  document.getElementById('modalTransmission').textContent = car.transmission;
  document.getElementById('modalMileage').textContent = car.mileage;
  document.getElementById('modalColor').textContent = car.color;
  document.getElementById('modalCondition').textContent = car.condition;

  // Features
  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = car.features.map(f => `<div class="modal-feature-item">${f}</div>`).join('');

  // WhatsApp link
  const whatsappMsg = encodeURIComponent(`আস্সালামু আলাইকুম! আমি Gari Bazar BD ওয়েবসাইটে ${car.brand} ${car.model} (${car.year}) - ${car.price} গাড়িটি সম্পর্কে জানতে চাই।`);
  document.getElementById('modalWhatsApp').href = `https://wa.me/8801711577843?text=${whatsappMsg}`;
  document.getElementById('modalCall').href = `tel:+8801711577843`;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCarModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function toggleFavorite(el, event) {
  event.stopPropagation();
  el.classList.toggle('active');
  el.textContent = el.classList.contains('active') ? '♥' : '♡';
}

function initFilters() {
  const brandSelect = document.getElementById('filterBrand');
  const yearSelect = document.getElementById('filterYear');
  const fuelSelect = document.getElementById('filterFuel');

  if (brandSelect) {
    getUniqueBrands().forEach(brand => {
      brandSelect.innerHTML += `<option value="${brand}">${brand}</option>`;
    });
  }

  if (yearSelect) {
    getUniqueYears().forEach(year => {
      yearSelect.innerHTML += `<option value="${year}">${year}</option>`;
    });
  }

  if (fuelSelect) {
    getUniqueFuelTypes().forEach(fuel => {
      fuelSelect.innerHTML += `<option value="${fuel}">${fuel}</option>`;
    });
  }
}

function applyFilters() {
  const filters = {
    brand: document.getElementById('filterBrand')?.value || '',
    year: document.getElementById('filterYear')?.value || '',
    fuel: document.getElementById('filterFuel')?.value || '',
    priceRange: document.getElementById('filterPrice')?.value || '',
    search: document.getElementById('filterSearch')?.value || ''
  };

  const filtered = filterCars(filters);
  renderCars(filtered);
}

function resetFilters() {
  document.getElementById('filterBrand').value = '';
  document.getElementById('filterYear').value = '';
  document.getElementById('filterFuel').value = '';
  document.getElementById('filterPrice').value = '';
  document.getElementById('filterSearch').value = '';
  renderCars(carInventory);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  renderCars(carInventory);

  // Search input live filtering
  const searchInput = document.getElementById('filterSearch');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(applyFilters, 300);
    });
  }

  // Filter change events
  ['filterBrand', 'filterYear', 'filterFuel', 'filterPrice'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', applyFilters);
  });

  // Close modal on overlay click
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeCarModal();
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCarModal();
  });
});
