import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';

const Contact = () => {
    return (
        <div name="contact" className="w-full min-h-screen bg-background flex justify-center items-center p-4 py-24 relative overflow-hidden">

            {/* Abstract Background Elements */}
            <div className="absolute top-1/4 -right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 z-10"
            >

                {/* Left Side: Contact Info */}
                <div className="flex flex-col justify-center space-y-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-6"
                        >
                            Let's create something <span className="text-primary italic">extraordinary</span> together.
                        </motion.h2>
                        <p className="text-textSecondary text-lg max-w-md leading-relaxed">
                            Have an idea? A project? or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <ContactItem icon={<FiMail />} title="Email" content="hello@varunudata.com" />
                        <ContactItem icon={<FiMapPin />} title="Location" content="Remote / Worldwide" />
                    </div>

                    <div className="flex gap-4 pt-4">
                        <SocialBtn icon={<FiGithub />} href="https://github.com" />
                        <SocialBtn icon={<FiLinkedin />} href="https://linkedin.com" />
                        <SocialBtn icon={<FiTwitter />} href="https://twitter.com" />
                    </div>
                </div>

                {/* Right Side: The Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-[#121212] border border-[#2a2a2a] p-8 md:p-10 rounded-3xl shadow-2xl relative"
                >
                    {/* Decorative Corner Gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-3xl pointer-events-none" />

                    <form action="" className="flex flex-col gap-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputGroup label="Name" type="text" placeholder="Your Name" />
                            <InputGroup label="Email" type="email" placeholder="Your Email" />
                        </div>

                        <InputGroup label="Subject" type="text" placeholder="Project Inquiry" />

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-textSecondary ml-1">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Tell me about your project..."
                                className="bg-background/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all resize-none placeholder:text-white/20"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary p-4 rounded-xl text-white font-bold text-lg mt-2 overflow-hidden"
                        >
                            <span className="relative z-10">Send Message</span>
                            <FiSend className="relative z-10 group-hover:translate-x-1 transition-transform" />

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </form>
                </motion.div>

            </motion.div>
        </div>
    );
};

// Reusable Components
const InputGroup = ({ label, type, placeholder }) => (
    <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-textSecondary ml-1">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="bg-background/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all w-full placeholder:text-white/20"
        />
    </div>
);

const ContactItem = ({ icon, title, content }) => (
    <div className="flex items-center gap-4 group cursor-pointer">
        <div className="p-3 bg-surface border border-white/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <div>
            <p className="text-sm text-textSecondary">{title}</p>
            <p className="text-white font-medium">{content}</p>
        </div>
    </div>
);

const SocialBtn = ({ icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface border border-white/5 rounded-full text-textSecondary hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
        <span className="text-xl">{icon}</span>
    </a>
)

export default Contact;

