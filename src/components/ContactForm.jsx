import React, { use, useEffect, useState } from "react";

const ContactForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        const handleOpenContactForm = () => {
            setShowForm(true);
        };
        window.addEventListener("openContactForm", handleOpenContactForm);
        return () => window.removeEventListener("openContactForm", handleOpenContactForm);
    }, []);

    const openForm = () => setShowForm(true);
    const closeForm = () => {
        setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
        });
        setShowForm(false);
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email, message } = formData;

        const text = `New Contact Form Submission:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
        const whatsappLink = `https://wa.me/919421790402?text=${encodeURIComponent(text)}`;

        window.open(whatsappLink, "_blank");
        closeForm();
    };

    return (
        <div id="contactForm" className="relative z-50">
            {/* Button to Open Form (optional if triggered via Navbar) */}
            {/* <button onClick={openForm} className="px-4 py-2 bg-[#CDB7A7] rounded shadow">Contact</button> */}

            {showForm && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50"
                    onClick={closeForm}
                >
                    <div
                        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeForm}
                            className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:text-red-600"
                        >
                            &times;
                        </button>

                        <h2 className="text-xl font-bold text-center mb-4">Contact Us</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={4}
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-[#CDB7A7] text-[#252926] font-semibold py-2 rounded hover:bg-[#bfa892]"
                            >
                                Send via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
