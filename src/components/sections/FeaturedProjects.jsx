import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects.js';
import Card from '../ui/Card.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function FeaturedProjects() {
  return (
    <section className="section-pad alt-section">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured projects built to look expensive and convert clearly."
          description="Agency portfolios, SaaS landing pages, and dashboard concepts with measurable business outcomes."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <Card className={`project-card ${project.gradient}`} key={project.title}>
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
                <Link to="/portfolio">Explore project <ArrowUpRight size={16} /></Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
