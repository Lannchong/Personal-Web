import { useState } from 'react';
import { Code2, Gamepad2, Palette } from 'lucide-react';
import { Reveal } from './Reveal';

const capabilities = [
  { icon: <Gamepad2 size={19} />, title: '2D Game Developer', desc: 'Unity · C# · game feel & level design' },
  { icon: <Code2 size={19} />, title: 'Creative Developer', desc: 'React · JavaScript · motion & interaction' },
  { icon: <Palette size={19} />, title: 'UI/UX Designer', desc: 'Figma · wireframe to prototype' },
];

const personalInfo = [
  { k: 'Role', v: '2D Game Developer' },
  { k: 'Focus', v: 'Games · UI/UX · Frontend' },
  { k: 'Tools', v: 'Unity · Figma · React' },
  { k: 'Location', v: 'Purwokerto, Jawa Tengah' },
];

function ProfilePhoto() {
  const [missing, setMissing] = useState(false);
  return (
    <div className="profile-frame">
      {!missing && (
        <img
          src="/images/profile.webp"
          alt="Portrait of Daven, 2D Game Developer"
          loading="lazy"
          onError={() => setMissing(true)}
        />
      )}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="wrap">
        <div className="about-grid">
          {/* LEFT - heading + intro */}
          <div className="about-main">
            <Reveal>
              <div className="section-meta"><span className="num">01</span><span>/ About</span></div>
              <h2 className="h-display about-title">
                A little about<br />me<span className="accent">.</span>
              </h2>
              <p className="lead about-intro">
                Creative developer yang tertarik pada 2D game development,
                UI/UX design, dan interactive digital experiences.
              </p>
              <p className="lead about-emphasis">
                Saya suka mengubah ide sederhana menjadi sesuatu yang bisa{' '}
                <strong>dimainkan, digunakan, dan dirasakan</strong>, bukan cuma dilihat.
              </p>
            </Reveal>
          </div>

          {/* RIGHT - photo only, sticky lives on a plain div */}
          <div className="about-visual">
            <div className="about-photo-sticky">
              <Reveal delay={0.08}>
                <figure style={{ margin: 0 }}>
                  <ProfilePhoto />
                  <figcaption className="photo-cap">
                    <span>Portrait</span>
                    <span>2026</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>

          {/* LEFT - description + info + capabilities */}
          <div className="about-sub">
            <Reveal>
              <p className="lead">
                Saya percaya teknologi bukan hanya tentang bagaimana sesuatu bekerja,
                tetapi juga bagaimana seseorang merasakan pengalaman ketika menggunakannya.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <dl className="about-meta">
                {personalInfo.map((m) => (
                  <div key={m.k} className="meta-row">
                    <dt>{m.k}</dt>
                    <dd>{m.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <div className="about-roles">
              {capabilities.map((r, i) => (
                <Reveal key={r.title} delay={0.06 * i}>
                  <div className="role-row">
                    <span className="role-icon">{r.icon}</span>
                    <span>
                      <strong>{r.title}</strong>
                      <span className="role-desc">{r.desc}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
