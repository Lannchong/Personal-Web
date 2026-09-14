import About from '../components/About';
import Contact, { Footer } from '../components/Contact';
import GameShowcase from '../components/GameShowcase';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Story from '../components/Story';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Story />
      <Skills />
      <Projects />
      <GameShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
