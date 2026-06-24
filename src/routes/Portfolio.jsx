import { projects } from '../data/projects.js';
import Card from '../components/ui/Card.jsx';
import PageShell from '../components/layout/PageShell.jsx';
import DashboardMockups from '../components/sections/DashboardMockups.jsx';
import LeadGenerationForm from '../components/sections/LeadGenerationForm.jsx';

export default function Portfolio() {
  return (
    <PageShell eyebrow="Portfolio" title="A portfolio of premium launches, dashboards, and growth websites." description="Browse selected concepts and client-style builds created for SaaS teams, agencies, and productized services.">
      <section className="section-pad">
        <div className="container project-grid">
          {projects.map((project) => (
            <Card className={`project-card tall ${project.gradient}`} key={project.title}>
              <div className="project-visual">
                <span>{project.category}</span>
                <div className="mini-window"><i></i><i></i><i></i></div>
              </div>
              <div className="project-content">
                <small>{project.metric} · {project.timeline}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-outcome">{project.outcome}</div>
                <div className="project-tags">
                  {project.services.map((service) => <span key={service}>{service}</span>)}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <DashboardMockups />
      <LeadGenerationForm />
    </PageShell>
  );
}
