import './App.css';

function AboutMe() {
  return (
    <div id="about-me" className="font-montserrat relative">
      <div className="custom:text-[40px] text-[6vw] max-text-[40px] text-green-800 text-center mt-[30px]">
        WHO AM I?
      </div>

      <div className="custom:hidden text-[17px] text-black text-center mt-[20px] space-y-1">
        <div>Hey! I'm Andrew Lange, a Computer Science</div>
        <div>major at the University of Minnesota.</div>
        <div>I plan on pursuing software engineering with</div>
        <div>an interest in machine learning. I also</div>
        <div>enjoy creating interactive web applications.</div>
        <div>This past summer I interned at Trustworthy</div>
        <div>Glass as a web developer. Outside of classes</div>
        <div>I am most likely working on projects at Social</div>
        <div>Coding, a campus club, or conducting</div>
        <div>research on campus.</div>
        <div className="mt-[30px] h-[1px] w-[90%] mx-auto bg-black"></div>
      </div>

      <div className="custom:block hidden text-[17px] custom:text-[20px] text-black text-center mt-[20px] space-y-1">
        <div>Hey! I'm Andrew Lange, a Computer Science major at the University of Minnesota</div>
        <div>I plan on pursuing software engineering, with an interest in</div>
        <div>machine learning. I also enjoy creating interactive web applications.</div>
        <div>This past summer I interned at Trustworthy Glass as a web</div>
        <div>developer. Outside of classes I am most likely working on projects at Social</div>
        <div>Coding, a campus club or conducting research on campus.</div>
        <div className="mt-[30px] h-[1px] w-[90%] mx-auto bg-black"></div>
      </div>
    </div>
  );
}

export default AboutMe;
