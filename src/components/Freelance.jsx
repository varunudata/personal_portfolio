import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Freelance = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom websites built from scratch using React, Next.js, and Tailwind CSS. Fast, SEO-optimized, and fully responsive.",
        },
        {
            title: "UI/UX Design",
            description: "Modern, user-centric designs that look great and feel intuitive. High-fidelity mockups and interactive prototypes.",
        },
        {
            title: "Full Stack Solutions",
            description: "End-to-end application development with secure backends, databases, and dynamic frontends.",
        }
    ];

    const projects = [
        {
            title: "Local Coffee Shop Site",
            category: "Web Design & Dev",
            description: "A warm, inviting website for a local cafe including an online menu and booking system.",
            link: "#"
        },
        {
            title: "Real Estate Portfolio",
            category: "Web Development",
            description: "Property listing platform with filtering, image galleries, and contact forms for a real estate agent.",
            link: "#"
        },
        {
            title: "Fitness Coach Landing Page",
            category: "Landing Page",
            description: "High-conversion landing page for a personal trainer with integrated payment gateway.",
            link: "#"
        }
    ];

    return (
        <div name="freelance" className="w-full py-24 bg-background text-textPrimary relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>


            <div className="max-w-6xl mx-auto px-4 w-full h-full relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
                    >
                        Freelance Services
                    </motion.h2>
                    <p className="text-textSecondary text-lg max-w-2xl mx-auto">
                        Helping businesses and individuals bring their ideas to life.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Freelance Projects Section */}
                <div className="mb-12">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-8 border-l-4 border-secondary pl-4"
                    >
                        Recent Deliverables
                    </motion.h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="h-48 bg-gradient-to-br from-surface to-gray-800 flex items-center justify-center group-hover:from-gray-800 group-hover:to-surface transition-colors duration-500">
                                    <span className="text-gray-600 font-mono text-sm self-center">[ Project Screenshot ]</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h4>
                                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{project.category}</span>
                                    </div>
                                    <p className="text-textSecondary text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <a href={project.link} className="inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors">
                                        View Project <FaExternalLinkAlt className="ml-2 text-xs" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}

                        {/* Card to add new project (Instructional) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="border-2 border-dashed border-white/10 rounded-xl p-6 flex flex-col justify-center items-center text-center text-gray-500 hover:border-white/30 hover:text-gray-300 transition-all cursor-pointer"
                        >
                            <p className="font-medium">+ Your Next Project</p>
                            <p className="text-xs mt-2">Open for new opportunities</p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Freelance;
