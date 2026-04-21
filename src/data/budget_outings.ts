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
    websiteUrl?: string;
}

export const BUDGET_OUTINGS: BudgetOuting[] = [
    // --- UNDER 5K (The ₦5,000 Budget) ---
    {
        id: 'out-50',
        name: 'SKYBOX LEKKI',
        budget: 'under_30k',
        location: 'Lekki Phase 1',
        address: '8 Otunba Adedoyin Ogungbe Cres, Lekki Phase 1, Lagos',
        openingHours: 'Daily: 12:00 PM - Late',
        costBreakdown: 'Cocktails from ₦8,000 | Small Chops from ₦6,000',
        description: 'Elite rooftop lounge with a stunning view of the Lekki skyline. A premium experience where a full night out typically ranges between ₦20,000 - ₦30,000.',
        source: 'Verified Instagram Spot',
        activities: ['Rooftop Vibes', 'Sunset Views', 'Cocktails'],
        category: 'Entertainment',
        websiteUrl: 'https://www.instagram.com/skybox_lekki'
    },
    {
        id: 'out-51',
        name: 'CHAKAVILLE BEACH RESORT',
        budget: 'under_20k',
        location: 'Lekki / Ajah',
        address: 'Eleko Beach Rd, Lekki',
        openingHours: 'Daily: 24 Hours',
        costBreakdown: 'Daycation Access ~₦15,000',
        description: 'Serene beach front away from the city noise. Best enjoyed as a full day package with meals and pool access.',
        source: 'Beach Guides',
        activities: ['Swimming', 'Beach Picnic', 'Relaxation'],
        category: 'Beach',
        websiteUrl: 'https://www.instagram.com/chakavillebeachresort/'
    },
    {
        id: 'out-52',
        name: 'WEST SIDE BEACH',
        budget: 'under_5k',
        location: 'Okun-Ajah',
        address: 'Okun-Ajah Waterfront, Lagos',
        openingHours: 'Daily: 24 Hours',
        costBreakdown: 'Entry: ₦2,500',
        description: 'Great for weekend getaways with friends. Known for its cool breeze and minimalist affordable beach vibe.',
        source: 'Lagos Discovery',
        activities: ['Beach Sports', 'Barbecue', 'Sunrise Viewing'],
        category: 'Beach',
        websiteUrl: 'https://maps.app.goo.gl/9yXY66K6K6K6K6K67'
    },
    {
        id: 'out-53',
        name: 'APAPA AMUSEMENT PARK',
        budget: 'under_5k',
        location: 'Apapa',
        address: '1 Randle Rd, Apapa, Lagos',
        openingHours: 'Daily: 9:00 AM - 6:00 PM',
        costBreakdown: 'Entry: Free | Rides from ₦500',
        description: 'A classic family destination. Many rides are very affordable, perfect for a nostalgic date.',
        source: 'Mainland Guide',
        activities: ['Fairground Rides', 'Family Fun', 'Photography'],
        category: 'Entertainment',
        websiteUrl: 'https://maps.app.goo.gl/ApapaPark'
    },
    {
        id: 'out-54',
        name: 'JET BEACH & HOTEL',
        budget: 'under_15k',
        location: 'Lekki',
        address: 'Km 36 Lekki-Epe Expressway, Lagos',
        openingHours: 'Daily: 24 Hours',
        costBreakdown: 'Entry: ₦5,000 (Reg) / ₦8,000 (VIP)',
        description: 'A premium beach club experience. While slightly higher entry, the facilities are top-tier and well-maintained.',
        source: 'Verified Tourism Spot',
        activities: ['Swimming', 'Beach Party', 'Relaxation'],
        category: 'Beach',
        websiteUrl: 'https://www.instagram.com/jetbeachandhotel'
    },
    {
        id: 'out-55',
        name: 'JK RANDLE CENTRE LAGOS',
        budget: 'under_5k',
        location: 'Onikan',
        address: 'Onikan, Lagos Island',
        openingHours: 'Tue-Sun: 10:00 AM - 5:00 PM',
        costBreakdown: 'Entry: ₦2,000',
        description: 'A state-of-the-art hub for Yoruba history and culture. Architecturally stunning.',
        source: 'Culture Lagos',
        activities: ['Museum Tour', 'History Appreciation', 'Photography'],
        category: 'Culture',
        websiteUrl: 'https://www.instagram.com/jk_randle_centre'
    },
    {
        id: 'out-56',
        name: 'ADEGBOLA GALLERY',
        budget: 'under_5k',
        location: 'Lagos Island',
        address: 'Onikan / Island Area, Lagos',
        openingHours: 'Mon-Sat: 10:00 AM - 6:00 PM',
        costBreakdown: 'Entry: Free / Donation based',
        description: 'Unique art space showcasing contemporary Nigerian talent in a cozy setting.',
        source: 'Art Hunters',
        activities: ['Art Appreciation', 'Gallery Walk', 'Meeting Artists'],
        category: 'Art',
        websiteUrl: 'https://maps.app.goo.gl/AdegbolaGallery'
    },
    {
        id: 'out-57',
        name: 'OPIVINE KITCHEN',
        budget: 'under_5k',
        location: 'Surulere',
        address: '119 Ogunlana Drive, Surulere, Lagos',
        openingHours: 'Daily: 9:00 AM - 9:00 PM',
        costBreakdown: 'Meals from ₦2,500',
        description: 'Home-style Surulere cooking that hits the spot without the Lekki price tag.',
        source: 'Surulere Foodies',
        activities: ['Local Dining', 'Takeout', 'Lunch Dates'],
        category: 'Food',
        websiteUrl: 'https://www.instagram.com/opivine.kitchen'
    },
    {
        id: 'out-58',
        name: 'WINDSOR GALLERY',
        budget: 'under_5k',
        location: 'Victoria Island',
        address: 'VI, Lagos State',
        openingHours: 'Daily: 10:00 AM - 6:00 PM',
        costBreakdown: 'Entry: Free',
        description: 'Chic art gallery perfect for a quiet afternoon date or artistic inspiration.',
        source: 'Island Art Community',
        activities: ['Art Walk', 'Networking', 'Photography'],
        category: 'Art',
        websiteUrl: 'https://www.windsorgallery.com.ng'
    },
    {
        id: 'out-59',
        name: 'WAFFLE MONSTER',
        budget: 'under_5k',
        location: 'Lekki',
        address: 'Lekki Phase 1, Lagos',
        openingHours: 'Daily: 9:00 AM - 9:00 PM',
        costBreakdown: 'Waffles from ₦3,500',
        description: 'The best waffles in Lekki. A perfect under-5k treat for breakfast or dessert.',
        source: 'Dessert Lovers',
        activities: ['Breakfast', 'Sweet Treats', 'Casual Hangout'],
        category: 'Food',
        websiteUrl: 'https://www.instagram.com/waffle.monster'
    },
    {
        id: 'out-60',
        name: 'GAMELAND',
        budget: 'under_5k',
        location: 'Lekki',
        address: 'The Lekki Coliseum, Providence St, Lekki',
        openingHours: 'Daily: 12:00 PM - 10:00 PM',
        costBreakdown: 'Game Cards from ₦2,000',
        description: 'Exciting gaming hub within the Lekki Coliseum. Great for competitive friends.',
        source: 'Gamers Lagos',
        activities: ['Arcade Games', 'VR', 'Leisure'],
        category: 'Entertainment',
        websiteUrl: 'https://www.instagram.com/gameland_lagos'
    },
    {
        id: 'out-61',
        name: 'LUFASI NATURE PARK',
        budget: 'under_5k',
        location: 'Lekki / Ajah',
        address: 'Majek, Lekki-Epe Expressway',
        openingHours: 'Daily: 9:00 AM - 6:00 PM',
        costBreakdown: 'Entry: ₦1,500',
        description: 'Forest adventure and peace in the city. Perfect for nature walks, picnics, and affordable greenery.',
        source: 'Eco Travels',
        activities: ['Forest Hiking', 'Picnic', 'Animal Watching'],
        category: 'Nature',
        websiteUrl: 'https://www.instagram.com/lufasipark'
    },

    // --- UNDER 15K (The ₦15,000 Budget) ---
    {
        id: 'out-62',
        name: 'SO Restaurant and Lounge',
        budget: 'under_15k',
        location: 'Surulere',
        address: '52 Adeniran Ogunsanya St, Surulere, Lagos',
        openingHours: 'Daily: 10:00 AM - 12:00 AM',
        costBreakdown: 'Complete Meals ~₦10,000 / head',
        description: 'Formerly known as Samiat Ololade. This high-end lounge in Surulere is famous for its classy ambiance and peppered fish.',
        source: 'Surulere Premium Guides',
        activities: ['Fine Dining', 'Live Music', 'Date Nights'],
        category: 'Food',
        websiteUrl: 'https://www.instagram.com/sorestaurantandlounge'
    },
    {
        id: 'out-63',
        name: 'Lagosia Restaurant',
        budget: 'under_15k',
        location: 'Lekki',
        address: 'Lekki, Lagos',
        openingHours: 'Daily: 11:00 AM - 11:00 PM',
        costBreakdown: 'Full Dinner ~₦12,000 / head',
        description: 'Modern Nigerian cuisine in a trendy setting. Good for birthday dinners.',
        source: 'Instagram Foodies',
        activities: ['Dinner Dates', 'Cocktails', 'Photography'],
        category: 'Food',
        websiteUrl: 'https://www.instagram.com/lagosia.restaurant'
    },
    {
        id: 'out-64',
        name: '1812foods',
        budget: 'under_15k',
        location: 'Lekki / VI',
        address: 'Victoria Island Area, Lagos',
        openingHours: 'Daily: 9:00 AM - 9:00 PM',
        costBreakdown: 'Sharing Platters ~₦10,000',
        description: 'Top-tier gourmet delivery and casual dining experience.',
        source: 'Office Lunch Guide',
        activities: ['Gourmet Dining', 'Group Platter', 'Socializing'],
        category: 'Food',
        websiteUrl: 'https://www.instagram.com/1812foods'
    },
    {
        id: 'out-65',
        name: 'Toofunkingsoft',
        budget: 'under_15k',
        location: 'Ikeja GRA',
        address: '32 Mobolaji Bank Anthony Way, Ikeja',
        openingHours: 'Daily: 10:00 AM - 10:00 PM',
        costBreakdown: 'Desserts from ₦4,600',
        description: 'Most aesthetic ice cream spot in Ikeja. Perfect for a sweet date.',
        source: 'Mainland Social',
        activities: ['Ice Cream', 'Photography', 'Sugar Rush'],
        category: 'Food',
        websiteUrl: 'https://www.instagram.com/toofunkingsoft'
    },
    {
        id: 'out-66',
        name: 'sidewalkvi',
        budget: 'under_15k',
        location: 'Victoria Island',
        address: 'Karimu Kotun St, VI, Lagos',
        openingHours: 'Daily: 4:00 PM - Late',
        costBreakdown: 'Chops & Drinks ~₦12,000 / head',
        description: 'The quintessential VI lounge vibe. Great for after-work drinks.',
        source: 'VI Work Life',
        activities: ['Lounge Vibe', 'Cocktails', 'Late Night Bites'],
        category: 'Food',
        websiteUrl: 'https://www.instagram.com/sidewalkvi'
    },
    {
        id: 'out-67',
        name: 'thecoffeesociety',
        budget: 'under_15k',
        location: 'Lekki',
        address: 'Lekki Phase 1, Lagos',
        openingHours: 'Daily: 7:00 AM - 7:00 PM',
        costBreakdown: 'Coffee & Brunch ~₦9,000 / head',
        description: 'Minimalist cafe with world-class beans and a quiet work environment.',
        source: 'Worker Bees Lagos',
        activities: ['Coffee Tasting', 'Remote Work', 'Brunch'],
        category: 'Food',
        websiteUrl: 'https://www.instagram.com/thecoffeesocietylagos'
    },
    {
        id: 'out-68',
        name: 'Breakfast Corner',
        budget: 'under_15k',
        location: 'Ikeja GRA',
        address: 'Isaac John St, Ikeja GRA',
        openingHours: 'Daily: 8:00 AM - 9:00 PM',
        costBreakdown: 'Full Breakfast ~₦10,000 / head',
        description: 'The go-to spot for pancakes, waffles and English breakfast on the Mainland.',
        source: 'Breakfast Club',
        activities: ['Pancake Brunch', 'Morning Dates', 'Family Breakfast'],
        category: 'Food',
        websiteUrl: 'https://www.instagram.com/breakfastcorner.ng'
    },
    {
        id: 'out-69',
        name: 'Lagos Trivia Night',
        budget: 'under_15k',
        location: 'Multiple (VI/Lekki)',
        address: 'Rotation between top lounges',
        openingHours: 'Wednesdays/Thursdays: 7 PM',
        costBreakdown: 'Entry/Participation ~₦5,000 + Food',
        description: 'Test your knowledge and win prizes in a high-energy social environment.',
        source: 'Social Gatherings',
        activities: ['Trivia Games', 'Networking', 'Prizes'],
        category: 'Entertainment',
        websiteUrl: 'https://www.instagram.com/trivia.ng'
    },
    {
        id: 'out-70',
        name: 'Tasty Fried Chicken (Marina)',
        budget: 'under_15k',
        location: 'Lagos Island',
        address: 'Marina / Island, Lagos',
        openingHours: 'Daily: 11:00 AM - 8:00 PM',
        costBreakdown: 'Big Meals ~₦7,000',
        description: 'Fast, fresh, and famous for their tasty local recipes. The definitive Island lunch spot.',
        source: 'Island Workers',
        activities: ['Quick Lunch', 'Traditional Chops', 'Takeaway'],
        category: 'Food',
        websiteUrl: 'https://tastyfriedchicken.com/'
    },
    {
        id: 'out-71',
        name: 'FirewoodJollofRice',
        budget: 'under_15k',
        location: 'Lekki',
        address: 'Lekki Phase 1, Lagos',
        openingHours: 'Daily: 10:00 AM - 10:00 PM',
        costBreakdown: 'Party Jollof Feast ~₦8,000',
        description: 'Authentic firewood-cooked smokey jollof rice. Real Lagos party taste.',
        source: 'Party Foodies',
        activities: ['Local Dining', 'Jollof Appreciation', 'Vibing'],
        category: 'Food',
        websiteUrl: 'https://www.instagram.com/firewoodjollof'
    },

    // --- UNDER 20K (The ₦20,000 Budget) ---
    {
        id: 'out-72',
        name: 'Crafts Village Surulere - Sip & Paint',
        budget: 'under_20k',
        location: 'Surulere',
        address: 'Adeniran Ogunsanya, Surulere',
        openingHours: 'Special Events / Weekends',
        costBreakdown: 'Session: ₦15,000 (Includes Wine)',
        description: 'Unleash your inner artist with a glass of wine in a fun, guided environment.',
        source: 'Creative Hub',
        activities: ['Painting', 'Wine Tasting', 'Socializing'],
        category: 'Art',
        websiteUrl: 'https://www.instagram.com/craftsvillage_sipandpaint'
    },
    {
        id: 'out-73',
        name: 'PROVIDHA FUN CITY IKEJA Arcade Date',
        budget: 'under_20k',
        location: 'Ikeja',
        address: 'Inside Maryland Mall, Ikeja',
        openingHours: 'Daily: 10:00 AM - 10:00 PM',
        costBreakdown: 'VIP Game Card ~₦18,000',
        description: 'The perfect high-energy arcade date with hundreds of games and prizes.',
        source: 'Arcade Lovers',
        activities: ['Gaming', 'Bowling', 'Ice Skating'],
        category: 'Entertainment',
        websiteUrl: 'https://www.instagram.com/providha_funcity'
    }
];
