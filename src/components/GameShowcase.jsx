import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Gamepad2, Heart, Map, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

function Runner() {
  // Pixel character yang berjalan mengikuti scroll (subtle, premium)
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['4%', '88%']);

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
      <motion.div style={{ x, position: 'absolute', bottom: 59, left: 0 }}>
        <motion.svg
          width="46" height="52" viewBox="0 0 46 52"
          animate={reduceMotion ? { y: 0 } : { y: [0, -5, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, ease: 'easeInOut' }}
          style={{ imageRendering: 'pixelated' }}
        >
          <rect x="6" y="4" width="34" height="30" rx="6" fill="#f5f5f2" />
          <rect x="12" y="14" width="9" height="10" fill="#111" />
          <rect x="27" y="14" width="7" height="10" fill="#ff4d00" />
          <rect x="8" y="34" width="12" height="14" fill="#f5f5f2" />
          <rect x="26" y="34" width="12" height="14" fill="#ff4d00" />
        </motion.svg>
      </motion.div>
    </div>
  );
}

const feats = [
  { icon: <Zap size={18} />, title: 'Game feel & juice', desc: 'Coyote time, buffering, squash & stretch, screen shake, details yang bikin enak.' },
  { icon: <Map size={18} />, title: 'Level & systems', desc: 'Core loop, difficulty curve, dan level beats yang jelas.' },
  { icon: <Heart size={18} />, title: 'Pixel art direction', desc: 'Tiles, character & UI yang kohesif, minimal tapi berkarakter.' },
];

export default function GameShowcase() {
  return (
    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="showcase">
          <div className="wrap">
            <Reveal>
              <div className="section-meta"><span className="num">05</span><span>/ Game Dev</span></div>
            </Reveal>
            <div className="showcase-grid">
              <div>
                <Reveal delay={0.06}>
                  <h2 className="h-display h-lg" style={{ margin: '0 0 18px' }}>
                    Building worlds,<br />one <span className="accent">pixel</span> at a time.
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <p style={{ color: 'var(--muted)', maxWidth: '46ch', lineHeight: 1.7 }}>
                    Identitas utama saya sebagai 2D Game Developer: perpaduan minimal
                    editorial design dengan estetika 2D game. Scroll dan lihat karakter
                    kecil ini berjalan, small delight, tetap premium.
                  </p>
                </Reveal>
                <div className="showcase-feats">
                  {feats.map((f, i) => (
                    <Reveal key={f.title} delay={0.08 * i}>
                      <div className="feat">
                        <span className="feat-icon">{f.icon}</span>
                        <span><h4>{f.title}</h4><p>{f.desc}</p></span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <Reveal delay={0.1}>
                <div className="pixel-stage">
                  <div style={{ position: 'absolute', top: 18, left: 18, right: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="hud-pill"><Gamepad2 size={13} style={{ verticalAlign: -2 }} /> pixel_run.exe</span>
                    <span className="hud-score" style={{ color: '#fff' }}>SCORE 0240</span>
                  </div>
                  {/* decorative platforms */}
                  <div style={{ position: 'absolute', left: '12%', bottom: 150, width: 110, height: 12, background: '#2c2c32', borderRadius: 4 }} />
                  <div style={{ position: 'absolute', right: '10%', bottom: 210, width: 130, height: 12, background: '#ff4d00', borderRadius: 4 }} />
                  <div style={{ position: 'absolute', left: '30%', bottom: 260, display: 'flex', gap: 8 }}>
                    <span style={{ width: 12, height: 16, background: '#ffd23f', borderRadius: 6, display: 'block' }} />
                    <span style={{ width: 12, height: 16, background: '#ffd23f', borderRadius: 6, display: 'block' }} />
                    <span style={{ width: 12, height: 16, background: '#ffd23f', borderRadius: 6, display: 'block' }} />
                  </div>
                  <Runner />
                  <div className="pixel-ground" />
                  <div style={{ position: 'absolute', bottom: 16, left: 18, right: 18, display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.2em', color: '#777' }}>
                    <span>UNITY · C#</span><span>60 FPS</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
