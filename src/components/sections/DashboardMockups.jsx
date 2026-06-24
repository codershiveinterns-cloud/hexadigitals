import { Activity, ArrowUpRight, BarChart3, CircleDollarSign, Users } from 'lucide-react';

const metrics = [
  { icon: Users, label: 'Qualified leads', value: '2,840', change: '+34%' },
  { icon: CircleDollarSign, label: 'Pipeline value', value: '$418k', change: '+61%' },
  { icon: Activity, label: 'Activation rate', value: '73%', change: '+18%' }
];

export default function DashboardMockups() {
  return (
    <section className="section-pad dashboard-section">
      <div className="container dashboard-grid">
        <div>
          <span className="badge">Dashboard Mockups</span>
          <h2>Modern product visuals that make your offer tangible.</h2>
          <p>Show buyers the future state with cinematic dashboards, metric cards, charts, and workflow panels designed for SaaS credibility.</p>
        </div>
        <div className="dashboard-card floating-card">
          <div className="dashboard-topbar">
            <span></span><span></span><span></span>
            <strong>Growth Command</strong>
          </div>
          <div className="metric-row">
            {metrics.map(({ icon: Icon, label, value, change }) => (
              <div className="metric-card" key={label}>
                <Icon size={20} />
                <span>{label}</span>
                <strong>{value}</strong>
                <small>{change}</small>
              </div>
            ))}
          </div>
          <div className="chart-panel">
            <div className="chart-bars" aria-hidden="true">
              {[42, 66, 52, 88, 72, 96, 84].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
            </div>
            <div>
              <BarChart3 />
              <h3>Campaign velocity</h3>
              <p>Live funnel analytics with visual proof of demand.</p>
              <a href="/portfolio">View dashboard work <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
