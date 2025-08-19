import './App.css';
import Landing from './Landing.jsx';
import AboutMe from './AboutMe.js';
import Header from './Header.js';
import ProfessionalSkills from './ProfessionalSkills.js';
import WorkExperience from './WorkExperience.js';
import Footer from './Footer.js';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [contentVisible, setContentVisible] = useState(false);
  const [sticky, setSticky] = useState(false);

  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const headerTop = header.getBoundingClientRect().top + window.scrollY;

    function handleScroll() {
      if (window.scrollY > headerTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRef = (ref, extraOffset = 0) => {
    if (ref.current) {
      const headerHeight = 40;
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      const scrollTarget = elementTop - headerHeight + extraOffset;

      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
  };

  const handleLetsGo = () => {
    const scrollTarget = window.innerHeight;
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });

    setContentVisible(false);
    setTimeout(() => setContentVisible(true), 100);
  };

  return (
    <div className="App bg-white">
      <Landing onLetsGoClick={handleLetsGo} />

      {/* Header with sticky toggled by JS */}
      <div
        ref={headerRef}
        className={`bg-white border-b border-black font-montserrat text-[20px] ${
          sticky
            ? 'fixed top-0 left-0 right-0 z-50 shadow-md'
            : 'relative'
        }`}
        style={{ height: 40 }}
      >
        <Header
          onAboutMeClick={() => scrollToRef(aboutMeRef, 20)}
          onWorkExperienceClick={() => scrollToRef(workRef, 70)}
          onProjectsClick={() => scrollToRef(projectsRef, 50)}
          onLinksClick={() => scrollToRef(footerRef)}
        />
      </div>

      {/* Add top padding/margin equal to header height to prevent content jump */}
      <div style={{ paddingTop: sticky ? 40 : 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95, visibility: 'hidden' }}
          animate={
            contentVisible
              ? { opacity: 1, y: 0, scale: 1, visibility: 'visible' }
              : { opacity: 0, y: 40, scale: 0.95, visibility: 'hidden' }
          }
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ willChange: 'opacity, transform' }}
        >
          <div ref={aboutMeRef}>
            <AboutMe />
          </div>

          <div ref={skillsRef}>
            <ProfessionalSkills />
          </div>

          <div ref={workRef} >
            <WorkExperience />
          </div>

          <div ref={footerRef}>
            <Footer />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
