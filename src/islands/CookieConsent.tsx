import { useEffect, useState } from 'react';

type Prefs = { analytics: boolean; marketing: boolean };
const KEY = 'sellwood-cookie-consent';

const save = (p: Prefs) => {
  try { localStorage.setItem(KEY, JSON.stringify({ ...p, necessary: true, at: Date.now() })); } catch {}
  document.cookie = `${KEY}=${p.analytics ? 'a' : ''}${p.marketing ? 'm' : ''}n; max-age=15552000; path=/; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent('cookie-consent', { detail: p }));
};

function Toggle({ on, onChange, locked, label }: { on: boolean; onChange?: (v: boolean) => void; locked?: boolean; label: string }) {
  return (
    <button type="button" role="switch" aria-checked={on} aria-label={label} disabled={locked} onClick={() => onChange?.(!on)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${on ? 'bg-olive' : 'bg-forest/25'} ${locked ? 'opacity-60' : ''}`}>
      <span className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${on ? 'translate-x-5' : ''}`} />
    </button>
  );
}

const rows: { key: 'necessary' | keyof Prefs; title: string; text: string }[] = [
  { key: 'necessary', title: 'Necessary', text: 'Keep the site working, like remembering this choice. Always on.' },
  { key: 'analytics', title: 'Analytics', text: 'Help us see how the site is used so we can make it better.' },
  { key: 'marketing', title: 'Marketing', text: 'Used for ads and to measure how well they work.' },
];

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [custom, setCustom] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ analytics: false, marketing: false });

  useEffect(() => {
    let saved = false;
    try {
      const v = localStorage.getItem(KEY);
      if (v) { const j = JSON.parse(v); setPrefs({ analytics: !!j.analytics, marketing: !!j.marketing }); saved = true; }
    } catch {}
    if (!saved) setShow(true);
    const open = () => { setCustom(true); setShow(true); };
    window.addEventListener('open-cookie-settings', open);
    return () => window.removeEventListener('open-cookie-settings', open);
  }, []);

  const done = (p: Prefs) => { save(p); setPrefs(p); setShow(false); setCustom(false); };
  if (!show) return null;

  return (
    <div role="dialog" aria-label="Cookie preferences" aria-live="polite"
      className="fixed inset-x-3 bottom-16 z-[60] md:inset-x-auto md:bottom-5 md:left-5 md:w-[420px]">
      <div className="rounded-2xl border border-forest/10 bg-cream/95 p-5 text-ink shadow-[0_30px_70px_-25px_rgba(17,23,10,.6)] backdrop-blur-xl">
        <p className="font-display text-xl text-forest">{custom ? 'Cookie settings' : 'We use cookies'}</p>
        {!custom ? (
          <>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">We use a few cookies to keep the site working and, with your OK, to understand how it is used. You choose. <a href="/privacy-policy/" className="text-forest underline underline-offset-2">Privacy Policy</a></p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <button type="button" className="btn btn-sm !px-2 !tracking-[.06em] btn-dark" onClick={() => done({ analytics: true, marketing: true })}>Accept all</button>
              <button type="button" className="btn btn-sm !px-2 !tracking-[.06em] btn-line" onClick={() => done({ analytics: false, marketing: false })}>Reject</button>
              <button type="button" className="btn btn-sm !px-2 !tracking-[.06em] btn-line" onClick={() => setCustom(true)}>Customize</button>
            </div>
          </>
        ) : (
          <>
            <ul className="mt-3 divide-y divide-forest/10">
              {rows.map((r) => (
                <li key={r.key} className="flex items-start justify-between gap-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-forest">{r.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink/65">{r.text}</p>
                  </div>
                  {r.key === 'necessary'
                    ? <Toggle on locked label="Necessary cookies" />
                    : <Toggle on={prefs[r.key]} onChange={(v) => setPrefs({ ...prefs, [r.key]: v })} label={`${r.title} cookies`} />}
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <button type="button" className="btn btn-sm !px-2 !tracking-[.06em] btn-dark" onClick={() => done(prefs)}>Save choices</button>
              <button type="button" className="btn btn-sm !px-2 !tracking-[.06em] btn-line" onClick={() => done({ analytics: true, marketing: true })}>Accept all</button>
              <button type="button" className="btn btn-sm !px-2 !tracking-[.06em] btn-line" onClick={() => (localStorage.getItem(KEY) ? setShow(false) : setCustom(false))}>Back</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
