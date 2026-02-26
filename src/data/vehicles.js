// src/data/vehicles.js

// --- Image loader (works with 1..11, JPG/JPEG/PNG, any case) ---------------
const ALL = import.meta.glob("../assets/*/*.{jpg,jpeg,JPG,JPEG,png,PNG}", { eager: true });

function loadImages(folder) {
  const imgs = [];
  // Try 1..11 so you can add more later; if only 1..4 exist, that's fine.
  for (let i = 1; i <= 11; i++) {
    const candidates = [
      `../assets/${folder}/${i}.JPG`,
      `../assets/${folder}/${i}.JPEG`,
      `../assets/${folder}/${i}.jpg`,
      `../assets/${folder}/${i}.jpeg`,
      `../assets/${folder}/${i}.png`,
      `../assets/${folder}/${i}.PNG`,
    ];
    for (const key of candidates) {
      if (ALL[key]?.default) {
        imgs.push(ALL[key].default);
        break;
      }
    }
  }
  return imgs;
}

// --- Small helpers for filler fields ---------------------------------------
const trims = ["SE", "Sport", "Limited", "XLT", "LE", "Premium", "Base", ""];
const bodies = ["Sedan", "SUV", "Truck", "Coupe", "Wagon", "Hatchback", ""];
const drivetrains = ["FWD", "RWD", "AWD", "4WD", ""];
const transmissions = ["Automatic", "Manual", "CVT", ""];
const engines = ["I4", "V6", "V8", "Turbo I4", "Hybrid", ""];
const pick = (a) => a[Math.floor(Math.random() * a.length)];

