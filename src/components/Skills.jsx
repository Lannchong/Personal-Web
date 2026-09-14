import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { skills } from '../data/site';
import TechLogos from './TechLogos';
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
    <span ref={ref} className="skill-pct" aria-label={`${value} percent of focus`}>
      {n}<em>%</em>
    </span>
  );
}

const focusTotal = skills.reduce((a, s) => a + s.percent, 0);
if (import.meta.env.DEV && focusTotal !== 100) {
  console.warn(`[skills] focus distribution total is ${focusTotal}, expected 100.`);
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHeading
          index="03"
          label="Skills"
          title={<>Tools I use<span className="accent">.</span></>}
          desc="Unity sebagai senjata utama, didukung frontend dan UI/UX untuk pengalaman yang utuh."
        />
        <Reveal delay={0.1}>
          <div className="focus-head" aria-label={`Areas of focus, total ${focusTotal} percent`}>
            <span>Areas of focus</span>
            <span>Total {focusTotal}%</span>
          </div>
        </Reveal>
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
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="focus-bar" aria-hidden="true">
                  <motion.i
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
              <Pct value={s.percent} />
            </motion.div>
          ))}
        </div>
        <Reveal delay={0.05}>
          <TechLogos />
        </Reveal>
      </div>
    </section>
  );
}
