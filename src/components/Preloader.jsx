import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Single source of truth: satu state `progress` menggerakkan angka,
// bar, DAN kondisi selesai. Loader tidak bisa keluar sebelum 100.
const MIN_DURATION = 1100; // ms - progress selalu terlihat utuh walau cached
const HOLD_MS = 300; // short hold di 100 / 100 sebelum exit
const FAILSAFE_MS = 5000; // jangan pernah hang

// Asset penting yang terlihat di awal (above the fold)
const PRELOAD_IMAGES = [
  '/assets/projects/project-01.svg',
  '/assets/projects/project-02.svg',
  '/assets/projects/project-03.svg',
  '/assets/projects/project-04.svg',
  '/assets/projects/project-05.svg',
  '/images/profile.webp',
];

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    // File hilang (mis. profile.webp belum dipasang) TIDAK BOLEH menggantung loader
    img.onerror = () => resolve();
    img.src = src;
  });
}

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const start = performance.now();
    const minTime = reduced ? 250 : MIN_DURATION;
    let target = 8; // React sudah mount
    let display = 0;
    let raf = 0;
    let finished = false;

    // Milestone readiness nyata - target hanya naik saat resource benar siap
    (async () => {
      try {
        await (document.fonts ? document.fonts.ready : Promise.resolve());
      } catch {
        /* lanjut - fonts tidak boleh menggantung */
      }
      target = 35;
      await Promise.all(PRELOAD_IMAGES.map(loadImage));
      target = 75;
      if (document.readyState !== 'complete') {
        await new Promise((resolve) => {
          window.addEventListener('load', resolve, { once: true });
          setTimeout(resolve, FAILSAFE_MS);
        });
      }
      target = 100;
    })();

    const tick = (now) => {
      if (finished) return;
      // Interpolasi smooth menuju target - angka selalu mengikuti progress
      display += (target - display) * (reduced ? 0.4 : 0.075);
      if (display > 99.6) display = 99.6;
      const elapsed = now - start;

      if (target >= 100 && display >= 99.5 && elapsed >= minTime) {
        finished = true;
        setProgress(100);
        setTimeout(() => onCompleteRef.current?.(), HOLD_MS);
        return;
      }
      setProgress(Math.floor(display));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      finished = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  const label = String(progress).padStart(2, '0');

  return (
    <motion.div
      className="preloader"
      role="status"
      aria-label={`Loading website, ${progress} of 100`}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
    >
      <div className="preloader-inner">
        <div className="preloader-logo">
          Daven<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
        <div className="preloader-bar">
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="preloader-count" aria-hidden="true">
          {label} / 100
        </div>
      </div>
    </motion.div>
  );
}
