import type { Area, Question } from '../types';

export const QUESTIONS: Question[] = [
    {
        id: 'rent',
        text: {
            en: "What's your yearly rent budget?",
            pidgin: "How much be your rent budget per year?"
        },
        options: [
            { id: 'r1', label: { en: '₦200k – ₦500k', pidgin: '₦200k – ₦500k' }, value: 'entry' },
            { id: 'r2', label: { en: '₦500k – ₦1m', pidgin: '₦500k – ₦1m' }, value: 'budget' },
            { id: 'r3', label: { en: '₦1m – ₦2m', pidgin: '₦1m – ₦2m' }, value: 'standard' },
            { id: 'r4', label: { en: '₦2m – ₦5m', pidgin: '₦2m – ₦5m' }, value: 'mid' },
            { id: 'r5', label: { en: '₦5m – ₦7m', pidgin: '₦5m – ₦7m' }, value: 'upper_mid' },
            { id: 'r6', label: { en: '₦7m – ₦10m', pidgin: '₦7m – ₦10m' }, value: 'premium' },
            { id: 'r7', label: { en: '₦10m+', pidgin: '₦10m+' }, value: 'luxury' },
        ],
        multiSelect: true,
    },
    {
        id: 'work',
        text: {
            en: "Where is your workplace / preference?",
            pidgin: "Where your office dey or where you wan dey go?"
        },
        options: [
            { id: 'w1', label: { en: 'I need something CENTRAL (Mainland)', pidgin: 'I wan dey CENTRAL (Mainland)' }, value: 'central' },
            { id: 'w2', label: { en: 'I don’t mind long commutes', pidgin: 'Distance no be wahala' }, value: 'commute' },
            { id: 'w3', label: { en: 'I want something close to the Island', pidgin: 'I wan dey close to Island' }, value: 'island' },
        ],
        multiSelect: true,
    },
    {
        id: 'noise',
        text: {
            en: "How much noise can you tolerate?",
            pidgin: "Shey you like noise or you prefer jeje life?"
        },
        options: [
            { id: 'n1', label: { en: 'Very quiet preferred', pidgin: 'I like everywhere koma (Very Quiet)' }, value: 'quiet' },
            { id: 'n2', label: { en: 'Moderately quiet', pidgin: 'Small noise no bad' }, value: 'moderate' },
            { id: 'n3', label: { en: 'I don’t mind noise (Bring the hustle)', pidgin: 'Noise no dey move me (Bring the hustle)' }, value: 'noisy' },
        ],
        multiSelect: true,
    },
    {
        id: 'transport',
        text: {
            en: "What's your preferred mode of transport?",
            pidgin: "How you dey like move around?"
        },
        options: [
            { id: 't1', label: { en: 'BRT / Danfo friendly', pidgin: 'BRT / Danfo dey okay' }, value: 'public' },
            { id: 't2', label: { en: 'Ride-hailing (Uber/Bolt)', pidgin: 'Na Uber/Bolt I dey use' }, value: 'ride' },
            { id: 't3', label: { en: 'Walking-friendly area', pidgin: 'Area wey person fit trek' }, value: 'walk' },
            { id: 't4', label: { en: 'I drive myself (Private Car)', pidgin: 'I get my own motor' }, value: 'private' },
            { id: 't5', label: { en: '3-Wheeler (Keke)', pidgin: 'Maruwa/Keke' }, value: 'keke' },
        ],
        multiSelect: true,
    },
    {
        id: 'lifestyle',
        text: {
            en: "What's your ideal weekend vibe?",
            pidgin: "Wetin be your pattern for weekend?"
        },
        options: [
            { id: 'l1', label: { en: 'Nightlife & Parties', pidgin: 'Jaiye & Faaji' }, value: 'nightlife' },
            { id: 'l2', label: { en: 'Family & Relaxation', pidgin: 'Family time / Jeje relax' }, value: 'family' },
            { id: 'l3', label: { en: 'Creative & Artsy', pidgin: 'Arts & Shows' }, value: 'creative' },
            { id: 'l4', label: { en: 'Fitness & Outdoors', pidgin: 'Gym & Waka' }, value: 'fitness' },
        ],
        multiSelect: true,
    },
    {
        id: 'electricity',
        text: {
            en: "How critical is 24/7 power?",
            pidgin: "Shey light situation must berekete?"
        },
        options: [
            { id: 'e1', label: { en: 'Must be stable (20hrs+)', pidgin: 'E gats stable (20hrs+)' }, value: 'stable' },
            { id: 'e2', label: { en: 'Average is fine (12-18hrs)', pidgin: 'Average dey okay (12-18hrs)' }, value: 'manageable' },
            { id: 'e3', label: { en: 'I have backup / Don’t mind', pidgin: 'I get gen/solar / No wahala' }, value: 'alternative' },
        ],
        multiSelect: true,
    },
];

