import { motion } from 'framer-motion';
import { experiences, processSteps } from '../data/site';
import { Reveal, SectionHeading } from './Reveal';

export function Process() {
  return (
    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHeading
          index="06"
          label="Process"
          title={<>How I build<span className="accent">.</span></>}
          desc="Dari ide ke experience — alur yang saya pakai untuk game maupun web."
        />
        <div className="steps">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.id}
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="s-idx">{s.id}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="lead" style={{ marginTop: 26, fontSize: '0.95rem' }}>
            Research → Wireframe → Design → Prototype → Development → Launch — visual minimal, eksekusi rapi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHeading
          index="07"
          label="Experience"
          title={<>Achievements &<br />experience<span className="accent">.</span></>}
          desc="Placeholder jujur — isi dengan kompetisi, sertifikat, freelance, atau school projects kamu."
        />
        <div className="exp-list">
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              className="exp-row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="year">{e.year}</span>
              <span><h4>{e.title}</h4><p>{e.desc}</p></span>
              <span className="tag">Placeholder</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