// --- Your vehicles: folder -> exact specs you provided ---------------------
// Folder names MUST match your /src/assets subfolders exactly (typos included).
const base = [
  { folder: "2013FordEdge", year: 2013, make: "Ford", model: "Edge", price: 4995, miles: 233000 },

  { folder: "2009FordMustangCoupe", year: 2009, make: "Ford", model: "Mustang V6 Coupe 2D", price: 9800, miles: 82000 },

  { folder: "2012FordF150", year: 2012, make: "Ford", model: "F-150 XLT Pickup 4D 6 1/2 ft", price: 12900, miles: 100000 },

  { folder: "2012JeepCompass", year: 2012, make: "Jeep", model: "Compass Latitude Sport Utility 4D", price: 4995, miles: 132000 },

  { folder: "2016JeepCompass", year: 2016, make: "Jeep", model: "Compass High Altitude Edition Sport Utility 4D", price: 7995, miles: 122000 },

  { folder: "2015KiaSportage", year: 2015, make: "Kia", model: "Sportage LX Sport Utility 4D", price: 5995, miles: 185000 },

  { folder: "2012JeepWrangler", year: 2012, make: "Jeep", model: "Wrangler Sport Utility 2D" },

  { folder: "2015JeepPatriot", year: 2015, make: "Jeep", model: "Patriot Latitude Sport Utility 4D", price: 5995, miles: 150000 },

  { folder: "2010FordExplorer", year: 2010, make: "Ford", model: "Explorer Eddie Bauer Sport Utility 4D" },

  { folder: "2013JeepGrandCherokee", year: 2013, make: "Jeep", model: "Grand Cherokee Laredo Sport Utility 4D", price: 6995, miles: 155000 },

  { folder: "2014GMCTerrain", year: 2014, make: "GMC", model: "Terrain", price: 6995, miles: 137000 },

  { folder: "2008HyundaiSantaFe", year: 2008, make: "Hyundai", model: "Santa Fe Limited Sport Utility 4D", price: 4995, miles: 143000 },

  { folder: "2012HyundaiElantra", year: 2012, make: "Hyundai", model: "Elantra GLS Sedan 4D", price: 3995, miles: 145000 },

  { folder: "2014NissanRogue", year: 2014, make: "Nissan", model: "Rogue Select S Sport Utility 4D", price: 5995, miles: 145000 },

  { folder: "2014FordF150", year: 2014, make: "Ford", model: "F-150 XL Pickup 2D", price: 4995, miles: 189000 },

  { folder: "2016ChryslerTown", year: 2016, make: "Chrysler", model: "Town & Country Touring Minivan 4D", price: 6995, miles: 145000 },

  { folder: "2010FordEdge", year: 2010, make: "Ford", model: "Edge SE Sport Utility 4D", price: 5995, miles: 139000 },

  { folder: "2019CheveroletTrax", year: 2019, make: "Chevrolet", model: "Trax LS Sport Utility 4D", price: 6995, miles: 92000 },

  { folder: "2015FordEscape", year: 2015, make: "Ford", model: "Escape SE Sport Utility 4D", price: 7795, miles: 95000 },

  { folder: "2013LincolnMKX", year: 2013, make: "Lincoln", model: "MKX Sport Utility 4D", price: 6995, miles: 135000 },

  { folder: "2013FordF150", year: 2013, make: "Ford", model: "F-150 FX4 Pickup 4D 6 1/2 ft", price: 13995, miles: 159000 },

  { folder: "2016HyundaiSantaFe", year: 2016, make: "Hyundai", model: "Santa Fe Sport Utility 4D", price: 8995, miles: 132000 },

  { folder: "2011JeepWrangler", year: 2011, make: "Jeep", model: "Wrangler Sport Utility 2D", price: 9995, miles: 132000 },

  { folder: "2008MazdaMazda3", year: 2008, make: "Mazda", model: "Mazda3 i Grand Touring Sedan 4D", price: 3995, miles: 103000 },

  { folder: "2015JeepCherokee", year: 2015, make: "Jeep", model: "Cherokee Latitude Sport Utility 4D", price: 5995, miles: 177000 },

  { folder: "2008LincolnMKX", year: 2008, make: "Lincoln", model: "MKX Sport Utility 4D", price: 4995, miles: 166000 },

  { folder: "2013FordExplorer", year: 2013, make: "Ford", model: "Explorer XLT Sport Utility 4D", price: 8995, miles: 140000 },

  { folder: "2011NissanSentra", year: 2011, make: "Nissan", model: "Sentra SL Sedan 4D", price: 3995, miles: 128000 },

  { folder: "2012JeepLiberty", year: 2012, make: "Jeep", model: "Liberty Sport SUV 4D", price: 5995, miles: 135000 },

  { folder: "2010JeepWrangler", year: 2010, make: "Jeep", model: "Wrangler Unlimited Sahara Sport Utility 4D", price: 10995, miles: 129000 },

  { folder: "2015KiaSportageLXRed", year: 2015, make: "Kia", model: "Sportage LX Sport Utility 4D", price: 7599, miles: 123000 },

  { folder: "2012ChevroletTraverse", year: 2012, make: "Chevrolet", model: "Traverse LS Sport Utility 4D", price: 5995, miles: 135000 },

  { folder: "2012ChevroletSilverado", year: 2012, make: "Chevrolet", model: "Silverado 1500 Crew Cab LT Pickup 4D 5 3/4 ft", price: 7995, miles: 155000 },

  { folder: "2014MazdaCX9", year: 2014, make: "Mazda", model: "CX-9 Touring Sport Utility 4D", price: 5599, miles: 178000 },

  { folder: "2015NissanMurano", year: 2015, make: "Nissan", model: "Murano SL Sport Utility 4D", price: 9995, miles: 169000 },
];

// --- Build final export -----------------------------------------------------
export const vehicles = base.map((v, idx) => {
  const images = loadImages(v.folder);
  return {
    id: idx + 1,
    year: v.year,
    make: v.make,
    model: v.model,
    price: v.price,
    miles: v.miles,
    image: images[0] || "",
    images,
    // lightweight filler so existing UI keeps working
    trim: pick(trims),
    body: pick(bodies),
    drivetrain: pick(drivetrains),
    transmission: pick(transmissions),
    engine: pick(engines),
    folder: v.folder,
  };
});