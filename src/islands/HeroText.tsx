import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { heroLines, site } from '../data/site';

const INTERVAL = 6500;

function Words({ text, italic = false }: { text: string; italic?: boolean }) {
  return (
    <>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[.1em] align-bottom">
          <motion.span
            className={`inline-block cursor-default ${italic ? 'italic text-sprout' : ''}`}
            variants={{
              hidden: { y: '110%', opacity: 0, filter: 'blur(10px)' },
              show: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
              leave: { y: '-80%', opacity: 0, filter: 'blur(8px)', transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -8, color: italic ? '#ffffff' : '#9fbd42', transition: { type: 'spring', stiffness: 300, damping: 14 } }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
}

export default function HeroText() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => setI((n) => (n + 1) % heroLines.length), INTERVAL);
    return () => clearTimeout(t);
  }, [i, paused, reduce]);

  const line = heroLines[i];

  return (
    <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-5 pt-24 md:px-10" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="max-w-4xl">
        <div className="min-h-[1.4rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={'k' + i}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.6 }}
              className="eyebrow text-sprout"
            >
              {line.kicker}
            </motion.p>
          </AnimatePresence>
        </div>

        <h1 className="mt-6 min-h-[2.1em] font-display text-[clamp(2.6rem,7.2vw,6.6rem)] font-medium leading-[.98] tracking-tight text-white sm:min-h-[2.05em]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.span key={'h' + i} initial="hidden" animate="show" exit="leave" transition={{ staggerChildren: 0.08 }} className="block">
              <Words text={line.before} />
              <br className="hidden sm:block" />
              <Words text={line.accent} italic />
            </motion.span>
          </AnimatePresence>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href={site.bookingUrl} target="_blank" rel="noopener" className="btn btn-primary">Book a visit <span className="arrow">→</span></a>
          <a href="#services" className="btn btn-ghost">Our services</a>
        </motion.div>
      </div>

      {/* progress bars */}
      <div className="absolute bottom-36 left-5 flex gap-3 md:bottom-32 md:left-10" role="tablist" aria-label="Hero messages">
        {heroLines.map((_, n) => (
          <button key={n} role="tab" aria-selected={n === i} aria-label={`Message ${n + 1}`} onClick={() => setI(n)} className="group h-6 w-12 md:w-16">
            <span className="relative block h-px w-full bg-white/30 transition-all group-hover:h-[3px]">
              {n === i && (
                <motion.span
                  key={'p' + i + paused}
                  className="absolute inset-y-0 left-0 bg-sprout"
                  initial={{ width: 0 }}
                  animate={{ width: paused || reduce ? '100%' : '100%' }}
                  transition={{ duration: paused ? 0 : INTERVAL / 1000, ease: 'linear' }}
                />
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
