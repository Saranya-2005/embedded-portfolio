import { useState } from 'react';
import { ChevronRight, ImageIcon, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { cn } from '../lib/utils';
import { projects, type Shot } from '../data';
import Section from './Section';

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-1.5">
          <span className="px-2 py-1 rounded border border-primary/30 bg-primary/5 text-primary">{s}</span>
          {i < steps.length - 1 && <ChevronRight className="h-3 w-3 text-muted-foreground" />}
        </span>
      ))}
    </div>
  );
}

export function ShotImg({ shot, className }: { shot: Shot; className?: string }) {
  if (shot.kind === 'phone') {
    return (
      <div className={cn('rounded-[1.4rem] border-4 border-secondary bg-secondary p-0.5 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.6)]', className)}>
        <img src={shot.src} alt={shot.caption} className="rounded-[1rem] w-full h-full object-contain" />
      </div>
    );
  }
  if (shot.kind === 'cutout') {
    return (
      <div className={cn('relative grid place-items-center rounded-xl bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.14),transparent_70%)]', className)}>
        <img src={shot.src} alt={shot.caption} className="max-w-full max-h-full object-contain drop-shadow-[0_15px_35px_hsl(var(--primary)/0.35)] transition-transform duration-500 group-hover:scale-105" />
      </div>
    );
  }
  return (
    <div className={cn('rounded-xl overflow-hidden border border-border bg-background', className)}>
      <img src={shot.src} alt={shot.caption} className={cn('w-full h-full', shot.kind === 'diagram' ? 'object-contain img-dark' : 'object-cover opacity-90')} />
    </div>
  );
}

function Preview({ images }: { images: Shot[] }) {
  if (!images.length) {
    return (
      <div className="h-48 rounded-xl border border-dashed border-border grid place-items-center text-muted-foreground">
        <div className="text-center font-mono text-xs"><ImageIcon className="h-6 w-6 mx-auto mb-2 text-primary/60" />web-controlled manipulator</div>
      </div>
    );
  }
  if (images[0].kind === 'phone') {
    return (
      <div className="flex justify-center gap-3 h-56">
        {images.slice(0, 3).map((s, i) => <ShotImg key={s.src} shot={s} className={cn('h-full w-auto aspect-[191/425]', i === 1 && '-translate-y-3')} />)}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-3 h-48">
      {images.slice(0, 2).map((s) => <ShotImg key={s.src} shot={s} />)}
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  const p = open !== null ? projects[open] : null;
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((pr, i) => (
          <button key={pr.title} onClick={() => setOpen(i)}
            className={cn('group text-left glass glow-border p-6 rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1', i === 0 && 'md:col-span-2')}>
            <div className={cn('grid gap-6', i === 0 && 'lg:grid-cols-[1fr_1.1fr] items-center')}>
              <div className={cn(i === 0 && 'lg:order-2')}><Preview images={pr.images} /></div>
              <div>
                <div className="flex justify-between font-mono text-xs mb-3">
                  <span className="text-accent">{pr.tag}</span>
                  <span className="text-muted-foreground/60">#{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">{pr.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{pr.desc}</p>
                <div className="mt-5"><Flow steps={pr.flow} /></div>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-primary">
                  <Maximize2 className="h-3.5 w-3.5" /> View details
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-primary/30">
          {p && (
            <div>
              <p className="font-mono text-xs text-accent">{p.tag}</p>
              <DialogTitle className="text-2xl font-bold mt-1">{p.title}</DialogTitle>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              {p.images.length > 0 && (
                <div className={cn('mt-6 grid gap-4', p.images[0].kind === 'phone' ? 'grid-cols-2 sm:grid-cols-5' : 'sm:grid-cols-2')}>
                  {p.images.map((s) => (
                    <figure key={s.src}>
                      <ShotImg shot={s} className={s.kind === 'phone' ? '' : 'aspect-[4/3]'} />
                      <figcaption className="mt-2 text-xs text-muted-foreground text-center">{s.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
              <h4 className="mt-6 font-mono text-sm text-primary">// my contribution</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {p.points.map((pt) => <li key={pt} className="before:content-['▹'] before:text-primary before:mr-2">{pt}</li>)}
              </ul>
              <div className="mt-5"><Flow steps={p.flow} /></div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => <span key={s} className="px-2.5 py-1 rounded-md text-xs bg-secondary border border-border">{s}</span>)}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
