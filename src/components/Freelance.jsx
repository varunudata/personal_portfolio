import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMonitor, FiLayers, FiDatabase, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-scroll';

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
        title: "Press Club Amaravathi",
        role: "Full Stack Developer",
        description: "An official website built to showcase news, members and activities of the Amaravathi press community with clean, informative design.",
        link: "https://pressclub-amaravathi-frontend.vercel.app/",
        image: "https://res.cloudinary.com/dkdidynja/image/upload/v1770047658/Screenshot_2026-02-02_at_9.24.05_PM_yuh2lz.png"
    },
    {
        title: "Tryyel",
        role: "Backend Developer",
        description: "Property listing platform with filtering, image galleries, and contact forms for a real estate agent.",
        link: "https://tryyel.vercel.app/",
        image: "https://res.cloudinary.com/dkdidynja/image/upload/v1770048045/Screenshot_2026-02-02_at_9.30.33_PM_t70ajx.png"
    },
    // {
    //     title: "Fitness Coach Landing Page",
    //     role: "Landing Page",
    //     description: "High-conversion landing page for a personal trainer with integrated payment gateway.",
    //     link: "#",
    //     image: "https://placehold.co/1000x500/1a1a1a/22c55e?text=Fitness+Coach"
    // }
];

const Card = ({ i, title, role, description, link, image, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="relative flex flex-col h-[500px] w-full max-w-5xl rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl origin-top"
            >
                {image && (
                    <div className="absolute inset-0 h-full w-full">
                        <motion.div style={{ scale: imageScale }} className="h-full w-full">
                            <img
                                src={image}
                                alt={title}
                                className="object-cover h-full w-full opacity-50 transition-opacity duration-500 hover:opacity-80"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>
                )}

                <div className="relative z-10 flex flex-col justify-end h-full p-10 pointer-events-none">
                    <span className="text-primary font-mono text-sm tracking-wider mb-2">{role}</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h2>
                    <p className="text-lg text-textSecondary max-w-xl mb-6 leading-relaxed">{description}</p>

                    <div className="pointer-events-auto">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-white border border-white/20 bg-white/5 hover:bg-primary hover:border-primary px-6 py-3 rounded-full transition-all">
                            View Project <FiExternalLink className="ml-2 text-lg" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Freelance = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={container} name="freelance" className="relative w-full bg-background mb-[20vh]">

            <div className="max-w-6xl mx-auto px-6 w-full pt-32 pb-10">
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

                <div className="grid md:grid-cols-3 gap-6 mb-32">
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

                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white">Recent Deliverables</h3>
                    <div className="h-px flex-grow bg-white/10 ml-6 hidden sm:block"></div>
                </div>
            </div>

            <div className="relative">
                {projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
                })}
            </div>
        </div>
    );
};

export default Freelance;