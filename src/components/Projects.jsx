import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { categories, projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { SectionHeading } from './Reveal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const list = projects.filter((p) => filter === 'All' || p.category === filter);
  const featured = list.find((p) => p.featured);
  const rest = list.filter((p) => p !== featured);

  return (
    <section id="projects" className="section-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="projects-head">
          <div style={{ flex: '1 1 320px' }}>
            <SectionHeading
              index="04"
              label="Projects"
              title={<>Selected projects<span className="accent">.</span></>}
              desc="A collection of things I've built, designed, and experimented with."
            />
          </div>
          <div className="filters" role="tablist" aria-label="Filter projects">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {featured && <ProjectCard key={featured.id} project={featured} featured />}
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length === 0 && (
          <p className="lead" style={{ marginTop: 24 }}>No projects in this category yet — check back soon.</p>
        )}
      </div>
    </section>
  );
}
