import "../index.css"
import Social from "../Components/social"
import foto from "../images/bagas1.jpg"
const Home = () => {
    return <>
        <section id="home" className="grid grid-cols-1 md:grid-cols-2 items-center px-4 py-20 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 mt-20 order-2 md:order-1">
                <div className="rounded-full border-4 border-orange-500 overflow-hidden w-60">
                    <img src={foto} alt="Profile" className="object-cover w-full h-full" />
                </div>
                <Social/>
            </div> 
            <div className="space-y-3 mt-10 text-center md:text-left order-1 md:order-2">
                <h3 className=" text-orange-500 text-2xl font-bold">Hi, I am</h3>
                <h1 className="text-4xl font-bold text-orange-500">Bagas Arjuna Gunawan</h1>
                <h2 className="text-5xl font-extrabold text-black">Front End Developer</h2>
                <h2 className="text-4xl font-bold text-black">
                    Bekasi, Indonesia
                </h2> 
            </div> 
        </section>
    </>
}

export default Home;