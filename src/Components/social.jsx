import "../index.css"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Social = () => {
    return <>
        <div className="flex justify-center gap-6">
            <a href="https://github.com/jainggit" target="_blank" rel="noopener noreferrer"><FaGithub className="text-xl hover:text-orange-500 cursor-pointer"/></a>
            <a href="https://www.instagram.com/arjunwn?igsh=d3lyaGIwNDZpMW1y" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-xl hover:text-orange-500  cursor-pointer" /></a>
            <a href="https://www.linkedin.com/in/bagas-arjuna/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-xl hover:text-orange-500 cursor-pointer" /></a>
        </div>
    </>
}

export default Social