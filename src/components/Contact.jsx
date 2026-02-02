import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            from_name: form.name,
            to_name: "Varun Udata",
            from_email: form.email,
            reply_to: form.email,
            subject: form.subject,
            message: form.message,
            name: form.name,
            email: form.email,
        };

        emailjs.send(
            'service_rq3g1qp',
            'template_035tddv',
            templateParams,
            'lfSn-ciD0dvZSar3I'
        )
            .then(() => {
                setLoading(false);
                alert('Thank you. I will get back to you as soon as possible.');
                setForm({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }, (error) => {
                setLoading(false);
                console.error('EmailJS Error:', error);
                alert('Failed to send message. Please check the console for details.');
            });
    };

    return (
        <div name="contact" className="w-full min-h-screen bg-background flex justify-center items-center p-4 py-24 relative overflow-hidden">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-between"
                >
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-primary font-bold tracking-widest text-xs uppercase">Get in touch</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                Let's build something <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">iconic.</span>
                            </h2>
                        </div>

                        <p className="text-textSecondary text-lg max-w-md leading-relaxed">
                            Ready to take your digital presence to the next level? I'm currently available for freelance projects and open to new opportunities.
                        </p>
                    </div>
                    <br />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:mt-0">
                        <InfoCard
                            icon={<FiMail className="text-xl" />}
                            label="Email"
                            value="varunudatagmail.com"
                            href="mailto:varunudata@gmail.com"
                        />
                        <InfoCard
                            icon={<FiMapPin className="text-xl" />}
                            label="Location"
                            value="Remote / Worldwide"
                        />
                    </div>

                    <div className="flex gap-4 mt-8 lg:mt-12">
                        <SocialButton href="https://github.com/varunudata" icon={<FiGithub />} label="GitHub" />
                        <SocialButton href="https://www.linkedin.com/in/varunudata/" icon={<FiLinkedin />} label="LinkedIn" />
                        <SocialButton href="https://x.com/udatavarun" icon={<FiTwitter />} label="Twitter" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="bg-[#121212] border border-white/5 p-8 md:p-10 rounded-2xl shadow-2xl space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormInput
                                label="Name"
                                placeholder="Your Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                            <FormInput
                                label="Email"
                                placeholder="Your Email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <FormInput
                            label="Subject"
                            placeholder="Project Inquiry"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                        />

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-textSecondary uppercase tracking-wider">Message</label>
                            <textarea
                                rows="5"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all resize-none placeholder:text-white/20"
                                placeholder="Tell me more about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full group bg-white text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Send Message"}
                            {!loading && <FiArrowUpRight className="text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
};

const FormInput = ({ label, type = "text", placeholder, name, value, onChange, required }) => (
    <div className="space-y-2">
        <label className="text-sm font-semibold text-textSecondary uppercase tracking-wider">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-white/20"
        />
    </div>
);

const InfoCard = ({ icon, label, value, href }) => (
    <div className={`p-6 bg-white/5 border border-white/5 rounded-xl flex flex-col gap-4 ${href ? 'cursor-pointer hover:border-primary/50 transition-colors group' : ''}`}>
        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-primary">
            {icon}
        </div>
        <div>
            <p className="text-textSecondary text-xs uppercase tracking-wider mb-1">{label}</p>
            {href ? (
                <a href={href} className="text-white font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                    {value}
                </a>
            ) : (
                <p className="text-white font-medium">{value}</p>
            )}
        </div>
    </div>
);

const SocialButton = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/5 rounded-lg text-textSecondary hover:text-white hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
    >
        {icon}
        <span className="font-medium text-sm">{label}</span>
    </a>
);

export default Contact; 