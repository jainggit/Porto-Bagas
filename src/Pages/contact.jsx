import "../index.css"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si"
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_6sz01z2",
            "template_rlp1sqf",
            formRef.current,
            "QMe8pt0XaIr-CBSaw"       
        )
        .then(
                () => {
                    toast.success("Message sent successfully!");
                    e.target.reset();
                },
                () => {
                    toast.error("Failed to send message. Please try again.");
                }
            );
    };

    return <>
        <section id="contact" className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 scroll-mt-24">
            <div>
                <h4 className="text-3xl font-bold mb-4 relative z-10 text-black">Let's Collaborate!</h4>
                <p className="mb-6 text-gray-700">
                    If you have a general or project enquiry, please drop me an email or fill the form.
                </p>
                <div className="space-y-4 text-gray-800">
                    <div className="flex items-center gap-3">
                        <SiGmail className="text-red-300"/><span>bagasarjuna89@gmail.com</span>
                    </div>
                    <a href="https://wa.me/qr/Y7CVGLAOGLRQC1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                        <FaWhatsapp className="text-xl" />
                        <span>+62 857-1423-4773</span>
                    </a>
                </div>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                    <label className="block font-semibold">Name</label>
                    <input
                        type="text"
                        name="name" 
                        required
                        className="w-full p-2 border rounded"
                        placeholder="Bagas"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-2 border rounded"
                        placeholder="bagas@example.com"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Message</label>
                    <textarea
                        name="message"
                        required
                        className="w-full p-2 border rounded h-28"
                        placeholder="Tell me more about your idea or question"
                    />
                </div>
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition">
                    Send ✉️
                </button>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            </form>
        </section>
    </>;
};

export default Contact;
