import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./App.css";

function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (inView && !hasTriggered) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      setHasTriggered(true);
    } else if (!inView) {
      controls.start({ opacity: 0, y: 30 });
      setHasTriggered(false);
    }
  }, [inView, controls, hasTriggered]);

  return (
    <motion.footer
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 30 }}
      className="gradient-bg w-full flex flex-col h-screen sm:h-auto items-center justify-center py-16 px-6 text-white"
    >
      <div className="bg-white text-black rounded-2xl shadow-xl max-w-3xl w-full p-8 relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Let's stay in touch!
        </h2>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xldlynlr"
          method="POST"
          className="flex flex-col gap-6"
        >
          <label className="flex flex-col text-sm font-medium">
            Email:
            <input
              type="email"
              name="email"
              required
              className="mt-2 border-b border-gray-400 focus:border-yellow-400 focus:outline-none py-1"
            />
          </label>

          <label className="flex flex-col text-sm font-medium">
            Message:
            <textarea
              name="message"
              rows="1"
              required
              className="mt-2 border-b border-gray-400 focus:border-yellow-400 focus:outline-none py-1 resize-none"
            ></textarea>
          </label>

          <button
            type="submit"
            className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            Send
          </button>
        </form>
        <div className="mt-10 border-t pt-6">
  <h3 className="text-xl font-semibold mb-4 text-center">
    Useful Links
  </h3>
  <ul className="flex gap-8 justify-center">
  <li>
    <a
      href="mailto:ajlange42d@gmail.com"
      className="flex items-center justify-center w-12 h-12 transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2"
    >
      <SiGmail size={32} color="#EA4335" />
    </a>
  </li>
  <li>
    <a
      href="https://www.linkedin.com/in/andrew-lange-461678288/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2"
    >
      <FaLinkedin size={32} color="#0A66C2" />
    </a>
  </li>
  <li>
    <a
      href="https://www.mnglass.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2"
    >
      <FaGlobe size={32} color="#34A853" />
    </a>
  </li>
  <li>
    <a
      href="https://github.com/AndrewLange1"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2"
    >
      <FaGithub size={32} color="#181717" />
    </a>
  </li>
</ul>
</div>
      </div>  
  </motion.footer>
  );
}

export default Footer;
