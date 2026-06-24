import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" to="/">
            <span className="brand-mark">H</span>
            <span>Hexadigitals</span>
          </Link>
          <p>Dark modern websites, SaaS interfaces, and growth systems for teams that want to look premium and convert better.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div>
          <h3>Grow</h3>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <a href="mailto:support@hexadigitals.org">support@hexadigitals.org</a>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 Hexadigitals. Built for bold digital brands.</div>
    </footer>
  );
}

