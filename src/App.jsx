import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import { useTheme } from './components/hooks';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

// Satu halaman, banyak route: tiap route /daven/* me-render Home dan
// mengantar ke section-nya. Desain tidak berubah - URL yang addressable,
// back/forward/refresh bekerja.
const SECTION_ROUTES = {
  '/daven/home': 'home',
  '/daven/about': 'about',
  '/daven/skills': 'skills',
  '/daven/projects': 'projects',
  '/daven/contact': 'contact',
};

function RouteScroller() {
  const { pathname } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    const id = SECTION_ROUTES[pathname];
    if (!id) {
      // Halaman non-section (detail project): mulai dari atas
      if (pathname.startsWith('/daven/project')) window.scrollTo(0, 0);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    if (first.current) {
      // Load awal / refresh: langsung di section tanpa animasi panjang
      first.current = false;
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pathname]);
  return null;
}

function LegacyProjectRedirect() {
  const { id } = useParams();
  return <Navigate to={`/daven/project/${id}`} replace />;
}

function Shell() {
  const [theme, toggleTheme] = useTheme();
  // Loader keluar HANYA lewat onComplete Preloader (progress === 100 + hold).
  // Tidak ada timeout buta di sini.
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>{loading && <Preloader onComplete={() => setLoading(false)} />}</AnimatePresence>
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Navigate to="/daven/home" replace />} />
          <Route path="/daven" element={<Navigate to="/daven/home" replace />} />
          <Route path="/daven/home" element={<Home />} />
          <Route path="/daven/about" element={<Home />} />
          <Route path="/daven/skills" element={<Home />} />
          <Route path="/daven/projects" element={<Home />} />
          <Route path="/daven/contact" element={<Home />} />
          <Route path="/daven/project/:id" element={<ProjectDetail />} />
          <Route path="/project/:id" element={<LegacyProjectRedirect />} />
          <Route path="*" element={<Navigate to="/daven/home" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteScroller />
      <Shell />
    </BrowserRouter>
  );
}
