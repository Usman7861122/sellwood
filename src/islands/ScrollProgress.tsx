import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: '0 50%' }}
      className="fixed left-0 right-0 top-0 z-[70] h-[3px] bg-gradient-to-r from-olive via-sprout to-maroon"
    />
  );
}
