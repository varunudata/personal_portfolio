import { useEffect, useRef } from 'react';

const DigitalRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initRain();
        };

        const characters = 'VARUNUDATA01XYZE';
        // Using a mix of name chars and hex-like visual for the "source code" feel
        // Or standard Katakana if prefered, but "VARUNUDATA" is a nice easter egg

        const fontSize = 16;
        let columns;
        let drops = []; // Array of y positions for each column

        const initRain = () => {
            columns = Math.ceil(canvas.width / fontSize);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100; // Start comfortably above screen
            }
        };

        const draw = () => {
            // Trail fade effect: transclucent black rect
            ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
            // 0.05 opacity = long trails. 0.1 = short trails.
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Randomize char
                const text = characters.charAt(Math.floor(Math.random() * characters.length));

                // Color logic
                // Small chance to be white (sparkle), mostly Emerald
                const isSparkle = Math.random() > 0.975;
                ctx.fillStyle = isSparkle ? '#ffffff' : '#10B981'; // Emerald-500

                // Render Char
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop if it goes off screen (randomly)
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i]++;
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-[#050505]" />;
};

export default DigitalRain;
