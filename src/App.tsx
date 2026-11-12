import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { About, Skills, Journey, Experience, Achievements, Contact } from './components/Sections';
import { profile } from './data';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.title = `${profile.name} — ${profile.role}`;
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · built with <span className="text-primary">C</span>, curiosity &amp; coffee
      </footer>
    </div>
  );
}
