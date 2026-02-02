import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
    // We'll separate the projects manually to fit the specific Bento Layout
    const project1 = {
        title: "DataPulse",
        description: "A high-performance web application built with React and Node.js for real-time data visualization.",
        tech: ["Next.js", "Express.js", "PostgreSQL"],
        links: { github: "https://github.com/varunudata/DataPulse.git", live: "https://datapulse.varunudata.dev/" },
        image: "https://res.cloudinary.com/dkdidynja/image/upload/v1770012568/data_pulse_home_ov5fda.png"
    };

    const project2 = {
        title: "A6News",
        description: "A modern full-stack news platform delivering fast, reliable, and personalized updates with a clean, user-friendly interface.",
        tech: ["Next.js", "Express.js", "PostgreSQL"],
        links: { github: "https://github.com/varunudata/a6news_frontend.git", live: "https://a6news.varunudata.dev/" },
        image: "https://res.cloudinary.com/dkdidynja/image/upload/v1770022473/A6News_hero_image_imva4d.png"
    };

    const project3 = {
        title: "Pixify",
        description: "An AI-powered web platform that generates images from text prompts quickly and effortlessly.",
        tech: ["React.js", "Node.js", "MongoDB"],
        links: { github: "https://github.com/varunudata/pixify.git", live: "https://pixify.varunudata.dev/" },
        image: "https://res.cloudinary.com/dkdidynja/image/upload/v1770022140/Pixify_hero_image_fxb2hr.png"
    };

    const project4 = {
        title: "Finsta",
        description: "Finsta is a lightweight interest calculator app for quickly computing simple financial interest values.",
        tech: ["React.js", "CSS"],
        links: { github: "https://github.com/varunudata/finsta.git", live: "https://finsta.varunudata.dev/" },
        image: "https://res.cloudinary.com/dkdidynja/image/upload/v1770040004/Screenshot_2026-02-02_at_7.16.34_PM_wablhu.png"
    };

    const Card = ({ project, className, heightClass = "h-full" }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`group relative ${heightClass} w-full rounded-2xl bg-[#030503] border border-emerald-500/10 overflow-hidden flex flex-col p-8 hover:border-emerald-500/30 transition-colors ${className}`}
        >
            {/* Background Image */}
            {project.image && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-50 blur-0 group-hover:opacity-20 group-hover:blur-sm group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Gradient Overlay - darker by default to blend image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030503] via-[#030503]/40 to-transparent group-hover:via-[#030503]/80 group-hover:to-[#030503]/40 transition-all duration-500" />
                </div>
            )}

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            {/* Top Right Links - Always visible */}
            <div className="absolute top-6 right-6 flex gap-4 z-20">
                <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md"
                    title="View Code"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md flex items-center justify-center"
                    title="Live Demo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FiArrowUpRight className="text-xl" />
                    </motion.div>
                </motion.a>
            </div>

            {/* Content Pushed to Bottom */}
            <div className="relative z-10 flex flex-col h-full justify-end cursor-pointer">
                {/* Title - Always visible but moves up on hover */}
                {/* Added layout to avoid jerky jumps if possible, but CSS is safer here for pure hover */}
                <h3 className="text-xl font-bold text-emerald-400 mb-2 tracking-tight group-hover:text-emerald-300 transition-colors duration-300 shadow-black drop-shadow-md">
                    {project.title}
                </h3>

                {/* Hidden Content Container - Using tight max-height for better time mapping */}
                <div className="max-h-0 group-hover:max-h-[160px] overflow-hidden transition-[max-height] duration-500 group-hover:duration-[800ms] ease-in-out cursor-pointer">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-200 ease-out pb-2">
                        <p className="text-zinc-300 text-sm leading-relaxed mb-4 max-w-sm font-medium">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs font-medium text-emerald-400/90 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div name="projects" className="w-full py-32 bg-background relative mb-[20vh]">

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px w-10 bg-emerald-500"></div>
                        <span className="text-emerald-500 font-bold tracking-[0.2em] text-sm uppercase">Work</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-emerald-100/80 text-lg max-w-xl leading-relaxed">
                        A selection of things I've built, exploring different technologies and design patterns.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[600px]">

                    {/* Left Column: Big Feature Card */}
                    <div className="w-full h-[400px] lg:h-full">
                        <Card project={project1} heightClass="h-full" />
                    </div>

                    {/* Right Column: Stack */}
                    <div className="flex flex-col gap-6 h-full">

                        {/* Top Right: Wide Row */}
                        <div className="h-1/2">
                            <Card project={project2} />
                        </div>

                        {/* Bottom Right: Split Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-1/2">
                            <Card project={project3} />
                            <Card project={project4} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
