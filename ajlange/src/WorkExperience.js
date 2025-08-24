import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./App.css";
import logo from "./logo.png";
import chipotle from "./chipotle.png";

/** 🔹 Hook to detect if screen is large (lg: ≥1024px) */
function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLarge;
}

/** 🔹 Hook for responsive margin (kept for parity even if unused) */
function useResponsiveMargin() {
  const getMargin = () => (window.innerWidth < 768 ? "-50px" : "-150px");
  const [margin, setMargin] = useState(getMargin);

  useEffect(() => {
    const handleResize = () => setMargin(getMargin());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return margin;
}

function Panel({
  item,
  isActive,
  offset,
  dragOffsetX,
  popKey,
  next,
  prev,
  flipDirection,
  reenterKey,
}) {
  const controls = useAnimation();
  const wasActiveRef = useRef(isActive);
  const [isPoppingOut, setIsPoppingOut] = useState(false);

  const sideSpacing = 240;
  const sideScale = 0.8;
  const depthSpacing = -150;
  const dragInfluence = dragOffsetX * (1 / (Math.abs(offset) + 1));

  let x = offset * sideSpacing + dragInfluence;
  let z = isActive ? 0 : Math.abs(offset) * depthSpacing;
  let rotateY = offset < 0 ? 25 : offset > 0 ? -25 : dragInfluence / 25;
  let scale = isActive ? 1 : sideScale;
  let opacity = isActive ? 1 : 0.5;
  let baseZIndex = isActive ? 10 : 5 - Math.abs(offset);

  useEffect(() => {
    let cancelled = false;
    const justDeactivated = wasActiveRef.current && !isActive;
    const isSmall = window.innerWidth < 640;

    const enterDelay = isSmall ? 0.3 : 0.05;
    const exitDelay = isSmall ? 0.2 : 0.0;
    const enterDuration = isSmall ? 0.3 : 0.4;
    const exitDuration = isSmall ? 0.25 : 0.35;
    const settleDuration = isSmall ? 0.15 : 0.2;

    let pulseTimer;

    (async () => {
      if (isActive) {
        setIsPoppingOut(false);
        const isWelcome = item.title === "Welcome";
        if (isWelcome) {
          await controls.start({
            x: `calc(-50% + ${x}px)`,
            z,
            rotateY: [flipDirection * 90, 0],
            scale: [0.9, 1],
            opacity: [0, 1],
            transition: {
              duration: enterDuration,
              ease: "easeOut",
              delay: enterDelay,
            },
          });
          if (cancelled) return;

          pulseTimer = setTimeout(() => {
            controls.start({
              x: `calc(-50% + ${x}px)`,
              z,
              rotateY: 0,
              scale: [1, 1.04, 1],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            });
          }, 900);
        } else {
          await controls.start({
            x: `calc(-50% + ${x}px)`,
            z,
            rotateY,
            scale: 1,
            opacity: 1,
            transition: {
              duration: enterDuration,
              ease: "easeOut",
              delay: enterDelay,
            },
          });
        }
      } else {
        if (justDeactivated) {
          setIsPoppingOut(true);
          await controls.start({
            rotateY: flipDirection * -90,
            scale: 0.6,
            opacity: 0,
            z: -200,
            transition: {
              duration: exitDuration,
              ease: "easeIn",
              delay: exitDelay,
            },
          });
          if (cancelled) return;

          setIsPoppingOut(false);
          await controls.start({
            x: `calc(-50% + ${x}px)`,
            z,
            rotateY,
            scale,
            opacity,
            transition: { duration: settleDuration, ease: "easeOut" },
          });
        } else {
          await controls.start({
            x: `calc(-50% + ${x}px)`,
            z,
            rotateY,
            scale,
            opacity,
            transition: {
              duration: settleDuration,
              ease: "easeOut",
              delay: exitDelay,
            },
          });
        }
      }
    })();

    wasActiveRef.current = isActive;

    return () => {
      cancelled = true;
      if (pulseTimer) clearTimeout(pulseTimer);
    };
  }, [
    isActive,
    x,
    z,
    rotateY,
    scale,
    opacity,
    controls,
    flipDirection,
    item.title,
    reenterKey,
  ]);

  return (
    <motion.div
      className="panel absolute top-0 left-1/2 w-[100%] md:w-[80%] lg:w-[60%]
                 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]
                 h-auto p-6 flex flex-col items-center justify-center
                 rounded-2xl bg-green-900 shadow-lg ring-2 ring-green-700 shadow-yellow-300"
      style={{
        zIndex: isPoppingOut ? 50 : baseZIndex,
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      }}
      initial={{ opacity: 0, scale: 0.6, z: -600 }}
      animate={controls}
    >
      {isActive ? (
        <motion.div
          key={popKey}
          initial={{ opacity: 0, y: 5, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-full h-auto flex flex-col items-center justify-center"
        >
          {item.logo && (
            <img
              src={item.logo}
              alt={item.title}
              className="w-24 mb-4 object-contain"
            />
          )}
          <div className="text-2xl font-bold text-black">{item.title}</div>
          <div className="text-md italic text-black">{item.role}</div>
          <div className="text-sm mt-3 text-center text-black">
            {item.description}
          </div>
          {item.date && <div className="mt-3 text-sm text-black">{item.date}</div>}

          <div className="flex mt-6 space-x-6">
            <button
              onClick={prev}
              className="px-4 py-2 bg-yellow-400 text-green-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
            >
              ◀ Prev
            </button>
            <button
              onClick={next}
              className="px-4 py-2 bg-yellow-400 text-green-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
            >
              Next ▶
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="w-full h-auto flex flex-col items-center justify-center">
          {item.logo && (
            <img
              src={item.logo}
              alt={item.title}
              className="w-24 mb-4 object-contain opacity-80"
            />
          )}
          <div className="text-2xl font-bold text-green-800">{item.title}</div>
          <div className="text-md italic text-green-700">{item.role}</div>
          <div className="text-sm mt-3 text-center text-green-900">
            {item.description}
          </div>
          {item.date && (
            <div className="mt-3 text-sm text-green-600">{item.date}</div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function WorkExperience() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const dragStartX = useRef(null);
  const isDragging = useRef(false);
  const [popKey, setPopKey] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [reenterKey, setReenterKey] = useState(0);
  const [showPanels, setShowPanels] = useState(true);

  const containerRef = useRef(null);
  const isLarge = useIsLargeScreen();
  useResponsiveMargin();
  const inView = useInView(containerRef, {
    margin: isLarge ? "-40% -30%" : "-15% 0px",
    once: false,
  });

  const items = [
    {
      title: "Welcome",
      role: "Introduction",
      description:
        "Explore my work experience and projects by scrolling through panels.",
    },
    {
      title: "Trustworthy Glass",
      role: "Web Development Intern",
      description:
        "Designed, created, and hosted 11 websites with SEO to improve visibility.",
      date: "May 2024 - Aug 2024",
      logo: logo,
    },
    {
      title: "Chipotle",
      role: "Kitchen Manager",
      description:
        "Managed teams in fast-paced environments, promoted to manager after 3 years.",
      date: "May 2022 - Present",
      logo: chipotle,
    },
    {
      title: "GopherMatch",
      role: "Full Stack Project",
      description:
        "Built a roommate finder for UMN students using React, Node.js, Express, and MySQL.",
    },
    {
      title: "ML4GW",
      role: "Research Assistant",
      description:
        "Analyzed black hole mergers, built ML models, and improved reliability with test cases.",
    },
  ];

  const mod = (n, m) => ((n % m) + m) % m;
  const goTo = (idx) => {
    setActiveIndex(mod(idx, items.length));
    setPopKey((k) => k + 1);
  };
  const next = () => {
    setHasInteracted(true);
    goTo(activeIndex + 1);
  };
  const prev = () => {
    if (!hasInteracted && activeIndex === 0) return;
    setHasInteracted(true);
    goTo(activeIndex - 1);
  };

  const prepAndFlipToWelcome = () => {
    setShowPanels(false);
    setActiveIndex(2);
    setPopKey((k) => k + 1);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShowPanels(true);
        goTo(0);
        setReenterKey((k) => k + 1);
      });
    });
  };

  const prevInViewRef = useRef(false);
  useEffect(() => {
    const wasInView = prevInViewRef.current;
    if (inView && !wasInView) {
      prepAndFlipToWelcome();
    } else if (!inView && wasInView) {
      // 🔹 Reset back to index 2 when animating OUT of view
      setActiveIndex(2);
      setPopKey((k) => k + 1);
    }
    prevInViewRef.current = inView;
  }, [inView]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - dragStartX.current;
    setDragOffsetX(diff);
  };
  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (Math.abs(dragOffsetX) > 120) {
      setHasInteracted(true);
      if (dragOffsetX > 0) prev();
      else next();
    }
    setDragOffsetX(0);
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center w-full py-[10%] sm:py-[11%] md:py-[13%] md:mt-[-6%] lg:mt-[-14%] lg:py-[20%] bg-offwhite font-montserrat"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: isLarge ? 0 : 120 }}
        animate={
          inView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.6, y: isLarge ? 0 : 120 }
        }
        exit={{ opacity: 0, scale: 0.6, y: isLarge ? 0 : -120 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full flex flex-col items-center"
        style={{ visibility: showPanels ? "visible" : "hidden" }}
      >
        {/* Dots */}
        <div className="flex space-x-4 mb-6 z-20">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!hasInteracted && idx !== 0) setHasInteracted(true);
                goTo(idx);
              }}
              className={`w-3 h-3 rounded-full ${
                idx === activeIndex ? "bg-yellow-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Panels */}
        <div
          className="relative w-[80%] min-h-[400px] perspective cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
        >
          {items.map((item, idx) => {
            let offset = (idx - activeIndex + items.length) % items.length;
            if (offset > items.length / 2) offset -= items.length;
            const flipDirection = idx === 0 ? 1 : idx > 0 ? -1 : 1;
            return (
              <Panel
                key={idx}
                item={item}
                isActive={offset === 0}
                offset={offset}
                dragOffsetX={dragOffsetX}
                popKey={popKey}
                next={next}
                prev={prev}
                flipDirection={flipDirection}
                reenterKey={reenterKey}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default WorkExperience;
