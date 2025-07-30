import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Social = () => {
    return (
        <div className="flex justify-center gap-6 text-2xl text-black">
            <a href="https://github.com/jainggit" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-orange-500" />
            </a>
            <a href="https://www.instagram.com/arjunwn?igsh=d3lyaGIwNDZpMW1y" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-orange-500" />
            </a>
            <a href="https://www.linkedin.com/in/bagas-arjuna/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-orange-500" />
            </a>
        </div>
    );
};

export default Social;
