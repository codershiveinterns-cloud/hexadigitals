import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts.js';
import Card from '../ui/Card.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function BlogPreview() {
  return (
    <section className="section-pad alt-section">
      <div className="container">
        <SectionHeader eyebrow="SEO Blog" title="Content built for search intent and buyer confidence." description="Seeded articles for SaaS design, agency pricing, case study SEO, and conversion strategy." />
        <div className="blog-grid">
          {blogPosts.slice(0, 3).map((post) => (
            <Card className="blog-card" key={post.slug}>
              <span>{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`}>Read article <ArrowUpRight size={16} /></Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
