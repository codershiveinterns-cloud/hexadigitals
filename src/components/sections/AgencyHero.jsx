import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button.jsx';
import DashboardMockups from './DashboardMockups.jsx';

export default function AgencyHero() {
  return (
    <section className="hero-section">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal-up">
          <span className="badge">Premium digital studio</span>
          <h1>Websites that make your brand look trusted, clear, and ready to grow.</h1>
          <p>We craft conversion-focused websites, portfolios, dashboards, and launch pages for businesses that want a sharper online presence without looking generic.</p>
          <div className="hero-actions">
            <Button to="/contact">Book a Strategy Call <ArrowRight size={18} /></Button>
            <Button to="/portfolio" variant="ghost"><PlayCircle size={18} /> View Our Work</Button>
          </div>
          <div className="trust-row">
            <span><ShieldCheck size={18} /> Strategy before design</span>
            <span>Premium responsive build</span>
            <span>SEO and conversion ready</span>
          </div>
        </div>
        <div className="hero-visual reveal-up delay-1">
          <div className="hero-dashboard floating-card">
            <div className="dashboard-topbar"><span></span><span></span><span></span><strong>Hexadigitals OS</strong></div>
            <div className="hero-stat-grid">
              <div><small>Inquiry clarity</small><strong>92%</strong></div>
              <div><small>Launch speed</small><strong>4w</strong></div>
              <div><small>Pages planned</small><strong>12</strong></div>
            </div>
            <div className="wave-card"><i></i><i></i><i></i><i></i><i></i></div>
            <div className="pipeline-card">
              <span>Discovery</span><span>Design</span><span>Build</span><span>Launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
