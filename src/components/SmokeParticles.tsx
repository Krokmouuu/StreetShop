import React, { useEffect, useRef } from 'react';

export function SmokeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * -0.8 - 0.2,
        opacity: Math.random() * 0.05 + 0.02
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, `rgba(0, 255, 0, ${particle.opacity})`);
        gradient.addColorStop(0.5, `rgba(0, 255, 0, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size += 0.1;
        particle.opacity -= 0.0002;

        // Reset particle if it goes off screen or fades out
        if (particle.y < -100 || particle.opacity <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: canvas.height + 50,
            size: Math.random() * 60 + 20,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * -0.8 - 0.2,
            opacity: Math.random() * 0.05 + 0.02
          };
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
