import './App.css';

function Footer() {
    return (
        <div className="gradient-bg w-full h-[400px] flex flex-col items-center justify-center text-white text-center">
            <div className="text-[45px]">Useful Links</div>
            <div className="mt-[30px] text-[20px]">
                <a href="https://github.com/AndrewLange1" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    GitHub: AndrewLange1
                </a>
            </div>
            <div className="mt-[10px] text-[20px]">
                <a href="https://www.linkedin.com/in/andrew-lange-461678288/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn Profile
                </a>
            </div>
            <div className="mt-[10px] text-[20px]">
                <a href="https://www.mnglass.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    www.mnglass.com
                </a>
            </div>
        </div>
    );
}

export default Footer;
