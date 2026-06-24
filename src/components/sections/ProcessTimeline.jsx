import SectionHeader from '../ui/SectionHeader.jsx';

const steps = [
  ['01', 'Discover', 'Clarify positioning, audience, offer, competitors, and conversion goals.'],
  ['02', 'Design', 'Create the dark premium visual system, sections, UI mockups, and page flow.'],
  ['03', 'Build', 'Develop responsive pages, animations, content structures, and lead paths.'],
  ['04', 'Launch', 'Ship the site with SEO basics, QA, performance checks, and clean handoff.'],
  ['05', 'Optimize', 'Use analytics, content, and experiments to improve conversion over time.']
];

export default function ProcessTimeline() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader eyebrow="Process" title="A focused sprint from messy idea to premium launch." description="Designed to move fast without sacrificing strategy, polish, or performance." />
        <div className="timeline">
          {steps.map(([number, title, description]) => (
            <div className="timeline-item" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
