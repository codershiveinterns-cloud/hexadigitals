import LeadGenerationForm from '../components/sections/LeadGenerationForm.jsx';
import PageShell from '../components/layout/PageShell.jsx';

export default function Contact() {
  return (
    <PageShell eyebrow="Contact" title="Ready to build a premium digital presence?" description="Send a project brief and we’ll help shape the strongest launch path for your goals, audience, and budget.">
      <LeadGenerationForm />
    </PageShell>
  );
}
