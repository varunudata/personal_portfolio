import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 90%", "end 50%"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const experiences = [
        {
            role: "Full Stack Developer Intern",
            company: "Tech Startup",
            duration: "January 2025 - Present",
            description: "Working on building scalable web applications and optimizing user experiences. Collaborating with cross-functional teams to deliver high-quality features.",
            current: true,
        },
        {
            role: "Web Development Freelancer",
            company: "Self-Employed",
            duration: "2023 - 2024",
            description: "Delivered custom website solutions for various small business clients. Managed full project lifecycles from requirement gathering to deployment.",
            current: false,
        },
        {
            role: "Computer Science Student",
            company: "University",
            duration: "2022 - 2026",
            description: "Focusing on Algorithms, Data Structures, and Web Technologies. Lead Developer for the university coding club.",
            current: false,
        }
    ];

    return (
        <div name="experience" className="w-full py-24 text-textPrimary">
            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
                    >
                        Experience
                    </motion.h2>
                </div>

                <div ref={containerRef} className="relative ml-4 md:ml-10 space-y-12">
                    {/* Animated Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 h-full"></div>
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-primary to-secondary h-full"
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot - Animate when in view */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, type: "spring" }}
                                className={`absolute -left-[5px] top-6 w-3 h-3 rounded-full border border-background z-10 ${exp.current ? 'bg-primary shadow-[0_0_15px_rgba(99,102,241,0.8)]' : 'bg-surface border-gray-600'}`}
                            >
                            </motion.div>

                            {/* Card */}
                            <div className="bg-surface/40 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-surface/60 transition-colors duration-300 group">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                                    <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">{exp.duration}</span>
                                </div>
                                <h4 className="text-lg text-textSecondary mb-4 font-medium">{exp.company}</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
