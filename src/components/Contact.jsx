import { ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { Reveal } from './Reveal';

const iconFor = () => <ArrowUpRight size={15} />;

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="contact-box">
            <div className="section-meta" style={{ justifyContent: 'center' }}>
              <span className="num">09</span><span>/ Contact</span>
            </div>
            <h2 className="h-display h-lg" style={{ margin: '0 0 16px', position: 'relative' }}>
              Let&apos;s build something<br /><span className="accent">meaningful</span> together.
            </h2>
            <p className="lead" style={{ margin: '0 auto 30px', position: 'relative' }}>
              Have an idea, project, game, or collaboration in mind?
              Let&apos;s create something great.
            </p>
            <div className="contact-ctas" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
              <a href={site.gmailCompose} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" aria-label={`Start a project over email to ${site.email}`}>
                Start a project <ArrowRight size={16} />
              </a>
              <a href={site.gmailCompose} target="_blank" rel="noopener noreferrer" className="btn btn-ghost email-link" aria-label={`Email me at ${site.email}`}>
                Email me <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="socials">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={`Open ${s.label} profile`}
                >
                  {iconFor(s.label)} {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 8 }}>
          <div>
            <div className="logo">Daven<i>.</i></div>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', margin: '6px 0 0' }}>
              2D Game Developer<br />Creative Developer
            </p>
          </div>
          <div className="foot-side" style={{ display: 'grid', gap: 14, alignContent: 'start' }}>
            <nav style={{ display: 'flex', gap: 18, fontSize: '0.9rem' }} aria-label="Footer">
              <Link className="u-link" to="/daven/home">Home</Link>
              <Link className="u-link" to="/daven/about">About</Link>
              <Link className="u-link" to="/daven/skills">Skills</Link>
              <Link className="u-link" to="/daven/projects">Projects</Link>
              <Link className="u-link" to="/daven/contact">Contact</Link>
            </nav>
            <div
              style={{ display: 'flex', gap: 18, fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase' }}
              aria-label="Social media"
            >
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link"
                  aria-label={`Open ${s.label} profile`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
                >
                  {s.label} <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="foot">
          <span>© 2026 Daven. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>ID / 06.20°S 106.84°E — V1.0</span>
          <button
            className="icon-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            style={{ width: 38, height: 38 }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
