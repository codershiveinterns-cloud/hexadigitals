import AgencyHero from '../components/sections/AgencyHero.jsx';
import BlogPreview from '../components/sections/BlogPreview.jsx';
import DashboardMockups from '../components/sections/DashboardMockups.jsx';
import FeaturedProjects from '../components/sections/FeaturedProjects.jsx';
import LeadGenerationForm from '../components/sections/LeadGenerationForm.jsx';
import PricingPackages from '../components/sections/PricingPackages.jsx';
import ProcessTimeline from '../components/sections/ProcessTimeline.jsx';
import ProofStats from '../components/sections/ProofStats.jsx';
import ServicesGrid from '../components/sections/ServicesGrid.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';

export default function Home() {
  return (
    <main>
      <AgencyHero />
      <ProofStats />
      <ServicesGrid />
      <FeaturedProjects />
      <ProcessTimeline />
      <DashboardMockups />
      <Testimonials />
      <PricingPackages />
      <BlogPreview />
      <LeadGenerationForm />
    </main>
  );
}
