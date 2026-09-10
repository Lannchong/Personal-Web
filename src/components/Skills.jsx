import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { skills } from '../data/site';
import { Reveal, SectionHeading } from './Reveal';

function Pct({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="skill-pct" aria-label={`${value} percent`}>
      {n}<em>%</em>
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHeading
          index="03"
          label="Skills"
          title={<>Tools I use<span className="accent">.</span></>}
          desc="Unity sebagai senjata utama — didukung frontend dan UI/UX untuk pengalaman yang utuh."
        />
        <div className="skills-list">
          {skills.map((s, i) => (
            <motion.div
              key={s.id}
              className="skill-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="idx">{s.id}</span>
              <div className="skill-main">
                <h3>
                  {s.title}
                  {s.highlight && <em className="main-star">★ Main</em>}
                </h3>
                <p>{s.desc}</p>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Pct value={s.percent} />
            </motion.div>
          ))}
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 12 }}>
          * Persentase placeholder — mudah diubah di <code>src/data/site.js</code>.
        </p>
      </div>
    </section>
  );
}
