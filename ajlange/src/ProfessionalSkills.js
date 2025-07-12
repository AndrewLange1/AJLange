import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './App.css';
import photo from './headshot.png';

function ProfessionalSkills({ triggeredFromAboutMe }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (isInView) {
      if (triggeredFromAboutMe && !hasTriggered) {
        // Add a 0.2s delay before starting animation the first time triggered by AboutMe
        setTimeout(() => {
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } });
        }, 200);
        setHasTriggered(true);
      } else {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } });
      }
    } else {
      controls.start({ opacity: 0, y: 20 });
      setHasTriggered(false);
    }
  }, [isInView, controls, triggeredFromAboutMe, hasTriggered]);

  const skills = [
    "Python",
    "Java",
    "C/C++",
    "Javascript",
    "CSS",
    "Node.js",
    "React/React Native",
    "Web Hosting",
    "NumPy",
    "Matplotlib",
    "Jupyter",
    "Jira",
    "Microsoft Office Suite"
  ];

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      className="font-montserrat mt-[20px] flex flex-row flex-col-1800 bg-white"
    >
      <div className="ml-[20vw] md:w-[300px] w-[39.9vw] max-w-[300px] min-w-[300px] text-green-800 md:text-[33px] text-[25px] remove-margin-1800 overflow-hidden professional-centered">
        Professional Skills
        <div className="flex flex-col text-center justify-center mt-[10px] md:text-[20px] text-[17px] text-black">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={controls}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <img
          src={photo}
          className="w-[400px] h-[400px] mt-[20px] rounded-full remove-margin-1800 photo-small"
          alt="headshot"
        />
      </div>
    </motion.div>
  );
}

export default ProfessionalSkills;
