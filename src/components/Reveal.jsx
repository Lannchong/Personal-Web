import { motion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Reveal({ children, delay = 0, className, once = true }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-80px' }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ index, label, title, desc }) {
  return (
    <div style={{ marginBottom: 34 }}>
      <Reveal>
        <div className="section-meta">
          <span className="num">{index}</span>
          <span>/ {label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="h-display h-lg" style={{ margin: '0 0 14px' }}>
          {title}
        </h2>
      </Reveal>
      {desc ? (
        <Reveal delay={0.14}>
          <p className="lead">{desc}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
