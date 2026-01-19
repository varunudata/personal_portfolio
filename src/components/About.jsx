import { motion } from 'framer-motion';

const About = () => {
    return (
        <div name="about" className="w-full py-24 bg-background text-textPrimary relative overflow-hidden">
            {/* Background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-6xl mx-auto px-4 w-full h-full z-10 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-right md:pr-8 border-r-4 border-primary/50 pr-4"
                    >
                        <p className="text-5xl sm:text-7xl font-bold bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                            About
                        </p>
                        <p className="text-xl mt-4 font-light text-primary">
                            Who I am & What I do
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-2xl font-bold mb-6 text-white">
                            I'm Varun, a developer passionate about crafting digital experiences.
                        </p>
                        <p className="text-textSecondary text-lg leading-relaxed mb-6">
                            I specialize in building software for clients, ranging from individuals and small businesses to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
                        </p>
                        <p className="text-textSecondary text-lg leading-relaxed">
                            I enjoy turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you can find me exploring new tech, reading, or gaming.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
