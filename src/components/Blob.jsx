import { motion } from 'framer-motion';

const Blob = ({ size = 'w-64 h-64', position = 'absolute', className = '', delay = 0, initialX = 0, initialY = 0 }) => {
  return (
    <motion.div
      className={`${position} ${size} bg-primary/30 rounded-full blur-[120px] pointer-events-none ${className}`}
      style={{
        willChange: 'transform',
      }}
      initial={{ 
        x: initialX, 
        y: initialY, 
        scale: 1 
      }}
      animate={{
        x: [initialX, initialX + 60, initialX - 40, initialX],
        y: [initialY, initialY + 50, initialY - 30, initialY],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
        repeatType: 'loop',
      }}
    />
  );
};

export default Blob;

