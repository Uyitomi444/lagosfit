export interface AgentContact {
    name: string;
    phone: string;
    email: string;
    whatsapp?: string;
    location?: string;
    type: 'individual';
}

export interface AgencyListing {
    name: string;
    rating: number;
    description: string;
    website?: string;
    phone?: string;
    email?: string;
    address?: string;
    type: 'agency';
}

export interface TikTokHandle {
    handle: string;
    description: string;
    url: string;
}



// ─── TikTok Real Estate Handles ───
export const TIKTOK_HANDLES: TikTokHandle[] = [
    {
        handle: '@thenaijarealestateguide',
        description: 'Real estate tours & guides across Nigeria',
        url: 'https://www.tiktok.com/@thenaijarealestateguide'
    },
    {
        handle: '@househuntinglagos',
        description: 'Lagos property walkthroughs & rentals',
        url: 'https://www.tiktok.com/@househuntinglagos'
    },
    {
        handle: '@the_estatevaluer',
        description: 'Valuations & market trend content',
        url: 'https://www.tiktok.com/@the_estatevaluer'
    },
    {
        handle: '@realtorpeaceodegua',
        description: 'Real estate agent selling land & houses in Lagos',
        url: 'https://www.tiktok.com/@realtorpeaceodegua'
    },
    {
        handle: '@bintu_propertiesltd',
        description: 'Lagos property listings & promotions',
        url: 'https://www.tiktok.com/@bintu_propertiesltd'
    },
    {
        handle: '@lagosrealestateinsider',
        description: 'Property market insights, listings & podcasts',
        url: 'https://www.tiktok.com/@lagosrealestateinsider'
    },
    {
        handle: '@rentmates.ng',
        description: 'Roommate matching & shared apartment listings',
        url: 'https://www.tiktok.com/@rentmates.ng'
    },
    {
        handle: '@holla_jay_properties',
        description: 'Property listings & apartment tours',
        url: 'https://www.tiktok.com/@holla_jay_properties'
    },
    {
        handle: '@holinessconsultantagency',
        description: 'Real estate consulting & property services',
        url: 'https://www.tiktok.com/@holinessconsultantagency'
    },
    {
        handle: '@lexy_realtor',
        description: 'Lagos apartment hunting & property deals',
        url: 'https://www.tiktok.com/@lexy_realtor'
    },
    {
        handle: '@deedsproperties',
        description: 'Verified property listings & agent services',
        url: 'https://www.tiktok.com/@deedsproperties'
    }
];

// ─── Individual Agents ───
export const AGENTS: AgentContact[] = [
    {
        name: 'Damilola Ibukunmi',
        phone: '08166382503',
        email: 'damikorede.deshnautilus@gmail.com',
        whatsapp: '2348166382503',
        type: 'individual'
    },
    {
        name: 'Oyeronke Oyediran',
        phone: '07063922741',
        email: 'rosepaullp@gmail.com',
        whatsapp: '2347063922741',
        type: 'individual'
    },
    {
        name: 'Olayiwola Fagboyegun',
        phone: '08035455020',
        email: 'lfassociates2012@gmail.com',
        whatsapp: '2348035455020',
        type: 'individual'
    },
    {
        name: 'Abdulaziz Yusuf',
        phone: '07042130934',
        email: 'abdulazizyusuf737@gmail.com',
        whatsapp: '2347042130934',
        type: 'individual'
    },
    {
        name: 'Elijah Ugah',
        phone: '07030311744',
        email: 'azudupeopletalk@yahoo.com',
        whatsapp: '2347030311744',
        type: 'individual'
    },
    {
        name: 'Mojisola Aramide',
        phone: '08167832731',
        email: 'mojisolaaramide@gmail.com',
        whatsapp: '2348167832731',
        type: 'individual'
    },
    {
        name: 'Christopher Kalaro',
        phone: '08175978885',
        email: 'kalarolaw@gmail.com',
        whatsapp: '2348175978885',
        type: 'individual'
    },
    {
        name: 'DABERE HOMES',
        phone: '08163341115',
        email: 'daberehomes@gmail.com',
        whatsapp: '2348163341115',
        type: 'individual'
    },
    {
        name: 'Hilary Nwabuko',
        phone: '08177666388',
        email: 'hilarynwabuko@yahoo.com',
        whatsapp: '2348177666388',
        type: 'individual'
    }
];

