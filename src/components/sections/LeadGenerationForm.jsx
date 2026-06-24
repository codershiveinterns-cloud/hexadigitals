import { Send } from 'lucide-react';
import Button from '../ui/Button.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function LeadGenerationForm() {
  return (
    <section className="section-pad lead-section" id="lead-form">
      <div className="container lead-grid">
        <div>
          <SectionHeader align="left" eyebrow="Start a Project" title="Request a clear strategy call, not a generic sales pitch." description="Share a few details about your business, offer, and timeline. We’ll reply with the cleanest next step for your website or digital system." />
          <div className="lead-proof">
            <span>Reply within 1 business day</span>
            <span>Clear scope and next steps</span>
            <span>No pressure, no spam</span>
          </div>
        </div>
        <form className="lead-form" onSubmit={(event) => event.preventDefault()}>
          <div className="form-row">
            <label>Name<input required type="text" placeholder="Your full name" /></label>
            <label>Email<input required type="email" placeholder="you@company.com" /></label>
          </div>
          <div className="form-row">
            <label>Company<input type="text" placeholder="Business or brand name" /></label>
            <label>Budget<select defaultValue=""><option value="" disabled>Select investment range</option><option>$2.5k - $7.5k</option><option>$7.5k - $15k</option><option>$15k+</option><option>Not sure yet</option></select></label>
          </div>
          <label>Project type<select defaultValue=""><option value="" disabled>What do you want to improve?</option><option>Premium website</option><option>Agency portfolio</option><option>SaaS website</option><option>Dashboard mockups</option><option>SEO blog/case studies</option><option>Full growth system</option></select></label>
          <label>Message<textarea rows="5" placeholder="Tell us about your offer, audience, current website, and ideal launch timeline." /></label>
          <div className="form-submit-row">
            <Button type="submit">Request Strategy Call <Send size={18} /></Button>
            <small>We’ll review your details and reply with a practical next step.</small>
          </div>
        </form>
      </div>
    </section>
  );
}
