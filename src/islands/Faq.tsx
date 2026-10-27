import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-forest/15 border-y border-forest/15">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-7 text-left"
            >
              <span className={`font-display text-xl transition-colors duration-300 md:text-2xl ${isOpen ? 'text-olive' : 'text-forest group-hover:text-olive'}`}>{f.q}</span>
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-forest/25 text-xl transition-all duration-500 ${isOpen ? 'rotate-45 bg-forest text-cream' : 'group-hover:bg-sand'}`}>+</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-8 leading-relaxed text-ink/70">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
