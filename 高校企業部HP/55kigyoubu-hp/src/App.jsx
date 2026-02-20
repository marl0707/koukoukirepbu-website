import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/layout/LoadingScreen';

import TopPage from './pages/TopPage';
import ForSchoolPage from './pages/ForSchoolPage';
import ForMentorPage from './pages/ForMentorPage';
import ForCompanyPage from './pages/ForCompanyPage';
import AboutPage from './pages/AboutPage';
import NewsListPage from './pages/NewsListPage';
import NewsArticlePage from './pages/NewsArticlePage';
import ContactPage from './pages/ContactPage';
import PartnersPage from './pages/PartnersPage';
import NotFoundPage from './pages/NotFoundPage';

// 簡易ScrollToTopコンポーネント
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {/* ページ遷移ごとのスクロールリセット用 */}
      <ScrollToTop />

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="animate-fade-in">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<TopPage />} />
              <Route path="/for-school" element={<ForSchoolPage />} />
              <Route path="/for-mentor" element={<ForMentorPage />} />
              <Route path="/for-company" element={<ForCompanyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/news" element={<NewsListPage />} />
              <Route path="/news/:articleId" element={<NewsArticlePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
