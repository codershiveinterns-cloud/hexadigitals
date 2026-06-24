import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts.js';
import PageShell from '../components/layout/PageShell.jsx';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <PageShell title="Article not found" description="This article may have moved."><div className="container"><Link to="/blog">Back to blog</Link></div></PageShell>;
  }

  return (
    <PageShell eyebrow={`${post.category} · ${post.date}`} title={post.title} description={post.excerpt}>
      <section className="section-pad blog-post-section">
        <article className="container narrow blog-article">
          <Link className="back-link" to="/blog"><ArrowLeft size={16} /> Back to blog</Link>
          <div className="blog-article-meta">
            <span><Clock3 size={16} /> 5 min read</span>
            <span><CalendarDays size={16} /> Updated {post.date}</span>
          </div>
          <div className="blog-article-panel">
            <p className="blog-lede">{post.content}</p>
            <h2>How to apply this</h2>
            <p>Use this idea across your homepage, service pages, case studies, and pricing paths. Pair strong positioning with proof, visual clarity, and one obvious next step.</p>
            <blockquote>Professional content should make the buyer feel clarity, confidence, and momentum before they ever book a call.</blockquote>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
