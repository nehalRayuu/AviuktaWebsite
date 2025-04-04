import { useEffect, useRef } from 'react';
import { useParticles } from '@/hooks/useParticles';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { initParticles } = useParticles();

  useEffect(() => {
    if (canvasRef.current) {
      const cleanup = initParticles(canvasRef.current);
      return cleanup;
    }
  }, [initParticles]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ParticleBackground;
