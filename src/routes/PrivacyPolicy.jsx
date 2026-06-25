import { Database, Eye, LockKeyhole, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import PageShell from '../components/layout/PageShell.jsx';

const privacySections = [
  {
    title: 'Information we collect',
    body: 'When you submit a project inquiry, we may collect your name, email address, company name, budget range, project type, and the message or project details you choose to share.',
    points: ['Contact details used to respond to your inquiry', 'Project information used to understand your goals', 'Basic website usage data if analytics tools are enabled']
  },
  {
    title: 'How we use your information',
    body: 'We use your information to reply to requests, prepare a relevant next step, improve our website, prevent spam, and communicate about services you asked about.',
    points: ['Responding to strategy call requests', 'Scoping design, development, SEO, or growth work', 'Improving site content, forms, and user experience']
  },
  {
    title: 'Cookies and analytics',
    body: 'Hexadigitals may use cookies or analytics tools to understand how visitors use the website. This helps us improve page performance, content clarity, and conversion paths.',
    points: ['Traffic and page interaction insights', 'Device, browser, and general location data', 'No sale of personal information']
  },
  {
    title: 'Sharing and third-party tools',
    body: 'We do not sell your personal information. We may share limited data with trusted tools that help operate the website, manage forms, send email, host pages, or analyze performance.',
    points: ['Hosting and website infrastructure', 'Email or form handling services', 'Analytics and security tools']
  },
  {
    title: 'Data retention and security',
    body: 'We keep inquiry details only as long as needed for business communication, project evaluation, legal requirements, or legitimate operational needs.',
    points: ['Reasonable safeguards are used to protect information', 'No internet transmission is guaranteed 100% secure', 'Old inquiries may be deleted when no longer needed']
  },
  {
    title: 'Your choices',
    body: 'You can contact us to request access, correction, or deletion of personal information you previously shared with Hexadigitals.',
    points: ['Request a copy of your submitted details', 'Ask us to update inaccurate information', 'Ask us to delete inquiry information where applicable']
  }
];

const privacyHighlights = [
  { icon: ShieldCheck, label: 'No data selling', text: 'Your inquiry information is used for communication and service scoping — not resale.' },
  { icon: LockKeyhole, label: 'Protected handling', text: 'We use reasonable safeguards and trusted service tools to manage information.' },
  { icon: Mail, label: 'Simple contact', text: 'Questions or data requests can be sent to support@hexadigitals.org.' }
];

export default function PrivacyPolicy() {
  return (
    <PageShell eyebrow="Privacy Policy" title="Privacy built around clear communication and trust." description="This policy explains what information Hexadigitals may collect, why we collect it, and how we handle project inquiries and website data.">
      <section className="section-pad legal-section">
        <div className="container legal-layout">
          <aside className="legal-summary-card">
            <span className="badge">Last updated · June 25, 2026</span>
            <h2>Privacy at a glance</h2>
            <p>Hexadigitals collects only the information needed to respond to project inquiries, improve the website, and provide relevant digital strategy, design, development, and growth services.</p>
            <div className="legal-summary-list">
              {privacyHighlights.map(({ icon: Icon, label, text }) => (
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
                <h2>Overview</h2>
                <p>Hexadigitals is a digital strategy, design, development, and growth studio. When you use this website or submit a form, you may share information with us. We use that information responsibly to understand your request and communicate with you.</p>
              </div>
            </div>

            {privacySections.map((section, index) => (
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
              <div className="legal-icon-orb"><Database size={24} /></div>
              <div>
                <h2>Contact for privacy questions</h2>
                <p>If you have questions about this Privacy Policy or want to make a data request, contact us at <a href="mailto:support@hexadigitals.org">support@hexadigitals.org</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
