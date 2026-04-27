import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QuizProvider } from './context/QuizContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const PromoBanner = () => (
  <div
    style={{
      background: 'linear-gradient(90deg, #386668 0%, #e09f3e 50%, #386668 100%)',
      color: 'white',
      padding: '12px 24px',
      textAlign: 'center',
      fontWeight: 700,
      fontSize: '0.85rem',
      zIndex: 200,
      position: 'relative',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}
  >
    🎁 PRO MONTH IS LIVE! Sign in to get all premium features FREE for 30 days! 
    <Link to="/register" style={{ color: 'white', textDecoration: 'underline', marginLeft: '8px', fontWeight: 800 }}>Join Now</Link>
  </div>
);


import LandingPage from './components/LandingPage';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';
import ExplorePage from './components/ExplorePage';
import MarketPage from './components/MarketPage';
import AboutPage from './components/AboutPage';
import HistoryPage from './components/HistoryPage';
import ProfilePage from './components/ProfilePage';
import PricingPage from './components/PricingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import AdminDashboard from './components/AdminDashboard';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';
import FeedbackPage from './components/FeedbackPage';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <QuizProvider>
              <Router>
                <ScrollToTop />
                <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                  <PromoBanner />
                  <NavBar />
                  <div style={{ flex: 1 }}>
                    <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/quiz" element={
                        <ProtectedRoute>
                          <QuestionPage />
                        </ProtectedRoute>
                      } />
                      <Route path="/result" element={<ResultPage />} />
                      <Route path="/explore" element={<ExplorePage />} />
                      <Route path="/market" element={<MarketPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/history" element={
                        <ProtectedRoute>
                          <HistoryPage />
                        </ProtectedRoute>
                      } />
                      <Route path="/profile" element={
                        <ProtectedRoute>
                          <ProfilePage />
                        </ProtectedRoute>
                      } />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/register" element={<RegisterPage />} />
                      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                      <Route path="/admin" element={
                        <AdminRoute>
                          <AdminDashboard />
                        </AdminRoute>
                      } />
                      <Route path="/feedback" element={<FeedbackPage />} />
                    </Routes>
                  </div>
                  <Footer />
                  <ChatBot />
                </div>
              </Router>
            </QuizProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
