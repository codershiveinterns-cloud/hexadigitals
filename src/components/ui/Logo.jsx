export default function Logo() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img" focusable="false">
        <defs>
          <linearGradient id="hexadigitals-logo-gradient" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="0.45" stopColor="#6366f1" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="hexadigitals-logo-highlight" x1="18" y1="14" x2="45" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#e0f2fe" />
          </linearGradient>
          <filter id="hexadigitals-logo-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="5" floodColor="#4f46e5" floodOpacity="0.28" />
          </filter>
        </defs>
        <path className="brand-logo-backplate" d="M32 4.8 52.8 16.8v30.4L32 59.2 11.2 47.2V16.8L32 4.8Z" />
        <path className="brand-logo-panel" d="M32 11.4 47.1 20.1v23.8L32 52.6 16.9 43.9V20.1L32 11.4Z" />
        <path className="brand-logo-circuit" d="M22 22h9.5M22 32h20M22 42h9.5M42 22v20" />
        <path className="brand-logo-h" d="M22 20.5v23M34 20.5v23M22 32h12" />
        <path className="brand-logo-d" d="M34 20.5h5.5c5.1 0 8.5 4.2 8.5 11.5s-3.4 11.5-8.5 11.5H34" />
        <path className="brand-logo-shine" d="M19.2 18.7 32 11.8l12.8 6.9" />
      </svg>
    </span>
  );
}
