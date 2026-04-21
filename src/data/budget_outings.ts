export interface BudgetOuting {
    id: string;
    name: string;
    budget: 'under_5k' | 'under_15k' | 'under_20k' | 'under_30k';
    location: string;
    address: string;
    openingHours: string;
    costBreakdown: string;
    description: string;
    source: string;
    activities: string[];
    category: 'Food' | 'Museum' | 'Parks' | 'Beach' | 'Entertainment' | 'Art' | 'Culture';
    lat: number;
    lng: number;
    websiteUrl?: string;
}

export const BUDGET_OUTINGS: BudgetOuting[] = [
    // --- IKEJA ---
    {
        id: 'ik-01',
        name: 'JJT PARK (ALAUSA)',
        budget: 'under_5k',
        location: 'Ikeja',
        address: 'Alausa, Ikeja, Lagos',
        openingHours: 'Daily: 9:00 AM - 6:00 PM',
        costBreakdown: 'Entry: Free | Snacks ~₦2,000',
        description: 'A beautiful, well-maintained park in the heart of the state capital. Great for picnics and photographs.',
        source: 'Mainland Guides',
        activities: ['Picnic', 'Photography', 'Nature Walk'],
        category: 'Parks',
        lat: 6.6133,
        lng: 3.3582
    },
    {
        id: 'ik-02',
        name: 'KALAKUTA MUSEUM',
        budget: 'under_5k',
        location: 'Ikeja',
        address: '8 Gbemisola St, Allen, Ikeja',
        openingHours: 'Daily: 10:00 AM - 6:00 PM',
        costBreakdown: 'Entry Fee: ~₦2,000',
        description: 'Former home of afrobeat legend Fela Kuti. A must-visit for appreciation of Nigerian music history.',
        source: 'Cultural Records',
        activities: ['Guided Tour', 'Music History', 'Rooftop Bar'],
        category: 'Museum',
        lat: 6.6022,
        lng: 3.3512
    },
    {
        id: 'ik-03',
        name: 'BREAKFAST CORNER IKEJA',
        budget: 'under_5k',
        location: 'Ikeja',
        address: 'Ikeja GRA, Lagos',
        openingHours: 'Daily: 8:00 AM - 8:00 PM',
        costBreakdown: 'Meals from ₦3,500',
        description: 'Cozy spot for affordable breakfast and brunch. Known for their pancakes and Nigerian breakfast combos.',
        source: 'Foodie Favorites',
        activities: ['Brunch', 'Coffee', 'Quick Meetings'],
        category: 'Food',
        lat: 6.6059,
        lng: 3.3482
    },

    // --- SURULERE ---
    {
        id: 'sl-01',
        name: 'OFADA BOY',
        budget: 'under_15k',
        location: 'Surulere',
        address: '1 Mba St, Surulere, Lagos',
        openingHours: 'Daily: 10:00 AM - 10:00 PM',
        costBreakdown: 'Main Plates ~₦6,000 - ₦9,000',
        description: 'The ultimate spot for authentic Ofada rice in a creative Afrocentric environment.',
        source: 'Mainland Foodies',
        activities: ['Lunch', 'Cultural Dining', 'Socializing'],
        category: 'Food',
        lat: 6.5059,
        lng: 3.3582,
        websiteUrl: 'https://www.instagram.com/ofadaboy/'
    },
    {
        id: 'sl-02',
        name: 'SOOYAH BISTRO',
        budget: 'under_5k',
        location: 'Surulere',
        address: 'Various locations (Surulere Mall Area)',
        openingHours: 'Daily: 11:00 AM - Late',
        costBreakdown: 'Suya Platters from ₦3,000',
        description: 'Gourmet Suya experience with burgers, wraps, and classic platters.',
        source: 'Street Food Modern',
        activities: ['Casual Dining', 'Quick Bite'],
        category: 'Food',
        lat: 6.5022,
        lng: 3.3542
    },

    // --- YABA ---
    {
        id: 'yb-01',
        name: 'PURPLE BISTRO',
        budget: 'under_15k',
        location: 'Yaba',
        address: '3 University Rd, Yaba, Lagos',
        openingHours: 'Daily: 9:00 AM - 10:00 PM',
        costBreakdown: 'Full Menu items ~₦5,000 - ₦12,000',
        description: 'A trendy student and professional favorite known for its purple aesthetics and consistent quality.',
        source: 'Tech Hub Eats',
        activities: ['Dinner Date', 'Work from Cafe', 'Burgers'],
        category: 'Food',
        lat: 6.5165,
        lng: 3.3842
    },
    {
        id: 'yb-02',
        name: 'THE SCOPE LAGOS',
        budget: 'under_15k',
        location: 'Yaba',
        address: 'Rooftop, Sabo, Yaba',
        openingHours: 'Daily: 12:00 PM - Late',
        costBreakdown: 'Cocktails ~₦4,000 | Meals ~₦7,000',
        description: 'Vibrant rooftop lounge offering great views of Yaba and affordable drinks/platters.',
        source: 'Social Scene',
        activities: ['Nightlife', 'Rooftop Vibes', 'Networking'],
        category: 'Entertainment',
        lat: 6.5144,
        lng: 3.3852
    },

    // --- MARYLAND & FESTAC ---
    {
        id: 'md-01',
        name: 'OTRES EXPRESS',
        budget: 'under_10k',
        location: 'Maryland',
        address: 'Maryland Mall, Lagos',
        openingHours: 'Daily: 9:00 AM - 9:00 PM',
        costBreakdown: 'Standard Plates ~₦4,500',
        description: 'Clean, reliable Nigerian meals in a modern mall environment.',
        source: 'Mall Guides',
        activities: ['Quick Lunch', 'Shopping Break'],
        category: 'Food',
        lat: 6.5822,
        lng: 3.3592
    },
    {
        id: 'ft-01',
        name: 'WINNY\'S MEALS',
        budget: 'under_5k',
        location: 'Festac',
        address: '22 Road, Festac Town, Lagos',
        openingHours: 'Daily: 8:00 AM - 10:00 PM',
        costBreakdown: 'Combos from ₦2,500',
        description: 'A legendary Festac spot for massive, affordable portions of Nigerian and Chinese dishes.',
        source: 'Festac Originals',
        activities: ['Budget Dining', 'Takeout'],
        category: 'Food',
        lat: 6.4674,
        lng: 3.2842
    },

    // --- IKOYI ---
    {
        id: 'iky-01',
        name: 'GHANA HIGH RESTAURANT',
        budget: 'under_5k',
        location: 'Ikoyi',
        address: 'King George V Rd, Onikan/Ikoyi',
        openingHours: 'Daily: 8:00 AM - 6:00 PM',
        costBreakdown: 'Custom Plates from ₦2,500',
        description: 'A historic spot known for the best Jollof rice and massive portions at a fraction of Ikoyi prices.',
        source: 'Island Workers',
        activities: ['Budget Lunch', 'Legendary Food'],
        category: 'Food',
        lat: 6.4484,
        lng: 3.4002
    },
    {
        id: 'iky-02',
        name: 'MURI OKUNOLA PARK',
        budget: 'under_5k',
        location: 'VI / Ikoyi',
        address: 'Ozumba Mbadiwe Rd, Lagos',
        openingHours: 'Daily: 8:00 AM - 8:00 PM',
        costBreakdown: 'Entry: ~₦500 - ₦1,000',
        description: 'Serene green park ideal for picnics, reading, or attending one of many cultural festivals.',
        source: 'Peaceful Spots',
        activities: ['Picnic', 'Outdoor Events', 'Relaxation'],
        category: 'Parks',
        lat: 6.4382,
        lng: 3.4242
    },
    {
        id: 'iky-03',
        name: 'LEKKI-IKOYI LINK BRIDGE',
        budget: 'under_5k',
        location: 'Ikoyi',
        address: 'Ikoyi to Lekki Phase 1',
        openingHours: '24 Hours',
        costBreakdown: 'Free (Walking/Running)',
        description: 'The most iconic bridge in Lagos. Perfect for a sunset walk or early morning jog with ocean views.',
        source: 'Discovery Walks',
        activities: ['Jogging', 'Photography', 'City Views'],
        category: 'Entertainment',
        lat: 6.4474,
        lng: 3.4482
    },

    // --- LAGOS ISLAND ---
    {
        id: 'isl-01',
        name: 'FREEDOM PARK',
        budget: 'under_5k',
        location: 'Lagos Island',
        address: '1 Hospital Rd, Lagos Island',
        openingHours: 'Daily: 10:00 AM - 10:00 PM',
        costBreakdown: 'Entry ~₦2,000',
        description: 'A heritage site and former prison transformed into a vibrant cultural hub with live music and arts.',
        source: 'Craft & Culture',
        activities: ['Museum Tour', 'Live Music', 'Art Gallery'],
        category: 'Culture',
        lat: 6.4444,
        lng: 3.4001
    },
    {
        id: 'isl-02',
        name: 'NATIONAL MUSEUM ONIKAN',
        budget: 'under_5k',
        location: 'Lagos Island',
        address: 'Onikan, Lagos Island',
        openingHours: 'Daily: 9:00 AM - 5:00 PM',
        costBreakdown: 'Entry ~₦500 - ₦1,000',
        description: 'Nigeria\'s primary museum housing archaeological artifacts and traditional art with deep history.',
        source: 'History Buffs',
        activities: ['History Tour', 'Art Viewing'],
        category: 'Museum',
        lat: 6.4442,
        lng: 3.4042
    },
    {
        id: 'isl-03',
        name: 'TARKWA BAY BEACH',
        budget: 'under_15k',
        location: 'Lagos Island (Boat Access)',
        address: 'Tarkwa Bay Island, Lagos',
        openingHours: 'Daily: 8:00 AM - 6:00 PM',
        costBreakdown: 'Boat ~₦3,000 | Entry ~₦1,000',
        description: 'A peaceful, secluded beach accessible only by boat. A favorite for surfers and budget explorers.',
        source: 'Escape Seekers',
        activities: ['Surfing', 'Swimming', 'Beach Picnic'],
        category: 'Beach',
        lat: 6.4174,
        lng: 3.3982
    },

    // --- VICTORIA ISLAND ---
    {
        id: 'vi-01',
        name: 'TERRA KULTURE',
        budget: 'under_15k',
        location: 'Victoria Island',
        address: 'Tiamiyu Savage St, VI',
        openingHours: 'Daily: 9:00 AM - 10:00 PM',
        costBreakdown: 'Gallery: Free | Theatre varies',
        description: 'The premier center for Nigerian arts, culture, and theater. Excellent food at the bistro too.',
        source: 'Elite Culture',
        activities: ['Art Gallery', 'Bookstore', 'Drama/Theatre'],
        category: 'Art',
        lat: 6.4322,
        lng: 3.4282
    },
    {
        id: 'vi-02',
        name: 'LANDMARK LEISURE BEACH',
        budget: 'under_20k',
        location: 'Victoria Island',
        address: 'Water Corporation Dr, VI',
        openingHours: 'Daily: 9:00 AM - Late',
        costBreakdown: 'Entry ~₦5,000',
        description: 'Premium beach experience with board-walks, restaurants, and a clean coastline.',
        source: 'Verified Tourist Spot',
        activities: ['Beach Games', 'Dining', 'Mini Golf'],
        category: 'Beach',
        lat: 6.4252,
        lng: 3.4412
    },

    // --- LEKKI ---
    {
        id: 'lk-01',
        name: 'NIKE ART GALLERY',
        budget: 'under_5k',
        location: 'Lekki Phase 1',
        address: '2 Oba Yekini Elegushi Rd, Lekki',
        openingHours: 'Daily: 10:00 AM - 6:00 PM',
        costBreakdown: 'Entry: Free',
        description: 'One of the largest private art collections in Africa. 4 stories of stunning Nigerian artistry.',
        source: 'Global Art Scene',
        activities: ['Art Exploration', 'Shopping', 'Tutorials'],
        category: 'Art',
        lat: 6.4362,
        lng: 3.4682
    },
    {
        id: 'lk-02',
        name: 'LEKKI CONSERVATION CENTRE',
        budget: 'under_15k',
        location: 'Lekki',
        address: 'Km 19 Lekki-Epe Expressway',
        openingHours: 'Daily: 8:30 AM - 5:00 PM',
        costBreakdown: 'Entry ~₦2,000 | Canopy ~₦3,000',
        description: 'Home to the longest canopy walkway in Africa. A nature lover\'s paradise in the city.',
        source: 'Eco Tourists',
        activities: ['Canopy Walk', 'Nature Walk', 'Board Games'],
        category: 'Parks',
        lat: 6.4412,
        lng: 3.5352
    },

    // --- AJAH & ALIMOSHO ---
    {
        id: 'aj-01',
        name: '2SISTERS CAFE',
        budget: 'under_5k',
        location: 'Ajah',
        address: 'Addo Rd, Ajah, Lagos',
        openingHours: 'Daily: 9:00 AM - 9:00 PM',
        costBreakdown: 'Meals from ₦3,000',
        description: 'Cozy and very affordable cafe serving great coffee and Nigerian/Continental pastries.',
        source: 'Local Gems',
        activities: ['Coffee', 'Pastries', 'Quiet Reading'],
        category: 'Food',
        lat: 6.4612,
        lng: 3.5712
    },
    {
        id: 'aj-02',
        name: 'OMU RESORT',
        budget: 'under_30k',
        location: 'Ibeju-Lekki',
        address: 'Bogije, Ibeju-Lekki',
        openingHours: 'Daily: 9:00 AM - 6:00 PM',
        costBreakdown: 'All-inclusive packages ~₦25,000',
        description: 'A massive family-friendly resort with a zoo, water park, wax museum, and mini-golf.',
        source: 'Family Fun',
        activities: ['Zoo Visit', 'Water Park', 'Archery'],
        category: 'Entertainment',
        lat: 6.4812,
        lng: 3.7512
    },
    {
        id: 'ali-01',
        name: 'ALHAJI SUYA (IKOTUN)',
        budget: 'under_5k',
        location: 'Alimosho / Ikotun',
        address: 'Ikotun-Idimu Rd, Alimosho',
        openingHours: 'Daily: 4:00 PM - Late',
        costBreakdown: 'Suya from ₦2,000',
        description: 'Legendary Suya spot in Alimosho. Known for spicy, authentic flavors that draw crowds daily.',
        source: 'Mainland Suya Guide',
        activities: ['Dinner', 'Socializing'],
        category: 'Food',
        lat: 6.5512,
        lng: 3.2712
    }
];
