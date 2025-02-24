import './App.css';
import logo from './logo.png';
import chipotle from './chipotle.png';

function WorkExperience() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row flex-row-experience border border-black mt-[30px] font-montserrat trustworthyglass-section">
                <div className="w-[60%] bg-lime text-white text-center lime-full">
                    <div className="mt-[25px] text-[30px] work-experience">
                        WORK EXPERIENCE
                        <div className="text-[23px]">
                            <div className="mt-[30px] text-[28px] company-title">TrustworthyGlass</div>
                            <div className="job-title">Web Development Internship</div>
                            <div className="mt-[30px] text-[2.6vw] paragraph-text">
                                <div>
                                    This past summer I had a web development internship with Trustworthy
                                </div>
                                <div>
                                    Glass. They are a local glass company who had high aspirations for future sites.
                                </div>
                                <div>
                                    Upon my employment there I quickly realized their inefficient
                                </div>
                                <div>
                                    method of buying domain names in bulk, just to have them all forward to
                                </div>
                                <div>
                                    the same main site. Using Search Engine Optimization I was
                                </div>
                                <div>
                                    able to fully design, create, and learn how to hose 11 unique sites. 
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <div className="date-text job-title">May 2024 - August 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[40%] bg-white flex image-margin items-center justify-center lime-full">
                    <img className="w-[90%]" src={logo} alt="logo" />
                </div>
            </div>
            <div className="flex-row-experience border h-auto border-black chipotle-section hidden md:flex">
                <div className="bg-white w-[40%] flex items-center justify-center lime-full">
                    <img className="w-full h-full max-h-[250px] object-contain mt-[60px]" src={chipotle} alt="chipotle logo" />
                </div>
                <div className="w-[60%] bg-lime text-white text-center lime-full font-montserrat">
                    <div className="text-[23px]">
                        <div className="mt-[30px] text-[28px] company-title">Chipotle Mexican Grill</div>
                        <div className="job-title">Shift Manager</div>
                        <div className="mt-[30px] text-[2.6vw] paragraph-text">
                            <div>
                                For the past 3 years I have worked at Chipotle Mexican Grill.
                            </div>
                            <div>
                                This experience has taught me to navigate stressful, fast-paced environments.
                            </div>
                            <div>
                                Exhibiting patience and professionalism while resolving
                            </div>
                            <div>
                                customer service concerns is a vital aspect of my job. During my time
                            </div>
                            <div>
                                learning these skills I have been promoted to a manager. It
                            </div>
                            <div>
                                is rewarding getting the opportunity to see my progress get recognition.
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <div className="date-text job-title">May 2024 - Current</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-experience-reverse border h-auto border-black chipotle-section md:hidden">
                <div className="w-[60%] bg-lime text-white text-center lime-full font-montserrat">
                    <div className="text-[23px]">
                        <div className="mt-[30px] text-[28px] company-title">Chipotle Mexican Grill</div>
                        <div className="job-title">Shift Manager</div>
                        <div className="mt-[30px] text-[2.6vw] paragraph-text">
                            <div>For the past 3 years I have worked at Chipotle Mexican Grill.</div>
                            <div>This experience has taught me to navigate stressful, fast-paced environments.</div>
                            <div>Exhibiting patience and professionalism while resolving</div>
                            <div>customer service concerns is a vital aspect of my job. During my time</div>
                            <div>learning these skills I have been promoted to a manager. It</div>
                            <div>is rewarding getting the opportunity to see my progress get recognition.</div>
                        </div>
                        <div className="mt-[20px]">
                            <div className="date-text job-title">May 2024 - August 2024</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-[40%] flex items-center justify-center lime-full">
                    <img className="w-full h-full max-h-[300px] object-contain mt-[60px]" src={chipotle} alt="chipotle logo" />
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
