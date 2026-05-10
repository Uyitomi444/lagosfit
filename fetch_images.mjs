import fs from 'fs';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const FILE_PATH = 'src/data/budget_outings.ts';

const SAFE_DOMAINS = [
    'tripadvisor.com', 'instagram.com', 'facebook.com', 'twitter.com',
    'pinterest.com', 'foursquare.com', 'yelp.com', 'timeout.com',
    'eatdrinklagos.com', 'lostinlagos.com', 'hotels.ng', 'googleusercontent.com',
    'booking.com', 'agoda.com', 'nairaland.com', 'guardian.ng', 'vanguardngr.com',
    'punchng.com', 'pulse.ng', 'bellanaija.com', 'businessday.ng'
];

async function fetchImageForQuery(query) {
    try {
        // Enforce strict safe search
        const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&form=HDRSC3&adlt=strict`;
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
                'Cookie': 'SRCHHPGUSR=ADLT=DEMOTE&NRSLT=50' // Enforce SafeSearch via cookie as well
            }
        });
        const html = await res.text();
        const $ = cheerio.load(html);
        
        let imageUrl = null;
        
        $('a.iusc').each((i, el) => {
            if (imageUrl) return; // Already found one
            
            const mData = $(el).attr('m');
            if (mData) {
                try {
                    const parsed = JSON.parse(mData);
                    if (parsed && parsed.murl) {
                        const murl = parsed.murl.toLowerCase();
                        
                        // Strict filtering
                        const isNsfw = murl.includes('xxx') || murl.includes('porn') || murl.includes('sex') || murl.includes('nude') || murl.includes('rule34');
                        if (isNsfw) return;
                        
                        // It's better to accept any standard image from a safe-looking URL
                        // Just ensure it ends in an image extension
                        if (murl.endsWith('.jpg') || murl.endsWith('.jpeg') || murl.endsWith('.png') || murl.includes('images.unsplash.com') || murl.includes('tripadvisor')) {
                            imageUrl = parsed.murl;
                        }
                    }
                } catch(e) {}
            }
        });
        
        return imageUrl;
    } catch (err) {
        return null;
    }
}

async function processFile() {
    let content = fs.readFileSync(FILE_PATH, 'utf-8');
    
    if (!content.includes('imageUrl?: string;')) {
        content = content.replace('rating?: number;', 'rating?: number;\n    imageUrl?: string;');
    }

    const nameRegex = /name:\s*['"]([^'"]+)['"]/g;
    let match;
    const names = [];
    while ((match = nameRegex.exec(content)) !== null) {
        names.push(match[1]);
    }

    console.log(`Found ${names.length} items. Fetching safe images...`);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    for (const name of names) {
        const blockRegex = new RegExp(`name:\\s*['"]${name.replace(/[.*+?^$\{()|\[\]\\]/g, '\\$&')}['"][\\s\\S]*?(?=\\n\\s*\\},|\\n\\s*\\}\\n]|\\]|$)`, 'm');
        const blockMatch = content.match(blockRegex);
        
        if (blockMatch && !blockMatch[0].includes('imageUrl:')) {
            console.log(`Fetching image for: ${name}`);
            const query = `${name} Lagos Nigeria`; // Added Nigeria for better accuracy
            const imageUrl = await fetchImageForQuery(query);
            
            if (imageUrl) {
                console.log(`  -> Found safe image: ${imageUrl}`);
                const replacement = blockMatch[0].trim() + `,\n        imageUrl: '${imageUrl.replace(/'/g, "\\'")}'`;
                content = content.replace(blockMatch[0], replacement);
            } else {
                // Fallback to Unsplash based on a keyword in the name if bing fails
                const fallbackUrl = `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800`; // generic fallback
                console.log(`  -> No image found. Using generic fallback.`);
                const replacement = blockMatch[0].trim() + `,\n        imageUrl: '${fallbackUrl}'`;
                content = content.replace(blockMatch[0], replacement);
            }
            await delay(500); // 0.5s delay
        }
    }

    fs.writeFileSync(FILE_PATH, content);
    console.log('Done adding images!');
}

processFile().catch(console.error);
