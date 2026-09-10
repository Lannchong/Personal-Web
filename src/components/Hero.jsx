import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Gamepad2, Sparkles } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

function PixelHeroArt({ sx, sy }) {
  // Parallax layers give the mockup real depth on mouse move.
  // They consume the *smoothed* values so layers never jitter.
  const starsX = useTransform(sx, [-0.5, 0.5], [9, -9]);
  const starsY = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const mtsX = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  // Pure-CSS/SVG game mockup — no external image needed, with local fallback
  return (
    <div className="game-card">
      <svg viewBox="0 0 400 460" style={{ width: '100%', height: '100%', display: 'block' }} role="img" aria-label="Pixel platformer game mockup">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c1c22" />
            <stop offset="55%" stopColor="#2b2b33" />
            <stop offset="100%" stopColor="#ff4d00" stopOpacity="0.55" />
          </linearGradient>
          <radialGradient id="vig" cx="50%" cy="42%" r="75%">
            <stop offset="60%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.35" />
          </radialGradient>
        </defs>
        <rect width="400" height="460" fill="url(#sky)" />
        <motion.g style={{ x: starsX, y: starsY }}>
          {Array.from({ length: 28 }).map((_, i) => (
            <circle key={i} cx={(i * 67) % 400} cy={(i * 37) % 200} r={i % 5 === 0 ? 2.2 : 1.1} fill="#fff" opacity={0.5} />
          ))}
          <circle cx="310" cy="110" r="42" fill="#f5f5f2" opacity="0.92" />
          <circle cx="296" cy="100" r="42" fill="#2b2b33" opacity="0.28" />
        </motion.g>
        <motion.g style={{ x: mtsX }}>
          {/* mountains */}
          <polygon points="0,340 90,220 180,340" fill="#17171c" />
          <polygon points="120,340 230,190 340,340" fill="#101014" />
          <polygon points="260,340 350,240 440,340" fill="#17171c" />
        </motion.g>
        {/* platforms */}
        <rect x="30" y="360" width="120" height="18" rx="4" fill="#f5f5f2" />
        <rect x="190" y="310" width="110" height="18" rx="4" fill="#f5f5f2" />
        <rect x="60" y="250" width="90" height="16" rx="4" fill="#ff4d00" />
        <rect x="250" y="210" width="110" height="16" rx="4" fill="#f5f5f2" />
        {/* ground */}
        <rect x="0" y="392" width="400" height="68" fill="#0e0e10" />
        <rect x="0" y="392" width="400" height="10" fill="#ff4d00" />
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x={i * 36} y="416" width="18" height="18" fill="#1e1e24" />
        ))}
        {/* coins */}
        <g fill="#ffd23f">
          <rect x="215" y="278" width="12" height="16" rx="6" />
          <rect x="250" y="278" width="12" height="16" rx="6" />
          <rect x="285" y="180" width="12" height="16" rx="6" />
        </g>
        {/* hero character — chunky pixel knight */}
        <g transform="translate(88,300)">
          <rect x="0" y="0" width="44" height="40" rx="6" fill="#f5f5f2" />
          <rect x="8" y="10" width="12" height="12" fill="#111" />
          <rect x="26" y="10" width="10" height="12" fill="#ff4d00" />
          <rect x="4" y="40" width="14" height="16" fill="#111" />
          <rect x="26" y="40" width="14" height="16" fill="#111" />
          <rect x="44" y="16" width="16" height="10" rx="3" fill="#ffd23f" />
        </g>
        {/* enemy slime */}
        <g transform="translate(300,352)">
          <rect x="0" y="0" width="40" height="28" rx="12" fill="#7c5cff" />
          <circle cx="13" cy="13" r="3.5" fill="#fff" />
          <circle cx="27" cy="13" r="3.5" fill="#fff" />
        </g>
        <rect width="400" height="460" fill="url(#vig)" />
      </svg>

      <div className="game-hud">
        <div className="hud-top">
          <span className="hud-pill">● Level 01 — Pixel Run</span>
          <span className="hud-score">★ 1,240</span>
        </div>
        <div className="hud-bottom">
          <span className="hud-pill">♥ ♥ ♥</span>
          <span className="hud-pill">Unity · C#</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // Damped follow: the visual eases toward the cursor instead of being
  // hard-bound to it — no shaking, no jitter, fluid return on leave.
  const sx = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 90, damping: 18, mass: 0.6 });
  const rx = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const ry = useTransform(sy, [-0.5, 0.5], [-8, 8]);

  // On repeat visits (e.g. back from a project page) skip the long intro
  // delays so the hero never feels dead.
  const [fast] = useState(() => {
    try { return !!sessionStorage.getItem('daven-intro'); } catch { return false; }
  });
  useEffect(() => {
    try { sessionStorage.setItem('daven-intro', '1'); } catch { /* ignore */ }
  }, []);
  const d = (v) => (fast ? v * 0.1 : v);

  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: d(0.98), ease }}
          >
            <span className="hero-label">
              <span className="dot" /> 2D Game Developer — Creative Developer
            </span>
          </motion.div>

          <h1 className="h-display h-xl hero-title">
            <span className="line">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: d(1.06), ease }}
              >
                I build <span className="accent">playful</span>
              </motion.span>
            </span>
            <span className="line">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: d(1.16), ease }}
              >
                digital experiences.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="lead hero-desc"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: d(1.3), ease }}
          >
            Saya seorang 2D Game Developer dan Creative Developer yang berfokus pada
            game, interactive experiences, dan digital products — dengan perpaduan
            design dan technology.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: d(1.4), ease }}
          >
            <Link
              to="/daven/projects"
              className="btn btn-primary"
              aria-label="Go to projects section"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link to="/daven/contact" className="btn btn-ghost" aria-label="Go to contact section">
              Let&apos;s Talk <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="hero-facts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: d(1.5) }}
          >
            <div><strong>Unity-first</strong><span>2D game dev</span></div>
            <div><strong>Design + Code</strong><span>UI/UX & frontend</span></div>
            <div><strong>Based in ID</strong><span>Open to collab</span></div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: d(1.2), ease }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            mx.set((e.clientX - r.left) / r.width - 0.5);
            my.set((e.clientY - r.top) / r.height - 0.5);
          }}
          onMouseLeave={() => { mx.set(0); my.set(0); }}
        >
          <motion.div style={{ x: rx, y: ry }}>
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PixelHeroArt sx={sx} sy={sy} />
            </motion.div>
          </motion.div>

          <motion.div
            className="float-chip float-a"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          >
            <span className="chip-icon accent"><Gamepad2 size={16} /></span>
            <span><strong>Game feel first</strong><br /><span style={{ color: 'var(--muted)' }}>juice &gt; content</span></span>
          </motion.div>
          <motion.div
            className="float-chip float-b"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="chip-icon"><Sparkles size={16} /></span>
            <span><strong>Design × Code</strong><br /><span style={{ color: 'var(--muted)' }}>Figma → Unity → Web</span></span>
          </motion.div>
        </motion.div>
      </div>

      <div className="wrap">
        <motion.div
          className="hero-foot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: d(1.6) }}
        >
          <Link
            to="/daven/about"
            className="scroll-hint"
            aria-label="Go to about section"
          >
            Scroll <ArrowDown size={13} />
          </Link>
          <span>06.20°S — 106.84°E / Jakarta, ID</span>
        </motion.div>
      </div>
    </section>
  );
}
