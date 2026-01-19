import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div name="contact" className="w-full py-24 bg-background text-textPrimary flex justify-center items-center p-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent"></div>

            <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                action=""
                className="flex flex-col max-w-[800px] w-full bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative z-10"
            >
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                        Contact
                    </p>
                    <p className="text-textSecondary text-lg">
                        Submit the form below or shoot me an email - <span className="text-primary">email@example.com</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <input
                        className="bg-background/50 border border-white/10 p-4 text-white rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-500"
                        type="text"
                        placeholder="Name"
                        name="name"
                    />
                    <input
                        className="bg-background/50 border border-white/10 p-4 text-white rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-500"
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                </div>

                <textarea
                    className="bg-background/50 border border-white/10 p-4 text-white rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-500 mb-8"
                    name="message"
                    rows="6"
                    placeholder="Message"
                ></textarea>

                <button className="text-white bg-gradient-to-r from-primary to-secondary px-8 py-4 mx-auto flex items-center rounded-xl font-bold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300">
                    Let's Collaborate
                </button>
            </motion.form>
        </div>
    );
};

export default Contact;
