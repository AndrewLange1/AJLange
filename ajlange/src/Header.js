import './App.css';
import { useState, useRef, useEffect } from 'react';

function Header({ onAboutMeClick }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false); // Close the menu
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        
        // Clean up the event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-white h-[40px] border-b border-black flex flex-row items-center font-montserrat text-[20px]">
            <div className="ml-[10px] whitespace-nowrap">
                Andrew Lange
            </div>
            <div className="flex-grow flex justify-end mr-[10px]">
                <div className="flex items-center">
                    <div className="hover:text-green-800 cursor-pointer whitespace-nowrap">About me</div>
                    <div className="ml-[8px] bg-green-500 w-[1.5px] h-[80%]"></div>
                    <div className="hover:text-green-800 cursor-pointer whitespace-nowrap ml-[10px]">Work Experience</div>
                    <div className="ml-[8px] bg-green-500 w-[1.5px] h-[80%]"></div>
                    <div className="hover:text-green-800 cursor-pointer whitespace-nowrap ml-[10px]">Projects</div>
                    <div className="ml-[8px] bg-green-500 w-[1.5px] h-[80%]"></div>
                    <div className="hover:text-green-800 cursor-pointer whitespace-nowrap ml-[10px]">Links</div>
                </div>
            </div>
            <div className="block md:hidden ml-auto mr-[10px] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105" onClick={toggleMenu}>
                <div className="bg-green-700 h-[3px] w-[25px] mb-[4px]"></div>
                <div className="bg-green-700 h-[3px] w-[25px] mb-[4px]"></div>
                <div className="bg-green-700 h-[3px] w-[25px]"></div>
            </div>

            {/* Condensed Menu */}
            {isMenuOpen && (
                <div ref={menuRef} className="absolute top-10 right-0 bg-white border border-black shadow-lg flex flex-col">
                    <div className="p-2 hover:text-green-800 cursor-pointer whitespace-nowrap" onClick={onAboutMeClick}>About me</div>
                    <div className="p-2 hover:text-green-800 cursor-pointer whitespace-nowrap">Work Experience</div>
                    <div className="p-2 hover:text-green-800 cursor-pointer whitespace-nowrap">Projects</div>
                    <div className="p-2 hover:text-green-800 cursor-pointer whitespace-nowrap">Links</div>
                </div>
            )}
        </div>
    );
}

export default Header;
