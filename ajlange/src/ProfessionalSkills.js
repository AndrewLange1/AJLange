import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './App.css';
import photo from './headshot.png';

import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiCss3,
  SiNodedotjs,
  SiReact,
  SiNumpy,
  SiJupyter,
  SiJira,
} from 'react-icons/si';
import { FaJava, FaMicrosoft } from 'react-icons/fa';
import { MdShowChart } from 'react-icons/md';
import { ArrowLeft } from 'lucide-react';

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLarge;
}

function ProfessionalSkills({ triggeredFromAboutMe }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();
  const [hasTriggered, setHasTriggered] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [altView, setAltView] = useState(false);

  const isLarge = useIsLargeScreen();

  useEffect(() => {
    if (isInView) {
      if (triggeredFromAboutMe && !hasTriggered) {
        setTimeout(() => {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
          });
        }, 200);
        setHasTriggered(true);
      } else {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut' },
        });
      }
    } else {
      controls.start({ opacity: 0, y: 20 });
      setHasTriggered(false);
    }
  }, [isInView, controls, triggeredFromAboutMe, hasTriggered]);

  const skills = [
    { name: 'Python', icon: <SiPython size={32} color="#306998" /> },
    { name: 'Java', icon: <FaJava size={32} color="#007396" /> },
    { name: 'C/C++', icon: <SiCplusplus size={32} color="#00599C" /> },
    { name: 'Javascript', icon: <SiJavascript size={32} color="#F7DF1E" /> },
    { name: 'CSS', icon: <SiCss3 size={32} color="#1572B6" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={32} color="#339933" /> },
    { name: 'React', icon: <SiReact size={32} color="#61DAFB" /> },
    { name: 'Web Hosting', icon: <SiNodedotjs size={32} color="#339933" /> },
    { name: 'NumPy', icon: <SiNumpy size={32} color="#013243" /> },
    { name: 'Matplotlib', icon: <MdShowChart size={32} color="#11557C" /> },
    { name: 'Jupyter', icon: <SiJupyter size={32} color="#F37626" /> },
    { name: 'Jira', icon: <SiJira size={32} color="#0052CC" /> },
    { name: 'Microsoft Office', icon: <FaMicrosoft size={32} color="#F25022" /> },
  ];

  const skillDescriptions = {
    Python: 'High-level language widely used in software development and data science.',
    Java: 'Versatile, object-oriented language used for web, mobile, and enterprise apps.',
    'C/C++': 'Powerful languages for systems programming, game dev, and high performance.',
    Javascript: 'Scripting language used to create interactive effects in web browsers.',
    CSS: 'Style sheet language for describing presentation of documents in HTML.',
    'Node.js': "JavaScript runtime on Chrome's V8 engine for scalable applications.",
    React: 'Libraries for building user interfaces, web apps, and mobile apps.',
    'Web Hosting': 'Managing storage and delivery of website content online.',
    NumPy: 'Python library used for scientific computing and n-dimensional arrays.',
    Matplotlib: 'Plotting library for Python producing publication-quality figures.',
    Jupyter: 'Open-source app to create and share documents with live code.',
    Jira: 'Popular tool for agile project management and tracking issues.',
    'Microsoft Office': 'Suite of office applications for productivity and management.',
  };  

  const circleSize = isLarge ? 450 : 420;
  const bubbleDiameter = isLarge ? 275 : 240;
  const center = circleSize / 2;
  const orbitRadius = circleSize / 2 - 40;
  const iconSize = 56;
  const iconR = iconSize / 2;

  const honeycombLarge = [4, 5, 4];
  const honeycombSmall = [3, 2, 3, 2, 3];

  const chunkSkills = (layout) => {
    let rows = [];
    let i = 0;
    layout.forEach((count, rowIndex) => {
      rows.push(skills.slice(i, i + count));
      i += count;
    });
    return rows;
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      className="font-montserrat mt-[20px] flex flex-col lg:flex-row gap-20 bg-offwhite justify-center items-center"
      style={{ minHeight: circleSize }}
    >
      {!altView ? (
        <motion.div
          className="relative flex items-center justify-center"
          style={{ width: circleSize, height: circleSize }}
        >
          <div
            className="absolute rounded-full bg-offwhite border-2 border-sage shadow-lg flex flex-col items-center justify-center text-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-sage/60"
            style={{
              width: bubbleDiameter,
              height: bubbleDiameter,
              left: center - bubbleDiameter / 2,
              top: center - bubbleDiameter / 2,
              zIndex: 10,
            }}
          >
            {selectedSkill ? (
              <>
                <div className="text-6xl lg:text-5xl mb-4">
                  {skills.find((s) => s.name === selectedSkill)?.icon}
                </div>
                <h3 className="font-bold text-xl lg:text-lg mb-2">{selectedSkill}</h3>
                <p className="text-[13px] lg:text-[16px] text-gray-700 leading-relaxed px-4 mb-4">
                  {skillDescriptions[selectedSkill]}
                </p>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="flex items-center gap-1 text-sm lg:text-xs text-gray-600 hover:text-gray-800"
                >
                  <ArrowLeft size={16} /> Back
                </button>
              </>
            ) : (
              <>
                <p className="text-gray-500 mb-3 text-[16px] lg:text-[16px]">
                  Click a skill to learn more!
                </p>
                <button
                  onClick={() => setAltView(true)}
                  className="mt-2 px-3 py-1 rounded border border-sage text-sage text-[16px] lg:text-[16px] hover:bg-sage/15 hover:shadow-md transition"
                >
                  Try Alternative View
                </button>
              </>
            )}
          </div>

          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {skills.map(({ name, icon }, i) => {
              const angle = (i / skills.length) * 2 * Math.PI - Math.PI / 2;
              const x = center + orbitRadius * Math.cos(angle) - iconR;
              const y = center + orbitRadius * Math.sin(angle) - iconR;

              return (
                <motion.div
                  key={name}
                  className="absolute flex items-center justify-center rounded-full bg-offwhite shadow-md cursor-pointer"
                  style={{
                    left: x,
                    top: y,
                    width: iconSize,
                    height: iconSize,
                  }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedSkill(name)}
                >
                  {icon}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="mb-6 text-lg lg:text-base font-semibold">My Skills</h2>

          <div className="block lg:hidden">
            <div className="honeycomb-grid">
              {chunkSkills(honeycombSmall).map((row, rowIndex) => (
                <div key={rowIndex} className="honeycomb-row">
                  {row.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="honeycomb-button"
                      onClick={() => setSelectedSkill(name)}
                    >
                      <div className="honeycomb-shape">
                        <div className="honeycomb-inner">
                          <div className="text-2xl lg:text-xl mb-1">{icon}</div>
                          <p className="text-xs lg:text-[0.65rem]">{name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="honeycomb-grid">
              {chunkSkills(honeycombLarge).map((row, rowIndex) => (
                <div key={rowIndex} className="honeycomb-row">
                  {row.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="honeycomb-button"
                      onClick={() => setSelectedSkill(name)}
                    >
                      <div className="honeycomb-shape">
                        <div className="honeycomb-inner">
                          <div className="text-2xl lg:text-xl mb-1">{icon}</div>
                          <p className="text-xs lg:text-[0.65rem]">{name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setAltView(false)}
            className="mt-[50px] px-3 py-1 rounded border border-black text-black text-sm lg:text-xs hover:bg-gray-200 hover:shadow-md transition"
          >
            Back to Orbit View
          </button>
        </div>
      )}

      <div className="hidden lg:flex flex-col items-center justify-center">
        <img
          src={photo}
          alt="headshot"
          className="rounded-full shadow-lg"
          style={{ width: circleSize, height: circleSize }}
        />
      </div>

      <style>{`
        .honeycomb-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .honeycomb-row {
          display: flex;
          gap: 0px;
        }
        .honeycomb-button {
          width: 120px;
          height: 104px;
          position: relative;
          cursor: pointer;
        }
        .honeycomb-shape {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .honeycomb-inner {
          width: 100%;
          height: 100%;
          background: #F2F0EF; /* offwhite instead of white */
          clip-path: polygon(
            50% 0%,
            93% 25%,
            93% 75%,
            50% 100%,
            7% 75%,
            7% 25%
          );
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 4px;
          padding-bottom: 2px;
          box-sizing: border-box;
        }
        .honeycomb-inner p.long-text {
          font-size: 0.55rem;
          line-height: 0.9rem;
        }
        .honeycomb-shape::before {
          content: "";
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          background: #71AD56;
          clip-path: polygon(
            50% 0%,
            93% 25%,
            93% 75%,
            50% 100%,
            7% 75%,
            7% 25%
          );
          z-index: 1;
        }
        .honeycomb-shape:hover .honeycomb-inner {
          background: #f6f4f3; /* slightly lighter offwhite for hover */
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  );
}

export default ProfessionalSkills;
