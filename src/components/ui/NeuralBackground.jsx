import { useEffect, useRef } from 'react';

const NeuralBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };
        const initParticles = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = (Math.random() * 2) + 1;
                const x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                const y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                const directionX = (Math.random() * 2) - 1;
                const directionY = (Math.random() * 2) - 1;
                const color = '#10B981';

                particles.push({ x, y, directionX, directionY, size, color });
            }
        };

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                        + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = 'rgba(16, 185, 129,' + opacityValue + ')';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];

                // Movement
                p.x += p.directionX;
                p.y += p.directionY;

                // Wall collision
                if (p.x > canvas.width || p.x < 0) p.directionX = -p.directionX;
                if (p.y > canvas.height || p.y < 0) p.directionY = -p.directionY;

                // Mouse interaction
                if (mouse.x != null) {
                    let dx = mouse.x - p.x;
                    let dy = mouse.y - p.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius + p.size) {
                        if (mouse.x < p.x && p.x < canvas.width - p.size * 10) p.x += 3;
                        if (mouse.x > p.x && p.x > p.size * 10) p.x -= 3;
                        if (mouse.y < p.y && p.y < canvas.height - p.size * 10) p.y += 3;
                        if (mouse.y > p.y && p.y > p.size * 10) p.y -= 3;
                    }
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
                ctx.fillStyle = '#10B981';
                ctx.fill();
            }
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        }

        const handleMouseOut = () => {
            mouse.x = undefined;
            mouse.y = undefined;
        }

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-[#050505]" />;
};

export default NeuralBackground;
