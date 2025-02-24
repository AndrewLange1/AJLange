import './App.css';

function AboutMe() {
    return (
        <div className="font-montserrat">
            <div className="custom:text-[40px] text-[6vw] max-text-[40px] text-green-800 text-center mt-[30px] text-responsive">
                WHO AM I?
            </div>
            
            {/* For smaller screens (below 900px) */}
            <div className="custom:hidden text-[17px] text-black text-center mt-[20px]">
                <div className="responsive-line">
                    Hey! I'm Andrew Lange, a Computer Science major
                </div>
                <div className="responsive-line">
                    at the University of Minnesota. I plan on
                </div>
                <div className="responsive-line">
                    pursuing software engineering with an interest
                </div>
                <div className="responsive-line">
                    in machine learning. I also enjoy creating
                </div>
                <div className="responsive-line">
                    interactive web applications. This past summer I
                </div>
                <div className="responsive-line">
                    interned at Trustworthy Glass as a web
                </div>
                <div className="responsive-line">
                    developer. Outside of classes I am most likely working
                </div>
                <div className="responsive-line">
                    on projects at Social Coding, a campus club
                </div>
                <div className="responsive-line">
                    or conducting research on campus.
                </div>
                <div className="mt-[30px] h-[1px] w-[90%] items-center bg-black mx-auto"></div>
            </div>

            {/* For larger screens (above 900px) */}
            <div className="custom:block text-[17px] min-text-[17px] text-black text-center mt-[20px] hidden custom:text-[20px]">
                <div>
                    Hey! I'm Andrew Lange, a Computer Science major at the University of Minnesota
                </div>
                <div>
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
