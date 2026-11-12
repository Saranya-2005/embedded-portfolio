import { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { profile } from '../data';

const links = ['about', 'skills', 'projects', 'journey', 'experience', 'achievements', 'contact'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <Cpu className="h-5 w-5 text-primary" />
          <span>{profile.name.split(' ')[0].toLowerCase()}<span className="text-primary">.c</span></span>
        </a>
        <ul className="hidden lg:flex gap-6 font-mono text-sm text-muted-foreground">
          {links.map((l, i) => (
            <li key={l}>
              <a href={`#${l}`} className="hover:text-primary transition-colors">
                <span className="text-primary/70">0{i + 1}.</span> {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="lg:hidden border-t border-border px-6 py-4 space-y-3 font-mono text-sm bg-background">
          {links.map((l, i) => (
            <li key={l}>
              <a href={`#${l}`} onClick={() => setOpen(false)}>
                <span className="text-primary">0{i + 1}.</span> {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
