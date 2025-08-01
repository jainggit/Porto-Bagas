import "../index.css";
import foto from "../images/image.jpg"
import foto1 from "../images/image1.jpg"
import foto2 from "../images/image2.jpg"

const projects = [
    {
        title: 'Video Belajar',
        description:
        'An interactive educational website using HTML, CSS, and React.js. Key features include login and registration pages with Axios authentication and state management using Zustand. The design is responsive and user-friendly.',
        image: foto,
        reverse: false,
        link: "https://videobelajarfinal.vercel.app/",
        git: "https://github.com/jainggit/Frontend-A2"
    },
    {
        title: 'Simple To Do List',
        description:
        'A simple To Do List app built with HTML, CSS, and JavaScript. Users can add tasks with priority levels (low/medium/high), mark them as completed, filter by status (complete/incomplete), and delete tasks as needed.',
        image: foto1,
        reverse: true,
        link: "https://bagas-to-do.vercel.app/",
        git: "https://github.com/jainggit/Bagas_toDo"
    },
    {
        title: 'Web Portofolio',
        description:
        'A personal portfolio website built with React.js and styled using Tailwind CSS. It features a responsive layout, an interactive hamburger menu for navigation, social media icons implemented with React Icons, and a contact form handled via EmailJS. Visual elements like profile images are included to enhance the personal branding.',
        image: foto2,
        reverse: true,
        link: "https://porto-bagas-ten.vercel.app/",
        git: "https://github.com/jainggit/Porto-Bagas"
    },
];

const Projects = () => {
    return <>
        <section id="project" className="py-20 mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-10 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-black">
                    My Projects
                    <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-2" />
                </h2>
                <p className="text-base text-gray-400">Here are the projects I have worked on, I hope you are interested.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-10">
                {projects.map((project, index) => (
                <div key={index} className="w-full">
                    <div className="flex flex-col md:flex-row bg-white p-6 border-2 border-orange-100 rounded-lg shadow-lg w-full max-w-6xl mx-auto">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-lg w-full md:max-w-md h-auto mb-4 md:mb-0 md:mr-6 border-b-2 md:border-b-0 md:border-r-2 border-orange-100"
                        />
                        <div className="flex flex-col gap-5 mt-4 md:mt-0">
                            <h4 className="text-2xl font-semibold text-black">{project.title}</h4>
                            <p className="text-base text-justify text-black ">{project.description}</p>
                            <div className="flex flex-wrap gap-4">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition text-sm">
                                        View Project
                                    </button>
                                </a>
                                <a href={project.git} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-orange-400 text-white px-4 py-2 rounded-xl hover:bg-orange-500 transition text-sm">
                                        Repository
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
    ))}
            </div>
        </section>

        </>;
};



export default Projects;