import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

function Bubble({ bubble }) {
  return (
    <motion.div
      initial={{ opacity: 0.4, scale: 1 }}
      animate={{ opacity: 0.4, scale: [1, 1.1, 1] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        left: bubble.x,
        top: bubble.y,
        width: bubble.size,
        height: bubble.size,
        borderRadius: '50%',
        background:
          'radial-gradient(circle at 30% 30%, rgba(132, 204, 22, 0.9), rgba(21, 128, 61, 0.8))',
        boxShadow:
          '0 0 100px rgba(34, 197, 94, 0.5), 0 0 200px rgba(132, 204, 22, 0.4)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

const pulseVariants = {
  initial: { scale: 0.5, opacity: 0.6 },
  animate: {
    scale: 3,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

function fastSmoothScroll(targetY, duration = 150) {
  const startY = window.scrollY || window.pageYOffset;
  const difference = targetY - startY;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + difference * progress);
    if (elapsed < duration) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

function LandingPage({ onLetsGoClick }) {
  const [bubbles, setBubbles] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [shake, setShake] = useState(false);
  const controls = useAnimation();

  const [buttonSizes, setButtonSizes] = useState({
    rectWidth: 0,
    rectHeight: 0,
    circleSize: 0,
  });

  const relativeBubbles = [
    { id: 1, sizeRatio: 0.3, xRatio: 0.05, yRatio: 0.05 },
    { id: 2, sizeRatio: 0.35, xRatio: 0.6, yRatio: 0.1 },
    { id: 3, sizeRatio: 0.25, xRatio: 0.1, yRatio: 0.7 },
    { id: 4, sizeRatio: 0.4, xRatio: 0.55, yRatio: 0.6 },
    { id: 5, sizeRatio: 0.3, xRatio: 0.3, yRatio: 0.4 },
  ];

  const recalculateBubbles = () => {
    setBubbles(
      relativeBubbles.map(b => ({
        ...b,
        size: window.innerWidth * b.sizeRatio,
        x: window.innerWidth * b.xRatio,
        y: window.innerHeight * b.yRatio,
      }))
    );
  };

  const calculateButtonSizes = () => {
    const screenWidth = window.innerWidth;
    setButtonSizes({
      rectWidth: Math.min(screenWidth * 0.4, 500),
      rectHeight: Math.min(screenWidth * 0.15, 250),
      circleSize: Math.min(screenWidth * 0.3, 300),
    });
  };

  useEffect(() => {
    recalculateBubbles();
    calculateButtonSizes();
    window.addEventListener('resize', recalculateBubbles);
    window.addEventListener('resize', calculateButtonSizes);
    return () => {
      window.removeEventListener('resize', recalculateBubbles);
      window.removeEventListener('resize', calculateButtonSizes);
    };
  }, []);

  useEffect(() => {
    if (hovered && !isClicked) {
      controls.start({
        y: [0, -15, 0],
        transition: { repeat: Infinity, repeatType: 'loop', duration: 1.5, ease: 'easeInOut' },
      });
    } else if (!isClicked) {
      controls.stop();
      controls.set({ y: 0, scale: 1, opacity: 1 });
    }
  }, [hovered, isClicked, controls]);

  const handleClick = async () => {
    if (isClicked) return;
    setIsClicked(true);
    setShake(true);
    controls.stop();
  
    await controls.start({
      scale: [1, 1.8, 1.5, 1.9, 1.6, 2, 2.2],
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, times: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1], ease: 'easeOut' },
    });
  
    setShake(false);
  
    await controls.start({ scale: 2.5, opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } });
  
    if (onLetsGoClick) onLetsGoClick();
  
    setTimeout(() => {
      controls.set({ scale: 1, opacity: 1, y: 0 });
      setIsClicked(false);
      setHovered(false);
    }, 500);
  };
  

  return (
    <motion.div
      className={`relative min-h-screen flex flex-col items-center justify-center font-montserrat overflow-hidden bg-white px-4 ${shake ? 'shake' : ''}`}
      style={{ willChange: shake ? 'transform' : undefined }}
      animate={shake ? { x: [0, -10, 10, -10, 10, 0], y: [0, -5, 5, -5, 5, 0], rotate: [0, -2, 2, -2, 2, 0] } : { x: 0, y: 0, rotate: 0 }}
      transition={shake ? { duration: 0.4, ease: 'easeInOut' } : { duration: 0 }}
    >
      {bubbles.map(bubble => <Bubble key={bubble.id} bubble={bubble} />)}

      <motion.div className="relative z-10 max-w-screen-md mx-auto flex flex-col items-center">
        <h1 className="text-green-800 mb-8 font-light" style={{ fontSize: '8vw', whiteSpace: 'nowrap', textAlign: 'center' }}>
          Hi! I'm AJ Lange
        </h1>

        <motion.div
          className="relative"
          style={{
            width: hovered ? buttonSizes.circleSize : buttonSizes.rectWidth,
            height: hovered ? buttonSizes.circleSize : buttonSizes.rectHeight,
            margin: 'auto',
            transition: 'width 0.4s ease, height 0.4s ease, border-radius 0.4s ease',
          }}
        >
          <AnimatePresence>
            {isClicked &&
              [0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: hovered ? buttonSizes.circleSize : buttonSizes.rectWidth,
                    height: hovered ? buttonSizes.circleSize : buttonSizes.rectHeight,
                    borderRadius: '50%',
                    border: '3px solid #166534',
                    pointerEvents: 'none',
                    transformOrigin: 'center',
                    marginTop: `-${hovered ? buttonSizes.circleSize / 2 : buttonSizes.rectHeight / 2}px`,
                    marginLeft: `-${hovered ? buttonSizes.circleSize / 2 : buttonSizes.rectWidth / 2}px`,
                    opacity: 0,
                    zIndex: 1,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
          </AnimatePresence>

          <motion.button
            onClick={handleClick}
            onMouseEnter={() => !isClicked && setHovered(true)}
            onMouseLeave={() => !isClicked && setHovered(false)}
            animate={controls}
            initial={{ scale: 1, opacity: 1, y: 0 }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: hovered ? '50%' : '0.75rem',
              backgroundColor: hovered ? '#166534' : 'transparent',
              color: hovered ? 'white' : '#166534',
              borderColor: '#166534',
              boxShadow: hovered ? '0 8px 24px rgba(22, 101, 52, 0.6)' : '0 2px 8px rgba(34, 197, 94, 0.3)',
              borderWidth: 2,
              borderStyle: 'solid',
              cursor: 'pointer',
              fontWeight: '300',
              fontSize: '5vw',
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
              transition: 'background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease, border-radius 0.4s ease',
            }}
            className="select-none"
          >
            {!hovered && !isClicked && <span style={{ pointerEvents: 'none' }} className="text-green-900">Wanna see my Page?</span>}
            {hovered && !isClicked && (
              <motion.div key="circle-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex flex-col items-center justify-center pointer-events-none">
                <span style={{ fontWeight: 600, fontSize: '1.25rem' }} onClick={onLetsGoClick}>Let&apos;s go!</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mt-2" viewBox="0 0 24 24" style={{ pointerEvents: 'none' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </motion.div>
            )}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default LandingPage;
