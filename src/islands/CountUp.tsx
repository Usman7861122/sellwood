import { animate, useInView, useMotionValue, useTransform, motion } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const v = useMotionValue(0);
  const rounded = useTransform(v, (n) => Math.round(n).toString());
  useEffect(() => {
    if (inView) animate(v, to, { duration: 2.2, ease: [0.2, 0.8, 0.2, 1] });
  }, [inView, to, v]);
  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}