// ─── Agencies ───
export const AGENCIES: AgencyListing[] = [
    {
        name: 'Florence Homes Realtor',
        rating: 5.0,
        description: 'Residential property sales and rentals.',
        website: 'https://florencehomes.ng',
        phone: '07018087285',
        email: 'info@florencehomes.ng',
        address: 'Km 48, Sangotedo Lekki, Lagos',
        type: 'agency'
    },
    {
        name: 'Superite Africa',
        rating: 4.4,
        description: 'Commercial and residential real estate services.',
        website: 'https://superiteafrica.com',
        phone: '+2347051883525',
        email: 'contact@superiteafrica.com',
        address: 'Plot 14A, Adewale Kolawole Crescent, Oniru, Victoria Island',
        type: 'agency'
    },
    {
        name: 'Patriotic Homes & Properties Ltd',
        rating: 5.0,
        description: 'Full property services including rentals and maintenance.',
        website: 'https://patriotichomesltd.com',
        phone: '09055559001',
        email: 'info@patriotichomesltd.com',
        address: 'Suite 9 Covel Plaza, Lekki-Epe Expressway, Ibeju-Lekki',
        type: 'agency'
    },
    {
        name: 'Kentas Homes & Properties',
        rating: 5.0,
        description: 'Real estate consulting and property services.',
        website: 'https://kentashomes.com',
        phone: '09085842255',
        address: 'Km 48 Lekki Epe Express Way, Lekki Ajah, Lagos',
        type: 'agency'
    },
    {
        name: 'Samson Agbato Consulting',
        rating: 4.8,
        description: 'Real estate consulting, valuation, and agent services.',
        website: 'https://samsonagbato.com',
        phone: '+2348037107008',
        email: 'info@samsonagbato.com',
        address: 'Buifort Gardens, 56 Alhaji Bankole Crescent, Ikeja',
        type: 'agency'
    },
    {
        name: 'Geoponts Properties Ltd',
        rating: 5.0,
        description: 'Property buying and selling services.',
        website: 'https://geopontsproperties.com',
        phone: '+2348084410146',
        email: 'info@geopontsproperties.com',
        address: 'Phase 2, 781 Somide Odujinrin Ave, Omole Phase 1, Ikeja',
        type: 'agency'
    },
    {
        name: 'Bestate Investments',
        rating: 5.0,
        description: 'Residential property sales.',
        website: 'https://bestateng.com',
        phone: '08090651344',
        email: 'info@bestateng.com',
        address: '26 Akin Leigh Crescent, Off Admiralty Way, Lekki Phase 1',
        type: 'agency'
    },
    {
        name: 'KGL Realty Pro',
        rating: 5.0,
        description: 'Luxury real estate marketing, brokerage, and investments.',
        website: 'https://kglrealtypro.com',
        phone: '+2347038141774',
        email: 'hello@kglrealtypro.com',
        address: 'Suit 53, Road 5, Ikota Shopping Complex VGC, Lekki',
        type: 'agency'
    },
    {
        name: 'Jide Taiwo & Co',
        rating: 4.6,
        description: 'Estate agents with property portfolios across Lagos.',
        website: 'https://jidetaiwoandco.com',
        phone: '07052090092',
        email: 'info@jidetaiwoandco.com',
        address: '5 Banford Williams Close, Victoria Island, Lagos',
        type: 'agency'
    },
    {
        name: 'LandProperty.ng',
        rating: 5.0,
        description: 'Comprehensive property services across Lagos.',
        website: 'https://landproperty.ng',
        phone: '+2348028667565',
        email: 'info@landproperty.ng',
        address: 'KM 48, BRG Building, Adjacent Blenco Supermarket, Sangotedo',
        type: 'agency'
    }
];

// ─── Verified Office Agents ───
export const OFFICE_AGENTS: { name: string; address: string; phone: string; whatsapp?: string }[] = [
    {
        name: 'Real Estate Lagos',
        address: 'Suit 009, Taraba Cluster Trade Fair Complex',
        phone: '08102951775'
    },
    {
        name: 'Realox Properties Lagos',
        address: '13 Toyan Street, Obalende, Ikoyi',
        phone: '08085267072'
    },
    {
        name: 'Megat and Partners Estate Ltd',
        address: 'Block B, Alausa Shopping Complex, Ikeja',
        phone: '08023119092',
        whatsapp: '2348023119092'
    },
    {
        name: 'Wunmi Ade Ventures Ltd',
        address: 'Ojuelegba R/About, Surulere, Lagos',
        phone: '+23415452285'
    },
    {
        name: 'Barrister Alonge & Co',
        address: 'Irewole Avenue, Allen, Ikeja',
        phone: '+23414703435'
    }
];

// ─── Property type options ───
export const PROPERTY_TYPES = [
    'Self Contain',
    'Single Room',
    '1 Bedroom Flat',
    '2 Bedroom Flat',
    '3 Bedroom Flat',
    'Duplex',
    'Shared Apartment'
];
