import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getProject, projects } from '../data/projects';
import { ProjectArt } from '../components/ProjectCard';
import { Footer } from '../components/Contact';
import { Reveal } from '../components/Reveal';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);

  if (!project) {
    return (
      <main className="wrap" style={{ padding: '160px 0 80px' }}>
        <h1 className="h-display h-lg">Project not found.</h1>
        <Link to="/daven/home" className="btn btn-primary" style={{ marginTop: 20 }}>
          <ArrowLeft size={16} /> Back home
        </Link>
      </main>
    );
  }

  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];
  const isGame = project.category === 'Games';
  const sections = isGame
    ? ['Gameplay', 'Game Mechanics', 'Art Direction', 'Level Design', 'Development Process']
    : ['Problem', 'Research', 'Wireframe', 'Visual Design', 'Prototype', 'Result'];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="wrap detail-hero">
        <Link to="/daven/projects" className="u-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <ArrowLeft size={15} /> All projects
        </Link>
        <motion.h1
          className="h-display h-xl"
          style={{ margin: '18px 0 10px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {project.title}<span className="accent">.</span>
        </motion.h1>
        <p className="lead">{project.description}</p>

        <div className="kv" style={{ marginTop: 26 }}>
          <div><small>Category</small><strong>{project.category}</strong></div>
          <div><small>Year</small><strong>{project.year}</strong></div>
          <div><small>Role</small><strong>{project.role}</strong></div>
          <div><small>Tools</small><strong>{project.tools.join(' · ')}</strong></div>
        </div>
      </div>

      <div className="wrap">
        <Reveal>
          <div className="detail-media" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0 }}>
              <ProjectArt project={project} />
            </div>
            <img
              src={project.image}
              alt={`${project.title} hero`}
              style={{ position: 'relative' }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </Reveal>

        <div className="detail-grid">
          <Reveal>
            <h2 className="h-display h-md" style={{ marginTop: 0 }}>Overview</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead" style={{ color: 'var(--text)' }}>{project.overview}</p>
            <ul style={{ margin: '20px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
              {project.points.map((pt, i) => (
                <li key={pt} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontWeight: 700 }}>
                    0{i + 1}
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="rule" style={{ margin: '26px 0' }} />
            <h3 className="h-display" style={{ fontSize: '1.2rem' }}>Breakdown</h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
              {sections.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <Link
            to={`/daven/project/${next.id}`}
            className="contact-box"
            style={{ display: 'block', textAlign: 'left', marginBottom: 30 }}
            data-cursor="view"
          >
            <span style={{ fontSize: 12, letterSpacing: '0.2em', color: 'var(--muted)', fontWeight: 700 }}>NEXT PROJECT →</span>
            <span className="h-display h-md" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0 0' }}>
              {next.title} <ArrowRight color="var(--accent)" />
            </span>
          </Link>
        </Reveal>
      </div>
      <Footer />
    </motion.main>
  );
}
