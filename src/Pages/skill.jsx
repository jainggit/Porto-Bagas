import "../index.css"
import React from "../images/React.png"
import ReactB from "../images/React Bootstrap.png"
import Figma from "../images/Figma.png"
import Javascript from "../images/JavaScript.png"
import Vite from "../images/Vite.js.png"
import Tailwind from "../images/Tailwind CSS.png"
const Skill = () => {
    return <>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
            <img src={React} alt="react.logo" className="w-16 sm:w-16 h-auto"/>
            <img src={ReactB} alt="reactbootstrap.logo" className="w-16 sm:w-16 h-auto"/>
            <img src={Figma} alt="figma.logo" className="w-16 sm:w-16 h-auto"/>
            <img src={Javascript} alt="js.logo" className="w-16 sm:w-16 h-auto"/>
            <img src={Vite} alt="vite.logo" className="w-16 sm:w-16 h-auto"/>
            <img src={Tailwind} alt="tailwind.logo" className="w-16 sm:w-16 h-auto"/>
        </div>
    </>

}

export default Skill;