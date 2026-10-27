import { motion, useInView, useReducedMotion, type TargetAndTransition } from 'motion/react';
import { useRef, type ReactNode } from 'react';

type Kind = 'up' | 'left' | 'right' | 'mask' | 'zoom';
interface Props { children: ReactNode; kind?: Kind; delay?: number; className?: string }

const from: Record<Kind, TargetAndTransition> = {
  up: { opacity: 0, y: 36 },
  left: { opacity: 0, x: -48 },
  right: { opacity: 0, x: 48 },
  zoom: { opacity: 0, scale: 0.92 },
  mask: { clipPath: 'inset(0 0 100% 0 round 24px)', scale: 1.06 },
};
const to: Record<Kind, TargetAndTransition> = {
  up: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  zoom: { opacity: 1, scale: 1 },
  // large negative inset so the soft shadow around the photo is never cut into a box
  mask: { clipPath: 'inset(-400px -400px -400px -400px round 24px)', scale: 1 },
};

// The outer div is the one we watch, so the browser can always "see" it,
// even while the inner element is hidden (opacity 0 or clipped).
export default function Reveal({ children, kind = 'up', delay = 0, className }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={from[kind]}
        animate={inView ? to[kind] : from[kind]}
        transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
