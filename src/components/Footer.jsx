import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="w-full bg-surface relative pt-16 pb-32 overflow-hidden border-t border-white/5">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-4 inline-block">
                            Varun Udata.
                        </h2>
                        <p className="text-textSecondary text-sm leading-relaxed max-w-xs mb-6">
                            Building digital experiences with a focus on motion, design, and performance. Open for freelance opportunities and collaborations.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/varunudata" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/varun-udata" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <FaLinkedin />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Explore</h3>
                        <ul className="space-y-3 text-sm text-textSecondary">
                            <li><Link to="hero" smooth={true} duration={500} className="hover:text-primary cursor-pointer transition-colors">Home</Link></li>
                            <li><Link to="about" smooth={true} duration={500} className="hover:text-primary cursor-pointer transition-colors">About</Link></li>
                            <li><Link to="projects" smooth={true} duration={500} className="hover:text-primary cursor-pointer transition-colors">Projects</Link></li>
                            <li><Link to="freelance" smooth={true} duration={500} className="hover:text-primary cursor-pointer transition-colors">Services</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Get in Touch</h3>
                        <ul className="space-y-3 text-sm text-textSecondary">
                            <li className="hover:text-white transition-colors cursor-pointer">email@example.com</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Location: India</li>
                            <li>
                                <Link to="contact" smooth={true} duration={500} className="text-primary hover:text-white cursor-pointer font-medium">
                                    Send a message &rarr;
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Varun Udata. All rights reserved.</p>
                    <p className="flex items-center mt-2 md:mt-0">
                        Made with <FaHeart className="mx-1 text-red-500 animate-pulse" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
