import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Project Alpha",
            description: "A high-performance web application built with React and Node.js.",
            tech: ["React", "Node.js", "MongoDB"],
            grid: "col-span-1 md:col-span-2 row-span-2",
            image: "linear-gradient(to right bottom, #111827, #1f2937)", // Placeholder gradient
        },
        {
            title: "Beta App",
            description: "Mobile-first responsive design for e-commerce.",
            tech: ["Next.js", "Tailwind"],
            grid: "col-span-1 row-span-1",
            image: "linear-gradient(to right bottom, #3730a3, #1e1b4b)",
        },
        {
            title: "Gamma Dashboard",
            description: "Real-time analytics dashboard with D3.js.",
            tech: ["Vue", "D3.js", "Firebase"],
            grid: "col-span-1 row-span-1",
            image: "linear-gradient(to right bottom, #111827, #0f172a)",
        },
        {
            title: "Delta Tools",
            description: "CLI tool for developer productivity.",
            tech: ["Rust", "Clap"],
            grid: "col-span-1 md:col-span-2 row-span-1",
            image: "linear-gradient(to right bottom, #4c1d95, #2e1065)",
        },
    ];

    return (
        <div name="projects" className="w-full py-20 text-textPrimary relative">
            <div className="max-w-6xl mx-auto px-4 w-full h-full">
                <div className="pb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <p className="text-textSecondary text-lg max-w-2xl mx-auto">
                        A selection of things I've built, exploring different technologies and design patterns.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            viewport={{ once: true }}
                            className={`relative group rounded-3xl overflow-hidden shadow-lg border border-white/5 ${project.grid} bg-surface`}
                        >
                            {/* Background Image/Gradient */}
                            <div
                                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ background: project.image }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 z-10" />

                            {/* Content */}
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-primary">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        <a href="#" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
                                            Demo <FaExternalLinkAlt className="text-xs" />
                                        </a>
                                        <a href="#" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
                                            Code <FaGithub className="text-xs" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
