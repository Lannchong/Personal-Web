import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from './Reveal';

const ITEMS = ['Game Development', 'UI/UX', 'Creative Code', 'Interaction', '2D Design', 'Game Feel'];

function MarqueeRow() {
  const reduceMotion = useReducedMotion();
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee-track"
        animate={reduceMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((t, i) => (
          <span key={i}>
            {t} <b>•</b>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Story() {
  return (
    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="section-meta"><span className="num">02</span><span>/ Story</span></div>
        </Reveal>
        <div className="story-grid">
          <Reveal delay={0.06}>
            <h2 className="h-display h-lg story-head">
              More than just<br />building <span className="accent">websites.</span>
            </h2>
          </Reveal>
          <div className="story-side">
            <Reveal delay={0.12}>
              <p className="story-lead">
                Teknologi bukan hanya soal <span className="accent-word">cara kerja</span>,
                tetapi juga soal <span className="accent-word">rasa</span> saat
                menggunakannya.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead">
                Saya menggabungkan programming, visual design, storytelling, dan
                game development dalam setiap project yang saya buat.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 54 }}>
        <MarqueeRow />
      </div>
    </section>
  );
}
