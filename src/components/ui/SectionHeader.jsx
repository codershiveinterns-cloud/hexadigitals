import Badge from './Badge.jsx';

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`section-header ${align === 'left' ? 'section-header-left' : ''}`}>
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
