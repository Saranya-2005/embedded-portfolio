import { Mail, Github, Linkedin, MapPin, Briefcase, Phone, GraduationCap, Trophy, FileText, Users } from 'lucide-react';
import { profile, about, education, skills, journey, experience, leadership, achievements } from '../data';
import Section from './Section';

const card = 'glass glow-border rounded-xl border border-border transition-all duration-300';

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="grid gap-4">
          {education.map((e) => (
            <div key={e.degree} className={`${card} flex gap-4 p-5`}>
              <GraduationCap className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-1 font-mono text-xs text-accent">{e.period} · {e.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" index="02" title="Tech Stack">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div key={s.group} className={`${card} p-6`}>
            <h3 className="font-mono text-sm text-accent mb-4">// {s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span key={i} className="px-3 py-1 rounded-md text-sm bg-secondary/70 border border-border hover:border-primary hover:text-primary transition-colors">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Journey() {
  return (
    <Section id="journey" index="04" title="Learning Journey">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {journey.map((j, i) => (
          <div key={j.title} className={`${card} p-5 relative overflow-hidden`}>
            <span className="absolute -right-2 -top-4 text-6xl font-bold font-mono text-primary/10">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-semibold relative">{j.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground relative">{j.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" index="05" title="Experience">
      <ol className="relative border-l border-primary/30 ml-3 space-y-10">
        {experience.map((e) => (
          <li key={e.role} className="pl-8 relative">
            <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
            <p className="font-mono text-xs text-primary">{e.period}</p>
            <h3 className="text-xl font-semibold mt-1">{e.role}</h3>
            <p className="text-muted-foreground flex items-center gap-1.5 text-sm"><Briefcase className="h-3.5 w-3.5" />{e.company}</p>
            <ul className="mt-3 space-y-1.5 text-muted-foreground">
              {e.points.map((pt) => <li key={pt} className="before:content-['▹'] before:text-primary before:mr-2">{pt}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" index="06" title="Leadership & Achievements">
      <div className="relative rounded-2xl overflow-hidden border border-border mb-6">
        <img src={leadership.image} alt="Team Astra" className="w-full h-72 sm:h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-color" />
        <div className="absolute bottom-0 p-6 sm:p-8 max-w-2xl">
          <p className="font-mono text-xs text-accent flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{leadership.period}</p>
          <h3 className="text-2xl sm:text-3xl font-bold mt-1">{leadership.title}</h3>
          <p className="mt-2 text-muted-foreground">{leadership.text}</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a) => (
          <div key={a.title + a.event} className={`${card} flex gap-4 p-5`}>
            <Trophy className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-mono text-xs text-primary">{a.event}</p>
              <h3 className="font-semibold leading-snug mt-0.5">{a.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{a.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const links = [
    { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:+91${profile.phone}` },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Github, label: 'GitHub', href: profile.github },
    { icon: FileText, label: 'Resume', href: profile.resume },
  ];
  return (
    <Section id="contact" index="07" title="Get In Touch">
      <div className="rounded-3xl border border-primary/20 glass p-10 sm:p-14 text-center relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[60%] bg-primary/20 blur-[100px]" />
        <div className="relative">
          <p className="font-mono text-sm text-primary mb-3">while(1) {'{'} open_to_work(); {'}'}</p>
          <h3 className="text-3xl sm:text-4xl font-bold">Let's build something that <span className="text-gradient">runs on metal.</span></h3>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Open to opportunities in embedded systems, firmware development, IoT, vehicle telemetry and robotics.</p>
          <p className="mt-3 text-sm text-muted-foreground break-all">{profile.email}</p>
          <p className="mt-1 text-sm text-muted-foreground flex items-center justify-center gap-1"><MapPin className="h-4 w-4" />{profile.location}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-background/60 hover:border-primary hover:text-primary transition-colors font-mono text-sm">
                <Icon className="h-4 w-4" />{label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
