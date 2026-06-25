import { Link } from 'react-router-dom';
import Logo from '../ui/Logo.jsx';

export default function Footer() {
  const scrollToPageTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" to="/" onClick={scrollToPageTop}>
            <Logo />
            <span>Hexadigitals</span>
          </Link>
          <p>Dark modern websites, SaaS interfaces, and growth systems for teams that want to look premium and convert better.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/services" onClick={scrollToPageTop}>Services</Link>
          <Link to="/portfolio" onClick={scrollToPageTop}>Portfolio</Link>
          <Link to="/case-studies" onClick={scrollToPageTop}>Case Studies</Link>
          <Link to="/pricing" onClick={scrollToPageTop}>Pricing</Link>
        </div>
        <div>
          <h3>Grow</h3>
          <Link to="/blog" onClick={scrollToPageTop}>Blog</Link>
          <Link to="/contact" onClick={scrollToPageTop}>Contact</Link>
        </div>
        <div>
          <h3>Legal</h3>
          <Link to="/privacy-policy" onClick={scrollToPageTop}>Privacy Policy</Link>
          <Link to="/terms-of-service" onClick={scrollToPageTop}>Terms of Service</Link>
          <Link to="/legal" onClick={scrollToPageTop}>Legal</Link>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 Hexadigitals. Built for bold digital brands.</div>
    </footer>
  );
}

