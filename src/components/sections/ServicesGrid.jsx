import { services } from '../../data/services.js';
import Card from '../ui/Card.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function ServicesGrid({ compact = false }) {
  return (
    <section className="section-pad">
      <div className="container">
        {!compact && (
          <SectionHeader
            eyebrow="Services"
            title="Everything your digital brand needs to launch, prove, and scale."
            description="Strategy, design, development, and growth assets packaged into a premium web presence."
          />
        )}
        <div className={`services-grid ${compact ? 'compact-grid' : ''}`}>
          {services.map(({ icon: Icon, title, description }) => (
            <Card className="service-card reveal-up" key={title}>
              <div className="icon-orb"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
