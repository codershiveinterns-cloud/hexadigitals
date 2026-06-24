import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button.jsx';

const navItems = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['Case Studies', '/case-studies'],
  ['Pricing', '/pricing'],
  ['Blog', '/blog'],
  ['Contact', '/contact']
];

function scrollPageToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = () => {
    setIsMenuOpen(false);
    scrollPageToTop();
  };

  return (
    <header className="site-header">
      <nav className="container nav-bar" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Hexadigitals home" onClick={handleNavigation}>
          <span className="brand-mark">H</span>
          <span>Hexadigitals</span>
        </Link>
        <div className="nav-links">
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={handleNavigation} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              {label}
            </NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <Button to="/contact" variant="primary" className="nav-cta" onClick={handleNavigation}>Start a Project</Button>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <div id="mobile-nav-panel" className={`mobile-nav-panel ${isMenuOpen ? 'open' : ''}`}>
        <div className="container mobile-nav-links">
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={handleNavigation} className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}>
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
