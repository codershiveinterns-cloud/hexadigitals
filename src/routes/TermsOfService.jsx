import { BadgeCheck, BriefcaseBusiness, CreditCard, FileSignature, Scale, ShieldCheck } from 'lucide-react';
import PageShell from '../components/layout/PageShell.jsx';

const termsSections = [
  {
    title: 'Acceptance of terms',
    body: 'By using the Hexadigitals website or submitting a project inquiry, you agree to these Terms of Service. If you do not agree, please do not use the website.',
    points: ['These terms apply to website visitors and inquiry submissions', 'Client projects may have separate written agreements', 'Terms may be updated when services or policies change']
  },
  {
    title: 'Services and project scope',
    body: 'Hexadigitals provides digital strategy, branding, website design, development, SaaS UI, SEO content, automation, analytics, and growth support. Final deliverables depend on the approved scope.',
    points: ['Service packages are starting points, not fixed guarantees', 'Scope, timeline, and deliverables should be confirmed in writing', 'Additional work may require revised pricing or timelines']
  },
  {
    title: 'Quotes, payments, and timelines',
    body: 'Any pricing shown on the website is for general guidance. A project starts only after both sides agree on scope, payment terms, timeline, and next steps.',
    points: ['Deposits or milestone payments may be required', 'Late client feedback can affect timelines', 'Unpaid work may be paused until payment is resolved']
  },
  {
    title: 'Client responsibilities',
    body: 'Clients are responsible for providing accurate information, required assets, approvals, access, and feedback needed to complete the project properly.',
    points: ['Provide content, brand assets, and access on time', 'Confirm that submitted materials can legally be used', 'Review work and give feedback within agreed timelines']
  },
  {
    title: 'Ownership and usage rights',
    body: 'Ownership of final deliverables depends on the project agreement and payment status. Hexadigitals may retain rights to internal tools, reusable systems, concepts, and portfolio presentation unless agreed otherwise.',
    points: ['Final client assets may transfer after full payment', 'Third-party tools, fonts, plugins, and stock assets follow their own licenses', 'Hexadigitals may showcase completed work unless restricted by agreement']
  },
  {
    title: 'Revisions and approvals',
    body: 'Revision rounds should be defined in the project scope. Once a stage is approved, major changes may be treated as additional work.',
    points: ['Feedback should be clear and consolidated', 'Out-of-scope requests may affect cost or timeline', 'Final approval confirms acceptance of that deliverable stage']
  },
  {
    title: 'No guaranteed results',
    body: 'Hexadigitals works to improve design quality, clarity, performance, and conversion paths, but does not guarantee revenue, ranking, traffic, leads, or specific business outcomes.',
    points: ['SEO, ads, and conversions depend on multiple external factors', 'Case study results are examples, not promises', 'Business decisions remain the client’s responsibility']
  }
];

const termsHighlights = [
  { icon: FileSignature, label: 'Written scope', text: 'Final work, price, and timeline should be confirmed before project start.' },
  { icon: CreditCard, label: 'Clear payments', text: 'Payment terms may include deposits, milestones, or staged approvals.' },
  { icon: BadgeCheck, label: 'Professional delivery', text: 'Projects depend on timely assets, feedback, access, and approvals.' }
];

export default function TermsOfService() {
  return (
    <PageShell eyebrow="Terms of Service" title="Professional terms for working with Hexadigitals." description="These terms explain how website use, project inquiries, payments, deliverables, revisions, and service expectations are handled.">
      <section className="section-pad legal-section">
        <div className="container legal-layout">
          <aside className="legal-summary-card">
            <span className="badge">Service terms</span>
            <h2>Before we start</h2>
            <p>These terms keep expectations clear for visitors and potential clients. Formal client work may also require a separate proposal, invoice, agreement, or statement of work.</p>
            <div className="legal-summary-list">
              {termsHighlights.map(({ icon: Icon, label, text }) => (
                <div className="legal-summary-item" key={label}>
                  <span><Icon size={18} /></span>
                  <div>
                    <strong>{label}</strong>
                    <small>{text}</small>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="legal-document">
            <div className="legal-intro-card">
              <div className="legal-icon-orb"><BriefcaseBusiness size={24} /></div>
              <div>
                <h2>Service overview</h2>
                <p>Hexadigitals helps businesses build premium websites, SaaS interfaces, brand systems, SEO content, and conversion-focused digital experiences. These terms are designed to keep communication, project scope, and expectations clear.</p>
              </div>
            </div>

            {termsSections.map((section, index) => (
              <article className="legal-card" key={section.title}>
                <div className="legal-card-number">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                  <ul className="legal-list">
                    {section.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}

            <div className="legal-contact-card">
              <div className="legal-icon-orb"><ShieldCheck size={24} /></div>
              <div>
                <h2>Questions about service terms?</h2>
                <p>For questions about these Terms of Service, project scope, or client agreements, contact <a href="mailto:support@hexadigitals.org">support@hexadigitals.org</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
