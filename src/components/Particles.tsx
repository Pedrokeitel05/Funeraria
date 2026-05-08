import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  opacityTarget: number;
  opacitySpeed: number;
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const count = 35;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    }

    function createParticle(): Particle {
      if (!canvas) return { x: 0, y: 0, size: 1, speedY: -0.3, speedX: 0, opacity: 0, opacityTarget: 0.4, opacitySpeed: 0.005 };
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedY: -(Math.random() * 0.3 + 0.1),
        speedX: (Math.random() - 0.5) * 0.15,
        opacity: 0,
        opacityTarget: Math.random() * 0.35 + 0.05,
        opacitySpeed: Math.random() * 0.004 + 0.002,
      };
    }

    resize();
    for (let i = 0; i < count; i++) {
      const p = createParticle();
      if (canvas) p.y = Math.random() * canvas.height;
      particles.push(p);
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Fade in/out
        if (p.opacity < p.opacityTarget) {
          p.opacity = Math.min(p.opacity + p.opacitySpeed, p.opacityTarget);
        } else {
          p.opacityTarget = Math.random() * 0.3 + 0.05;
        }

        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          particles[i] = createParticle();
          particles[i].y = canvas.height + 10;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = '#C89B53';
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(200,155,83,0.5)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.6 }}
    />
  );
}
