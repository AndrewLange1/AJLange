import './App.css';
import photo from './headshot.png';

function ProfessionalSkills() {
    return (
        <div className="font-montserrat mt-[20px] flex flex-row flex-col-1800">
            <div className="ml-[20vw] md:w-[300px] w-[39.9vw] max-w-[300px] min-w-[300px] text-green-800 md:text-[33px] text-[4.5vw] max-text-[33px] text-responsive-skills remove-margin-1800 overflow-hidden professional-centered">
                Professional Skills
                <div className="flex flex-col text-center justify-center mt-[10px] md:text-[20px] text-[3vw] text-black text-responsive-skills-2">
                <div>Skill 1</div>
                <div>Skill 2</div>
                <div>Skill 3</div>
                <div>Skill 4</div>
                <div>Skill 5</div>
                <div>Skill 6</div>
                <div>Skill 7</div>
                <div>Skill 8</div>
                <div>Skill 9</div>
                <div>Skill 10</div>
                <div>Skill 11</div>
                <div>Skill 12</div>
                <div>Skill 13</div>
            </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={photo} className="w-[400px] h-[400px] mt-[20px] rounded-full remove-margin-1800 photo-small" alt="headshot"/>
            </div>
        </div>
    );
}

export default ProfessionalSkills;
