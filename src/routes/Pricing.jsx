import PricingPackages from '../components/sections/PricingPackages.jsx';
import LeadGenerationForm from '../components/sections/LeadGenerationForm.jsx';
import PageShell from '../components/layout/PageShell.jsx';

const faqs = [
  ['Can you build the site and write the copy?', 'Yes. Every package includes conversion structure and launch-ready copy direction.'],
  ['Do I need a backend?', 'Not for the first static marketing version. We can connect forms, analytics, and CMS tools later.'],
  ['How fast can we launch?', 'Starter launches can move in about two weeks when content and decisions are ready.']
];

export default function Pricing() {
  return (
    <PageShell eyebrow="Pricing" title="Choose the level of launch support your brand needs." description="Start with a polished site or build a full growth system with SEO, case studies, dashboards, and campaign pages.">
      <PricingPackages />
      <section className="section-pad alt-section">
        <div className="container faq-grid">
          {faqs.map(([question, answer]) => (
            <div className="faq-item" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </section>
      <LeadGenerationForm />
    </PageShell>
  );
}
