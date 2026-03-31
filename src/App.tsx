import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QuizProvider } from './context/QuizContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
import AIAssistant from './components/AIAssistant';
import ScrollToTop from './components/ScrollToTop';

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
                    </Routes>
                  </div>
                  <Footer />
                  <AIAssistant />
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
