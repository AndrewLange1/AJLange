import React, { useState, useRef, useEffect, forwardRef } from "react";

const Header = forwardRef(
  ({ onAboutMeClick, onWorkExperienceClick, onProjectsClick, onLinksClick }, ref) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    // Close menu on outside click
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div
        ref={ref}
        className="h-[40px] border-b border-black flex items-center font-montserrat text-[20px] bg-lime text-offwhite shadow-md"
      >
        {/* Left side title */}
        <div className="ml-[10px] whitespace-nowrap">Andrew (AJ) Lange</div>

        {/* Desktop navigation */}
        <div className="flex-grow flex justify-end mr-[10px]">
          <div className="flex items-center">
            <div
              className="hover:text-green-800 cursor-pointer whitespace-nowrap"
              onClick={() => {
                onAboutMeClick();
                setMenuOpen(false);
              }}
            >
              About me
            </div>
            <div className="ml-[8px] bg-offwhite w-[1.5px] h-[80%]"></div>
            <div
              className="hover:text-green-800 cursor-pointer whitespace-nowrap ml-[10px]"
              onClick={() => {
                onWorkExperienceClick();
                setMenuOpen(false);
              }}
            >
              Work Experience
            </div>
            <div className="ml-[8px] bg-offwhite w-[1.5px] h-[80%]"></div>
            <div
              className="hover:text-green-800 cursor-pointer whitespace-nowrap ml-[10px]"
              onClick={() => {
                onProjectsClick();
                setMenuOpen(false);
              }}
            >
              Projects
            </div>
            <div className="ml-[8px] bg-offwhite w-[1.5px] h-[80%]"></div>
            <div
              className="hover:text-green-800 cursor-pointer whitespace-nowrap ml-[10px]"
              onClick={() => {
                onLinksClick();
                setMenuOpen(false);
              }}
            >
              Links
            </div>
          </div>
        </div>

        {/* Mobile hamburger */}
        <div
          className="block md:hidden ml-auto mr-[10px] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
          onClick={toggleMenu}
        >
          <div className="bg-offwhite h-[3px] w-[25px] mb-[4px]"></div>
          <div className="bg-offwhite h-[3px] w-[25px] mb-[4px]"></div>
          <div className="bg-offwhite h-[3px] w-[25px]"></div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-10 right-0 bg-offwhite border border-black shadow-lg flex flex-col"
          >
            <div
              className="p-2 hover:text-green-800 cursor-pointer whitespace-nowrap"
              onClick={() => {
                onAboutMeClick();
                setMenuOpen(false);
              }}
            >
              About me
            </div>
            <div
              className="p-2 hover:text-green-800 cursor-pointer whitespace-nowrap"
              onClick={() => {
                onWorkExperienceClick();
                setMenuOpen(false);
              }}
            >
              Work Experience
            </div>
            <div
              className="p-2 hover:text-green-800 cursor-pointer whitespace-nowrap"
              onClick={() => {
                onProjectsClick();
                setMenuOpen(false);
              }}
            >
              Projects
            </div>
            <div
              className="p-2 hover:text-green-800 cursor-pointer whitespace-nowrap"
              onClick={() => {
                onLinksClick();
                setMenuOpen(false);
              }}
            >
              Links
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default Header;
