
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { profile, stats } from '../data';

const droneImage = `${import.meta.env.BASE_URL}img/drone.png`;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 lg:pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="absolute top-1/4 right-[10%] h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary/20 blur-[120px]" />

      <div className="absolute bottom-10 right-1/3 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-accent/20 blur-[120px]" />

      {/* Main content */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          <p className="font-mono text-sm text-primary mb-4">
            &gt; system.boot()
            <span className="blink">_</span>
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] break-words">
            {profile.name}
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient">
            {profile.role}
          </h2>

          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground">
            {profile.subRole} · {profile.location}
          </p>

          <p className="mt-6 mx-auto lg:mx-0 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {profile.tagline}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            <Button
              asChild
              size="lg"
              className="font-mono shadow-[0_0_30px_-6px_hsl(var(--primary)/0.7)]"
            >
              <a href="#projects">
                View projects
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-mono bg-transparent"
            >
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-1 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Statistics */}
          <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto lg:mx-0 text-left">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-l-2 border-primary/60 pl-2 sm:pl-3 min-w-0"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono">
                  {s.value}
                </div>

                <div className="text-[10px] sm:text-xs text-muted-foreground leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right drone image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-[520px] mx-auto flex items-center justify-center"
        >
          {/* Circular decorations */}
          <div className="absolute w-[70%] aspect-square rounded-full border border-primary/20" />

          <div className="absolute w-[90%] aspect-square rounded-full border border-dashed border-accent/20 animate-[spin_40s_linear_infinite]" />

          {/* Drone image */}
          <img
            src={droneImage}
            alt="Drone technology illustration"
            onError={(e) => {
              console.error('Drone image not found:', droneImage);
              e.currentTarget.style.display = 'none';
            }}
            className="relative z-10 w-full h-auto max-h-[280px] sm:max-h-[380px] lg:max-h-[500px] object-contain float drop-shadow-[0_20px_60px_hsl(var(--primary)/0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
