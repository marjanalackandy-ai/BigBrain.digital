import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-8 h-8 rounded-full bg-[#4A6CF7] opacity-50 blur-xl"
          style={{
            boxShadow: '0 0 40px 20px rgba(74, 108, 247, 0.6)',
          }}
        />
      </motion.div>

      {/* Secondary glow - larger and more diffused */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-16 h-16 rounded-full bg-[#00FFA3] opacity-20 blur-3xl"
          style={{
            boxShadow: '0 0 60px 30px rgba(0, 255, 163, 0.3)',
          }}
        />
      </motion.div>
    </>
  );
}
