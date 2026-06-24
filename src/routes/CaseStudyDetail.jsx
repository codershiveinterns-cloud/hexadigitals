import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/caseStudies.js';
import PageShell from '../components/layout/PageShell.jsx';
import LeadGenerationForm from '../components/sections/LeadGenerationForm.jsx';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return <PageShell title="Case study not found" description="This project may have moved."><div className="container"><Link to="/case-studies">Back to case studies</Link></div></PageShell>;
  }

  return (
    <PageShell eyebrow={study.industry} title={study.title} description={study.excerpt}>
      <section className="section-pad">
        <div className="container detail-grid">
          <article className="detail-article">
            <Link className="back-link" to="/case-studies"><ArrowLeft size={16} /> Back to case studies</Link>
            <h2>The problem</h2>
            <p>{study.problem}</p>
            <h2>The solution</h2>
            <p>{study.solution}</p>
          </article>
          <aside className="results-panel">
            <h3>Results</h3>
            {study.results.map((result) => <strong key={result}>{result}</strong>)}
          </aside>
        </div>
      </section>
      <LeadGenerationForm />
    </PageShell>
  );
}
