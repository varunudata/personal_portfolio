import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowRight } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import GradientBackground from './ui/GradientBackground';
import resume from '../assets/varun_udata_resume.pdf';

const Hero = () => {
    return (
        <div name="hero" className="w-full h-screen flex justify-center items-center relative overflow-hidden bg-[#050505]">
            <GradientBackground />
            <div className="relative z-20 text-center flex flex-col items-center max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="text-emerald-500 font-semibold tracking-[0.2em] text-sm uppercase">
                        Full Stack Developer
                    </span>
                </motion.div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 select-none leading-[1.1]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="whitespace-nowrap"
                    >
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Scalable</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Digital Solutions.
                    </motion.div>
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light"
                >
                    I transform complex requirements into seamless, high-performance web applications focused on modern architecture and user experience.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap gap-5 justify-center"
                >
                    <Link to="projects" smooth={true} duration={500}>
                        <button className="px-8 py-4 bg-emerald-500 text-black font-bold text-lg rounded-full hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center gap-2">
                            View My Work <HiArrowRight className="text-xl" />
                        </button>
                    </Link>
                    <a href={resume} download="Varun_Udata_Resume.pdf">
                        <button className="px-8 py-4 bg-[#1c1917] border border-white/5 text-white font-medium text-lg rounded-full hover:bg-[#292524] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer">
                            Download Resume <FiDownload className="text-xl" />
                        </button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero; 