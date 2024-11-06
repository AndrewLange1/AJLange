import './App.css';

function AboutMe() {
    return(
        <div className="font-montserrat">
            <div className="md:text-[40px]  text-[6vw] max-text-[40px] text-green-800 text-center mt-[30px] text-responsive">
                WHO AM I?
            </div>
            <div className="md:text-[20px] text-[2.5vw] text-black text-center mt-[20px]">
                <div>
                    This is my bio. I will fill in the text later, but this should be good for now
                </div>
                <div className="">
                    Let's keep this simple. I am a thug who gets a lot of money
                </div>
                <div>
                    I am also a very decorated rapper, known around the globe for my rapping 
                </div>
                <div>
                    Either get on the hype train or watch it leave, choo choo!
                </div>
                <div>
                    Well this sure has been fun hasn't it. I'm finna mog all you motherfuckers -42
                </div>
                <div>
                    See you later alligator, peace in the middle east sista
                </div>
                <div className="mt-[30px] h-[1px] w-[90%] items-center bg-black mx-auto"></div>
            </div>
        </div>
    )
}

export default AboutMe;