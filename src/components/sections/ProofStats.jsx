const stats = [
  { value: '4-6 weeks', label: 'Average launch timeline', note: 'Clear milestones from strategy to handoff.' },
  { value: '100%', label: 'Custom strategy', note: 'Every page is planned around your offer.' },
  { value: '3x', label: 'Clearer booking path', note: 'Simpler journeys from visitor to inquiry.' },
  { value: 'Mobile-first', label: 'Responsive delivery', note: 'Built to feel premium on every screen.' }
];

export default function ProofStats() {
  return (
    <section className="proof-section">
      <div className="container proof-grid">
        {stats.map((stat) => (
          <div className="proof-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <p>{stat.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
