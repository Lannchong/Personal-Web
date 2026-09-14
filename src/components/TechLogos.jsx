// Technology logo showcase - monochrome inline SVG glyphs (no CDN, no brand
// colors). currentColor makes them follow the theme automatically.
// Motion: CSS-only gentle float, staggered per item. No mouse-follow.

function HtmlMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M9 4h30l-2.8 31.4L24 42l-12.2-6.6L9 4z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <text x="24" y="31" textAnchor="middle" fontSize="19" fontWeight="800" fill="currentColor" fontFamily="inherit">5</text>
    </svg>
  );
}

function CssMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M9 4h30l-2.8 31.4L24 42l-12.2-6.6L9 4z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <text x="24" y="31" textAnchor="middle" fontSize="19" fontWeight="800" fill="currentColor" fontFamily="inherit">3</text>
    </svg>
  );
}

function JsMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="7" y="7" width="34" height="34" rx="6" stroke="currentColor" strokeWidth="3" />
      <text x="24" y="31" textAnchor="middle" fontSize="16" fontWeight="800" fill="currentColor" fontFamily="inherit">JS</text>
    </svg>
  );
}

function ReactMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="2.5" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="2.5" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="2.5" transform="rotate(120 24 24)" />
      <circle cx="24" cy="24" r="3.2" fill="currentColor" />
    </svg>
  );
}

function UnityMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 4l17 10v20L24 44 7 34V14l17-10z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M24 4v20M7 32l17-8 17 8M24 24v20" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

function FigmaMark() {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
      <rect x="11" y="7" width="10" height="16" rx="5" />
      <rect x="11" y="25" width="10" height="15" rx="5" />
      <rect x="23" y="7" width="10" height="16" rx="5" />
      <circle cx="28" cy="32.5" r="5" />
      <path d="M35 23a5 5 0 0 1 10 0v8.5l-5 7.5-5-7.5V23z" />
    </svg>
  );
}

const LOGOS = [
  { name: 'HTML', Mark: HtmlMark, duration: 7.2, delay: 0 },
  { name: 'CSS', Mark: CssMark, duration: 8.4, delay: -1.4 },
  { name: 'JavaScript', Mark: JsMark, duration: 6.5, delay: -2.6 },
  { name: 'React', Mark: ReactMark, duration: 7.8, delay: -0.8 },
  { name: 'Unity', Mark: UnityMark, duration: 8.8, delay: -3.2, main: true },
  { name: 'Figma', Mark: FigmaMark, duration: 6.9, delay: -1.9 },
];

export default function TechLogos() {
  return (
    <ul className="tech-logos" aria-label="Technologies I use">
      {LOGOS.map(({ name, Mark, duration, delay, main }) => (
        <li key={name} className={`tech-logo${main ? ' is-main' : ''}`} aria-label={`${name} logo`}>
          <span
            className="tech-float"
            style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
          >
            <Mark />
          </span>
          <span className="tech-name">{name}</span>
        </li>
      ))}
    </ul>
  );
}
