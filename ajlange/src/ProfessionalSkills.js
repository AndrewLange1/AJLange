import './App.css';
import photo from './headshot.png';

function ProfessionalSkills() {
    return (
        <div className="font-montserrat mt-[20px] flex flex-row flex-col-1800">
            <div className="ml-[20vw] md:w-[300px] w-[39.9vw] max-w-[300px] min-w-[300px] text-green-800 md:text-[33px] text-[25px] remove-margin-1800 overflow-hidden professional-centered">
                Professional Skills
                <div className="flex flex-col text-center justify-center mt-[10px] md:text-[20px] text-[17px] text-black">
                <div>Python</div>
                <div>Java</div>
                <div>C/C++</div>
                <div>Javascript</div>
                <div>CSS</div>
                <div>Node.js</div>
                <div>React/React Native</div>
                <div>Web Hosting</div>
                <div>NumPy</div>
                <div>Matplotlib</div>
                <div>Jupyter</div>
                <div>Jira</div>
                <div>Microsoft Office Suite</div>
            </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={photo} className="w-[400px] h-[400px] mt-[20px] rounded-full remove-margin-1800 photo-small" alt="headshot"/>
            </div>
        </div>
    );
}

export default ProfessionalSkills;
