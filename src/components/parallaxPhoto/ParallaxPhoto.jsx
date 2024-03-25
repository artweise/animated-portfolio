import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './parallaxPhoto.scss';

const background = {
  translateY: [0, 50],
  opacity: [1, 0.3],
  scale: [1.05, 1, 'easeOutCubic'],
  shouldAlwaysCompleteAnimation: true,
};

const ParallaxPhoto = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className='parallaxPhoto' ref={ref}>
      <motion.h1 style={{ y: yText }}>Hello</motion.h1>
      <motion.div style={{ y: yBg }} layers={[background]} className='street'></motion.div>
    </div>
  );
};

export default ParallaxPhoto;
