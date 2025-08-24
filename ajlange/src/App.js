import './App.css';
import Landing from './Landing.jsx';
import AboutMe from './AboutMe.js';
import Header from './Header.js';
import ProfessionalSkills from './ProfessionalSkills.js';
import WorkExperience from './WorkExperience.js';
import Footer from './Footer.js';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);
  const headerRef = useRef(null);

  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  // Detect when About Me section reaches top of viewport
  useEffect(() => {
    const handleScroll = () => {
      if (aboutMeRef.current) {
        const top = aboutMeRef.current.getBoundingClientRect().top;
        setIsHeaderSticky(top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRef = (ref, extraOffset = 0) => {
    if (ref.current) {
      const headerHeight = headerRef.current?.offsetHeight || 40;
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      const scrollTarget = elementTop - headerHeight + extraOffset;
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
  };

  const handleLetsGo = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="App bg-offwhite">
      {/* Landing Page */}
      <Landing onLetsGoClick={handleLetsGo} />

      {/* About Me Section */}
      <div ref={aboutMeRef} className="relative">
        {/* Sticky Header */}
        <div className={isHeaderSticky ? 'fixed top-0 left-0 w-full z-50' : ''}>
          <Header
            ref={headerRef}
            onAboutMeClick={() => scrollToRef(aboutMeRef, 0)}
            onWorkExperienceClick={() => scrollToRef(workRef, 0)}
            onProjectsClick={() => scrollToRef(projectsRef, 0)}
            onLinksClick={() => scrollToRef(footerRef, 0)}
          />
        </div>

        {/* Add padding so content is not hidden behind sticky header */}
        <div className="pt-[40px]">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ willChange: 'opacity, transform' }}
          >
            <AboutMe />

            <div ref={skillsRef}>
              <ProfessionalSkills />
            </div>

            <div ref={workRef}>
              <WorkExperience />
            </div>

            <div ref={projectsRef}>
              {/* Projects component */}
            </div>

            <div ref={footerRef}>
              <Footer />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
