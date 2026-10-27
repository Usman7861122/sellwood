import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Testimonials({ items }: { items: { quote: string; name: string }[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setI((n) => (n + 1) % items.length), 8000);
    return () => clearTimeout(t);
  }, [i, items.length, reduce]);
  const t = items[i];
  return (
    <div className="relative mx-auto max-w-4xl text-center">
      <span aria-hidden="true" className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 font-display text-[12rem] leading-none text-sprout/20">“</span>
      <div className="relative min-h-[16rem] md:min-h-[14rem]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <blockquote className="font-display text-2xl leading-snug text-cream md:text-4xl">{t.quote}</blockquote>
            <figcaption className="mt-8 text-sm uppercase tracking-[.25em] text-sprout">{t.name}</figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex justify-center gap-3">
        {items.map((_, n) => (
          <button key={n} onClick={() => setI(n)} aria-label={`Testimonial ${n + 1}`} className={`h-1.5 rounded-full transition-all duration-500 ${n === i ? 'w-12 bg-sprout' : 'w-5 bg-white/30 hover:bg-white/60'}`} />
        ))}
      </div>
    </div>
  );
}
