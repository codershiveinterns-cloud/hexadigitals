import DashboardMockups from '../components/sections/DashboardMockups.jsx';
import LeadGenerationForm from '../components/sections/LeadGenerationForm.jsx';
import ProcessTimeline from '../components/sections/ProcessTimeline.jsx';
import ServicesGrid from '../components/sections/ServicesGrid.jsx';
import PageShell from '../components/layout/PageShell.jsx';

export default function Services() {
  return (
    <PageShell eyebrow="Services" title="Strategy, design, build, and growth systems under one roof." description="From brand systems to SaaS dashboards, we create the assets your team needs to launch with confidence and convert with clarity.">
      <ServicesGrid compact />
      <ProcessTimeline />
      <DashboardMockups />
      <LeadGenerationForm />
    </PageShell>
  );
}
