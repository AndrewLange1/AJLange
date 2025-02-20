import './App.css';

function AboutMe() {
    return(
        <div className="font-montserrat">
            <div className="md:text-[40px]  text-[6vw] max-text-[40px] text-green-800 text-center mt-[30px] text-responsive">
                WHO AM I?
            </div>
            <div className="md:text-[20px] text-[2.5vw] text-black text-center mt-[20px]">
                <div>
                    Hey! I'm Andrew Lange, a Computer Science major at the University of Minnesota
                </div>
                <div className="">
                    I plan on pursuing software engineering, with an interest in
                </div>
                <div>
                    machine learning. I also enjoy creating interactive web applications.
                </div>
                <div>
                    This past summer I interned at Trustworthy Glass as a web
                </div>
                <div>
                    developer. Outside of classes I am most likely working on projects at Social
                </div>
                <div>
                    Coding, a campus club or conducting research on campus. 
                </div>
                <div className="mt-[30px] h-[1px] w-[90%] items-center bg-black mx-auto"></div>
            </div>
        </div>
    )
}

export default AboutMe;