import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { locations, site } from '../data/site';

export default function Locations() {
  const [i, setI] = useState(0);
  const l = locations[i];
  const q = encodeURIComponent(`${l.address}, ${l.city}`);
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
      <div className="grid gap-3">
        {locations.map((loc, n) => (
          <button
            key={loc.address}
            onClick={() => setI(n)}
            className={`group rounded-2xl border p-6 text-left backdrop-blur-xl transition-all duration-500 ${
              n === i ? 'border-sprout/70 bg-white/15 shadow-[0_25px_50px_-25px_rgba(0,0,0,.7)]' : 'border-white/15 bg-white/5 hover:bg-white/10'
            }`}
          >
            <p className="font-display text-xl text-cream">{loc.name}</p>
            <p className="mt-1 text-sm text-cream/70">{loc.address}, {loc.city}</p>
            <AnimatePresence initial={false}>
              {n === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={site.phoneHref} className="btn btn-primary">Call us</a>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noopener" className="btn btn-ghost">Directions</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
      <div className="min-h-[360px] overflow-hidden rounded-3xl border border-white/15 bg-ink/40 shadow-2xl lg:min-h-full">
        <iframe
          key={q}
          title={`Map of ${l.name}`}
          src={`https://www.google.com/maps?q=${q}&output=embed`}
          loading="lazy"
          className="h-full min-h-[360px] w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
