import { motion } from 'framer-motion';

const GradientBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-[#050505]">
            {/* Orb 1 - Top Left */}
            <motion.div
                className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Orb 2 - Bottom Right */}
            <motion.div
                className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-emerald-800/10 rounded-full blur-[100px]"
                animate={{
                    x: [0, -30, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Orb 3 - Center Moving */}
            <motion.div
                className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px]"
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -50, 50, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
        </div>
    );
};

export default GradientBackground;
