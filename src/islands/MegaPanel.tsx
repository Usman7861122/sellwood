import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { menu, type MenuLink, type MenuPanel } from '../data/menu';

const ease = [0.2, 0.8, 0.2, 1] as const;

function A({ l, className, children }: { l: MenuLink; className?: string; children: React.ReactNode }) {
  return <a href={l.href} className={className} {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}>{children}</a>;
}

function Row({ l }: { l: MenuLink }) {
  return (
    <A l={l} className="group/row flex items-start justify-between gap-4 border-b border-white/[.07] py-2 text-[.9rem] text-cream/85 transition-colors duration-300 hover:text-sprout">
      <span>
        {l.label}
        {l.meta && <span className="mt-0.5 block text-xs text-cream/45">{l.meta}</span>}
      </span>
      <span className="-translate-x-2 opacity-0 transition-all duration-300 group-hover/row:translate-x-0 group-hover/row:opacity-100">→</span>
    </A>
  );
}

function Content({ p }: { p: MenuPanel }) {
  return (
    <div className="flex items-stretch gap-8 p-7">
      {/* intro */}
      <motion.div className="w-[220px] shrink-0" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
        <p className="font-display text-2xl leading-tight text-cream">{p.intro.title}</p>
        <p className="mt-3 text-[.82rem] leading-relaxed text-cream/60">{p.intro.text}</p>
        {p.intro.cta && (
          <A l={p.intro.cta} className="btn btn-primary mt-5 !px-4 !py-2.5 !text-[.65rem]">{p.intro.cta.label} <span className="arrow">→</span></A>
        )}
      </motion.div>

      <span aria-hidden className="w-px shrink-0 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

      {/* link groups */}
      <div className="min-w-0">
        <div className="flex gap-x-10">
          {p.groups.map((g, gi) => (
            <motion.div key={gi} className={g.cols === 2 ? 'min-w-[470px]' : 'min-w-[270px]'} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 + gi * 0.05, ease }}>
              {g.title && (
                g.href
                  ? <a href={g.href} className="eyebrow mb-1 text-sprout transition-colors hover:text-white">{g.title}</a>
                  : <p className="eyebrow mb-1 text-sprout">{g.title}</p>
              )}
              <div className={g.cols === 2 ? 'grid gap-x-8 sm:grid-cols-2' : ''}>
                {g.links.map((l) => <Row key={l.label + l.href} l={l} />)}
              </div>
            </motion.div>
          ))}
        </div>
        {p.quick && (
          <motion.div className="mt-4 flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {p.quick.map((q) => (
              <a key={q.label} href={q.href} className="btn btn-ghost !px-3 !py-2 !text-[.6rem] !tracking-[.08em]">{q.label}</a>
            ))}
          </motion.div>
        )}
      </div>

      {/* image */}
      {p.image && p.groups.length === 1 && (
        <motion.div className="hidden w-[170px] shrink-0 overflow-hidden rounded-xl 2xl:block" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease }}>
          <img src={p.image.src} alt={p.image.alt} loading="lazy" className="h-full max-h-[260px] w-full object-cover transition-transform duration-[1500ms] hover:scale-105" />
        </motion.div>
      )}
    </div>
  );
}

// One shared panel. It stays open and morphs (height + content) when you move between menus.
export default function MegaPanel({ active }: { active: string | null }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);
  const prev = useRef<string | null>(null);
  const order = menu.map((m) => m.id);
  const dir = prev.current && active ? Math.sign(order.indexOf(active) - order.indexOf(prev.current)) || 1 : 1;
  useEffect(() => { if (active) prev.current = active; }, [active]);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setH(e.contentRect.height));
    ro.observe(el);
    return () => ro.disconnect();
  }, [active !== null]);

  const item = menu.find((m) => m.id === active);

  return (
    <AnimatePresence>
      {item?.panel && (
        <motion.div
          key="panel"
          id="mega-panel"
          role="region"
          aria-label={item.label}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: h || 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0, transition: { duration: 0.35, ease } }}
          transition={{ height: { type: 'spring', stiffness: 260, damping: 32 }, opacity: { duration: 0.25 } }}
          className="relative hidden overflow-hidden xl:block"
        >
          <div ref={innerRef} className="mx-auto flex max-w-[1400px] justify-center px-10 pb-4 pt-1">
           <div className="relative w-fit max-w-full overflow-hidden rounded-2xl border border-white/10 bg-ink/95 shadow-[0_30px_70px_-20px_rgba(0,0,0,.75)] backdrop-blur-2xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 40 * dir }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 * dir, transition: { duration: 0.16 } }}
                transition={{ duration: 0.35, ease }}
              >
                <Content p={item.panel} />
              </motion.div>
            </AnimatePresence>
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-olive via-sprout to-maroon" />
           </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
