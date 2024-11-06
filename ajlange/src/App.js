import './App.css';
import AboutMe from './AboutMe.js';
import Header from './Header.js';
import ProffesionalSkills from './ProfessionalSkills.js';
import WorkExperience from './WorkExperience.js';
import { useRef } from 'react';

function App() {
  const aboutMeRef = useRef(null); // Create a ref for the AboutMe section

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      const headerHeight = 40; // Adjust based on your header's actual height
      const topPosition = aboutMeRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
      console.log('Scrolling to position:', topPosition); // Log the position to debug
      window.scrollTo({ top: topPosition, behavior: 'smooth' }); // Smooth scroll to the AboutMe section
    }
  };

  return (
    <div className="App">
      <div className="flex flex-col">
        <Header onAboutMeClick={scrollToAboutMe} /> {/* Pass the scroll function to Header */}
        <div ref={aboutMeRef}> {/* Attach the ref to the AboutMe section */}
          <AboutMe />
        </div>
        <ProffesionalSkills/>
        {/*<WorkExperience/>*/}
      </div>
    </div>
  );
}

export default App;
