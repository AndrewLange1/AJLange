import './App.css';
import AboutMe from './AboutMe.js';
import Header from './Header.js';
import ProfessionalSkills from './ProfessionalSkills.js';
import WorkExperience from './WorkExperience.js';
import Projects from './Projects.js';
import Footer from './Footer.js';
import { useRef } from 'react';

function App() {
  const aboutMeRef = useRef(null);
  const workExperienceRef = useRef(null);
  const projectsRef = useRef(null);
  const linksRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const headerHeight = 40;
      const extraOffset = 50;
      const topPosition = ref.current.getBoundingClientRect().top + window.scrollY - headerHeight + extraOffset;

      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="App bg-white">
      <div className="flex flex-col">
        <Header 
          onAboutMeClick={() => scrollToSection(aboutMeRef)}
          onWorkExperienceClick={() => scrollToSection(workExperienceRef)}
          onProjectsClick={() => scrollToSection(projectsRef)}
          onLinksClick={() => scrollToSection(linksRef)}
        />
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <ProfessionalSkills />
        <div ref={workExperienceRef}>
          <WorkExperience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={linksRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
