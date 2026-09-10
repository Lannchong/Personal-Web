// EDIT SEMUA PROJECT DARI FILE INI SAJA.
// Ganti image dengan file di /public/assets/projects/*.webp

export const categories = ['All', 'Games', 'UI/UX', 'Web', 'Experiments'];

export const projects = [
  {
    id: 'pixel-platformer',
    index: '01',
    title: 'Pixel Platformer',
    category: 'Games',
    kind: '2D Platformer Game',
    tools: ['Unity', 'C#', 'Figma'],
    year: '2026',
    role: 'Game Developer & Designer',
    image: '/assets/projects/project-01.svg',
    fallback: ['#1a1a1a', '#ff4d00'],
    description:
      'A tight 2D platformer prototype focused on game feel — coyote time, jump buffering, squash & stretch, and a short hand-crafted level.',
    overview:
      'Pixel Platformer adalah project utama saya untuk mengeksplorasi game feel 2D. Fokusnya bukan konten panjang, melainkan satu level yang terasa enak dimainkan: lompatan responsif, musuh sederhana, dan scoring yang jelas.',
    points: ['Gameplay & game mechanics', 'Art direction & pixel tiles', 'Level design & difficulty tuning'],
    featured: true,
  },
  {
    id: 'pixel-adventure',
    index: '02',
    title: 'Pixel Adventure',
    category: 'Games',
    kind: '2D Game',
    tools: ['Unity', 'C#'],
    year: '2026',
    role: 'Game Developer',
    image: '/assets/projects/project-02.svg',
    fallback: ['#101828', '#2b5cff'],
    description:
      'Top-down adventure experiment — exploration, NPC dialogue and simple quest flow in a cozy pixel world.',
    overview:
      'Eksperimen adventure top-down dengan dialog NPC sederhana, quest flow, dan dunia kecil yang cozy. Dibuat untuk belajar world building & pacing.',
    points: ['Exploration loop', 'Dialogue system', 'Quest flow'],
    featured: false,
  },
  {
    id: 'mobile-game-ui',
    index: '03',
    title: 'Mobile Game UI',
    category: 'UI/UX',
    kind: 'Figma · UI/UX Design',
    tools: ['Figma', 'Prototyping'],
    year: '2026',
    role: 'UI/UX Designer',
    image: '/assets/projects/project-03.svg',
    fallback: ['#f0ede6', '#111111'],
    description:
      'Mobile game UI kit — main menu, HUD, shop & settings designed for clarity and playful character.',
    overview:
      'Design UI game mobile dari wireframe sampai high-fidelity: main menu, HUD, shop, dan settings. Fokus pada readability saat bermain dan konsistensi visual.',
    points: ['Problem & research', 'Wireframe & flow', 'Visual design & prototype'],
    featured: false,
  },
  {
    id: 'personal-website',
    index: '04',
    title: 'Personal Website',
    category: 'Web',
    kind: 'React · Frontend',
    tools: ['React', 'Framer Motion'],
    year: '2026',
    role: 'Designer & Developer',
    image: '/assets/projects/project-04.svg',
    fallback: ['#e8e6e0', '#ff4d00'],
    description:
      'This portfolio — editorial layout, motion system, dark mode & reusable component architecture.',
    overview:
      'Website ini sendiri: arsitektur component reusable, design system dengan CSS variables, dark mode, custom cursor, dan animasi yang purposeful.',
    points: ['Design system', 'Motion & interaction', 'Performance & a11y'],
    featured: false,
  },
  {
    id: 'creative-interaction',
    index: '05',
    title: 'Cursor Playground',
    category: 'Experiments',
    kind: 'JavaScript · Creative Dev',
    tools: ['JavaScript', 'Canvas'],
    year: '2025',
    role: 'Creative Developer',
    image: '/assets/projects/project-05.svg',
    fallback: ['#111111', '#7c5cff'],
    description:
      'A set of small interactive experiments — magnetic buttons, pixel followers & playful cursor states.',
    overview:
      'Kumpulan eksperimen interaksi kecil untuk web: magnetic button, pixel follower, dan cursor states. Tujuannya eksplorasi game feel di luar game.',
    points: ['Interaction design', 'Motion prototyping', 'Playful details'],
    featured: false,
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);
