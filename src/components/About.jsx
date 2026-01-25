import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCode, FiCpu, FiGlobe } from 'react-icons/fi';

const About = () => {
    return (
        <div name="about" className="w-full py-32 bg-background relative overflow-hidden">

            {/* Subtle Grid Background - Consistent with Contact */}


            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-primary font-bold tracking-widest text-xs uppercase">About Me</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
                            Crafting digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">experiences.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-textSecondary font-light leading-relaxed">
                            <p>
                                I'm Varun, a developer passionate about building software that matters. I specialize in turning complex problems into simple, beautiful, and intuitive interfaces.
                            </p>
                            <p>
                                With a focus on performance and cleaner code, I help individuals and businesses establish a strong digital presence. Whether it's a website, a web application, or a complex system, I bring a technical edge to every project.
                            </p>
                        </div>

                        <div className="mt-10">
                            <a href="#" className="inline-flex items-center gap-2 text-white border-b border-primary pb-1 hover:text-primary transition-colors group">
                                Read more about my journey
                                <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Stats & Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <StatCard
                            icon={<FiCode />}
                            value="3+"
                            label="Years Experience"
                            description="Building & shipping production code."
                        />
                        <StatCard
                            icon={<FiGlobe />}
                            value="50+"
                            label="Projects Completed"
                            description="From simple sites to complex apps."
                        />
                        <StatCard
                            icon={<FiCpu />}
                            value="Tech"
                            label="Modern Stack"
                            description="React, Node, Next.js & more."
                        />

                        {/* Featured 'Approach' Card */}
                        <div className="p-8 bg-primary/10 border border-primary/20 rounded-2xl sm:col-span-2 flex flex-col justify-center">
                            <p className="text-primary font-bold uppercase tracking-wider text-xs mb-2">My Approach</p>
                            <p className="text-white text-xl font-medium">
                                "Code is poetry. I write clean, maintainable, and efficient solutions that stand the test of time."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, value, label, description }) => (
    <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group">
        <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
        <p className="text-sm font-bold text-white/80 uppercase tracking-wide mb-2">{label}</p>
        <p className="text-xs text-textSecondary leading-relaxed">{description}</p>
    </div>
);

export default About;
