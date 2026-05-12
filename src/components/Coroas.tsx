import { useEffect, useRef } from 'react';
import { Flower2, ExternalLink } from 'lucide-react';
import coroaImg from '../../Coroadeflor.png';

export default function Coroas() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 120);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="coroas"
      ref={sectionRef}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: '#080C14' }}
    >
      {/* Imagem de fundo — igual ao Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={coroaImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center center', opacity: 0.45, transform: 'translateX(0%)' }}
        />
        {/* Escurecimento geral */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(8,12,20,0.55)' }}
        />
        {/* Fade forte no lado esquerdo */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(8,12,20,0.95) 10%, rgba(8,12,20,0.6) 45%, rgba(8,12,20,0.2) 100%)',
          }}
        />
        {/* Fade topo e base — funde com as seções adjacentes */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #080C14 0%, transparent 18%, transparent 82%, #080C14 100%)',
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-xl">

          <p
            data-reveal
            className="mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              color: '#C89B53',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            HOMENAGEAR COM FLORES
          </p>

          <h2
            data-reveal
            className="mb-5"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              lineHeight: '1.1',
              color: '#F5F1EA',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            Coroas de Flores
            <br />
            <em style={{ fontStyle: 'italic', color: '#C89B53' }}>para homenagear.</em>
          </h2>

          <p
            data-reveal
            className="mb-8"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '0.92rem',
              lineHeight: '1.8',
              color: '#B7B7B7',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            Ofereça uma última homenagem com a delicadeza e o cuidado que a memória merece.
            Nossa seleção de coroas de flores é pensada para trazer beleza e respeito
            ao momento da despedida.
          </p>

          <div
            data-reveal
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <a
              href="https://seusite.com.br/coroas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 transition-all duration-300"
              style={{
                background: 'rgba(200,155,83,0.22)',
                border: '1px solid rgba(200,155,83,0.55)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                borderRadius: '10px',
                color: '#E0B56D',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: '0.04em',
                boxShadow: '0 4px 24px rgba(200,155,83,0.18), inset 0 1px 0 rgba(200,155,83,0.2)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,83,0.35)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 40px rgba(200,155,83,0.4), inset 0 1px 0 rgba(200,155,83,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,83,0.22)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(200,155,83,0.18), inset 0 1px 0 rgba(200,155,83,0.2)';
              }}
            >
              <Flower2 size={16} strokeWidth={1.5} />
              Ver Coroas Disponíveis
              <ExternalLink size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
