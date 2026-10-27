import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';

// Slides the content slowly while the section scrolls past.
export default function Parallax({ children, amount = 60, zoom = 1.18, className }: { children: ReactNode; amount?: number; zoom?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);
  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y, scale: zoom }} className="h-full w-full">{children}</motion.div>
    </div>
  );
}
