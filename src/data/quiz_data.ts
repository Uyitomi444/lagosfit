import type { Area, Question } from '../types';

export const QUESTIONS: Question[] = [
    {
        id: 'rent',
        text: {
            en: "What's your yearly rent budget?",
            pidgin: "How much be your rent budget per year?",
            yo: "Kini iye owo iyalo ile rẹ fun ọdun kan?",
            ig: "Ego ole ka ị nwere ike iwepụta maka ụlọ n'otu afọ?",
            ha: "Nawa ne kasafin kuɗin hayar gidan ku na shekara?"
        },
        options: [
            { id: 'r1', label: { en: '₦200k – ₦500k', pidgin: '₦200k – ₦500k', yo: '₦200k – ₦500k', ig: '₦200k – ₦500k', ha: '₦200k – ₦500k' }, value: 'entry' },
            { id: 'r2', label: { en: '₦500k – ₦1m', pidgin: '₦500k – ₦1m', yo: '₦500k – ₦1m', ig: '₦500k – ₦1m', ha: '₦500k – ₦1m' }, value: 'budget' },
            { id: 'r3', label: { en: '₦1m – ₦2m', pidgin: '₦1m – ₦2m', yo: '₦1m – ₦2m', ig: '₦1m – ₦2m', ha: '₦1m – ₦2m' }, value: 'standard' },
            { id: 'r4', label: { en: '₦2m – ₦5m', pidgin: '₦2m – ₦5m', yo: '₦2m – ₦5m', ig: '₦2m – ₦5m', ha: '₦2m – ₦5m' }, value: 'mid' },
            { id: 'r5', label: { en: '₦5m – ₦7m', pidgin: '₦5m – ₦7m', yo: '₦5m – ₦7m', ig: '₦5m – ₦7m', ha: '₦5m – ₦7m' }, value: 'upper_mid' },
            { id: 'r6', label: { en: '₦7m – ₦10m', pidgin: '₦7m – ₦10m', yo: '₦7m – ₦10m', ig: '₦7m – ₦10m', ha: '₦7m – ₦10m' }, value: 'premium' },
            { id: 'r7', label: { en: '₦10m+', pidgin: '₦10m+', yo: '₦10m+', ig: '₦10m+', ha: '₦10m+' }, value: 'luxury' },
        ],
        multiSelect: false,
    },
    {
        id: 'work',
        text: {
            en: "Where is your workplace / preference?",
            pidgin: "Where your office dey or where you wan dey go?",
            yo: "Nibo ni aaye iṣẹ rẹ tabi ibi ti o fẹ wa?",
            ig: "Kedu ebe ebe ọrụ gị dị ma ọ bụ ebe kacha masị gị?",
            ha: "Ina ne wurin aikin ku ko inda kuka fi so?"
        },
        options: [
            { id: 'w1', label: { en: 'I need something CENTRAL (Mainland)', pidgin: 'I wan dey CENTRAL (Mainland)', yo: 'Mo fẹ ibikan ni ÀRÍN (Mainland)', ig: 'Achọrọ m ihe dị n’etiti (Mainland)', ha: 'Ina buƙatar wani guri a tsakiya (Mainland)' }, value: 'central' },
            { id: 'w2', label: { en: 'I don’t mind long commutes', pidgin: 'Distance no be wahala', yo: 'Irìn-àjò jina kò jẹ nǹkan kan sí mi', ig: 'Ije dị anya anaghị enye m nsogbu', ha: 'Ba zan damu da doguwar tafiya ba' }, value: 'commute' },
            { id: 'w3', label: { en: 'I want something close to the Island', pidgin: 'I wan dey close to Island', yo: 'Mo fẹ ibikan ti o sunmọ Island', ig: 'Achọrọ m ebe dị nso na Island', ha: 'Ina son guri kusa da Island' }, value: 'island' },
        ],
        multiSelect: false,
    },
    {
        id: 'workLocation',
        text: {
            en: "Where exactly do you work? (To find closest matches)",
            pidgin: "Where exactly you dey work? (Make we find area wey close)",
            yo: "Nibo gan ni o ti n ṣiṣẹ? (Lati wa awọn to sunmọ jù)",
            ig: "Kedu ebe kpọmkwem ka ị na-arụ ọrụ? (Iji chọta mpaghara kacha nso)",
            ha: "Ina ne daidai kake aiki? (Don nemo yankunan da suka fi kusa)"
        },
        options: [
            { id: 'wl1', label: { en: 'Victoria Island / Ikoyi', pidgin: 'V.I / Ikoyi side', yo: 'Victoria Island / Ikoyi', ig: 'Victoria Island / Ikoyi', ha: 'Victoria Island / Ikoyi' }, value: 'vi' },
            { id: 'wl2', label: { en: 'Lekki Phase 1 / 2', pidgin: 'Lekki Phase 1 / 2', yo: 'Lekki Phase 1 / 2', ig: 'Lekki Phase 1 / 2', ha: 'Lekki Phase 1 / 2' }, value: 'lekki' },
            { id: 'wl3', label: { en: 'Ikeja / Maryland', pidgin: 'Ikeja / Maryland', yo: 'Ikeja / Maryland', ig: 'Ikeja / Maryland', ha: 'Ikeja / Maryland' }, value: 'ikeja' },
            { id: 'wl4', label: { en: 'Yaba / Surulere', pidgin: 'Yaba / Surulere side', yo: 'Yaba / Surulere', ig: 'Yaba / Surulere', ha: 'Yaba / Surulere' }, value: 'yaba' },
            { id: 'wl5', label: { en: 'Apapa / Ajah / Other', pidgin: 'Apapa / Ajah / Other', yo: 'Apapa / Ajah / Omiran', ig: 'Apapa / Ajah / Ndị ọzọ', ha: 'Apapa / Ajah / Wasu' }, value: 'other' },
            { id: 'wl6', label: { en: 'I work remotely (Home)', pidgin: 'I dey work from house', yo: 'Mo n ṣiṣẹ lati ile', ig: 'Anara m arụ ọrụ n’ụlọ', ha: 'Ina aiki ne daga gida' }, value: 'remote' },
        ],
        multiSelect: false,
    },
    {
        id: 'noise',
        text: {
            en: "How much noise can you tolerate?",
            pidgin: "Shey you like noise or you prefer jeje life?",
            yo: "Elo ni ariwo ti o le gba?",
            ig: "Kedu ka ị ga-esi anagide mkpọtụ?",
            ha: "Yaya yawan surutu za ku iya jurewa?"
        },
        options: [
            { id: 'n1', label: { en: 'Very quiet preferred', pidgin: 'I like everywhere koma (Very Quiet)', yo: 'Mo fẹ ibi ti o dake rọrọ', ig: 'Achọrọ m ebe nọ jụụ', ha: 'Na fi son guri mai shuru' }, value: 'quiet' },
            { id: 'n2', label: { en: 'Moderately quiet', pidgin: 'Small noise no bad', yo: 'Ibi ti ariwo rẹ ko pọ jù', ig: 'Ebe mkpọtụ ya na-adịghị ukwuu', ha: 'Guri mai matsakaicin surutu' }, value: 'moderate' },
            { id: 'n3', label: { en: 'I don’t mind noise (Bring the hustle)', pidgin: 'Noise no dey move me (Bring the hustle)', yo: 'Ariwo ko jẹ nǹkan kan sí mi', ig: 'Mkpọtụ anaghị enye m nsogbu', ha: 'Ban damu da surutu ba' }, value: 'noisy' },
        ],
        multiSelect: false,
    },
    {
        id: 'transport',
        text: {
            en: "What's your preferred mode of transport?",
            pidgin: "How you dey like move around?",
            yo: "Ọna gbigbe wo ni o fẹran jù?",
            ig: "Kedu ụdị ụgbọ njem kacha amasị gị?",
            ha: "Wane irin sufuri kuka fi so?"
        },
        options: [
            { id: 't1', label: { en: 'BRT / Danfo friendly', pidgin: 'BRT / Danfo dey okay', yo: 'BRT / Danfo ODA', ig: 'Ụgbọ BRT / Danfo dị mma', ha: 'BRT / Danfo ya yi' }, value: 'public' },
            { id: 't2', label: { en: 'Ride-hailing (Uber/Bolt)', pidgin: 'Na Uber/Bolt I dey use', yo: 'Uber tabi Bolt', ig: 'Uber ma ọ bụ Bolt', ha: 'Uber ko Bolt' }, value: 'ride' },
            { id: 't3', label: { en: 'Walking-friendly area', pidgin: 'Area wey person fit trek', yo: 'Ibi ti eniyan le rin nilẹ', ig: 'Ebe mmadụ nwere ike ịgba ụkwụ', ha: 'Guri mai sauƙin tafiya a ƙasa' }, value: 'walk' },
            { id: 't4', label: { en: 'I drive myself (Private Car)', pidgin: 'I get my own motor', yo: 'Mo n wa ọkọ ayọkẹlẹ ti ara mi', ig: 'M na-anya ụgbọala nke m', ha: 'Ina tuka kaina (mota ta)' }, value: 'private' },
            { id: 't5', label: { en: '3-Wheeler (Keke)', pidgin: 'Maruwa/Keke', yo: 'Keke Napep', ig: 'Keke Napep', ha: 'Keke Napep' }, value: 'keke' },
        ],
        multiSelect: false,
    },
    {
        id: 'lifestyle',
        text: {
            en: "What's your ideal weekend vibe?",
            pidgin: "Wetin be your pattern for weekend?",
            yo: "Kini igbadun ipari ọsẹ rẹ?",
            ig: "Kedu ka ị ga-achọ ka ngwụcha izu gị dị?",
            ha: "Yaya kuke son yanayin karshen mako ya kasance?"
        },
        options: [
            { id: 'l1', label: { en: 'Nightlife & Parties', pidgin: 'Jaiye & Faaji', yo: 'Igbagbe oru ati ayẹyẹ', ig: 'Ndụ abalị na mmemme', ha: 'Rayuwar dare da bukukuwa' }, value: 'nightlife' },
            { id: 'l2', label: { en: 'Family & Relaxation', pidgin: 'Family time / Jeje relax', yo: 'Ẹbi ati isinmi', ig: 'Ezinụlọ na izu ike', ha: 'Iyali da hutu' }, value: 'family' },
            { id: 'l3', label: { en: 'Creative & Artsy', pidgin: 'Arts & Shows', yo: 'Ìmúdàgbàsókè ati aworan', ig: 'Ihe okike na nka', ha: 'Ƙirƙira da fasaha' }, value: 'creative' },
            { id: 'l4', label: { en: 'Fitness & Outdoors', pidgin: 'Gym & Waka', yo: 'Idaraya ati ita gbangba', ig: 'Osimiri na mmega ahụ', ha: 'Motsa jiki da shakatawa' }, value: 'fitness' },
        ],
        multiSelect: false,
    },
    {
        id: 'electricity',
        text: {
            en: "How critical is 24/7 power?",
            pidgin: "Shey light situation must berekete?",
            yo: "Bawo ni ina ina ti ko kú ṣe ṣe pataki tó?",
            ig: "Kedu ka inye ọkụ eletrik awa 24 siri dị gị mkpa?",
            ha: "Yaya mahimmancin wutar lantarki ta sa'o'i 24 take a gare ku?"
        },
        options: [
            { id: 'e1', label: { en: 'Must be stable (20hrs+)', pidgin: 'E gats stable (20hrs+)', yo: 'O gbọdọ duro digbi (wakati 20+)', ig: 'Ọ ga-adị mma n’ezie (awa iri abụọ+)', ha: 'Dole ne ya kasance tabbatacce (sa\'o\'i 20+)' }, value: 'stable' },
            { id: 'e2', label: { en: 'Average is fine (12-18hrs)', pidgin: 'Average dey okay (12-18hrs)', yo: 'Iwọntunwọnsi ODA (wakati 12-18)', ig: 'Nkịtị dị mma (awa 12-18)', ha: 'Matsakaici ya yi (sa\'o\'i 12-18)' }, value: 'manageable' },
            { id: 'e3', label: { en: 'I have backup / Don’t mind', pidgin: 'I get gen/solar / No wahala', yo: 'Mo ni ina miiran / Ko jẹ nǹkan kan sí mi', ig: 'Enwere m ihe ọzọ m na-eji / Ọ dị mma', ha: 'Ina da wani madadin / Ban damu ba' }, value: 'alternative' },
        ],
        multiSelect: false,
    },
];

