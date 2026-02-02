import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiPostgresql, SiFramer, SiNextdotjs, SiTypescript } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "Python", icon: <FaPython className="text-yellow-300" /> },
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "Framer", icon: <SiFramer className="text-white" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> }
    ];

    return (
        <div name="skills" className="w-full py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center w-full h-full text-center">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold inline-block bg-gradient-to-r from-primary to-emerald-100 bg-clip-text text-transparent mb-4"
                    >
                        Tech Stack
                    </motion.h2>
                    <p className="text-textSecondary text-lg max-w-2xl mx-auto">
                        Technologies I use to build scalable and performant applications.
                    </p>
                </div>

                {/* Grid Layout for Skills */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="relative group bg-surface/50 backdrop-blur-md border border-white/5 rounded-lg p-2 shadow-lg cursor-pointer overflow-hidden flex flex-col items-center justify-center min-h-[80px]" // Increased height slightly to accommodate icon
                        >
                            {/* Corner Borders - Reveal on Hover */}
                            <span className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-tl-sm group-hover:top-1 group-hover:left-1" />
                            <span className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-tr-sm group-hover:top-1 group-hover:right-1" />
                            <span className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-bl-sm group-hover:bottom-1 group-hover:left-1" />
                            <span className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-br-sm group-hover:bottom-1 group-hover:right-1" />

                            {/* Icon (Visible by Default, Hidden on Hover) */}
                            <div className="absolute inset-0 flex items-center justify-center text-3xl group-hover:opacity-0 transition-opacity duration-300">
                                {skill.icon}
                            </div>

                            {/* Text (Hidden by Default, Visible on Hover) */}
                            <p className="relative z-10 text-zinc-400 text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:text-emerald-400 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Skills;
