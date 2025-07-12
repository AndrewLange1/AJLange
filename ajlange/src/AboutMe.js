import { motion } from 'framer-motion';
import './App.css';

function AboutMe() {
  const linesSmall = [
    "Hey! I'm Andrew Lange, a Computer Science",
    "major at the University of Minnesota.",
    "I plan on pursuing software engineering with",
    "an interest in machine learning. I also",
    "enjoy creating interactive web applications.",
    "This past summer I interned at Trustworthy",
    "Glass as a web developer. Outside of classes",
    "I am most likely working on projects at Social",
    "Coding, a campus club, or conducting",
    "research on campus."
  ];

  const linesLarge = [
    "Hey! I'm Andrew Lange, a Computer Science major at the University of Minnesota",
    "I plan on pursuing software engineering, with an interest in",
    "machine learning. I also enjoy creating interactive web applications.",
    "This past summer I interned at Trustworthy Glass as a web",
    "developer. Outside of classes I am most likely working on projects at Social",
    "Coding, a campus club or conducting research on campus."
  ];

  return (
    <div id="about-me" className="font-montserrat relative overflow-hidden">
      {/* Static title */}
      <div className="custom:text-[40px] text-[6vw] max-text-[40px] text-green-800 text-center mt-[30px] select-none">
        WHO AM I?
      </div>

      {/* Floating container only for paragraph text */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-[20px]"
      >
        {/* Small screen text */}
        <div className="custom:hidden text-[17px] text-black text-center space-y-1">
          {linesSmall.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Large screen text */}
        <div className="custom:block hidden text-[17px] custom:text-[20px] text-black text-center space-y-1">
          {linesLarge.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {line}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animated divider outside the floating container so it stays still */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '90%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-[30px] h-[1px] mx-auto bg-black"
      />
    </div>
  );
}

export default AboutMe;
