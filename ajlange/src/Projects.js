import './App.css';

function ProfessionalSkills() {
    return (
        <div className="font-montserrat mt-[20px] flex flex-col items-center justify-center w-full pb-[70px]">
            <div className="md:text-[40px] text-[6vw] max-text-[40px] text-green-800 text-center mt-[30px] text-responsive w-full">
                PROJECTS
                <div className="experience-container flex w-full justify-between">
                    <div className="project-box flex flex-col items-center text-black">
                        <div className="text-center md:text-[35px] text-[5.5vw] gopherMatch">
                            GopherMatch
                        </div>
                        <ul className="list-disc list-inside text-start text-[70%] mt-[50px]">
                            <li>Same thing that's on my resume</li>
                            <li className="mt-[30px]">Same thing that's on my resume</li>
                            <li className="mt-[30px]">Same thing that's on my resume</li>
                            <li className="mt-[30px]">Same thing that's on my resume</li>
                        </ul>
                    </div>
                    <div className="black-line"></div>
                    <div className="project-box flex flex-col items-center text-black gopherMatch">
                    <div className="text-center md:text-[35px] text-[5.5vw]">
                            ML4GW
                        </div>
                        <ul className="list-disc list-inside text-start text-[70%] mt-[50px]">
                        <li>Same thing that's on my resume</li>
                            <li className="mt-[30px]">Same thing that's on my resume</li>
                            <li className="mt-[30px]">Same thing that's on my resume</li>
                            <li className="mt-[30px]">Same thing that's on my resume</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalSkills;
