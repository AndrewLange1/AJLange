import './App.css';
import logo from './logo.png';
import chipotle from './chipotle.png';

function WorkExperience() {
    return (
        <div className="flex flex-col font-montserrat">
            <div className="flex flex-col custom2:flex-row border border-black mt-[30px] trustworthyglass-section">
                <div className="w-full custom2:w-[60%] bg-lime text-white text-center p-6 flex flex-col items-center">
                    <div className="text-[30px]">WORK EXPERIENCE</div>
                    <div className="mt-[20px] custom2:text-[28px] text-[23px]">Trustworthy Glass</div>
                    <div className="custom2:text-[25px] text-[21px]">Web Development Internship</div>
                    <div className="mt-[20px] custom2:text-[20px] text-[17px]">
                        <p>This past summer I had a web development internship</p>
                        <p>with Trustworthy Glass. They are a local </p>
                        <p>glass company who had high aspirations for future sites.</p>
                        <p>Upon my employment there, I quickly realized their</p>
                        <p>inefficient method of buying domain names in bulk, just</p>
                        <p>to have them all forward to the same main site.</p>
                        <p>Using Search Engine Optimization, I was able to fully</p>
                        <p>design, create, and learn how to host 11 unique sites.</p>
                    </div>
                    <div className="mt-[20px] text-[20px] job-title">May 2024 - August 2024</div>
                </div>
                {/* Logo shown only on custom2 screens */}
                <div className="hidden custom2:flex w-[40%] bg-white items-center justify-center p-4">
                    <img className="w-[90%]" src={logo} alt="Trustworthy Glass Logo" />
                </div>
            </div>
            <div className="flex flex-col custom2:flex-row border border-black mt-[-1px] chipotle-section">
                {/* Logo shown only on custom2 screens */}
                <div className="hidden custom2:flex w-[40%] bg-white items-center justify-center p-4">
                    <img className="w-[90%] max-h-[250px] object-contain" src={chipotle} alt="Chipotle Logo" />
                </div>
                <div className="w-full custom2:w-[60%] bg-lime text-white text-center p-6 flex flex-col items-center">
                    <div className="mt-[20px] custom2:text-[28px] text-[23px]">Chipotle Mexican Grill</div>
                    <div className="custom2:text-[25px] text-[21px]">Kitchen Manager</div>
                    <div className="mt-[20px] custom2:text-[20px] text-[17px]">
                        <p>For the past 3 years, I have worked at Chipotle</p>
                        <p> Mexican Grill. This experience has taught</p>
                        <p>me to navigate stressful, fast-paced environments.</p>
                        <p>Exhibiting patience and professionalism while</p>
                        <p>resolving customer service concerns is a vital</p>
                        <p>aspect of my job. During my time learning these skills,</p>
                        <p>I have been promoted to a manager.</p>
                        <p>It is rewarding getting the opportunity</p>
                        <p>to see my progress get recognition.</p>
                    </div>
                    <div className="mt-[20px] text-[20px] job-title">May 2024 - Current</div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;