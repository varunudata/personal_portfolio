import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
    return (
        <div name="hero" className="w-full h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">

            {/* Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl px-8 flex flex-col justify-center items-center h-full z-10"
            >
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary tracking-widest text-sm font-medium mb-4 uppercase"
                >
                    Full Stack Developer
                </motion.p>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl sm:text-7xl md:text-8xl font-black text-textPrimary mb-6 tracking-tight leading-tight"
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-100">Digital</span> <br className="hidden sm:block" /> Experiences.
                </motion.h1>

                <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-textSecondary text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed font-light"
                >
                    I design and build beautiful, accessible, and inclusive digital products and experiences for the web.
                </motion.p>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className='flex flex-col sm:flex-row gap-4'
                >
                    <Link to="projects" smooth={true} duration={500}>
                        <button className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/50">
                            <span className="relative z-10 flex items-center gap-2">
                                View My Work <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </Link>
                    <a href="https://github.com/varunudata" target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-4 bg-surface text-textPrimary font-medium rounded-full border border-white/5 hover:bg-white/5 transition-all flex items-center gap-2 hover:border-white/20">
                            Github <FaGithub className='text-lg' />
                        </button>
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
