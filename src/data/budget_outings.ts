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
    category: 'Nature' | 'Art' | 'Food' | 'Beach' | 'Adrenaline' | 'Culture' | 'Entertainment' | 'Adventure';
}

export const BUDGET_OUTINGS: BudgetOuting[] = [
    // --- UNDER 5K ---
    {
        id: 'out-1',
        name: 'Barracuda Beach',
        budget: 'under_5k',
        location: 'Lekki / Ajah',
        address: 'Okun-Mapo Village, Ajah, Lagos',
        openingHours: 'Daily: 24 Hours',
        costBreakdown: 'Entry: ₦2,000',
        description: 'Fan favourite for group outings and birthdays. Good vibes and basic beach activities.',
        source: 'Lagos Community',
        activities: ['Beach Soccer', 'Volleyball', 'Socializing'],
        category: 'Beach'
    },
    {
        id: 'out-6',
        name: 'Laguna Beach',
        budget: 'under_5k',
        location: 'Lekki',
        address: 'Okun-Ajah, Lagos',
        openingHours: 'Daily: 8:00 AM - 11:00 PM',
        costBreakdown: 'Free Entry | ₦5k Min Spend',
        description: 'Free entry but you must spend at least 5k on food/drinks. Ideal for those prioritizing food.',
        source: 'Foodie Guides',
        activities: ['Dining', 'Beach View', 'Relaxation'],
        category: 'Beach'
    },
    {
        id: 'out-7',
        name: 'Freedom Park',
        budget: 'under_5k',
        location: 'Lagos Island',
        address: 'Broad Street, Lagos Island',
        openingHours: 'Mon-Sat: 10:00 AM - 10:00 PM | Sun: 12:00 PM - 10:00 PM',
        costBreakdown: 'Entry: ₦200 - ₦500',
        description: 'Former colonial prison turned cultural hub with art, history, and live performances.',
        source: 'The Travel Hunters',
        activities: ['History Walk', 'Live Performances', 'Art'],
        category: 'Culture'
    },
    {
        id: 'out-8',
        name: 'Nike Art Gallery',
        budget: 'under_5k',
        location: 'Lekki Phase 1',
        address: '2 Oba Yekini Elegushi Rd, Lekki Phase I, Lagos',
        openingHours: 'Mon-Sat: 10:00 AM - 6:00 PM | Sun: 1:00 PM - 6:00 PM',
        costBreakdown: 'Entry: Free',
        description: 'Iconic gallery with 7,000+ works. You might meet Mama Nike herself! No-cost cultural gem.',
        source: 'Social Prefect',
        activities: ['Art Appreciation', 'Souvenirs', 'Guided Tour'],
        category: 'Art'
    },
    {
        id: 'out-37',
        name: 'Johnson Jakande Tinubu (JJT) Park',
        budget: 'under_5k',
        location: 'Alausa, Ikeja',
        address: 'Governor\'s Rd, Alausa, Ikeja',
        openingHours: 'Daily: 9:00 AM - 6:00 PM',
        costBreakdown: 'Very Low Entry Fee',
        description: 'Beautiful public park in Alausa. Perfect for picnic dates and outdoor reading sessions.',
        source: 'Mainland Discovery',
        activities: ['Picnic', 'Games', 'Photography'],
        category: 'Nature'
    },
    {
        id: 'out-38',
        name: 'Lekki-Ikoyi Bridge Walk',
        budget: 'under_5k',
        location: 'Lekki / Ikoyi',
        address: 'Lekki-Ikoyi Link Bridge, Lagos',
        openingHours: 'Best at Sunset (6:00 PM)',
        costBreakdown: 'Free',
        description: 'A sunset walk across the bridge is one of the most scenic and romantic free dates in Lagos.',
        source: 'Lagos Life',
        activities: ['Walking', 'Photography', 'Vibing'],
        category: 'Adventure'
    },
    {
        id: 'out-13',
        name: 'Toofunkingsoft',
        budget: 'under_5k',
        location: 'Ikeja GRA',
        address: '32 Mobolaji Bank Anthony Way, Ikeja, Lagos',
        openingHours: 'Daily: 10:00 AM - 10:00 PM',
        costBreakdown: '~₦4,600 total',
        description: 'Trendy ice cream store. A cool and sweet under-5k outing for friends and dates.',
        source: 'Food Bloggers',
        activities: ['Ice Cream', 'Sweet Treats', 'Casual Date'],
        category: 'Food'
    },

    // --- UNDER 15K ---
    {
        id: 'out-39',
        name: 'Purple Bistro',
        budget: 'under_15k',
        location: 'Yaba',
        address: '32 University Rd, Akoka, Yaba, Lagos',
        openingHours: 'Daily: 11:00 AM - 10:00 PM',
        costBreakdown: '~₦10,000 / head',
        description: 'Modern fusion restaurant with a cool purple-themed ambiance. Very popular for Yaba dates.',
        source: 'Yaba Foodies',
        activities: ['Fusion Dining', 'Cocktails', 'Photography'],
        category: 'Food'
    },
    {
        id: 'out-40',
        name: 'Ofadaboy',
        budget: 'under_15k',
        location: 'Surulere',
        address: '1 Mba St, Surulere, Lagos',
        openingHours: 'Daily: 10:00 AM - 10:00 PM',
        costBreakdown: 'Under ₦10,000 / head',
        description: 'Authentic Nigerian experience specializing in the best Ofada rice in Lagos.',
        source: 'Pulse Nigeria',
        activities: ['Local Dining', 'Traditional Chops', 'Vibes'],
        category: 'Food'
    },
    {
        id: 'out-41',
        name: 'Cafeteria Lagos',
        budget: 'under_15k',
        location: 'Lekki Phase 1',
        address: '16 Bashorun Okusanya St, Lekki Phase 1, Lagos',
        openingHours: 'Daily: 8:00 AM - 9:00 PM',
        costBreakdown: '~₦12,000 / head',
        description: 'Highly aesthetic breakfast and brunch spot. Famous for pancakes, pasta, and milkshakes.',
        source: 'Instagram Trending',
        activities: ['Brunch', 'Milkshakes', 'Photography'],
        category: 'Food'
    },
    {
        id: 'out-42',
        name: 'PitStop Lagos',
        budget: 'under_15k',
        location: 'Victoria Island',
        address: '92A Younis Bashorun Street, VI, Lagos',
        openingHours: 'Daily: 6:00 AM - 10:00 PM',
        costBreakdown: '~₦12,000 / head',
        description: 'Cycling-themed cafe and wellness hub. Vibrant, spacious, and perfect for early morning vibes.',
        source: 'VI Professional Guide',
        activities: ['Healthy Dining', 'Coffee', 'Networking'],
        category: 'Food'
    },
    {
        id: 'out-43',
        name: 'Eric Kayser',
        budget: 'under_15k',
        location: 'Ikoyi / Lekki',
        address: '864A Bishop Aboyade Cole St, VI, Lagos',
        openingHours: 'Daily: 7:00 AM - 10:00 PM',
        costBreakdown: '~₦10,000 / head',
        description: 'French-style bakery and cafe. Perfect for high-quality croissants, sandwiches, and quiet work.',
        source: 'Cafe Reviewers',
        activities: ['Pastries', 'Coffee', 'Quiet Work'],
        category: 'Food'
    },
    {
        id: 'out-17',
        name: '12 Inch Baguette',
        budget: 'under_15k',
        location: 'Ikeja GRA',
        address: '7 Adekunle Fajuyi Way, Ikeja GRA, Lagos',
        openingHours: 'Daily: 11:00 AM - 9:00 PM',
        costBreakdown: 'Under ₦15k / head',
        description: 'Cozy spot known for Yaji Mince Beef Melts and Boba Tea. Best for small groups.',
        source: 'Lagos Foodie Guide',
        activities: ['Baguette Tasting', 'Boba Tea', 'Group Hangouts'],
        category: 'Food'
    },

    // --- UNDER 20K ---
    {
        id: 'out-44',
        name: 'Ziya Delicacy Boutique',
        budget: 'under_20k',
        location: 'Victoria Island',
        address: '26B Oju Olobun Close, VI, Lagos',
        openingHours: 'Daily: 10:00 AM - 10:00 PM',
        costBreakdown: '~15k - 20k / head',
        description: 'Exquisite, beautifully designed boutique restaurant. Perfect for romantic or aesthetic dates.',
        source: 'Luxury on a Budget',
        activities: ['Fine Dining', 'Photography', 'Romantic Dates'],
        category: 'Food'
    },
    {
        id: 'out-45',
        name: 'Vendome Lagos',
        budget: 'under_20k',
        location: 'Victoria Island',
        address: '5 Adetokunbo Ademola Street, VI, Lagos',
        openingHours: 'Daily: 12:00 PM - 12:00 AM',
        costBreakdown: '~15k - 20k / head',
        description: 'Artsy, chic interior with cosmopolitan dining options. Top-tier ambiance in the heart of VI.',
        source: 'VI Nightlife',
        activities: ['Cosmopolitan Dining', 'Art Appreciation', 'Cocktails'],
        category: 'Food'
    },
    {
        id: 'out-46',
        name: 'Milk and Honey',
        budget: 'under_20k',
        location: 'Ikoyi',
        address: '6-8 Thompson Ave, Ikoyi, Lagos',
        openingHours: 'Daily: 10:00 AM - 9:00 PM',
        costBreakdown: '~₦15,000 / head',
        description: 'Minimalistic aesthetic with a garden view. Offers a premium Ikoyi feel at accessible prices.',
        source: 'Ikoyi Locals',
        activities: ['Garden Dining', 'Minimalist Vibes', 'Socializing'],
        category: 'Food'
    },
    {
        id: 'out-47',
        name: 'Kuti’s Bistro',
        budget: 'under_20k',
        location: 'Ikeja',
        address: 'Ogundana Street, off Allen, Ikeja, Lagos',
        openingHours: 'Daily: 12:00 PM - 10:00 PM',
        costBreakdown: '~₦15,000 / head',
        description: 'Pocket-friendly with a mix of African and continental dishes in a cozy setting.',
        source: 'Mainland Dining Guide',
        activities: ['African Fusion', 'Quiet Lunch', 'Casual Dates'],
        category: 'Food'
    },
    {
        id: 'out-48',
        name: 'Bourbon House Cafe',
        budget: 'under_20k',
        location: 'Ikeja GRA',
        address: '2 Isaac John St, Ikeja GRA, Lagos',
        openingHours: 'Daily: 8:00 AM - 11:00 PM',
        costBreakdown: '~₦15,000 / head',
        description: 'Great coffee and a very chilled, cozy ambiance. One of the best cafe experiences in Ikeja GRA.',
        source: 'Ikeja Social',
        activities: ['Coffee', 'Continental Meals', 'Relaxation'],
        category: 'Food'
    },
    {
        id: 'out-49',
        name: 'Filmhouse Cinemas',
        budget: 'under_20k',
        location: 'Multiple Locations',
        address: 'Ikeja, VI, Lekki, Surulere',
        openingHours: 'Daily: 10:00 AM - Late',
        costBreakdown: 'Ticket + Popcorn ~₦12,000',
        description: 'Standard entertainment choice. Premium screens available within the 20k budget per person.',
        source: 'Entertainment Guide',
        activities: ['Movies', 'Popcorn', 'Relaxing'],
        category: 'Entertainment'
    },

    // --- UNDER 30K ---
    {
        id: 'out-35',
        name: 'Omu Resort',
        budget: 'under_30k',
        location: 'Ibeju-Lekki',
        address: 'Bogije, Ibeju-Lekki, Lagos',
        openingHours: 'Tue-Sat: 1:00 PM - 5:00 PM | Sun: 2:00 PM - 5:00 PM (Closed Monday)',
        costBreakdown: 'From ₦5k (Basic) to ₦20.5k (Prime)',
        description: 'Full-day adventure with zoo, go-karts, rides, water park, and mini-golf.',
        source: 'The Travel Hunters',
        activities: ['Zoo Visit', 'Go-Karting', 'Water Park', 'Archery'],
        category: 'Adventure'
    },
    {
        id: 'out-36',
        name: 'Upside Down House',
        budget: 'under_30k',
        location: 'Landmark VI',
        address: 'Landmark Centre, Water Corporation Rd, Victoria Island, Lagos',
        openingHours: 'Mon-Sun: 10:00 AM - 10:00 PM',
        costBreakdown: 'Entry: ~₦20,000',
        description: 'Quirky and highly Instagrammable architectural experience. Perfect for content.',
        source: 'TikTok Creators',
        activities: ['Content Creation', 'Photography', 'Optical Illusions'],
        category: 'Entertainment'
    }
];
