import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { skills } from '../data/site';
import TechLogos from './TechLogos';
import { Reveal, SectionHeading } from './Reveal';

const EASE = [0.22, 1, 0.36, 1];

// Satu-satunya sumber data persentase: `skills` di data/site.js
// (40 / 25 / 20 / 15, total 100). Tidak ada desktopPercentage /
// mobilePercentage - desktop dan mobile membaca array yang sama.
function SkillRow({ s, index }) {
  const ref = useRef(null);
  // Trigger berbasis proporsi elemen (bukan pixel rootMargin), sehingga
  // bekerja identik di viewport HP 375px maupun desktop 1440px.
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();

  // DATA-DRIVEN DEFAULT: angka & bar selalu sama dengan data sejak render
  // pertama. Animasi hanya enhancement - jika observer/animation tidak
  // pernah jalan (mobile, reduced motion, tab background), UI tetap
  // menampilkan 40 / 25 / 20 / 15 dan TIDAK PERNAH stuck di 0.
  const [n, setN] = useState(s.percent);
  const [w, setW] = useState(s.percent);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, s.percent, {
      duration: 0.9,
      ease: EASE,
      onUpdate: (v) => {
        setN(Math.round(v));
        setW(v);
      },
      onComplete: () => {
        setN(s.percent);
        setW(s.percent);
      },
    });
    return () => controls.stop();
  }, [inView, s.percent, reduceMotion]);

  return (
    <motion.div
      ref={ref}
      className="skill-row"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: EASE }}
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
      </div>
      <span className="skill-pct" aria-label={`${s.percent} percent of focus`}>
        {n}<em>%</em>
      </span>
      {/* Lebar bar selalu berasal dari data persentase yang sama dengan angka */}
      <div className="focus-bar" aria-hidden="true">
        <i style={{ width: `${w}%` }} />
      </div>
    </motion.div>
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
            <SkillRow key={s.id} s={s} index={i} />
          ))}
        </div>
        <Reveal delay={0.05}>
          <TechLogos />
        </Reveal>
      </div>
    </section>
  );
}
