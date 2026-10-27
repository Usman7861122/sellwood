import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { menu, type MenuLink } from '../data/menu';
import { site } from '../data/site';

function Link({ l, onClose, small }: { l: MenuLink; onClose: () => void; small?: boolean }) {
  return (
    <a
      href={l.href}
      onClick={onClose}
      {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}
      className={`block py-2.5 text-cream/80 transition-colors hover:text-sprout ${small ? 'pl-4 text-sm' : ''}`}
    >
      {l.label}
    </a>
  );
}

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sec, setSec] = useState<string | null>(null);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink px-6 py-6 text-cream"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl">Sellwood Medical Clinic</span>
            <button onClick={onClose} aria-label="Close menu" className="grid h-12 w-12 place-items-center rounded-xl border border-white/30 text-2xl">×</button>
          </div>

          <nav className="mt-10 grid" aria-label="Mobile">
            {menu.map((m, i) => (
              <motion.div key={m.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.06, duration: 0.5 }} className="border-b border-white/10">
                {m.panel ? (
                  <>
                    <button onClick={() => setSec(sec === m.id ? null : m.id)} aria-expanded={sec === m.id} className="flex w-full items-center justify-between py-4 font-display text-3xl">
                      {m.label}
                      <span className={`text-2xl text-sprout transition-transform duration-300 ${sec === m.id ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {sec === m.id && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
                          <div className="pb-5">
                            {m.panel.groups.map((g, gi) => (
                              <div key={gi} className="mb-3">
                                {g.title && <p className="eyebrow mb-1 mt-3 text-sprout">{g.title}</p>}
                                {g.links.map((l) => <Link key={l.label + l.href} l={l} onClose={onClose} small />)}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a href={m.href} onClick={onClose} className="block py-4 font-display text-3xl">{m.label}</a>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="mt-auto grid gap-3 pt-10">
            <a href={site.phoneHref} className="btn btn-primary">Call {site.phone}</a>
            <a href={site.portalUrl} target="_blank" rel="noopener" className="btn btn-ghost">Patient Portal</a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
