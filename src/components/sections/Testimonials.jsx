import { testimonials } from '../../data/testimonials.js';
import Card from '../ui/Card.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function Testimonials() {
  return (
    <section className="section-pad alt-section">
      <div className="container">
        <SectionHeader eyebrow="Testimonials" title="Teams hire us when their website needs to feel as strong as their offer." />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <Card className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-context">{testimonial.context}</div>
              <p>“{testimonial.quote}”</p>
              <div className="testimonial-result">{testimonial.result}</div>
              <div className="testimonial-meta">
                <span>{testimonial.name.charAt(0)}</span>
                <div>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}, {testimonial.company}</small>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
