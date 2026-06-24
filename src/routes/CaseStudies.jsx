import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies.js';
import Card from '../components/ui/Card.jsx';
import PageShell from '../components/layout/PageShell.jsx';
import LeadGenerationForm from '../components/sections/LeadGenerationForm.jsx';

export default function CaseStudies() {
  return (
    <PageShell eyebrow="Case Studies" title="Proof-rich stories for SaaS, agencies, and growth teams." description="Each case study frames the problem, solution, and measurable outcome so buyers can understand the value fast.">
      <section className="section-pad">
        <div className="container case-grid">
          {caseStudies.map((study) => (
            <Card className="case-card" key={study.slug}>
              <span>{study.industry}</span>
              <h3>{study.title}</h3>
              <p>{study.excerpt}</p>
              <ul>{study.results.map((result) => <li key={result}>{result}</li>)}</ul>
              <Link to={`/case-studies/${study.slug}`}>Read case study <ArrowUpRight size={16} /></Link>
            </Card>
          ))}
        </div>
      </section>
      <LeadGenerationForm />
    </PageShell>
  );
}
