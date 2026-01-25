import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
    const projects = [
        {
            title: "Project Alpha",
            description: "A high-performance web application built with React and Node.js.",
            tech: ["React", "Node.js", "MongoDB"],
            grid: "col-span-1 md:col-span-2 row-span-2",
        },
        {
            title: "Beta App",
            description: "Mobile-first responsive design for e-commerce.",
            tech: ["Next.js", "Tailwind"],
            grid: "col-span-1 row-span-1",

        },
        {
            title: "Gamma Dashboard",
            description: "Real-time analytics dashboard with D3.js.",
            tech: ["Vue", "D3.js", "Firebase"],
            grid: "col-span-1 row-span-1",
        },
        {
            title: "Delta Tools",
            description: "CLI tool for developer productivity.",
            tech: ["Rust", "Clap"],
            grid: "col-span-1 md:col-span-2 row-span-1",
        },
    ];

    return (
        <div name="projects" className="w-full py-32 bg-background relative overflow-hidden">

            {/* Subtle Grid Background */}


            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-px w-8 bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase">Work</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-textSecondary text-lg max-w-2xl font-light leading-relaxed">
                        A selection of things I've built, exploring different technologies and design patterns.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-primary/50 transition-colors duration-300 ${project.grid} flex flex-col justify-between p-6`}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors">
                                        <FiArrowUpRight className="text-lg" />
                                    </a>
                                </div>
                                <p className="text-textSecondary text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-medium text-white/80 border border-white/10 px-3 py-1 rounded-full bg-white/5">
                                        {t}
                                    </span>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
