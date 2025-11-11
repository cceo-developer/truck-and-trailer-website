export const GENERAL_FAQS = [
    {
        q: 'What types of equipment can you store?',
        a: [
            'We accommodate trucks/tractors, semi-trailers, box trucks, containers, and industrial equipment.',
            'Indoor/covered options and yard parking depend on terminal availability.'
        ]
    },
    {
        q: 'Do you offer short-term and long-term options?',
        a: [
            'Yes. We offer daily, monthly, and yearly plans.',
            'We’ll tailor a plan based on your fleet size, duration, and preferred terminal.'
        ]
    },
    {
        q: 'How secure are the facilities?',
        a: [
            'All terminals feature fenced yards, surveillance cameras, controlled access (login/logout), and on-site staff presence (per terminal).',
            'We focus on safe, compliant parking aligned with industry best practices.'
        ],
        bullets: ['24/7 secured access', 'CCTV & logs', 'Staff on site (per terminal)']
    },
    {
        q: 'Where are you located?',
        a: [
            'We operate four terminals in San Antonio:',
            'T1 — 5169 Randolph Blvd.',
            'T2 — 5126 Sherri Ann Rd.',
            'T3 — 12815 S. Zarzamora St.',
            'T4 — 5246 Randolph Blvd.'
        ],
        note: 'All locations provide 24/7 secured access; specific amenities may vary per terminal.'
    },
    {
        q: 'Do you provide value-added services?',
        a: [
            'We can support routine checks, vehicle cleaning, battery charging, and basic coordination.',
            'Ask us about current availability and service scope at your preferred terminal.'
        ]
    },
    {
        q: 'How is pricing determined?',
        a: [
            'Pricing depends on equipment type, volume, duration, and terminal availability.',
            'Request a quote and we’ll provide a tailored proposal for your fleet.'
        ]
    }
];

export const POLICY_FAQS = [
    {
        q: 'What are the access hours?',
        a: [
            'All terminals offer 24/7 secured access for clients.',
            'Office support is available during standard business hours.'
        ]
    },
    {
        q: 'How do I start storing with TTS?',
        a: [
            'Submit a quote request with your requirements (units, term, terminal).',
            'Our team will confirm availability, finalize terms, and schedule your start date.'
        ]
    },
    {
        q: 'What is your cancellation policy?',
        a: [
            'Policies vary by agreement and duration.',
            'We’ll outline notice periods and any fees in your service agreement.'
        ]
    },
    {
        q: 'Do you stack or double-park equipment?',
        a: [
            'We emphasize assigned, dedicated parking to minimize delays and improve safety.',
            'Operational layouts vary by terminal footprint and occupancy.'
        ]
    }
];

// Helper opcional por si luego quieres un JSON-LD o indexado
export const getAllFaqs = () => [...GENERAL_FAQS, ...POLICY_FAQS];