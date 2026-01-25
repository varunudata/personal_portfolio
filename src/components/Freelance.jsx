import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiExternalLink, FiMonitor, FiLayers, FiDatabase } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Freelance = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom websites built from scratch using React, Next.js, and Tailwind CSS. Fast, SEO-optimized, and fully responsive.",
            icon: <FiMonitor />
        },
        {
            title: "UI/UX Design",
            description: "Modern, user-centric designs that look great and feel intuitive. High-fidelity mockups and interactive prototypes.",
            icon: <FiLayers />
        },
        {
            title: "Full Stack Solutions",
            description: "End-to-end application development with secure backends, databases, and dynamic frontends.",
            icon: <FiDatabase />
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
        <div name="freelance" className="w-full py-32 bg-background relative overflow-hidden">

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <div className="mb-20">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-px w-8 bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase">Services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Freelance & <br /> <span className="text-white/50">Consulting.</span>
                    </h2>
                    <p className="text-textSecondary text-lg max-w-2xl font-light leading-relaxed">
                        Helping businesses and individuals bring their ideas to life with professional grade software solutions.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-primary/50 transition-colors duration-300 group"
                        >
                            <div className="text-3xl text-primary mb-6">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-textSecondary leading-relaxed text-sm">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Freelance Projects Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-white">Recent Deliverables</h3>
                        <div className="h-px flex-grow bg-white/10 ml-6 hidden sm:block"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="h-48 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-500 relative overflow-hidden">
                                    {/* Aesthetic Placeholder Pattern */}
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-900 to-black"></div>
                                    <span className="text-white/30 font-mono text-xs z-10">[ Project Preview ]</span>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{project.title}</h4>
                                    </div>
                                    <span className="text-xs font-mono text-primary/80 mb-3 block">{project.category}</span>
                                    <p className="text-textSecondary text-sm mb-6 line-clamp-2 flex-grow">
                                        {project.description}
                                    </p>
                                    <a href={project.link} className="inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors mt-auto group/link">
                                        View Project <FiExternalLink className="ml-2 text-lg group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}

                        {/* Card to add new project (Instructional) */}
                        <Link to="contact" smooth={true} duration={500} className="h-full">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="border border-dashed border-white/20 rounded-lg p-1 flex flex-col justify-center items-center text-center text-textSecondary hover:border-primary/50 hover:text-primary transition-all cursor-pointer h-full min-h-[100px]"
                            >
                                <p className="font-medium text-lg">+ Your Next Project</p>
                                <p className="text-sm mt-2 opacity-60">Open for new opportunities</p>
                            </motion.div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Freelance;