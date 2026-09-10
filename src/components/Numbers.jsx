import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { site } from '../data/site';
import { useCountUp } from './hooks';
import { Reveal } from './Reveal';

function NumberCard({ value, suffix, label, inView }) {
  const n = useCountUp(value, inView);
  return (
    <div className="number-card">
      <strong>{n}<em>{suffix}</em></strong>
      <span>{label}</span>
    </div>
  );
}

export default function Numbers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="section-meta"><span className="num">08</span><span>/ Impact</span></div>
        </Reveal>
        <motion.div ref={ref} className="numbers">
          {site.stats.map((s) => (
            <NumberCard key={s.label} {...s} inView={inView} />
          ))}
        </motion.div>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 12 }}>
          * Angka placeholder — mudah diedit di <code>src/data/site.js</code>.
        </p>
      </div>
    </section>
  );
}
