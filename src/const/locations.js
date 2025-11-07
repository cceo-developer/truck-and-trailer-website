export const OFFICE_HOURS = [
    { label: 'Mon–Fri', value: '8:00 AM – 6:00 PM' },
    { label: 'Sat',     value: '8:00 AM – 2:00 PM' },
    { label: 'Sun',     value: 'Closed' },
];

export const CONTACT = {
    phone: '(210) 776-7411',
    email: 'info@truckandtrailerstorage.com',
};

export const COMMON_FEATURES = [
    '24/7 secured access',
    'Gated & fenced facilities',
    'Surveillance cameras',
    'Dedicated parking (no stacking delays)',
    'Login/Logout controls',
];


export const LOCATIONS = [
    {
        slug: 'randolph-5169',
        name: 'Terminal 1',
        address: '5169 Randolph Blvd, San Antonio, TX 78233',
        coords: { lat: 29.512, lng: -98.403 }, // opcional
        features: [...COMMON_FEATURES, 'Near major routes & hubs'],
        hero: '/assets/locations/t1.jpg',      // pon tus imágenes en /src/assets/...
        gallery: ['/assets/locations/t1-1.jpg','/assets/locations/t1-2.jpg'],
    },
    {
        slug: 'sherri-ann-5126',
        name: 'Terminal 2',
        address: '5126 Sherri Ann Rd, San Antonio, TX 78233',
        coords: { lat: 29.515, lng: -98.403 },
        features: [...COMMON_FEATURES, 'Full-time staff on site'],
        hero: '/assets/locations/t2.jpg',
        gallery: ['/assets/locations/t2-1.jpg','/assets/locations/t2-2.jpg'],
    },
    {
        slug: 'zarzamora-12815',
        name: 'Terminal 3 · Zarzamora',
        address: '12815 S. Zarzamora St, San Antonio, TX 78224',
        coords: { lat: 29.300, lng: -98.528 },
        features: [...COMMON_FEATURES, 'Preventive maintenance on demand'],
        hero: '/assets/locations/t3.jpg',
        gallery: [
            // coloca aquí las 3–6 fotos que subiste por WhatsApp exportadas a /src/assets
            '/assets/locations/zarzamora-1.jpg',
            '/assets/locations/zarzamora-2.jpg',
            '/assets/locations/zarzamora-3.jpg',
        ],
        // Espacios disponibles (según los .pptx)
        spaces: [
            {
                code: 'BLDG-3 · Suite A',
                size: '1,350 ft²',
                bullets: [
                    'Large open floor plan, training/meeting/lunch room',
                    '(2) Private offices, kitchen area w/ refrigerator',
                    'Full bathroom + ½ bathroom, utility room',
                    'High ceilings, Central A/C & Heating, Covered Patio',
                ],
                image: '/assets/locations/zarzamora-bldg3a.png',
            },
            {
                code: 'BLDG-3 · Suite B',
                size: '765 ft²',
                bullets: [
                    'Reception area',
                    '3 private offices',
                    '½ bathroom, multiple utility rooms',
                    'Central A/C & Heating, Opened Patio',
                ],
                image: '/assets/locations/zarzamora-bldg3b.jpg',
            },
            {
                code: 'BLDG-4 · Open Shop',
                size: '1,250 ft² + 3,300 ft² ext. yard',
                bullets: [
                    '(2) bathrooms',
                    '110V & 220V outlets',
                    'Overhead lighting',
                    'Exterior storage space',
                ],
                image: '/assets/locations/zarzamora-bldg4.png',
            },
            {
                code: 'BLDG-5 · Warehouse/Shop',
                size: '6,000 ft²',
                bullets: [
                    'Two offices, full bathroom',
                    'Enclosed storage area',
                    'Multiple 110V & 220V',
                    '(2) 14×14 bay doors, High ceilings',
                ],
                image: '/assets/locations/zarzamora-bldg5.png',
            },
        ],
    },
    {
        slug: 'randolph-5246',
        name: 'Terminal 4',
        address: '5246 Randolph Blvd, San Antonio, TX 78233',
        coords: { lat: 29.514, lng: -98.402 },
        features: [...COMMON_FEATURES, 'Office & warehouse space on demand'],
        hero: '/assets/locations/t4.jpg',
        gallery: ['/assets/locations/t4-1.jpg','/assets/locations/t4-2.jpg'],
    },
];
