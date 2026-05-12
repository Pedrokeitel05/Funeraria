import { useEffect, useRef } from 'react';
import { Phone, Calendar, Zap } from 'lucide-react';
import heroBg from '../../fundo-hero.png';

function useIntersection(ref: React.RefObject<Element>, options?: IntersectionObserverInit) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.querySelectorAll<HTMLElement>('[data-animate]').forEach((child, i) => {
          setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          }, i * 130);
        });
        obs.disconnect();
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options]);
}


export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useIntersection(ref, { threshold: 0.05 });

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: '#080C14' }}
      >
        {/* Background image – full width */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={heroBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center center', opacity: 0.87, transform: 'translateX(8%)' }}
          />
          {/* Strong overlay: very dark left side fading to lighter on right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(8,12,20,0.98) 20%, rgba(8,12,20,0.88) 50%, rgba(8,12,20,0.55) 100%)',
            }}
          />
          {/* Top and bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(8,12,20,0.6) 0%, transparent 20%, transparent 65%, rgba(8,12,20,0.95) 100%)',
            }}
          />
        </div>

        {/* Main content – centered */}
        <div className="flex-1 flex items-center relative z-10">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full pt-20 pb-4 lg:pt-10">
            <div ref={ref} className="flex flex-col items-center text-center">

              {/* Badge */}
              <div
                data-animate
                className="inline-flex items-center mb-4"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                }}
              >
                <div
                  className="flex items-center gap-3 px-4 py-2.5 rounded-full"
                  style={{
                    border: '1px solid rgba(200,155,83,0.35)',
                    background: 'rgba(8,12,20,0.65)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ border: '1.5px solid #C89B53' }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '0.52rem',
                        color: '#C89B53',
                        letterSpacing: '0.02em',
                      }}
                    >
                      24h
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.78rem',
                      letterSpacing: '0.05em',
                      color: '#F5F1EA',
                    }}
                  >
                    Atendimento imediato&nbsp;&nbsp;•&nbsp;&nbsp;24 horas&nbsp;&nbsp;•&nbsp;&nbsp;Sem burocracia
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1
                data-animate
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 300,
                  fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
                  lineHeight: '1.1',
                  color: '#F5F1EA',
                  marginBottom: '0.75rem',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                  maxWidth: '700px',
                }}
              >
                Estamos aqui para cuidar de tudo, com{' '}
                <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#C89B53' }}>respeito</em>
                {' '}e{' '}
                <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#C89B53' }}>tranquilidade.</em>
              </h1>

              {/* Gold ornament */}
              <div
                data-animate
                className="flex items-center justify-center gap-4 mb-3"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                }}
              >
                <div className="h-px w-10" style={{ background: 'rgba(200,155,83,0.4)' }} />
                <svg width="20" height="10" viewBox="0 0 24 10" fill="none">
                  <path
                    d="M0 5H8M16 5H24M12 0V10M9 2L12 5L15 2M9 8L12 5L15 8"
                    stroke="#C89B53"
                    strokeWidth="0.8"
                    strokeOpacity="0.7"
                  />
                </svg>
                <div className="h-px w-10" style={{ background: 'rgba(200,155,83,0.4)' }} />
              </div>

              {/* Subtitle */}
              <p
                data-animate
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  lineHeight: '1.65',
                  color: '#B7B7B7',
                  marginBottom: '1rem',
                  maxWidth: '460px',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                }}
              >
                Em um momento difícil, você não precisa passar por isso sozinho.
                Nossa equipe cuida de cada detalhe para você.
              </p>

              {/* CTA box */}
              <div
                data-animate
                className="w-full max-w-2xl rounded-xl p-5"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                  border: '1px solid rgba(200,155,83,0.22)',
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '14px',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.62rem',
                    letterSpacing: '0.22em',
                    color: '#C89B53',
                    marginBottom: '1rem',
                  }}
                >
                  COMO PODEMOS TE AJUDAR NESTE MOMENTO?
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <a
                    href="tel:08000000000"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-5 transition-all duration-300"
                    style={{
                      background: 'rgba(200,155,83,0.22)',
                      border: '1px solid rgba(200,155,83,0.55)',
                      backdropFilter: 'blur(14px)',
                      WebkitBackdropFilter: 'blur(14px)',
                      borderRadius: '10px',
                      color: '#E0B56D',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      letterSpacing: '0.03em',
                      boxShadow: '0 4px 24px rgba(200,155,83,0.18), inset 0 1px 0 rgba(200,155,83,0.2)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,83,0.35)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 40px rgba(200,155,83,0.4), inset 0 1px 0 rgba(200,155,83,0.3)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,83,0.22)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(200,155,83,0.18), inset 0 1px 0 rgba(200,155,83,0.2)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}
                  >
                    <Zap size={14} strokeWidth={1.5} />
                    Preciso de atendimento imediato
                  </a>
                  <a
                    href="#planos"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-5 transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(14px)',
                      WebkitBackdropFilter: 'blur(14px)',
                      borderRadius: '10px',
                      color: '#F5F1EA',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '0.8rem',
                      letterSpacing: '0.03em',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}
                  >
                    <Calendar size={15} strokeWidth={1.5} />
                    Quero me planejar
                  </a>
                </div>

                <div
                  className="pt-4 flex items-center justify-center"
                  style={{ borderTop: '1px solid rgba(200,155,83,0.1)' }}
                >
                  <a
                    href="tel:08000000000"
                    className="flex items-center gap-2 transition-colors duration-300"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.78rem',
                      color: '#B7B7B7',
                      letterSpacing: '0.04em',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = '#C89B53';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = '#B7B7B7';
                    }}
                  >
                    <Phone size={13} strokeWidth={1.5} style={{ color: '#C89B53' }} />
                    Falar com um consultor <span className="neon-red-blink">24h</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
        style={{ background: '#25D366' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.12 1.523 5.854L.057 23.617a.75.75 0 00.92.921l5.93-1.453A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.894 0-3.668-.497-5.2-1.367l-.372-.214-3.863.947.974-3.763-.234-.384A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>
    </>
  );
}
