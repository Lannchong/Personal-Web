import About from '../components/About';
import Contact, { Footer } from '../components/Contact';
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
      <Contact />
      <Footer />
    </main>
  );
}
