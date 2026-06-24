export default function PageShell({ eyebrow, title, description, children }) {
  return (
    <main className="page-shell">
      <section className="page-hero section-pad">
        <div className="container narrow">
          {eyebrow && <span className="badge">{eyebrow}</span>}
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </section>
      {children}
    </main>
  );
}
