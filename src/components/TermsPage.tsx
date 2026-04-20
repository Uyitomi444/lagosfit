
import NavBar from './NavBar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="app-container">
      <NavBar />
      <main className="container" style={{ padding: '120px 24px 80px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
          style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', padding: '16px', background: 'rgba(var(--primary-rgb), 0.1)', borderRadius: '20px', marginBottom: '16px' }}>
              <FileText size={32} color="var(--primary-color)" />
            </div>
            <h1>Terms of Service</h1>
            <p style={{ color: 'var(--text-muted)' }}>Effective Date: April 20, 2026</p>
          </div>

          <section style={{ marginBottom: '32px' }}>
            <h2>1. Acceptance of Terms</h2>
            <p>By using LagosFit, you agree to be bound by these terms. If you do not agree, please do not use the platform.</p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2>2. No Real Estate Agency</h2>
            <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', borderLeft: '4px solid #ef4444', marginBottom: '16px' }}>
              <p style={{ margin: 0, fontWeight: 700, color: '#ef4444' }}>IMPORTANT NOTICE:</p>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>LagosFit is a discovery platform for neighborhood data. We are NOT real estate agents and we do not facilitate property transactions directly.</p>
            </div>
            <p>Users must perform their own due diligence when contacting agents listed in our directory. We are not liable for any disputes between users and external agents.</p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2>3. LagosFit Pro Subscription</h2>
            <ul>
              <li>Pro access provides advanced neighborhood stats and the agent directory.</li>
              <li>Subscriptions are billed monthly or annually and are non-refundable after access is granted.</li>
              <li>Subscriptions can be cancelled at any time through your profile.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2>4. User Conduct</h2>
            <p>You agree not to use the platform for any illegal activities in Nigeria or to scrape data from our neighborhood database for commercial use.</p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2>5. Limitation of Liability</h2>
            <p>LagosFit provides data "as-is." Neighborhood dynamics in Lagos change quickly. We do not guarantee 100% accuracy on rent prices or power availability stats.</p>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