export const AREAS: Area[] = [
    {
        id: 'abule_egba',
        name: 'Abule Egba',
        description: {
            en: 'Affordable, bustling, and great matching for those who don’t mind a commute.',
            pidgin: 'E cheap, e dey hustle, and e make sense if you no mind waka small.',
            yo: 'Olowo poku, o n lọ soke, ati pe o dara fun awọn ti ko lokan lati rin irìn-àjò.',
            ig: 'Ọnụ ego ya dị mma, ọ na-ekwo ekwo, ma dabara ndị na-anaghị enye nsogbu n’ije njem.',
            ha: 'Mai sauƙi, mai cike da hada-hada, kuma ya dace da waɗanda ba su damu da tafiya ba.'
        },
        priceRange: {
            en: "₦300k - ₦600k (Miniflat)",
            pidgin: "₦300k - ₦600k (Room & Parlour)",
            yo: "₦300k - ₦600k (Iyara kan ati palọ)",
            ig: "₦300k - ₦600k (Nke nta)",
            ha: "₦300k - ₦600k (Miniflat)"
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
                pidgin: "Waka headquarters. 'Everywhere active. Vibes set, and puff-puff for here na fire.'",
                yo: "Okan gbigbe ọkọ. 'Gbogbo nǹkan ni o n kọja nihin-in. O n lọ soke, agbara wa nbẹ, ati puff-puff to dara julọ wa nibi.'",
                ig: "Isi mmalite njem. 'Ihe niile na-esi ebe a agba. Ọ na-ekwo ekwo, ike dị na ya, na puff-puff kacha mma dị ebe a.'",
                ha: "Zuciyar sufuri. 'Komai yana wucewa ta nan. Akwai hada-hada, kuzari, da mafi kyawun puff-puff a wannan yankin.'"
            },
            'Ekoro Road': {
                en: "The residential artery. 'Connecting major parts of Abule Egba. Busy markets and a gateway to Alimosho.'",
                pidgin: "Area road wey set. 'E link many places for Abule Egba. Market full ground and e connect Alimosho well.'",
                yo: "Ona ibugbe pataki. 'O n so awọn apakan pataki ti Abule Egba pọ. Awọn ọja ti o kun fun eniyan ati ọna abawọle si Alimosho.'",
                ig: "Ụzọ obibi kacha mkpa. 'Ọ na-ejikọta akụkụ dị mkpa nke Abule Egba. Ahịa na-ekwo ekwo na ụzọ mbata na Alimosho.'",
                ha: "Hanyar zama ta musamman. 'Tana haɗa muhimman sassa na Abule Egba. Kasuwanni masu cike da mutane da kofa zuwa Alimosho.'"
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
            },
            'Meiran': {
                placesToVisit: [
                    { name: 'Lagos State University (nearby axis)', url: 'https://lasu.edu.ng/' },
                    { name: 'Meiran Road market' }
                ],
                whatToEat: [
                    { name: 'Local student canteens' },
                    { name: 'Evening grills' }
                ],
                sports: [
                    { name: 'Community ball', type: 'Football' },
                    { name: 'Road running', type: 'Other' }
                ]
            },
            'Command': {
                placesToVisit: [
                    { name: 'Army Command Road axis' },
                    { name: 'IPAJ-Command Gate' }
                ],
                whatToEat: [
                    { name: 'Barracks-style canteens' },
                    { name: 'Suya spots' }
                ],
                sports: [
                    { name: 'Command field workouts', type: 'Other' }
                ]
            },
            'Ekoro': {
                placesToVisit: [
                    { name: 'Ekoro Junction' },
                    { name: 'Local commercial shops' }
                ],
                whatToEat: [
                    { name: 'Street buka & snacks' }
                ],
                sports: [
                    { name: 'Community football', type: 'Football' }
                ]
            },
            'Pipeline': {
                placesToVisit: [
                    { name: 'Pipeline residential stretch' },
                    { name: 'Estate gate views' }
                ],
                whatToEat: [
                    { name: 'Neighborhood food kiosks' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' }
                ]
            },
        },
        coords: { lat: 6.6433, lng: 3.2923 },
    },
    {
        id: 'egbeda',
        name: 'Egbeda',
        description: {
            en: 'A balanced mainland area with good access and reasonable rent.',
            pidgin: 'Mainland area wey balance well, road good and rent no too tear pocket.',
            yo: 'Agbegbe mainland ti o lẹtọ pẹlu iraye si to dara ati iyalo ile ti o tọ.',
            ig: 'Ebe mainland dị mma nwere ụzọ dị mma na ụgwọ ụlọ ruru ebe ọ nọ.',
            ha: 'Yankin babban gari mai daidaito tare da kyawun hanya da hayar gida mai ma\'ana.'
        },
        priceRange: {
            en: "₦500k - ₦900k (2 Bedroom)",
            pidgin: "₦500k - ₦900k (2 Bedroom)",
            yo: "₦500k - ₦900k (Iyara meji)",
            ig: "₦500k - ₦900k (Ime ụlọ abụọ)",
            ha: "₦500k - ₦900k (Daki 2)"
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
                pidgin: "Business base. 'Anything you want dey here. Market no dey sleep and price set nicely.'",
                yo: "Àárín ọjà. 'O le wa ohunkohun nihin-in. O n ṣiṣẹ ni wakati 24/7 ati pe o ni idiyele ti o rọrun.'",
                ig: "Isi ahịa. 'Ị nwere ike ịhụ ihe ọ bụla ebe a. Ọ na-arụ ọrụ awa 24 ma ọnụ ego ya dị mma.'",
                ha: "Cibiyar kasuwanci. 'Kuna iya samun komai a nan. Ana hada-hada sa'o'i 24 kuma farashin ya yi daidai.'"
            },
            'Egbeda-Idimu Road': {
                en: "The main connector. 'Activity hubs and residential clusters. Best for neighborhood buka rice.'",
                pidgin: "Grand road. 'Everywhere busy, house full ground. If you want better buka rice, na here.'",
                yo: "Amọna pataki. 'Awọn ibudo iṣẹ ati awọn agbegbe ibugbe. O dara julọ fun iresi buka adugbo.'",
                ig: "Ụzọ njikọ kacha mkpa. 'Ụlọ ọrụ na ebe obibi. Ọ kacha mma maka osikapa buka mpaghara ahụ.'",
                ha: "Babban mahada. 'Cibiyoyin ayyuka da clusters na zama. Mafi kyau ga shinkafar buka ta unguwa.'"
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
            },
            'Akowonjo': {
                placesToVisit: [
                    { name: 'Akowonjo Roundabout' },
                    { name: 'Miccom Golf Course (nearby)', url: 'https://miccomgolf.com.ng/' }
                ],
                whatToEat: [
                    { name: 'The Place Akowonjo', url: 'https://www.theplace.com.ng/' },
                    { name: 'Domino\'s Pizza Egbeda', url: 'https://www.dominos.ng/' }
                ],
                sports: [
                    { name: 'I-Fitness Egbeda', type: 'Gym', url: 'https://ifitness.ng/' }
                ]
            },
            'Gowon Estate': {
                placesToVisit: [
                    { name: 'Gowon Estate inner parks' },
                    { name: 'Federal Housing Hub' }
                ],
                whatToEat: [
                    { name: 'Estate canteen' },
                    { name: 'Street delicacies' }
                ],
                sports: [
                    { name: 'Estate courts', type: 'Basketball' },
                    { name: 'Jogging routes', type: 'Other' }
                ]
            },
            'Shasha': {
                placesToVisit: [
                    { name: 'Shasha Market' },
                    { name: 'Airport Perimeter Road' }
                ],
                whatToEat: [
                    { name: 'Local food joints' },
                    { name: 'Evening suya' }
                ],
                sports: [
                    { name: 'Community football', type: 'Football' }
                ]
            },
            'Idimu': {
                placesToVisit: [
                    { name: 'Idimu Council' },
                    { name: 'NYSC Camp Iyana Ipaja (nearby)', url: 'https://www.instagram.com/explore/locations/248102353/nysc-camp-iyana-ipaja-lagos/' }
                ],
                whatToEat: [
                    { name: 'Local canteens' }
                ],
                sports: [
                    { name: 'Roadside running', type: 'Other' }
                ]
            },
            'Ponle': {
                placesToVisit: [
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.5947, lng: 3.2905 },
    },
    {
        id: 'ikorodu',
        name: 'Ikorodu',
        description: {
            en: 'Ideal for spacious living on a budget, though a bit far out.',
            pidgin: 'If you want big house for small money, na here. E far small sha.',
            yo: 'Apẹrẹ fun gbigbe ninu ile nla pẹlu isuna kekere, botilẹjẹpe o jinna diẹ.',
            ig: 'Ọ dị mma maka obibi nwere ohere n’ego dị nro, n’agbanyeghị na ọ nọ n’ebe dị anya.',
            ha: 'Ya dace da rayuwa mai faɗi akan kasafin kuɗi, kodayake akwai ɗan nisa.'
        },
        priceRange: {
            en: "₦250k - ₦500k (Miniflat)",
            pidgin: "₦250k - ₦500k (Miniflat)",
            yo: "₦250k - ₦500k (Iyara kan ati palọ)",
            ig: "₦250k - ₦500k (Nke nta)",
            ha: "₦250k - ₦500k (Miniflat)"
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
                pidgin: "Water waka ground. 'Ferry terminal dey here. If you no wan see Ikorodu road traffic, just enter boat go Island sharply.'",
                yo: "Ẹnu ọna omi. 'Ile si Ibudo Ferry. O jẹ ọna ti o yara ju si Island ti o ba fẹ yago fun ijabọ ọna Ikorodu.'",
                ig: "Ụzọ mbata mmiri. 'Ebe ọdụ Ferry dị. Ọ bụ ụzọ kacha mma iji ruo Island ma ọ bụrụ na ị chọrọ izere okporo ụzọ Ikorodu.'",
                ha: "Mashigar ruwa. 'Gida ga tashar jirgin ruwa. Ita ce hanya mafi sauri zuwa Island idan kuna son guje wa zirga-zirgar hanyar Ikorodu.'"
            },
            'Sabo Market': {
                en: "Commercial heartbeat. 'Where the town comes to trade. Bustling with energy and everything you need for the home.'",
                pidgin: "Trading center. 'Na here market dey. Energy full ground and everything for house dey here.'",
                yo: "Àárín iṣowo. 'Nibi ti ilu ti n wa lati ṣowo. O kun fun agbara ati ohun gbogbo ti o nilo fun ile.'",
                ig: "Isi iji achụ nta ego. 'Ebe obodo na-abịa azụmahịa. Ike dị na ya na ihe niile gị na-achọ maka ụlọ dị ebe a.'",
                ha: "Zuciyar kasuwanci. 'Inda mutanen gari ke zuwa don kasuwanci. Akwai kuzari da duk abin da kuke buƙata na gida.'"
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
            },
            'Ijede': {
                placesToVisit: [
                    { name: 'Ijede, Ikorodu' },
                    { name: 'Local market in Ijede' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Ogolonto': {
                placesToVisit: [
                    { name: 'Ogolonto, Ikorodu' },
                    { name: 'Local market in Ogolonto' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Ibeshe': {
                placesToVisit: [
                    { name: 'Ibeshe, Ikorodu' },
                    { name: 'Local market in Ibeshe' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Shagamu Road': {
                placesToVisit: [
                    { name: 'Shagamu Road corridor' },
                    { name: 'Shops & services along Shagamu Road' },
                    { name: 'Local hangout spots near Shagamu Road' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.6194, lng: 3.5105 },
    },
    {
        id: 'iyana_ipaja',
        name: 'Iyana Ipaja',
        description: {
            en: 'A major transit hub, always active and very affordable.',
            pidgin: 'Center of waka. Everywhere busy well well and rent cheap.',
            yo: 'Ibudo gbigbe ọkọ nla, nigbagbogbo n ṣiṣẹ ati pe o jẹ olowo poku pupọ.',
            ig: 'Isi ebe a na-aga njem, ọ na-ekwo ekwo mgbe niile na ego ya dị mma.',
            ha: 'Babban wurin sufuri, koyaushe akwai hada-hada kuma yana da arha sosai.'
        },
        priceRange: {
            en: "₦300k - ₦600k (Miniflat)",
            pidgin: "₦300k - ₦600k (Miniflat)",
            yo: "₦300k - ₦600k (Iyara kan ati palọ)",
            ig: "₦300k - ₦600k (Nke nta)",
            ha: "₦300k - ₦600k (Miniflat)"
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
                pidgin: "Inside life. 'Noise no dey here, everywhere jeje. New estates dey blow ground sharply.'",
                yo: "Àlàáfíà ibugbe. 'Jinna si ariwo ṣugbọn o ni adugbo ti tirẹ. O n dagba ni kiakia pẹlu awọn ile tuntun.'",
                ig: "Udo n’ebe obibi. 'Ọ nọ anya na mkpọtụ mana ọ nwere mmetụta nke obodo. Ọ na-etolite ngwa ngwa na ụlọ ọhụrụ.'",
                ha: "Zaman lafiya na mazauna. 'Yana da nisa da surutu amma yana da yanayin unguwa na musamman. Yana haɓaka cikin sauri tare da sabbin gidaje.'"
            },
            'Iyana Ipaja Roundabout': {
                en: "The transit core. 'Always bubbling, the connection point for Alimosho and beyond. Street food is abundant.'",
                pidgin: "Waka central. 'Anywhere you wan go, motor dey. Street food full ground and people plenty.'",
                yo: "Àárín gbigbe ọkọ. 'Nigbagbogbo o n lọ soke, aaye asopọ fun Alimosho ati kọja rẹ. Ounje ita pọ nbẹ.'",
                ig: "Isi ebe njem. 'Ọ na-ekwo ekwo mgbe niile, ebe a na-ejikọta Alimosho na ebe ndị ọzọ. Nri okporo ụzọ juputara ebe ahụ.'",
                ha: "Cibiyar sufuri. 'Koyaushe yana dumi, wurin haɗin gwiwa na Alimosho da sauran wurare. Akwai abincin titi da yawa.'"
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
            },
            'Alimosho': {
                placesToVisit: [
                    { name: 'Alimosho Local Government HQ', url: 'https://alimosho.lg.gov.ng/' },
                    { name: 'Justrite Superstore', url: 'https://justriteonline.com/' }
                ],
                whatToEat: [
                    { name: 'Chicken Republic Alimosho', url: 'https://www.instagram.com/chickenrepublic/' },
                    { name: 'Local Buka joints' }
                ],
                sports: [
                    { name: 'Community football', type: 'Football' },
                    { name: 'I-Fitness Egbeda (nearby)', type: 'Gym', url: 'https://ifitness.ng/' }
                ]
            },
            'Baruwa': {
                placesToVisit: [
                    { name: 'Baruwa Estate Gate' },
                    { name: 'Gated Residential Zone' }
                ],
                whatToEat: [
                    { name: 'Estate canteen' },
                    { name: 'Street Suya points' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Private compound gyms', type: 'Gym' }
                ]
            },
            'Mosan': {
                placesToVisit: [
                    { name: 'Mosan-Okunola LCDA', url: 'https://alimosho.lg.gov.ng/' },
                    { name: 'LSDPC Estate Mosan' }
                ],
                whatToEat: [
                    { name: 'Local Amala & Ewedu' },
                    { name: 'Estate snacks' }
                ],
                sports: [
                    { name: 'Mosan community ball', type: 'Football' },
                    { name: 'Road running', type: 'Other' }
                ]
            },
            'Gate': {
                placesToVisit: [
                    { name: 'Ipaja Gate Bus Stop' },
                    { name: 'Gate commercial hub' }
                ],
                whatToEat: [
                    { name: 'Quick roadside snacks' },
                    { name: 'Evening grills' }
                ],
                sports: [
                    { name: 'Road jogging', type: 'Other' }
                ]
            },
        },
        coords: { lat: 6.6094, lng: 3.2944 },
    },
    {
        id: 'yaba',
        name: 'Yaba',
        description: {
            en: 'Lagos "Silicon Valley". Youthful, creative, and tech-driven. Great for networking but can be noisy and congested near Sabo.',
            pidgin: 'Lagos Tech Hub. Boys dey hustle, vibes set for students and techies, but e dey busy well well for Sabo side.',
            yo: 'Lagos "Silicon Valley". Fun awọn ọdọ, ẹda, ati imọ-ẹrọ. O dara fun lilo ṣugbọn o le ni ariwo ati dudu ni Sabo.',
            ig: 'Lagos "Silicon Valley". Ndị na-eto eto, ihe okike, na teknụzụ. Ọ dị mma maka ịkparịta ụka mana mkpọtụ nwere ike ịdị na Sabo.',
            ha: 'Legas "Silicon Valley". Na matasa, ƙirƙira, da fasaha. Yana da kyau don sadarwa amma yana iya yin surutu da cunkoso kusa da Sabo.'
        },
        priceRange: {
            en: "₦800k - ₦1.8m (Miniflat/Apt)",
            pidgin: "₦800k - ₦1.8m (Miniflat/Apt)",
            yo: "₦800k - ₦1.8m (Iyara kan ati palọ)",
            ig: "₦800k - ₦1.8m (Nke nta)",
            ha: "₦800k - ₦1.8m (Miniflat/Apt)"
        },
        commuteTo: { vi: '25m', ikeja: '35m' },
        hotspots: [
            { name: 'E-Center (Ozone)', category: 'activity', url: 'https://www.instagram.com/ozonecinemas/' },
            { name: 'White House', category: 'food', url: 'https://www.instagram.com/whitehouseresturant/' },
            { name: 'Banilux Bar', category: 'nightlife', url: 'https://www.instagram.com/baniluxbar/' },
            { name: 'Purple Bistro', category: 'food', url: 'https://www.instagram.com/purplebistrolagos/' },
            { name: 'YabaTech Art Museum', category: 'activity', url: 'https://yabatech.edu.ng' },
            { name: 'Tejuosho Market', category: 'activity', url: 'https://www.instagram.com/tejuoshomarket/' }
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
                pidgin: "UNILAG ground. Maps talk say: 'School vibe set but if rain fall sharply, some streets fit get small water issue.'",
                yo: "Ibudo ẹkọ ati ile UNILAG. Awọn atunwo sọ pe: 'Emi ọdọ wa nbẹ, ṣugbọn omi le rọ sinu diẹ ninu awọn ita lẹhin ojo rọ.'",
                ig: "Mpaghara agụmakwụkwọ na ebe obibi UNILAG. Ndị mmadụ na-asị: 'Ndị na-eto eto juputara, mana mmiri na-agbakọ n'ụfọdụ okporo ụzọ mgbe nnukwu mmiri gachara.'",
                ha: "Wurin ilimi da gidan UNILAG. Bincike ya ce: 'Yanayin matasa ne, amma ruwa yana iya taruwa a wasu tituna bayan babban ruwan sama.'"
            },
            'Sabo': {
                en: "Yabacon Valley! 'Tech hub for life. Startups everywhere. Use Google Maps or you go stuck for traffic. Energy is high.'",
                pidgin: "Tech headquarters. 'Startup full ground. If you no use Map, traffic go show you shege. Vibes set for boys wey dey hustle.'",
                yo: "Yabacon Valley! 'Ibudo imọ-ẹrọ. Awọn ile-iṣẹ imọ-ẹrọ nibikibi. Lo Google Maps tabi o le duro ninu ijabọ. Agbara ga.'",
                ig: "Isi teknụzụ! 'Ebe teknụzụ dị. Ndị na-amalite azụmahịa juputara. Jiri Google Maps ma ọ bụ na ị ga-atụ n'okporo ụzọ. Ike juputara.'",
                ha: "Yabacon Valley! 'Cibiyar fasaha. Sabbin kamfanonin fasaha a ko\'ina. Yi amfani da Google Maps ko kuma ka maƙale a zirga-zirga. Akwai kuzari.'"
            },
            'Tejuosho': {
                en: "Shopper's paradise. 'Busy 24/7. Don't even try driving here during holidays. Street market is the real deal.'",
                pidgin: "Market energy. 'Everywhere busy 24/7. Traffic for holiday season no be small. Quality trading full ground.'",
                yo: "Paradiisi onibara. 'O n n ṣiṣẹ nigbagbogbo 24/7. Má tilẹ̀ gbìyànjú láti wa ọkọ̀ níbí lákòókò ọjọ́ ìsinmi. Ọjà ita ni ohun gidi.'",
                ig: "Ebe kacha mma maka ịzụ ahịa. 'Ọ na-ekwo ekwo awa 24. Anwakwala ịnya ụgbọ ala ebe a n'oge ezumike. Ahịa okporo ụzọ bụ ezigbo ahịa.'",
                ha: "Wurin masoyan siyayya. 'Hada-hada sa\'o\'i 24. Kada ka ma yi ƙoƙarin tuka mota a nan lokacin hutu. Kasuwar titi ita ce ta gaskiya.'"
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
            },
            'Akoka': {
                placesToVisit: [
                    { name: 'University of Lagos (UNILAG)', url: 'https://unilag.edu.ng/' },
                    { name: 'UNILAG Marine Road' },
                    { name: 'St. Finbarrs College axis' }
                ],
                whatToEat: [
                    { name: 'UNILAG Buttery' },
                    { name: 'King Jaja Canteen' },
                    { name: 'Hot n Spicy Akoka' },
                    { name: 'Street food near Gate' }
                ],
                sports: [
                    { name: 'UNILAG Sports Center', type: 'Other', url: 'https://unilag.edu.ng/' },
                    { name: 'Shomolu-Akoka jogging', type: 'Other' },
                    { name: 'Local gyms in Akoka', type: 'Gym' }
                ]
            },
            'Onike': {
                placesToVisit: [
                    { name: 'Onike-Iwaya Road' },
                    { name: 'UNILAG Back Gate' },
                    { name: 'Mountain of Fire Ministries HQ' }
                ],
                whatToEat: [
                    { name: 'Local buka spots' },
                    { name: 'Student cafes' },
                    { name: 'Evening grills near UNILAG' }
                ],
                sports: [
                    { name: 'UNILAG Indoor Sports Hall (nearby)', type: 'Other' },
                    { name: 'Local community football', type: 'Football' }
                ]
            },
            'Iwaya': {
                placesToVisit: [
                    { name: 'Iwaya Water Front' },
                    { name: 'Local market hub' }
                ],
                whatToEat: [
                    { name: 'Fresh fish from waterfront' },
                    { name: 'Local canteens' }
                ],
                sports: [
                    { name: 'Community football', type: 'Football' },
                    { name: 'Road running', type: 'Other' }
                ]
            },
            'Adekunle': {
                placesToVisit: [
                    { name: '3rd Mainland Bridge access' },
                    { name: 'Makoko (nearby view)' }
                ],
                whatToEat: [
                    { name: 'Street suya & grills' },
                    { name: 'Local breakfast joints' }
                ],
                sports: [
                    { name: 'Herbert Macaulay jogging', type: 'Other' }
                ]
            },
            'Alagomeji': {
                placesToVisit: [
                    { name: 'Yaba BRT Terminal' },
                    { name: 'Herbert Macaulay Way' }
                ],
                whatToEat: [
                    { name: 'The Place (Yaba nearby)', url: 'https://www.theplace.com.ng/' },
                    { name: 'Local cafes' }
                ],
                sports: [
                    { name: 'Roadside gyms', type: 'Gym' }
                ]
            },
        },
        coords: { lat: 6.5164, lng: 3.3858 },
    },
    {
        id: 'surulere',
        name: 'Surulere',
        description: {
            en: 'Classic Lagos soul. Central, diverse, and lively. Perfect for those who want original Lagos vibes and middle-ground commute.',
            pidgin: 'Original Lagos OG area. E central, life plenty, and middle-ground for waka.',
            yo: 'Emí Lagos gidi. Àárín, oniruuru, ati igbesi aye. Apẹrẹ fun awọn ti o fẹ emi Lagos atilẹba ati irin-ajo agbedemeji.',
            ig: 'Ezigbo obi Lagos. Ọ dị n’etiti, nwee ụdị dị iche iche, ma dị ndụ. Ọ kacha mma maka ndị chọrọ ezigbo mmetụta Lagos na njem dị n’etiti.',
            ha: 'Zuciyar Legas ta gaskiya. Tsakiya, mabanbanta, kuma mai rai. Cikakke ga waɗanda ke son yanayin Legas na asali da tafiya mai matsakaicin nisa.'
        },
        priceRange: {
            en: "₦1m - ₦2m (2 Bedroom)",
            pidgin: "₦1m - ₦2m (2 Bedroom)",
            yo: "₦1m - ₦2m (Iyara meji)",
            ig: "₦1m - ₦2m (Ime ụlọ abụọ)",
            ha: "₦1m - ₦2m (Daki 2)"
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
                pidgin: "Traffic headquarters. 'Stadium Underbridge na jungle, watch those Danfo drivers. But street food for here sweet die near the park.'",
                yo: "Ibudo arosọ. 'Mọ fun ijabọ ọkọ. Labẹ afara jẹ igbo, ṣọra fun awọn Danfo. Ounje ita to dara julọ wa nitosi ibudo ọkọ sibẹsibẹ.'",
                ig: "Isi ebe akụkọ. 'A ma ama maka okporo ụzọ. N'okpuru akwa ahụ bụ oke kpakpando, kpachara anya maka Danfo. Nri okporo ụzọ kacha mma dị nso n'ọdụ ụgbọ ala.'",
                ha: "Mashahurin guri. 'An san shi da zirga-zirga. Ƙarƙashin gadar daji ne, kula da Danfo. Mafi kyawun abincin titi yana kusa da tashar mota.'"
            },
            'Adeniran Ogunsanya': {
                en: "Upmarket Surulere. 'Malls and nice dinner spots. Parking is a struggle but the vibe is upscale and secure.'",
                pidgin: "Surulere big boy street. 'Mall set, food point set. Parking fit tie your neck small but security and vibe set for here.'",
                yo: "Surulere giga. 'Awọn ile-iṣẹ ati awọn aaye ounjẹ alẹ to dara. Gbigbe ọkọ ayọkẹlẹ jẹ iṣẹ ṣugbọn ẹmi ga ati aabo wa.'",
                ig: "Akụkụ Surulere dị elu. 'Ụlọ ahịa na ebe nri abalị dị mma. Ịdọba ụgbọ ala siri ike mana mmetụta ya dị elu ma nwee nchekwa.'",
                ha: "Yankin Surulere na masu kuɗi. 'Malls da wuraren cin abinci masu kyau. Yin parking yana da wuya amma yanayin yana da kyau da tsaro.'"
            },
            'National Stadium': {
                en: "The sports heart. 'Historic venue for athletics and major events. A massive space for physical activity and local gatherings.'",
                pidgin: "Sports headquarters. 'Old school ground for running and ball. Space big well well for exercise and meeting people.'",
                yo: "Ọkàn ere idaraya. 'Ibi itan fun ere-idaraya ati awọn iṣẹlẹ pataki. Aaye nla fun iṣẹ ṣiṣe ti ara ati awọn apejọ agbegbe.'",
                ig: "Obi egwuregwu. 'Ebe akụkọ ihe mere eme maka egwuregwu na mmemme ukwu. Nnukwu ohere maka mmega ahụ na mgbakọ obodo.'",
                ha: "Zuciyar wasanni. 'Wurin tarihi na wasannin motsa jiki da manyan abubuwa. Babban fili don ayyukan motsa jiki da tarurrukan gida.'"
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
            },
            'Aguda': {
                placesToVisit: [
                    { name: 'Aguda Market' },
                    { name: 'Brown Street' }
                ],
                whatToEat: [
                    { name: 'Local Amala spots' },
                    { name: 'Roasted fish & Boli' }
                ],
                sports: [
                    { name: 'Aguda community pitch', type: 'Football' },
                    { name: 'Small private gyms', type: 'Gym' }
                ]
            },
            'Itire': {
                placesToVisit: [
                    { name: 'Itire Market' },
                    { name: 'Ogunlana Drive axis' }
                ],
                whatToEat: [
                    { name: 'Amala Olaiya (nearby)', url: 'https://www.instagram.com/olaiyaamala/' },
                    { name: 'Local street grills' }
                ],
                sports: [
                    { name: 'Community ball', type: 'Football' }
                ]
            },
            'Ijesha': {
                placesToVisit: [
                    { name: 'Ijesha Market' },
                    { name: 'Masha-Ijesha link road' }
                ],
                whatToEat: [
                    { name: 'Amala joints' },
                    { name: 'Evening suya points' }
                ],
                sports: [
                    { name: 'Street football spots', type: 'Football' }
                ]
            },
            'Masha': {
                placesToVisit: [
                    { name: 'Masha Kerele Street' },
                    { name: 'National Stadium (accessible)' }
                ],
                whatToEat: [
                    { name: 'Bistro 7 (nearby)', url: 'https://www.instagram.com/bistro_7/' },
                    { name: 'Masha grills' }
                ],
                sports: [
                    { name: 'Roadside gyms', type: 'Gym' },
                    { name: 'Stadium jogging (nearby)', type: 'Other' }
                ]
            },
            'Lawanson': {
                placesToVisit: [
                    { name: 'Lawanson Market' },
                    { name: 'Itire Road hub' }
                ],
                whatToEat: [
                    { name: 'Amala spots near market' },
                    { name: 'Suya joints' }
                ],
                sports: [
                    { name: 'Football viewing centers', type: 'Other' }
                ]
            },
        },
        coords: { lat: 6.5059, lng: 3.3619 },
    },
    {
        id: 'magodo',
        name: 'Magodo',
        description: {
            en: 'Serene, well-planned, and family-friendly. A premium mainland choice.',
            pidgin: 'E quiet, e arrange well, and e good for family. Na big man area for mainland.',
            yo: 'Iduroṣinṣin, siseto daradara, ati ore-ẹbi. Yiyan mainland ti o niye lori.',
            ig: 'Obi nwayọọ, ndokwa ya dị mma, ma dị mma maka ezinụlọ. Nhọrọ mainland mara mma.',
            ha: 'Mai natsuwa, tsayayye, kuma ya dace da dangi. Babban zaɓi na babban gari.'
        },
        priceRange: {
            en: "₦2.5m - ₦5m (3 Bedroom)",
            pidgin: "₦2.5m - ₦5m (3 Bedroom)",
            yo: "₦2.5m - ₦5m (Iyara mẹta)",
            ig: "₦2.5m - ₦5m (Ime ụlọ atọ)",
            ha: "₦2.5m - ₦5m (Daki 3)"
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
                pidgin: "Mainland big man base. 'Security tight enter well. You gats get code to enter estate. Everywhere calm for morning waka.'",
                yo: "VIP mainland. 'Aabo ga pupọ. O nilo koodu abawọle fun ibi gbogbo. Awọn ita ti o dake ati pe o dara fun ṣiṣe owurọ.'",
                ig: "VIP mainland. 'Nchebe ya kacha mma. Ị chọrọ koodu mbata maka ebe niile. Okporo ụzọ nọ jụụ ma dị mma maka ịgba ọsọ n’ụtụtụ.'",
                ha: "VIP na babban gari. 'Tsaro yana da kyau sosai. Kuna buƙatar lambar shiga kowane guri. Tituna masu shuru kuma sun dace da gudu na asuba.'"
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
            },
            'Isheri (Phase 1)': {
                placesToVisit: [
                    { name: 'Isheri-North Recreation' },
                    { name: 'Magodo Brooks gate axis' }
                ],
                whatToEat: [
                    { name: 'Estate cafes' },
                    { name: 'Local suya in Isheri' }
                ],
                sports: [
                    { name: 'Isheri community ball', type: 'Football' },
                    { name: 'Jogging routes (Phase 1)', type: 'Other' }
                ]
            },
            'CMD Road': {
                placesToVisit: [
                    { name: 'CMD Road Plazas' },
                    { name: 'Lagos State Secretariat (nearby)', url: 'https://lagosstate.gov.ng/' }
                ],
                whatToEat: [
                    { name: 'Rhapsody\'s (nearby)', url: 'https://www.rhapsodys.com.ng/' },
                    { name: 'Domino\'s Pizza (CMD)', url: 'https://www.dominos.ng/' }
                ],
                sports: [
                    { name: 'CMD Road jogging', type: 'Other' },
                    { name: 'Local gyms in Shangisha', type: 'Gym' }
                ]
            },
        },
        coords: { lat: 6.6173, lng: 3.3831 },
    },
    {
        id: 'ogba',
        name: 'Ogba',
        description: {
            en: 'Organized and reasonably quiet. A solid choice for professionals.',
            pidgin: 'Area wey arrange well. E cool for working class pipo.',
            yo: 'Siseto ati dake diẹ. Yiyan to lagbara fun awọn alamọja.',
            ig: 'Ndokwa ya dị mma ma nọ jụụ. Nhọrọ dị mma maka ndị ọrụ aka.',
            ha: 'Tsayayye kuma mai natsuwa. Zaɓi mai kyau ga ma\'aikata.'
        },
        priceRange: {
            en: "₦700k - ₦1.5m (2 Bedroom)",
            pidgin: "₦700k - ₦1.5m (2 Bedroom)",
            yo: "₦700k - ₦1.5m (Iyara meji)",
            ig: "₦700k - ₦1.5m (Ime ụlọ abụọ)",
            ha: "₦700k - ₦1.5m (Daki 2)"
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
                pidgin: "Arranged community. 'Ogba center everything. Ikeja just dey your back. Market set, you go see wetin you wan buy.'",
                yo: "Ifèsẹ̀wó-ire. 'Ogba ni aaye agbedemeji fun ohun gbogbo. Isunmọ Ikeja jẹ afikun. Ọjà ni ohun gbogbo ti o nilo.'",
                ig: "Ịgba mbọ a haziri ahazi. 'Ogba bụ ebe njikọ maka ihe niile. Ịnọ nso na Ikeja bụ ihe mgbakwunye. Ahịa nwere ihe niile ị chọrọ.'",
                ha: "Hada-hada tsayayya. 'Ogba ne tsakiyar komai. Kasancewa kusa da Ikeja ƙari ne. Kasuwar tana da duk abin da kuke buƙata.'"
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
            },
            'Oke-Ira': {
                placesToVisit: [
                    { name: 'Oke-Ira, Ogba' },
                    { name: 'Local market in Oke-Ira' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Ifako': {
                placesToVisit: [
                    { name: 'Ifako, Ogba' },
                    { name: 'Local market in Ifako' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Acme Road': {
                placesToVisit: [
                    { name: 'Acme Road corridor' },
                    { name: 'Shops & services along Acme Road' },
                    { name: 'Local hangout spots near Acme Road' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.6263, lng: 3.3370 },
    },
    {
        id: 'lekki_1',
        name: 'Lekki Phase 1',
        description: {
            en: 'Modern Island living with best-in-class cafes and nightlife. WARNING: High flood risk in rainy season and heavy traffic on Admiralty Way.',
            pidgin: 'Big boy area with correct jaiye. But flooding for here no be small during rain and traffic Admiralty fit tire person.',
            yo: 'Igbesi aye Island ode oni pẹlu awọn kafe ati igbesi aye alẹ to dara julọ. IKILO: Ewu iṣẹlẹ omí nla ni akoko ojo ati ijabọ wuwo lori Admiralty Way.',
            ig: 'Obibi Island nke ọgbara ọhụrụ nwere ụlọ nri na ebe ntụrụndụ abalị kacha mma. NDỌ AKA NA NTỊ: Mmiri na-eju ebe a n’oge udu mmiri ma okporo ụzọ na-esi ike n’Admiralty Way.',
            ha: 'Rayuwar Island ta zamani tare da mafi kyawun cafes da rayuwar dare. GARGADI: Hadarin ambaliyar ruwa yana da yawa a lokacin damina kuma akwai cunkoson zirga-zirga a hanyar Admiralty.'
        },
        priceRange: {
            en: "₦3m - ₦6m+ (2 Bedroom)",
            pidgin: "₦3m - ₦6m+ (2 Bedroom)",
            yo: "₦3m - ₦6m+ (Iyara meji)",
            ig: "₦3m - ₦6m+ (Ime ụlọ abụọ)",
            ha: "₦3m - ₦6m+ (Daki 2)"
        },
        commuteTo: { vi: '10m', ikeja: '50m' },
        hotspots: [
            { name: 'Filmhouse IMAX', category: 'activity', url: 'https://filmhouseretail.com/' },
            { name: 'Circa Non Pareil', category: 'food', url: 'https://www.instagram.com/circanonpareil/' },
            { name: 'Sailor’s Lounge', category: 'nightlife', url: 'https://www.sailorslounge.com/' },
            { name: 'Lekki Leisure Lake', category: 'activity', url: 'https://www.lekkileisure.com/' },
            { name: 'Upbeat Centre', category: 'activity', url: 'https://upbeatcentre.com/' },
            { name: 'Nike Art Gallery', category: 'activity', url: 'https://www.nikeart.com/' },
            { name: 'The Place', category: 'food', url: 'https://www.theplace.com.ng/' }
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
                pidgin: "Lekki main spot. 'Market and shop full everywhere. Ebeano for Admiralty na the spot. Traffic fit craze but life easy for here.'",
                yo: "Àárín iṣowo. 'Ohun gbogbo ti o nilo wa nibi. Ile-itaja Prince Ebeano ni aaye naa. Ijabọ le buru ṣugbọn irọrun jẹ 100%.'",
                ig: "Isi iji achụ nta ego. 'Ihe niile ị chọrọ dị ebe a. Ụlọ ahịa Prince Ebeano bụ ebe ahụ. Okporo ụzọ nwere ike isi ike mana ibi ebe a dị mma 100%.'",
                ha: "Zuciyar kasuwanci. 'Duk abin da kuke buƙata yana nan. Prince Ebeano mall shine wurin. Zirga-zirga na iya zama mahaukaci amma jin daɗi shine 100%.'"
            },
            'Lekki Right Side': {
                en: "Residential pocket. 'Mostly gated houses and schools. Quiet ground compared to the main road noise.'",
                pidgin: "Estate side. 'Houses and schools plenty. Everywhere silence compared to the noise for main road.'",
                yo: "Ibugbe pọn. 'Pupọ julọ awọn ile ati awọn ile-iwe ti o ni aabo. Aaye idakeji akawe si ariwo ọna akọkọ.'",
                ig: "Mpaghara obibi. 'Ọtụtụ ụlọ nwere nchekwa na ụlọ akwụkwọ. Ọ nọ jụụ ma e jiri ya tụnyere mkpọtụ okporo ụzọ.'",
                ha: "Yankin wurin zama. 'Mafi yawancin gidaje ne masu tsaro da makarantu. Wuri ne mai natsuwa idan aka kwatanta da surutun babban titi.'"
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
            },
            'Marwa': {
                placesToVisit: [
                    { name: 'Oniru Beach (nearby)', url: 'https://www.instagram.com/onirubeach/' },
                    { name: 'Farmcity Lekki', url: 'https://farmcity.com.ng/' },
                    { name: 'Marwa Bus Stop hub' }
                ],
                whatToEat: [
                    { name: 'Farmcity Grilled Fish', url: 'https://farmcity.com.ng/' },
                    { name: 'The Place (Marwa)', url: 'https://www.theplace.com.ng/' },
                    { name: 'Local suya in Marwa' }
                ],
                sports: [
                    { name: 'PedalBar Cycling Studio', type: 'Other', url: 'https://www.pedalbar.co/' },
                    { name: 'Fitness Arcade Lekki', type: 'Gym', url: 'https://www.instagram.com/fitnessarcadeng/' },
                    { name: 'Oniru Jogging Route', type: 'Other' }
                ]
            },
            'Lekki Right Side': {
                placesToVisit: [
                    { name: 'Lekki Recreational Center' },
                    { name: 'Dowen College axis' },
                    { name: 'VFS Global (nearby)' }
                ],
                whatToEat: [
                    { name: 'HSE Gourmet', url: 'https://www.instagram.com/hsegourmet/' },
                    { name: 'Black Pepper Steakhouse', url: 'https://www.instagram.com/blackpepperng/' },
                    { name: 'Maple Lagos', url: 'https://www.instagram.com/maple.lagos/' }
                ],
                sports: [
                    { name: 'Xtrimfit Gym & Spa', type: 'Gym', url: 'https://www.xtrimfit.com.ng/' },
                    { name: 'Body by Design Lekki', type: 'Gym' },
                    { name: 'Residential road running', type: 'Other' }
                ]
            },
            'Lekki Left Side': {
                placesToVisit: [
                    { name: 'Upbeat Recreation Centre', url: 'https://upbeatcentre.com/' },
                    { name: 'The Waterside' },
                    { name: 'Bay Lounge Lekki', url: 'https://www.instagram.com/bayloungelekki/' }
                ],
                whatToEat: [
                    { name: 'The Harvest Lagos', url: 'https://www.instagram.com/theharvestlagos/' },
                    { name: 'Danfo Bistro', url: 'https://www.instagram.com/danfobistro/' },
                    { name: 'Atmosphere Rooftop', url: 'https://www.instagram.com/atmosphererooftop/' }
                ],
                sports: [
                    { name: 'Upbeat Trampoline & Gym', type: 'Gym', url: 'https://upbeatcentre.com/' },
                    { name: 'EliteBox Fitness', type: 'Other', url: 'https://www.eliteboxng.com/' }
                ]
            },
            'Onikepo Akande': {
                placesToVisit: [
                    { name: 'Freedom Way' },
                    { name: 'The Lennox Mall', url: 'https://thelennox.com.ng/' },
                    { name: 'Orange Island (nearby Bridge)' }
                ],
                whatToEat: [
                    { name: 'South Eatery & Social', url: 'https://www.instagram.com/south_lagos/' },
                    { name: 'Tarkwa Café', url: 'https://www.instagram.com/tarkwacafe/' },
                    { name: 'Krispy Kreme Lekki', url: 'https://www.krispykreme.ng/' }
                ],
                sports: [
                    { name: 'Sweatbox Lekki', type: 'Gym', url: 'https://www.sweatboxnig.com/' },
                    { name: 'Pure Fitness Africa', type: 'Gym' }
                ]
            },
        },
        coords: { lat: 6.4491, lng: 3.4723 },
    },
    {
        id: 'lekki_2',
        name: 'Lekki Phase 2',
        description: {
            en: 'Rapidly developing, slightly more affordable than Phase 1.',
            pidgin: 'E dey develop fast, and e cheaper small pass Phase 1.',
            yo: 'Dagbasoke ni iyara, olowo poku diẹ ju Phase 1 lọ.',
            ig: 'Ọ na-etolite ngwa ngwa, agọ ya dị mma karịa nke Phase 1.',
            ha: 'Yana haɓaka cikin sauri, yana da ɗan sauƙi fiye da Phase 1.'
        },
        priceRange: {
            en: "₦2m - ₦4m (2 Bedroom)",
            pidgin: "₦2m - ₦4m (2 Bedroom)",
            yo: "₦2m - ₦4m (Iyara meji)",
            ig: "₦2m - ₦4m (Ime ụlọ abụọ)",
            ha: "₦2m - ₦4m (Daki 2)"
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
                pidgin: "Area wey dey blow. 'New estate full ground and Orchid Hotel dey here. Movement set well well.'",
                yo: "Amọna idagbasoke. 'Ibudo ibugbe ti o dagba ni iyara pẹlu ọpọlọpọ awọn ile titun ati Orchid Hotel olokiki.'",
                ig: "Ebe na-etolite etolite. 'Mpaghara obibi na-etolite ngwa ngwa nwere ọtụtụ ụlọ ọhụrụ na Orchid Hotel a ma ama.'",
                ha: "Yankin dake haɓaka. 'Garin zama mai haɓaka cikin sauri tare da sabbin gidaje da yawa da sanannen otal ɗin Orchid.'"
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
            pidgin: 'Road to new Lagos. Value for money dey here well.',
            yo: 'Ẹnu ọna si Lagos tuntun. Iye to dara fun owo lori Island.',
            ig: 'Ụzọ mbata gaa Lagos ọhụrụ. Ọnụ ego ya dị mma na Island.',
            ha: 'Mashiga zuwa sabuwar Legas. Darajar kuɗi tana da kyau a Island.'
        },
        priceRange: {
            en: "₦800k - ₦1.5m (Miniflat)",
            pidgin: "₦800k - ₦1.5m (Miniflat)",
            yo: "₦800k - ₦1.5m (Iyara kan ati palọ)",
            ig: "₦800k - ₦1.5m (Nke nta)",
            ha: "₦800k - ₦1.5m (Miniflat)"
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
                pidgin: "Shoprite ground. 'Novare Mall set but if rain fall, road fit turn river. Traffic for here no dey sleep.'",
                yo: "Igbesi aye Itaja & Ijabọ. 'Novare Mall (Shoprite) ni o ṣe pataki ṣugbọn ọna di odo nigbati ojo ba rọ. Ijabọ wa nigbagbogbo.'",
                ig: "Ndụ ụlọ ahịa na okporo ụzọ. 'Novare Mall (Shoprite) bụ ebe dị mkpa mana okporo ụzọ na-aghọ osimiri mgbe mmiri zoro. Okporo ụzọ na-adị mgbe niile.'",
                ha: "Rayuwar Mall da Zirga-zirga. 'Novare Mall (Shoprite) shine babban abin jan hankali amma hanyar tana zama kogi lokacin da ruwa ya yi. Zirga-zirga akai-akai ce.'"
            },
            'Badore waterfront': {
                en: "The scenic escape. 'Quiet waterfront area with boat jetties and local seafood spots. A calmer side of Ajah.'",
                pidgin: "Cool water side. 'Boats full here and fresh fish dey. Everywhere calm pass the main area.'",
                yo: "Àyè isinmi omi. 'Agbegbe omi idakeji pẹlu awọn ibudo ọkọ ati awọn aaye ounje omi okun. Apa kan ti o dake ti Ajah.'",
                ig: "Ebe mmiri mara mma. 'Ebe mmiri dị jụụ nwere ebe ọdụ ụgbọ mmiri na ebe nri mmiri okpuru. Akụkụ kacha mma na Ajah.'",
                ha: "Wurin hutawa a gefen ruwa. 'Yankin bakin ruwa mai natsuwa tare da tashoshin jiragen ruwa da wuraren cin abincin teku. Wani bangare na Ajah mai natsuwa.'"
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
            },
            'Langbasa': {
                placesToVisit: [
                    { name: 'Langbasa Waterfront' },
                    { name: 'Langbasa Boat Jetty' }
                ],
                whatToEat: [
                    { name: 'Fresh Seafood (Waterfront)' },
                    { name: 'Local Ajah Buka' }
                ],
                sports: [
                    { name: 'Water-side jogging', type: 'Other' },
                    { name: 'Local community gyms', type: 'Gym' }
                ]
            },
            'Eputu': {
                placesToVisit: [
                    { name: 'Eputu General Hub' },
                    { name: 'Nearby estates (Beechwood)' }
                ],
                whatToEat: [
                    { name: 'Local roadside canteens' },
                    { name: 'Evening suya points' }
                ],
                sports: [
                    { name: 'Community football', type: 'Football' }
                ]
            },
            'Awoyaya': {
                placesToVisit: [
                    { name: 'Crown Estate gate', url: 'https://crownestate.com.ng/' },
                    { name: 'Greensprings School axis', url: 'https://www.greenspringsschool.com/' }
                ],
                whatToEat: [
                    { name: 'Mayfair Mall canteens' },
                    { name: 'Local grills near Crown Estate' }
                ],
                sports: [
                    { name: 'Crown Estate Gym (Private)', type: 'Gym' },
                    { name: 'I-Fitness Ajah (nearby)', type: 'Gym', url: 'https://ifitness.ng/' }
                ]
            },
            'Lakowe': {
                placesToVisit: [
                    { name: 'Lakowe Lakes Golf & Country Estate', url: 'https://lakowelakes.com/' },
                    { name: 'Lakowe Lake serenity' }
                ],
                whatToEat: [
                    { name: 'Lakowe Lakes Clubhouse', url: 'https://lakowelakes.com/hospitality/dining/' },
                    { name: 'Estate cafes' }
                ],
                sports: [
                    { name: 'Golfिंग at Lakowe Lakes', type: 'Other', url: 'https://lakowelakes.com/golf/' },
                    { name: 'Lakowe estate jogging', type: 'Other' }
                ]
            },
        },
        coords: { lat: 6.4674, lng: 3.5684 },
    },
    {
        id: 'ikoyi',
        name: 'Ikoyi',
        description: {
            en: 'Premier luxury and diplomatic enclave. Extremely quiet and secure, though very high cost of living and limited nightlife options.',
            pidgin: 'For politicians and big men. Everywhere quiet, security tight but money gats berekete to live here.',
            yo: 'Ibugbe igbadun ati diplomacy pataki. Idakeji pupọ ati aabo, botilẹjẹpe idiyele gbigbe ga pupọ ati awọn aṣayan igbesi aye alẹ ti o lopin.',
            ig: 'Mpaghara okomoko na ndị nnọchi anya mba ọzọ. Ọ nọ jụụ ma nwee nchekwa nke ukwuu, n’agbanyeghị na obibi ebe ahụ dị oke ọnụ.',
            ha: 'Babban wurin alfarma da na wakilan kasashen waje. Mai natsuwa sosai da tsaro, kodayake tsadar rayuwa tana da yawa kuma babu wuraren shakatawa na dare da yawa.'
        },
        priceRange: {
            en: "₦10m+ (Luxury Apt)",
            pidgin: "₦10m+ (Luxury Apt)",
            yo: "₦10m+ (Iyaba igbadun)",
            ig: "₦10m+ (Ụlọ mara mma)",
            ha: "₦10m+ (Luxury Apt)"
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
                pidgin: "Money island. 'Security tight well well. Short-let no dey again to keep everywhere safe. Quiet ground for people wey get heavy pocket.'",
                yo: "Gongo igbadun. 'Aabo ti ko lẹtọ.Idinamọ kukuru-lẹẹ lati tọju ohun gbogbo ni wiwọ. Alafia, idakeji, ati ni pataki fun awọn billionaires.'",
                ig: "Isi okomoko. 'Nchebe ya kacha mma. A machibidoro ụlọ mgbazinye mkpụmkpụ iji hụ na ihe niile dị mma. Ọ nọ jụụ, dị mma maka ndị nwere ego.'",
                ha: "Kololuwar alfarma. 'Tsaro mara misaltawa. An haramta hayar gajeren lokaci don kiyaye tsaro. Akwai natsuwa, shuru, kuma na masu kuɗi ne kawai.'"
            },
            'Old Ikoyi': {
                en: "Historic luxury. 'The soul of old money. Quiet, leafy streets and the premier Ikoyi Club.'",
                pidgin: "Old school money. 'Street calm, trees full everywhere and Ikoyi Club dey here. Prestige level 100.'",
                yo: "Igbadun itan. 'Emí owo atijọ. Idakeji, awọn ita ti o ni ewe ati Ikoyi Club olokiki.'",
                ig: "Okomoko oge ochie. 'Isi ebe ego oge ochie dị. Okporo ụzọ nọ jụụ, nwee osisi na Ikoyi Club mara mma.'",
                ha: "Alfarman tarihi. 'Zuciyar tsofaffin masu kuɗi. Tituna masu natsuwa da bishiyoyi da sanannen Ikoyi Club.'"
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
            },
            'Parkview Estate': {
                placesToVisit: [
                    { name: 'Parkview Estate Green Belt' },
                    { name: 'Gerrard Road axis' }
                ],
                whatToEat: [
                    { name: 'The George Hotel Dining', url: 'https://thegeorgelagos.com/' },
                    { name: 'Estate private cafés' }
                ],
                sports: [
                    { name: 'Parkview jogging route', type: 'Other' },
                    { name: 'Private estate gym', type: 'Gym' }
                ]
            },
            'Osborne Foreshore': {
                placesToVisit: [
                    { name: 'Osborne Phase 2 Waterfront' },
                    { name: 'Kayaking at Falomo (nearby)', url: 'https://www.instagram.com/p/C-j-j_mIs-J/' }
                ],
                whatToEat: [
                    { name: 'Danfo Bistro (nearby)', url: 'https://www.instagram.com/danfobistro/' },
                    { name: 'Estate lounge dining' }
                ],
                sports: [
                    { name: 'Osborne jogging track', type: 'Other' },
                    { name: 'Private gyms (Osborne)', type: 'Gym' }
                ]
            },
            'Dolphin Estate': {
                placesToVisit: [
                    { name: 'Dolphin Market' },
                    { name: 'Dolphin Estate Park' }
                ],
                whatToEat: [
                    { name: 'The Place (Dolphin)', url: 'https://www.theplace.com.ng/' },
                    { name: 'Estate buka rice & stew' }
                ],
                sports: [
                    { name: 'Dolphin jogging route', type: 'Other' },
                    { name: 'Community football grounds', type: 'Football' }
                ]
            },
            'Bourdillon': {
                placesToVisit: [
                    { name: 'Ikoyi-Lekki Link Bridge View' },
                    { name: 'The Wheatbaker (nearby)', url: 'https://thewheatbakerlagos.com/' }
                ],
                whatToEat: [
                    { name: 'Fine dining at Bourdillon' },
                    { name: 'Luxury loungers' }
                ],
                sports: [
                    { name: 'Bourdillon jogging', type: 'Other' },
                    { name: 'Proflex Gym (nearby)', type: 'Gym', url: 'https://proflexlagos.com/' }
                ]
            },
        },
        coords: { lat: 6.4549, lng: 3.4350 },
    },
    {
        id: 'vi',
        name: 'Victoria Island',
        description: {
            en: 'The commercial heart of Lagos. High-energy, luxury dining, and major corporate HQs. Can feel overcrowded and congested during work hours.',
            pidgin: 'Business headquarters. Energy dey, enjoyment full, but traffic during work hours fit make person vex.',
            yo: 'Àárín iṣowo ti Lagos. Agbara ga, ounjẹ igbadun, ati awọn olu-ile ile-iṣẹ pataki. O le lero bi apọju ati dudu ni akoko iṣẹ.',
            ig: 'Obi azụmahịa nke Lagos. Ike juputara, nri mara mma, na isi ụlọ ọrụ ukwu. Ọ nwere ike ịdị ka mmadụ karịrị akarị n’oge ọrụ.',
            ha: 'Zuciyar kasuwancin Legas. Mai cike da kuzari, cin abinci na alfarma, da manyan hedkwatocin kamfanoni. Ana iya jin cunkoso sosai lokacin aiki.'
        },
        priceRange: {
            en: "₦5m - ₦10m+ (Apartment)",
            pidgin: "₦5m - ₦10m+ (Apartment)",
            yo: "₦5m - ₦10m+ (Iyaba)",
            ig: "₦5m - ₦10m+ (Ụlọ)",
            ha: "₦5m - ₦10m+ (Apartment)"
        },
        commuteTo: { vi: '0m', ikeja: '40m' },
        hotspots: [
            { name: 'Eko Hotel', category: 'hotel', url: 'https://www.ekohotels.com/' },
            { name: 'Landmark Beach', category: 'activity', url: 'https://www.landmarkbeach.ng/' },
            { name: 'Mega Plaza', category: 'activity', url: 'https://www.instagram.com/megaplazadeptstore/' },
            { name: 'Hard Rock Cafe', category: 'nightlife', url: 'https://www.hardrockcafe.com/location/lagos/' },
            { name: 'Shiro', category: 'food', url: 'https://www.instagram.com/shirolagos/' },
            { name: 'Civic Center', category: 'activity', url: 'https://civiccentre.com/' },
            { name: 'Moist Beach Club', category: 'nightlife', url: 'https://www.instagram.com/moistbeachclub/' }
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
                pidgin: "Business and jaiye center. 'Bank full, shop full, and night life no dey sleep. Energy set but traffic fit make you vex.'",
                yo: "Ipa iṣowo. 'Awọn ile-ifowopamọ, awọn ile-itaja giga, ati igbesi aye alẹ irikuri. Agbara jẹ 100 ṣugbọn ijabọ lasiko iṣẹ jẹ were.'",
                ig: "Isi azụmahịa. 'Hụrụ ụlọ akụ, ụlọ ahịa dị elu, na ntụrụndụ abalị. Ike ọrụ dị mma mana okporo ụzọ n’oge ọrụ siri ike.'",
                ha: "Farashin kasuwanci. 'Bankuna, shaguna masu tsada, da rayuwar dare. Kuzari shine 100 amma zirga-zirga lokacin aiki hauka ne.'"
            },
            'Corporate VI': {
                en: "Business headquarters. 'Home to major corporate HQs and high-end hotels. Very busy during the day.'",
                pidgin: "Business base. 'Office full ground and better hotel dey here. Afternoon waka fit tire you small.'",
                yo: "Olu-ile iṣowo. 'Ile si awọn olu-ile ile-iṣẹ pataki ati awọn ile-itura giga. O n ṣiṣẹ pupọ lakoko ọjọ.'",
                ig: "Isi ụlọ ọrụ. 'Ebe isi ụlọ ọrụ ukwu na ụlọ oriri na ọṅụṅụ mara mma dị. Ọ na-ekwo ekwo nke ukwuu n'ehihie.'",
                ha: "Hedkwatar kasuwanci. 'Gida ga manyan hedkwatocin kamfanoni da manyan otal-otal. Akwai hada-hada sosai da rana.'"
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
            },
            'Adeola Odeku': {
                placesToVisit: [
                    { name: 'Nok by Alara', url: 'https://nokbyalara.com/' },
                    { name: 'The Palms (nearby)', url: 'https://thepalmsmall.com/' }
                ],
                whatToEat: [
                    { name: 'Gourmet dining', url: 'https://www.instagram.com/hsegourmet/' },
                    { name: 'Fine cafes' }
                ],
                sports: [
                    { name: 'Beyond Fitness', type: 'Gym', url: 'https://beyondfitnessng.com/' },
                    { name: 'EliteBox Fitness (nearby)', type: 'Other' }
                ]
            },
            'Ozumba Mbadiwe': {
                placesToVisit: [
                    { name: 'Lagos Oriental Hotel', url: 'https://www.lagosoriental.com/' },
                    { name: 'The Civic Center', url: 'https://civiccentre.com/' },
                    { name: 'Five Cowries Creek view' }
                ],
                whatToEat: [
                    { name: 'Huazhou Chinese Restaurant', url: 'https://www.instagram.com/huazhoulagos/' },
                    { name: 'Rooftop dining ORIENTAL HOTEL' }
                ],
                sports: [
                    { name: 'Waterfront jogging', type: 'Other' },
                    { name: 'Eko Gym', type: 'Gym' }
                ]
            },
            'Akin Adesola': {
                placesToVisit: [
                    { name: 'Silverbird Galleria', url: 'https://silverbirdgalleria.com/' },
                    { name: 'Bar Beach axis' }
                ],
                whatToEat: [
                    { name: 'Chocolat Royal', url: 'https://www.instagram.com/chocolatroyal/' },
                    { name: 'Indigo Restaurant', url: 'https://www.instagram.com/indigolagos/' }
                ],
                sports: [
                    { name: 'Akin Adesola jogging', type: 'Other' }
                ]
            },
            'Kofo Abayomi': {
                placesToVisit: [
                    { name: 'Lotus Fitness and Health (nearby)', url: 'https://www.instagram.com/lotusfitnessandhealth/' },
                    { name: 'Embassy belt gardens' }
                ],
                whatToEat: [
                    { name: 'Quiet garden cafes' },
                    { name: 'Fine dining on Kofo Abayomi' }
                ],
                sports: [
                    { name: 'Lotus Fitness', type: 'Gym', url: 'https://www.lotuslifeng.com/' }
                ]
            },
            'Water Front': {
                placesToVisit: [
                    { name: 'Water Front commercial corridor' },
                    { name: 'Victoria Island heritage landmarks & architecture' },
                    { name: 'Banks, offices & business hubs' },
                ],
                whatToEat: [
                    { name: 'Quick-serve restaurants & lunch joints' },
                    { name: 'Street buka & canteen options' },
                    { name: 'Fine dining on nearby waterfront' },
                ],
                sports: [
                    { name: 'Nearby indoor recreation center', type: 'Other' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.4253, lng: 3.4411 },
    },
    {
        id: 'oniru',
        name: 'Oniru',
        description: {
            en: 'Upscale and close to VI/Lekki. Great beach access.',
            pidgin: 'Big man area close to VI. Beach house vibes.',
            yo: 'Ipo giga ati isunmọ si VI/Lekki. Wiwọle eti okun nla.',
            ig: 'Mpaghara dị elu ma dị nso na VI/Lekki. Ụzọ mbata osimiri ya dị mma.',
            ha: 'Yankin masu kudi dake kusa da VI/Lekki. Akwai damar zuwa bakin teku cikin sauki.'
        },
        priceRange: {
            en: "₦4m - ₦8m (Apartment)",
            pidgin: "₦4m - ₦8m (Apartment)",
            yo: "₦4m - ₦8m (Iyaba)",
            ig: "₦4m - ₦8m (Ụlọ)",
            ha: "₦4m - ₦8m (Apartment)"
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
                pidgin: "Beach neighbor. 'Life set well with beach for your back and mall for your side. Everywhere cool.'",
                yo: "Aladugbo eti okun. 'Igbesi aye giga pẹlu iraye si lẹsẹkẹsẹ si awọn eti okun ikọkọ ati Ile-itaja rira Palms.'",
                ig: "Onye agbata obi osimiri. 'Obibi mara mma nwere ụzọ mbata gaa n’osimiri ndị nwere nchekwa na ụlọ ahịa Palms.'",
                ha: "Maƙwabcin bakin teku. 'Rayuwa ta alfarma tare da damar shiga bakin teku masu zaman kansu da Palms Shopping Mall cikin sauki.'"
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
            },
            'Palms Axis': {
                placesToVisit: [
                    { name: 'Palms Axis, Oniru' },
                    { name: 'Local market in Palms Axis' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Beach Front': {
                placesToVisit: [
                    { name: 'Beach Front waterfront' },
                    { name: 'Lagoon / riverside viewpoint' },
                    { name: 'Oniru beach / creek access' },
                ],
                whatToEat: [
                    { name: 'Fresh fish pepper soup (waterfront stalls)' },
                    { name: 'Grilled fish & fresh seafood joints' },
                    { name: 'Smoked fish market stalls' },
                ],
                sports: [
                    { name: 'Lagoon boat rides & water sports', type: 'Other' },
                    { name: 'Community beach football', type: 'Football' },
                    { name: 'Swimming & fishing activities', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.4357, lng: 3.4475 },
    },

    {
        id: 'chevy_view',
        name: 'Chevy View',
        description: {
            en: 'Nice estate vibe near Chevron.',
            pidgin: 'Correct estate vibe near Chevron.',
            yo: 'Vibe estate to dara nitosi Chevron.',
            ig: 'Ebe obibi mara mma dị nso na Chevron.',
            ha: 'Yankin gida mai kyau kusa da Chevron.'
        },
        priceRange: {
            en: "₦2.5m - ₦4.5m (Terrace)",
            pidgin: "₦2.5m - ₦4.5m (Terrace)",
            yo: "₦2.5m - ₦4.5m (Terrace)",
            ig: "₦2.5m - ₦4.5m (Terrace)",
            ha: "₦2.5m - ₦4.5m (Terrace)"
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
                pidgin: "Chevron neighbor. 'Security estate set. Everywhere silence but Toll gate traffic fit show you shege. Pipo wey get sense full here.'",
                yo: "Aladugbo Chevron. 'Agbegbe ti o ni aabo. Idakeji pupọ ṣugbọn ṣọra fun ijabọ ọna toll. Ọpọlọpọ awọn akosemose ọdọ n gbe nibi.'",
                ig: "Onye agbata obi Chevron. 'Ebe obibi nwere nchekwa. Ọ nọ jụụ nke ukwuu mana kpachara anya maka okporo ụzọ toll gate. Ọtụtụ ndị na-eto eto na-arụ ọrụ bi ebe a.'",
                ha: "Maƙwabcin Chevron. 'Al'umma ce mai babban tsaro. Akwai natsuwa sosai amma a kiyayi cunkoson ababen hawa na toll gate. Matasa masu sana'a da yawa suna zaune a nan.'"
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
            },
            'Orchid Road': {
                placesToVisit: [
                    { name: 'Orchid Road corridor' },
                    { name: 'Shops & services along Orchid Road' },
                    { name: 'Local hangout spots near Orchid Road' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
            'Atlantic View Estate': {
                placesToVisit: [
                    { name: 'Atlantic View Estate' },
                    { name: 'Chevy View estate parks & green spaces' },
                    { name: 'Estate recreational & community facilities' },
                ],
                whatToEat: [
                    { name: 'Estate canteen & café' },
                    { name: 'Local suya & grills near estate gate' },
                    { name: 'Restaurants on the nearby main road' },
                ],
                sports: [
                    { name: 'Estate football pitch', type: 'Football' },
                    { name: 'Private estate gym', type: 'Gym' },
                    { name: 'Estate jogging route', type: 'Other' },
                ]
            },
            'North Pointe': {
                placesToVisit: [
                    { name: 'North Pointe, Chevy View' },
                    { name: 'Local market in North Pointe' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.4461, lng: 3.5133 },
    },
    {
        id: 'ogudu',
        name: 'Ogudu',
        description: {
            en: 'Quiet, accessible, and very decent mainland area.',
            pidgin: 'Cool, accessible and sharp mainland area.',
            yo: 'Idakeji, rọrun lati wọle si, ati agbegbe mainland ti o dara pupọ.',
            ig: 'Ebe nọ jụụ, dị mfe ịbata, na mpaghara mainland mara mma.',
            ha: 'Wuri ne mai natsuwa, sauƙin shiga, kuma sanannen yankin mainland.'
        },
        priceRange: {
            en: "₦1.5m - ₦3m (3 Bedroom)",
            pidgin: "₦1.5m - ₦3m (3 Bedroom)",
            yo: "₦1.5m - ₦3m (Iyara mẹta)",
            ig: "₦1.5m - ₦3m (Ime ụlọ atọ)",
            ha: "₦1.5m - ₦3m (Daki 3)"
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
                pidgin: "Correct estate for mainland. 'Security set, road smooth, and everywhere cool. Na big men and people wey don retire full here.'",
                yo: "Ọkan ninu awọn ile-iṣelọpọ mainland ti o ni ṣeto julọ. 'Aabo ti o muna, awọn ọna ti o ni panti, ati idakeji pupọ. Awọn olugbe jẹ ọlọrọ julọ ati awọn ti o ti fẹyìntì.'",
                ig: "Otu n’ime ebe obibi kacha nwee nhazi na mainland. 'Nchebe siri ike, okporo ụzọ dị mma, na mpaghara nọ jụụ. Ndị bi ebe a bụ ndị nwere ego na ndị lara ezumike nká.'",
                ha: "Daya daga cikin gidajen mainland mafi tsari. 'Tsaro mai tsanani, tituna masu kyau, da natsuwa sosai. Yawancin mazauna wurin masu kudi ne da tsofaffin da suka yi ritaya.'"
            },
            'Ogudu Orioke': {
                en: "More budget-friendly and lively. 'Expect more noise and traffic, but it's very central and has great local markets.'",
                pidgin: "Area wey budget friendly. 'Noise and traffic go dey small, but you close to everywhere and market full ground.'",
                yo: "Isuna-ọrẹ diẹ ati larinrin. 'Reti ariwo diẹ sii ati ijabọ, ṣugbọn o jẹ aringbungbun pupọ ati pe o ni awọn ọja agbegbe nla.'",
                ig: "Ọnụ ego ya dị mma ma nwee ntụrụndụ. 'Atụla anya na okporo ụzọ na mkpọtụ ga-adị, mana ọ dị nso n’ebe niile ma nwee ebe ahịa mara mma.'",
                ha: "Ya fi sauƙin kuɗi da kuma daɗi. 'Yi tsammanin ƙarin surutu da zirga-zirga, amma yana tsakiyar gari kuma yana da manyan kasuwannin gida.'"
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
            },
            'Ogudu Mall': {
                placesToVisit: [
                    { name: 'Ogudu Mall, Ogudu' },
                    { name: 'Local market in Ogudu Mall' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Ramatu Street': {
                placesToVisit: [
                    { name: 'Ramatu Street' },
                    { name: 'Ogudu estate parks & green spaces' },
                    { name: 'Estate recreational & community facilities' },
                ],
                whatToEat: [
                    { name: 'Estate canteen & café' },
                    { name: 'Local suya & grills near estate gate' },
                    { name: 'Restaurants on the nearby main road' },
                ],
                sports: [
                    { name: 'Estate football pitch', type: 'Football' },
                    { name: 'Private estate gym', type: 'Gym' },
                    { name: 'Estate jogging route', type: 'Other' },
                ]
            },
            'Victoria Street': {
                placesToVisit: [
                    { name: 'Victoria Street corridor' },
                    { name: 'Shops & services along Victoria Street' },
                    { name: 'Local hangout spots near Victoria Street' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.5771, lng: 3.3905 },
    },
    {
        id: 'mushin',
        name: 'Mushin',
        description: {
            en: 'For the strong hearted. Maximum hustle.',
            pidgin: 'If you get mind. Na layout for hustle.',
            yo: 'Fún àwọn onígboyà. Hustle pọ̀ gidigidi.',
            ig: 'Maka ndị nwere obi ike. Ebe a bụ nanị maka ịgba mbọ.',
            ha: 'Ga masu karfin zuciya. Akwai fafutuka sosai nan.'
        },
        priceRange: {
            en: "₦200k - ₦400k (Room)",
            pidgin: "₦200k - ₦400k (Room)",
            yo: "₦200k - ₦400k (Iyara kan)",
            ig: "₦200k - ₦400k (Ụlọ)",
            ha: "₦200k - ₦400k (Daki 1)"
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
                pidgin: "Small Lekki for inside Mushin. 'Everywhere set small and pipo wey get small change full here. E close to everywhere.'",
                yo: "'Lekki' ti Mushin. 'Ọna ti o rọrun ati ṣeto diẹ sii ju iyoku Mushin lọ. Olokiki pẹlu awọn ti n gba owo ipele aarin ti o fẹ lati duro si aringbungbun.'",
                ig: "Ebe kacha mma na Mushin. 'Okporo ụzọ ya dị mma ma nwee nhazi karịa akụkụ Mushin ndị ọzọ. Ndị nwere obere ego na-achọ ịnọ n’etiti obodo na-enwe mmasị ịnọ ebe a.'",
                ha: "'Lekki' na Mushin. 'Tituna suna da kyau kuma yana da tsari fiye da sauran sassan Mushin. Ya shahara da masu matsakaicin kudin shiga wadanda ke son zama a tsakiyar gari.'"
            },
            'Ojuwoye': {
                en: "Market heartbeat. 'One of the busiest trading points in Lagos. Maximum energy and local commerce.'",
                pidgin: "Trading headquarters. 'Everything you want dey here. Energy full ground and local trading full ground.'",
                yo: "Okan oja. 'Ọkan ninu awọn aaye iṣowo ti o nšišẹ julọ ni Lagos. Agbara pọ ati iṣè-ajé agbegbe.'",
                ig: "Isi ebe ahịa. 'Otu n’ime ebe ahịa kacha ekwo ekwo na Lagos. Mmadụ juputara ebe a maka azụmahịa.'",
                ha: "Zuciyar kasuwa. 'Daya daga cikin wuraren ciniki mafi hada-hada a Legas. Akwai kuzari sosai da kasuwancin gida.'"
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
            },
            'Idi-Oro': {
                placesToVisit: [
                    { name: 'Idi-Oro, Mushin' },
                    { name: 'Local market in Idi-Oro' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Olorunsogo': {
                placesToVisit: [
                    { name: 'Olorunsogo, Mushin' },
                    { name: 'Local market in Olorunsogo' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Papa Ajao': {
                placesToVisit: [
                    { name: 'Papa Ajao, Mushin' },
                    { name: 'Local market in Papa Ajao' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Olosha': {
                placesToVisit: [
                    { name: 'Olosha, Mushin' },
                    { name: 'Local market in Olosha' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Challenge': {
                placesToVisit: [
                    { name: 'Challenge nightlife strip' },
                    { name: 'Mushin lounges & event centres' },
                    { name: 'Shopping & lifestyle spots' },
                ],
                whatToEat: [
                    { name: 'Late-night grills & shawarma' },
                    { name: 'Lounge bites & cocktail bars' },
                    { name: 'Premium cafés & brunch spots' },
                ],
                sports: [
                    { name: 'Premium gym studios', type: 'Gym' },
                    { name: 'Indoor sports & recreation', type: 'Other' },
                    { name: 'Tennis clubs', type: 'Tennis' },
                ]
            },
        },
        coords: { lat: 6.5333, lng: 3.3500 },
    },
    {
        id: 'obalende',
        name: 'Obalende',
        description: {
            en: 'Extreme connectivity to everywhere. Very busy.',
            pidgin: 'You fit enter motor to anywhere from here. E busy gan.',
            yo: 'Isopọ pupọ si ibi gbogbo. O nšišẹ pupọ.',
            ig: 'Ejikọtara ya n’ebe niile. Ọ na-ekwo ekwo nke ukwuu.',
            ha: 'Yana da sauƙin haɗuwa da kowane wuri. Akwai hada-hada sosai.'
        },
        priceRange: {
            en: "₦400k - ₦800k (Miniflat)",
            pidgin: "₦400k - ₦800k (Miniflat)",
            yo: "₦400k - ₦800k (Miniflat)",
            ig: "₦400k - ₦800k (Miniflat)",
            ha: "₦400k - ₦800k (Miniflat)"
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
                pidgin: "Food headquarters. 'Real Suya full here. Everywhere busy and noise go dey, but enjoyment set.'",
                yo: "Paradise onje itopon. 'Okan gidi ti Obalende. Ibi ti o dara julọ fun Suya gidi ati Kilishi. O nšišẹ pupọ ati pe o le jẹ rudurudu.'",
                ig: "Ebe nri itọ n’okporo ụzọ. 'Ezigbo mkpụrụ obi Obalende. Ebe kacha mma maka Suya na Kilishi nke mbụ. Ọ na-ekwo ekwo nke ukwuu ma nwee ike imetụ mkpọtụ.'",
                ha: "Saman abinci na titi. 'Zuciyar Obalende ta gaskiya. Wuri mafi kyau don Suya da Kilishi na asali. Akwai hada-hada sosai kuma yana iya zama barkatai.'"
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
            },
            'South-West Ikoyi Border': {
                placesToVisit: [
                    { name: 'South-West Ikoyi Border transit & connecting axis' },
                    { name: 'Local market near South-West Ikoyi Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Mammy Market': {
                placesToVisit: [
                    { name: 'Mammy Market Market' },
                    { name: 'Obalende commercial hub' },
                    { name: 'Wholesale stalls & trading spots' },
                ],
                whatToEat: [
                    { name: 'Mama-put buka spots' },
                    { name: 'Amala & ewedu (market canteen)' },
                    { name: 'Street moi-moi, puff-puff & akara' },
                ],
                sports: [
                    { name: 'Nearby community football pitch', type: 'Football' },
                    { name: 'Local gym near market area', type: 'Gym' },
                ]
            },
            'Keffi Street': {
                placesToVisit: [
                    { name: 'Keffi Street corridor' },
                    { name: 'Shops & services along Keffi Street' },
                    { name: 'Local hangout spots near Keffi Street' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
            'St. Gregorys Road': {
                placesToVisit: [
                    { name: 'St. Gregorys Road corridor' },
                    { name: 'Shops & services along St. Gregorys Road' },
                    { name: 'Local hangout spots near St. Gregorys Road' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.4526, lng: 3.4093 },
    },
    {
        id: 'agege',
        name: 'Agege',
        description: {
            en: 'Lively and affordable with the train station nearby.',
            pidgin: 'Everywhere stew. Train station dey and e cheap.',
            yo: 'Larinrin ati ti ifarada pẹlu ibudo ọkọ oju-irin nitosi.',
            ig: 'Ọ na-ekwo ekwo ma ọnụ ego ya dị mma n’ihi ọdụ ụgbọ okporo ígwè dị nso.',
            ha: 'Akwai hada-hada kuma yana da sauƙin kuɗi tare da tashar jirgin ƙasa dake kusa.'
        },
        priceRange: {
            en: "₦300k - ₦600k (2 Bedroom)",
            pidgin: "₦300k - ₦600k (2 Bedroom)",
            yo: "₦300k - ₦600k (Iyara meji)",
            ig: "₦300k - ₦600k (Ime ụlọ abụọ)",
            ha: "₦300k - ₦600k (Daki 2)"
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
                pidgin: "Center point. 'Flyover don make waka easy but market still be the heartbeat. Energy set here.'",
                yo: "Afara si ohun gbogbo. 'Ipele agbara-giga. Flyover tuntun ti yi ere naa pada, ṣugbọn awọn ọja ita tun jẹ ọkan.'",
                ig: "Àkwà mmiri na-ejikọ ebe niile. 'Ebe nwere nnukwu ume. Àkwà mmiri flyover ọhụrụ ahụ emeela ka ihe gbanwee, mana mpaghara ahịa n’okporo ụzọ ka bụ mkpụrụ obi ya.'",
                ha: "Gadar zuwa kowane wuri. 'Wuri ne mai kuzari sosai. Sabuwar gadar sama ta canza komai, amma kasuwannin titi har yanzu su ne zuciyar wurin.'"
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
            },
            'Dopemu': {
                placesToVisit: [
                    { name: 'Dopemu, Agege' },
                    { name: 'Local market in Dopemu' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Orile Agege': {
                placesToVisit: [
                    { name: 'Orile Agege, Agege' },
                    { name: 'Local market in Orile Agege' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Mulero': {
                placesToVisit: [
                    { name: 'Mulero, Agege' },
                    { name: 'Local market in Mulero' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Alfa Nla': {
                placesToVisit: [
                    { name: 'Alfa Nla, Agege' },
                    { name: 'Local market in Alfa Nla' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.6170, lng: 3.3209 },
    },
    {
        id: 'ojota',
        name: 'Ojota',
        description: {
            en: 'Central connector. Good for BRT access.',
            pidgin: 'Center point. BRT full here well.',
            yo: 'Asopọ aringbungbun. O dara fun wiwọle BRT.',
            ig: 'Ebe njikọ dị n’etiti. Ọ dị mma maka ịbata na BRT.',
            ha: 'Mai haɗa tsakiyar gari. Yana da kyau don samun damar shiga BRT.'
        },
        priceRange: {
            en: "₦400k - ₦800k (Miniflat)",
            pidgin: "₦400k - ₦800k (Miniflat)",
            yo: "₦400k - ₦800k (Miniflat)",
            ig: "₦400k - ₦800k (Miniflat)",
            ha: "₦400k - ₦800k (Miniflat)"
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
                pidgin: "Waka terminal. 'BRT plenty and motors wey dey go outside Lagos full here. Energy 100.'",
                yo: "Ibudo gbigbe. 'Ibudo BRT ti o nšišẹ ati aaye asopọ fun awọn aririn ajo ti n wọle tabi ti n kuro ni Lagos.'",
                ig: "Ebe njikọ njem. 'Ọdụ ụgbọ BRT na-ekwo ekwo na ebe njikọ maka ndị na-eme njem na-abata ma ọ bụ na-ahapụ Lagos.'",
                ha: "Wurin sufuri. 'Babban tashar BRT da wurin haɗin gwiwa ga matafiya masu shiga ko barin Legas.'"
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
            },
            'Olusosun': {
                placesToVisit: [
                    { name: 'Olusosun, Ojota' },
                    { name: 'Local market in Olusosun' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Ojota Bus Park': {
                placesToVisit: [
                    { name: 'Ojota Bus Park transit & connecting axis' },
                    { name: 'Local market near Ojota Bus Park' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Ogudu Road Entrance': {
                placesToVisit: [
                    { name: 'Ogudu Road Entrance corridor' },
                    { name: 'Shops & services along Ogudu Road Entrance' },
                    { name: 'Local hangout spots near Ogudu Road Entrance' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.5815, lng: 3.3860 },
    },
    {
        id: 'berger',
        name: 'Berger',
        description: {
            en: 'Gateway to Lagos. Good for frequent travelers.',
            pidgin: 'Entrance to Lagos. Good if you dey travel often.',
            yo: 'Ọna abajade si Lagos. O dara fun awọn aririn ajo loorekoore.',
            ig: 'Ọnụ ụzọ mbata Lagos. Ọ dị mma maka ndị na-eme njem mgbe niile.',
            ha: 'Ƙofar shiga Legas. Yana da kyau ga matafiya akai-akai.'
        },
        priceRange: {
            en: "₦500k - ₦1m (2 Bedroom)",
            pidgin: "₦500k - ₦1m (2 Bedroom)",
            yo: "₦500k - ₦1m (Iyara meji)",
            ig: "₦500k - ₦1m (Ime ụlọ abụọ)",
            ha: "₦500k - ₦1m (Daki 2)"
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
                pidgin: "Lagos gate. 'Motors full ground for people wey dey travel. Expressway vibe plenty.'",
                yo: "Ọna abajade si Lagos. 'Ibudo iṣẹ fun awọn aririn ajo ati awọn ti n kọja ni opopona Lagos-Ibadan.'",
                ig: "Ọnụ ụzọ mbata Lagos. 'Ebe a na-enwe ọtụtụ ọrụ maka ndị na-eme njem n’okporo ụzọ awara awara nke Lagos-Ibadan.'",
                ha: "Ƙofar shiga Legas. 'Wurin hada-hada ga matafiya da masu zirga-zirga a kan babban titin Legas zuwa Ibadan.'"
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
            },
            'Isheri-Olowora': {
                placesToVisit: [
                    { name: 'Isheri-Olowora, Berger' },
                    { name: 'Local market in Isheri-Olowora' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Omole Phase 2 Entrance': {
                placesToVisit: [
                    { name: 'Omole Phase 2 Entrance' },
                    { name: 'Berger estate parks & green spaces' },
                    { name: 'Estate recreational & community facilities' },
                ],
                whatToEat: [
                    { name: 'Estate canteen & café' },
                    { name: 'Local suya & grills near estate gate' },
                    { name: 'Restaurants on the nearby main road' },
                ],
                sports: [
                    { name: 'Estate football pitch', type: 'Football' },
                    { name: 'Private estate gym', type: 'Gym' },
                    { name: 'Estate jogging route', type: 'Other' },
                ]
            },
            'Kara': {
                placesToVisit: [
                    { name: 'Kara, Berger' },
                    { name: 'Local market in Kara' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Long Bridge': {
                placesToVisit: [
                    { name: 'Long Bridge, Berger' },
                    { name: 'Local market in Long Bridge' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.6500, lng: 3.3700 },
    },
    {
        id: 'ikeja',
        name: 'Ikeja',
        description: {
            en: 'The capital. Commercial, happening, and central.',
            pidgin: 'Alausa level. Business full everywhere and e central.',
            yo: 'Olu-ilu. Iṣowo, ṣẹlẹ, ati aringbungbun.',
            ig: 'Isi obodo Lagos. Mpaghara azụmahịa, mmemme, na ebe njikọ.',
            ha: 'Babban birnin. Kasuwanci, abubuwan da ke faruwa, da tsakiyar gari.'
        },
        priceRange: {
            en: "₦1.5m - ₦3m (2 Bedroom)",
            pidgin: "₦1.5m - ₦3m (2 Bedroom)",
            yo: "₦1.5m - ₦3m (Iyara meji)",
            ig: "₦1.5m - ₦3m (Ime ụlọ abụọ)",
            ha: "₦1.5m - ₦3m (Daki 2)"
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
            pidgin: "Fela Kuti house wey turn museum dey here. Abami Eda spirit still dey ground.",
            yo: "O gbalejo Ile-musiọmu olu-ilu Kalakuta, ile iṣaaju ti arosọ Fela Kuti.",
            ig: "Ọ nwere ụlọ ihe nka Kalakuta Republic, ebe obibi ochie nke onye ama ama bụ Fela Kuti.",
            ha: "Tana dauke da gidan tarihi na Kalakuta Republic, tsohon gidan fitaccen mawakin nan Fela Kuti."
        },
        innerLocalities: ['Alausa', 'Opebi', 'Allen Avenue', 'Computer Village', 'Agidingbi', 'Toyin Street'],
        subLocalityInsights: {
            'Alausa': {
                en: "The Seat of Power. 'Home to ICM and the Governor's office. Very secure but don't even think of parking on the road. Traffic is mostly controlled.'",
                pidgin: "Government base. 'ICM Mall dey here. Security set but no try park for road. Traffic dey follow command for here.'",
                yo: "Ibujoko Agbara. 'Ile si ICM ati ọfiisi gomina. Ni aabo pupọ ṣugbọn maṣe ronu paapaa ti gbigbe si oju ọna. Ijabọ jẹ iṣakoso pupọ julọ.'",
                ig: "Isi oche ike. 'Ebe obibi ICM na ụlọ ọrụ gọvanọ. Ọ nwere nchekwa nke ukwuu mana atụla anya na ị ga-adọba ụgbọala n’okporo ụzọ. A na-achịkwa okporo ụzọ nke ukwuu.'",
                ha: "Wurin Ikon Gari. 'Gidan ICM da ofishin Gwamna. Akwai tsaro sosai amma kada ma ku yi tunanin yin fakin a kan titi. Ana sarrafa cunkoson ababen hawa sosai.'"
            },
            'Opebi': {
                en: "Residential luxury. 'Beautiful houses and great restaurants. Quiet compared to Allen, but the hills can be tricky during heavy rain.'",
                pidgin: "Big man ground. 'House set and food full ground. E cool pass Allen but some roads fit get small water if rain heavy.'",
                yo: "Igbadun ibugbe. 'Awọn ile lẹwa ati awọn ile ounjẹ nla. Idakeji akawe si Allen, ṣugbọn awọn oke le jẹ ẹtan lakoko ojo nla.'",
                ig: "Mpaghara obibi dị elu. 'Ụlọ ndị mara mma na ebe nri ndị dị mma. Ọ nọ jụụ karịa Allen, mana ebe mgbago ya nwere ike ịdị rịrị rịrị n’oge nnukwu mmiri ozuzo.'",
                ha: "Rayuwar alfarma. 'Kyawawan gidaje da manyan gidajen abinci. Akwai natsuwa idan aka kwatanta da Allen, amma tuddai na iya zama da wahala lokacin babban ruwan sama.'"
            },
            'Allen Avenue': {
                en: "The commercial legendary. 'The home of upscale business and nightlife on the mainland. Always bubbling and centrally located.'",
                pidgin: "Business and jaiye road. 'Allen set for anything business and night life. Everywhere bubbling and Ikeja center na here.'",
                yo: "Arosọ iṣowo. 'Ile ti iṣowo giga ati igbesi aye alẹ lori mainland. Nigbagbogbo n riru ati aringbungbun ti o wa.'",
                ig: "Ebe azụmahịa ama ama. 'Ebe obibi maka azụmahịa dị elu na ntụrụndụ abalị na mainland. Ọ na-ekwo ekwo mgbe niile ma dị n’etiti obodo.'",
                ha: "Garin kasuwanci na tarihi. 'Gidan manyan kasuwanci da rayuwar dare a kan mainland. Koyaushe akwai hada-hada kuma yana tsakiyar gari.'"
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
            },
            'Computer Village': {
                placesToVisit: [
                    { name: 'Computer Village nightlife strip' },
                    { name: 'Ikeja lounges & event centres' },
                    { name: 'Shopping & lifestyle spots' },
                ],
                whatToEat: [
                    { name: 'Late-night grills & shawarma' },
                    { name: 'Lounge bites & cocktail bars' },
                    { name: 'Premium cafés & brunch spots' },
                ],
                sports: [
                    { name: 'Premium gym studios', type: 'Gym' },
                    { name: 'Indoor sports & recreation', type: 'Other' },
                    { name: 'Tennis clubs', type: 'Tennis' },
                ]
            },
            'Agidingbi': {
                placesToVisit: [
                    { name: 'Agidingbi, Ikeja' },
                    { name: 'Local market in Agidingbi' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Toyin Street': {
                placesToVisit: [
                    { name: 'Toyin Street nightlife strip' },
                    { name: 'Ikeja lounges & event centres' },
                    { name: 'Shopping & lifestyle spots' },
                ],
                whatToEat: [
                    { name: 'Late-night grills & shawarma' },
                    { name: 'Lounge bites & cocktail bars' },
                    { name: 'Premium cafés & brunch spots' },
                ],
                sports: [
                    { name: 'Premium gym studios', type: 'Gym' },
                    { name: 'Indoor sports & recreation', type: 'Other' },
                    { name: 'Tennis clubs', type: 'Tennis' },
                ]
            },
        },
        coords: { lat: 6.5922, lng: 3.3422 },
    },
    {
        id: 'chevron',
        name: 'Chevron',
        description: {
            en: 'Around the Chevron drive. Good estates and security.',
            pidgin: 'Round Chevron drive. Correct estates and security guaranteed.',
            yo: 'Ni ayika opopona Chevron. Awọn ile ti o dara ati aabo.',
            ig: 'Gburugburu okporo ụzọ Chevron. Ebe obibi dị mma na nchekwa.',
            ha: 'Kusa da titin Chevron. Akwai babban tsaro da kyawawan gidaje.'
        },
        priceRange: {
            en: "₦3m - ₦5m (Terrace/Flat)",
            pidgin: "₦3m - ₦5m (Terrace/Flat)",
            yo: "₦3m - ₦5m (Terrace/Flat)",
            ig: "₦3m - ₦5m (Terrace/Flat)",
            ha: "₦3m - ₦5m (Terrace/Flat)"
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
                pidgin: "Big boy base. 'Estate full everywhere near Chevron office. Security tight, neighbors get level.'",
                yo: "Agbegbe ajọ. 'Awọn agbegbe ti o ni ẹnu-ọna ti o yika HQ Chevron. Ni aabo, ọjọgbọn, ati idakeji.'",
                ig: "Mpaghara ụlọ ọrụ. 'Ebe obibi nwere nchekwa gburugburu isi ụlọ ọrụ Chevron. Ọ nwere nchekwa, ndị ọkachamara bi ebe ahụ, ma nọ jụụ.'",
                ha: "Wurin manya. 'Unguwanni masu babban tsaro dake kusa da ofishin Chevron. Akwai tsaro, kwararru ne mazauna wurin kuma akwai natsuwa.'"
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
            },
            'Lekki Gardens': {
                placesToVisit: [
                    { name: 'Lekki Gardens' },
                    { name: 'Chevron estate parks & green spaces' },
                    { name: 'Estate recreational & community facilities' },
                ],
                whatToEat: [
                    { name: 'Estate canteen & café' },
                    { name: 'Local suya & grills near estate gate' },
                    { name: 'Restaurants on the nearby main road' },
                ],
                sports: [
                    { name: 'Estate football pitch', type: 'Football' },
                    { name: 'Private estate gym', type: 'Gym' },
                    { name: 'Estate jogging route', type: 'Other' },
                ]
            },
            'Ocean Bay': {
                placesToVisit: [
                    { name: 'Ocean Bay, Chevron' },
                    { name: 'Local market in Ocean Bay' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Orchid Road': {
                placesToVisit: [
                    { name: 'Orchid Road corridor' },
                    { name: 'Shops & services along Orchid Road' },
                    { name: 'Local hangout spots near Orchid Road' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
            'LBS Neighborhood': {
                placesToVisit: [
                    { name: 'LBS Neighborhood, Chevron' },
                    { name: 'Local market in LBS Neighborhood' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.4442, lng: 3.5152 },
    },
    {
        id: 'festac',
        name: 'Festac',
        description: {
            en: 'Historic town with good planning and community.',
            pidgin: 'Old school vibes with better plan and community.',
            yo: 'Ilu itan pẹlu eto to dara ati agbegbe.',
            ig: 'Obodo oge ochie nwere ezigbo nhazi na ndi bi na ya nwere nchekwa.',
            ha: 'Gari ne mai tarihi dake da kyakkyawan tsari da hadin kan mazauna.'
        },
        priceRange: {
            en: "₦700k - ₦1.5m (3 Bedroom)",
            pidgin: "₦700k - ₦1.5m (3 Bedroom)",
            yo: "₦700k - ₦1.5m (Iyara mẹta)",
            ig: "₦700k - ₦1.5m (Ime ụlọ atọ)",
            ha: "₦700k - ₦1.5m (Daki 3)"
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
            '1st Avenue': {
                en: "The gateway to Festac. 'Broad streets, iconic 777 apartments, and a residential soul that has lasted decades.'",
                pidgin: "Festac gate. 'Road wide well well. Old apartments full ground and everywhere get history. Life for here calm.'",
                yo: "Oju-ọna si Festac. 'Awọn opopona gbooro, awọn iyẹwu 777 aami, ati ẹmi ibugbe ti o ti pẹ fun awọn ọdun mẹwa.'",
                ig: "Ọnụ ụzọ Festac. 'Okporo ụzọ sara mbara, ụlọ 777 ama ama, na mmụọ obibi nke nọworo ọtụtụ iri afọ.'",
                ha: "Mashata zuwa Festac. 'Faffadan tituna, gidajen kwanan dalibai 777 na rayuwar mazauna da ta dade shekaru da yawa.'"
            }
        },
        subLocalityDetails: {
            '1st Avenue': {
                placesToVisit: [
                    { name: '1st Avenue axis' },
                    { name: 'Festac Mall', url: 'https://www.festivalmall.com.ng/' },
                    { name: 'Cultural buildings' },
                    { name: 'Festac Town Park & Gardens' }
                ],
                whatToEat: [
                    { name: 'Local grills' },
                    { name: 'Buka joints' },
                    { name: 'Neighbourhood buka rice & stew' },
                    { name: 'Evening suya & grills' }
                ],
                sports: [
                    { name: 'Festac community football pitch', type: 'Football' },
                    { name: 'Estate jogging route', type: 'Other' },
                    { name: 'Private estate gym', type: 'Gym' },
                    { name: 'Basketball courts', type: 'Basketball' }
                ]
            },
            '2nd Avenue': {
                placesToVisit: [
                    { name: '2nd Avenue, Festac Town' },
                    { name: 'Festac Town Park & Gardens' },
                    { name: 'Community recreational hall' },
                ],
                whatToEat: [
                    { name: 'Neighbourhood buka rice & stew' },
                    { name: 'Evening suya & grills' },
                    { name: 'Fast food on Festac main road' },
                ],
                sports: [
                    { name: 'Festac community football pitch', type: 'Football' },
                    { name: 'Estate jogging route', type: 'Other' },
                    { name: 'Private estate gym', type: 'Gym' },
                ]
            },
            '3rd Avenue': {
                placesToVisit: [
                    { name: '3rd Avenue, Festac Town' },
                    { name: 'Festac Town Park & Gardens' },
                    { name: 'Community recreational hall' },
                ],
                whatToEat: [
                    { name: 'Neighbourhood buka rice & stew' },
                    { name: 'Evening suya & grills' },
                    { name: 'Fast food on Festac main road' },
                ],
                sports: [
                    { name: 'Festac community football pitch', type: 'Football' },
                    { name: 'Estate jogging route', type: 'Other' },
                    { name: 'Private estate gym', type: 'Gym' },
                ]
            },
            '4th Avenue': {
                placesToVisit: [
                    { name: '4th Avenue, Festac Town' },
                    { name: 'Festac Town Park & Gardens' },
                    { name: 'Community recreational hall' },
                ],
                whatToEat: [
                    { name: 'Neighbourhood buka rice & stew' },
                    { name: 'Evening suya & grills' },
                    { name: 'Fast food on Festac main road' },
                ],
                sports: [
                    { name: 'Festac community football pitch', type: 'Football' },
                    { name: 'Estate jogging route', type: 'Other' },
                    { name: 'Private estate gym', type: 'Gym' },
                ]
            },
            '5th Avenue': {
                placesToVisit: [
                    { name: '5th Avenue, Festac Town' },
                    { name: 'Festac Town Park & Gardens' },
                    { name: 'Community recreational hall' },
                ],
                whatToEat: [
                    { name: 'Neighbourhood buka rice & stew' },
                    { name: 'Evening suya & grills' },
                    { name: 'Fast food on Festac main road' },
                ],
                sports: [
                    { name: 'Festac community football pitch', type: 'Football' },
                    { name: 'Estate jogging route', type: 'Other' },
                    { name: 'Private estate gym', type: 'Gym' },
                ]
            },
            '6th Avenue': {
                placesToVisit: [
                    { name: '6th Avenue, Festac Town' },
                    { name: 'Festac Town Park & Gardens' },
                    { name: 'Community recreational hall' },
                ],
                whatToEat: [
                    { name: 'Neighbourhood buka rice & stew' },
                    { name: 'Evening suya & grills' },
                    { name: 'Fast food on Festac main road' },
                ],
                sports: [
                    { name: 'Festac community football pitch', type: 'Football' },
                    { name: 'Estate jogging route', type: 'Other' },
                    { name: 'Private estate gym', type: 'Gym' },
                ]
            },
            '7th Avenue': {
                placesToVisit: [
                    { name: '7th Avenue, Festac Town' },
                    { name: 'Festac Town Park & Gardens' },
                    { name: 'Community recreational hall' },
                ],
                whatToEat: [
                    { name: 'Neighbourhood buka rice & stew' },
                    { name: 'Evening suya & grills' },
                    { name: 'Fast food on Festac main road' },
                ],
                sports: [
                    { name: 'Festac community football pitch', type: 'Football' },
                    { name: 'Estate jogging route', type: 'Other' },
                    { name: 'Private estate gym', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.4622, lng: 3.2822 },
    },
    {
        id: 'gbagada',
        name: 'Gbagada',
        description: {
            en: "Centrally located on the mainland. Great for families and commute.",
            pidgin: "Center of Lagos Mainland. E good for family and movement set.",
            yo: "Ti o wa ni aringbungbun lori olu-ilu. Nla fun awọn idile ati commute.",
            ig: "Ọ dị n’etiti n’ime ala. Ọ dị mma maka ezinụlọ na njem.",
            ha: "Yana tsakiyar babban tili. Wuri ne mai kyau ga iyalai da zirga-zirga."
        },
        priceRange: {
            en: "₦1.5m - ₦3.5m (2 Bedroom)",
            pidgin: "₦1.5m - ₦3.5m (2 Bedroom)",
            yo: "₦1.5m - ₦3.5m (Iyara meji)",
            ig: "₦1.5m - ₦3.5m (Ime ụlọ abụọ)",
            ha: "₦1.5m - ₦3.5m (Daki 2)"
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
                pidgin: "Jeje area. 'Security set. Medina and Atunrase na the best spots for family. People wey get sense full here.'",
                yo: "Ibugbe ogbo. 'Idakẹjẹ ati aabo. Medina ati Atunrase estates jẹ ilẹ ti o dara julọ nibi fun awọn idile. Ogunlọgọ ti o dagba.'",
                ig: "Ebe obibi tozuru oke. 'Ọ dị jụụ ma nwee nchekwa. Medina na Atunrase estates bụ ebe kacha mma maka ezinụlọ. Ndị tozuru oke bi ebe a.'",
                ha: "Yankin manya. 'Akwai natsuwa da tsaro. Medina da Atunrase sune mafi kyau ga iyalai a nan. Manya ne kawai ke zama a nan.'"
            },
            'Phase 1': {
                en: "Commercial & Active. 'Close to the Gbagada General Hospital and the main bus stops. Faster pace than Phase 2 but very convenient.'",
                pidgin: "Hustle ground. 'Near hospital and bus stop. Movement sharp pass Phase 2 but everything near you for here.'",
                yo: "Iṣowo & Nṣiṣẹ. 'Sunmọ Ile-iwosan Gbogbogbo Gbagada ati awọn iduro ọkọ ayọkẹlẹ akọkọ. Iyara yiyara ju Ipele 2 lọ ṣugbọn o rọrun pupọ.'",
                ig: "Azụmahịa na-ekwo ekwo. 'Dị nso na Gbagada General Hospital na ebe ndị ụgbọala na-akwụsị. Ọ na-ekwo ekwo karịa Phase 2 mana ọ dị mma nke ukwuu.'",
                ha: "Hada-hada da Kasuwanci. 'Kusa da Babban Asibitin Gbagada da manyan titeshin mota. Sauri ne fiye da Phase 2 amma akwai sauurin samun komai.'"
            },
            'Gbagada Phase 2': {
                en: "Residential central. 'Quiet, secure, and perfectly positioned for both Island and Mainland access.'",
                pidgin: "Center point. 'Everywhere quiet, security tight. You fit enter Island or Mainland sharply from here.'",
                yo: "Ibugbe aringbungbun. 'Idakẹjẹ, aabo, ati ni ipo pipe fun mejeeji Island ati wiwọle Mainland.'",
                ig: "Ebe obibi dị n’etiti. 'Ọ dị jụụ, nwee nchekwa, ma nwee ezigbo njikọ na Island na Mainland.'",
                ha: "Tsakiyar gidaje. 'Akwai natsuwa, tsaro, kuma yana da kyau don samun damar zuwa Tsibirin da kuma babban tili.'"
            }
        },
        subLocalityDetails: {
            'Gbagada Phase 2': {
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
            'Gbagada Phase 1': {
                placesToVisit: [
                    { name: 'Gbagada Phase 1' },
                    { name: 'Gbagada estate parks & green spaces' },
                    { name: 'Estate recreational & community facilities' },
                ],
                whatToEat: [
                    { name: 'Estate canteen & café' },
                    { name: 'Local suya & grills near estate gate' },
                    { name: 'Restaurants on the nearby main road' },
                ],
                sports: [
                    { name: 'Estate football pitch', type: 'Football' },
                    { name: 'Private estate gym', type: 'Gym' },
                    { name: 'Estate jogging route', type: 'Other' },
                ]
            },
            'Medina Estate': {
                placesToVisit: [
                    { name: 'Medina Estate Park' },
                    { name: 'Gbagada Phase 2 (nearby)' }
                ],
                whatToEat: [
                    { name: 'Estate canteen' },
                    { name: 'Local grills near gate' }
                ],
                sports: [
                    { name: 'Estate jogging', type: 'Other' },
                    { name: 'Private estate gym', type: 'Gym' }
                ]
            },
            'Ifako-Gbagada': {
                placesToVisit: [
                    { name: 'Gbagada General Hospital axis' },
                    { name: 'Ifako Busy junction' }
                ],
                whatToEat: [
                    { name: 'KFC Gbagada', url: 'https://www.facebook.com/KFC-Gbagada-100247968565251/' },
                    { name: 'Domino\'s Pizza Gbagada', url: 'https://www.dominos.ng/' },
                    { name: 'Street bole & grills' }
                ],
                sports: [
                    { name: 'Roadside gyms', type: 'Gym' },
                    { name: 'Community football', type: 'Football' }
                ]
            },
            'Atunrase': {
                placesToVisit: [
                    { name: 'Atunrase, Gbagada' },
                    { name: 'Local market in Atunrase' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Soluyi': {
                placesToVisit: [
                    { name: 'Soluyi, Gbagada' },
                    { name: 'Local market in Soluyi' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.5522, lng: 3.3922 },
    },
    {
        id: 'anthony',
        name: 'Anthony Village',
        description: {
            en: "Quiet, accessible, and well-structured mainland neighborhood.",
            pidgin: "Jeje area wey road enter well. E set nicely.",
            yo: "Idakẹjẹ, wiwọle, ati adugbo mainland daradara.",
            ig: "Obodo nwere nhazi dị mma ma dị mfe mbata n’ime ala. Ọ dị jụụ.",
            ha: "Yankin babban tili mai natsuwa, sauƙin shiga da tsarin gari mai kyau."
        },
        priceRange: {
            en: "₦1.2m - ₦3m (2 Bedroom)",
            pidgin: "₦1.2m - ₦3m (2 Bedroom)",
            yo: "₦1.2m - ₦3m (Iyara meji)",
            ig: "₦1.2m - ₦3m (Ime ụlọ abụọ)",
            ha: "₦1.2m - ₦3m (Daki 2)"
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
                pidgin: "Mainland secret. 'Island near you, Mainland near you. Everywhere quiet and security set. Middle-class family ground.'",
                yo: "Ere ti o farasin. 'Iyasọtọ si mejeeji Island ati Mainland. Awọn opopona idakẹjẹ ati ailewu pupọ. Nla fun awọn idile arin-kilasi.'",
                ig: "Mma zoro ezo. 'Ọ dị mfe njikọ na Island na Mainland. Okporo ụzọ dị jụụ ma nwee nchekwa. Ọ dị mma maka ezinụlọ ndị nọ n’etiti.'",
                ha: "Wani ɓoyayyen mazauni mai kyau. 'Yana da sauƙin shiga Tsibirin da kuma babban tili. Tituna masu natsuwa da amincin gaske. Kyakkyawan wuri ne ga iyalai masu matsakaicin hali.'"
            },
            'Ajao Estate (Anthony)': {
                en: "Quiet & Secure. 'A well-planned mini-estate with mostly residential houses. Very peaceful and away from the main road noise.'",
                pidgin: "Jeje estate. 'Place arrange well, house full ground. Noise no dey here and security match well.'",
                yo: "Idakẹjẹ & Aabo. 'Mini-estate ti a ṣeto daradara pẹlu awọn ile ibugbe pupọ. Alaafia pupọ ati kuro ninu ariwo opopona akọkọ.'",
                ig: "Ebe dị jụụ ma nwee nchekwa. 'Obere estate nwere nhazi dị mma maka ebe obibi. Ọ dị jụụ ma dịpụrụ adịpụ n’ebe ariwo okporo ụzọ dị.'",
                ha: "Wuri Mai Natsuwa da Tsaro. 'Ƙaramin mazauni ne mai tsari sosai, galibi gidajen zama ne. Akwai zaman lafiya sosai, babu hayaniyar manyan tituna.'"
            },
            'Anthony Village': {
                en: "Strategic residential. 'One of the most accessible areas on the mainland. Quiet streets and decent community vibes.'",
                pidgin: "Strategic ground. 'Road enter different side for mainland. Everywhere calm and people set.'",
                yo: "Ibugbe ilana. 'Ọkan ninu awọn agbegbe ti o wa julọ lori olu-ilu. Awọn opopona idakẹjẹ ati awọn gbigbọn agbegbe to dara.'",
                ig: "Ebe obibi a haziri nke ọma. 'Otu n’ime mpaghara kacha mfe njikọ n’ime ala. Okporo ụzọ ya dị jụụ ma nwee ezigbo mmekọrịta obodo.'",
                ha: "Mashahurin mazauni. 'Daya daga cikin wuraren da suka fi sauƙin shiga a babban tili. Akwai tituna masu natsuwa da kyakkyawar rayuwar mazauna.'"
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
            },
            'Ajao Estate (Anthony)': {
                placesToVisit: [
                    { name: 'Ajao Estate (Anthony)' },
                    { name: 'Anthony Village estate parks & green spaces' },
                    { name: 'Estate recreational & community facilities' },
                ],
                whatToEat: [
                    { name: 'Estate canteen & café' },
                    { name: 'Local suya & grills near estate gate' },
                    { name: 'Restaurants on the nearby main road' },
                ],
                sports: [
                    { name: 'Estate football pitch', type: 'Football' },
                    { name: 'Private estate gym', type: 'Gym' },
                    { name: 'Estate jogging route', type: 'Other' },
                ]
            },
            'Pedro': {
                placesToVisit: [
                    { name: 'Pedro, Anthony Village' },
                    { name: 'Local market in Pedro' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Adebayo Mokuolu': {
                placesToVisit: [
                    { name: 'Adebayo Mokuolu, Anthony Village' },
                    { name: 'Local market in Adebayo Mokuolu' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.5622, lng: 3.3722 },
    },
    {
        id: 'ogudu_gra',
        name: 'Ogudu GRA',
        description: {
            en: "Exclusive mainland GRA with good roads and serenity.",
            pidgin: "Mainland big man area. Road good and ground calm.",
            yo: "Iyasoto olu-ilu GRA pẹlu awọn opopona to dara ati ifọkanbalẹ.",
            ig: "Ebe obibi ndị ogaranya n’ime ala nwere ezigbo okporo ụzọ na udo.",
            ha: "Wani mazaunin masu hannu da shuni ne a babban tili mai kyan tituna da natsuwa."
        },
        priceRange: {
            en: "₦2m - ₦4.5m (3 Bedroom)",
            pidgin: "₦2m - ₦4.5m (3 Bedroom)",
            yo: "₦2m - ₦4.5m (Iyara mẹta)",
            ig: "₦2m - ₦4.5m (Ime ụlọ atọ)",
            ha: "₦2m - ₦4.5m (Daki 3)"
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
                pidgin: "Mainland big man ground. 'Everywhere calm, security tight and road set. Neighbors na mature people.'",
                yo: "Mainland Elite. 'Idakẹjẹ, aabo, ati daradara gbero. Awọn opopona dara ati pe o jẹ adugbo alaafia pupọ fun awọn idile.'",
                ig: "Ndị ọgaranya ala. 'Ọ dị jụụ, nwee nchekwa, ma nwee nhazi dị mma. Okporo ụzọ ya dị mma ma bụrụ ebe obibi dị jụụ maka ezinụlọ.'",
                ha: "Kwararren mazauni. 'Akwai natsuwa, tsaro, kuma an tsara gari sosai. Tituna masu kyau ne kuma wuri ne mai zaman lafiya ga iyalai.'"
            },
            'Ogudu GRA': {
                en: "The elite pocket. 'One of the most organized mainland estates. Strict security, paved roads, and very quiet.'",
                pidgin: "Mainland big man estate. 'Security set, road smooth, and everywhere cool. Na big men and people wey don retire full here.'",
                yo: "Apo olokiki. 'Ọkan ninu awọn ohun-ini olu-ilu julọ ti a ṣeto. Aabo to muna, awọn opopona paved, ati idakẹjẹ pupọ.'",
                ig: "Mpaghara ndị ogaranya. 'Otu n’ime estate kacha nwee nhazi n’ime ala. Nchekwa siri ike, okporo ụzọ dị mma, ma dịkwa jụụ.'",
                ha: "Wurin manya. 'Daya daga cikin mazauna babban tili mafi tsari. Kyakkyawan tsaro, titye masu kyau, da kuma natsuwa na gaske.'"
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
            },
            'Ogudu Valley': {
                placesToVisit: [
                    { name: 'Ogudu Valley, Ogudu GRA' },
                    { name: 'Local market in Ogudu Valley' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Ogudu Road': {
                placesToVisit: [
                    { name: 'Ogudu Road corridor' },
                    { name: 'Shops & services along Ogudu Road' },
                    { name: 'Local hangout spots near Ogudu Road' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
            'China Town': {
                placesToVisit: [
                    { name: 'China Town, Ogudu GRA' },
                    { name: 'Local market in China Town' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.5771, lng: 3.3905 },
    },
    {
        id: 'maryland',
        name: 'Maryland',
        description: {
            en: "The heart of Lagos traffic interaction, very commercial.",
            pidgin: "Where road meet. Business full, movement plenty.",
            yo: "Okan ti ibaraẹnisọrọ ijabọ Lagos, ti iṣowo pupọ.",
            ig: "Isi ebe njikọ ụzọ na Lagos, ebe azụmahịa kacha ukwuu.",
            ha: "Zuciyar mahadar zirga-zirgar Legas, akwai kasuwanci sosai nan."
        },
        priceRange: {
            en: "₦1.5m - ₦3m (2 Bedroom)",
            pidgin: "₦1.5m - ₦3m (2 Bedroom)",
            yo: "₦1.5m - ₦3m (Iyara meji)",
            ig: "₦1.5m - ₦3m (Ime ụlọ abụọ)",
            ha: "₦1.5m - ₦3m (Daki 2)"
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
                pidgin: "Mainland big boy estate. 'Money full ground here. Road smooth, trees plenty and security tight like drum.'",
                yo: "Apo olokiki. 'Ọkan ninu gbowolori ati aabo awọn ohun-ini lori olu-ilu. Awọn opopona paved, awọn igi igba atijọ, ati idakẹjẹ pupọ.'",
                ig: "Mpaghara ndị rọrọ rọrọ. 'Otu n’ime estate kacha dị oke ọnụ ma nwee nchekwa n’ime ala. Okporo ụzọ ya dị mma, nwee osisi, ma dịkwa jụụ.'",
                ha: "Wurin manya. 'Daya daga cikin mazauna babban tili da suka fi tsada da tsaro. Tituna masu kyau, bishiyoyi masu yawa, da natsuwa na gaske.'"
            },
            'Mende': {
                en: "Urban & Accessible. 'Great for young professionals. Close to everything but can get busy. Watch out for potholes in some inner streets.'",
                pidgin: "Young people ground. 'E close to everywhere. Movement set but some internal roads fit get small pit.'",
                yo: "Ilu & Wiwọle. 'Nla fun awọn akosemose ọdọ. Sunmọ ohun gbogbo ṣugbọn o le di o nšišẹ. Bojuwo fun potholes ni diẹ ninu awọn ita inu.'",
                ig: "Ebe mepere anya ma dị mfe njikọ. 'Ọ dị mma maka ndị ntorobịa na-arụ ọrụ. Ọ dị nso na ebe niile mana ọ nwere ike ịna-ekwo ekwo. Kpachara anya maka olulu n’ụfọdụ okporo ụzọ ime obodo.'",
                ha: "Birni da Sauƙin Shiga. 'Yana da kyau ga matasa ma'aikata. Yana kusa da komai amma mazaunin na iya zama da hada-hada. Yi hattara da ramuka a wasu titunan cikin gari.'"
            },
            'Maryland Mall Axis': {
                en: "The connectivity king. 'Centrally located with the iconic Maryland Mall. Easy access to Ikeja and the Island.'",
                pidgin: "Center of everything. 'Maryland Mall set for waka and shopping. Close to Ikeja and Island well well.'",
                yo: "Ọba isopọ. 'Ti o wa ni aringbungbun pẹlu aami Maryland Mall. Wiwọle rọrun si Ikeja ati Island.'",
                ig: "Eze njikọ. 'Ọ dị mma n’etiti obodo ebe enwere Maryland Mall ama ama. Ọ dị mfe njikọ na Ikeja na Island.'",
                ha: "Sarkin haɗi. 'Mazaunin yana tsakiya tare da mashahurin babban kantin nan na Maryland Mall. Akwai sauƙin damar shiga Ikeja da kuma tsibirin.'"
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
            },
            'Onigbongbo': {
                placesToVisit: [
                    { name: 'Maryland Mall', url: 'https://marylandmallng.com/' },
                    { name: 'Maryland Bus Terminal' }
                ],
                whatToEat: [
                    { name: 'Sheraton Restaurants', url: 'https://www.marriott.com/hotels/travel/lossi-sheraton-lagos-hotel/' },
                    { name: 'Maryland Mall food court' }
                ],
                sports: [
                    { name: 'Sheraton Gym', type: 'Gym', url: 'https://www.marriott.com/hotels/travel/lossi-sheraton-lagos-hotel/' },
                    { name: 'Roadside running', type: 'Other' }
                ]
            },
            'Mende': {
                placesToVisit: [
                    { name: 'Planet One Hospitality', url: 'https://www.instagram.com/planetonehospitality/' },
                    { name: 'Mende High School grounds' }
                ],
                whatToEat: [
                    { name: 'Mende local canteens' },
                    { name: 'Street grills and suya' }
                ],
                sports: [
                    { name: 'Mende community ball', type: 'Football' }
                ]
            },
            'Cane Village': {
                placesToVisit: [
                    { name: 'Cane Village, Maryland' },
                    { name: 'Local market in Cane Village' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.5722, lng: 3.3622 },
    },

    {
        id: 'sangotedo',
        name: 'Sangotedo',
        description: {
            en: "Developing area after Ajah with malls and new estates.",
            pidgin: "Area after Ajah wey dey catch up fast. Mall dey.",
            yo: "Idagbasoke agbegbe lẹhin Ajah pẹlu awọn malls ati awọn titun ibugbe.",
            ig: "Mpaghara na-eto eto mgbe ị gachara Ajah ebe enwere nnukwu ụlọ ahịa na estate ọhụrụ.",
            ha: "Wani yankin da ke bunƙasa bayan Ajah tare da manyan kantuna da gidajen zama na zamani."
        },
        priceRange: {
            en: "₦800k - ₦2m (2 Bedroom)",
            pidgin: "₦800k - ₦2m (2 Bedroom)",
            yo: "₦800k - ₦2m (Iyara meji)",
            ig: "₦800k - ₦2m (Ime ụlọ abụọ)",
            ha: "₦800k - ₦2m (Daki 2)"
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
                pidgin: "Mall road. 'Shoprite dey here. Movement set well well, everything you need dey, but weekend traffic fit show you shege and water fit gather if rain fall.'",
                yo: "Iṣọn iṣowo. 'Ile si Novare Mall. Gbigbe nla, o ni ohun gbogbo nibi, ṣugbọn opopona gba lori awọn opin ọsẹ ati tutu lẹhin ojo.'",
                ig: "Okporo ụzọ azụmahịa. 'Ebe Novare Mall dị. Mmekọrịta ebe a dị mma, i nwere ebe a na-emeta ihe niile, mana okporo ụzọ ya nwere ike ịna-aga nwayọ nwayọ na ngwụcha izu ma nwee mmiri ma ọ bụrụ na mmiri zoo.'",
                ha: "Babban titin kasuwanci. 'Inda babban kantin nan na Novare Mall yake. Akwai yanayi mai daɗi, kana da komai a nan, amma titin yana cunkushewa a karshen mako kuma yana tattara ruwa bayan an yi ruwa.'"
            },
            'Crown Estate': {
                en: "Peaceful ground. 'One of the most organized estates in this axis. Security is 10/10 and power is decent.'",
                pidgin: "Jeje ground. 'Estate set nicely, organized pass many places. Security match well and power no bad.'",
                yo: "Ilẹ alaafia. 'Ọkan ninu awọn ohun-ini ṣeto julọ ni axis yii. Aabo jẹ 10/10 ati agbara dara.'",
                ig: "Obodo udo. 'Otu n’ime estate kacha nwee nhazi na mpaghara a. Nchekwa ya dị mma nke ukwuu ma enwere ọkụ eletrik mgbe niile.'",
                ha: "Wuri mai zaman lafiya. 'Daya daga cikin manyan mazauna yankin da suka fi tsari. Tsaro 10/10 ne sannan wutar lantarki ma ba ta da muni.'"
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
            },
            'Crown Estate': {
                placesToVisit: [
                    { name: 'Crown Estate' },
                    { name: 'Sangotedo estate parks & green spaces' },
                    { name: 'Estate recreational & community facilities' },
                ],
                whatToEat: [
                    { name: 'Estate canteen & café' },
                    { name: 'Local suya & grills near estate gate' },
                    { name: 'Restaurants on the nearby main road' },
                ],
                sports: [
                    { name: 'Estate football pitch', type: 'Football' },
                    { name: 'Private estate gym', type: 'Gym' },
                    { name: 'Estate jogging route', type: 'Other' },
                ]
            },
            'Emperor Estate': {
                placesToVisit: [
                    { name: 'Emperor Estate' },
                    { name: 'Sangotedo estate parks & green spaces' },
                    { name: 'Estate recreational & community facilities' },
                ],
                whatToEat: [
                    { name: 'Estate canteen & café' },
                    { name: 'Local suya & grills near estate gate' },
                    { name: 'Restaurants on the nearby main road' },
                ],
                sports: [
                    { name: 'Estate football pitch', type: 'Football' },
                    { name: 'Private estate gym', type: 'Gym' },
                    { name: 'Estate jogging route', type: 'Other' },
                ]
            },
            'Diamond Estate': {
                placesToVisit: [
                    { name: 'Diamond Estate' },
                    { name: 'Sangotedo estate parks & green spaces' },
                    { name: 'Estate recreational & community facilities' },
                ],
                whatToEat: [
                    { name: 'Estate canteen & café' },
                    { name: 'Local suya & grills near estate gate' },
                    { name: 'Restaurants on the nearby main road' },
                ],
                sports: [
                    { name: 'Estate football pitch', type: 'Football' },
                    { name: 'Private estate gym', type: 'Gym' },
                    { name: 'Estate jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.4716, lng: 3.6190 },
    },
    {
        id: 'akowonjo',
        name: 'Akowonjo',
        description: {
            en: "Residential Alimosho hub, active and affordable.",
            pidgin: "Alimosho residential side. Everywhere set and rent better.",
            yo: "Ibudo Alimosho ibugbe, ti nṣiṣẹ ati ti ifarada.",
            ig: "Ebe obibi na-ekwo ekwo na Alimosho, ma nwee ọnụ ego dị mma.",
            ha: "Zuciyar Alimosho, wuri ne mai hada-hada da sauƙin zama."
        },
        priceRange: { 
            en: "₦500k - ₦1m", 
            pidgin: "₦500k - ₦1m",
            yo: "₦500k - ₦1m",
            ig: "₦500k - ₦1m",
            ha: "₦500k - ₦1m"
        },
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
                pidgin: "Everywhere bubbling. 'Road connect Egbeda and Ikeja. People plenty and market full ground.'",
                yo: "Hustle ibugbe. 'Iṣọn ibugbe ti o nšišẹ ti n ṣopọ Egbeda ati Ikeja. Afẹfẹ larinrin ati awọn ọja agbegbe.'",
                ig: "Ịgba mbọ n’ebe obibi. 'Okporo ụzọ na-ekwo ekwo na-ejikọ Egbeda na Ikeja. Obodo na-ekwo ekwo ma nwee ahịa obodo.'",
                ha: "Fafutukar mazauna. 'Titin da ke haɗa Egbeda da Ikeja. Akwai hada-hada da kasuwannin gida sosai.'"
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
            },
            'Miccom': {
                placesToVisit: [
                    { name: 'Miccom, Akowonjo' },
                    { name: 'Local market in Miccom' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Shasha': {
                placesToVisit: [
                    { name: 'Shasha, Akowonjo' },
                    { name: 'Local market in Shasha' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Ponle': {
                placesToVisit: [
                    { name: 'Ponle, Akowonjo' },
                    { name: 'Local market in Ponle' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Dopemu Border': {
                placesToVisit: [
                    { name: 'Dopemu Border transit & connecting axis' },
                    { name: 'Local market near Dopemu Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.5922, lng: 3.2922 },
    },
    {
        id: 'apapa',
        name: 'Apapa',
        description: {
            en: "The port city. Industrial and historically residential.",
            pidgin: "Port city. Business full but ground calm for some side.",
            yo: "Ilu ibudo. Ise-iṣẹ ati itan ibugbe.",
            ig: "Obodo nwere ọdụ ụgbọ mmiri. Ebe azụmahịa na ebe obibi akụkọ ihe mere eme.",
            ha: "Birnin tashar jiragen ruwa. Wurin masana'antu da tsohon mazauni."
        },
        priceRange: { 
            en: "₦1.5m - ₦4m", 
            pidgin: "₦1.5m - ₦4m",
            yo: "₦1.5m - ₦4m",
            ig: "₦1.5m - ₦4m",
            ha: "₦1.5m - ₦4m"
        },
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
                pidgin: "Old school style. 'Everywhere quiet, trees full ground. If you enter inside, truck no go disturb you again. Heritage feel dey here.'",
                yo: "Atijọ-aye didara. 'Dakẹ, awọn opopona leafy ati rilara itan. Fori ijabọ oko nla ti o wuwo ni kete ti o ba wa ninu.'",
                ig: "Mma nke oge ochie. 'Okporo ụzọ dị jụụ nwere osisi na amamihe akụkọ ihe mere eme. I nweghị nsogbu ụgbọala mgbe ị nọ n’ime.'",
                ha: "Kyakkyawan mazauni na dā. 'Tituna masu natsuwa, bishiyoyi, da yanayin tarihi. Babu hayaniyar manyan motoci da zarar kana ciki.'"
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
            },
            'Marine Beach': {
                placesToVisit: [
                    { name: 'Marine Beach waterfront' },
                    { name: 'Lagoon / riverside viewpoint' },
                    { name: 'Apapa beach / creek access' },
                ],
                whatToEat: [
                    { name: 'Fresh fish pepper soup (waterfront stalls)' },
                    { name: 'Grilled fish & fresh seafood joints' },
                    { name: 'Smoked fish market stalls' },
                ],
                sports: [
                    { name: 'Lagoon boat rides & water sports', type: 'Other' },
                    { name: 'Community beach football', type: 'Football' },
                    { name: 'Swimming & fishing activities', type: 'Other' },
                ]
            },
            'Tincan Island': {
                placesToVisit: [
                    { name: 'Tincan Island commercial corridor' },
                    { name: 'Apapa heritage landmarks & architecture' },
                    { name: 'Banks, offices & business hubs' },
                ],
                whatToEat: [
                    { name: 'Quick-serve restaurants & lunch joints' },
                    { name: 'Street buka & canteen options' },
                    { name: 'Fine dining on nearby waterfront' },
                ],
                sports: [
                    { name: 'Nearby indoor recreation center', type: 'Other' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Ajegunle Boundary': {
                placesToVisit: [
                    { name: 'Ajegunle Boundary, Apapa' },
                    { name: 'Local market in Ajegunle Boundary' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.4422, lng: 3.3622 },
    },

    {
        id: 'badagry',
        name: 'Badagry',
        description: {
            en: "Historic coastal town, very far but very serene.",
            pidgin: "History town near water. E far gan but ground cool.",
            yo: "Ilu eti okun itan, jinna pupọ ṣugbọn serene pupọ.",
            ig: "Obodo akụkọ ihe mere eme dị n’akụkụ mmiri. Ọ dị anya mana ọ dị jụụ.",
            ha: "Tsohon birni kusa da ruwa, yana da nisa amma akwai natsuwa sosai."
        },
        priceRange: { 
            en: "₦200k - ₦500k", 
            pidgin: "₦200k - ₦500k",
            yo: "₦200k - ₦500k",
            ig: "₦200k - ₦500k",
            ha: "₦200k - ₦500k"
        },
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
                pidgin: "History ground. 'Place for reflection. Everywhere calm, water for side and silence full ground.'",
                yo: "Okan itan. 'Ibi ti iṣaro ati itan. Tunu, eti okun, ati alaafia pupọ.'",
                ig: "Isi ebe akụkọ ihe mere eme. 'Ebe ncheta na akụkọ ihe mere eme. Ọ dị jụụ ma dị n’akụkụ mmiri.'",
                ha: "Zuciyar tarihi. 'Wurin tunani da tarihi. Akwai natsuwa, dandalin ruwa, da zaman lafiya.'"
            },
            'Topo': {
                en: "Coastal and calm. 'Area near the water with a very relaxed lifestyle. Great for getaways.'",
                pidgin: "Water side vibe. 'Area close to water where life slow and steady. Cool for weekend waka.'",
                yo: "Coastal ati idakẹjẹ. 'Agbegbe nitosi omi pẹlu igbesi aye isinmi pupọ. Nla fun awọn getaways.'",
                ig: "Mpaghara mmiri dị jụụ. 'Mpaghara dị nso n’ọnụ mmiri nwere ezigbo ntụrụndụ. Ọ dị mma maka izu ike.'",
                ha: "Gabas da natsuwa. 'Yanki kusa da ruwa mai cike da shakatawa. Yana da kyau don hutun karshen mako.'"
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
            },
            'Iworo': {
                placesToVisit: [
                    { name: 'Iworo, Badagry' },
                    { name: 'Local market in Iworo' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Ajido': {
                placesToVisit: [
                    { name: 'Ajido, Badagry' },
                    { name: 'Local market in Ajido' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Seme Border Axis': {
                placesToVisit: [
                    { name: 'Seme Border Axis transit & connecting axis' },
                    { name: 'Local market near Seme Border Axis' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.4222, lng: 2.8822 },
    },
    {
        id: 'ebute_metta',
        name: 'Ebute Metta',
        description: {
            en: "Historic rail hub, extremely central and hustling.",
            pidgin: "Train headquarters. E central die and movement plenty.",
            yo: "Ibudo ọkọ oju-irin itan, ti aarin pupọ ati hustling.",
            ig: "Isi ebe okporo ígwè, dị n’etiti obodo na-ekwo ekwo.",
            ha: "Tsohon mashatar jirgin kasa, yana tsakiya kuma akwai fafutuka sosai."
        },
        priceRange: { 
            en: "₦600k - ₦1.5m", 
            pidgin: "₦600k - ₦1.5m",
            yo: "₦600k - ₦1.5m",
            ig: "₦600k - ₦1.5m",
            ha: "₦600k - ₦1.5m"
        },
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
            en: "The \"New Lagos\". Industrial and rapidly expanding.",
            pidgin: "New Lagos. Everywhere dey expand well well.",
            yo: "\"Lagos Tuntun\". Ise-iṣẹ ati ni iyara npọ si.",
            ig: "\"Lagos Ọhụrụ\". Ebe azụmahịa na mpaghara na-eto ngwa ngwa.",
            ha: "\"Sabon Legas\". Wurin masana'antu da bunkasa."
        },
        priceRange: { 
            en: "₦800k - ₦2.5m", 
            pidgin: "₦800k - ₦2.5m",
            yo: "₦800k - ₦2.5m",
            ig: "₦800k - ₦2.5m",
            ha: "₦800k - ₦2.5m"
        },
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
                pidgin: "Beach ground. 'Resorts full here and industrial work plenty. E be like vacation and hustle mix together.'",
                yo: "Oju-ọna eti okun. 'Ile si awọn ibi isinmi ẹwa ati ibudo ile-iṣẹ ti n pọ si. Agbara jẹ idapọ ti isinmi ati iṣẹ lile.'",
                ig: "Ọnụ ụzọ mmiri. 'Ebe obibi maka ezumike mara mma na ebe azụmahịa na-eto eto. Ọ bụ ngwakọta ntụrụndụ na ịrụsi ọrụ ike.'",
                ha: "Hanyar teku. 'Gidan wuraren shakatawa masu kyau da hada-hadar masana'antu. Yanayin ya haɗa da hutu da aiki tuƙuru.'"
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
            },
            'Lakowe': {
                placesToVisit: [
                    { name: 'Lakowe, Ibeju Lekki' },
                    { name: 'Local market in Lakowe' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Boguje': {
                placesToVisit: [
                    { name: 'Boguje, Ibeju Lekki' },
                    { name: 'Local market in Boguje' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Abijo': {
                placesToVisit: [
                    { name: 'Abijo, Ibeju Lekki' },
                    { name: 'Local market in Abijo' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Epe Border': {
                placesToVisit: [
                    { name: 'Epe Border transit & connecting axis' },
                    { name: 'Local market near Epe Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.4278, lng: 3.8436 }
    },
    {
        id: 'ilupeju',
        name: 'Ilupeju',
        description: {
            en: "Quiet, industrial, and residential mix. Very central.",
            pidgin: "Ground calm, factory dey but houses set. E central well.",
            yo: "Idakẹjẹ, ile-iṣẹ, ati apopọ ibugbe. Gan aringbungbun.",
            ig: "Ebe dị jụụ, ụlọ ọrụ mmepụta ihe na ebe obibi agwakọta. Ọ dị mma n’etiti obodo.",
            ha: "Yankin natsuwa, masana'antu, da gidaje. Yana tsakiyar gari sosai."
        },
        priceRange: { 
            en: "₦1.5m - ₦3.5m", 
            pidgin: "₦1.5m - ₦3.5m",
            yo: "₦1.5m - ₦3.5m",
            ig: "₦1.5m - ₦3.5m",
            ha: "₦1.5m - ₦3.5m"
        },
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
                pidgin: "Quiet ground. 'Everywhere organize and silence full ground. Professionals and foreigners like here well well.'",
                yo: "Alafia enclave. 'Adugbo ibugbe ti a ṣeto olokiki pẹlu awọn alamọdaju ati agbegbe ilu okeere.'",
                ig: "Ebe obibi dị jụụ. 'Obodo nwere nhazi dị mma nke ndị ọkachamara na ndị si mba ọzọ hụrụ n’anya.'",
                ha: "Wuri mai zaman lafiya. 'Yankin gidaje mai tsari da kwararru da baki ke so sosai.'"
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
            },
            'Palmgrove': {
                placesToVisit: [
                    { name: 'Palmgrove, Ilupeju' },
                    { name: 'Local market in Palmgrove' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Obanikoro': {
                placesToVisit: [
                    { name: 'Obanikoro, Ilupeju' },
                    { name: 'Local market in Obanikoro' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Town Planning Axis': {
                placesToVisit: [
                    { name: 'Town Planning Axis, Ilupeju' },
                    { name: 'Local market in Town Planning Axis' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.5522, lng: 3.3622 },
    },
    {
        id: 'ketu',
        name: 'Ketu',
        description: {
            en: "Bustling marketplace and major transit point.",
            pidgin: "Everywhere hustle. Market full and motor plenty.",
            yo: "Ibi ọja ti n bọ ati aaye gbigbe lile nla.",
            ig: "Ahịa na-ekwo ekwo na isi ebe njem.",
            ha: "Kasuwar hada-hada da muhimmiyar mashatar sufuri."
        },
        priceRange: { 
            en: "₦500k - ₦1m", 
            pidgin: "₦500k - ₦1m",
            yo: "₦500k - ₦1m",
            ig: "₦500k - ₦1m",
            ha: "₦500k - ₦1m"
        },
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
            en: "The commercial soul of Lagos. Marina and CMS axis.",
            pidgin: "Lagos center. Marina and business HQ.",
            yo: "Okan iṣowo ti Lagos. Marina ati CMS axis.",
            ig: "Isi ebe azụmahịa nke Lagos. Mpaghara Marina na CMS.",
            ha: "Zuciyar kasuwancin Legas. Yankin Marina da CMS."
        },
        priceRange: { 
            en: "₦1m - ₦3m", 
            pidgin: "₦1m - ₦3m",
            yo: "₦1m - ₦3m",
            ig: "₦1m - ₦3m",
            ha: "₦1m - ₦3m"
        },
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
                pidgin: "Financial base. 'Office full ground and business energy high well well. Weekend everywhere quiet but Monday to Friday na jungle.'",
                yo: "Okan owo. 'Awọn ile-ifowopamọ giga, awọn ile itan, ati agbara iṣowo to pọju. Ofifo ni awọn ipari ọsẹ ṣugbọn igbo ti o daju lakoko ọsẹ.'",
                ig: "Isi ebe ego. 'Ụlọ elu ọhụrụ, ụlọ akụ, na nnukwu ume azụmahịa. Ọ na-atụ jụụ na ngwụcha izu mana ọ na-ekwo ekwo n’ime izu.'",
                ha: "Zuciyar harkokin kuɗi. 'Manyan bankuna, tsofaffin gine-gine, da fafutukar kasuwanci. Akwai shuru a karshen mako amma ana hada-hada lokacin aiki.'"
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
            },
            'Marina': {
                placesToVisit: [
                    { name: 'Marina commercial corridor' },
                    { name: 'Lagos Island heritage landmarks & architecture' },
                    { name: 'Banks, offices & business hubs' },
                ],
                whatToEat: [
                    { name: 'Quick-serve restaurants & lunch joints' },
                    { name: 'Street buka & canteen options' },
                    { name: 'Fine dining on nearby waterfront' },
                ],
                sports: [
                    { name: 'Nearby indoor recreation center', type: 'Other' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'CMS': {
                placesToVisit: [
                    { name: 'CMS commercial corridor' },
                    { name: 'Lagos Island heritage landmarks & architecture' },
                    { name: 'Banks, offices & business hubs' },
                ],
                whatToEat: [
                    { name: 'Quick-serve restaurants & lunch joints' },
                    { name: 'Street buka & canteen options' },
                    { name: 'Fine dining on nearby waterfront' },
                ],
                sports: [
                    { name: 'Nearby indoor recreation center', type: 'Other' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Isale Eko': {
                placesToVisit: [
                    { name: 'Isale Eko, Lagos Island' },
                    { name: 'Local market in Isale Eko' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Balogun': {
                placesToVisit: [
                    { name: 'Balogun Market' },
                    { name: 'Lagos Island commercial hub' },
                    { name: 'Wholesale stalls & trading spots' },
                ],
                whatToEat: [
                    { name: 'Mama-put buka spots' },
                    { name: 'Amala & ewedu (market canteen)' },
                    { name: 'Street moi-moi, puff-puff & akara' },
                ],
                sports: [
                    { name: 'Nearby community football pitch', type: 'Football' },
                    { name: 'Local gym near market area', type: 'Gym' },
                ]
            },
            'Idumota': {
                placesToVisit: [
                    { name: 'Idumota Market' },
                    { name: 'Lagos Island commercial hub' },
                    { name: 'Wholesale stalls & trading spots' },
                ],
                whatToEat: [
                    { name: 'Mama-put buka spots' },
                    { name: 'Amala & ewedu (market canteen)' },
                    { name: 'Street moi-moi, puff-puff & akara' },
                ],
                sports: [
                    { name: 'Nearby community football pitch', type: 'Football' },
                    { name: 'Local gym near market area', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.4522, lng: 3.3887 }
    },
    {
        id: 'oshodi',
        name: 'Oshodi',
        description: {
            en: 'The transport interchange king. Maximum energy.',
            pidgin: 'King of waka. Energy full here.',
            yo: 'Ọba paṣipaarọ gbigbe. Agbara to pọ julọ.',
            ig: 'Eze njikọ njem. O nwere nnukwu ume.',
            ha: 'Sarkin mahadar sufuri. Akwai kuzari sosai.'
        },
        priceRange: { 
            en: "₦400k - ₦900k", 
            pidgin: "₦400k - ₦900k",
            yo: "₦400k - ₦900k",
            ig: "₦400k - ₦900k",
            ha: "₦400k - ₦900k"
        },
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
                pidgin: "Waka headquarters. 'Interchange set nicely. People plenty but waka better pass before. Energy full ground.'",
                yo: "Okan irekọja. 'Paṣipaarọ tuntun jẹ nla. Reti ọpọlọpọ eniyan ṣugbọn gbigbe jẹ ṣeto ti o dara ju ti iṣaaju lọ. Agbara nigbagbogbo jẹ 100.'",
                ig: "Isi ebe njem. 'Ebe njikọ ọhụrụ ahụ dị ukwuu. Atụla anya na mmadụ ga-ezu mana njem dị mma karịa ka ọ dịbu. Ọ na-enwe ume mgbe niile.'",
                ha: "Zuciyar safara. 'Sabuwar mahadar sufuri tana da girma sosai. Yi tsammanin jama'a amma zirga-zirga ta fi tsari fiye da da. Koyaushe akwai kuzari sosai.'"
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
            },
            'Mafoluku': {
                placesToVisit: [
                    { name: 'Mafoluku Primary School axis' },
                    { name: 'Airport Perimeter Road view' }
                ],
                whatToEat: [
                    { name: 'Local Buka (Mafoluku)' },
                    { name: 'Evening suya points' }
                ],
                sports: [
                    { name: 'Community football', type: 'Football' }
                ]
            },
            'Shogunle': {
                placesToVisit: [
                    { name: 'Shogunle Railway Crossing' },
                    { name: 'Local Shogunle Market' }
                ],
                whatToEat: [
                    { name: 'Street grills' },
                    { name: 'Local canteens' }
                ],
                sports: [
                    { name: 'Shogunle community ball', type: 'Football' }
                ]
            },
            'Ajao Estate (Oshodi)': {
                placesToVisit: [
                    { name: 'Ajao Estate Plazas' },
                    { name: 'Canoe Road axis' }
                ],
                whatToEat: [
                    { name: 'Ajao Estate restaurants' },
                    { name: 'Fast food chains along Airport Road' }
                ],
                sports: [
                    { name: 'Ajao Estate jogging', type: 'Other' },
                    { name: 'Local private gyms', type: 'Gym' }
                ]
            },
        },
        coords: { lat: 6.5544, lng: 3.3431 }
    },
    {
        id: 'shomolu',
        name: 'Shomolu',
        description: {
            en: 'Printing capital of Lagos. High energy and central.',
            pidgin: 'Where dem dey print everything. Vibes and waka.',
            yo: 'Olu-ilu titẹwe ti Lagos. Agbara giga ati aringbungbun.',
            ig: 'Isi ebe ibipụta ihe na Lagos. Ọ nwere nnukwu ume ma dị n’etiti obodo.',
            ha: 'Babban birnin buga takardu na Legas. Akwai hada-hada sosai kuma yana tsakiyar gari.'
        },
        priceRange: { 
            en: "₦600k - ₦1.2m", 
            pidgin: "₦600k - ₦1.2m",
            yo: "₦600k - ₦1.2m",
            ig: "₦600k - ₦1.2m",
            ha: "₦600k - ₦1.2m"
        },
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
            pidgin: 'Ikeja sharp side. Food and jaiye full here.',
            yo: 'Agbegbe Ikeja ti aṣa pẹlu ounjẹ nla ati igbesi aye alẹ.',
            ig: 'Mpaghara Ikeja nke ọgbara ọhụrụ nwere ebe nri mara mma na ntụrụndụ abalị.',
            ha: 'Yankin Ikeja na zamani mai cike da gidajen abinci da wuraren shakatawa na dare.'
        },
        priceRange: { 
            en: "₦1.5m - ₦4m", 
            pidgin: "₦1.5m - ₦4m",
            yo: "₦1.5m - ₦4m",
            ig: "₦1.5m - ₦4m",
            ha: "₦1.5m - ₦4m"
        },
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
            pidgin: 'Correct place for Ikeja. Security set and neighbors far apart.',
            yo: 'Agbegbe ibugbe giga ni Ikeja pẹlu aabo to dara.',
            ig: 'Ebe obibi mara mma n’Ikeja nwere ezigbo nchekwa.',
            ha: 'Yankin gidaje na alfarma a Ikeja mai babban tsaro.'
        },
        priceRange: { 
            en: "₦1.5m - ₦3.5m", 
            pidgin: "₦1.5m - ₦3.5m",
            yo: "₦1.5m - ₦3.5m",
            ig: "₦1.5m - ₦3.50m",
            ha: "₦1.5m - ₦3.5m"
        },
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
            pidgin: 'Correct Surulere side. People full here well.',
            yo: 'Apo ibugbe ti o gbajumọ ti Surulere.',
            ig: 'Ebe obibi ama ama na Surulere.',
            ha: 'Wani sanannen yankin gidaje a Surulere.'
        },
        priceRange: { 
            en: "₦600k - ₦1.5m", 
            pidgin: "₦600k - ₦1.5m",
            yo: "₦600k - ₦1.5m",
            ig: "₦600k - ₦1.5m",
            ha: "₦600k - ₦1.5m"
        },
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
            pidgin: 'Where talent start. Energy full everywhere.',
            yo: 'Gbajumọ fun talenti rẹ ati agbara rẹ. Hustle pọ gidigidi.',
            ig: 'A ma ama ya maka ndị nwere nkà na nnukwu ume. Ịgba mbọ n’ebe niile.',
            ha: 'Yar shahara wajen bayar da hazaka da kuzari. Akwai fafutuka sosai nan.'
        },
        priceRange: { 
            en: "₦200k - ₦500k", 
            pidgin: "₦200k - ₦500k",
            yo: "₦200k - ₦500k",
            ig: "₦200k - ₦500k",
            ha: "₦200k - ₦500k"
        },
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
                pidgin: "Talent base. 'Superstars full ground. Everywhere rough small but neighbors get love. Hustle no dey sleep.'",
                yo: "Ile-iṣẹ talenti. 'Oti ọpọlọpọ awọn superstars. Ti o ni inira ni ayika awọn egbegbe ṣugbọn ẹmi agbegbe jẹ 10/10. Hustle pọ gidigidi.'",
                ig: "Ebe a na-emepụta nkà. 'Ebe ọtụtụ ndị ama ama siri pụta. Ọ nwere ike ịdị rịrị rịrị mana ndị agbata obi nwere mmasị n’onwe ha. Ịgba mbọ anaghị ehi ụra.'",
                ha: "Gidan hazaka. 'Inda fitattun jarumai da yawa suka fito. Wuraren na iya zama da wahala amma hadin kan mazauna wurin 10/10 ne. Akwai fafutuka dare da rana.'"
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
            },
            'Tolu': {
                placesToVisit: [
                    { name: 'Tolu, Ajegunle' },
                    { name: 'Local market in Tolu' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Wilmer': {
                placesToVisit: [
                    { name: 'Wilmer, Ajegunle' },
                    { name: 'Local market in Wilmer' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Apapa Road': {
                placesToVisit: [
                    { name: 'Apapa Road corridor' },
                    { name: 'Shops & services along Apapa Road' },
                    { name: 'Local hangout spots near Apapa Road' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.4462, lng: 3.3344 }
    },
    {
        id: 'alausa',
        name: 'Alausa',
        description: {
            en: 'The administrative heart. Secure and commercial.',
            pidgin: 'Government side. Security tight and offices plenty.',
            yo: 'Okan isakoso. Aabo ati ti iṣowo.',
            ig: 'Isi ebe nchịkwa. Ọ nwere nchekwa na ụlọ ọrụ azụmahịa.',
            ha: 'Zuciyar gudanarwa. Akwai tsaro da hukumomi da yawa.'
        },
        priceRange: { 
            en: "₦1m - ₦3m", 
            pidgin: "₦1m - ₦3m",
            yo: "₦1m - ₦3m",
            ig: "₦1m - ₦30m",
            ha: "₦1m - ₦3m"
        },
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
                pidgin: "Government base. 'Security set well well. Office full everywhere and system dey work for here.'",
                yo: "Ile agbara isakoso. 'Ni aabo pupọ ati ṣeto. Ile si ijọba ipinlẹ ati ọpọlọpọ awọn ọfiisi ile-iṣẹ.'",
                ig: "Ebe njikọ nchịkwa. 'Nchekwa na nhazi ya dị mma nke ukwuu. Ebe obibi maka gọọmentị steeti na ọtụtụ ụlọ ọrụ azụmahịa.'",
                ha: "Zuciyar gudanarwa. 'Akwai tsaro da tsari sosai. Gidan gwamnatin jiha da ofisoshin kamfanoni da yawa.'"
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
            },
            'State House': {
                placesToVisit: [
                    { name: 'State House, Alausa' },
                    { name: 'Local market in State House' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'CBD': {
                placesToVisit: [
                    { name: 'CBD, Alausa' },
                    { name: 'Local market in CBD' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Alausa Gardens': {
                placesToVisit: [
                    { name: 'Alausa Gardens' },
                    { name: 'Alausa estate parks & green spaces' },
                    { name: 'Estate recreational & community facilities' },
                ],
                whatToEat: [
                    { name: 'Estate canteen & café' },
                    { name: 'Local suya & grills near estate gate' },
                    { name: 'Restaurants on the nearby main road' },
                ],
                sports: [
                    { name: 'Estate football pitch', type: 'Football' },
                    { name: 'Private estate gym', type: 'Gym' },
                    { name: 'Estate jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.6162, lng: 3.3544 }
    },
    {
        id: 'bariga',
        name: 'Bariga',
        description: {
            en: 'Lively area near the university. High connectivity.',
            pidgin: 'Everywhere active. Near Unilag so vibes plenty.',
            yo: 'Agbegbe larinrin nitosi ile-ẹkọ giga. Isopọ giga.',
            ig: 'Mpaghara na-ekwo ekwo dị nso na mahadum. Njikọ ya dị mma.',
            ha: "Yankin da ke da daɗi kusa da jami'a. Akwai sauƙin zirga-zirga."
        },
        priceRange: { 
            en: "₦400k - ₦1m", 
            pidgin: "₦400k - ₦1m",
            yo: "₦400k - ₦1m",
            ig: "₦400k - ₦1m",
            ha: "₦400k - ₦1m"
        },
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
                pidgin: "Waterfront energy. 'Neighbours sabi each other well well. Market and street life always set for here.'",
                yo: "Larinrin ati agbegbe. 'Imọ ti o lagbara ti agbegbe nitosi omi. Awọn ọja agbegbe ti o nšišẹ ati igbesi aye ita gbangba ti nṣiṣẹ.'",
                ig: "Mpaghara mara mma na nke obodo. 'Mmekọrịta ndị agbata obi siri ike n’akụkụ mmiri. Ahịa obodo na-ekwo ekwo na ntụrụndụ n’okporo ụzọ mgbe niile.'",
                ha: "Wuri mai daɗi da na gida. 'Hadin kan mazauna wurin yana da ƙarfi sosai kusa da ruwa. Kasuwannin gida masu hada-hada da rayuwar titi akai-akai.'"
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
            },
            'Pedro Border': {
                placesToVisit: [
                    { name: 'Pedro Border transit & connecting axis' },
                    { name: 'Local market near Pedro Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Shomolu Border': {
                placesToVisit: [
                    { name: 'Shomolu Border transit & connecting axis' },
                    { name: 'Local market near Shomolu Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Unilag Border': {
                placesToVisit: [
                    { name: 'Unilag Border campus axis' },
                    { name: 'Student arts & culture spaces' },
                    { name: 'Bariga tech & learning hubs' },
                ],
                whatToEat: [
                    { name: 'Campus canteen & cafeteria' },
                    { name: 'Student-belt buka joints' },
                    { name: 'Indomie, shawarma & fast food' },
                ],
                sports: [
                    { name: 'Campus football pitch', type: 'Football' },
                    { name: 'Campus sports complex', type: 'Other' },
                    { name: 'Basketball courts', type: 'Basketball' },
                ]
            },
            'Bariga Jetty': {
                placesToVisit: [
                    { name: 'Bariga Jetty waterfront' },
                    { name: 'Lagoon / riverside viewpoint' },
                    { name: 'Bariga beach / creek access' },
                ],
                whatToEat: [
                    { name: 'Fresh fish pepper soup (waterfront stalls)' },
                    { name: 'Grilled fish & fresh seafood joints' },
                    { name: 'Smoked fish market stalls' },
                ],
                sports: [
                    { name: 'Lagoon boat rides & water sports', type: 'Other' },
                    { name: 'Community beach football', type: 'Football' },
                    { name: 'Swimming & fishing activities', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.5322, lng: 3.3922 },
    },
    {
        id: 'dolphin_estate',
        name: 'Dolphin Estate',
        description: {
            en: "Classic gated estate in Ikoyi. Secure and central.",
            pidgin: "Old school Ikoyi estate. Security dey and ground calm.",
            yo: "Estate gated Ayebaye ni Ikoyi. Aabo ati aarin.",
            ig: "Ebe obibi ama ama na Ikoyi. Ọ nwere nchekwa na nhazi.",
            ha: "Gidan alfarma a Ikoyi. Akwai tsaro da kyawun wuri."
        },
        priceRange: { 
            en: "₦3.5m - ₦7m", 
            pidgin: "₦3.5m - ₦7m",
            yo: "₦3.5m - ₦7m",
            ig: "₦3.5m - ₦7m",
            ha: "₦3.5m - ₦7m"
        },
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
                pidgin: "Bridge base. 'Estate gate set, everywhere quiet small. Close to Obalende and Ikoyi well well.'",
                yo: "Igbega nla/erin erekusu. 'Agbegbe gated pẹlu rilara ibugbe Ayebaye. O sun mọ Obalende ati Ikoyi.'",
                ig: "Njikọ ala na agwaetiti. 'Ebe obibi a gbara ogige nwere ezigbo nhazi. Ọ dị nso na Obalende na Ikoyi.'",
                ha: "Gadar babban tili. 'Yankin gidaje ne mai kyau da tsari. Yana kusa da Obalende da Ikoyi.'"
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
            },
            'Ikoyi': {
                placesToVisit: [
                    { name: 'Ikoyi, Dolphin Estate' },
                    { name: 'Local market in Ikoyi' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Osborne Border': {
                placesToVisit: [
                    { name: 'Osborne Border transit & connecting axis' },
                    { name: 'Local market near Osborne Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Obalende Border': {
                placesToVisit: [
                    { name: 'Obalende Border transit & connecting axis' },
                    { name: 'Local market near Obalende Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.4522, lng: 3.4122 },
    },
    {
        id: 'dopemu',
        name: 'Dopemu',
        description: {
            en: "Active residential area with good mainland links.",
            pidgin: "Everywhere waka. Road enter different side for mainland.",
            yo: "Agbegbe ibugbe ti nṣiṣẹ pẹlu awọn ọna asopọ nla to dara.",
            ig: "Ebe obibi na-ekwo ekwo nwere ụzọ njikọ dị mma.",
            ha: "Yankin gidaje mai hada-hada da sauƙin zirga-zirga."
        },
        priceRange: { 
            en: "₦400k - ₦900k", 
            pidgin: "₦400k - ₦900k",
            yo: "₦400k - ₦900k",
            ig: "₦400k - ₦900k",
            ha: "₦400k - ₦900k"
        },
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
                pidgin: "Energy base. 'Trade full ground and movement high. Where people dey join motor go Agege or Egbeda.'",
                yo: "Ipele agbara. 'Nigbagbogbo nṣiṣẹ pẹlu iṣowo agbegbe ati gbigbe. Ikorita pataki fun awọn arinrin-ajo laarin Agege ati Egbeda.'",
                ig: "Ebe njikọ ume. 'Ọ na-ekwo ekwo mgbe niile na azụmahịa na njem. Ọ bụ nnukwu njikọ maka ndị na-eme njem n’etiti Agege na Egbeda.'",
                ha: "Zuciyar fafutuka. 'Koyaushe akwai hada-hadar kasuwanci da sufuri. Muhimmiyar mashata ce ga mazauna tsakanin Agege da Egbeda.'"
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
            },
            'Agege Border': {
                placesToVisit: [
                    { name: 'Agege Border transit & connecting axis' },
                    { name: 'Local market near Agege Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Akowonjo Border': {
                placesToVisit: [
                    { name: 'Akowonjo Border transit & connecting axis' },
                    { name: 'Local market near Akowonjo Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Pleasure': {
                placesToVisit: [
                    { name: 'Pleasure, Dopemu' },
                    { name: 'Local market in Pleasure' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Iyana Ipaja Border': {
                placesToVisit: [
                    { name: 'Iyana Ipaja Border transit & connecting axis' },
                    { name: 'Local market near Iyana Ipaja Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.6122, lng: 3.3122 },
    },
    {
        id: 'ikeja_gra',
        name: 'Ikeja GRA',
        description: {
            en: "Premier mainland luxury. Serene and exclusive.",
            pidgin: "Mainland big boy headquarters. Everywhere quiet and rich.",
            yo: "Igbadun nla nla. Serene ati iyasoto.",
            ig: "Ebe obibi ndị ogaranya. Ọ naghị ekwo ekwo ma nwee ugwu.",
            ha: "Yankin na alfarma da kwanciyar hankali. Masu hannu da shuni ne kawai ke nan."
        },
        priceRange: { 
            en: "₦5m - ₦12m+", 
            pidgin: "₦5m - ₦12m+",
            yo: "₦5m - ₦12m+",
            ig: "₦5m - ₦12m+",
            ha: "₦5m - ₦12m+"
        },
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
                pidgin: "GRA main street. 'Food point big boy style, shops set, and security tight. E good for evening waka or business meeting.'",
                yo: "Okan iṣowo ti GRA. 'Ounjẹ giga, awọn boutiques, ati oju-aye to ni aabo pupọ. Pipe fun awọn irin-ajo irọlẹ tabi awọn ounjẹ ounjẹ owo.'",
                ig: "Isi ebe azụmahịa nke GRA. 'Ebe nri ndị ogaranya, ụlọ ahịa na nchekwa dị mma. Ọ dị mma maka ịgagharị na mgbede ma ọ bụ nzukọ azụmahịa.'",
                ha: "Zuciyar kasuwancin GRA. 'Gidajen abinci na alfarma, shaguna, da babban tsaro. Yana da kyau don yawo da maraice ko ganawar kasuwanci.'"
            },
            'Ikeja Golf Club Area': {
                en: "Green and serene. 'Home to the prestigious Ikeja Golf Club. Very quiet, leafy streets, and excellent security. Ideal for those seeking tranquility.'",
                pidgin: "Green ground. 'Golf Club dey here. Everywhere quiet, trees plenty, and security set well well. E good for people wey like calm place.'",
                yo: "Green ati serene. 'Ile si olokiki Ikeja Golf Club. Gan idakẹjẹ, leafy ita, ati ki o tayọ aabo. Apẹrẹ fun awọn ti n wa ifọkanbalẹ.'",
                ig: "Ebe mara mma. 'Ụlọ maka Ikeja Golf Club ama ama. Ọ dị jụụ nke ukwuu ma nwee ezigbo nchekwa. Ọ dị mma maka ndị chọrọ udo.'",
                ha: "Kyakkyawan muhalli. 'Gidan mashahurin kulob ɗin nan na Ikeja Golf Club. Akwai natsuwa, bishiyoyi, da babban tsaro. Ya dace da masu son kwanciyar hankali.'"
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
            },
            'Joel Ogunnaike': {
                placesToVisit: [
                    { name: 'South Eatery & Social', url: 'https://www.instagram.com/south_lagos/' },
                    { name: 'Joel Ogunnaike street boutiques' }
                ],
                whatToEat: [
                    { name: 'South Eatery (Fine Dining)', url: 'https://www.instagram.com/south_lagos/' },
                    { name: 'Zen Garden (nearby)', url: 'https://www.zengardenlagos.com/' }
                ],
                sports: [
                    { name: 'Fitness Central Ikeja', type: 'Gym' },
                    { name: 'Walking/Jogging on Joel Ogunnaike', type: 'Other' }
                ]
            },
            'Oduduwa': {
                placesToVisit: [
                    { name: 'Oduduwa Crescent serenity' },
                    { name: 'Local parks in GRA' }
                ],
                whatToEat: [
                    { name: 'Café de Flore (nearby)', url: 'https://www.instagram.com/cafedeflorelagos/' },
                    { name: 'Quiet garden restaurants' }
                ],
                sports: [
                    { name: 'Private estate gyms', type: 'Gym' },
                    { name: 'Oduduwa jogging track', type: 'Other' }
                ]
            },
            'Mobolaji Johnson': {
                placesToVisit: [
                    { name: 'Government House axis' },
                    { name: 'The Ikeja Golf Club front' }
                ],
                whatToEat: [
                    { name: 'High-end lounges' },
                    { name: 'Clubhouse dining' }
                ],
                sports: [
                    { name: 'Ikeja Golf Club (Mobolaji Johnson side)', type: 'Other' },
                    { name: 'Jogging/Running', type: 'Other' }
                ]
            },
        },
        coords: { lat: 6.5862, lng: 3.3444 }
    },
    {
        id: 'idimu',
        name: 'Idimu',
        description: {
            en: "Laid-back Alimosho neighborhood. Good value.",
            pidgin: "Alimosho jeje side. Value for money dey here.",
            yo: "Agbegbe Alimosho laid-back. Iye to dara.",
            ig: "Mpaghara Alimosho dị jụụ. Ọnụ ego ya dị mma.",
            ha: "Yankin Alimosho mai sanyi. Akwai darajar kuɗi a nan."
        },
        priceRange: { 
            en: "₦350k - ₦800k", 
            pidgin: "₦350k - ₦800k",
            yo: "₦350k - ₦800k",
            ig: "₦350k - ₦800k",
            ha: "₦350k - ₦800k"
        },
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
                pidgin: "Everywhere bubbling. 'Market full ground and you fit enter Egbeda or Ikotun sharply from here.'",
                yo: "Ibugbe okan. 'Ikorita ti nšišẹ pẹlu awọn ọja agbegbe ati irọrun si Egbeda ati Ikotun.'",
                ig: "Isi ebe obibi. 'Njikọ na-ekwo ekwo nwere ahịa obodo na ụzọ dị mfe isi gaa Egbeda na Ikotun.'",
                ha: "Zuciyar mazauna. 'Mahada ce mai hada-hada tare da kasuwannin gida da sauƙin shiga Egbeda da Ikotun.'"
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
            },
            'Egbeda Border': {
                placesToVisit: [
                    { name: 'Egbeda Border transit & connecting axis' },
                    { name: 'Local market near Egbeda Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Council': {
                placesToVisit: [
                    { name: 'Council, Idimu' },
                    { name: 'Local market in Council' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Pipeline': {
                placesToVisit: [
                    { name: 'Pipeline, Idimu' },
                    { name: 'Local market in Pipeline' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Isheri Olofin': {
                placesToVisit: [
                    { name: 'Isheri Olofin, Idimu' },
                    { name: 'Local market in Isheri Olofin' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.5922, lng: 3.2722 },
    },
    {
        id: 'marina',
        name: 'Marina / CMS',
        description: {
            en: "The financial heart. Skyscrapers and high activity.",
            pidgin: "Where money dey. Business HQ and Skyscraper full everywhere.",
            yo: "Okan owo. Awọn ile skyscraper ati iṣẹ ṣiṣe giga.",
            ig: "Isi ebe ego. Ụlọ elu ọhụrụ na ọtụtụ azụmahịa.",
            ha: "Zuciyar harkokin kuɗi. Akwai duka manyan ofisoshi da hada-hada."
        },
        priceRange: { 
            en: "₦1.5m - ₦4m", 
            pidgin: "₦1.5m - ₦4m",
            yo: "₦1.5m - ₦4m",
            ig: "₦1.5m - ₦4m",
            ha: "₦1.5m - ₦4m"
        },
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
            en: "Balanced residential area with good community vibes.",
            pidgin: "Area wey balance. Neighbors set and vibes dey.",
            yo: "Agbegbe ibugbe ti o ni iwọntunwọnsi pẹlu awọn gbigbọn agbegbe ti o dara.",
            ig: "Ebe obibi kwụ n’igwe nwere ezigbo mmekọrịta ndị agbata obi.",
            ha: "Yankin gidaje mai kyau da hadin kan mazauna."
        },
        priceRange: { 
            en: "₦700k - ₦1.8m", 
            pidgin: "₦700k - ₦1.8m",
            yo: "₦700k - ₦1.8m",
            ig: "₦700k - ₦1.8m",
            ha: "₦700k - ₦1.8m"
        },
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
            en: "Iconic gated city. Organized, secure, and prestigious.",
            pidgin: "Correct estate. Everywhere organize, security tight die.",
            yo: "Ilu gated ala-ilẹ. Ṣeto, aabo, ati olokiki.",
            ig: "Ebe obibi pụrụ iche a gbara ogige. Ọ nwere nhazi, nchekwa na ugwu.",
            ha: "Yankin alfarma mai daraja. Akwai tsari, tsaro da kyawon muhalli."
        },
        priceRange: { 
            en: "₦4m - ₦10m+", 
            pidgin: "₦4m - ₦10m+",
            yo: "₦4m - ₦10m+",
            ig: "₦4m - ₦10m+",
            ha: "₦4m - ₦10m+"
        },
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
                pidgin: "Estate wey set. 'Everywhere organize and rules tight well well. Parks full ground and security set Enter. VGC Club na where everyone dey relax.'",
                yo: "Ilu Ọgba. 'Eto daradara pẹlu awọn ofin ohun-ini to muna. O le wa awọn papa itura ati agbegbe ti o ni aabo pupọ. VGC Club ni ibudo awujọ akọkọ.'",
                ig: "Obodo Ogige. 'Ejiri ezigbo nhazi na iwu siri ike rụọ ya. Enwere ogige ntụrụndụ na nchekwa siri ike. VGC Club bụ isi ebe mgbakọ.'",
                ha: "Garin Lambu. 'Wuri ne mai tsari sosai da dokoki masu tsauri. Akwai wuraren shakatawa da babban tsaro. VGC Club ne babban wurin taro.'"
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
            },
            'Road 1': {
                placesToVisit: [
                    { name: 'Road 1 corridor' },
                    { name: 'Shops & services along Road 1' },
                    { name: 'Local hangout spots near Road 1' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
            'Road 2': {
                placesToVisit: [
                    { name: 'Road 2 corridor' },
                    { name: 'Shops & services along Road 2' },
                    { name: 'Local hangout spots near Road 2' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
            'Lekki-Epe Axis': {
                placesToVisit: [
                    { name: 'Lekki-Epe Axis, VGC (Victoria Garden City)' },
                    { name: 'Local market in Lekki-Epe Axis' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.4622, lng: 3.5444 }
    },
    {
        id: 'agidingbi',
        name: 'Agidingbi',
        description: {
            en: "Industrial and residential hub in Ikeja. Home to major media houses.",
            pidgin: "Center of Ikeja. TV station and plenty offices dey here.",
            yo: "Ibugbe ile-iṣẹ ati ibugbe ni Ikeja. Ile si awọn ile media pataki.",
            ig: "Ebe njikọ ụlọ ọrụ mmepụta ihe na ebe obibi na Ikeja. Ebe obibi maka nnukwu ụlọ ọrụ mgbasa ozi.",
            ha: "Zuciyar masana'antu da gidaje a Ikeja. Akwai manyan ofisoshin mgbasa ozi a nan."
        },
        priceRange: { 
            en: "₦800k - ₦2m", 
            pidgin: "₦800k - ₦2m",
            yo: "₦800k - ₦2m",
            ig: "₦800k - ₦2m",
            ha: "₦800k - ₦2m"
        },
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
        subLocalityInsights: {
            'Lateef Jakande': {
                en: "The media heart. 'Home to LTV 8 and Eko FM. Busy, professional, and well-connected to Alausa and Ogba.'",
                pidgin: "Major road vibes. 'LTV 8 dey here. Everywhere busy and you fit reach Alausa or Ogba sharply.'",
                yo: "Ọkàn media. 'Ile si LTV 8 ati Eko FM. O nšišẹ, alamọja, ati isopọ daradara si Alausa ati Ogba.'",
                ig: "Isi mgbasa ozi. 'Ebe obibi LTV 8 na Eko FM. Ọ na-ekwo ekwo ma nwee njikọ dị mma na Alausa na Ogba.'",
                ha: "Zuciyar yada labarai. 'Gidan LTV 8 da Eko FM. Akwai hada-hada kuma yana da kyakkyawar hanyar sadarwa zuwa Alausa da Ogba.'"
            },
            'Coca-Cola Axis': {
                en: "The industrial pulse. 'Famous for the iconic factory. Nearness to Ikeja City Mall makes it a sweet spot for balance.'",
                pidgin: "Coke ground! 'Factory dey here and you close to ICM Mall well well. Energy set.'",
                yo: "Ipa ile-iṣẹ. 'Olokiki fun ile-iṣẹ aami. Isunmọ si Ile-itaja rira Ikeja jẹ ki o jẹ aaye didun fun iwọntunwọnsi.'",
                ig: "Ọpụrụ ụlọ ọrụ mmepụta ihe. 'A ma ama maka ụlọ ọrụ mmepụta ihe ama ama. Ịnọ nso na Ikeja City Mall na-eme ka ọ bụrụ ezigbo ebe obibi.'",
                ha: "Zuciyar masana'antu. 'An san shi da babban kamfani. Kasancewa kusa da Ikeja City Mall ya sa ya zama wuri mai kyau don daidaito.'"
            }
        },
        subLocalityDetails: {
            'Lateef Jakande': {
                placesToVisit: [
                    { name: 'LTV 8 / Eko FM', url: 'https://ltv.tv/' },
                    { name: 'Johnson Jakande Tinubu (JJT) Park', url: 'https://www.instagram.com/lasparklagos/' },
                    { name: 'Lagos State Secretariat', url: 'https://lagosstate.gov.ng/' }
                ],
                whatToEat: [
                    { name: 'Africulture Ikeja', url: 'https://www.instagram.com/africultureikeja/' },
                    { name: 'The Place (Alausa)', url: 'https://www.theplace.com.ng/' },
                    { name: 'Bukka Hut (nearby)', url: 'https://bukkahut.com/' }
                ],
                sports: [
                    { name: 'JJT Park Jogging', type: 'Other', url: 'https://www.instagram.com/lasparklagos/' },
                    { name: 'Kanu Ndubuisi Park courts', type: 'Basketball', url: 'https://www.instagram.com/lasparklagos/' }
                ]
            },
            'Coca-Cola Axis': {
                placesToVisit: [
                    { name: 'Ikeja City Mall (3 mins away)', url: 'http://ikejacitymall.com.ng/' },
                    { name: 'Silverbird Cinemas (ICM)', url: 'https://silverbirdcinemas.com/cinema/ikeja/' }
                ],
                whatToEat: [
                    { name: 'Ocean Basket ICM', url: 'https://www.instagram.com/oceanbasket_nigeria/' },
                    { name: 'Spur family restaurant', url: 'https://www.instagram.com/spur_nigeria/' },
                    { name: 'Street grills on Agidingbi road' }
                ],
                sports: [
                    { name: 'ICM Fitness Hub', type: 'Gym' },
                    { name: 'Ndubuisi Kanu Park', type: 'Other', url: 'https://www.instagram.com/lasparklagos/' }
                ]
            },
            'Acme': {
                placesToVisit: [
                    { name: 'Acme Road Industrial Hub' },
                    { name: 'Konga HQ (nearby)', url: 'https://www.konga.com' }
                ],
                whatToEat: [
                    { name: 'Lunch joints for professionals' },
                    { name: 'Canteen hubs' }
                ],
                sports: [
                    { name: 'Roadside gyms', type: 'Gym' }
                ]
            },
            'Cadbury Axis': {
                placesToVisit: [
                    { name: 'Cadbury Factory (Smell the chocolate!)' },
                    { name: 'Acme Road shops' }
                ],
                whatToEat: [
                    { name: 'Amala joints near factory' },
                    { name: 'Local grills' }
                ],
                sports: [
                    { name: 'Community ball', type: 'Football' }
                ]
            }
        },
        coords: { lat: 6.6122, lng: 3.3444 }
    },
    {
        id: 'akoka',
        name: 'Akoka',
        description: {
            en: "The student hub of Lagos. Very lively and youthful.",
            pidgin: "Students headquarter. Vibes and books full everywhere.",
            yo: "Ibudo ọmọ ile-iwe ti Lagos. Larinrin pupọ ati ọdọ.",
            ig: "Ebe mgbakọ ụmụ akwụkwọ na Lagos. Ọ na-ekwo ekwo ma nwee ume ọhụrụ.",
            ha: "Zuciyar ɗalibai a Legas. Akwai rayuwa da kuzari sosai nan."
        },
        priceRange: { 
            en: "₦500k - ₦1.2m", 
            pidgin: "₦500k - ₦1.2m",
            yo: "₦500k - ₦1.2m",
            ig: "₦500k - ₦1.2m",
            ha: "₦500k - ₦1.2m"
        },
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
                pidgin: "School headquarters. 'Student vibes full here, Lagoon view set well well. Watch out for those monkeys near zoo, dem sabi thief food!'",
                yo: "Okan eko. 'Igbesi aye ọmọ ile-iwe ti o larinrin, awọn iwo lagoon ẹwa, ati awọn aaye suya arosọ. Ṣọra fun awọn obo nitosi ile zoo!'",
                ig: "Isi ebe agụmakwụkwọ. 'Mmụọ ụmụ akwụkwọ na-ekwo ekwo, nlele mmiri lagoon mara mma, na ebe suya ama ama. Kpachara anya maka enwe ndị nọ n’akụkụ ogige anụmanụ!'",
                ha: "Zuciyar ilimi. 'Rayuwar ɗalibai mai daɗi, kyawun kallon ruwa, da wuraren suya na musamman. Yi hattara da birai kusa da gidan namun daji!'"
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
            },
            'Fed. Coll. Education': {
                placesToVisit: [
                    { name: 'Fed. Coll. Education campus axis' },
                    { name: 'Student arts & culture spaces' },
                    { name: 'Akoka tech & learning hubs' },
                ],
                whatToEat: [
                    { name: 'Campus canteen & cafeteria' },
                    { name: 'Student-belt buka joints' },
                    { name: 'Indomie, shawarma & fast food' },
                ],
                sports: [
                    { name: 'Campus football pitch', type: 'Football' },
                    { name: 'Campus sports complex', type: 'Other' },
                    { name: 'Basketball courts', type: 'Basketball' },
                ]
            },
            'St. Finbarrs': {
                placesToVisit: [
                    { name: 'St. Finbarrs campus axis' },
                    { name: 'Student arts & culture spaces' },
                    { name: 'Akoka tech & learning hubs' },
                ],
                whatToEat: [
                    { name: 'Campus canteen & cafeteria' },
                    { name: 'Student-belt buka joints' },
                    { name: 'Indomie, shawarma & fast food' },
                ],
                sports: [
                    { name: 'Campus football pitch', type: 'Football' },
                    { name: 'Campus sports complex', type: 'Other' },
                    { name: 'Basketball courts', type: 'Basketball' },
                ]
            },
            'University Road': {
                placesToVisit: [
                    { name: 'University Road campus axis' },
                    { name: 'Student arts & culture spaces' },
                    { name: 'Akoka tech & learning hubs' },
                ],
                whatToEat: [
                    { name: 'Campus canteen & cafeteria' },
                    { name: 'Student-belt buka joints' },
                    { name: 'Indomie, shawarma & fast food' },
                ],
                sports: [
                    { name: 'Campus football pitch', type: 'Football' },
                    { name: 'Campus sports complex', type: 'Other' },
                    { name: 'Basketball courts', type: 'Basketball' },
                ]
            },
            'Pako': {
                placesToVisit: [
                    { name: 'Pako, Akoka' },
                    { name: 'Local market in Pako' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.5122, lng: 3.3944 }
    },
    {
        id: 'computer_village',
        name: 'Computer Village',
        description: {
            en: "The largest ICT hub in Africa. Extreme hustle and bustle.",
            pidgin: "ICT center. Hustle and gadget full everywhere. No sleeping.",
            yo: "Ibudo ICT ti o tobi julọ ni Afirika. Hustle nla ati bustle.",
            ig: "Isi ebe ICT kasị ukwuu n’Afrịka. Ịgba mbọ n’ebe niile.",
            ha: "Babban wurin fasahar ICT a Afirika. Akwai fafutuka sosai nan."
        },
        priceRange: { 
            en: "₦1m - ₦3m", 
            pidgin: "₦1m - ₦3m",
            yo: "₦1m - ₦3m",
            ig: "₦1m - ₦3m",
            ha: "₦1m - ₦3m"
        },
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
                pidgin: "Tech headquarters. 'Gadget and repair full here. Price set die but use your eye waka, no let dem play you.'",
                yo: "Igbigo ICT. 'Awọn ohun elo, awọn atunṣe, ati hustle nla. Ibi ti o dara julọ fun awọn iṣowo imọ-ẹrọ ṣugbọn tọju ọgbọn rẹ nipa rẹ.'",
                ig: "Isi ebe ICT. 'Enwere igwe, ndozi ha, na nnukwu mbọ. Ebe kacha mma maka azụmahịa mana kpachara anya nke ọma.'",
                ha: "Zuciyar fasaha. 'Akwai na'urori, gyare-gyare, da fafutuka sosai. Wuri ne mafi kyau don sayen na'urori amma ka yi hattara kar a yaudare ka.'"
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
            },
            'Pepple Street': {
                placesToVisit: [
                    { name: 'Pepple Street corridor' },
                    { name: 'Shops & services along Pepple Street' },
                    { name: 'Local hangout spots near Pepple Street' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
            'Simbiat Abiola': {
                placesToVisit: [
                    { name: 'Simbiat Abiola, Computer Village' },
                    { name: 'Local market in Simbiat Abiola' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Medical Road': {
                placesToVisit: [
                    { name: 'Medical Road corridor' },
                    { name: 'Shops & services along Medical Road' },
                    { name: 'Local hangout spots near Medical Road' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
            'Oremeji': {
                placesToVisit: [
                    { name: 'Oremeji, Computer Village' },
                    { name: 'Local market in Oremeji' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.5922, lng: 3.3344 }
    },
    {
        id: 'idumota',
        name: 'Idumota / Market',
        description: {
            en: "Historic commercial center on Lagos Island. Maximum activity.",
            pidgin: "Market center for Island. Business full gidigba.",
            yo: "Ile-iṣẹ iṣowo itan-akọọlẹ lori Lagos Island. Iṣẹ ṣiṣe ti o pọju.",
            ig: "Isi ebe azụmahịa akụkọ ihe mere eme na Lagos Island. Ọ na-ekwo ekwo nke ukwuu.",
            ha: "Zuciyar kasuwanci a tsibirin Legas. Akwai hada-hada sosai nan."
        },
        priceRange: { 
            en: "₦800k - ₦2m", 
            pidgin: "₦800k - ₦2m",
            yo: "₦800k - ₦2m",
            ig: "₦800k - ₦2m",
            ha: "₦800k - ₦2m"
        },
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
                pidgin: "Cloth headquarters. 'Correct material and ready-made full here. The place be like maze, follow person wey sabi road.'",
                yo: "Olu-ilu aṣa. 'Awọn aṣọ ti o dara julọ ati awọn ege ti o ṣetan lati wọ. O jẹ maze, nitorinaa lo itọsọna kan ti o ba jẹ igba akọkọ rẹ.'",
                ig: "Isi ebe ejiji. 'Ebe kacha mma maka akwa na ejiji ọhụrụ. Ọ dị mgbagwoju anya, yabụ jiri onye nduzi ma ọ bụrụ na ọ bụ oge mbụ gị.'",
                ha: "Wurin dinki da kwalliya. 'Akwai yadudduka masu kyau da riguna na zamani. Wurin yana da rikitarwa, don haka ka samu jagora in ba ka saba ba.'"
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
            },
            'Tom Jones': {
                placesToVisit: [
                    { name: 'Tom Jones, Idumota / Market' },
                    { name: 'Local market in Tom Jones' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Nnamdi Azikiwe': {
                placesToVisit: [
                    { name: 'Nnamdi Azikiwe, Idumota / Market' },
                    { name: 'Local market in Nnamdi Azikiwe' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'CMS': {
                placesToVisit: [
                    { name: 'CMS commercial corridor' },
                    { name: 'Idumota / Market heritage landmarks & architecture' },
                    { name: 'Banks, offices & business hubs' },
                ],
                whatToEat: [
                    { name: 'Quick-serve restaurants & lunch joints' },
                    { name: 'Street buka & canteen options' },
                    { name: 'Fine dining on nearby waterfront' },
                ],
                sports: [
                    { name: 'Nearby indoor recreation center', type: 'Other' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Marina': {
                placesToVisit: [
                    { name: 'Marina commercial corridor' },
                    { name: 'Idumota / Market heritage landmarks & architecture' },
                    { name: 'Banks, offices & business hubs' },
                ],
                whatToEat: [
                    { name: 'Quick-serve restaurants & lunch joints' },
                    { name: 'Street buka & canteen options' },
                    { name: 'Fine dining on nearby waterfront' },
                ],
                sports: [
                    { name: 'Nearby indoor recreation center', type: 'Other' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.4522, lng: 3.3887 }
    },
    {
        id: 'iju_ishaga',
        name: 'Iju Ishaga',
        description: {
            en: "Deep mainland residential area. Quiet and very affordable.",
            pidgin: "Mainland inside. Everywhere calm and house cheap.",
            yo: "Agbegbe ibugbe nla ti mainland. Idakẹjẹ ati ifarada pupọ.",
            ig: "Ebe obibi dị n’ime ala. Ọ dị jụụ ma ọnụ ego ụlọ ya dị mma.",
            ha: "Yankin gidaje a can cikin babban tili. Akwai sanyi da arahar gidaje."
        },
        priceRange: { 
            en: "₦300k - ₦700k", 
            pidgin: "₦300k - ₦700k",
            yo: "₦300k - ₦700k",
            ig: "₦300k - ₦700k",
            ha: "₦300k - ₦700k"
        },
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
                pidgin: "Everywhere bubbling. 'Junction set well well, office and house full here and close to Agege/Ogba.'",
                yo: "Ipele idagbasoke. 'Ibugbe larinrin ati ikorita iṣowo ti o so pọ mọ ọpọlọpọ awọn agbegbe nla ti ilu.'",
                ig: "Ebe na-eto eto. 'Ebe obibi na azụmahịa na-ekwo ekwo nke jikọtara mpaghara dị iche iche.'",
                ha: "Yankin da ke bunƙasa. 'Gidaje da ofisoshi na ta ƙaruwa a wannan mashata da ke haɗa sassa daban-daban.'"
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
            },
            'Iju Station': {
                placesToVisit: [
                    { name: 'Iju Station, Iju Ishaga' },
                    { name: 'Local market in Iju Station' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Ishaga': {
                placesToVisit: [
                    { name: 'Ishaga, Iju Ishaga' },
                    { name: 'Local market in Ishaga' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Agege Border': {
                placesToVisit: [
                    { name: 'Agege Border transit & connecting axis' },
                    { name: 'Local market near Agege Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Obawole': {
                placesToVisit: [
                    { name: 'Obawole, Iju Ishaga' },
                    { name: 'Local market in Obawole' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.6622, lng: 3.3244 },
    },
    {
        id: 'jibowu',
        name: 'Jibowu',
        description: {
            en: "The transport gateway of the mainland. Very central and active.",
            pidgin: "Waka headquarters for mainland. E central and movement clear.",
            yo: "Ẹnu-ọna gbigbe ti olu-ilu. Gan aarin ati lọwọ.",
            ig: "Isi ebe njem na Lagos Island. Ọ dị ezigbo n’etiti ma na-ekwo ekwo mgbe niile.",
            ha: "Mashatar sufuri ta babban tili. Wuri ne mai muhimmanci don zirga-zirga."
        },
        priceRange: { 
            en: "₦800k - ₦2m", 
            pidgin: "₦800k - ₦2m",
            yo: "₦800k - ₦2m",
            ig: "₦800k - ₦2m",
            ha: "₦800k - ₦2m"
        },
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
                pidgin: "Travel headquarters. 'If you wan travel long distance, na here. Central well well for mainland.'",
                yo: "Ọba isopọ. 'Ibudo ti o wa ni imọran fun awọn ọkọ ayọkẹlẹ igbadun ati awọn arinrin-ajo olu-ilu.'",
                ig: "Ebe njikọ ụzọ. 'Ebe a haziri nke ọma maka ụgbọala okomoko na ndị na-eme njem n’ime ala.'",
                ha: "Sarkin haɗi. 'Wuri ne mai muhimmanci ga manyan motocin sufuri da matafiya.'"
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
            },
            'Yaba Border': {
                placesToVisit: [
                    { name: 'Yaba Border transit & connecting axis' },
                    { name: 'Local market near Yaba Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Shomolu Border': {
                placesToVisit: [
                    { name: 'Shomolu Border transit & connecting axis' },
                    { name: 'Local market near Shomolu Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Ikorodu Road Axis': {
                placesToVisit: [
                    { name: 'Ikorodu Road Axis corridor' },
                    { name: 'Shops & services along Ikorodu Road Axis' },
                    { name: 'Local hangout spots near Ikorodu Road Axis' },
                ],
                whatToEat: [
                    { name: 'Roadside food kiosks & buka joints' },
                    { name: 'Evening suya & grills' },
                    { name: 'Street shawarma & small chops' },
                ],
                sports: [
                    { name: 'Roadside football centers', type: 'Football' },
                    { name: 'Road jogging route', type: 'Other' },
                    { name: 'Local gym on the road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.5222, lng: 3.3744 },
    },
    {
        id: 'meiran',
        name: 'Meiran',
        description: {
            en: "Quiet residential Alimosho suburb. Growing community.",
            pidgin: "Alimosho quiet side. Everywhere dey grow sharply.",
            yo: "Agbegbe Alimosho ibugbe idakẹjẹ. Dagba agbegbe.",
            ig: "Ebe obibi Alimosho dị jụụ. Ọ na-eto nke ọma.",
            ha: "Yankin Alimosho mai natsuwa. Akwai ci gaba sosai nan."
        },
        priceRange: { 
            en: "₦250k - ₦600k", 
            pidgin: "₦250k - ₦600k",
            yo: "₦250k - ₦600k",
            ig: "₦250k - ₦600k",
            ha: "₦250k - ₦600k"
        },
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
                pidgin: "Area wey dey blow. 'New estate full ground. Island far small but everywhere calm and house cheap.'",
                yo: "Imugboroosi ibugbe. 'Dagba agbegbe pẹlu ọpọlọpọ awọn titun ohun-ini. O jẹ diẹ ninu ijinna ṣugbọn alaafia ati ilẹ ti ifarada fa ọpọlọpọ nibi.'",
                ig: "Mmeba mpaghara obibi. 'Obodo na-eto eto nwere ọtụtụ estate ọhụrụ. Ọ dị anya mana udo na ala dị ọnụ ala na-adọta ọtụtụ ndị ebe a.'",
                ha: "Faɗaɗa mazauni. 'Yankin da ke haɓaka tare da sabbin gidajen mazauni da yawa. Akwai nisa kaɗan amma zaman lafiya da filaye masu araha na jawo hankalin mutane.'"
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
            },
            'Command Border': {
                placesToVisit: [
                    { name: 'Command Border transit & connecting axis' },
                    { name: 'Local market near Command Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Abule Egba Border': {
                placesToVisit: [
                    { name: 'Abule Egba Border transit & connecting axis' },
                    { name: 'Local market near Abule Egba Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Lagos-Abeokuta Axis': {
                placesToVisit: [
                    { name: 'Lagos-Abeokuta Axis, Meiran' },
                    { name: 'Local market in Lagos-Abeokuta Axis' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.6622, lng: 3.2644 },
    },
    {
        id: 'palmgrove',
        name: 'Palmgrove',
        description: {
            en: "Peaceful and very accessible mainland estate and neighborhood.",
            pidgin: "Jeje estate for mainland. Road set well well.",
            yo: "Alaafia ati pupọ wiwọle mainland estate ati adugbo.",
            ig: "Ebe obibi dị jụụ ma dị mfe n’ime ala. Ụzọ ya dị mma.",
            ha: "Yankin gidaje mai sanyi da sauƙin shiga a babban tili."
        },
        priceRange: { 
            en: "₦1.2m - ₦3m", 
            pidgin: "₦1.2m - ₦3m",
            yo: "₦1.2m - ₦3m",
            ig: "₦1.2m - ₦3m",
            ha: "₦1.2m - ₦3m"
        },
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
                pidgin: "Jeje ground. 'Everywhere calm for inside mainland. You fit enter 3rd Mainland Bridge sharply from here.'",
                yo: "Ipele alaafia. 'Ti a mọ fun idakẹjẹ rẹ ni aringbungbun ti olu-ilu nšišẹ. Daradara-ti sopọ si 3rd Mainland Bridge.'",
                ig: "Isi ebe udo. 'A ma ama ya maka njụụ ya n’etiti mpaghara na-ekwo ekwo n’ime ala. Ọ nwere ezigbo njikọ na 3rd Mainland Bridge.'",
                ha: "Zuciyar zaman lafiya. 'An san shi da natsuwa a tsakiyar hada-hadar babban tili. Yana da haɗi mai kyau da gadar 3rd Mainland.'"
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
            },
            'Shomolu Border': {
                placesToVisit: [
                    { name: 'Shomolu Border transit & connecting axis' },
                    { name: 'Local market near Shomolu Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Onipanu Border': {
                placesToVisit: [
                    { name: 'Onipanu Border transit & connecting axis' },
                    { name: 'Local market near Onipanu Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.5422, lng: 3.3744 }
    },
    {
        id: 'satellite_town',
        name: 'Satellite Town',
        description: {
            en: "Long-standing residential community near Festac.",
            pidgin: "Old school ground near Festac. Correct residential vibe.",
            yo: "Ibugbe igba pipẹ agbegbe nitosi Festac.",
            ig: "Ebe obibi mepere anya dị nso na Festac.",
            ha: "Tsohon yankin gidaje ne kusa da Festac."
        },
        priceRange: { 
            en: "₦500k - ₦1.2m", 
            pidgin: "₦500k - ₦1.2m",
            yo: "₦500k - ₦1.2m",
            ig: "₦500k - ₦1.2m",
            ha: "₦500k - ₦1.2m"
        },
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
                pidgin: "Security base. 'Navy people full here so everywhere safe and organize. Road set and discipline dey ground.'",
                yo: "Aabo & Oniduro. 'Ọkan ninu awọn ẹya ti o ni aabo julọ ti Ilu Satẹlaiti nitori wiwa ọkọ oju omi. Awọn opopona to dara ati ṣeto pupọ.'",
                ig: "Nchekwa na Ịdọ aka ná ntị. 'Otu n’ime ebe kacha nwee nchekwa na Satellite Town n’ihi ndị agha mmiri nọ ebe ahụ. Okporo ụzọ ya dị mma ma nwee nhazi.'",
                ha: "Tsaro da Horo. 'Daya daga cikin wuraren da suka fi tsaro a Satellite Town saboda kasancewar sojojin ruwa. Kyawun tituna da tsarin gari.'"
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
            },
            'Festac Border': {
                placesToVisit: [
                    { name: 'Festac Border transit & connecting axis' },
                    { name: 'Local market near Festac Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Abule Ado': {
                placesToVisit: [
                    { name: 'Abule Ado, Satellite Town' },
                    { name: 'Local market in Abule Ado' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Ijegun Border': {
                placesToVisit: [
                    { name: 'Ijegun Border transit & connecting axis' },
                    { name: 'Local market near Ijegun Border' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
        },
        coords: { lat: 6.4422, lng: 3.2644 }
    },
    {
        id: 'ojo',
        name: 'Ojo',
        description: {
            en: "Major commercial hub home to the biggest electronics market in Africa.",
            pidgin: "Market headquarter. Everything electronics and LASU vibes.",
            yo: "Ile-iṣẹ iṣowo pataki ile si ọja eletiriki ti o tobi julọ ni Afirika.",
            ig: "Isi ebe azụmahịa ebe enwere nnukwu ahịa ngwa eletrik n’Afrịka.",
            ha: "Babban wurin kasuwanci wanda ke da babbar kasuwar na'urorin lantarki a Afirika."
        },
        priceRange: { 
            en: "₦300k - ₦700k", 
            pidgin: "₦300k - ₦700k",
            yo: "₦300k - ₦700k",
            ig: "₦300k - ₦700k",
            ha: "₦300k - ₦700k"
        },
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
            },
            'LASU Axis': {
                placesToVisit: [
                    { name: 'LASU Axis, Ojo' },
                    { name: 'Local market in LASU Axis' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'PPL': {
                placesToVisit: [
                    { name: 'PPL, Ojo' },
                    { name: 'Local market in PPL' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Okokomaiko': {
                placesToVisit: [
                    { name: 'Okokomaiko, Ojo' },
                    { name: 'Local market in Okokomaiko' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.4562, lng: 3.1844 }
    },
    {
        id: 'epe',
        name: 'Epe',
        description: {
            en: "Coastal town famous for its fish market and serene environment.",
            pidgin: "Fish headquarters. Ground cool and fresh air full everywhere.",
            yo: "Ilu eti okun olokiki fun ọja ẹja rẹ ati agbegbe serene.",
            ig: "Obodo dị n’akụkụ osimiri ama ama maka ahịa azụ na ebe mara mma.",
            ha: "Garin dake bakin teku, sananne ne saboda kasuwar kifi da sanyin muhalli."
        },
        priceRange: { 
            en: "₦200k - ₦600k", 
            pidgin: "₦200k - ₦600k",
            yo: "₦200k - ₦600k",
            ig: "₦200k - ₦600k",
            ha: "₦200k - ₦600k"
        },
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
            },
            'T-Junction': {
                placesToVisit: [
                    { name: 'T-Junction transit & connecting axis' },
                    { name: 'Local market near T-Junction' },
                    { name: 'Community gathering spots' },
                ],
                whatToEat: [
                    { name: 'Street puff-puff & akara stalls' },
                    { name: 'Buka rice & stew' },
                    { name: 'Roasted corn & suya spots' },
                ],
                sports: [
                    { name: 'Community football pitch nearby', type: 'Football' },
                    { name: 'Local gym near boundary road', type: 'Gym' },
                ]
            },
            'Alaro City': {
                placesToVisit: [
                    { name: 'Alaro City, Epe' },
                    { name: 'Local market in Alaro City' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
            'Epe Resort Axis': {
                placesToVisit: [
                    { name: 'Epe Resort Axis, Epe' },
                    { name: 'Local market in Epe Resort Axis' },
                    { name: 'Community park & open spaces' },
                ],
                whatToEat: [
                    { name: 'Amala & ewedu joints' },
                    { name: 'Street suya & bole evening spots' },
                    { name: 'Local buka & canteen' },
                ],
                sports: [
                    { name: 'Community football pitch', type: 'Football' },
                    { name: 'Local private gym', type: 'Gym' },
                    { name: 'Road jogging route', type: 'Other' },
                ]
            },
        },
        coords: { lat: 6.5842, lng: 3.9844 }
    }
];
