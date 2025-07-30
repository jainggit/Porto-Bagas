import { useEffect, useState } from "react";
import profile from "../images/bagas.jpg";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = ["Home", "About", "Project", "Contact"];

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

    return (
        <div className="flex justify-center pt-5 px-4">
            <header className="flex fixed z-50 top-5 items-center justify-between bg-white/70 backdrop-blur-md shadow-xl rounded-full w-full max-w-6xl px-6 py-3">
                <div className="flex items-center gap-3">
                    <img
                        className="w-12 h-12 rounded-full object-cover shadow"
                        src={profile}
                        alt="Profile"
                    />
                    <div className="flex flex-col">
                        <p className="text-gray-700 font-bold text-sm">
                            Bagas Arjuna Gunawan
                        </p>
                        <p className="text-gray-400 font-semibold text-xs">
                            Frontend Developer
                        </p>
                    </div>
                </div>

                <nav className="hidden sm:flex gap-4 text-sm sm:text-base items-center">
                    {navLinks.map((label) => {
                        const id = label.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`relative px-2 
                                ${isActive ? "text-orange-500 after:w-full" : "text-gray-500 after:w-0"}
                                hover:text-orange-500 transition
                                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-orange-500
                                after:transition-all after:duration-500`}
                            >
                                {label}
                            </a>
                            );
                        })}

                            <a href="/CV-Bagas-Arjuna-Gunawan.pdf" download>
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition text-sm">
                                    Download CV
                                </button>
                            </a>
                </nav>

                <button
                    className="sm:hidden text-white bg-orange-500 ml-3"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {menuOpen && (
            <div className="sm:hidden fixed top-20 right-5 bg-white shadow-lg rounded-xl py-4 px-6 z-50">
                <nav className="flex flex-col gap-4 text-sm">
                    {navLinks.map((label) => {
                    const id = label.toLowerCase();
                    return (
                            <a
                            key={id}
                            href={`#${id}`}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 hover:text-orange-500 transition"
                            >
                            {label}
                            </a>
                        );
                    })}
                    <a href="/CV-Bagas-Arjuna-Gunawan.pdf" download>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition text-sm w-full text-left"
                        >
                            Download CV
                        </button>
                    </a>
                </nav>
            </div>
        )}
        </div>
    );
};

export default Header;
