import { useEffect, useRef, useState } from 'react';
import icAtendimento from '../../icones/Atendimento24.png';
import icTranslado from '../../icones/Translado.png';
import icOrientacao from '../../icones/Orientacao.png';
import icPreparacao from '../../icones/preparacao.png';
import icOrnamentacao from '../../icones/CremacaoPet.png';
import icCoroa from '../../icones/Coroa.png';
import icCremacao from '../../icones/Urna.png';
import icSepultura from '../../icones/Sepultura.png';
import cardCremacao from '../../Card Services/cremacao.jpeg';

const services = [
  { icon: icAtendimento,  title: 'Atendimento\n24H' },
  { icon: icTranslado,    title: 'Traslado' },
  { icon: icOrientacao,   title: 'Orientação' },
  { icon: icPreparacao,   title: 'Preparação\n(Tanatopraxia)' },
  { icon: icOrnamentacao, title: 'Cremação\nPet', iconSize: '62px' },
  { icon: icCoroa,        title: 'Coroas de\nFlores', iconSize: '62px' },
  { icon: icCremacao,     title: 'Cremação', card: cardCremacao },
  { icon: icSepultura,    title: 'Sepultamento' },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll<HTMLElement>('[data-item]').forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 60);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeCard ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeCard]);

  const activeService = services.find(s => s.title === activeCard);

  return (
    <>
      <section
        id="servicos"
        ref={sectionRef}
        className="relative py-16 lg:py-16 overflow-hidden"
        style={{ background: '#080C14' }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="text-center mb-5">
            <p
              className="mb-1"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                color: '#C89B53',
              }}
            >
              NOSSOS SERVIÇOS
            </p>
            <h2
              className="mb-1"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                lineHeight: '1.1',
                color: '#F5F1EA',
              }}
            >
              Cuidado completo
              <br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#C89B53' }}>em cada detalhe.</em>
            </h2>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.9rem',
                lineHeight: '1.75',
                color: '#B7B7B7',
                maxWidth: '460px',
                margin: '0 auto',
              }}
            >
              Oferecemos um serviço completo e humanizado, do primeiro contato ao acompanhamento pós-cerimônia.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: 'rgba(200,155,83,0.08)' }}>
            {services.map((service) => (
              <div
                key={service.title}
                data-item
                className="group flex flex-col items-center text-center py-8 px-14"
                style={{
                  background: '#080C14',
                  opacity: 0,
                  transform: 'translateY(16px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, background 0.3s ease',
                  cursor: service.card ? 'pointer' : 'default',
                }}
                onClick={() => service.card && setActiveCard(service.title)}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,83,0.05)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#080C14';
                }}
              >
                {/* Icon container */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    border: `1px solid ${service.card ? 'rgba(200,155,83,0.55)' : 'rgba(200,155,83,0.3)'}`,
                    background: 'rgba(200,155,83,0.05)',
                  }}
                >
                  <img
                    src={service.icon}
                    alt=""
                    style={{ width: service.iconSize ?? '45px', height: service.iconSize ?? '45px', objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(72%) sepia(38%) saturate(500%) hue-rotate(5deg) brightness(95%)' }}
                  />
                </div>

                {/* Label */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: '#F5F1EA',
                    lineHeight: 1.5,
                    whiteSpace: 'pre-line',
                    textTransform: 'uppercase',
                  }}
                >
                  {service.title}
                </p>

                {/* "Ver mais" hint for clickable cards */}
                {service.card && (
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', color: '#C89B53', marginTop: '6px', letterSpacing: '0.1em', opacity: 0.7 }}>
                    VER MAIS
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeCard && activeService?.card && (
        <>
          {/* Botões fixos — sempre visíveis */}
          <div
            className="fixed top-4 right-4 z-[60] flex items-center gap-2"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setZoom(z => Math.max(0.5, +(z - 0.25).toFixed(2)))}
              title="Diminuir"
              style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </button>
            <button
              onClick={() => setZoom(z => Math.min(3, +(z + 0.25).toFixed(2)))}
              title="Aumentar"
              style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </button>
            <button
              onClick={() => { setActiveCard(null); setZoom(1); }}
              style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
              }}
            >
              ✕
            </button>
          </div>

          {/* Overlay scrollável */}
          <div
            className="fixed inset-0 z-50 overflow-auto"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
            onClick={() => { setActiveCard(null); setZoom(1); }}
          >
            <div
              className="flex justify-center items-start min-h-full p-16"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={activeService.card}
                alt={activeCard}
                style={{
                  display: 'block',
                  borderRadius: '8px',
                  width: zoom <= 1 ? `min(${zoom * 700}px, 90vw)` : `${zoom * 700}px`,
                  height: 'auto',
                  transition: 'width 0.2s ease',
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
