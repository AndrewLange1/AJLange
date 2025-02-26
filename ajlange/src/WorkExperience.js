import { useRef } from 'react';
import './App.css';
import logo from './logo.png';
import chipotle from './chipotle.png';

function WorkExperience() {
    const trustworthyRef = useRef(null);
    const chipotleRef = useRef(null);

    return (
        <div className="flex flex-col font-montserrat">
            <div ref={trustworthyRef} className="flex flex-col custom2:flex-row border border-black mt-[30px] trustworthyglass-section">
                <div className="w-full custom2:w-[60%] bg-lime text-white text-center p-6 flex flex-col items-center">
                    <div className="text-[30px]">WORK EXPERIENCE</div>
                    <div className="mt-[20px] custom2:text-[28px] text-[23px]">Trustworthy Glass</div>
                    <div className="custom2:text-[25px] text-[21px]">Web Development Internship</div>

                    <div className="mt-[20px] custom2:text-[20px] text-[17px] text-center">
                        <div className="custom2:block hidden">
                            <p>This past summer I had a web development internship</p>
                            <p>with Trustworthy Glass. They are a local </p>
                            <p>glass company who had high aspirations for future sites.</p>
                            <p>Upon my employment there, I quickly realized their</p>
                            <p>inefficient method of buying domain names in bulk, just</p>
                            <p>to have them all forward to the same main site.</p>
                            <p>Using Search Engine Optimization, I was able to fully</p>
                            <p>design, create, and learn how to host 11 unique sites.</p>
                        </div>
                        <div className="custom3:block custom2:hidden hidden">
                            <p>This past summer I had a web development</p>
                            <p>internship with Trustworthy Glass.</p>
                            <p>They are a local glass company with high</p>
                            <p>aspirations for future sites. Upon my</p>
                            <p>employment there, I realized their</p>
                            <p>inefficient method of bulk domain purchasing.</p>
                            <p>Using SEO, I fully designed, created, and</p>
                            <p>hosted 11 unique websites.</p>
                        </div>
                        <div className="custom3:hidden custom2:hidden">
                            <p>This past summer I had a web</p>
                            <p>development internship with</p>
                            <p>Trustworthy Glass. They are</p>
                            <p>a local glass company with</p>
                            <p>high aspirations for future</p>
                            <p>sites. Upon my employment</p>
                            <p>there, I realized their inefficient</p>
                            <p>method of bulk domain purchasing.</p>
                            <p>Using SEO, I fully designed,</p>
                            <p>created, and hosted 11 unique</p>
                            <p>websites.</p>
                        </div>
                    </div>

                    <div className="mt-[20px] text-[20px]">May 2024 - August 2024</div>
                </div>

                <div className="hidden custom2:flex w-[40%] bg-white items-center justify-center p-4">
                    <img className="w-[90%]" src={logo} alt="Trustworthy Glass Logo" />
                </div>
            </div>

            <div ref={chipotleRef} className="flex flex-col custom2:flex-row border border-black mt-[-1px] chipotle-section">
                <div className="hidden custom2:flex w-[40%] bg-white items-center justify-center p-4">
                    <img className="w-[90%] max-h-[250px] object-contain" src={chipotle} alt="Chipotle Logo" />
                </div>

                <div className="w-full custom2:w-[60%] bg-lime text-white text-center p-6 flex flex-col items-center">
                    <div className="mt-[20px] custom2:text-[28px] text-[23px]">Chipotle Mexican Grill</div>
                    <div className="custom2:text-[25px] text-[21px]">Kitchen Manager</div>

                    <div className="mt-[20px] custom2:text-[20px] text-[17px] text-center">
                        <div className="custom2:block hidden">
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
                        <div className="custom3:block custom2:hidden hidden">
                            <p>For the past three years, I have</p>
                            <p>worked at Chipotle Mexican Grill.</p>
                            <p>This experience has taught me how</p>
                            <p>to manage fast-paced environments.</p>
                            <p>Resolving customer service concerns</p>
                            <p>professionally is a vital aspect of my role.</p>
                            <p>Through this, I was promoted to a manager,</p>
                            <p>earning recognition for my efforts.</p>
                        </div>
                        <div className="custom3:hidden custom2:hidden">
                            <p>For the past three years,</p>
                            <p>I have worked at Chipotle</p>
                            <p>Mexican Grill. This experience</p>
                            <p>has taught me how to manage</p>
                            <p>fast-paced environments.</p>
                            <p>Resolving customer service</p>
                            <p>concerns professionally is</p>
                            <p>a vital aspect of my role.</p>
                            <p>Through this, I was promoted</p>
                            <p>to a manager, earning</p>
                            <p>recognition for my efforts.</p>
                        </div>
                    </div>

                    <div className="mt-[20px] text-[20px]">May 2022 - Current</div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;