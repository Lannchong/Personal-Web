import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { site } from '../data/site';
import { useActiveSection, useScrolled } from './hooks';

const MotionLink = motion(Link);

const LINKS = [
  { id: 'home', label: 'Home', to: '/daven/home' },
  { id: 'about', label: 'About', to: '/daven/about' },
  { id: 'skills', label: 'Skills', to: '/daven/skills' },
  { id: 'projects', label: 'Projects', to: '/daven/projects' },
  { id: 'contact', label: 'Contact', to: '/daven/contact' },
];

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Navbar({ theme, onToggleTheme }) {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const location = useLocation();
  const isDetail = location.pathname.startsWith('/daven/project');

  // Router berpindah route; scroll halus ke section bila sudah di halaman.
  // Menutup mobile menu di semua kasus.
  const onNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <motion.div
            className="nav-pill"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/daven/home" className="logo" aria-label="Daven home">
              Daven<i>.</i>
            </Link>

            <nav className="nav-links" aria-label="Primary">
              {LINKS.map((l) => (
                <Link
                  key={l.id}
                  to={l.to}
                  onClick={() => onNavClick(l.id)}
                  className={`u-link ${!isDetail && active === l.id ? 'active' : ''}`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="nav-right">
              <button
                className="icon-btn"
                onClick={onToggleTheme}
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
              </button>
              <Link
                to="/daven/contact"
                onClick={() => onNavClick('contact')}
                className="nav-cta desktop-only"
                aria-label="Go to contact section"
              >
                Let&apos;s Talk <ArrowUpRight size={15} />
              </Link>
              <button
                className="icon-btn hamburger"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav style={{ display: 'grid', gap: 6 }} aria-label="Mobile">
              {LINKS.map((l, i) => (
                <MotionLink
                  key={l.id}
                  to={l.to}
                  onClick={() => onNavClick(l.id)}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 700, letterSpacing: '-0.04em' }}
                >
                  {l.label}
                </MotionLink>
              ))}
            </nav>
            <div style={{ display: 'grid', gap: 14 }}>
              <Link to="/daven/contact" onClick={() => onNavClick('contact')} className="btn btn-primary" style={{ justifyContent: 'center' }} aria-label="Go to contact section">
                Let&apos;s Talk <ArrowUpRight size={16} />
              </Link>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                <span style={{ display: 'flex', gap: 14 }}>
                  {site.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${s.label} profile`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 3, color: 'inherit' }}
                    >
                      {s.label} <ArrowUpRight size={12} />
                    </a>
                  ))}
                </span>
                <span>ID / 06.20°S</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
