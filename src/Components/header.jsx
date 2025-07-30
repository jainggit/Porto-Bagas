import { useEffect, useState } from "react";
import profile from "../images/bagas.jpg";

const Header = () => {
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            }
            });
        },
        { threshold: 0.5 }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
    }, []);

    const navLinks = ["Home", "About", "Project", "Contact"];

    return <>
        <div className="flex justify-center pt-5 px-4">
            <header className="flex fixed z-50 top-5 items-center justify-between bg-white/70 backdrop-blur-md shadow-xl rounded-full w-full max-w-6xl px-6 py-3">
                {/* Profile */}
                <div className="flex items-center gap-3">
                    <img
                        className="w-12 h-12 rounded-full object-cover shadow"
                        src={profile}
                        alt="Profile"
                    />
                    <div className="sm:flex flex-col">
                        <p className="text-gray-700 font-bold text-sm">
                            Bagas Arjuna Gunawan
                        </p>
                        <p className="text-gray-400 font-semibold text-xs">
                            Frontend Developer
                        </p>
                    </div>
                </div>
                <nav className="flex gap-4 text-sm sm:text-base">
                    {navLinks.map((label) => {
                        const id = label.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`relative px-2 hidden sm:block 
                                ${isActive ? "text-orange-500 after:w-full" : "text-gray-500 after:w-0"}
                                hover:text-orange-500 transition
                                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-orange-500
                                after:transition-all after:duration-500`}
                            >
                                {label}
                            </a>
                        );
                    })}
                </nav>
                <a href=""><button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition text-sm">
                    Download CV
                </button></a>
            </header>
        </div>
    </>;
};

export default Header;
