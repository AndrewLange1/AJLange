// TODO: Fix ML4GW Title text when resizing (Not smooth at certain point)
import './App.css';

function ProfessionalSkills() {
    return (
        <div className="font-montserrat mt-[20px] flex flex-col items-center justify-center w-full pb-[70px] bg-white">
            <div className="md:text-[40px] text-[6vw] max-text-[40px] text-green-800 text-center mt-[30px] text-responsive w-full">
                <div className="projects">PROJECTS</div>
                <div className="gopher-container flex flex-col items-center w-full justify-between">
                    <div className="project-box flex flex-col items-center text-black">
                        <div className="text-center md:text-[35px] text-[5.5vw]">
                            GopherMatch
                        </div>
                        <ul className="list-disc list-inside text-start md:text-[23px] text-[17px] mt-[50px] pl-[20px]">
                            <li className="mt-[30px]">Roommate finder for UMN students</li>
                            <li className="mt-[30px]">Built with React, Node.js, Express, MySQL</li>
                            <li className="mt-[30px]">Enables profile creation and browsing</li>
                            <li className="mt-[30px]">Facilitates roommate connections</li>
                            <li className="mt-[30px]">Recognized by UMN Student Senate</li>
                            <li className="mt-[30px]">Presented to 100+ attendees</li>
                        </ul>
                    </div>
                    <div className="black-line"></div>
                    <div className="project-box flex flex-col items-center text-black">
                        <div className="ml4gw text-center md:text-[35px] text-[5.5vw]">
                            <a href="https://github.com/ML4GW" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                ML4GW
                            </a>
                        </div>
                        <ul className="list-disc list-inside text-start md:text-[23px] text-[17px] mt-[50px] pl-[20px]">
                            <li className="mt-[30px]">Research project through MIT</li>
                            <li className="mt-[30px]">Use NumPy and Matplotlib</li>
                            <li className="mt-[30px]">Generate histograms and box plots</li>
                            <li className="mt-[30px]">Analyze black hole mergers</li>
                            <li className="mt-[30px]">Train machine learning models on noise</li>
                            <li className="mt-[30px]">Add test cases to improve reliability</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ProfessionalSkills;
