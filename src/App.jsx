import './index.css'
import Header  from "./Components/header"
import Home from "./Pages/home"
import Skill from "./Pages/skill"
import Project from "./Pages/project"
import About from "./Pages/about"
import Contact from "./Pages/contact"
import Footer from "./Components/footer" 

export default function Portfolio() {
    return <>
        <div className="relative bg-white pb-10">
            <div className="absolute inset-y-0 left-10 w-20 bg-gradient-to-l from-gray-200 z-10 hidden xl:block"></div>
            <div className="absolute inset-y-0 right-10 w-20 bg-gradient-to-r from-gray-200 z-10 hidden xl:block"></div>
            <div className="relative z-20">
                <Header />
                <Home />
                <Skill />
                <About />
                <Project />
                <Contact />
                <Footer />
            </div>
        </div>
    </>; 
}


