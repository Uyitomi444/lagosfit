export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    category: string;
    author: string;
    createdAt: { seconds: number };
    url?: string;
    content?: string;
}

export const FEATURED_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'LASTMA Introduces Drone Technology to Improve Traffic Management in Lagos',
        slug: 'lastma-drone-technology-lagos',
        excerpt: 'The Lagos State Traffic Management Authority is deploying advanced drone surveillance to monitor real-time traffic and identify bottlenecks.',
        image: 'https://i0.wp.com/thelagostoday.com/wp-content/uploads/2025/09/IMG_2834.webp',
        category: 'Lagos Tech',
        author: 'The Lagos Today',
        createdAt: { seconds: 1774828800 }, // March 30, 2026
        url: 'https://thelagostoday.com/lastma-introduces-drone-technology-to-improve-traffic-management-in-lagos/',
        content: `
            <p>The Lagos State Traffic Management Authority (LASTMA) has taken a significant leap forward in urban mobility management by officially introducing drone technology into its daily operations. This move, sanctioned by the Ministry of Transportation, aims to provide real-time aerial surveillance of the city's most notorious traffic hotspots.</p>
            <p>According to the General Manager of LASTMA, the drones will be equipped with high-resolution cameras and thermal imaging to identify vehicle breakdowns, accidents, and unauthorized roadblocks as they happen. This data is transmitted instantly to a central command center, allowing for rapid deployment of officers to cleared affected routes.</p>
            <p>Lagosians can expect a more data-driven approach to traffic management, reducing the average commute time during peak hours. The pilot phase has already begun in the Ikeja and Lekki-Epe corridors.</p>
            <hr />
            <p><em>Original reporting by The Lagos Today. <a href="https://thelagostoday.com/lastma-introduces-drone-technology-to-improve-traffic-management-in-lagos/" target="_blank">Read the full article here.</a></em></p>
        `
    },
    {
        id: '2',
        title: 'Sanwo-Olu Calls on Public to Join Historic E1 Lagos Grand Prix',
        slug: 'sanwo-olu-e1-lagos-grand-prix',
        excerpt: 'Governor Sanwo-Olu invites Lagosians to witness the historic world-class electric boat race coming to the city shores.',
        image: 'https://i0.wp.com/thelagostoday.com/wp-content/uploads/2025/09/IMG_4810.jpeg',
        category: 'Entertainment',
        author: 'The Lagos Today',
        createdAt: { seconds: 1774828800 },
        url: 'https://thelagostoday.com/sanwo-olu-calls-on-public-to-join-historic-e1-lagos-grand-prix/',
        content: `
            <p>Governor Babajide Sanwo-Olu has officially invited all residents and visitors of Lagos to participate in the upcoming E1 Lagos Grand Prix. This event marks a historic milestone as the city becomes one of the few global hosts for the elite electric powerboat racing series.</p>
            <p>"Lagos is a city of water, and it is only fitting that we lead Africa into the future of sustainable aquatic sports," the Governor stated during the press briefing. The event is expected to attract thousands of international tourists, boosting the local hospitality and retail sectors.</p>
            <p>The race will take place along the scenic coastline of Victoria Island, featuring state-of-the-art electric "RaceBird" boats. The grand prix is not just about speed; it's a celebration of innovation and environmental consciousness.</p>
            <hr />
            <p><em>Original reporting by The Lagos Today. <a href="https://thelagostoday.com/sanwo-olu-calls-on-public-to-join-historic-e1-lagos-grand-prix/" target="_blank">Read the full article here.</a></em></p>
        `
    },
    {
        id: '3',
        title: 'Lagos Confirms Readiness to Host International Boat Race',
        slug: 'lagos-international-boat-race',
        excerpt: 'The Commissioner for Tourism, Arts and Culture confirms all protocols are in place for the upcoming global aquatic sports event.',
        image: 'https://i0.wp.com/thelagostoday.com/wp-content/uploads/2025/09/IMG_2972.webp',
        category: 'Sports',
        author: 'The Lagos Today',
        createdAt: { seconds: 1774828800 },
        url: 'https://thelagostoday.com/lagos-confirms-readiness-to-host-international-boat-race/',
        content: `
            <p>The Lagos State Ministry of Tourism, Arts and Culture has confirmed that all security and logistical protocols are fully in place for the highly anticipated International Boat Race. This announcement comes after a successful final inspection of the waterways and viewing decks.</p>
            <p>The race is set to feature teams from over 12 countries, competing in various categories. The Commissioner emphasized that this event serves as a platform to showcase the beauty of the Lagos lagoon and its potential for international investment.</p>
            <p>Safety remains a top priority, with the Lagos State Waterways Authority (LASWA) providing 24/7 patrol during the event duration.</p>
            <hr />
            <p><em>Original reporting by The Lagos Today. <a href="https://thelagostoday.com/lagos-confirms-readiness-to-host-international-boat-race/" target="_blank">Read the full article here.</a></em></p>
        `
    },
    {
        id: '4',
        title: 'Prop-Tech Startup Preferental Unveils Innovative Tenant-Screening App',
        slug: 'prop-tech-tenant-screening-app',
        excerpt: 'A game-changer for Lagos real estate: New app aims to solve trust issues between landlords and tenants through AI-driven screening.',
        image: 'https://i0.wp.com/thelagostoday.com/wp-content/uploads/2025/03/IMG_7533.webp',
        category: 'Prop-Tech',
        author: 'The Lagos Today',
        createdAt: { seconds: 1774828800 },
        url: 'https://thelagostoday.com/south-african-prop-tech-startup-preferental-unveils-innovative-tenant-screening-app/',
        content: `
            <p>In a city where finding a reliable tenant can be a landlord's biggest headache, prop-tech startup Preferental has launched a new tenant-screening application tailored for the Lagos market. The app uses AI algorithms to analyze credit history, past rental behavior, and professional references.</p>
            <p>The goal is to foster a more transparent rental ecosystem. Tenants with good "scores" can access properties with lower initial security deposits, while landlords enjoy peace of mind knowing their investment is in good hands.</p>
            <p>Industry experts believe this could be the solution to the long-standing "2-year rent upfront" culture in Lagos by reducing the risk associated with monthly payments.</p>
            <hr />
            <p><em>Original reporting by The Lagos Today. <a href="https://thelagostoday.com/south-african-prop-tech-startup-preferental-unveils-innovative-tenant-screening-app/" target="_blank">Read the full article here.</a></em></p>
        `
    }
];
