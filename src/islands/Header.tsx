import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { menu } from '../data/menu';
import { site } from '../data/site';
import MegaPanel from './MegaPanel';
import MobileMenu from './MobileMenu';

const quick = [
  { label: 'Same Day Visit', href: '/services/same-day-visit/', cls: 'bg-maroon text-cream' },
  { label: 'Pediatric Appointments', href: `${site.old}/pediatric-appointments/`, cls: 'bg-sprout text-ink' },
  { label: 'Adult Medicine Appointments', href: `${site.old}/adult-medicine/`, cls: 'bg-cream text-forest' },
  { label: 'Book Flu/Covid Vaccine', href: `${site.old}/book-flu-shoot/`, cls: 'bg-olive text-cream' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const openT = useRef<number>(0);
  const closeT = useRef<number>(0);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => { document.body.style.overflow = mobile ? 'hidden' : ''; }, [mobile]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);

  // Hover intent: small delay to open, slightly longer to close, so the menu never flickers.
  const enter = useCallback((id: string) => {
    window.clearTimeout(closeT.current);
    window.clearTimeout(openT.current);
    openT.current = window.setTimeout(() => setActive(id), active ? 0 : 90);
  }, [active]);
  const leave = useCallback(() => {
    window.clearTimeout(openT.current);
    window.clearTimeout(closeT.current);
    closeT.current = window.setTimeout(() => setActive(null), 160);
  }, []);
  const keepOpen = () => window.clearTimeout(closeT.current);

  const open = active !== null;
  const solid = scrolled || open;

  return (
    <>
      {/* soft dim behind the open menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none fixed inset-0 z-40 hidden bg-ink/45 backdrop-blur-[3px] xl:block"
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
        onMouseLeave={leave}
        onMouseEnter={keepOpen}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) leave(); }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,padding,box-shadow] duration-500 ${
          solid ? 'bg-ink/90 backdrop-blur-xl' : 'bg-gradient-to-b from-ink/70 via-ink/25 to-transparent'
        } ${scrolled && !open ? 'shadow-[0_10px_40px_-20px_rgba(0,0,0,.6)]' : ''}`}
      >
        {/* Always-visible quick actions (same buttons as the old site) */}
        <div className="border-b border-white/10 bg-ink/70 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1400px] items-center gap-2 overflow-x-auto px-5 py-2 [scrollbar-width:none] md:justify-end md:px-10 [&::-webkit-scrollbar]:hidden">
            {quick.map((q) => (
              <a
                key={q.label}
                href={q.href}
                className={`group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3.5 py-2 text-[.68rem] font-semibold uppercase tracking-[.12em] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(0,0,0,.8)] ${q.cls}`}
              >
                {q.label}
                <span className="-ml-1 w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:w-3 group-hover:opacity-100">→</span>
              </a>
            ))}
            <a href={site.phoneHref} className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-cream/40 px-3.5 py-2 text-[.68rem] font-semibold uppercase tracking-[.12em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-sprout hover:text-sprout">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>
              {site.phone}
            </a>
          </div>
        </div>
        <div className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-[padding] duration-500 md:px-10 ${solid ? 'py-2' : 'py-3 md:py-4'}`}>
          <a href="/" aria-label="Sellwood Medical Clinic home" className="block transition-transform duration-500 hover:scale-[1.03]">
            <img
              src="/images/logo.png"
              alt="Sellwood Medical Clinic"
              className={`w-auto drop-shadow-[0_4px_16px_rgba(0,0,0,.45)] transition-all duration-500 ${solid ? 'h-16 md:h-20' : 'h-20 md:h-32'}`}
            />
          </a>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {menu.map((m) => {
              const isActive = active === m.id;
              const cls = `group relative flex items-center gap-1.5 px-3.5 py-3 text-[.9rem] font-medium uppercase tracking-[.16em] transition-colors duration-300 ${isActive ? 'text-sprout' : 'text-white/85 hover:text-sprout'}`;
              const line = <span className={`absolute inset-x-3.5 bottom-1.5 h-px origin-left bg-sprout transition-transform duration-500 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />;
              return m.panel ? (
                <button
                  key={m.id}
                  type="button"
                  aria-expanded={isActive}
                  aria-controls="mega-panel"
                  onMouseEnter={() => enter(m.id)}
                  onFocus={() => enter(m.id)}
                  onClick={() => (isActive && m.href ? (window.location.href = m.href) : setActive(isActive ? null : m.id))}
                  className={cls}
                >
                  {m.label}
                  <svg width="9" height="9" viewBox="0 0 10 10" className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} aria-hidden><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
                  {line}
                </button>
              ) : (
                <a key={m.id} href={m.href} onMouseEnter={() => enter('__none')} className={cls}>{m.label}{line}</a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            
            <a href={site.portalUrl} target="_blank" rel="noopener" className="btn btn-primary hidden sm:inline-flex">Patient Portal</a>
            <button
              onClick={() => setMobile(true)}
              aria-label="Open menu"
              className="grid h-12 w-12 place-items-center rounded-xl border border-white/30 text-white backdrop-blur xl:hidden"
            >
              <span className="grid gap-1.5"><i className="block h-px w-6 bg-white" /><i className="block h-px w-4 bg-white" /></span>
            </button>
          </div>
        </div>

        <MegaPanel active={active} />
      </motion.header>

      <MobileMenu open={mobile} onClose={() => setMobile(false)} />
    </>
  );
}
