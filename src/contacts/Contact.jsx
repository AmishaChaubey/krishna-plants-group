import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Faq() {
    const [openItem, setOpenItem] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const toggleItem = (index) => {
        setOpenItem(prev => prev === index ? null : index);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://vrindalandscaping.com/send_contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus({ type: 'success', message: result.message });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                setSubmitStatus({ type: 'error', message: result.message });
            }
        } catch (error) {
            setSubmitStatus({ 
                type: 'error', 
                message: 'Network error. Please check your connection and try again.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const accordionItems = [
        {
            title: "What are your customer service hours?",
            content: "Our customer service is available Monday to Friday, from 9 AM to 6 PM. Feel free to reach out during these hours for any inquiries!"
        },
        {
            title: "How can I contact you?",
            content: [
                "You can contact us via the following methods:",
                "Phone: 7310884215",
                "Email: krishnaplanthouse@gmail.com",
                "Social Media: Follow us on [Facebook, Instagram, etc. links] for updates and support."
            ]
        },
        {
            title: "Do you offer plant care advice?",
            content: "Yes! Our team is here to provide guidance on plant care. Don't hesitate to contact us with any questions or concerns about your plants."
        },
        {
            title: "Can I visit your store?",
            content: "Absolutely! You can visit our store located at Sikandapur, DLF Phase 1, Sector 26, Gurugram, Haryana 122002. We're open for in-store shopping during our regular business hours."
        },
        {
            title: "What should I do if I have an issue with my order?",
            content: "If you encounter any issues with your order, please reach out to our customer service team. Provide your order number and details of the issue, and we will respond within 24 hours to assist you."
        }
    ];

    return (
        <div className="bg-gradient-to-br from-white to-[#f1f5f9] min-h-screen py-10">
            <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24'>
                <motion.div 
                    className='grid grid-cols-1 xl:grid-cols-2 gap-10'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >

                    {/* Contact Form Section */}
                    <motion.div 
                        className="order-2 xl:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <h1 className="text-[#004225] font-bold text-3xl mb-6 text-center xl:text-left">Contact Us</h1>
                            
                            {/* Status Messages */}
                            {submitStatus && (
                                <div className={`mb-4 p-4 rounded-lg ${
                                    submitStatus.type === 'success' 
                                        ? 'bg-green-100 text-green-800 border border-green-200' 
                                        : 'bg-red-100 text-red-800 border border-red-200'
                                }`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#004225] focus:outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="Phone" className="block text-sm font-semibold text-gray-600 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        id="Phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#004225] focus:outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="+91XXXXXXXXXX"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#004225] focus:outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#004225] focus:outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#004225] hover:bg-[#003018] text-white font-semibold py-3 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* FAQ Section */}
                    <motion.div 
                        className="order-1 xl:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <h1 className="text-[#004225] font-bold text-3xl mb-6 text-center xl:text-left">FAQs</h1>
                            <div className="space-y-4">
                                {accordionItems.map((item, index) => (
                                    <div key={index} className="bg-[#f9fafb] border border-gray-200 rounded-lg overflow-hidden transition hover:shadow-md">
                                        <button
                                            onClick={() => toggleItem(index)}
                                            className="flex justify-between items-center w-full text-left px-4 py-4 sm:px-6 font-medium text-gray-800 hover:text-[#004225] focus:outline-none"
                                        >
                                            <span className="text-base sm:text-lg">{item.title}</span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openItem === index ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {openItem === index && (
                                                <motion.div
                                                    key="content"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="px-4 sm:px-6 text-gray-600 text-sm overflow-hidden"
                                                >
                                                    {Array.isArray(item.content) ? (
                                                        <div className="space-y-2 py-3">
                                                            <p>{item.content[0]}</p>
                                                            <ul className="list-disc list-inside space-y-1">
                                                                <li>Phone: 7310884215</li>
                                                                <li>Email: krishnaplanthouse@gmail.com</li>
                                                                <li>Social Media: Follow us on [Facebook, Instagram, etc. links] for updates and support.</li>
                                                            </ul>
                                                        </div>
                                                    ) : (
                                                        <p className="py-3">{item.content}</p>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}

export default Faq;