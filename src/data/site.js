export const site = {
  name: 'Daven.',
  firstName: 'Daven',
  role: '2D Game Developer & Creative Developer',
  label: '2D Game Developer / Creative Developer',
  location: 'Indonesia',
  email: 'meilannoaditya08@gmail.com',
  // Compose Gmail langsung di tab baru (pengganti mailto: yang butuh mail client)
  gmailCompose: 'https://mail.google.com/mail/?view=cm&fs=1&to=meilannoaditya08@gmail.com',
  // Social links — single source of truth, used by Contact, Footer & mobile menu
  socials: [
    { label: 'GitHub', href: 'https://github.com/Lannchong' },
    { label: 'Instagram', href: 'https://www.instagram.com/xzylann__/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/meilanno-adityarahma-riyanto-2bbb9a344/' },
  ],
  // EDIT: angka placeholder — ganti kalau sudah ada data asli
  stats: [
    { value: 4, suffix: '+', label: 'Projects built' },
    { value: 3, suffix: '+', label: 'Game projects' },
    { value: 8, suffix: '+', label: 'Design experiments' },
    { value: 100, suffix: '%', label: 'Curiosity & play' },
  ],
};

export const skills = [
  // percent = PLACEHOLDER yang mudah diedit. Bukan klaim resmi pengalaman kerja.
  // Game Development: 85, Frontend: 75, UI/UX: 80, Creative Development: 70
  {
    id: '01',
    title: 'Game Development',
    desc: '2D platformer mechanics, game feel, level flow & prototyping.',
    tags: ['Unity', 'C#', '2D Physics'],
    percent: 85,
    highlight: true,
  },
  {
    id: '02',
    title: 'Frontend',
    desc: 'Clean, fast, responsive interfaces with modern React.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    percent: 75,
    highlight: false,
  },
  {
    id: '03',
    title: 'UI / UX',
    desc: 'Wireframe to visual design — focused on clarity & playfulness.',
    tags: ['Figma', 'Prototyping', 'Design System'],
    percent: 80,
    highlight: false,
  },
  {
    id: '04',
    title: 'Creative Development',
    desc: 'Interaction, motion & playful experiments for the web.',
    tags: ['Motion', 'Canvas', 'Git & GitHub'],
    percent: 70,
    highlight: false,
  },
];

export const processSteps = [
  { id: '01', title: 'Idea', desc: 'Core fantasy, pillars & scope. Small, sharp, playable.' },
  { id: '02', title: 'Game Design', desc: 'Mechanics, loops, level beats & difficulty curve.' },
  { id: '03', title: 'Prototype', desc: 'Greybox fast. Test feel before visuals.' },
  { id: '04', title: 'Art & UI', desc: 'Pixel direction, character, HUD & menus.' },
  { id: '05', title: 'Development', desc: 'Clean Unity architecture & iteration.' },
  { id: '06', title: 'Testing', desc: 'Playtest, fix friction, tune game feel.' },
];

export const experiences = [
  { year: '2026', title: 'Game Development Projects', desc: '2D platformer prototypes, mechanics & pixel art direction. — placeholder, isi dengan project aslimu' },
  { year: '2026', title: 'UI/UX Projects', desc: 'Mobile & web interface design, wireframe to prototype in Figma. — placeholder' },
  { year: '2025', title: 'Creative Coding Experiments', desc: 'Interactive web experiments, motion & JavaScript play. — placeholder' },
  { year: '2025', title: 'Frontend Learning & Building', desc: 'React, modern CSS & building this portfolio. — placeholder' },
];
