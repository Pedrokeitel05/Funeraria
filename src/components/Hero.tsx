import { useEffect, useRef } from 'react';
import { Phone, Calendar } from 'lucide-react';

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
          }, i * 120);
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
  useIntersection(ref, { threshold: 0.1 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #05070B 0%, #080C14 50%, #05070B 100%)' }}
    >
      {/* Background decorative circles */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,155,83,0.03) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,155,83,0.025) 0%, transparent 70%)',
        }}
      />

      {/* Thin horizontal gold line */}
      <div
        className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,155,83,0.06), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left */}
          <div ref={ref} className="flex flex-col">
            {/* Badge */}
            <div
              data-animate
              className="inline-flex items-center gap-3 self-start mb-10"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              <div
                className="px-5 py-2 border flex items-center gap-3"
                style={{ borderColor: 'rgba(200,155,83,0.25)', background: 'rgba(200,155,83,0.04)' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#C89B53] animate-pulse"
                />
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.7rem',
                    letterSpacing: '0.22em',
                    color: '#C89B53',
                  }}
                >
                  ATENDIMENTO IMEDIATO &nbsp;•&nbsp; 24 HORAS &nbsp;•&nbsp; SEM BUROCRACIA
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              data-animate
              className="leading-none mb-8"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 300,
                fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
                lineHeight: '1.08',
                color: '#F5F1EA',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              Estamos aqui para cuidar de tudo, com{' '}
              <em style={{ fontStyle: 'italic', color: '#C89B53' }}>respeito</em>
              {' '}e{' '}
              <em style={{ fontStyle: 'italic', color: '#C89B53' }}>tranquilidade.</em>
            </h1>

            {/* Gold ornament */}
            <div
              data-animate
              className="flex items-center gap-4 mb-8"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              <div className="h-px w-12" style={{ background: 'rgba(200,155,83,0.4)' }} />
              <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
                <path d="M0 5H8M16 5H24M12 0V10M9 2L12 5L15 2M9 8L12 5L15 8" stroke="#C89B53" strokeWidth="0.8" strokeOpacity="0.7"/>
              </svg>
              <div className="h-px w-12" style={{ background: 'rgba(200,155,83,0.4)' }} />
            </div>

            {/* Subtitle */}
            <p
              data-animate
              className="mb-10 leading-relaxed"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '1.05rem',
                lineHeight: '1.75',
                color: '#B7B7B7',
                maxWidth: '480px',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              Em um momento difícil, você não precisa passar por isso sozinho.
              Nossa equipe cuida de cada detalhe para você.
            </p>

            {/* Buttons */}
            <div
              data-animate
              className="flex flex-col sm:flex-row gap-4"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              <a
                href="tel:08000000000"
                className="group flex items-center justify-center gap-3 px-8 py-4 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #C89B53, #E0B56D)',
                  color: '#05070B',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  letterSpacing: '0.06em',
                  boxShadow: '0 0 30px rgba(200,155,83,0.2)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(200,155,83,0.4)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(200,155,83,0.2)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <Phone size={16} strokeWidth={2} />
                Preciso de atendimento imediato
              </a>
              <a
                href="#planos"
                className="flex items-center justify-center gap-3 px-8 py-4 border transition-all duration-300"
                style={{
                  borderColor: 'rgba(200,155,83,0.4)',
                  color: '#C89B53',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  letterSpacing: '0.06em',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,155,83,0.8)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,83,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,155,83,0.4)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <Calendar size={16} strokeWidth={1.5} />
                Quero me planejar
              </a>
            </div>
          </div>

          {/* Right — Image */}
          <div
            className="relative hidden lg:block"
            style={{
              opacity: 0,
              animation: 'fadeIn 1.4s ease-out 0.5s forwards',
            }}
          >
            {/* Decorative ring */}
            <div
              className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
              style={{
                border: '1px solid rgba(200,155,83,0.08)',
              }}
            />
            <div
              className="absolute -top-8 -right-8 w-56 h-56 rounded-full pointer-events-none"
              style={{
                border: '1px solid rgba(200,155,83,0.05)',
              }}
            />

            {/* Image container */}
            <div
              className="relative overflow-hidden"
              style={{
                height: '580px',
                borderRadius: '2px',
              }}
            >
              <img
                src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Mãos unidas em apoio e acolhimento"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
              {/* Overlay gradients */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, #05070B 0%, transparent 35%)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, #05070B 0%, transparent 40%)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(5,7,11,0.4) 0%, transparent 30%)',
                }}
              />
              {/* Thin gold border on right */}
              <div
                className="absolute top-0 right-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,155,83,0.3), transparent)' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div
          className="mt-20 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8"
          style={{ borderTop: '1px solid rgba(200,155,83,0.1)' }}
        >
          {[
            { icon: '◈', label: 'Atendimento 24h', sub: 'Estamos sempre prontos para te ajudar' },
            { icon: '◈', label: 'Equipe especializada', sub: 'Profissionais preparados para cuidar de tudo' },
            { icon: '◈', label: 'Respeito e empatia', sub: 'Cuidamos de cada detalhe com humanidade' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <span style={{ color: '#C89B53', fontSize: '1rem', lineHeight: '1.6', opacity: 0.7 }}>{item.icon}</span>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.88rem', color: '#F5F1EA', marginBottom: '2px' }}>
                  {item.label}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.78rem', color: '#B7B7B7', lineHeight: 1.5 }}>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        style={{ animation: 'floatAnim 3s ease-in-out infinite' }}
      >
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, #C89B53)' }} />
      </div>
    </section>
  );
}
