import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Heart, Globe, Users } from 'lucide-react';

const AboutPage = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "About LagosFit",
            subtitle: "Helping you find your place in the chaos and charm of Lagos.",
            storyTitle: "Our Story",
            storyText: "Lagos is vibrant, fast-paced, and sometimes overwhelming. With over 20 million people and dozens of unique neighborhoods, finding the right place to call home is a challenge. LagosFit was born out of a simple idea: What if you could find your perfect neighborhood in just 30 seconds? We combine data on rent, commute times, and lifestyle vibes to match you with your ideal Lagos area.",
            valuesTitle: "Why We Do This",
            values: [
                { title: "Empowerment", text: "Giving you the info you need to make smart housing decisions." },
                { title: "Authenticity", text: "Real data about real Lagos areas. No sugar-coating." },
                { title: "Simplicity", text: "House hunting is hard. This quiz shouldn't be." }
            ],
            contactTitle: "Get in Touch",
            contactText: "Have suggestions or just want to say hello? drop us a message.",
            btn: "Contact Us"
        },
        pidgin: {
            title: "About LagosFit",
            subtitle: "We dey help you find your corner inside the sweet wahala/enjoyment of Lagos.",
            storyTitle: "Who We Be?",
            storyText: "Lagos logic no be for everybody. E big, e busy, and sometimes e dey turn person eye. With plenti people and area wey different, finding house na serious work. Na why we create LagosFit: make you fit know where conform for you inside 30 seconds. We look rent money, waka distance, and how the area be generally to tell you true.",
            valuesTitle: "Why We Dey Run Am",
            values: [
                { title: "We Dey For You", text: "We wan give you correct info make you no enter 'one chance' for house matter." },
                { title: "No Film Trick", text: "Real gist about Lagos areas. As e dey be, na im we talk." },
                { title: "No Stress", text: "Looking for house hard enough. This quiz suppose dey easy." }
            ],
            contactTitle: "Holla At Us",
            contactText: "You get gist, advice, or you just wan greet? Send us mail.",
            btn: "Send Mail"
        }
    };

    const t = content[language];

    return (
        <div style={{ paddingBottom: '80px', overflowX: 'hidden' }}>
            {/* Hero Section */}
            <div style={{
                background: 'var(--primary-color)',
                color: 'white',
                padding: '80px 24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}
                >
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', fontWeight: 800 }}>{t.title}</h1>
                    <p style={{ fontSize: '1.4rem', opacity: 0.9, lineHeight: 1.5 }}>{t.subtitle}</p>
                </motion.div>

                {/* Decorative circles */}
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
            </div>

            <div className="container" style={{ padding: '60px 24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="/about_intro.png"
                            alt="Lagos Community"
                            style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow)' }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--primary-color)' }}>{t.storyTitle}</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                            {t.storyText}
                        </p>
                    </motion.div>
                </div>

                <div style={{ marginTop: '100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t.valuesTitle}</h2>
                        <div style={{ width: '60px', height: '4px', background: 'var(--accent-color)', margin: '0 auto' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        {[
                            { icon: <Globe size={32} />, ...t.values[0] },
                            { icon: <Heart size={32} />, ...t.values[1] },
                            { icon: <Users size={32} />, ...t.values[2] }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="card"
                                style={{ padding: '40px', textAlign: 'center' }}
                            >
                                <div style={{
                                    width: '64px', height: '64px',
                                    background: 'var(--secondary-bg)',
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 24px',
                                    color: 'var(--primary-color)'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ marginBottom: '16px', fontSize: '1.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '100px', background: 'var(--secondary-bg)', borderRadius: '24px', padding: '60px', textAlign: 'center' }}>
                    <Mail size={48} color="var(--primary-color)" style={{ marginBottom: '24px' }} />
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t.contactTitle}</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                        {t.contactText}
                    </p>
                    <a href="mailto:hello@lagosfit.com" className="btn btn-primary" style={{ padding: '16px 40px' }}>
                        {t.btn}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
