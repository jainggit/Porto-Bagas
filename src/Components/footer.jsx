import Social from "./social";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return <>
        <footer className="border-t border-gray-200 bg-white py-8 shadow-md rounded-xl mt-10 mx-auto max-w-3xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-700 text-sm">
                © {currentYear} Bagas Arjuna. All Rights Reserved.
            </p>
            <div className="flex justify-center md:justify-end w-full md:w-auto">
                <Social />
            </div>
        </footer>
    </>;
};

export default Footer;
