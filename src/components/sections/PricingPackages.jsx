import { Check } from 'lucide-react';
import { pricing } from '../../data/pricing.js';
import Button from '../ui/Button.jsx';
import Card from '../ui/Card.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function PricingPackages() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader eyebrow="Pricing" title="Packages for launches, growth, and scale." description="Clear starting points. Every engagement is scoped around outcomes, speed, and polish." />
        <div className="pricing-grid">
          {pricing.map((plan) => (
            <Card className={`pricing-card ${plan.featured ? 'featured-plan' : ''}`} key={plan.name}>
              {plan.featured && <span className="plan-label">Most popular</span>}
              <h3>{plan.name}</h3>
              <span className="pricing-fit">{plan.bestFor}</span>
              <div className="price">{plan.price}</div>
              <span className="pricing-timeline">Timeline: {plan.timeline}</span>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => <li key={feature}><Check size={17} /> {feature}</li>)}
              </ul>
              <Button to="/contact" variant={plan.featured ? 'primary' : 'ghost'}>{plan.cta}</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
