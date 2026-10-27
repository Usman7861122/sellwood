import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export interface DayHours { day: string; open: number; close: number } // minutes from midnight; open=close=0 means closed
interface Props { hours: DayHours[]; timeZone?: string }

const NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const fmt = (m: number) => {
  const h = Math.floor(m / 60), mm = m % 60;
  const ap = h >= 12 ? 'pm' : 'am';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return mm ? `${h12}:${String(mm).padStart(2, '0')}${ap}` : `${h12}${ap}`;
};

// Returns the weekday index and minutes since midnight in the clinic's time zone.
function now(tz: string) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const day = NAMES.indexOf(get('weekday'));
  const h = Number(get('hour')) % 24;
  return { day, min: h * 60 + Number(get('minute')) };
}

export default function OpenHours({ hours, timeZone = 'America/Los_Angeles' }: Props) {
  const [t, setT] = useState<{ day: number; min: number } | null>(null);
  useEffect(() => {
    const tick = () => setT(now(timeZone));
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  const byDay = (i: number) => hours.find((h) => h.day === NAMES[i]);
  const today = t ? byDay(t.day) : undefined;
  const isOpen = !!(t && today && today.close > 0 && t.min >= today.open && t.min < today.close);

  let status = 'Check today’s hours';
  let sub = '';
  if (t) {
    if (isOpen && today) { status = 'Open now'; sub = `Closes at ${fmt(today.close)} today`; }
    else if (today && today.close > 0 && t.min < today.open) { status = 'Closed now'; sub = `Opens at ${fmt(today.open)} today`; }
    else {
      status = 'Closed now';
      for (let k = 1; k <= 7; k++) {
        const d = (t.day + k) % 7, h = byDay(d);
        if (h && h.close > 0) { sub = `Opens ${k === 1 ? 'tomorrow' : NAMES[d]} at ${fmt(h.open)}`; break; }
      }
    }
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="relative flex h-4 w-4">
          {isOpen && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sprout opacity-70" />}
          <span className={`relative inline-flex h-4 w-4 rounded-full ${t ? (isOpen ? 'bg-sprout' : 'bg-maroon') : 'bg-cream/40'}`} />
        </span>
        <div>
          <p className="font-display text-3xl text-cream md:text-4xl">{status}</p>
          {sub && <p className="mt-1 text-sm text-cream/70">{sub}</p>}
        </div>
      </div>

      <ul className="mt-8 divide-y divide-cream/15 border-y border-cream/15">
        {[1, 2, 3, 4, 5, 6, 0].map((i, n) => {
          const h = byDay(i);
          const isToday = t?.day === i;
          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -40px 0px' }}
              transition={{ delay: n * 0.05, duration: 0.5 }}
              className={`flex items-center justify-between px-4 py-4 transition-colors duration-300 ${isToday ? 'bg-sprout/20' : 'hover:bg-cream/5'}`}
            >
              <span className={`flex items-center gap-3 ${isToday ? 'font-semibold text-cream' : 'text-cream/80'}`}>
                {NAMES[i]}
                {isToday && <span className="rounded-md bg-sprout px-2 py-0.5 text-[.65rem] font-bold uppercase tracking-widest text-forest">Today</span>}
              </span>
              <span className={isToday ? 'font-semibold text-cream' : 'text-cream/75'}>
                {h && h.close > 0 ? `${fmt(h.open)} – ${fmt(h.close)}` : 'Closed'}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
