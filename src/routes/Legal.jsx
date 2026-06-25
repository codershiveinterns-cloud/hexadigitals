import { FileCheck2, Globe2, Scale, ShieldAlert, Sparkles, Workflow } from 'lucide-react';
import PageShell from '../components/layout/PageShell.jsx';

const legalSections = [
  {
    title: 'Website use',
    body: 'You may browse this website for personal or business research. You agree not to misuse the website, attempt unauthorized access, disrupt performance, or use content in a misleading way.',
    points: ['Do not copy or republish site content without permission', 'Do not submit spam, harmful code, or false information', 'Use the website only for lawful purposes']
  },
  {
    title: 'Service information',
    body: 'The website describes digital strategy, design, development, SEO, automation, analytics, and growth services. Information on this website is general and does not create a client relationship by itself.',
    points: ['Final scope depends on written agreement', 'Timelines and pricing may vary by project', 'Service descriptions may be updated over time']
  },
  {
    title: 'Project inquiries',
    body: 'Submitting a contact form or strategy call request does not guarantee acceptance of a project. Hexadigitals may review the request and decide whether the project is a good fit.',
    points: ['We may ask follow-up questions before quoting', 'A project starts only after mutual written approval', 'Information you submit should be accurate and authorized']
  },
  {
    title: 'Intellectual property',
    body: 'The Hexadigitals name, website design, copy, visuals, layout, and original materials are owned by Hexadigitals or used with permission unless otherwise stated.',
    points: ['Do not reuse brand assets without permission', 'Client work remains subject to project agreements', 'Portfolio and case study examples may be illustrative']
  },
  {
    title: 'No guaranteed outcomes',
    body: 'We design for clarity, quality, performance, and conversion improvement, but business outcomes depend on many factors outside our control, including offer, traffic, audience, market, budget, and execution.',
    points: ['Results shown are examples, not guarantees', 'SEO and campaign outcomes can vary', 'Recommendations are strategic guidance, not legal or financial advice']
  },
  {
    title: 'Third-party links and tools',
    body: 'This website or future projects may reference or connect with third-party tools such as hosting, analytics, forms, email, payment, CMS, or automation platforms.',
    points: ['Third-party services have their own terms and policies', 'We are not responsible for external website content', 'Tool availability and features may change']
  },
  {
    title: 'Limitation of liability',
    body: 'To the fullest extent permitted by law, Hexadigitals is not liable for indirect, incidental, special, or consequential damages related to use of this website or reliance on its content.',
    points: ['Website content is provided for general information', 'Use of the site is at your own discretion', 'Formal projects are governed by separate agreements']
  }
];

const legalHighlights = [
  { icon: FileCheck2, label: 'Clear scope', text: 'Projects begin only after mutual approval of scope, timeline, and terms.' },
  { icon: Scale, label: 'Fair use', text: 'Site content and brand assets should not be copied or misrepresented.' },
  { icon: Globe2, label: 'External tools', text: 'Third-party platforms may have separate policies and service rules.' }
];

export default function Legal() {
  return (
    <PageShell eyebrow="Legal" title="Clear terms for using the Hexadigitals website." description="These legal notes explain how visitors may use this website, how project inquiries work, and what to understand before relying on site content.">
      <section className="section-pad legal-section">
        <div className="container legal-layout">
          <aside className="legal-summary-card legal-summary-card-dark">
            <span className="badge">Website terms</span>
            <h2>Important legal notes</h2>
            <p>This page gives a practical overview of website use, service information, intellectual property, project inquiries, and limitations.</p>
            <div className="legal-summary-list">
              {legalHighlights.map(({ icon: Icon, label, text }) => (
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
              <div className="legal-icon-orb"><Sparkles size={24} /></div>
              <div>
                <h2>Agreement overview</h2>
                <p>By using this website, you agree to use it responsibly and understand that website content is informational. Any paid client work should be covered by a separate written proposal, invoice, agreement, or statement of work.</p>
              </div>
            </div>

            {legalSections.map((section, index) => (
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
              <div className="legal-icon-orb"><ShieldAlert size={24} /></div>
              <div>
                <h2>Questions about these terms?</h2>
                <p>Contact Hexadigitals at <a href="mailto:support@hexadigitals.org">support@hexadigitals.org</a> for questions about website use, project terms, or legal information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
