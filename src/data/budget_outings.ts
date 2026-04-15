export interface BudgetOuting {
    id: string;
    name: string;
    budget: 'under_5k' | 'under_15k' | 'under_20k' | 'under_30k';
    location: string;
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
        costBreakdown: 'Entry: ₦2,000',
        description: 'Fan favourite for group outings and birthdays. Good vibes and basic beach activities.',
        source: 'Lagos Community',
        activities: ['Beach Soccer', 'Volleyball', 'Socializing'],
        category: 'Beach'
    },
    {
        id: 'out-2',
        name: 'Paradise Beach Resort',
        budget: 'under_5k',
        location: 'Okun-Ajah, Lekki',
        costBreakdown: 'Entry: ₦2,000',
        description: 'Scenic laid-back environment great for picnics and chill hangouts. Perfect for those who want quiet.',
        source: 'Budget Travelers',
        activities: ['Picnic', 'Chill', 'Sunbathing'],
        category: 'Beach'
    },
    {
        id: 'out-3',
        name: 'Avista Beach',
        budget: 'under_5k',
        location: 'Lekki',
        costBreakdown: 'Entry: ₦4,000',
        description: 'Photogenic space with good service and a fun, youthful atmosphere. Very aesthetic for photos.',
        source: 'Lagos Content Creators',
        activities: ['Photography', 'Music', 'Beach Vibes'],
        category: 'Beach'
    },
    {
        id: 'out-4',
        name: 'Jet Beach Club',
        budget: 'under_5k',
        location: 'Lekki',
        costBreakdown: 'Entry: ₦5,000',
        description: 'Sleek cabanas and lively weekend energy. Entry covers grounds access.',
        source: 'TikTok Trend',
        activities: ['Beach Relaxation', 'Music', 'Networking'],
        category: 'Beach'
    },
    {
        id: 'out-5',
        name: 'Iceland Beach',
        budget: 'under_5k',
        location: 'Lekki',
        costBreakdown: 'Entry: Under ₦5,000',
        description: 'One of the most Instagrammable beach spots in Lagos. Clean and serene, great for solo dates.',
        source: 'Instagram Picks',
        activities: ['Photography', 'Solo Dates', 'Reading'],
        category: 'Beach'
    },
    {
        id: 'out-6',
        name: 'Laguna Beach',
        budget: 'under_5k',
        location: 'Lekki',
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
        costBreakdown: 'Entry: ₦200 - ₦500',
        description: 'Former colonial prison turned cultural hub with art, history, and live performances on Broad Street.',
        source: 'The Travel Hunters',
        activities: ['History Walk', 'Live Performances', 'Art'],
        category: 'Culture'
    },
    {
        id: 'out-8',
        name: 'Nike Art Gallery',
        budget: 'under_5k',
        location: 'Lekki Phase 1',
        costBreakdown: 'Entry: Free',
        description: 'Iconic gallery with 7,000+ works. You might meet Mama Nike herself! No-cost cultural gem.',
        source: 'Social Prefect',
        activities: ['Art Appreciation', 'Souvenirs', 'Guided Tour'],
        category: 'Art'
    },
    {
        id: 'out-9',
        name: 'Lekki Conservation Centre',
        budget: 'under_5k',
        location: 'Lekki',
        costBreakdown: 'Entry/Trails: ₦3,000 - ₦5,000',
        description: 'Africa\'s longest canopy walkway. Spot monkeys, crocodiles, and peacocks in their natural habitat.',
        source: 'Eco-Travelers',
        activities: ['Canopy Walk', 'Animal Spotting', 'Giant Chess'],
        category: 'Nature'
    },
    {
        id: 'out-10',
        name: 'Dr Oluyomi Abayomi Park',
        budget: 'under_5k',
        location: 'Oregun, Ikeja',
        costBreakdown: 'Entry: ₦1,000',
        description: 'Peaceful park in the heart of Ikeja. Great for a low-key outdoor outing that is easy on the pocket.',
        source: 'Mainland Guide',
        activities: ['Picnic', 'Reading', 'Nature Walk'],
        category: 'Nature'
    },
    {
        id: 'out-11',
        name: 'Lufasi Nature Park',
        budget: 'under_5k',
        location: 'Ibeju-Lekki',
        costBreakdown: 'Entry: ₦1,500',
        description: 'Nature park near Omu Resort. Great starting point for a full-day adventure in the Ajah axis.',
        source: 'Adventure Enthusiasts',
        activities: ['Nature Walk', 'Bird Watching', 'Picnic'],
        category: 'Nature'
    },
    {
        id: 'out-12',
        name: 'Oshey Bar',
        budget: 'under_5k',
        location: 'Ikeja GRA',
        costBreakdown: '~₦4,700 per head',
        description: 'Budget-friendly bar in Ikeja GRA. Featured by Pulse Nigeria as a top budget pick for drinks.',
        source: 'Pulse Nigeria',
        activities: ['Socializing', 'Drinks', 'Nightlife'],
        category: 'Food'
    },
    {
        id: 'out-13',
        name: 'Toofunkingsoft',
        budget: 'under_5k',
        location: 'Ikeja GRA',
        costBreakdown: '~₦4,600 total',
        description: 'Trendy ice cream store. A cool and sweet under-5k outing for friends and dates.',
        source: 'Food Bloggers',
        activities: ['Ice Cream', 'Sweet Treats', 'Casual Date'],
        category: 'Food'
    },
    {
        id: 'out-14',
        name: 'John Randle Centre',
        budget: 'under_5k',
        location: 'Onikan, Lagos Island',
        costBreakdown: 'Entry: ₦5,000',
        description: 'Interactive cultural museum. One of the most unique Yoruba heritage experiences in Lagos.',
        source: 'Cultural Aficionados',
        activities: ['Museum Tour', 'History', 'Learning'],
        category: 'Culture'
    },
    {
        id: 'out-15',
        name: 'Vintage Africana',
        budget: 'under_5k',
        location: 'Oko Oba, Agege',
        costBreakdown: 'Entry: ₦5,000',
        description: 'Unique cultural experience in Agege. Off the beaten path but worth the visit.',
        source: 'Hidden Gems Guide',
        activities: ['Culture', 'Heritage', 'Photography'],
        category: 'Culture'
    },
    {
        id: 'out-16',
        name: 'Jazzhole',
        budget: 'under_5k',
        location: 'Awolowo Rd, Ikoyi',
        costBreakdown: 'Entry: Free',
        description: 'Hip book and record store. Great for music lovers, culture heads, and quiet coffee.',
        source: 'Ikoyi Inside',
        activities: ['Music Collection', 'Book Browsing', 'Coffee'],
        category: 'Culture'
    },

    // --- UNDER 15K ---
    {
        id: 'out-17',
        name: '12 Inch Baguette',
        budget: 'under_15k',
        location: 'Ikeja GRA',
        costBreakdown: 'Under ₦15k / head',
        description: 'Cozy spot known for Yaji Mince Beef Melts, Baguettes, and Boba Tea. Best for small groups.',
        source: 'Lagos Foodie Guide',
        activities: ['Baguette Tasting', 'Boba Tea', 'Group Hangouts'],
        category: 'Food'
    },
    {
        id: 'out-18',
        name: 'Sankof Lagos',
        budget: 'under_15k',
        location: 'Surulere',
        costBreakdown: '₦5k - ₦10k / head',
        description: '24hr local vibes spot with live band performances. Perfect for late-night music in Surulere.',
        source: 'Surulere Nightlife',
        activities: ['Live Music', 'Dancing', 'Late Night Dining'],
        category: 'Entertainment'
    },
    {
        id: 'out-19',
        name: 'The Nest Lounge',
        budget: 'under_15k',
        location: 'Surulere',
        costBreakdown: 'Under ₦15k / head',
        description: 'Affordable rooftop spot inside a co-working space. Karaoke sessions available for extra fun.',
        source: 'Rooftop Seekers',
        activities: ['Karaoke', 'Rooftop Vibes', 'Cocktails'],
        category: 'Entertainment'
    },
    {
        id: 'out-20',
        name: 'VR Game Arcade',
        budget: 'under_15k',
        location: 'Ogunlana Dr, Surulere',
        costBreakdown: 'Prices vary (Under 15k typical)',
        description: 'Virtual reality game arcade. Great for tech-loving groups looking for active entertainment.',
        source: 'Gaming Community',
        activities: ['Virtual Reality', 'Gaming', 'Teambuilding'],
        category: 'Entertainment'
    },
    {
        id: 'out-21',
        name: 'Arrows Den Archery',
        budget: 'under_15k',
        location: 'Landmark Centre, VI',
        costBreakdown: 'From ₦7,000',
        description: 'Real archery experience. A fun and unique group activity at Landmark Coastline.',
        source: 'Adventure Guides',
        activities: ['Archery Lessons', 'Competitions', 'Outdoor Fun'],
        category: 'Adventure'
    },
    {
        id: 'out-22',
        name: 'New Afrika Shrine',
        budget: 'under_15k',
        location: 'Ikeja',
        costBreakdown: 'Low Entry / Free on some nights',
        description: 'Iconic music venue celebrating Fela legacy. Live Afrobeat music nights. A true Lagos staple.',
        source: 'Music Lovers',
        activities: ['Afrobeat Music', 'Fela Legacy', 'Vibes'],
        category: 'Culture'
    },
    {
        id: 'out-23',
        name: 'Elegushi Beach',
        budget: 'under_15k',
        location: 'Lekki',
        costBreakdown: '₦1k Gate + ₦3k Lounge',
        description: 'Most popular beach in Lagos with numerous clubs like Wavebeach and Voda.',
        source: 'Beach Hoppers',
        activities: ['Beach Soccer', 'Lounge Hangouts', 'Music'],
        category: 'Beach'
    },
    {
        id: 'out-24',
        name: 'Whitedeck Resort Beach',
        budget: 'under_15k',
        location: 'Ajah',
        costBreakdown: 'Entry: ₦5,000',
        description: 'Includes a free cocktail and shared beach seat. Great poolside/beach mix in the Ajah axis.',
        source: 'Resort Hunters',
        activities: ['Swimming', 'Cocktails', 'Poolside Chill'],
        category: 'Beach'
    },

    // --- UNDER 20K ---
    {
        id: 'out-25',
        name: 'The Griot Lagos',
        budget: 'under_20k',
        location: 'Ogunlana Drive, Surulere',
        costBreakdown: 'Under ₦20k / head',
        description: 'Chill vibes restaurant with board games. Open late for groups who love interactive food dates.',
        source: 'Board Game Lovers',
        activities: ['Board Games', 'Fusion Dining', 'Socializing'],
        category: 'Food'
    },
    {
        id: 'out-26',
        name: 'Yellow Chilli',
        budget: 'under_20k',
        location: 'Ikeja GRA',
        costBreakdown: 'Under ₦20k / head',
        description: 'Popular Nigerian and continental upscale restaurant. Solid, reliable meals.',
        source: 'Gourmet Guides',
        activities: ['Upscale Dining', 'Seafood Tasting', 'Professional Lunch'],
        category: 'Food'
    },
    {
        id: 'out-27',
        name: 'Kulture Yard',
        budget: 'under_20k',
        location: 'Adeniyi Jones, Ikeja',
        costBreakdown: 'Under ₦20k / head',
        description: 'Music-infused hangout spot. Great for groups who want a mix of good food and energetic vibes.',
        source: 'Lagos Socialites',
        activities: ['Music', 'Vibes', 'Group Dining'],
        category: 'Food'
    },
    {
        id: 'out-28',
        name: 'Amala Tawa',
        budget: 'under_20k',
        location: 'Opebi, Ikeja',
        costBreakdown: 'Under ₦20k / head',
        description: 'Beloved local spot for authentic Nigerian food. Famous for high-quality Amala and local soups.',
        source: 'Local Foodies',
        activities: ['Traditional Dining', 'Amala Tasting'],
        category: 'Food'
    },
    {
        id: 'out-29',
        name: 'Lalaba the Village',
        budget: 'under_20k',
        location: 'Allen Avenue, Ikeja',
        costBreakdown: 'Under ₦20k / head',
        description: 'Cultural dining experience on Allen. Great local food with a village-themed presentation.',
        source: 'Theme Dining Fans',
        activities: ['Cultural Food', 'Village Vibe', 'Casual Dining'],
        category: 'Food'
    },
    {
        id: 'out-30',
        name: 'MJ Bites',
        budget: 'under_20k',
        location: 'Ikeja City Mall',
        costBreakdown: 'Under ₦10k / head',
        description: 'Quick service chicken and burgers. Two people can comfortably eat under ₦10k here.',
        source: 'Fast Food Guides',
        activities: ['Quick Meals', 'Snacking', 'Mall Browsing'],
        category: 'Food'
    },
    {
        id: 'out-31',
        name: 'Norma',
        budget: 'under_20k',
        location: 'Alausa, Ikeja',
        costBreakdown: 'Under ₦20k / head',
        description: 'Budget-friendly restaurant on Kafi Street. Excellent casual dining option for meetings or dates.',
        source: 'Alausa Locals',
        activities: ['Casual Dining', 'Meeting Point'],
        category: 'Food'
    },
    {
        id: 'out-32',
        name: 'Kebab House',
        budget: 'under_20k',
        location: 'Mobolaji Bank Anthony, Ikeja',
        costBreakdown: 'Under ₦20k / head',
        description: 'Street-style kebabs and budget-friendly protein. Quick and satisfying.',
        source: 'Street Food Lovers',
        activities: ['Kebab Tasting', 'Takeaway'],
        category: 'Food'
    },
    {
        id: 'out-33',
        name: 'Periwinkle',
        budget: 'under_20k',
        location: 'Adeniyi Jones, Ikeja',
        costBreakdown: 'Under ₦20k / head',
        description: 'Hidden gem serving English breakfast and seafood pasta. Perfect for solo dates.',
        source: 'Hidden Gem Hunters',
        activities: ['Breakfast', 'Seafood Pasta', 'Solo Dates'],
        category: 'Food'
    },
    {
        id: 'out-34',
        name: 'Orchid Bistro',
        budget: 'under_20k',
        location: 'Ikeja GRA',
        costBreakdown: 'Under ₦20k / head',
        description: 'Aesthetic restaurant with picture-worthy interior and lush garden vibes.',
        source: 'Aesthetic Seekers',
        activities: ['Garden Dining', 'Photography', 'Brunch'],
        category: 'Food'
    },

    // --- UNDER 30K ---
    {
        id: 'out-35',
        name: 'Omu Resort',
        budget: 'under_30k',
        location: 'Bogije, Ibeju-Lekki',
        costBreakdown: 'From ₦5k (Basic) to ₦20.5k (Prime)',
        description: 'Full-day adventure with zoo, go-karts, rides, water park, kayaking, and mini-golf.',
        source: 'The Travel Hunters',
        activities: ['Zoo Visit', 'Go-Karting', 'Water Park', 'Archery'],
        category: 'Adventure'
    },
    {
        id: 'out-36',
        name: 'Upside Down House',
        budget: 'under_30k',
        location: 'Landmark Centre, VI',
        costBreakdown: 'Entry: ~₦20,000',
        description: 'Quirky and highly Instagrammable architectural experience. Perfect for content creators.',
        source: 'TikTok Creators',
        activities: ['Content Creation', 'Photography', 'Optical Illusions'],
        category: 'Entertainment'
    }
];
