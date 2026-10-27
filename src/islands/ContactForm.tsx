import { useState, type FormEvent } from 'react';
import { site } from '../data/site';

const field =
  'w-full rounded-xl border border-forest/20 bg-white/70 px-4 py-3.5 text-ink outline-none backdrop-blur transition-all duration-300 placeholder:text-ink/40 focus:border-olive focus:bg-white focus:shadow-[0_0_0_4px_rgba(107,127,51,.15)]';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error' | 'off'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!site.contactApi) { setStatus('off'); return; }
    setStatus('sending');
    try {
      const res = await fetch(site.contactApi, { method: 'POST', body: new FormData(e.currentTarget) });
      setStatus(res.ok ? 'sent' : 'error');
    } catch { setStatus('error'); }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-forest">Name<input name="name" required autoComplete="name" className={field} placeholder="Your full name" /></label>
        <label className="grid gap-2 text-sm font-medium text-forest">Phone<input name="phone" type="tel" autoComplete="tel" className={field} placeholder="(503) 000-0000" /></label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-forest">Email<input name="email" type="email" required autoComplete="email" className={field} placeholder="you@email.com" /></label>
      <label className="grid gap-2 text-sm font-medium text-forest">Message<textarea name="message" rows={5} required className={field} placeholder="How can we help?" /></label>
      <p className="text-xs text-ink/55">Please do not send urgent or private medical details here. For emergencies, call 911.</p>
      <button type="submit" disabled={status === 'sending'} className="btn btn-dark justify-self-start">
        {status === 'sending' ? 'Sending…' : 'Send message'} <span className="arrow">→</span>
      </button>
      <p role="status" className="min-h-6 text-sm text-olive">
        {status === 'sent' && 'Thank you. We will contact you soon.'}
        {status === 'error' && 'Something went wrong. Please call us instead.'}
        {status === 'off' && 'This form is not connected yet. Please call us.'}
      </p>
    </form>
  );
}
