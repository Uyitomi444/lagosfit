
import NavBar from './NavBar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const PrivacyPage = () => {
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
              <ShieldCheck size={32} color="var(--primary-color)" />
            </div>
            <h1>Privacy Policy</h1>
            <p style={{ color: 'var(--text-muted)' }}>Effective Date: April 20, 2026</p>
          </div>

          <section style={{ marginBottom: '32px' }}>
            <h2>1. Information We Collect</h2>
            <p>At LagosFit, we collect information to help you find your perfect neighborhood. This includes:</p>
            <ul>
              <li><strong>Account Info:</strong> Name, email, and profile picture (via Google Login).</li>
              <li><strong>Quiz Responses:</strong> Your budget, area preferences, and lifestyle choices.</li>
              <li><strong>Usage Data:</strong> How you interact with our neighborhood maps and agent directory.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2>2. How We Use Your Data</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Generate accurate neighborhood recommendations.</li>
              <li>Provide access to premium "LagosFit Pro" features.</li>
              <li>Internal analytics to improve our Lagos area data.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2>3. Secure Payments</h2>
            <p>All payments are handled securely via <strong>Paystack</strong>. LagosFit does not store your credit card or bank account details on our servers.</p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2>4. Third-Party Links</h2>
            <p>Our "Market" section links to external platforms like PropertyPro and NaijaHouses. We are not responsible for the privacy practices of these external sites.</p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2>5. Contact Us</h2>
            <p>If you have questions about your data, contact us at <strong>legal@lagosfit.com</strong>.</p>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
