import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import Home from './routes/Home.jsx';
import Services from './routes/Services.jsx';
import Portfolio from './routes/Portfolio.jsx';
import CaseStudies from './routes/CaseStudies.jsx';
import CaseStudyDetail from './routes/CaseStudyDetail.jsx';
import Pricing from './routes/Pricing.jsx';
import Blog from './routes/Blog.jsx';
import BlogPost from './routes/BlogPost.jsx';
import Contact from './routes/Contact.jsx';
import PrivacyPolicy from './routes/PrivacyPolicy.jsx';
import Legal from './routes/Legal.jsx';
import TermsOfService from './routes/TermsOfService.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
