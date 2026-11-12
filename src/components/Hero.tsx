import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { profile, stats } from '../data';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute top-1/4 right-[10%] h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-10 right-1/3 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      <div className="container mx-auto px-6 relative grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-sm text-primary mb-4">&gt; system.boot()<span className="blink">_</span></p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">{profile.name}</h1>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-gradient">{profile.role}</h2>
          <p className="mt-2 font-mono text-sm text-muted-foreground">{profile.subRole} · {profile.location}</p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="font-mono shadow-[0_0_30px_-6px_hsl(var(--primary)/0.7)]">
              <a href="#projects">View projects <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-mono bg-transparent">
              <a href={profile.resume} target="_blank" rel="noreferrer"><FileText className="mr-1 h-4 w-4" /> Resume</a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-primary/60 pl-3">
                <div className="text-2xl font-bold font-mono">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
          <div className="absolute inset-[15%] rounded-full border border-primary/20" />
          <div className="absolute inset-[5%] rounded-full border border-dashed border-accent/15 animate-[spin_40s_linear_infinite]" />
          <img src="/img/drone.png" alt="Drone" className="relative float w-full drop-shadow-[0_20px_60px_hsl(var(--primary)/0.35)]" />
        </motion.div>
      </div>
    </section>
  );
}
