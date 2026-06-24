import { Link } from 'react-router-dom';
import { ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts.js';
import Card from '../components/ui/Card.jsx';
import PageShell from '../components/layout/PageShell.jsx';
import LeadGenerationForm from '../components/sections/LeadGenerationForm.jsx';

export default function Blog() {
  return (
    <PageShell eyebrow="Blog" title="Practical insights for better websites and stronger growth." description="Simple, useful articles on design, SEO, pricing, case studies, and conversion strategy — written to help teams make clearer decisions.">
      <section className="section-pad blog-section">
        <div className="container blog-featured-grid">
          <Card className="blog-card blog-card-featured">
            <div className="blog-kicker">Featured insight</div>
            <span>{blogPosts[0].category} · {blogPosts[0].date}</span>
            <h3>{blogPosts[0].title}</h3>
            <p>{blogPosts[0].excerpt}</p>
            <div className="blog-meta-row">
              <span><Clock3 size={15} /> 5 min read</span>
              <span><CalendarDays size={15} /> Strategy guide</span>
            </div>
            <Link to={`/blog/${blogPosts[0].slug}`}>Read featured article <ArrowUpRight size={16} /></Link>
          </Card>
          <div className="blog-sidebar-note">
            <span className="badge">Editorial</span>
            <h3>Actionable articles for founders, agencies, and SaaS teams.</h3>
            <p>Every post is shaped around conversion, positioning, organic growth, and clearer buyer journeys — not generic marketing advice.</p>
          </div>
        </div>

        <div className="container blog-grid blog-list-grid">
          {blogPosts.slice(1).map((post) => (
            <Card className="blog-card" key={post.slug}>
              <span>{post.category} · {post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta-row">
                <span><Clock3 size={15} /> 4 min read</span>
                <span><CalendarDays size={15} /> Playbook</span>
              </div>
              <Link to={`/blog/${post.slug}`}>Read article <ArrowUpRight size={16} /></Link>
            </Card>
          ))}
        </div>
      </section>
      <LeadGenerationForm />
    </PageShell>
  );
}
