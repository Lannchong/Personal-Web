export const site = {
  name: 'Daven.',
  firstName: 'Daven',
  role: '2D Game Developer & Creative Developer',
  label: '2D Game Developer / Creative Developer',
  email: 'meilannoaditya08@gmail.com',
  // Compose Gmail langsung di tab baru (pengganti mailto: yang butuh mail client)
  gmailCompose: 'https://mail.google.com/mail/?view=cm&fs=1&to=meilannoaditya08@gmail.com',
  // Social links - single source of truth, used by Contact, Footer & mobile menu
  socials: [
    { label: 'GitHub', href: 'https://github.com/Lannchong' },
    { label: 'Instagram', href: 'https://www.instagram.com/xzylann__/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/meilanno-adityarahma-riyanto-2bbb9a344/' },
  ],
};

export const skills = [
  // AREAS OF FOCUS - distribusi fokus, BUKAN rating skill.
  // Total HARUS 100: 40 + 25 + 20 + 15.
  {
    id: '01',
    title: 'Game Development',
    desc: '2D platformer mechanics, game feel, level flow & prototyping.',
    tags: ['Unity', 'C#', '2D Physics'],
    percent: 40,
  },
  {
    id: '02',
    title: 'Frontend',
    desc: 'Clean, fast, responsive interfaces with modern React.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    percent: 25,
  },
  {
    id: '03',
    title: 'UI / UX',
    desc: 'Wireframe to visual design, focused on clarity & playfulness.',
    tags: ['Figma', 'Prototyping', 'Design System'],
    percent: 20,
  },
  {
    id: '04',
    title: 'Creative Development',
    desc: 'Interaction, motion & playful experiments for the web.',
    tags: ['Motion', 'Canvas', 'Git & GitHub'],
    percent: 15,
  },
];
