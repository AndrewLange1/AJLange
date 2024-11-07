import './App.css'
import logo from './logo.png'
import chipotle from './chipotle.png'

function WorkExperience() {
    return(
        <div className="flex flex-col">
            <div className="flex flex-row flex-row-experience border border-black mt-[30px] font-montserrat">
                <div className="w-[60%] h-[500px] bg-lime text-white text-center lime-full">
                    <div className="mt-[25px] text-[30px] work-experience">
                        WORK EXPERIENCE
                        <div className="text-[23px]">
                            <div className="mt-[30px] text-[28px] company-title">TrustworthyGlass</div>
                            <div className="job-title">Web Development Internship</div>
                            <div className='mt-[30px] text-[2.6vw] paragraph-text'>
                                <div>This is just the first one to see how this goes, wish me luck!</div>
                                <div>This is my bio. I will fill in the text later, but this should be good for now</div>
                                <div>Let's keep this simple. I am a thug who gets a lot of money</div>
                                <div>I am also a very decorated rapper, known around the globe for my rapping </div>
                                <div> Well this sure has been fun. I mog all you motherfuckers -42</div>
                                <div>Woohoo!! This is my last div!!! Well, this sure has been fun. See ya soon!</div>
                            </div>
                            <div className="mt-[20px]">
                                <div className="date-text job-title">May 2024 - August 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[40%] h-[500px] bg-white flex items-center justify-center lime-full">
                    <img className="w-[90%]" src={logo} alt="logo"/>
                </div>
            </div>
            <div className="flex flex-row-experience border h-[425px] border-black">
                <div className="bg-white w-[40%] h-[425px] flex items-center justify-center lime-full">
                    <img className="w-full h-full object-contain mt-[60px]" src={chipotle} alt="chipotle logo" />
                </div>
                <div className="w-[60%] h-[425px] max-h-[425px] bg-lime text-white text-center lime-full font-montserrat">
                    <div className="text-[23px]">
                        <div className="mt-[30px] text-[28px] company-title">Chipotle Mexican Grill</div>
                        <div className="job-title">Shift Manager</div>
                        <div className='mt-[30px] text-[2.6vw] paragraph-text'>
                            <div>This is just the first one to see how this goes, wish me luck!</div>
                            <div>This is my bio. I will fill in the text later, but this should be good for now</div>
                            <div>Let's keep this simple. I am a thug who gets a lot of money</div>
                            <div>I am also a very decorated rapper, known around the globe for my rapping </div>
                            <div> Well this sure has been fun. I mog all you motherfuckers -42</div>
                            <div>Woohoo!! This is my last div!!! Well, this sure has been fun. See ya soon!</div>
                        </div>
                        <div className="mt-[20px]">
                            <div className="date-text job-title">May 2024 - August 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience;