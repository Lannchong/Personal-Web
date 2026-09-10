import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function ProjectArt({ project, tall = false }) {
  return (
    <div
      className="art-fallback"
      style={{
        background: `linear-gradient(135deg, ${project.fallback[0]}, ${project.fallback[1]}22 60%, ${project.fallback[0]})`,
        aspectRatio: tall ? undefined : undefined,
        minHeight: '100%',
      }}
      aria-hidden="true"
    >
      <span className="big">{project.title}</span>
      <span className="sub"><span>{project.index} / {project.kind}</span><span>{project.year}</span></span>
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <Link
        to={`/daven/project/${project.id}`}
        className={`project-card ${featured ? 'featured' : ''}`}
        data-cursor="view"
        aria-label={`View project ${project.title}`}
      >
        <div className="project-media">
          <img
            src={project.image}
            alt={`${project.title} — ${project.kind}`}
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          {/* CSS fallback selalu di belakang image */}
          <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
            <ProjectArt project={project} />
          </div>
          <div className="veil" />
          <span className="project-view">View <ArrowUpRight size={15} /></span>
        </div>
        <div className="project-body">
          <div className="project-top">
            <span className="p-idx">{project.index} / {project.kind}</span>
            <span className="p-idx">{project.year}</span>
          </div>
          <div className="project-title-row">
            <h3>{project.title}</h3>
            <span className="p-goto" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </div>
          <div className="project-meta">
            <span className="tag hot">{project.category}</span>
            {project.tools.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
