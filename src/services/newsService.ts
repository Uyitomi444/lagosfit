import { type BlogPost } from '../data/news_data';

const FEEDS = [
    { url: 'https://thelagostoday.com/feed/', source: 'The Lagos Today' },
    { url: 'https://guardian.ng/category/news/nigeria/metro/feed/', source: 'The Guardian' }
];

const PROXY_URL = 'https://api.allorigins.win/get?url=';

export const getLatestNews = async (): Promise<BlogPost[]> => {
    try {
        const fetchPromises = FEEDS.map(async (feed) => {
            try {
                const response = await fetch(`${PROXY_URL}${encodeURIComponent(feed.url)}`);
                if (!response.ok) return [];
                
                const data = await response.json();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data.contents, "text/xml");
                const items = xmlDoc.querySelectorAll("item");

                return Array.from(items).map((item, index) => {
                    const title = item.querySelector("title")?.textContent || "Untitled";
                    const link = item.querySelector("link")?.textContent || "";
                    const description = item.querySelector("description")?.textContent || "";
                    // Support content:encoded or description
                    const content = item.getElementsByTagName("content:encoded")[0]?.textContent || 
                                  item.getElementsByTagName("description")[0]?.textContent || "";
                    const pubDate = item.querySelector("pubDate")?.textContent || "";
                    
                    const slug = link.split('/').filter(Boolean).pop() || `news-${index}`;
                    
                    // Extract image from multiple potential sources
                    let image = "";
                    const mediaContent = item.getElementsByTagName("media:content")[0];
                    if (mediaContent && mediaContent.getAttribute("url")) {
                        image = mediaContent.getAttribute("url") || "";
                    } else {
                        const imgMatch = (content + description).match(/src="([^"]+)"/);
                        image = imgMatch ? imgMatch[1] : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800";
                    }

                    return {
                        id: `${feed.source.replace(' ', '-')}-${index}`,
                        title,
                        slug,
                        excerpt: description.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...',
                        image,
                        category: feed.source,
                        author: feed.source,
                        createdAt: { seconds: Math.floor(new Date(pubDate).getTime() / 1000) },
                        url: link,
                        content: content || description
                    } as BlogPost;
                });
            } catch (err) {
                console.error(`Error fetching feed ${feed.url}:`, err);
                return [];
            }
        });

        const results = await Promise.all(fetchPromises);
        const allPosts = results.flat();
        
        // Sort by date (descending)
        return allPosts.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
    } catch (error) {
        console.error('Error fetching real-time news:', error);
        return [];
    }
};
