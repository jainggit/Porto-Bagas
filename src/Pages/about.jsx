import "../index.css";
const About = () => {
    const images = [
        "/sertifikat1.jpg",
        "/sertifikat2.jpg",
    ];
    return <>
        <section id="about" className="py-16 px-6 max-w-5xl mt-20 mx-auto text-gray-800">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">About Me</h2>
                <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-2" />
            </div>
            <div className="text-lg leading-relaxed space-y-6 text-justify">
                <p>
                Hi there! I'm <strong>Bagas Arjuna Gunawan</strong>, a passionate junior front-end developer
                with a strong interest in building clean, responsive, and user-friendly web interfaces.
                </p>
                <p>
                I’m continuously learning and growing my skills, especially in React, Tailwind CSS, and modern JavaScript.
                With a keen eye for detail and a love for intuitive design, I enjoy turning ideas into real, functional websites. 
                My goal is to create web experiences that not only look great but also provide real value to users.
                </p>
                <p>
                Recently, I completed an intensive <strong>Full Stack Developer Bootcamp</strong> with a specialization in Front-End
                Development at <strong>Harisenin.com</strong>, where I earned a <strong>GPA of 4.00</strong> and mastered
                technologies such as React, CRUD, API Integration, and State Management.
                </p>
            </div>

            <div className="py-16 px-4 max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Certificate</h2>
                    <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-2" />
                </div>
                <div className="border rounded-lg shadow-lg overflow-y-scroll h-[600px] p-4">
                    <div className="flex flex-col gap-6">
                        {images.map((src, i) => (
                        <img
                        key={i}
                        src={src}
                        alt={`Sertifikat ${i + 1}`}
                        className="w-full rounded-lg"
                        />
                    ))}
                    </div>
                </div>
            </div>    
        </section>
    </>;
};

export default About;
