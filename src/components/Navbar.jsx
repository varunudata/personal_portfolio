import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
    ];

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className={`
            flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
            ${scrolled || mobileMenuOpen ? 'bg-[#121212] border border-[#2a2a2a] shadow-2xl w-full max-w-4xl' : 'bg-transparent w-full max-w-6xl'}
          `}
                >
                    {/* Logo */}
                    <Link to="hero" smooth={true} duration={500} className="font-bold text-xl cursor-pointer">
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {scrolled ? "VU" : "varunudata"}
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="text-sm font-medium text-textSecondary hover:text-white transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link to="contact" smooth={true} duration={500}>
                            <button className="group relative hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface/50 border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 text-sm font-medium text-white group-hover:text-primary transition-colors">Let's Talk</span>
                                <HiArrowUpRight className="relative z-10 text-lg text-white group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />

                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </Link>

                        <button
                            className="md:hidden text-textPrimary text-xl"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-medium text-textPrimary hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-primary font-bold text-2xl"
                        >
                            Let's Talk
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;