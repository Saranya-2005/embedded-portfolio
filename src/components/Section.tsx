import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function Section({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="py-24 scroll-mt-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">0x{index}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
