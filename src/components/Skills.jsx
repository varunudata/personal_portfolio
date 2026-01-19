import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
        "MongoDB", "TailwindCSS", "PostgreSQL", "Python", "Git", "Framer Motion",
        "Next.js", "TypeScript", "Redux", "GraphQL"
    ];

    return (
        <div name="skills" className="w-full py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center w-full h-full text-center">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
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
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-surface/50 backdrop-blur-md border border-white/5 rounded-xl p-4 shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default"
                        >
                            <p className="text-textPrimary font-medium">{skill}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Skills;