export const AREAS: Area[] = [
    {
        id: 'abule_egba',
        name: 'Abule Egba',
        description: {
            en: 'Affordable, bustling, and great matching for those who don’t mind a commute.',
            pidgin: 'E cheap, e dey hustle, and e make sense if you no mind waka small.'
        },
        priceRange: {
            en: "₦300k - ₦600k (Miniflat)",
            pidgin: "₦300k - ₦600k (Room & Parlour)"
        },
        commuteTo: { vi: '1hr 45m', ikeja: '40m' },
        hotspots: [
            { name: 'Chicken Republic', category: 'food' },
            { name: 'Oja Oba Market', category: 'activity' },
            { name: 'Sweet Sensation', category: 'food' },
            { name: 'Justrite Superstore', category: 'activity' },
            { name: 'Mr Biggs', category: 'food' }
        ],
        attributes: {
            rent: ['budget'],
            work: ['commute'],
            noise: ['noisy', 'moderate'],
            transport: ['public', 'private', 'keke'],
            lifestyle: ['family', 'fitness'],
            electricity: ['alternative', 'manageable'],
        },
        floodRisk: 'low',
        powerAvgHours: 10,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦20k - ₦50k',
        minPrice: 300000,
        maxPrice: 600000,
        innerLocalities: ['Meiran', 'Command', 'Ekoro', 'Pipeline', 'U-Turn'],
        subLocalityInsights: {
            'U-Turn': {
                en: "The transport heartbeat. 'Everything move through here. Busy, high energy, and the best puff-puff on this axis.'",
                pidgin: "Waka headquarters. 'Everywhere active. Vibes set, and puff-puff for here na fire.'"
            },
            'Ekoro Road': {
                en: "The residential artery. 'Connecting major parts of Abule Egba. Busy markets and a gateway to Alimosho.'",
                pidgin: "Area road wey set. 'E link many places for Abule Egba. Market full ground and e connect Alimosho well.'"
            }
        },
        subLocalityDetails: {
            'U-Turn': {
                placesToVisit: [
                    { name: 'Oja Oba Market', url: 'https://www.instagram.com/explore/tags/abuleegba/' },
                    { name: 'Justrite Superstore', url: 'https://www.justriteonline.com/' }
                ],
                whatToEat: [
                    { name: 'Amala joints (U-Turn)', url: 'https://www.instagram.com/explore/tags/amala/' },
                    { name: 'Street puff-puff & akara', url: 'https://www.instagram.com/explore/tags/lagosstreetfood/' }
                ],
                sports: [
                    { name: 'Community football pitches', type: 'Football' },
                    { name: 'Local Gyms', type: 'Gym' }
                ]
            },
            'Ekoro Road': {
                placesToVisit: [
                    { name: 'Abule Egba Bridge' },
                    { name: 'Ekoro Road axis' },
                    { name: 'Local markets & bus terminal hubs' }
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Roadside suya' },
                    { name: 'Akara & pap in the mornings' },
                    { name: 'Bole & roasted fish' }
                ],
                sports: [
                    { name: 'Street football culture', type: 'Football' },
                    { name: 'Small private gyms', type: 'Gym' },
                    { name: 'Road jogging routes', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.6433, lng: 3.2923 },
    },
    {
        id: 'egbeda',
        name: 'Egbeda',
        description: {
            en: 'A balanced mainland area with good access and reasonable rent.',
            pidgin: 'Mainland area wey balance well, road good and rent no too tear pocket.'
        },
        priceRange: {
            en: "₦500k - ₦900k (2 Bedroom)",
            pidgin: "₦500k - ₦900k (2 Bedroom)"
        },
        commuteTo: { vi: '1hr 30m', ikeja: '30m' },
        hotspots: [
            { name: 'Deems Place', category: 'nightlife' },
            { name: 'Egbeda Market', category: 'activity' },
            { name: 'Gowon Estate Park', category: 'activity' },
            { name: 'Chicken Republic', category: 'food' },
            { name: 'Mega Chicken', category: 'food' }
        ],
        attributes: {
            rent: ['budget'],
            work: ['commute'],
            noise: ['moderate', 'noisy'],
            transport: ['public', 'private', 'keke'],
            lifestyle: ['family', 'nightlife'],
            electricity: ['manageable'],
        },
        floodRisk: 'low',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦30k - ₦60k',
        minPrice: 500000,
        maxPrice: 900000,
        innerLocalities: ['Akowonjo', 'Gowon Estate', 'Shasha', 'Idimu', 'Ponle'],
        subLocalityInsights: {
            'Egbeda Market': {
                en: "The commercial core. 'You can find anything here. Active 24/7 and very reasonably priced.'",
                pidgin: "Business base. 'Anything you want dey here. Market no dey sleep and price set nicely.'"
            },
            'Egbeda-Idimu Road': {
                en: "The main connector. 'Activity hubs and residential clusters. Best for neighborhood buka rice.'",
                pidgin: "Grand road. 'Everywhere busy, house full ground. If you want better buka rice, na here.'"
            }
        },
        subLocalityDetails: {
            'Egbeda Market': {
                placesToVisit: [
                    { name: 'Egbeda Market', url: 'https://www.instagram.com/explore/tags/egbedamarket/' },
                    { name: 'Gowon Estate Park', url: 'https://www.instagram.com/explore/tags/gowonestate/' }
                ],
                whatToEat: [
                    { name: 'Deems Place', url: 'https://www.instagram.com/deemsplace/' },
                    { name: 'Amala & Ewedu joints', url: 'https://www.instagram.com/explore/tags/amala/' }
                ],
                sports: [
                    { name: 'Private gyms in Egbeda', type: 'Gym' },
                    { name: 'Community football fields', type: 'Football' }
                ]
            },
            'Egbeda-Idimu Road': {
                placesToVisit: [
                    { name: 'Egbeda Market' },
                    { name: 'Egbeda-Idimu Road axis' },
                    { name: 'Gowon Estate (nearby hangouts)' }
                ],
                whatToEat: [
                    { name: 'Ofada rice spots' },
                    { name: 'Local buka rice & stew' },
                    { name: 'Shawarma stands' }
                ],
                sports: [
                    { name: 'Estate football pitches', type: 'Football' },
                    { name: 'Private gyms', type: 'Gym' },
                    { name: 'Community parks', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.5947, lng: 3.2905 },
    },
    {
        id: 'ikorodu',
        name: 'Ikorodu',
        description: {
            en: 'Ideal for spacious living on a budget, though a bit far out.',
            pidgin: 'If you want big house for small money, na here. E far small sha.'
        },
        priceRange: {
            en: "₦250k - ₦500k (Miniflat)",
            pidgin: "₦250k - ₦500k (Miniflat)"
        },
        commuteTo: { vi: '2hrs+', ikeja: '1hr 15m' },
        hotspots: [
            { name: 'Ikorodu Ferry Terminal', category: 'activity' },
            { name: 'Domino’s Pizza', category: 'food' },
            { name: 'Ikorodu Town Hall', category: 'activity' },
            { name: 'Justrite', category: 'activity' },
            { name: 'Chicken Republic', category: 'food' }
        ],
        attributes: {
            rent: ['budget'],
            work: ['commute'],
            noise: ['quiet', 'moderate'],
            transport: ['public', 'private', 'keke'],
            lifestyle: ['family'],
            electricity: ['alternative', 'manageable'],
        },
        floodRisk: 'high',
        powerAvgHours: 8,
        internetFiber: false,
        securityRating: 2,
        genCostEstimate: '₦15k - ₦40k',
        minPrice: 2500000,
        maxPrice: 500000,
        innerLocalities: ['Ebute', 'Ijede', 'Ogolonto', 'Ibeshe', 'Shagamu Road'],
        subLocalityInsights: {
            'Ebute': {
                en: "The water gateway. 'Home to the Ferry Terminal. It’s the fastest way to the Island if you want to skip the Ikorodu Road traffic.'",
                pidgin: "Water waka ground. 'Ferry terminal dey here. If you no wan see Ikorodu road traffic, just enter boat go Island sharply.'"
            },
            'Sabo Market': {
                en: "Commercial heartbeat. 'Where the town comes to trade. Bustling with energy and everything you need for the home.'",
                pidgin: "Trading center. 'Na here market dey. Energy full ground and everything for house dey here.'"
            }
        },
        subLocalityDetails: {
            'Ebute': {
                placesToVisit: [
                    { name: 'Ikorodu Ferry Terminal', url: 'https://www.instagram.com/explore/tags/ikoroduferryterminal/' },
                    { name: 'Ikorodu Town Hall', url: 'https://www.instagram.com/explore/tags/ikorodu/' },
                    { name: 'Majidun waterfront' }
                ],
                whatToEat: [
                    { name: 'Fresh fish pepper soup' },
                    { name: 'Smoked fish' },
                    { name: 'Ofada rice' },
                    { name: 'Local grills near the water', url: 'https://www.instagram.com/explore/tags/lagosgrill/' }
                ],
                sports: [
                    { name: 'Lagoon boat rides', type: 'Other' },
                    { name: 'Community football', type: 'Football' },
                    { name: 'Private gyms (Ebute)', type: 'Gym' }
                ]
            },
            'Sabo Market': {
                placesToVisit: [
                    { name: 'Sabo Market' },
                    { name: 'Ikorodu Town Hall' }
                ],
                whatToEat: [
                    { name: 'Fresh fish pepper soup' },
                    { name: 'Ofada rice' }
                ],
                sports: [
                    { name: 'Football fields', type: 'Football' },
                    { name: 'Community gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.6194, lng: 3.5105 },
    },
    {
        id: 'iyana_ipaja',
        name: 'Iyana Ipaja',
        description: {
            en: 'A major transit hub, always active and very affordable.',
            pidgin: 'Center of waka. Everywhere busy well well and rent cheap.'
        },
        priceRange: {
            en: "₦300k - ₦600k (Miniflat)",
            pidgin: "₦300k - ₦600k (Miniflat)"
        },
        commuteTo: { vi: '1hr 40m', ikeja: '25m' },
        hotspots: [
            { name: 'Justrite Mall', category: 'activity' },
            { name: 'Mr Biggs', category: 'food' },
            { name: 'Chicken Republic', category: 'food' },
            { name: 'Ipaja Market', category: 'activity' },
            { name: 'Tantalizers', category: 'food' }
        ],
        attributes: {
            rent: ['budget'],
            work: ['commute'],
            noise: ['noisy'],
            transport: ['public', 'keke'],
            lifestyle: ['nightlife', 'family'],
            electricity: ['alternative'],
        },
        floodRisk: 'moderate',
        powerAvgHours: 10,
        internetFiber: false,
        securityRating: 2,
        genCostEstimate: '₦20k - ₦50k',
        minPrice: 300000,
        maxPrice: 600000,
        innerLocalities: ['Ayobo', 'Alimosho', 'Baruwa', 'Mosan', 'Gate'],
        subLocalityInsights: {
            'Ayobo': {
                en: "Deep residential peace. 'Far from the noise but has its own community vibe. Growing fast with new estates.'",
                pidgin: "Inside life. 'Noise no dey here, everywhere jeje. New estates dey blow ground sharply.'"
            },
            'Iyana Ipaja Roundabout': {
                en: "The transit core. 'Always bubbling, the connection point for Alimosho and beyond. Street food is abundant.'",
                pidgin: "Waka central. 'Anywhere you wan go, motor dey. Street food full ground and people plenty.'"
            }
        },
        subLocalityDetails: {
            'Ayobo': {
                placesToVisit: [
                    { name: 'Anchor University (nearby)', url: 'https://aul.edu.ng/' }
                ],
                whatToEat: [
                    { name: 'Street shawarma kiosks', url: 'https://www.instagram.com/explore/tags/lagosshawarma/' },
                    { name: 'Buka joints', url: 'https://www.instagram.com/explore/tags/buka/' }
                ],
                sports: [
                    { name: 'Jogging routes (Estate)', type: 'Other' },
                    { name: 'Community football', type: 'Football' }
                ]
            },
            'Iyana Ipaja Roundabout': {
                placesToVisit: [
                    { name: 'Iyana Ipaja Roundabout' },
                    { name: 'Local markets' },
                    { name: 'Egbeda axis hangouts' }
                ],
                whatToEat: [
                    { name: 'Suya' },
                    { name: 'Fried yam & egg' },
                    { name: 'Amala joints' }
                ],
                sports: [
                    { name: 'Small football centers', type: 'Football' },
                    { name: 'Gyms', type: 'Gym' },
                    { name: 'Road jogging', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.6094, lng: 3.2944 },
    },
    {
        id: 'yaba',
        name: 'Yaba',
        description: {
            en: 'Lagos "Silicon Valley". Youthful, creative, and tech-driven. Great for networking but can be noisy and congested near Sabo.',
            pidgin: 'Lagos Tech Hub. Boys dey hustle, vibes set for students and techies, but e dey busy well well for Sabo side.'
        },
        priceRange: {
            en: "₦800k - ₦1.8m (Miniflat/Apt)",
            pidgin: "₦800k - ₦1.8m (Miniflat/Apt)"
        },
        commuteTo: { vi: '25m', ikeja: '35m' },
        hotspots: [
            { name: 'E-Center (Ozone)', category: 'activity' },
            { name: 'White House', category: 'food' },
            { name: 'Banilux Bar', category: 'nightlife' },
            { name: 'Purple Bistro', category: 'food' },
            { name: 'YabaTech Art Museum', category: 'activity' },
            { name: 'Tejuosho Market', category: 'activity' }
        ],
        attributes: {
            rent: ['budget', 'standard', 'mid'],
            work: ['central'],
            noise: ['noisy', 'moderate'],
            transport: ['public', 'walk', 'ride', 'keke'],
            lifestyle: ['creative', 'nightlife'],
            electricity: ['manageable'],
        },
        floodRisk: 'moderate',
        powerAvgHours: 10,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦30k - ₦70k',
        minPrice: 500000,
        maxPrice: 1800000,
        innerLocalities: ['Akoka', 'Sabo', 'Onike', 'Iwaya', 'Adekunle', 'Alagomeji'],
        subLocalityInsights: {
            'Akoka': {
                en: "Educational hub and home to UNILAG. Map reviews say: 'Vibe is youthful, but water fit gather for some streets after heavy rain.'",
                pidgin: "UNILAG ground. Maps talk say: 'School vibe set but if rain fall sharply, some streets fit get small water issue.'"
            },
            'Sabo': {
                en: "Yabacon Valley! 'Tech hub for life. Startups everywhere. Use Google Maps or you go stuck for traffic. Energy is high.'",
                pidgin: "Tech headquarters. 'Startup full ground. If you no use Map, traffic go show you shege. Vibes set for boys wey dey hustle.'"
            },
            'Tejuosho': {
                en: "Shopper's paradise. 'Busy 24/7. Don't even try driving here during holidays. Street market is the real deal.'",
                pidgin: "Market energy. 'Everywhere busy 24/7. Traffic for holiday season no be small. Quality trading full ground.'"
            }
        },
        subLocalityDetails: {
            'Sabo': {
                placesToVisit: [
                    { name: 'University of Lagos', url: 'https://unilag.edu.ng' },
                    { name: 'Tejuosho Market', url: 'https://www.instagram.com/tejuoshomarket/' },
                    { name: 'Sabo nightlife' },
                    { name: 'E-Center', url: 'https://www.hotels.ng/place/e-center-yaba-yaba-lagos' },
                    { name: 'Co-Creation Hub (CcHub)', url: 'https://cchub.africa/' }
                ],
                whatToEat: [
                    { name: 'Student-friendly cafés' },
                    { name: 'Shawarma & small chops' },
                    { name: 'Indomie spots' },
                    { name: 'White House (Amala)', url: 'https://www.instagram.com/whitehouseresturant/' },
                    { name: 'Purple Bistro', url: 'https://www.instagram.com/purplebistrolagos/' }
                ],
                sports: [
                    { name: 'UNILAG sports complex', type: 'Other', url: 'https://unilag.edu.ng' },
                    { name: 'Basketball courts', type: 'Basketball' },
                    { name: 'Tech hub fitness studios', type: 'Gym' },
                    { name: 'Yabatech Sports Complex', type: 'Football', url: 'https://yabatech.edu.ng' }
                ]
            }
        },
        coords: { lat: 6.5164, lng: 3.3858 },
    },
    {
        id: 'surulere',
        name: 'Surulere',
        description: {
            en: 'Classic Lagos soul. Central, diverse, and lively. Perfect for those who want original Lagos vibes and middle-ground commute.',
            pidgin: 'Original Lagos OG area. E central, life plenty, and middle-ground for waka.'
        },
        priceRange: {
            en: "₦1m - ₦2m (2 Bedroom)",
            pidgin: "₦1m - ₦2m (2 Bedroom)"
        },
        commuteTo: { vi: '20m', ikeja: '40m' },
        hotspots: [
            { name: 'Leisure Mall', category: 'activity' },
            { name: 'Ofada Boy', category: 'food' },
            { name: 'National Stadium', category: 'activity' },
            { name: 'Shitta', category: 'activity' },
            { name: 'Adeniran Ogunsanya Mall', category: 'activity' },
            { name: 'Domino’s Pizza', category: 'food' }
        ],
        attributes: {
            rent: ['budget', 'standard', 'mid'],
            work: ['central'],
            noise: ['noisy', 'moderate'],
            transport: ['public', 'walk', 'ride', 'keke'],
            lifestyle: ['family', 'nightlife'],
            electricity: ['manageable'],
        },
        socialBuzz: {
            trending: 'OG Lagos vibes never die #SurulereStrong',
            complaints: ['Some parts get messy during rain', 'Shitta area can be aggressive', 'Ojuelegba traffic is eternal'],
            compliments: ['Home of the best Ofada rice', 'Perfect midpoint between Mainland and Island', 'Real community feel']
        },
        floodRisk: 'low',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦35k - ₦80k',
        minPrice: 1000000,
        maxPrice: 2000000,
        innerLocalities: ['Ojuelegba', 'Aguda', 'Itire', 'Ijesha', 'Masha', 'Adeniran Ogunsanya', 'Lawanson'],
        subLocalityInsights: {
            'Ojuelegba': {
                en: "The legendary hub. 'Notorious for traffic. Under the bridge is a jungle, watch the Danfos. Best street food near the bus park though.'",
                pidgin: "Traffic headquarters. 'Stadium Underbridge na jungle, watch those Danfo drivers. But street food for here sweet die near the park.'"
            },
            'Adeniran Ogunsanya': {
                en: "Upmarket Surulere. 'Malls and nice dinner spots. Parking is a struggle but the vibe is upscale and secure.'",
                pidgin: "Surulere big boy street. 'Mall set, food point set. Parking fit tie your neck small but security and vibe set for here.'"
            },
            'National Stadium': {
                en: "The sports heart. 'Historic venue for athletics and major events. A massive space for physical activity and local gatherings.'",
                pidgin: "Sports headquarters. 'Old school ground for running and ball. Space big well well for exercise and meeting people.'"
            }
        },
        subLocalityDetails: {
            'National Stadium': {
                placesToVisit: [
                    { name: 'National Stadium' },
                    { name: 'Teslim Balogun Stadium' },
                    { name: 'Adeniran Ogunsanya Mall' }
                ],
                whatToEat: [
                    { name: 'Shawarma' },
                    { name: 'Lounge grills' },
                    { name: 'Amala' }
                ],
                sports: [
                    { name: 'Stadium athletics', type: 'Other' },
                    { name: 'Swimming pools', type: 'Other' },
                    { name: 'Football academies', type: 'Football' }
                ]
            },
            'Ojuelegba': {
                placesToVisit: [
                    { name: 'National Stadium', url: 'https://www.instagram.com/explore/locations/257375251/national-stadium-surulere-lagos/' },
                    { name: 'Teslim Balogun Stadium', url: 'https://www.instagram.com/explore/locations/257375251/national-stadium-surulere-lagos/' },
                    { name: 'Tejuosho Market', url: 'https://www.instagram.com/tejuoshomarket/' }
                ],
                whatToEat: [
                    { name: 'Shitta Suya', url: 'https://www.instagram.com/explore/tags/shittasuya/' },
                    { name: 'Amala Shitta', url: 'https://www.instagram.com/explore/tags/amala/' },
                    { name: 'Ojuelegba Amala Spots', url: 'https://www.instagram.com/explore/tags/amala/' }
                ],
                sports: [
                    { name: 'National Stadium Gym', type: 'Gym', url: 'https://www.instagram.com/explore/locations/257375251/national-stadium-surulere-lagos/' },
                    { name: 'Stadium Football Pitch', type: 'Football' },
                    { name: 'Teslim Balogun Stadium', type: 'Football' }
                ]
            },
            'Adeniran Ogunsanya': {
                placesToVisit: [
                    { name: 'Adeniran Ogunsanya Mall', url: 'https://www.instagram.com/explore/locations/248590848/adeniran-ogunsanya-shopping-mall/' },
                    { name: 'Leisure Mall', url: 'https://www.instagram.com/leisuremall_ng/' }
                ],
                whatToEat: [
                    { name: 'Ofada Boy', url: 'https://www.instagram.com/ofadaboy/' },
                    { name: 'The Place (Surulere)', url: 'https://www.theplace.com.ng/' },
                    { name: 'Sankofa Lagos', url: 'https://www.instagram.com/ofadaheaven/' }
                ],
                sports: [
                    { name: 'I-Fitness Surulere', type: 'Gym', url: 'https://ifitness.ng/' }
                ]
            }
        },
        coords: { lat: 6.5059, lng: 3.3619 },
    },
    {
        id: 'magodo',
        name: 'Magodo',
        description: {
            en: 'Serene, well-planned, and family-friendly. A premium mainland choice.',
            pidgin: 'E quiet, e arrange well, and e good for family. Na big man area for mainland.'
        },
        priceRange: {
            en: "₦2.5m - ₦5m (3 Bedroom)",
            pidgin: "₦2.5m - ₦5m (3 Bedroom)"
        },
        commuteTo: { vi: '45m', ikeja: '15m' },
        hotspots: [
            { name: 'Magodo Brooks Estate', category: 'activity' },
            { name: 'Domino’s Pizza', category: 'food' },
            { name: 'Shoprite Alausa', category: 'activity' },
            { name: 'The Place', category: 'food' },
            { name: 'Lagos State Secretariat', category: 'activity' }
        ],
        attributes: {
            rent: ['mid', 'premium'],
            work: ['commute'],
            noise: ['quiet'],
            transport: ['public', 'ride', 'private', 'keke'],
            lifestyle: ['family'],
            electricity: ['stable', 'manageable'],
        },
        floodRisk: 'low',
        powerAvgHours: 16,
        internetFiber: true,
        securityRating: 5,
        genCostEstimate: '₦50k - ₦120k',
        minPrice: 2500000,
        maxPrice: 5000000,
        innerLocalities: ['Shangisha (Phase 2)', 'Isheri (Phase 1)', 'CMD Road'],
        subLocalityInsights: {
            'Shangisha (Phase 2)': {
                en: "The VIP mainland. 'Security is top notch. You need an entry code for everywhere. Quiet streets and good for morning runs.'",
                pidgin: "Mainland big man base. 'Security tight enter well. You gats get code to enter estate. Everywhere calm for morning waka.'"
            }
        },
        subLocalityDetails: {
            'Shangisha (Phase 2)': {
                placesToVisit: [
                    { name: 'Magodo GRA' },
                    { name: 'Estate parks' },
                    { name: 'CMD Road axis' },
                    { name: 'Magodo Brooks Estate', url: 'https://www.instagram.com/explore/locations/236041040/magodo-brooks-estate-lagos/' }
                ],
                whatToEat: [
                    { name: 'Estate cafés' },
                    { name: 'Local grills' },
                    { name: 'Restaurant lounges' },
                    { name: 'The Place Magodo', url: 'https://www.theplace.com.ng/' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Tennis courts', type: 'Tennis' },
                    { name: 'Private gyms', type: 'Gym' },
                    { name: 'I-Fitness Magodo', type: 'Gym', url: 'https://ifitness.ng/' }
                ]
            }
        },
        coords: { lat: 6.6173, lng: 3.3831 },
    },
    {
        id: 'ogba',
        name: 'Ogba',
        description: {
            en: 'Organized and reasonably quiet. A solid choice for professionals.',
            pidgin: 'Area wey arrange well. E cool for working class pipo.'
        },
        priceRange: {
            en: "₦700k - ₦1.5m (2 Bedroom)",
            pidgin: "₦700k - ₦1.5m (2 Bedroom)"
        },
        commuteTo: { vi: '1hr', ikeja: '15m' },
        hotspots: [
            { name: 'Retail Market', category: 'activity' },
            { name: 'Simply delicious', category: 'food' },
            { name: 'Area 1 Bar', category: 'nightlife' },
            { name: 'Sunday Market', category: 'activity' },
            { name: 'WaZoBia Restaurant', category: 'food' }
        ],
        attributes: {
            rent: ['budget', 'mid'],
            work: ['commute'],
            noise: ['moderate', 'quiet'],
            transport: ['public', 'private', 'keke'],
            lifestyle: ['family', 'fitness'],
            electricity: ['manageable'],
        },
        floodRisk: 'low',
        powerAvgHours: 14,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦30k - ₦70k',
        minPrice: 700000,
        maxPrice: 1500000,
        innerLocalities: ['Oke-Ira', 'Ifako', 'Aguda Ogba', 'Acme Road'],
        subLocalityInsights: {
            'Aguda Ogba': {
                en: "Organized hustle. 'Ogba is the midpoint for everything. Proximity to Ikeja is a plus. The retail market has everything you need.'",
                pidgin: "Arranged community. 'Ogba center everything. Ikeja just dey your back. Market set, you go see wetin you wan buy.'"
            }
        },
        subLocalityDetails: {
            'Aguda Ogba': {
                placesToVisit: [
                    { name: 'Ogba Market' },
                    { name: 'Obawole axis' },
                    { name: 'Excellence Hotel area' },
                    { name: 'Ogba Retail Market', url: 'https://www.instagram.com/explore/locations/312015099/ogba-retail-market/' }
                ],
                whatToEat: [
                    { name: 'Amala' },
                    { name: 'Suya' },
                    { name: 'Local rice spots' },
                    { name: 'Simply delicious', url: 'https://www.instagram.com/simplydelicious_ng/' }
                ],
                sports: [
                    { name: 'Football centers', type: 'Football' },
                    { name: 'Estate gyms', type: 'Gym' },
                    { name: 'Running routes', type: 'Other' },
                    { name: 'I-Fitness Ogba', type: 'Gym', url: 'https://ifitness.ng/' }
                ]
            }
        },
        coords: { lat: 6.6263, lng: 3.3370 },
    },
    {
        id: 'lekki_1',
        name: 'Lekki Phase 1',
        description: {
            en: 'Modern Island living with best-in-class cafes and nightlife. WARNING: High flood risk in rainy season and heavy traffic on Admiralty Way.',
            pidgin: 'Big boy area with correct jaiye. But flooding for here no be small during rain and traffic Admiralty fit tire person.'
        },
        priceRange: {
            en: "₦3m - ₦6m+ (2 Bedroom)",
            pidgin: "₦3m - ₦6m+ (2 Bedroom)"
        },
        commuteTo: { vi: '10m', ikeja: '50m' },
        hotspots: [
            { name: 'Filmhouse IMAX', category: 'activity' },
            { name: 'Circa Non Pareil', category: 'food' },
            { name: 'Sailor’s Lounge', category: 'nightlife' },
            { name: 'Lekki Leisure Lake', category: 'activity' },
            { name: 'Upbeat Centre', category: 'activity' },
            { name: 'Nike Art Gallery', category: 'activity' },
            { name: 'The Place', category: 'food' }
        ],
        attributes: {
            rent: ['premium', 'luxury'],
            work: ['island'],
            noise: ['moderate'],
            transport: ['ride', 'private'],
            lifestyle: ['nightlife', 'fitness', 'family'],
            electricity: ['stable'],
        },
        socialBuzz: {
            trending: 'Rising flooding concerns #LekkiFloods',
            complaints: ['Severe flooding during rainy season', 'Admiralty Way traffic is a nightmare', 'Expensive everything'],
            compliments: ['Best nightlife in Lagos', 'Top-tier cafes and coworking spaces', 'Beautiful people and cars']
        },
        floodRisk: 'high',
        powerAvgHours: 18,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦80k - ₦150k',
        minPrice: 3000000,
        maxPrice: 10000000,
        innerLocalities: ['Admiralty Way', 'Marwa', 'Lekki Right Side', 'Lekki Left Side', 'Onikepo Akande'],
        subLocalityInsights: {
            'Admiralty Way': {
                en: "Commercial heart. 'Everything you need is here. Prince Ebeano mall is the plug. Traffic can be mad but convenience is 100%.'",
                pidgin: "Lekki main spot. 'Market and shop full everywhere. Ebeano for Admiralty na the spot. Traffic fit craze but life easy for here.'"
            },
            'Lekki Right Side': {
                en: "Residential pocket. 'Mostly gated houses and schools. Quiet ground compared to the main road noise.'",
                pidgin: "Estate side. 'Houses and schools plenty. Everywhere silence compared to the noise for main road.'"
            }
        },
        subLocalityDetails: {
            'Admiralty Way': {
                placesToVisit: [
                    { name: 'Admiralty Way nightlife' },
                    { name: 'Lekki Conservation Centre', url: 'https://lekkiconservation.com/' },
                    { name: 'Nike Art Gallery', url: 'https://nikeart.com/' },
                    { name: 'Elegushi Beach', url: 'https://www.instagram.com/explore/locations/236041040/elegushi-beach-lekki-lagos/' }
                ],
                whatToEat: [
                    { name: 'Sushi & fine dining' },
                    { name: 'Beach grilled fish' },
                    { name: 'Premium cafés' },
                    { name: 'Hard Rock Cafe', url: 'https://www.hardrockcafe.com/location/lagos/' }
                ],
                sports: [
                    { name: 'Luxury gyms', type: 'Gym' },
                    { name: 'Beach workouts', type: 'Other' },
                    { name: 'Tennis clubs', type: 'Tennis' },
                    { name: 'I-Fitness Lekki', type: 'Gym', url: 'https://ifitness.ng/' }
                ]
            }
        },
        coords: { lat: 6.4491, lng: 3.4723 },
    },
    {
        id: 'lekki_2',
        name: 'Lekki Phase 2',
        description: {
            en: 'Rapidly developing, slightly more affordable than Phase 1.',
            pidgin: 'E dey develop fast, and e cheaper small pass Phase 1.'
        },
        priceRange: {
            en: "₦2m - ₦4m (2 Bedroom)",
            pidgin: "₦2m - ₦4m (2 Bedroom)"
        },
        commuteTo: { vi: '30m', ikeja: '1hr 10m' },
        hotspots: [
            { name: 'Lekki Conservation', category: 'activity' },
            { name: 'Mega Chicken', category: 'food' },
            { name: 'Ebeano Supermarket', category: 'activity' },
            { name: 'Purple Cloud', category: 'nightlife' },
            { name: 'Domino’s Pizza', category: 'food' }
        ],
        attributes: {
            rent: ['mid', 'premium'],
            work: ['island'],
            noise: ['quiet'],
            transport: ['private', 'ride'],
            lifestyle: ['family', 'fitness'],
            electricity: ['stable']
        },
        floodRisk: 'moderate',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦50k - ₦110k',
        minPrice: 2000000,
        maxPrice: 4000000,
        subLocalityInsights: {
            'Orchid Road': {
                en: "The developing axis. 'Fast-growing residential hub with many new estates and the popular Orchid Hotel.'",
                pidgin: "Area wey dey blow. 'New estate full ground and Orchid Hotel dey here. Movement set well well.'"
            }
        },
        subLocalityDetails: {
            'Orchid Road': {
                placesToVisit: [
                    { name: 'Orchid Road axis' },
                    { name: 'Estate parks' },
                    { name: 'Circle Mall' }
                ],
                whatToEat: [
                    { name: 'Family restaurants' },
                    { name: 'Grills' },
                    { name: 'Café lounges' }
                ],
                sports: [
                    { name: 'Estate football pitches', type: 'Football' },
                    { name: 'Gyms', type: 'Gym' },
                    { name: 'Jogging routes', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.4582, lng: 3.5263 },
    },
    {
        id: 'ajah',
        name: 'Ajah',
        description: {
            en: 'Gateway to the new Lagos. Good value for money on the Island.',
            pidgin: 'Road to new Lagos. Value for money dey here well.'
        },
        priceRange: {
            en: "₦800k - ₦1.5m (Miniflat)",
            pidgin: "₦800k - ₦1.5m (Miniflat)"
        },
        commuteTo: { vi: '45m', ikeja: '1hr 30m' },
        hotspots: [
            { name: 'Sky Mall', category: 'activity' },
            { name: 'Domino’s/Coldstone', category: 'food' },
            { name: 'Ajah Market', category: 'activity' },
            { name: 'Mega Chicken', category: 'food' },
            { name: 'Lufasi Nature Park', category: 'activity' }
        ],
        attributes: {
            rent: ['budget', 'mid'],
            work: ['island', 'commute'],
            noise: ['moderate', 'noisy'],
            transport: ['ride', 'public', 'private', 'keke'],
            lifestyle: ['family'],
            electricity: ['manageable']
        },
        floodRisk: 'moderate',
        powerAvgHours: 10,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦30k - ₦65k',
        minPrice: 800000,
        maxPrice: 3000000,
        innerLocalities: ['Langbasa', 'Eputu', 'Awoyaya', 'Lakowe', 'Sangotedo'],
        subLocalityInsights: {
            'Sangotedo': {
                en: "Mall life & Traffic. 'Novare Mall (Shoprite) is the highlight but the road becomes a river when it rains. Traffic is constant.'",
                pidgin: "Shoprite ground. 'Novare Mall set but if rain fall, road fit turn river. Traffic for here no dey sleep.'"
            },
            'Badore waterfront': {
                en: "The scenic escape. 'Quiet waterfront area with boat jetties and local seafood spots. A calmer side of Ajah.'",
                pidgin: "Cool water side. 'Boats full here and fresh fish dey. Everywhere calm pass the main area.'"
            }
        },
        socialBuzz: {
            trending: 'Gateway to the new Lagos #AjahCity',
            complaints: ['Ajah Jubilee Bridge traffic is painful', 'Marshy ground in some estates', 'Feel far from the action'],
            compliments: ['Best value for money on the Island', 'Great seafood markets', 'Rapid development and new malls']
        },
        subLocalityDetails: {
            'Sangotedo': {
                placesToVisit: [
                    { name: 'Ajah Roundabout' },
                    { name: 'Novare Lekki Mall', url: 'https://novaremalls.com/' },
                    { name: 'Abraham Adesanya Estate' },
                    { name: 'Badore waterfront' }
                ],
                whatToEat: [
                    { name: 'Roadside grilled fish' },
                    { name: 'Shawarma & small chops' },
                    { name: 'Island-style buka' },
                    { name: 'Lounge restaurants along Lekki-Epe Expressway' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Private gyms', type: 'Gym' },
                    { name: 'Beach workouts (towards Sangotedo/Badore)', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.4674, lng: 3.5684 },
    },
    {
        id: 'ikoyi',
        name: 'Ikoyi',
        description: {
            en: 'Premier luxury and diplomatic enclave. Extremely quiet and secure, though very high cost of living and limited nightlife options.',
            pidgin: 'For politicians and big men. Everywhere quiet, security tight but money gats berekete to live here.'
        },
        priceRange: {
            en: "₦10m+ (Luxury Apt)",
            pidgin: "₦10m+ (Luxury Apt)"
        },
        commuteTo: { vi: '5m', ikeja: '45m' },
        hotspots: [
            { name: 'Ikoyi Club', category: 'activity' },
            { name: 'Danfo Bistro', category: 'food' },
            { name: 'Banana Island', category: 'activity' },
            { name: 'The George Hotel', category: 'hotel' },
            { name: 'Glover Court Suya', category: 'food' },
            { name: 'Falomo Bridge (Kayaking)', category: 'activity' }
        ],
        attributes: {
            rent: ['premium', 'luxury'],
            work: ['island'],
            noise: ['quiet'],
            transport: ['ride', 'private'],
            lifestyle: ['fitness', 'family'],
            electricity: ['stable'],
        },
        socialBuzz: {
            trending: 'Elite silence and classic luxury #OldIkoyi',
            complaints: ['Prohibitively expensive', 'Can feel "boring" for party seekers', 'Strict estate gate rules'],
            compliments: ['Most secure place in Lagos', 'Greenery and peace', 'Elite networking']
        },
        floodRisk: 'low',
        powerAvgHours: 22,
        internetFiber: true,
        securityRating: 5,
        genCostEstimate: '₦150k - ₦400k',
        minPrice: 10000000,
        maxPrice: 50000000,
        innerLocalities: ['Banana Island', 'Parkview Estate', 'Old Ikoyi', 'Osborne Foreshore', 'Dolphin Estate', 'Bourdillon'],
        subLocalityInsights: {
            'Banana Island': {
                en: "Pinnacle of luxury. 'Unmatched security. Banned short-lets to keep things tight. Peaceful, quiet, and strictly for billionaires.'",
                pidgin: "Money island. 'Security tight well well. Short-let no dey again to keep everywhere safe. Quiet ground for people wey get heavy pocket.'"
            },
            'Old Ikoyi': {
                en: "Historic luxury. 'The soul of old money. Quiet, leafy streets and the premier Ikoyi Club.'",
                pidgin: "Old school money. 'Street calm, trees full everywhere and Ikoyi Club dey here. Prestige level 100.'"
            }
        },
        subLocalityDetails: {
            'Banana Island': {
                placesToVisit: [
                    { name: 'Banana Island', url: 'https://www.instagram.com/bananaislandestatelagos/' },
                    { name: 'Banana Island Park', url: 'https://www.instagram.com/bananaislandestatelagos/' },
                    { name: 'Clubhouse', url: 'https://www.instagram.com/bananaislandestatelagos/' }
                ],
                whatToEat: [
                    { name: 'Zaza Restaurant', url: 'https://www.instagram.com/zazalagos/' },
                    { name: 'Banana Island Coffee Shop', url: 'https://www.instagram.com/bananaislandestatelagos/' }
                ],
                sports: [
                    { name: 'Banana Island Football Pitch', type: '5-aside', url: 'https://www.instagram.com/bananaislandestatelagos/' },
                    { name: 'Estate Gym Center', type: 'Gym' },
                    { name: 'Tennis Courts', type: 'Tennis' }
                ]
            },
            'Old Ikoyi': {
                placesToVisit: [
                    { name: 'Ikoyi Club 1938', url: 'https://ikoyiclub1938.net/' },
                    { name: 'Lekki-Ikoyi Link Bridge' },
                    { name: 'Osborne Foreshore' }
                ],
                whatToEat: [
                    { name: 'Fine dining restaurants' },
                    { name: 'Continental cuisine' },
                    { name: 'Luxury cafés' },
                    { name: 'Glover Court Suya', url: 'https://www.instagram.com/explore/tags/glovercourtsuya/' }
                ],
                sports: [
                    { name: 'Golf', type: 'Other' },
                    { name: 'Tennis courts', type: 'Tennis' },
                    { name: 'Premium gyms', type: 'Gym' },
                    { name: 'Bridge jogging', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.4549, lng: 3.4350 },
    },
    {
        id: 'vi',
        name: 'Victoria Island',
        description: {
            en: 'The commercial heart of Lagos. High-energy, luxury dining, and major corporate HQs. Can feel overcrowded and congested during work hours.',
            pidgin: 'Business headquarters. Energy dey, enjoyment full, but traffic during work hours fit make person vex.'
        },
        priceRange: {
            en: "₦5m - ₦10m+ (Apartment)",
            pidgin: "₦5m - ₦10m+ (Apartment)"
        },
        commuteTo: { vi: '0m', ikeja: '40m' },
        hotspots: [
            { name: 'Eko Hotel', category: 'hotel' },
            { name: 'Landmark Beach', category: 'activity' },
            { name: 'Mega Plaza', category: 'activity' },
            { name: 'Hard Rock Cafe', category: 'nightlife' },
            { name: 'Shiro', category: 'food' },
            { name: 'Civic Center', category: 'activity' },
            { name: 'Moist Beach Club', category: 'nightlife' }
        ],
        attributes: {
            rent: ['premium', 'luxury'],
            work: ['island'],
            noise: ['moderate'],
            transport: ['ride', 'private', 'keke'],
            lifestyle: ['nightlife', 'fitness'],
            electricity: ['stable'],
        },
        socialBuzz: {
            trending: 'Corporate hustle vs Nightlife enjoyment #VictoriaIsland',
            complaints: ['High congestion during peak hours', 'Ahmadu Bello Way floods easily', 'Expensive to maintain a lifestyle'],
            compliments: ['Elite dining and rooftop bars', 'Proximity to major corporate HQs', 'The commercial pulse of West Africa']
        },
        floodRisk: 'moderate',
        powerAvgHours: 20,
        internetFiber: true,
        securityRating: 5,
        genCostEstimate: '₦120k - ₦300k',
        minPrice: 5000000,
        maxPrice: 20000000,
        innerLocalities: ['Ademola Adetokunbo', 'Adeola Odeku', 'Ozumba Mbadiwe', 'Akin Adesola', 'Kofo Abayomi', 'Water Front'],
        subLocalityInsights: {
            'Ademola Adetokunbo': {
                en: "The commercial nerve. 'Banks, high-end shops, and crazy nightlife. Energy is 100 but traffic during work hours is madness.'",
                pidgin: "Business and jaiye center. 'Bank full, shop full, and night life no dey sleep. Energy set but traffic fit make you vex.'"
            },
            'Corporate VI': {
                en: "Business headquarters. 'Home to major corporate HQs and high-end hotels. Very busy during the day.'",
                pidgin: "Business base. 'Office full ground and better hotel dey here. Afternoon waka fit tire you small.'"
            }
        },
        subLocalityDetails: {
            'Corporate VI': {
                placesToVisit: [
                    { name: 'Eko Hotel & Suites', url: 'https://www.ekohotels.com/' },
                    { name: 'Landmark Beach', url: 'https://www.landmarkbeach.ng/' },
                    { name: 'Corporate HQ axis' },
                    { name: 'VI nightlife' }
                ],
                whatToEat: [
                    { name: 'Luxury dining' },
                    { name: 'Rooftop lounges' },
                    { name: 'Sushi & seafood' },
                    { name: 'International chains' }
                ],
                sports: [
                    { name: 'High-end gyms', type: 'Gym' },
                    { name: 'Beach volleyball', type: 'Other' },
                    { name: 'Waterfront jogging', type: 'Other' }
                ]
            },
            'Ademola Adetokunbo': {
                placesToVisit: [
                    { name: 'Eko Hotels & Suites', url: 'https://www.ekohotels.com/' },
                    { name: 'Terra Kulture', url: 'https://www.terrakulture.com/' },
                    { name: 'Silverbird Galleria', url: 'https://silverbirdgalleria.com/' }
                ],
                whatToEat: [
                    { name: 'Hard Rock Cafe', url: 'https://www.hardrockcafe.com/location/lagos/' },
                    { name: 'Shiro Lagos', url: 'https://www.instagram.com/shirolagos/' },
                    { name: 'Quilox (VIP dining)', url: ' clubquilox https://www.instagram.com/' }
                ],
                sports: [
                    { name: 'Eko Hotel Gym', type: 'Gym', url: 'https://www.ekohotels.com/' },
                    { name: 'I-Fitness VI', type: 'Gym', url: 'https://ifitness.ng/' },
                    { name: 'Tennis Courts Eko Hotel', type: 'Tennis', url: 'https://www.ekohotels.com/' }
                ]
            }
        },
        coords: { lat: 6.4253, lng: 3.4411 },
    },
    {
        id: 'oniru',
        name: 'Oniru',
        description: {
            en: 'Upscale and close to VI/Lekki. Great beach access.',
            pidgin: 'Big man area close to VI. Beach house vibes.'
        },
        priceRange: {
            en: "₦4m - ₦8m (Apartment)",
            pidgin: "₦4m - ₦8m (Apartment)"
        },
        commuteTo: { vi: '5m', ikeja: '45m' },
        hotspots: [
            { name: 'Four Points by Sheraton', category: 'hotel' },
            { name: 'The Good Beach', category: 'activity' },
            { name: 'Landmark Centre', category: 'activity' },
            { name: 'Filmhouse Landmark', category: 'activity' },
            { name: 'Mav unofficial beach', category: 'activity' }
        ],
        attributes: {
            rent: ['mid', 'premium'],
            work: ['island'],
            noise: ['moderate'],
            transport: ['ride', 'private'],
            lifestyle: ['nightlife', 'fitness', 'family'],
            electricity: ['stable'],
        },
        floodRisk: 'high',
        powerAvgHours: 18,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦100k - ₦250k',
        minPrice: 4000000,
        maxPrice: 8000000,
        innerLocalities: ['Oniru Estate', 'Palms Axis', 'Beach Front'],
        subLocalityInsights: {
            'Oniru Estate': {
                en: "The beach neighbor. 'Upscale living with immediate access to private beaches and the Palms Shopping Mall.'",
                pidgin: "Beach neighbor. 'Life set well with beach for your back and mall for your side. Everywhere cool.'"
            }
        },
        subLocalityDetails: {
            'Oniru Estate': {
                placesToVisit: [
                    { name: 'Oniru Beach' },
                    { name: 'Oniru Estate' },
                    { name: 'The Palms Shopping Mall', url: 'https://thepalmsmall.com/' }
                ],
                whatToEat: [
                    { name: 'Beach grilled seafood' },
                    { name: 'Café lounges' },
                    { name: 'Continental dishes' }
                ],
                sports: [
                    { name: 'Beach workouts', type: 'Other' },
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Boutique gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.4357, lng: 3.4475 },
    },

    {
        id: 'chevy_view',
        name: 'Chevy View',
        description: {
            en: 'Nice estate vibe near Chevron.',
            pidgin: 'Correct estate vibe near Chevron.'
        },
        priceRange: {
            en: "₦2.5m - ₦4.5m (Terrace)",
            pidgin: "₦2.5m - ₦4.5m (Terrace)"
        },
        commuteTo: { vi: '25m', ikeja: '1hr' },
        hotspots: [
            { name: 'Chevron Toll Gate', category: 'activity' },
            { name: 'Orchid Hotel', category: 'hotel' }
        ],
        attributes: {
            rent: ['mid', 'premium'],
            work: ['island'],
            noise: ['quiet'],
            transport: ['ride', 'private', 'keke'],
            lifestyle: ['family', 'fitness'],
            electricity: ['stable'],
        },
        floodRisk: 'moderate',
        powerAvgHours: 20,
        internetFiber: true,
        securityRating: 5,
        genCostEstimate: '₦120k - ₦300k',
        minPrice: 2500000,
        maxPrice: 4500000,
        innerLocalities: ['Chevron Drive', 'Orchid Road', 'Atlantic View Estate', 'North Pointe'],
        subLocalityInsights: {
            'Chevron Drive': {
                en: "Chevron neighbor. 'Secure gated community. Very quiet but watch out for the toll gate traffic. Many young professionals live here.'",
                pidgin: "Chevron neighbor. 'Security estate set. Everywhere silence but Toll gate traffic fit show you shege. Pipo wey get sense full here.'"
            }
        },
        subLocalityDetails: {
            'Chevron Drive': {
                placesToVisit: [
                    { name: 'Atlantic Center', url: 'https://www.instagram.com/explore/locations/1018873753/atlantic-centre-chevron-drive/' },
                    { name: 'Orchid Hotel', url: 'https://orchidhotels.com.ng/' }
                ],
                whatToEat: [
                    { name: 'Domino’s Pizza Chevron', url: 'https://www.dominos.ng/' },
                    { name: 'Mega Chicken (nearby)', url: 'https://www.megachicken.com.ng/' }
                ],
                sports: [
                    { name: 'I-Fitness Chevron', type: 'Gym', url: 'https://ifitness.ng/' }
                ]
            }
        },
        coords: { lat: 6.4461, lng: 3.5133 },
    },
    {
        id: 'ogudu',
        name: 'Ogudu',
        description: {
            en: 'Quiet, accessible, and very decent mainland area.',
            pidgin: 'Cool, accessible and sharp mainland area.'
        },
        priceRange: {
            en: "₦1.5m - ₦3m (3 Bedroom)",
            pidgin: "₦1.5m - ₦3m (3 Bedroom)"
        },
        commuteTo: { vi: '40m', ikeja: '30m' },
        hotspots: [
            { name: 'Ogudu Mall', category: 'activity' },
            { name: 'Sheraton nearby', category: 'hotel' }
        ],
        attributes: {
            rent: ['budget', 'mid'],
            work: ['central'],
            noise: ['quiet'],
            transport: ['public', 'private', 'keke'],
            lifestyle: ['family'],
            electricity: ['manageable'],
        },
        floodRisk: 'low',
        powerAvgHours: 14,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦40k - ₦100k',
        minPrice: 1500000,
        maxPrice: 3000000,
        innerLocalities: ['Ogudu GRA', 'Ogudu Orioke', 'Ogudu Mall', 'Ramatu Street', 'Victoria Street'],
        subLocalityInsights: {
            'Ogudu GRA': {
                en: "One of the most organized mainland estates. 'Strict security, paved roads, and very quiet. Residents are mostly wealthy professionals and retirees.'",
                pidgin: "Correct estate for mainland. 'Security set, road smooth, and everywhere cool. Na big men and people wey don retire full here.'"
            },
            'Ogudu Orioke': {
                en: "More budget-friendly and lively. 'Expect more noise and traffic, but it's very central and has great local markets.'",
                pidgin: "Area wey budget friendly. 'Noise and traffic go dey small, but you close to everywhere and market full ground.'"
            }
        },
        subLocalityDetails: {
            'Ogudu GRA': {
                placesToVisit: [
                    { name: 'Ogudu GRA' },
                    { name: 'Ogudu Market' },
                    { name: 'CMD Road axis' },
                    { name: 'Ogudu Mall', url: 'https://www.instagram.com/ogudumallofficial/' }
                ],
                whatToEat: [
                    { name: 'Local rice joints' },
                    { name: 'Amala spots' },
                    { name: 'Small restaurants' },
                    { name: 'Labule Ogudu', url: 'https://www.instagram.com/labulerestaurant/' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Football pitches', type: 'Football' },
                    { name: 'Gyms', type: 'Gym' },
                    { name: 'I-Fitness Ogudu (Nearby)', type: 'Gym', url: 'https://ifitness.ng/' }
                ]
            },
            'Ogudu Orioke': {
                placesToVisit: [
                    { name: 'Ogudu Market area' },
                    { name: 'Local street shops' }
                ],
                whatToEat: [
                    { name: 'Street buka' },
                    { name: 'Fast food spots' }
                ],
                sports: [
                    { name: 'Community football', type: 'Football' },
                    { name: 'Local gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.5771, lng: 3.3905 },
    },
    {
        id: 'mushin',
        name: 'Mushin',
        description: {
            en: 'For the strong hearted. Maximum hustle.',
            pidgin: 'If you get mind. Na layout for hustle.'
        },
        priceRange: {
            en: "₦200k - ₦400k (Room)",
            pidgin: "₦200k - ₦400k (Room)"
        },
        commuteTo: { vi: '45m', ikeja: '30m' },
        hotspots: [
            { name: 'Mushin Market', category: 'activity' },
            { name: 'Local Bukas', category: 'food' }
        ],
        attributes: {
            rent: ['budget'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public', 'keke'],
            lifestyle: ['nightlife'],
            electricity: ['alternative'],
        },
        floodRisk: 'low',
        powerAvgHours: 8,
        internetFiber: false,
        securityRating: 2,
        genCostEstimate: '₦15k - ₦35k',
        minPrice: 200000,
        maxPrice: 400000,
        innerLocalities: ['Idi-Oro', 'Olorunsogo', 'Papa Ajao', 'Olosha', 'Challenge'],
        subLocalityInsights: {
            'Papa Ajao': {
                en: "The 'Lekki' of Mushin. 'Relatively paved and more organized than the rest of Mushin. Popular with mid-level earners who want to stay central.'",
                pidgin: "Small Lekki for inside Mushin. 'Everywhere set small and pipo wey get small change full here. E close to everywhere.'"
            },
            'Ojuwoye': {
                en: "Market heartbeat. 'One of the busiest trading points in Lagos. Maximum energy and local commerce.'",
                pidgin: "Trading headquarters. 'Everything you want dey here. Energy full ground and local trading full ground.'"
            }
        },
        subLocalityDetails: {
            'Ojuwoye': {
                placesToVisit: [
                    { name: 'Ojuwoye Market' },
                    { name: 'Mushin Railway axis' },
                    { name: 'Community hubs' }
                ],
                whatToEat: [
                    { name: 'Amala & ewedu' },
                    { name: 'Suya' },
                    { name: 'Fried yam & akara' }
                ],
                sports: [
                    { name: 'Street football', type: 'Football' },
                    { name: 'Boxing gyms', type: 'Gym' },
                    { name: 'Community fields', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.5333, lng: 3.3500 },
    },
    {
        id: 'obalende',
        name: 'Obalende',
        description: {
            en: 'Extreme connectivity to everywhere. Very busy.',
            pidgin: 'You fit enter motor to anywhere from here. E busy gan.'
        },
        priceRange: {
            en: "₦400k - ₦800k (Miniflat)",
            pidgin: "₦400k - ₦800k (Miniflat)"
        },
        commuteTo: { vi: '10m', ikeja: '45m' },
        hotspots: [
            { name: 'Obalende Park', category: 'activity' },
            { name: 'Suya Spots', category: 'food' }
        ],
        attributes: {
            rent: ['budget', 'standard'],
            work: ['island', 'central'],
            noise: ['noisy'],
            transport: ['public', 'keke'],
            lifestyle: ['nightlife'],
            electricity: ['manageable'],
        },
        floodRisk: 'moderate',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦25k - ₦60k',
        minPrice: 400000,
        maxPrice: 800000,
        innerLocalities: ['South-West Ikoyi Border', 'Mammy Market', 'Keffi Street', 'St. Gregorys Road'],
        subLocalityInsights: {
            'Obalende Terminal': {
                en: "Street food heaven. 'The real soul of Obalende. Best place for original Suya and Kilishi. Very busy and can be chaotic.'",
                pidgin: "Food headquarters. 'Real Suya full here. Everywhere busy and noise go dey, but enjoyment set.'"
            }
        },
        subLocalityDetails: {
            'Obalende Terminal': {
                placesToVisit: [
                    { name: 'Obalende Bus Terminal' },
                    { name: 'Marina waterfront' },
                    { name: 'Dodan Barracks' }
                ],
                whatToEat: [
                    { name: 'Quick street meals' },
                    { name: 'Shawarma' },
                    { name: 'Buka rice' },
                    { name: 'Obalende Suya (Original)', url: 'https://www.instagram.com/explore/tags/obalendesuyaspot/' }
                ],
                sports: [
                    { name: 'Walking routes', type: 'Other' },
                    { name: 'Small gyms', type: 'Gym' },
                    { name: 'Urban jogging', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.4526, lng: 3.4093 },
    },
    {
        id: 'agege',
        name: 'Agege',
        description: {
            en: 'Lively and affordable with the train station nearby.',
            pidgin: 'Everywhere stew. Train station dey and e cheap.'
        },
        priceRange: {
            en: "₦300k - ₦600k (2 Bedroom)",
            pidgin: "₦300k - ₦600k (2 Bedroom)"
        },
        commuteTo: { vi: '1hr 30m', ikeja: '20m' },
        hotspots: [
            { name: 'Agege Stadium', category: 'activity' },
            { name: 'Train Station', category: 'activity' }
        ],
        attributes: {
            rent: ['budget'],
            work: ['commute'],
            noise: ['noisy'],
            transport: ['public', 'keke'],
            lifestyle: ['nightlife', 'family'],
            electricity: ['alternative'],
        },
        floodRisk: 'moderate',
        powerAvgHours: 10,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦20k - ₦50k',
        minPrice: 300000,
        maxPrice: 600000,
        innerLocalities: ['Pen Cinema', 'Dopemu', 'Orile Agege', 'Mulero', 'Alfa Nla'],
        subLocalityInsights: {
            'Pen Cinema': {
                en: "The bridge to everything. 'High-energy hub. The new flyover has changed the game, but the street markets are still the soul.'",
                pidgin: "Center point. 'Flyover don make waka easy but market still be the heartbeat. Energy set here.'"
            }
        },
        subLocalityDetails: {
            'Pen Cinema': {
                placesToVisit: [
                    { name: 'Agege Stadium' },
                    { name: 'Agege Train Station' },
                    { name: 'Dopemu axis' }
                ],
                whatToEat: [
                    { name: 'Famous Agege bread' },
                    { name: 'Suya' },
                    { name: 'Local bukas' }
                ],
                sports: [
                    { name: 'Stadium sports', type: 'Other' },
                    { name: 'Community gyms', type: 'Gym' },
                    { name: 'Football centers', type: 'Football' }
                ]
            }
        },
        coords: { lat: 6.6170, lng: 3.3209 },
    },
    {
        id: 'ojota',
        name: 'Ojota',
        description: {
            en: 'Central connector. Good for BRT access.',
            pidgin: 'Center point. BRT full here well.'
        },
        priceRange: {
            en: "₦400k - ₦800k (Miniflat)",
            pidgin: "₦400k - ₦800k (Miniflat)"
        },
        commuteTo: { vi: '50m', ikeja: '20m' },
        hotspots: [
            { name: 'Ojota Park', category: 'activity' },
            { name: 'China Town', category: 'activity' }
        ],
        attributes: {
            rent: ['budget', 'mid'],
            work: ['central'],
            noise: ['noisy', 'moderate'],
            transport: ['public', 'private', 'keke'],
            lifestyle: ['family'],
            electricity: ['manageable'],
        },
        floodRisk: 'moderate',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦25k - ₦60k',
        minPrice: 400000,
        maxPrice: 800000,
        innerLocalities: ['Olusosun', 'Ojota Bus Park', 'Ogudu Road Entrance'],
        subLocalityInsights: {
            'Ojota Park': {
                en: "Transport hub. 'Busy BRT terminal and connection point for travelers entering or leaving Lagos.'",
                pidgin: "Waka terminal. 'BRT plenty and motors wey dey go outside Lagos full here. Energy 100.'"
            }
        },
        subLocalityDetails: {
            'Ojota Park': {
                placesToVisit: [
                    { name: 'Ojota BRT Terminal' },
                    { name: 'Maryland axis' },
                    { name: 'Local parks' }
                ],
                whatToEat: [
                    { name: 'Suya' },
                    { name: 'Fast food' },
                    { name: 'Amala' }
                ],
                sports: [
                    { name: 'Jogging', type: 'Other' },
                    { name: 'Football fields', type: 'Football' },
                    { name: 'Small gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.5815, lng: 3.3860 },
    },
    {
        id: 'berger',
        name: 'Berger',
        description: {
            en: 'Gateway to Lagos. Good for frequent travelers.',
            pidgin: 'Entrance to Lagos. Good if you dey travel often.'
        },
        priceRange: {
            en: "₦500k - ₦1m (2 Bedroom)",
            pidgin: "₦500k - ₦1m (2 Bedroom)"
        },
        commuteTo: { vi: '1hr 15m', ikeja: '25m' },
        hotspots: [
            { name: 'Berger Park', category: 'activity' },
            { name: 'Justrite', category: 'activity' }
        ],
        attributes: {
            rent: ['budget', 'mid'],
            work: ['commute'],
            noise: ['noisy', 'moderate'],
            transport: ['public', 'private', 'keke'],
            lifestyle: ['family'],
            electricity: ['manageable'],
        },
        floodRisk: 'low',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦30k - ₦65k',
        minPrice: 500000,
        maxPrice: 1000000,
        innerLocalities: ['Isheri-Olowora', 'Omole Phase 2 Entrance', 'Kara', 'Long Bridge'],
        subLocalityInsights: {
            'Berger Terminal': {
                en: "Gateway to Lagos. 'Activity hub for travelers and commuters along the Lagos-Ibadan expressway.'",
                pidgin: "Lagos gate. 'Motors full ground for people wey dey travel. Expressway vibe plenty.'"
            }
        },
        subLocalityDetails: {
            'Berger Terminal': {
                placesToVisit: [
                    { name: 'Berger Bus Stop' },
                    { name: 'Expressway axis' },
                    { name: 'Arepo connection' }
                ],
                whatToEat: [
                    { name: 'Roadside grills' },
                    { name: 'Buka rice' },
                    { name: 'Fast food' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Gyms', type: 'Gym' },
                    { name: 'Football viewing centers', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.6500, lng: 3.3700 },
    },
    {
        id: 'ikeja',
        name: 'Ikeja',
        description: {
            en: 'The capital. Commercial, happening, and central.',
            pidgin: 'Alausa level. Business full everywhere and e central.'
        },
        priceRange: {
            en: "₦1.5m - ₦3m (2 Bedroom)",
            pidgin: "₦1.5m - ₦3m (2 Bedroom)"
        },
        commuteTo: { vi: '45m', ikeja: '0m' },
        hotspots: [
            { name: 'Ikeja City Mall (ICM)', category: 'activity' },
            { name: 'The Place', category: 'food' },
            { name: 'Radisson Blu', category: 'hotel' },
            { name: 'Cubana', category: 'nightlife' },
            { name: 'Afrika Shrine', category: 'nightlife' },
            { name: 'Ndubuisi Kanu Park', category: 'activity' },
            { name: 'La Mango', category: 'food' }
        ],
        attributes: {
            rent: ['budget', 'mid'],
            work: ['central'],
            noise: ['moderate', 'noisy'],
            transport: ['public', 'walk', 'private'],
            lifestyle: ['nightlife', 'creative', 'family'],
            electricity: ['stable', 'manageable'],
        },
        floodRisk: 'low',
        powerAvgHours: 16,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦40k - ₦100k',
        minPrice: 1500000,
        maxPrice: 3000000,
        funFact: {
            en: "Hosts the Kalakuta Republic Museum, the former home of the legendary Fela Kuti.",
            pidgin: "Fela Kuti house wey turn museum dey here. Abami Eda spirit still dey ground."
        },
        innerLocalities: ['Alausa', 'Opebi', 'Allen Avenue', 'Computer Village', 'Agidingbi', 'Toyin Street'],
        subLocalityInsights: {
            'Alausa': {
                en: "The Seat of Power. 'Home to ICM and the Governor's office. Very secure but don't even think of parking on the road. Traffic is mostly controlled.'",
                pidgin: "Government base. 'ICM Mall dey here. Security set but no try park for road. Traffic dey follow command for here.'"
            },
            'Opebi': {
                en: "Residential luxury. 'Beautiful houses and great restaurants. Quiet compared to Allen, but the hills can be tricky during heavy rain.'",
                pidgin: "Big man ground. 'House set and food full ground. E cool pass Allen but some roads fit get small water if rain heavy.'"
            },
            'Allen Avenue': {
                en: "The commercial legendary. 'The home of upscale business and nightlife on the mainland. Always bubbling and centrally located.'",
                pidgin: "Business and jaiye road. 'Allen set for anything business and night life. Everywhere bubbling and Ikeja center na here.'"
            }
        },
        subLocalityDetails: {
            'Alausa': {
                placesToVisit: [
                    { name: 'Ikeja City Mall (ICM)', url: 'http://ikejacitymall.com.ng/' },
                    { name: 'Ndubuisi Kanu Park', url: 'https://lagosstate.gov.ng/laspark/' },
                    { name: 'Governor’s Office Gate', url: 'https://lagosstate.gov.ng/' }
                ],
                whatToEat: [
                    { name: 'The Place (Alausa)', url: 'https://www.theplace.com.ng/' },
                    { name: 'KFC ICM', url: 'https://www.instagram.com/kfc_nigeria/' },
                    { name: 'Ocean Basket (ICM)', url: 'https://www.instagram.com/oceanbasket_nigeria/' }
                ],
                sports: [
                    { name: 'Ndubuisi Kanu Park Courts', type: 'Basketball', url: 'https://lagosstate.gov.ng/laspark/' },
                    { name: 'Tennis Court (Park)', type: 'Tennis', url: 'https://lagosstate.gov.ng/laspark/' },
                    { name: 'ICM Fitness Hub', type: 'Gym', url: 'http://ikejacitymall.com.ng/' }
                ]
            },
            'Opebi': {
                placesToVisit: [
                    { name: 'Afrika Shrine (New)', url: 'https://felakuti.com/' },
                    { name: 'Kalakuta Museum', url: 'https://www.instagram.com/kalakutamuseum/' }
                ],
                whatToEat: [
                    { name: 'La Mango', url: 'https://www.instagram.com/lamangolagos/' },
                    { name: 'The Place (Opebi)', url: 'https://www.theplace.com.ng/' },
                    { name: 'Golden Eagle Spur', url: 'https://www.instagram.com/spurfamily_nigeria/' }
                ],
                sports: [
                    { name: 'I-Fitness Opebi', type: 'Gym', url: 'https://ifitness.ng/' },
                    { name: 'Fit2Live Gym', type: 'Gym', url: 'https://www.instagram.com/fit2live_gym/' }
                ]
            },
            'Allen Avenue': {
                placesToVisit: [
                    { name: 'Allen Avenue shops' },
                    { name: 'Ikeja City Mall (nearby)', url: 'http://ikejacitymall.com.ng/' },
                    { name: 'Kalakuta Museum', url: 'https://www.instagram.com/kalakutamuseum/' }
                ],
                whatToEat: [
                    { name: 'Allen Avenue grills' },
                    { name: 'Fast food' },
                    { name: 'Continental dishes' }
                ],
                sports: [
                    { name: 'Local gyms', type: 'Gym' },
                    { name: 'Fitness centers', type: 'Gym' },
                    { name: 'Aerobics studios', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.5922, lng: 3.3422 },
    },
    {
        id: 'chevron',
        name: 'Chevron',
        description: {
            en: 'Around the Chevron drive. Good estates and security.',
            pidgin: 'Round Chevron drive. Correct estates and security guaranteed.'
        },
        priceRange: {
            en: "₦3m - ₦5m (Terrace/Flat)",
            pidgin: "₦3m - ₦5m (Terrace/Flat)"
        },
        commuteTo: { vi: '15m', ikeja: '1hr 15m' },
        hotspots: [
            { name: 'Chevron Drive', category: 'activity' },
            { name: 'Atlantic Center', category: 'activity' }
        ],
        attributes: {
            rent: ['mid', 'premium'],
            work: ['island'],
            noise: ['quiet', 'moderate'],
            transport: ['ride', 'private'],
            lifestyle: ['family', 'fitness'],
            electricity: ['stable'],
        },
        floodRisk: 'moderate',
        powerAvgHours: 18,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦80k - ₦160k',
        minPrice: 3000000,
        maxPrice: 5000000,
        innerLocalities: ['Lekki Gardens', 'Ocean Bay', 'Orchid Road', 'LBS Neighborhood'],
        subLocalityInsights: {
            'Chevron Estate': {
                en: "The corporate enclave. 'Gated communities surrounding the Chevron HQ. Secure, professional, and quiet.'",
                pidgin: "Big boy base. 'Estate full everywhere near Chevron office. Security tight, neighbors get level.'"
            }
        },
        subLocalityDetails: {
            'Chevron Estate': {
                placesToVisit: [
                    { name: 'Chevron Estate' },
                    { name: 'Lekki Expressway axis' },
                    { name: 'Nearby conservation spots' }
                ],
                whatToEat: [
                    { name: 'Estate restaurants' },
                    { name: 'Grills' },
                    { name: 'Premium takeout' }
                ],
                sports: [
                    { name: 'Estate football courts', type: 'Football' },
                    { name: 'Gyms', type: 'Gym' },
                    { name: 'Jogging routes', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.4442, lng: 3.5152 },
    },
    {
        id: 'festac',
        name: 'Festac',
        description: {
            en: 'Historic town with good planning and community.',
            pidgin: 'Old school vibes with better plan and community.'
        },
        priceRange: {
            en: "₦700k - ₦1.5m (3 Bedroom)",
            pidgin: "₦700k - ₦1.5m (3 Bedroom)"
        },
        commuteTo: { vi: '1hr', ikeja: '1hr' },
        hotspots: [
            { name: 'Festival Mall', category: 'activity' },
            { name: 'Golden Tulip', category: 'hotel' }
        ],
        attributes: {
            rent: ['budget', 'standard'],
            work: ['commute'],
            noise: ['moderate'],
            transport: ['public', 'private', 'keke'],
            lifestyle: ['family'],
            electricity: ['manageable'],
        },
        floodRisk: 'low',
        powerAvgHours: 12,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦30k - ₦60k',
        minPrice: 700000,
        maxPrice: 1500000,
        innerLocalities: ['1st Avenue', '2nd Avenue', '3rd Avenue', '4th Avenue', '5th Avenue', '6th Avenue', '7th Avenue'],
        subLocalityInsights: {
            'First Avenue': {
                en: "The gateway to Festac. 'Broad streets, iconic 777 apartments, and a residential soul that has lasted decades.'",
                pidgin: "Festac gate. 'Road wide well well. Old apartments full ground and everywhere get history. Life for here calm.'"
            }
        },
        subLocalityDetails: {
            'First Avenue': {
                placesToVisit: [
                    { name: 'First Avenue axis' },
                    { name: 'Festac Mall', url: 'https://www.festivalmall.com.ng/' },
                    { name: 'Cultural buildings' }
                ],
                whatToEat: [
                    { name: 'Local grills' },
                    { name: 'Buka joints' },
                    { name: 'Fast food' }
                ],
                sports: [
                    { name: 'Football pitches', type: 'Football' },
                    { name: 'Basketball courts', type: 'Basketball' },
                    { name: 'Gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.4622, lng: 3.2822 },
    },
    {
        id: 'gbagada',
        name: 'Gbagada',
        description: {
            en: 'Centrally located on the mainland. Great for families and commute.',
            pidgin: 'Center of Lagos Mainland. E good for family and movement set.'
        },
        priceRange: {
            en: "₦1.5m - ₦3.5m (2 Bedroom)",
            pidgin: "₦1.5m - ₦3.5m (2 Bedroom)"
        },
        commuteTo: { vi: '25m', ikeja: '20m' },
        hotspots: [
            { name: 'Gbagada Phase 1 & 2', category: 'activity' },
            { name: 'R. Jolad Hospital', category: 'activity' },
            { name: 'KFC', category: 'food' },
            { name: 'Dominos', category: 'food' }
        ],
        attributes: {
            rent: ['standard', 'mid'],
            work: ['central'],
            noise: ['moderate', 'quiet'],
            transport: ['public', 'private', 'ride'],
            lifestyle: ['family'],
            electricity: ['manageable', 'stable'],
        },
        floodRisk: 'moderate',
        powerAvgHours: 14,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦40k - ₦90k',
        minPrice: 1500000,
        maxPrice: 3500000,
        innerLocalities: ['Gbagada Phase 1', 'Gbagada Phase 2', 'Medina Estate', 'Ifako-Gbagada', 'Atunrase', 'Soluyi'],
        subLocalityInsights: {
            'Phase 2': {
                en: "Mature residency. 'Quiet and secure. Medina and Atunrase estates are the best ground here for families. Mature crowd.'",
                pidgin: "Jeje area. 'Security set. Medina and Atunrase na the best spots for family. People wey get sense full here.'"
            },
            'Phase 1': {
                en: "Commercial & Active. 'Close to the Gbagada General Hospital and the main bus stops. Faster pace than Phase 2 but very convenient.'",
                pidgin: "Hustle ground. 'Near hospital and bus stop. Movement sharp pass Phase 2 but everything near you for here.'"
            },
            'Gbagada Phase 2': {
                en: "Residential central. 'Quiet, secure, and perfectly positioned for both Island and Mainland access.'",
                pidgin: "Center point. 'Everywhere quiet, security tight. You fit enter Island or Mainland sharply from here.'"
            }
        },
        subLocalityDetails: {
            'Phase 2': {
                placesToVisit: [
                    { name: 'Gbagada Grassroots Sport', url: 'https://www.instagram.com/explore/tags/gbagada/' },
                    { name: 'Alao Bashorun Park', url: 'https://www.google.com/maps/search/Alao+Bashorun+Park/' }
                ],
                whatToEat: [
                    { name: 'La Branco Restaurant', url: 'http://labrancorestaurant.com/' },
                    { name: 'Barbeque Bistro', url: 'https://www.instagram.com/barbequebistro/' },
                    { name: 'Aduke Olowosibi (Amala)', url: 'https://www.instagram.com/adukeolowosibi/' }
                ],
                sports: [
                    { name: 'I-Fitness Gbagada', type: 'Gym', url: 'https://ifitness.ng/' },
                    { name: 'Gbagada Country Club', type: 'Other' },
                    { name: 'PureNatural Zone', type: 'Gym', url: 'https://www.instagram.com/explore/locations/1018873753/purenatural-zone-fitness-club/' }
                ]
            },
            'Gbagada Phase 2': {
                placesToVisit: [
                    { name: 'Gbagada Phase 2' },
                    { name: 'Bakare Estate axis' },
                    { name: 'Upscale cafés' }
                ],
                whatToEat: [
                    { name: 'Lounge grills' },
                    { name: 'Premium takeout' },
                    { name: 'Café food' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Gyms', type: 'Gym' },
                    { name: 'Football viewing centers', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.5522, lng: 3.3922 },
    },
    {
        id: 'anthony',
        name: 'Anthony Village',
        description: {
            en: 'Quiet, accessible, and well-structured mainland neighborhood.',
            pidgin: 'Jeje area wey road enter well. E set nicely.'
        },
        priceRange: {
            en: "₦1.2m - ₦3m (2 Bedroom)",
            pidgin: "₦1.2m - ₦3m (2 Bedroom)"
        },
        commuteTo: { vi: '30m', ikeja: '15m' },
        hotspots: [
            { name: 'Anthony Park', category: 'activity' },
            { name: 'Simply Green', category: 'food' }
        ],
        attributes: {
            rent: ['standard', 'mid'],
            work: ['central'],
            noise: ['quiet', 'moderate'],
            transport: ['public', 'private', 'ride'],
            lifestyle: ['family', 'creative'],
            electricity: ['manageable'],
        },
        floodRisk: 'low',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦35k - ₦80k',
        minPrice: 600000,
        maxPrice: 3000000,
        innerLocalities: ['Ajao Estate (Anthony)', 'Pedro', 'Adebayo Mokuolu', 'Anthony Park'],
        subLocalityInsights: {
            'Anthony Park': {
                en: "The hidden gem. 'Extremely accessible to both Island and Mainland. Quiet streets and very safe. Great for middle-class families.'",
                pidgin: "Mainland secret. 'Island near you, Mainland near you. Everywhere quiet and security set. Middle-class family ground.'"
            },
            'Ajao Estate (Anthony)': {
                en: "Quiet & Secure. 'A well-planned mini-estate with mostly residential houses. Very peaceful and away from the main road noise.'",
                pidgin: "Jeje estate. 'Place arrange well, house full ground. Noise no dey here and security match well.'"
            },
            'Anthony Village': {
                en: "Strategic residential. 'One of the most accessible areas on the mainland. Quiet streets and decent community vibes.'",
                pidgin: "Strategic ground. 'Road enter different side for mainland. Everywhere calm and people set.'"
            }
        },
        subLocalityDetails: {
            'Anthony Park': {
                placesToVisit: [
                    { name: 'Anthony Park', url: 'https://www.instagram.com/explore/locations/312015099/anthony-village/' },
                    { name: 'Anthony Recreation Center', url: 'https://www.google.com/maps/search/Anthony+Village+Recreation+Center/' }
                ],
                whatToEat: [
                    { name: 'Simply Green (Anthony)', url: 'https://www.instagram.com/simplygreenng/' },
                    { name: 'The Place (Maryland nearby)', url: 'https://www.theplace.com.ng/' },
                    { name: 'Local Grills at Anthony', url: 'https://www.google.com/search?q=food+in+Anthony+Village' }
                ],
                sports: [
                    { name: 'Anthony Village Gym', type: 'Gym', url: 'https://www.instagram.com/explore/tags/anthonyvillage/' },
                    { name: 'Ajao Estate Tennis', type: 'Tennis' }
                ]
            },
            'Anthony Village': {
                placesToVisit: [
                    { name: 'Anthony Village Estate' },
                    { name: 'Nearby Maryland Mall' },
                    { name: 'Ikorodu Road axis' }
                ],
                whatToEat: [
                    { name: 'Local grills' },
                    { name: 'Buka rice' },
                    { name: 'Fast food' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Small gyms', type: 'Gym' },
                    { name: 'Football viewing', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.5622, lng: 3.3722 },
    },
    {
        id: 'ogudu_gra',
        name: 'Ogudu GRA',
        description: {
            en: 'Exclusive mainland GRA with good roads and serenity.',
            pidgin: 'Mainland big man area. Road good and ground calm.'
        },
        priceRange: {
            en: "₦2m - ₦4.5m (3 Bedroom)",
            pidgin: "₦2m - ₦4.5m (3 Bedroom)"
        },
        commuteTo: { vi: '30m', ikeja: '20m' },
        hotspots: [
            { name: 'Ogudu GRA', category: 'activity' },
            { name: 'Ogudu Mall', category: 'activity' },
            { name: 'China Town', category: 'activity' }
        ],
        attributes: {
            rent: ['mid', 'upper_mid'],
            work: ['central'],
            noise: ['quiet'],
            transport: ['private', 'ride'],
            lifestyle: ['family', 'fitness'],
            electricity: ['stable', 'manageable'],
        },
        floodRisk: 'low',
        powerAvgHours: 16,
        internetFiber: true,
        securityRating: 5,
        genCostEstimate: '₦60k - ₦150k',
        minPrice: 2000000,
        maxPrice: 4500000,
        innerLocalities: ['Ramat Estate', 'Ogudu Valley', 'Ogudu Road', 'China Town'],
        subLocalityInsights: {
            'Ramat Estate': {
                en: "Mainland Elite. 'Quiet, secure, and very well planned. The roads are good and it's a very peaceful neighborhood for families.'",
                pidgin: "Mainland big man ground. 'Everywhere calm, security tight and road set. Neighbors na mature people.'"
            },
            'Ogudu GRA': {
                en: "The elite pocket. 'One of the most organized mainland estates. Strict security, paved roads, and very quiet.'",
                pidgin: "Mainland big man estate. 'Security set, road smooth, and everywhere cool. Na big men and people wey don retire full here.'"
            }
        },
        subLocalityDetails: {
            'Ramat Estate': {
                placesToVisit: [
                    { name: 'Ogudu Mall', url: 'https://www.instagram.com/ogudumall/' },
                    { name: 'Sheraton Lagos (nearby)', url: 'https://www.marriott.com/hotels/travel/lossi-sheraton-lagos-hotel/' }
                ],
                whatToEat: [
                    { name: 'Yellow Chilli (nearby)', url: 'https://yellowchilling.com/' },
                    { name: 'The Place (Ojota nearby)', url: 'https://www.theplace.com.ng/' }
                ],
                sports: [
                    { name: 'Ogudu Lifestyle Center', type: 'Gym', url: 'https://www.instagram.com/ogudulifestylecenter/' }
                ]
            },
            'Ogudu GRA': {
                placesToVisit: [
                    { name: 'Ogudu GRA Estate' },
                    { name: 'Ogudu Mall (nearby)' },
                    { name: 'CMD Road axis' }
                ],
                whatToEat: [
                    { name: 'Upscale restaurants' },
                    { name: 'Café lounges' },
                    { name: 'Continental dishes' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Private gyms', type: 'Gym' },
                    { name: 'Tennis courts', type: 'Tennis' }
                ]
            }
        },
        coords: { lat: 6.5771, lng: 3.3905 },
    },
    {
        id: 'maryland',
        name: 'Maryland',
        description: {
            en: 'The heart of Lagos traffic interaction, very commercial.',
            pidgin: 'Where road meet. Business full, movement plenty.'
        },
        priceRange: {
            en: "₦1.5m - ₦3m (2 Bedroom)",
            pidgin: "₦1.5m - ₦3m (2 Bedroom)"
        },
        commuteTo: { vi: '35m', ikeja: '10m' },
        hotspots: [
            { name: 'Maryland Mall', category: 'activity' },
            { name: 'Sheraton', category: 'hotel' },
            { name: 'Genesis Cinemas', category: 'activity' }
        ],
        attributes: {
            rent: ['standard', 'mid'],
            work: ['central'],
            noise: ['noisy', 'moderate'],
            transport: ['public', 'walk', 'private'],
            lifestyle: ['nightlife', 'family'],
            electricity: ['manageable'],
        },
        floodRisk: 'moderate',
        powerAvgHours: 10,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦30k - ₦70k',
        minPrice: 500000,
        maxPrice: 3000000,
        innerLocalities: ['Onigbongbo', 'Mende', 'Shonibare Estate', 'Cane Village'],
        subLocalityInsights: {
            'Shonibare Estate': {
                en: "The elite pocket. 'One of the most expensive and secure estates on the Mainland. Paved roads, old-growth trees, and very quiet.'",
                pidgin: "Mainland big boy estate. 'Money full ground here. Road smooth, trees plenty and security tight like drum.'"
            },
            'Mende': {
                en: "Urban & Accessible. 'Great for young professionals. Close to everything but can get busy. Watch out for potholes in some inner streets.'",
                pidgin: "Young people ground. 'E close to everywhere. Movement set but some internal roads fit get small pit.'"
            },
            'Maryland Mall Axis': {
                en: "The connectivity king. 'Centrally located with the iconic Maryland Mall. Easy access to Ikeja and the Island.'",
                pidgin: "Center of everything. 'Maryland Mall set for waka and shopping. Close to Ikeja and Island well well.'"
            }
        },
        subLocalityDetails: {
            'Shonibare Estate': {
                placesToVisit: [
                    { name: 'Maryland Mall', url: 'https://marylandmallng.com/' },
                    { name: 'Cane Village (Crafts)', url: 'https://www.instagram.com/explore/tags/canevillage/' }
                ],
                whatToEat: [
                    { name: 'Sheraton Restaurants', url: 'https://www.marriott.com/hotels/travel/lossi-sheraton-lagos-hotel/' },
                    { name: 'Genesis Cinemas (Food Court)', url: 'https://www.genesiscinemas.com/' },
                    { name: 'Okoto d’Ere (Native food)', url: 'https://www.instagram.com/explore/tags/okotodere/' }
                ],
                sports: [
                    { name: 'Sheraton Gym & Pool', type: 'Gym', url: 'https://www.marriott.com/hotels/travel/lossi-sheraton-lagos-hotel/' },
                    { name: 'Shonibare Estate Walkways', type: 'Other' }
                ]
            },
            'Maryland Mall Axis': {
                placesToVisit: [
                    { name: 'Maryland Mall', url: 'https://marylandmall.com.ng/' },
                    { name: 'Planet One', url: 'https://www.instagram.com/planetonehospitality/' },
                    { name: 'Ikeja GRA (nearby)' }
                ],
                whatToEat: [
                    { name: 'Maryland Mall food court' },
                    { name: 'Street grills' },
                    { name: 'Buka joints' }
                ],
                sports: [
                    { name: 'Gyms (Maryland Mall)', type: 'Gym' },
                    { name: 'Jogging routes', type: 'Other' },
                    { name: 'Football viewing', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.5722, lng: 3.3622 },
    },

    {
        id: 'sangotedo',
        name: 'Sangotedo',
        description: {
            en: 'Developing area after Ajah with malls and new estates.',
            pidgin: 'Area after Ajah wey dey catch up fast. Mall dey.'
        },
        priceRange: {
            en: "₦800k - ₦2m (2 Bedroom)",
            pidgin: "₦800k - ₦2m (2 Bedroom)"
        },
        commuteTo: { vi: '50m', ikeja: '1hr 45m' },
        hotspots: [
            { name: 'Novare Mall (Shoprite)', category: 'activity' },
            { name: 'Lufasi Nature Park', category: 'activity' },
            { name: 'Dominos', category: 'food' }
        ],
        attributes: {
            rent: ['budget', 'standard'],
            work: ['island', 'commute'],
            noise: ['moderate'],
            transport: ['public', 'private'],
            lifestyle: ['family'],
            electricity: ['manageable', 'alternative'],
        },
        floodRisk: 'high',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦45k - ₦100k',
        minPrice: 800000,
        maxPrice: 2000000,
        innerLocalities: ['Crown Estate', 'Emperor Estate', 'Monastery Road', 'Diamond Estate'],
        subLocalityInsights: {
            'Monastery Road': {
                en: "The commercial artery. 'Home to Novare Mall. Great vibe, you have everything here, but the road gets choked on weekends and wet after rain.'",
                pidgin: "Mall road. 'Shoprite dey here. Movement set well well, everything you need dey, but weekend traffic fit show you shege and water fit gather if rain fall.'"
            },
            'Crown Estate': {
                en: "Peaceful ground. 'One of the most organized estates in this axis. Security is 10/10 and power is decent.'",
                pidgin: "Jeje ground. 'Estate set nicely, organized pass many places. Security match well and power no bad.'"
            }
        },
        subLocalityDetails: {
            'Monastery Road': {
                placesToVisit: [
                    { name: 'Novare Mall', url: 'https://novaremall.com/' },
                    { name: 'Lufasi Nature Park', url: 'https://lufasi.org/' }
                ],
                whatToEat: [
                    { name: 'Novare Mall Food Court', url: 'https://novaremall.com/' },
                    { name: 'Dominos Pizza', url: 'https://www.dominos.ng/' }
                ],
                sports: [
                    { name: 'Lufasi Nature Park Trails', type: 'Other', url: 'https://lufasi.org/' }
                ]
            }
        },
        coords: { lat: 6.4716, lng: 3.6190 },
    },
    {
        id: 'akowonjo',
        name: 'Akowonjo',
        description: {
            en: 'Residential Alimosho hub, active and affordable.',
            pidgin: 'Alimosho residential side. Everywhere set and rent better.'
        },
        priceRange: { en: "₦500k - ₦1m", pidgin: "₦500k - ₦1m" },
        commuteTo: { vi: '1hr 30m', ikeja: '25m' },
        hotspots: [{ name: 'Miccom Golf Resort (nearby)', category: 'activity' }],
        attributes: {
            rent: ['budget'],
            work: ['commute'],
            noise: ['noisy'],
            transport: ['public'],
            lifestyle: ['family'],
            electricity: ['alternative']
        },
        floodRisk: 'low',
        powerAvgHours: 10,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦25k - ₦55k',
        minPrice: 500000,
        maxPrice: 1000000,
        innerLocalities: ['Miccom', 'Shasha', 'Ponle', 'Dopemu Border'],
        subLocalityInsights: {
            'Akowonjo Road': {
                en: "Residential hustle. 'Busy residential artery connecting Egbeda and Ikeja. Lively atmosphere and local markets.'",
                pidgin: "Everywhere bubbling. 'Road connect Egbeda and Ikeja. People plenty and market full ground.'"
            }
        },
        subLocalityDetails: {
            'Akowonjo Road': {
                placesToVisit: [
                    { name: 'Akowonjo local markets' },
                    { name: 'Nearby Egbeda Axis' },
                    { name: 'Retail plazas' }
                ],
                whatToEat: [
                    { name: 'Roadside suya' },
                    { name: 'Local buka' },
                    { name: 'Fried yam & akara' }
                ],
                sports: [
                    { name: 'Small football centers', type: 'Football' },
                    { name: 'Local gyms', type: 'Gym' },
                    { name: 'Community running', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.5922, lng: 3.2922 },
    },
    {
        id: 'apapa',
        name: 'Apapa',
        description: {
            en: 'The port city. Industrial and historically residential.',
            pidgin: 'Port city. Business full but ground calm for some side.'
        },
        priceRange: { en: "₦1.5m - ₦4m", pidgin: "₦1.5m - ₦4m" },
        commuteTo: { vi: '45m', ikeja: '1hr' },
        hotspots: [{ name: 'Apapa Amusement Park', category: 'activity' }],
        attributes: {
            rent: ['standard', 'mid'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public', 'private'],
            lifestyle: ['family'],
            electricity: ['manageable']
        },
        floodRisk: 'low',
        powerAvgHours: 14,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦50k - ₦120k',
        minPrice: 1500000,
        maxPrice: 4000000,
        innerLocalities: ['Apapa GRA', 'Marine Beach', 'Tincan Island', 'Ajegunle Boundary'],
        subLocalityInsights: {
            'Apapa GRA': {
                en: "Old-world elegance. 'Quiet, leafy streets and a historic feel. Bypasses the heavy truck traffic once you are inside.'",
                pidgin: "Old school style. 'Everywhere quiet, trees full ground. If you enter inside, truck no go disturb you again. Heritage feel dey here.'"
            }
        },
        subLocalityDetails: {
            'Apapa GRA': {
                placesToVisit: [
                    { name: 'Apapa Amusement Park', url: 'https://www.instagram.com/explore/locations/257375251/apapa-amusement-park/' },
                    { name: 'Apapa Club', url: 'https://apapaclub.com/' },
                    { name: 'Port Axis' }
                ],
                whatToEat: [
                    { name: 'Continental dishes' },
                    { name: 'Local buka' },
                    { name: 'Seafood' }
                ],
                sports: [
                    { name: 'Apapa Club (Tennis/Pool)', type: 'Tennis' },
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Private gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.4422, lng: 3.3622 },
    },

    {
        id: 'badagry',
        name: 'Badagry',
        description: {
            en: 'Historic coastal town, very far but very serene.',
            pidgin: 'History town near water. E far gan but ground cool.'
        },
        priceRange: { en: "₦200k - ₦500k", pidgin: "₦200k - ₦500k" },
        commuteTo: { vi: '2hrs 30m', ikeja: '2hrs' },
        hotspots: [{ name: 'Point of No Return', category: 'activity' }],
        attributes: {
            rent: ['entry'],
            work: ['commute'],
            noise: ['quiet'],
            transport: ['public'],
            lifestyle: ['creative'],
            electricity: ['alternative']
        },
        floodRisk: 'low',
        powerAvgHours: 8,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦20k - ₦45k',
        minPrice: 200000,
        maxPrice: 500000,
        innerLocalities: ['Iworo', 'Ajido', 'Seme Border Axis', 'Topo'],
        subLocalityInsights: {
            'Badagry Heritage Museum': {
                en: "Historical heart. 'A place of reflection and history. Calm, coastal, and very peaceful.'",
                pidgin: "History ground. 'Place for reflection. Everywhere calm, water for side and silence full ground.'"
            },
            'Topo': {
                en: "Coastal and calm. 'Area near the water with a very relaxed lifestyle. Great for getaways.'",
                pidgin: "Water side vibe. 'Area close to water where life slow and steady. Cool for weekend waka.'"
            }
        },
        subLocalityDetails: {
            'Badagry Heritage Museum': {
                placesToVisit: [
                    { name: 'Badagry Heritage Museum' },
                    { name: 'Slave Port' },
                    { name: 'Whispering Palms', url: 'https://whisperingpalmsonline.com/' },
                    { name: 'First Story Building' }
                ],
                whatToEat: [
                    { name: 'Local seafood' },
                    { name: 'Fresh coconut water' },
                    { name: 'Traditional snacks' }
                ],
                sports: [
                    { name: 'Beach walking', type: 'Other' },
                    { name: 'Coastal jogging', type: 'Other' },
                    { name: 'Community football', type: 'Football' }
                ]
            },
            'Topo': {
                placesToVisit: [
                    { name: 'Topo Beach' },
                    { name: 'Coastal resorts' }
                ],
                whatToEat: [
                    { name: 'Fresh fish' },
                    { name: 'Coconut based snacks' }
                ],
                sports: [
                    { name: 'Swimming (Coastal)', type: 'Other' },
                    { name: 'Beach football', type: 'Football' }
                ]
            }
        },
        coords: { lat: 6.4222, lng: 2.8822 },
    },
    {
        id: 'ebute_metta',
        name: 'Ebute Metta',
        description: {
            en: 'Historic rail hub, extremely central and hustling.',
            pidgin: 'Train headquarters. E central die and movement plenty.'
        },
        priceRange: { en: "₦600k - ₦1.5m", pidgin: "₦600k - ₦1.5m" },
        commuteTo: { vi: '15m', ikeja: '35m' },
        hotspots: [{ name: 'Railway Compound', category: 'activity' }],
        attributes: {
            rent: ['budget', 'standard'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public', 'walk', 'keke'],
            lifestyle: ['nightlife'],
            electricity: ['manageable']
        },
        floodRisk: 'moderate',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦30k - ₦65k',
        minPrice: 600000,
        maxPrice: 1500000,
        innerLocalities: ['Oko-Baba', 'Oyingbo', 'Ilogbo', 'Alagomeji Border'],
        coords: { lat: 6.4862, lng: 3.3792 }
    },
    {
        id: 'ibeju_lekki',
        name: 'Ibeju Lekki',
        description: {
            en: 'The "New Lagos". Industrial and rapidly expanding.',
            pidgin: 'New Lagos. Everywhere dey expand well well.'
        },
        priceRange: { en: "₦800k - ₦2.5m", pidgin: "₦800k - ₦2.5m" },
        commuteTo: { vi: '1hr 15m', ikeja: '2hrs' },
        hotspots: [{ name: 'La Campagne Tropicana', category: 'activity' }],
        attributes: {
            rent: ['standard', 'mid'],
            work: ['island'],
            noise: ['quiet'],
            transport: ['private'],
            lifestyle: ['fitness'],
            electricity: ['alternative']
        },
        floodRisk: 'high',
        powerAvgHours: 10,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦40k - ₦90k',
        minPrice: 800000,
        maxPrice: 2500000,
        innerLocalities: ['Eleko', 'Lakowe', 'Boguje', 'Abijo', 'Epe Border'],
        subLocalityInsights: {
            'Eleko': {
                en: "The beach gateway. 'Home to beautiful resorts and the expanding industrial hub. Energy is a mix of vacation and hard work.'",
                pidgin: "Beach ground. 'Resorts full here and industrial work plenty. E be like vacation and hustle mix together.'"
            }
        },
        subLocalityDetails: {
            'Eleko': {
                placesToVisit: [
                    { name: 'La Campagne Tropicana', url: 'https://www.lacampagnetropicana.com/' },
                    { name: 'Eleko Beach', url: 'https://www.instagram.com/explore/tags/elekobeach/' },
                    { name: 'Lekki Free Trade Zone', url: 'https://www.lfzdc.org/' }
                ],
                whatToEat: [
                    { name: 'Fresh fish at Eleko Beach', url: 'https://www.instagram.com/explore/tags/elekobeach/' },
                    { name: 'Lakowe Lakes Restaurant', url: 'https://lakowelakes.com/' }
                ],
                sports: [
                    { name: 'Lakowe Lakes Golf', type: 'Other', url: 'https://lakowelakes.com/' },
                    { name: 'Beach volleyball (Eleko)', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.4278, lng: 3.8436 }
    },
    {
        id: 'ilupeju',
        name: 'Ilupeju',
        description: {
            en: 'Quiet, industrial, and residential mix. Very central.',
            pidgin: 'Ground calm, factory dey but houses set. E central well.'
        },
        priceRange: { en: "₦1.5m - ₦3.5m", pidgin: "₦1.5m - ₦3.5m" },
        commuteTo: { vi: '25m', ikeja: '15m' },
        hotspots: [{ name: 'Ilupeju Supermarket', category: 'activity' }],
        attributes: {
            rent: ['mid'],
            work: ['central'],
            noise: ['quiet'],
            transport: ['private', 'public', 'keke'],
            lifestyle: ['family'],
            electricity: ['manageable']
        },
        floodRisk: 'low',
        powerAvgHours: 14,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦40k - ₦100k',
        minPrice: 1500000,
        maxPrice: 3500000,
        innerLocalities: ['Palmgrove', 'Obanikoro', 'Town Planning Axis'],
        subLocalityInsights: {
            'Ilupeju Estate': {
                en: "Peaceful enclave. 'Organized residential neighborhood popular with professionals and the expatriate community.'",
                pidgin: "Quiet ground. 'Everywhere organize and silence full ground. Professionals and foreigners like here well well.'"
            }
        },
        subLocalityDetails: {
            'Ilupeju Estate': {
                placesToVisit: [
                    { name: 'Ilupeju Estate' },
                    { name: 'Indian Cultural Centre' },
                    { name: 'Nearby Oshodi Mall' }
                ],
                whatToEat: [
                    { name: 'Indian cuisine (Iconic for the area)', url: 'https://www.instagram.com/explore/tags/ilupejufood/' },
                    { name: 'Continental dishes' },
                    { name: 'Local buka' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Tennis courts', type: 'Tennis' },
                    { name: 'Private gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.5522, lng: 3.3622 },
    },
    {
        id: 'ketu',
        name: 'Ketu',
        description: {
            en: 'Bustling marketplace and major transit point.',
            pidgin: 'Everywhere hustle. Market full and motor plenty.'
        },
        priceRange: { en: "₦500k - ₦1m", pidgin: "₦500k - ₦1m" },
        commuteTo: { vi: '45m', ikeja: '25m' },
        hotspots: [{ name: 'Ketu Market', category: 'activity' }],
        attributes: {
            rent: ['budget'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public', 'keke'],
            lifestyle: ['nightlife'],
            electricity: ['alternative']
        },
        floodRisk: 'moderate',
        powerAvgHours: 12,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦30k - ₦60k',
        minPrice: 500000,
        maxPrice: 1000000,
        innerLocalities: ['Alapere', 'Ikosi', 'Mile 12', 'Ketu-Ojota'],
        coords: { lat: 6.6022, lng: 3.3912 }
    },
    {
        id: 'lagos_island',
        name: 'Lagos Island',
        description: {
            en: 'The commercial soul of Lagos. Marina and CMS axis.',
            pidgin: 'Lagos center. Marina and business HQ.'
        },
        priceRange: { en: "₦1m - ₦3m", pidgin: "₦1m - ₦3m" },
        commuteTo: { vi: '5m', ikeja: '40m' },
        hotspots: [{ name: 'Marina', category: 'activity' }],
        attributes: {
            rent: ['standard', 'mid'],
            work: ['island'],
            noise: ['noisy'],
            transport: ['public', 'walk', 'keke'],
            lifestyle: ['nightlife'],
            electricity: ['manageable']
        },
        floodRisk: 'high',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦40k - ₦95k',
        minPrice: 1000000,
        maxPrice: 3000000,
        innerLocalities: ['Marina', 'CMS', 'Isale Eko', 'Balogun', 'Idumota'],
        subLocalityInsights: {
            'Marina / Broad Street': {
                en: "The financial soul. 'High-rise banks, historic buildings, and maximum business energy. Empty on weekends but a concrete jungle during the week.'",
                pidgin: "Financial base. 'Office full ground and business energy high well well. Weekend everywhere quiet but Monday to Friday na jungle.'"
            }
        },
        subLocalityDetails: {
            'Marina / Broad Street': {
                placesToVisit: [
                    { name: 'Lagos Cathedral' },
                    { name: 'Broad Street' },
                    { name: 'Marina Waterfront' },
                    { name: 'Freedom Park', url: 'http://freedomparklagos.com/' }
                ],
                whatToEat: [
                    { name: 'Quick business lunches' },
                    { name: 'Street shawarma' },
                    { name: 'Buka joints (Balogun)' }
                ],
                sports: [
                    { name: 'Urban walking', type: 'Other' },
                    { name: 'Gyms (Hotels)', type: 'Gym' },
                    { name: 'Bridge jogging (Eko Bridge)', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.4522, lng: 3.3887 }
    },
    {
        id: 'oshodi',
        name: 'Oshodi',
        description: {
            en: 'The transport interchange king. Maximum energy.',
            pidgin: 'King of waka. Energy full here.'
        },
        priceRange: { en: "₦400k - ₦900k", pidgin: "₦400k - ₦900k" },
        commuteTo: { vi: '35m', ikeja: '15m' },
        hotspots: [{ name: 'Oshodi Transport Interchange', category: 'activity' }],
        attributes: {
            rent: ['budget'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public'],
            lifestyle: ['nightlife'],
            electricity: ['alternative']
        },
        floodRisk: 'low',
        powerAvgHours: 10,
        internetFiber: true,
        securityRating: 2,
        genCostEstimate: '₦20k - ₦50k',
        minPrice: 400000,
        maxPrice: 900000,
        innerLocalities: ['Bolade', 'Mafoluku', 'Shogunle', 'Ajao Estate (Oshodi)'],
        subLocalityInsights: {
            'Bolade': {
                en: "The transit heart. 'The new interchange is massive. Expect crowds but movement is better organized than before. Energy is always 100.'",
                pidgin: "Waka headquarters. 'Interchange set nicely. People plenty but waka better pass before. Energy full ground.'"
            }
        },
        subLocalityDetails: {
            'Bolade': {
                placesToVisit: [
                    { name: 'Oshodi Transport Interchange', url: 'https://www.instagram.com/explore/tags/oshoditransportinterchange/' },
                    { name: 'Isolo Public Library (nearby)', url: 'https://www.instagram.com/explore/tags/isololibrary/' }
                ],
                whatToEat: [
                    { name: 'Fast food stalls', url: 'https://www.instagram.com/explore/tags/lagosstreetfood/' },
                    { name: 'Local amala (Isolo/Oshodi)', url: 'https://www.instagram.com/explore/tags/amala/' }
                ],
                sports: [
                    { name: 'Community football fields', type: 'Football' },
                    { name: 'Local Gyms (Mafoluku)', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.5544, lng: 3.3431 }
    },
    {
        id: 'shomolu',
        name: 'Shomolu',
        description: {
            en: 'Printing capital of Lagos. High energy and central.',
            pidgin: 'Where dem dey print everything. Vibes and waka.'
        },
        priceRange: { en: "₦600k - ₦1.2m", pidgin: "₦600k - ₦1.2m" },
        commuteTo: { vi: '20m', ikeja: '30m' },
        hotspots: [{ name: 'Shomolu Market', category: 'activity' }],
        attributes: {
            rent: ['budget', 'standard'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public', 'keke'],
            lifestyle: ['nightlife'],
            electricity: ['alternative']
        },
        floodRisk: 'moderate',
        powerAvgHours: 10,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦25k - ₦60k',
        minPrice: 600000,
        maxPrice: 1200000,
        innerLocalities: ['Ladilak', 'Morocco', 'Bajulaiye', 'Pedro', 'Onipanu'],
        coords: { lat: 6.5362, lng: 3.3844 }
    },
    {
        id: 'opebi',
        name: 'Opebi',
        description: {
            en: 'Trendy Ikeja area with great dining and nightlife.',
            pidgin: 'Ikeja sharp side. Food and jaiye full here.'
        },
        priceRange: { en: "₦1.5m - ₦4m", pidgin: "₦1.5m - ₦4m" },
        commuteTo: { vi: '45m', ikeja: '5m' },
        hotspots: [{ name: 'Opebi Link Bridge', category: 'activity' }],
        attributes: {
            rent: ['mid', 'premium'],
            work: ['central'],
            noise: ['moderate'],
            transport: ['ride', 'private'],
            lifestyle: ['nightlife'],
            electricity: ['stable']
        },
        floodRisk: 'low',
        powerAvgHours: 18,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦50k - ₦120k',
        minPrice: 1500000,
        maxPrice: 4000000,
        innerLocalities: ['Link Bridge', 'Salvation', 'Seriki Aro', 'Allen Border'],
        coords: { lat: 6.5932, lng: 3.3541 }
    },
    {
        id: 'adeniyi_jones',
        name: 'Adeniyi Jones',
        description: {
            en: 'Classy residential area in Ikeja with good security.',
            pidgin: 'Correct place for Ikeja. Security set and neighbors far apart.'
        },
        priceRange: { en: "₦1.5m - ₦3.5m", pidgin: "₦1.5m - ₦3.5m" },
        commuteTo: { vi: '50m', ikeja: '5m' },
        hotspots: [{ name: 'Sheraton nearby', category: 'hotel' }],
        attributes: {
            rent: ['mid'],
            work: ['central'],
            noise: ['quiet'],
            transport: ['private'],
            lifestyle: ['family'],
            electricity: ['stable']
        },
        floodRisk: 'low',
        powerAvgHours: 16,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦45k - ₦100k',
        minPrice: 1500000,
        maxPrice: 3500000,
        innerLocalities: ['Aromire', 'Ikeja GRA Border', 'Oba Akran Border'],
        coords: { lat: 6.6022, lng: 3.3444 }
    },
    {
        id: 'aguda',
        name: 'Aguda',
        description: {
            en: 'A popular residential pocket of Surulere.',
            pidgin: 'Correct Surulere side. People full here well.'
        },
        priceRange: { en: "₦600k - ₦1.5m", pidgin: "₦600k - ₦1.5m" },
        commuteTo: { vi: '25m', ikeja: '45m' },
        hotspots: [{ name: 'Aguda Market', category: 'activity' }],
        attributes: {
            rent: ['budget', 'standard'],
            work: ['central'],
            noise: ['moderate'],
            transport: ['public', 'walk', 'keke'],
            lifestyle: ['family'],
            electricity: ['manageable']
        },
        floodRisk: 'moderate',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦30k - ₦70k',
        minPrice: 600000,
        maxPrice: 1500000,
        innerLocalities: ['Brown Street', 'Adetola', 'Enitan', 'Pako'],
        coords: { lat: 6.4952, lng: 3.3444 }
    },
    {
        id: 'ajegunle',
        name: 'Ajegunle',
        description: {
            en: 'Famous for its talent and raw energy. Maximum hustle.',
            pidgin: 'Where talent start. Energy full everywhere.'
        },
        priceRange: { en: "₦200k - ₦500k", pidgin: "₦200k - ₦500k" },
        commuteTo: { vi: '40m', ikeja: '1hr' },
        hotspots: [{ name: 'Boundary Market', category: 'activity' }],
        attributes: {
            rent: ['entry'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public', 'keke'],
            lifestyle: ['creative'],
            electricity: ['alternative']
        },
        floodRisk: 'low',
        powerAvgHours: 8,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦20k - ₦45k',
        minPrice: 200000,
        maxPrice: 500000,
        innerLocalities: ['Boundary', 'Tolu', 'Wilmer', 'Apapa Road'],
        subLocalityInsights: {
            'Boundary': {
                en: "The talent factory. 'Origin of many superstars. Rough around the edges but the community spirit is 10/10. Maximum hustle.'",
                pidgin: "Talent base. 'Superstars full ground. Everywhere rough small but neighbors get love. Hustle no dey sleep.'"
            }
        },
        subLocalityDetails: {
            'Boundary': {
                placesToVisit: [
                    { name: 'Boundary Market', url: 'https://www.instagram.com/explore/tags/boundarymarket/' },
                    { name: 'Tolu Complex', url: 'https://www.instagram.com/explore/tags/ajegunle/' }
                ],
                whatToEat: [
                    { name: 'Bole & roasted fish', url: 'https://www.instagram.com/explore/tags/boleandfish/' },
                    { name: 'Street suya (Ajegunle)', url: 'https://www.instagram.com/explore/tags/ajegunlesuya/' },
                    { name: 'Local buka rice & stew', url: 'https://www.instagram.com/explore/tags/buka/' }
                ],
                sports: [
                    { name: 'AJ Street football', type: 'Football' },
                    { name: 'Local boxing gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.4462, lng: 3.3344 }
    },
    {
        id: 'alausa',
        name: 'Alausa',
        description: {
            en: 'The administrative heart. Secure and commercial.',
            pidgin: 'Government side. Security tight and offices plenty.'
        },
        priceRange: { en: "₦1m - ₦3m", pidgin: "₦1m - ₦3m" },
        commuteTo: { vi: '45m', ikeja: '0m' },
        hotspots: [{ name: 'Ikeja City Mall', category: 'activity' }],
        attributes: {
            rent: ['standard', 'mid'],
            work: ['central'],
            noise: ['quiet'],
            transport: ['public', 'private', 'keke'],
            lifestyle: ['family'],
            electricity: ['stable']
        },
        floodRisk: 'low',
        powerAvgHours: 18,
        internetFiber: true,
        securityRating: 5,
        genCostEstimate: '₦50k - ₦120k',
        minPrice: 1000000,
        maxPrice: 3000000,
        innerLocalities: ['Secretariat', 'State House', 'CBD', 'Alausa Gardens'],
        subLocalityInsights: {
            'Secretariat': {
                en: "The administrative powerhouse. 'Very secure and organized. Home to the state government and many corporate offices.'",
                pidgin: "Government base. 'Security set well well. Office full everywhere and system dey work for here.'"
            }
        },
        subLocalityDetails: {
            'Secretariat': {
                placesToVisit: [
                    { name: 'Ikeja City Mall (nearby)' },
                    { name: 'Ndubuisi Kanu Park (nearby)' },
                    { name: 'State Government Secretariat' }
                ],
                whatToEat: [
                    { name: 'The Place (nearby)' },
                    { name: 'Quick service restaurants' },
                    { name: 'Office cafeterias' }
                ],
                sports: [
                    { name: 'Jogging routes', type: 'Other' },
                    { name: 'Staff gyms', type: 'Gym' },
                    { name: 'Ndubuisi Kanu Park Courts (nearby)', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.6162, lng: 3.3544 }
    },
    {
        id: 'bariga',
        name: 'Bariga',
        description: {
            en: 'Lively area near the university. High connectivity.',
            pidgin: 'Everywhere active. Near Unilag so vibes plenty.'
        },
        priceRange: { en: "₦400k - ₦1m", pidgin: "₦400k - ₦1m" },
        commuteTo: { vi: '20m', ikeja: '30m' },
        hotspots: [{ name: 'Bariga Jetty', category: 'activity' }],
        attributes: {
            rent: ['budget'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public'],
            lifestyle: ['nightlife'],
            electricity: ['alternative']
        },
        floodRisk: 'moderate',
        powerAvgHours: 10,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦25k - ₦55k',
        minPrice: 400000,
        maxPrice: 1000000,
        innerLocalities: ['Pedro Border', 'Shomolu Border', 'Unilag Border', 'Bariga Jetty'],
        subLocalityInsights: {
            'Bariga Waterfront': {
                en: "Vibrant and local. 'Strong sense of community near the water. Busy local markets and active street life.'",
                pidgin: "Waterfront energy. 'Neighbours sabi each other well well. Market and street life always set for here.'"
            }
        },
        subLocalityDetails: {
            'Bariga Waterfront': {
                placesToVisit: [
                    { name: 'Bariga Jetty' },
                    { name: 'Nearby Unilag axis' },
                    { name: 'Local markets' }
                ],
                whatToEat: [
                    { name: 'Local seafood' },
                    { name: 'Amala' },
                    { name: 'Street grills' }
                ],
                sports: [
                    { name: 'Community football', type: 'Football' },
                    { name: 'Street walking', type: 'Other' },
                    { name: 'Small gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.5322, lng: 3.3922 },
    },
    {
        id: 'dolphin_estate',
        name: 'Dolphin Estate',
        description: {
            en: 'Classic gated estate in Ikoyi. Secure and central.',
            pidgin: 'Old school Ikoyi estate. Security dey and ground calm.'
        },
        priceRange: { en: "₦3.5m - ₦7m", pidgin: "₦3.5m - ₦7m" },
        commuteTo: { vi: '5m', ikeja: '45m' },
        hotspots: [{ name: 'Dolphin Shops', category: 'activity' }],
        attributes: {
            rent: ['premium'],
            work: ['island'],
            noise: ['quiet'],
            transport: ['private'],
            lifestyle: ['family'],
            electricity: ['stable']
        },
        floodRisk: 'low',
        powerAvgHours: 20,
        internetFiber: true,
        securityRating: 5,
        genCostEstimate: '₦100k - ₦250k',
        minPrice: 3500000,
        maxPrice: 7000000,
        innerLocalities: ['Ikoyi', 'Osborne Border', 'Obalende Border'],
        subLocalityInsights: {
            'Dolphin Estate': {
                en: "The mainland/island bridge. 'Gated community with a classic residential feel. Very close to Obalende and Ikoyi.'",
                pidgin: "Bridge base. 'Estate gate set, everywhere quiet small. Close to Obalende and Ikoyi well well.'"
            }
        },
        subLocalityDetails: {
            'Dolphin Estate': {
                placesToVisit: [
                    { name: 'Dolphin Estate Parks' },
                    { name: 'Nearby Ikoyi axis' },
                    { name: 'Obalende terminal (nearby)' }
                ],
                whatToEat: [
                    { name: 'Estate grills' },
                    { name: 'Catering services food' },
                    { name: 'Nearby Obalende Suya' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Nearby Ikoyi gyms', type: 'Gym' },
                    { name: 'Tennis (nearby)', type: 'Tennis' }
                ]
            }
        },
        coords: { lat: 6.4522, lng: 3.4122 },
    },
    {
        id: 'dopemu',
        name: 'Dopemu',
        description: {
            en: 'Active residential area with good mainland links.',
            pidgin: 'Everywhere waka. Road enter different side for mainland.'
        },
        priceRange: { en: "₦400k - ₦900k", pidgin: "₦400k - ₦900k" },
        commuteTo: { vi: '1hr 15m', ikeja: '20m' },
        hotspots: [{ name: 'Dopemu Market', category: 'activity' }],
        attributes: {
            rent: ['budget'],
            work: ['commute'],
            noise: ['noisy'],
            transport: ['public'],
            lifestyle: ['family'],
            electricity: ['alternative']
        },
        floodRisk: 'low',
        powerAvgHours: 10,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦20k - ₦50k',
        minPrice: 400000,
        maxPrice: 900000,
        innerLocalities: ['Agege Border', 'Akowonjo Border', 'Pleasure', 'Iyana Ipaja Border'],
        subLocalityInsights: {
            'Dopemu Underbridge': {
                en: "Energy hub. 'Always active with local trade and transport. A major junction for commuters between Agege and Egbeda.'",
                pidgin: "Energy base. 'Trade full ground and movement high. Where people dey join motor go Agege or Egbeda.'"
            }
        },
        subLocalityDetails: {
            'Dopemu Underbridge': {
                placesToVisit: [
                    { name: 'Dopemu Market' },
                    { name: 'Nearby Agege axis' },
                    { name: 'Local plazas' }
                ],
                whatToEat: [
                    { name: 'Roadside grills' },
                    { name: 'Buka rice' },
                    { name: 'Agege bread (nearby)' }
                ],
                sports: [
                    { name: 'Community football', type: 'Football' },
                    { name: 'Small gyms', type: 'Gym' },
                    { name: 'Commuter walking', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.6122, lng: 3.3122 },
    },
    {
        id: 'ikeja_gra',
        name: 'Ikeja GRA',
        description: {
            en: 'Premier mainland luxury. Serene and exclusive.',
            pidgin: 'Mainland big boy headquarters. Everywhere quiet and rich.'
        },
        priceRange: { en: "₦5m - ₦12m+", pidgin: "₦5m - ₦12m+" },
        commuteTo: { vi: '45m', ikeja: '0m' },
        hotspots: [{ name: 'Ikeja Golf Club', category: 'activity' }],
        attributes: {
            rent: ['premium', 'luxury'],
            work: ['central'],
            noise: ['quiet'],
            transport: ['private'],
            lifestyle: ['fitness'],
            electricity: ['stable']
        },
        floodRisk: 'low',
        powerAvgHours: 20,
        internetFiber: true,
        securityRating: 5,
        genCostEstimate: '₦120k - ₦350k',
        minPrice: 5000000,
        maxPrice: 20000000,
        innerLocalities: ['Isaac John', 'Joel Ogunnaike', 'Oduduwa', 'Mobolaji Johnson'],
        subLocalityInsights: {
            'Isaac John': {
                en: "The commercial heart of GRA. 'Upscale dining, boutiques, and a very secure atmosphere. Perfect for evening strolls or business lunches.'",
                pidgin: "GRA main street. 'Food point big boy style, shops set, and security tight. E good for evening waka or business meeting.'"
            },
            'Ikeja Golf Club Area': {
                en: "Green and serene. 'Home to the prestigious Ikeja Golf Club. Very quiet, leafy streets, and excellent security. Ideal for those seeking tranquility.'",
                pidgin: "Green ground. 'Golf Club dey here. Everywhere quiet, trees plenty, and security set well well. E good for people wey like calm place.'"
            }
        },
        subLocalityDetails: {
            'Isaac John': {
                placesToVisit: [
                    { name: 'Kalakuta Museum (nearby)', url: 'https://www.instagram.com/kalakutamuseum/' },
                    { name: 'Ikeja Golf Club', url: 'https://ikejagolfclub.com/' },
                    { name: 'Computer Village (nearby)', url: 'https://www.instagram.com/explore/tags/computervillage/' }
                ],
                whatToEat: [
                    { name: 'Yellow Chilli', url: 'https://yellowchilling.com/' },
                    { name: 'The Place (Isaac John)', url: 'https://www.theplace.com.ng/' },
                    { name: 'Orchid House', url: 'https://www.instagram.com/orchidhouse_lagos/' }
                ],
                sports: [
                    { name: 'I-Fitness Ikeja GRA', type: 'Gym', url: 'https://ifitness.ng/' },
                    { name: 'Ikeja Golf Club', type: 'Other', url: 'https://ikejagolfclub.com/' },
                    { name: 'Police College Ground', type: 'Football' }
                ]
            },
            'Ikeja Golf Club Area': {
                placesToVisit: [
                    { name: 'Ikeja Golf Club', url: 'https://ikejagolfclub.com/' },
                    { name: 'Sheraton Lagos (nearby)', url: 'https://www.marriott.com/hotels/travel/lossi-sheraton-lagos-hotel/' },
                    { name: 'Local parks and green spaces' }
                ],
                whatToEat: [
                    { name: 'Golf Club Restaurant' },
                    { name: 'Upscale dining (nearby Sheraton)' },
                    { name: 'Healthy cafes' }
                ],
                sports: [
                    { name: 'Golfing', type: 'Other', url: 'https://ikejagolfclub.com/' },
                    { name: 'Jogging routes', type: 'Other' },
                    { name: 'Private gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.5862, lng: 3.3444 }
    },
    {
        id: 'idimu',
        name: 'Idimu',
        description: {
            en: 'Laid-back Alimosho neighborhood. Good value.',
            pidgin: 'Alimosho jeje side. Value for money dey here.'
        },
        priceRange: { en: "₦350k - ₦800k", pidgin: "₦350k - ₦800k" },
        commuteTo: { vi: '1hr 45m', ikeja: '40m' },
        hotspots: [{ name: 'Idimu Market', category: 'activity' }],
        attributes: {
            rent: ['budget'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public'],
            lifestyle: ['creative'],
            electricity: ['alternative']
        },
        floodRisk: 'moderate',
        powerAvgHours: 8,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦20k - ₦50k',
        minPrice: 400000,
        maxPrice: 800000,
        innerLocalities: ['Egbeda Border', 'Council', 'Pipeline', 'Isheri Olofin'],
        subLocalityInsights: {
            'Idimu Bus Stop Area': {
                en: "Residential core. 'Busy junction with local markets and easy access to Egbeda and Ikotun.'",
                pidgin: "Everywhere bubbling. 'Market full ground and you fit enter Egbeda or Ikotun sharply from here.'"
            }
        },
        subLocalityDetails: {
            'Idimu Bus Stop Area': {
                placesToVisit: [
                    { name: 'Idimu Market' },
                    { name: 'Local plazas' },
                    { name: 'Nearby Egbeda Axis' }
                ],
                whatToEat: [
                    { name: 'Bole' },
                    { name: 'Local buka' },
                    { name: 'Street grills' }
                ],
                sports: [
                    { name: 'Community football', type: 'Football' },
                    { name: 'Small gyms', type: 'Gym' },
                    { name: 'Football viewing', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.5922, lng: 3.2722 },
    },
    {
        id: 'marina',
        name: 'Marina / CMS',
        description: {
            en: 'The financial heart. Skyscrapers and high activity.',
            pidgin: 'Where money dey. Business HQ and Skyscraper full everywhere.'
        },
        priceRange: { en: "₦1.5m - ₦4m", pidgin: "₦1.5m - ₦4m" },
        commuteTo: { vi: '5m', ikeja: '45m' },
        hotspots: [{ name: 'CMS Bookshop', category: 'activity' }],
        attributes: {
            rent: ['budget'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public', 'walk'],
            lifestyle: ['creative', 'nightlife'],
            electricity: ['manageable']
        },
        floodRisk: 'high',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦40k - ₦100k',
        minPrice: 600000,
        maxPrice: 1500000,
        innerLocalities: ['Broad Street', 'Tinubu Square', 'Ebute Ero', 'Lagos Island'],
        coords: { lat: 6.5022, lng: 3.3544 }
    },
    {
        id: 'okota',
        name: 'Okota',
        description: {
            en: 'Balanced residential area with good community vibes.',
            pidgin: 'Area wey balance. Neighbors set and vibes dey.'
        },
        priceRange: { en: "₦700k - ₦1.8m", pidgin: "₦700k - ₦1.8m" },
        commuteTo: { vi: '40m', ikeja: '45m' },
        hotspots: [{ name: 'Okota Roundabout', category: 'activity' }],
        attributes: {
            rent: ['standard', 'mid'],
            work: ['central'],
            noise: ['moderate'],
            transport: ['private', 'public'],
            lifestyle: ['family'],
            electricity: ['manageable']
        },
        floodRisk: 'low',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦30k - ₦75k',
        minPrice: 700000,
        maxPrice: 1800000,
        innerLocalities: ['Ago Palace', 'Cele', 'Itire Border'],
        coords: { lat: 6.5022, lng: 3.3144 }
    },
    {
        id: 'vgc',
        name: 'VGC (Victoria Garden City)',
        description: {
            en: 'Iconic gated city. Organized, secure, and prestigious.',
            pidgin: 'Correct estate. Everywhere organize, security tight die.'
        },
        priceRange: { en: "₦4m - ₦10m+", pidgin: "₦4m - ₦10m+" },
        commuteTo: { vi: '25m', ikeja: '1hr 15m' },
        hotspots: [{ name: 'VGC Club', category: 'activity' }],
        attributes: {
            rent: ['premium', 'luxury'],
            work: ['island'],
            noise: ['quiet'],
            transport: ['private'],
            lifestyle: ['family', 'fitness'],
            electricity: ['stable']
        },
        floodRisk: 'moderate',
        powerAvgHours: 20,
        internetFiber: true,
        securityRating: 5,
        genCostEstimate: '₦120k - ₦300k',
        minPrice: 4000000,
        maxPrice: 15000000,
        innerLocalities: ['Road 1', 'Road 2', 'VGC Club', 'Lekki-Epe Axis'],
        subLocalityInsights: {
            'VGC Club': {
                en: "The Garden City. 'Extremely well-planned with strict estate rules. You can find parks and a very secure environment. The VGC Club is the main social hub.'",
                pidgin: "Estate wey set. 'Everywhere organize and rules tight well well. Parks full ground and security set Enter. VGC Club na where everyone dey relax.'"
            }
        },
        subLocalityDetails: {
            'VGC Club': {
                placesToVisit: [
                    { name: 'VGC Club', url: 'https://www.instagram.com/vgccommunity/' },
                    { name: 'VGC Park', url: 'https://www.instagram.com/vgccommunity/' }
                ],
                whatToEat: [
                    { name: 'VGC Club Restaurant', url: 'https://www.instagram.com/vgccommunity/' },
                    { name: 'Domino’s Pizza (nearby)', url: 'https://www.dominos.ng/' }
                ],
                sports: [
                    { name: 'VGC Club Gym & Tennis', type: 'Other', url: 'https://www.instagram.com/vgccommunity/' }
                ]
            }
        },
        coords: { lat: 6.4622, lng: 3.5444 }
    },
    {
        id: 'agidingbi',
        name: 'Agidingbi',
        description: {
            en: 'Industrial and residential hub in Ikeja. Home to major media houses.',
            pidgin: 'Center of Ikeja. TV station and plenty offices dey here.'
        },
        priceRange: { en: "₦800k - ₦2m", pidgin: "₦800k - ₦2m" },
        commuteTo: { vi: '55m', ikeja: '5m' },
        hotspots: [{ name: 'LTV 8', category: 'activity' }],
        attributes: {
            rent: ['standard'],
            work: ['central'],
            noise: ['moderate'],
            transport: ['public', 'private'],
            lifestyle: ['creative'],
            electricity: ['manageable']
        },
        floodRisk: 'low',
        powerAvgHours: 14,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦35k - ₦80k',
        minPrice: 800000,
        maxPrice: 2000000,
        innerLocalities: ['Lateef Jakande', 'Acme', 'Cadbury Axis', 'Coca-Cola Axis'],
        coords: { lat: 6.6122, lng: 3.3444 }
    },
    {
        id: 'akoka',
        name: 'Akoka',
        description: {
            en: 'The student hub of Lagos. Very lively and youthful.',
            pidgin: 'Students headquarter. Vibes and books full everywhere.'
        },
        priceRange: { en: "₦500k - ₦1.2m", pidgin: "₦500k - ₦1.2m" },
        commuteTo: { vi: '20m', ikeja: '35m' },
        hotspots: [{ name: 'Unilag Gate', category: 'activity' }],
        attributes: {
            rent: ['budget'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public', 'walk'],
            lifestyle: ['creative', 'nightlife'],
            electricity: ['manageable']
        },
        floodRisk: 'moderate',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦30k - ₦70k',
        minPrice: 500000,
        maxPrice: 1200000,
        innerLocalities: ['Unilag', 'Fed. Coll. Education', 'St. Finbarrs', 'University Road', 'Pako'],
        subLocalityInsights: {
            'Unilag': {
                en: "The academic heart. 'Vibrant student life, beautiful lagoon views, and legendary suya spots. Watch out for the monkeys near the zoo!'",
                pidgin: "School headquarters. 'Student vibes full here, Lagoon view set well well. Watch out for those monkeys near zoo, dem sabi thief food!'"
            }
        },
        subLocalityDetails: {
            'Unilag': {
                placesToVisit: [
                    { name: 'Unilag Lagoon Front', url: 'https://unilag.edu.ng' },
                    { name: 'Unilag Zoo', url: 'https://unilag.edu.ng' },
                    { name: 'House 64', url: 'https://www.google.com/search?q=House+64+Akoka' }
                ],
                whatToEat: [
                    { name: 'Soul Food Restaurant', url: 'https://www.instagram.com/soulfoodrestaurantlagos/' },
                    { name: 'Puzzle Restaurant', url: 'https://www.instagram.com/puzzlerestaurantakoka/' },
                    { name: 'Chef Lu (Suya)', url: 'https://www.instagram.com/cheflu_suyaandside/' }
                ],
                sports: [
                    { name: 'Unilag Sports Complex', type: 'Other', url: 'https://unilag.edu.ng' },
                    { name: 'Swimming Pool (Unilag)', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.5122, lng: 3.3944 }
    },
    {
        id: 'computer_village',
        name: 'Computer Village',
        description: {
            en: 'The largest ICT hub in Africa. Extreme hustle and bustle.',
            pidgin: 'ICT center. Hustle and gadget full everywhere. No sleeping.'
        },
        priceRange: { en: "₦1m - ₦3m", pidgin: "₦1m - ₦3m" },
        commuteTo: { vi: '50m', ikeja: '0m' },
        hotspots: [{ name: 'Otigba Street', category: 'activity' }],
        attributes: {
            rent: ['standard', 'mid'],
            work: ['central'],
            noise: ['noisy'],
            transport: ['public', 'walk', 'keke'],
            lifestyle: ['nightlife'],
            electricity: ['manageable']
        },
        floodRisk: 'low',
        powerAvgHours: 16,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦40k - ₦100k',
        minPrice: 1000000,
        maxPrice: 3000000,
        innerLocalities: ['Otigba Street', 'Pepple Street', 'Simbiat Abiola', 'Medical Road', 'Oremeji'],
        subLocalityInsights: {
            'Otigba Street': {
                en: "The ICT heartbeat. 'Gadgets, repairs, and extreme hustle. Best place for tech deals but keep your wits about you.'",
                pidgin: "Tech headquarters. 'Gadget and repair full here. Price set die but use your eye waka, no let dem play you.'"
            }
        },
        subLocalityDetails: {
            'Otigba Street': {
                placesToVisit: [
                    { name: 'Slot Flagship Store', url: 'https://slot.ng' },
                    { name: 'Pointek', url: 'https://pointekonline.com' }
                ],
                whatToEat: [
                    { name: 'The Place (Ikeja)', url: 'https://www.theplace.com.ng/' },
                    { name: 'Street Small Chops', url: 'https://www.instagram.com/explore/tags/lagosstreetfood/' }
                ],
                sports: [
                    { name: 'Local Gyms (Onigbongbo nearby)', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.5922, lng: 3.3344 }
    },
    {
        id: 'idumota',
        name: 'Idumota / Market',
        description: {
            en: 'Historic commercial center on Lagos Island. Maximum activity.',
            pidgin: 'Market center for Island. Business full gidigba.'
        },
        priceRange: { en: "₦800k - ₦2m", pidgin: "₦800k - ₦2m" },
        commuteTo: { vi: '10m', ikeja: '45m' },
        hotspots: [{ name: 'Idumota Market', category: 'activity' }],
        attributes: {
            rent: ['standard'],
            work: ['island'],
            noise: ['noisy'],
            transport: ['public', 'walk', 'keke'],
            lifestyle: ['nightlife'],
            electricity: ['alternative']
        },
        floodRisk: 'high',
        powerAvgHours: 10,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦35k - ₦90k',
        minPrice: 800000,
        maxPrice: 2000000,
        innerLocalities: ['Balogun', 'Tom Jones', 'Nnamdi Azikiwe', 'CMS', 'Marina'],
        subLocalityInsights: {
            'Balogun': {
                en: "The fashion capital. 'The best fabrics and ready-to-wear pieces. It's a maze, so use a guide if it's your first time.'",
                pidgin: "Cloth headquarters. 'Correct material and ready-made full here. The place be like maze, follow person wey sabi road.'"
            }
        },
        subLocalityDetails: {
            'Balogun': {
                placesToVisit: [
                    { name: 'Freedom Park (nearby)', url: 'http://freedomparklagos.com/' },
                    { name: 'Lagos Cathedral', url: 'https://www.instagram.com/explore/tags/lagoscathedral/' }
                ],
                whatToEat: [
                    { name: 'Island Buka Joints', url: 'https://www.instagram.com/explore/tags/buka/' },
                    { name: 'Marina Side Grills', url: 'https://www.instagram.com/explore/tags/lagosgrill/' }
                ],
                sports: [
                    { name: 'Onikan Stadium (nearby)', type: 'Football' }
                ]
            }
        },
        coords: { lat: 6.4522, lng: 3.3887 }
    },
    {
        id: 'iju_ishaga',
        name: 'Iju Ishaga',
        description: {
            en: 'Deep mainland residential area. Quiet and very affordable.',
            pidgin: 'Mainland inside. Everywhere calm and house cheap.'
        },
        priceRange: { en: "₦300k - ₦700k", pidgin: "₦300k - ₦700k" },
        commuteTo: { vi: '2hrs', ikeja: '35m' },
        hotspots: [{ name: 'Iju Waterworks', category: 'activity' }],
        attributes: {
            rent: ['budget'],
            work: ['commute'],
            noise: ['quiet'],
            transport: ['public', 'keke'],
            lifestyle: ['family'],
            electricity: ['alternative']
        },
        floodRisk: 'low',
        powerAvgHours: 8,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦20k - ₦45k',
        minPrice: 300000,
        maxPrice: 700000,
        innerLocalities: ['Iju Station', 'Ishaga', 'Fagba', 'Agege Border', 'Obawole'],
        subLocalityInsights: {
            'Fagba': {
                en: "Growth zone. 'Lively residential and commercial junction connecting various mainland suburbs.'",
                pidgin: "Everywhere bubbling. 'Junction set well well, office and house full here and close to Agege/Ogba.'"
            }
        },
        subLocalityDetails: {
            'Fagba': {
                placesToVisit: [
                    { name: 'Iju Waterworks', url: 'https://www.google.com/search?q=Iju+Waterworks+Lagos' },
                    { name: 'Fagba Shopping Plazas', url: 'https://www.google.com/search?q=shopping+in+Fagba' },
                    { name: 'Nearby Ogba axis' }
                ],
                whatToEat: [
                    { name: 'Domino’s Pizza Iju', url: 'https://www.dominos.ng/' },
                    { name: 'Local Amala Joints', url: 'https://www.instagram.com/explore/tags/amala/' },
                    { name: 'Street grills' }
                ],
                sports: [
                    { name: 'Iju Youth Sports Centre', type: 'Other' },
                    { name: 'Community Gyms', type: 'Gym' },
                    { name: 'Community football', type: 'Football' }
                ]
            }
        },
        coords: { lat: 6.6622, lng: 3.3244 },
    },
    {
        id: 'jibowu',
        name: 'Jibowu',
        description: {
            en: 'The transport gateway of the mainland. Very central and active.',
            pidgin: 'Waka headquarters for mainland. E central and movement clear.'
        },
        priceRange: { en: "₦800k - ₦2m", pidgin: "₦800k - ₦2m" },
        commuteTo: { vi: '20m', ikeja: '25m' },
        hotspots: [{ name: 'Transport Hub', category: 'activity' }],
        attributes: {
            rent: ['standard', 'mid'],
            work: ['central'],
            noise: ['noisy', 'moderate'],
            transport: ['public', 'ride', 'keke'],
            lifestyle: ['nightlife', 'family'],
            electricity: ['manageable']
        },
        floodRisk: 'moderate',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 3,
        genCostEstimate: '₦35k - ₦75k',
        minPrice: 800000,
        maxPrice: 2000000,
        innerLocalities: ['Yaba Border', 'Shomolu Border', 'Ikorodu Road Axis'],
        subLocalityInsights: {
            'Jibowu Bus Park': {
                en: "Connectivity king. 'Strategically located hub for luxury buses and mainland commuters.'",
                pidgin: "Travel headquarters. 'If you wan travel long distance, na here. Central well well for mainland.'"
            }
        },
        subLocalityDetails: {
            'Jibowu Bus Park': {
                placesToVisit: [
                    { name: 'Luxury bus terminals' },
                    { name: 'Nearby Yaba/Akoka axis' },
                    { name: 'E-Center (nearby)' },
                    { name: 'Jibowu Gardens', url: 'https://www.google.com/search?q=Jibowu+Gardens+Lagos' }
                ],
                whatToEat: [
                    { name: 'Finicky Restaurant', url: 'https://www.instagram.com/finickyworld/' },
                    { name: 'Pancake Hub', url: 'https://www.instagram.com/explore/tags/pancakehub/' },
                    { name: 'Street grills' }
                ],
                sports: [
                    { name: 'Walking routes', type: 'Other' },
                    { name: 'Fitness centers', type: 'Gym' },
                    { name: 'Yabatech Field (nearby)', type: 'Football' }
                ]
            }
        },
        coords: { lat: 6.5222, lng: 3.3744 },
    },
    {
        id: 'meiran',
        name: 'Meiran',
        description: {
            en: 'Quiet residential Alimosho suburb. Growing community.',
            pidgin: 'Alimosho quiet side. Everywhere dey grow sharply.'
        },
        priceRange: { en: "₦250k - ₦600k", pidgin: "₦250k - ₦600k" },
        commuteTo: { vi: '2hrs+', ikeja: '45m' },
        hotspots: [{ name: 'Meiran Market', category: 'activity' }],
        attributes: {
            rent: ['entry', 'budget'],
            work: ['commute'],
            noise: ['quiet'],
            transport: ['public', 'keke'],
            lifestyle: ['family'],
            electricity: ['alternative']
        },
        floodRisk: 'low',
        powerAvgHours: 8,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦20k - ₦40k',
        minPrice: 250000,
        maxPrice: 600000,
        innerLocalities: ['Command Border', 'Abule Egba Border', 'Meiran Road', 'Lagos-Abeokuta Axis'],
        subLocalityInsights: {
            'Meiran Road': {
                en: "Residential expansion. 'Growing community with many new estates. It's a bit of a distance but the peace and affordable land draw many here.'",
                pidgin: "Area wey dey blow. 'New estate full ground. Island far small but everywhere calm and house cheap.'"
            }
        },
        subLocalityDetails: {
            'Meiran Road': {
                placesToVisit: [
                    { name: 'Meiran Market', url: 'https://www.google.com/search?q=Meiran+Market' },
                    { name: 'Retail plazas' },
                    { name: 'Nearby Alimosho axis' }
                ],
                whatToEat: [
                    { name: 'Local Buka Food', url: 'https://www.instagram.com/explore/tags/buka/' },
                    { name: 'Street grills' },
                    { name: 'Bole' }
                ],
                sports: [
                    { name: 'Community Football', type: 'Football' },
                    { name: 'Small gyms', type: 'Gym' },
                    { name: 'Estate jogging', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.6622, lng: 3.2644 },
    },
    {
        id: 'palmgrove',
        name: 'Palmgrove',
        description: {
            en: 'Peaceful and very accessible mainland estate and neighborhood.',
            pidgin: 'Jeje estate for mainland. Road set well well.'
        },
        priceRange: { en: "₦1.2m - ₦3m", pidgin: "₦1.2m - ₦3m" },
        commuteTo: { vi: '20m', ikeja: '25m' },
        hotspots: [{ name: 'Palmgrove Estate', category: 'activity' }],
        attributes: {
            rent: ['standard', 'mid'],
            work: ['central'],
            noise: ['quiet'],
            transport: ['public', 'private', 'keke'],
            lifestyle: ['family'],
            electricity: ['manageable']
        },
        floodRisk: 'low',
        powerAvgHours: 14,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦40k - ₦90k',
        minPrice: 1200000,
        maxPrice: 3000000,
        innerLocalities: ['Estate', 'Shomolu Border', 'Onipanu Border', "D'Alberto"],
        subLocalityInsights: {
            'Estate': {
                en: "The peace hub. 'Known for its calmness in the middle of a busy mainland. Well-connected to the 3rd Mainland Bridge.'",
                pidgin: "Jeje ground. 'Everywhere calm for inside mainland. You fit enter 3rd Mainland Bridge sharply from here.'"
            }
        },
        subLocalityDetails: {
            'Estate': {
                placesToVisit: [
                    { name: 'Palmgrove Estate', url: 'https://www.google.com/maps/search/Palmgrove+Estate+Lagos/' }
                ],
                whatToEat: [
                    { name: 'Calabar Palatables', url: 'https://www.google.com/search?q=Calabar+Palatables+Palmgrove' },
                    { name: 'Chicken Republic Palmgrove', url: 'https://www.chicken-republic.com/' }
                ],
                sports: [
                    { name: 'Estate Gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.5422, lng: 3.3744 }
    },
    {
        id: 'satellite_town',
        name: 'Satellite Town',
        description: {
            en: 'Long-standing residential community near Festac.',
            pidgin: 'Old school ground near Festac. Correct residential vibe.'
        },
        priceRange: { en: "₦500k - ₦1.2m", pidgin: "₦500k - ₦1.2m" },
        commuteTo: { vi: '1hr', ikeja: '1hr' },
        hotspots: [{ name: 'Satellite Market', category: 'activity' }],
        attributes: {
            rent: ['budget', 'standard'],
            work: ['commute'],
            noise: ['moderate'],
            transport: ['public', 'keke'],
            lifestyle: ['family'],
            electricity: ['alternative']
        },
        floodRisk: 'moderate',
        powerAvgHours: 10,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦25k - ₦55k',
        minPrice: 500000,
        maxPrice: 1200000,
        innerLocalities: ['Navy Town', 'Festac Border', 'Abule Ado', 'Ijegun Border'],
        subLocalityInsights: {
            'Navy Town': {
                en: "Secure & Disciplined. 'One of the safest parts of Satellite Town due to the naval presence. Good roads and very organized.'",
                pidgin: "Security base. 'Navy people full here so everywhere safe and organize. Road set and discipline dey ground.'"
            }
        },
        subLocalityDetails: {
            'Navy Town': {
                placesToVisit: [
                    { name: 'Trade Fair Complex', url: 'https://www.google.com/search?q=Lagos+International+Trade+Fair+Complex' },
                    { name: 'Festac Mall (nearby)', url: 'https://www.festivalmall.com.ng/' }
                ],
                whatToEat: [
                    { name: 'Grills and Chops', url: 'https://www.google.com/search?q=Grills+and+Chops+Satellite+Town' },
                    { name: 'Satellite Kitchen', url: 'https://www.google.com/search?q=Satellite+Kitchen+Lagos' }
                ],
                sports: [
                    { name: 'Navy Ground Sports', type: 'Other' },
                    { name: 'Local Gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.4422, lng: 3.2644 }
    },
    {
        id: 'ojo',
        name: 'Ojo',
        description: {
            en: 'Major commercial hub home to the biggest electronics market in Africa.',
            pidgin: 'Market headquarter. Everything electronics and LASU vibes.'
        },
        priceRange: { en: "₦300k - ₦700k", pidgin: "₦300k - ₦700k" },
        commuteTo: { vi: '1hr 15m', ikeja: '1hr' },
        hotspots: [{ name: 'Alaba International', category: 'activity' }, { name: 'LASU', category: 'activity' }],
        attributes: {
            rent: ['budget'],
            work: ['commute'],
            noise: ['noisy'],
            transport: ['public', 'keke'],
            lifestyle: ['family'],
            electricity: ['alternative']
        },
        floodRisk: 'moderate',
        powerAvgHours: 10,
        internetFiber: false,
        securityRating: 3,
        genCostEstimate: '₦20k - ₦50k',
        minPrice: 300000,
        maxPrice: 700000,
        innerLocalities: ['Alaba', 'LASU Axis', 'PPL', 'Okokomaiko'],
        subLocalityDetails: {
            'Alaba': {
                placesToVisit: [
                    { name: 'Alaba International Market', url: 'https://www.instagram.com/explore/tags/alabainternationalmarket/' },
                    { name: 'LASU Campus', url: 'https://lasu.edu.ng' }
                ],
                whatToEat: [
                    { name: 'Alaba street food', url: 'https://www.instagram.com/explore/tags/lagosstreetfood/' },
                    { name: 'LASU Buka joints', url: 'https://www.instagram.com/explore/tags/buka/' }
                ],
                sports: [
                    { name: 'LASU Sports Center', type: 'Other', url: 'https://lasu.edu.ng' },
                    { name: 'Local community gyms', type: 'Gym' }
                ]
            }
        },
        coords: { lat: 6.4562, lng: 3.1844 }
    },
    {
        id: 'epe',
        name: 'Epe',
        description: {
            en: 'Coastal town famous for its fish market and serene environment.',
            pidgin: 'Fish headquarters. Ground cool and fresh air full everywhere.'
        },
        priceRange: { en: "₦200k - ₦600k", pidgin: "₦200k - ₦600k" },
        commuteTo: { vi: '1hr 30m', ikeja: '2hrs' },
        hotspots: [{ name: 'Epe Fish Market', category: 'activity' }, { name: 'Alaro City', category: 'activity' }],
        attributes: {
            rent: ['entry', 'budget'],
            work: ['commute'],
            noise: ['quiet'],
            transport: ['private', 'public'],
            lifestyle: ['family', 'creative'],
            electricity: ['alternative']
        },
        floodRisk: 'low',
        powerAvgHours: 12,
        internetFiber: true,
        securityRating: 4,
        genCostEstimate: '₦20k - ₦45k',
        minPrice: 200000,
        maxPrice: 600000,
        innerLocalities: ['T-Junction', 'Alaro City', 'Epe Resort Axis', 'Fish Market'],
        subLocalityDetails: {
            'Fish Market': {
                placesToVisit: [
                    { name: 'Epe Fish Market', url: 'https://www.instagram.com/explore/tags/epefishmarket/' },
                    { name: 'Epe Resort', url: 'https://eperesort.com/' },
                    { name: 'Alaro City', url: 'https://www.alarocity.com/' }
                ],
                whatToEat: [
                    { name: 'Fresh fish pepper soup', url: 'https://www.instagram.com/explore/tags/peppersoup/' },
                    { name: 'Seafood platter (Epe style)', url: 'https://www.instagram.com/explore/tags/seafood/' }
                ],
                sports: [
                    { name: 'Epe Recreation Center', type: 'Other' },
                    { name: 'Water activities', type: 'Other' }
                ]
            }
        },
        coords: { lat: 6.5842, lng: 3.9844 }
    }
];
