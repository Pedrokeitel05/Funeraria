import { useEffect, useRef } from 'react';
import { Phone, Users, ClipboardList, Heart } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Você entra em contato',
    desc: 'Fale com um consultor e conte como podemos ajudar. Estamos aqui para ouvir você.',
  },
  {
    num: '02',
    icon: Users,
    title: 'Nossa equipe orienta você',
    desc: 'Explicamos todas as etapas com clareza e acolhimento, tiramos suas dúvidas e damos suporte completo.',
  },
  {
    num: '03',
    icon: ClipboardList,
    title: 'Organizamos todos os detalhes',
    desc: 'Cuidamos de toda a parte burocrática e operacional, com transparência, respeito e atenção a cada detalhe.',
  },
  {
    num: '04',
    icon: Heart,
    title: 'Você tem tranquilidade',
    desc: 'Fazemos tudo com carinho e respeito para que sua família tenha segurança e paz neste momento.',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll<HTMLElement>('[data-step]').forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 150);
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
      id="como-funciona"
      ref={sectionRef}
      className="relative py-7 lg:py-16 overflow-hidden"
      style={{ background: '#080C14' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,155,83,0.04) 0%, transparent 65%)' }}
      />

      {/* Abstract circles */}
      <div
        className="absolute top-20 right-10 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(200,155,83,0.04)', top: '5%', right: '-5%' }}
      />
      <div
        className="absolute bottom-20 left-10 w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(200,155,83,0.04)', bottom: '5%', left: '-3%' }}
      />

      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="mb-2"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              color: '#C89B53',
            }}
          >
            NOSSO PROCESSO
          </p>
          <h2
            className="mb-2"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              lineHeight: '1.1',
              color: '#F5F1EA',
            }}
          >
            Cuidamos de tudo
            <br />
            <em style={{ fontStyle: 'italic', color: '#C89B53' }}>para você.</em>
          </h2>

          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-16" style={{ background: 'rgba(200,155,83,0.3)' }} />
            <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
              <path d="M0 6H6M22 6H28M14 0V12M10 3L14 6L18 3M10 9L14 6L18 9" stroke="#C89B53" strokeWidth="0.8" strokeOpacity="0.6"/>
            </svg>
            <div className="h-px w-16" style={{ background: 'rgba(200,155,83,0.3)' }} />
          </div>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              lineHeight: '1.8',
              color: '#B7B7B7',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Um atendimento completo e humanizado para trazer alívio
            <br className="hidden sm:block" /> e tranquilidade à sua família.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Segment 1→2 */}
          <div className="hidden lg:block absolute h-px pointer-events-none" style={{ top: 'calc(2rem + 34px)', left: 'calc(12.5% + 38px)', width: 'calc(25% - 76px)', background: 'rgba(200,155,83,0.3)' }} />
          {/* Segment 2→3 */}
          <div className="hidden lg:block absolute h-px pointer-events-none" style={{ top: 'calc(2rem + 34px)', left: 'calc(37.5% + 38px)', width: 'calc(25% - 76px)', background: 'rgba(200,155,83,0.3)' }} />
          {/* Segment 3→4 */}
          <div className="hidden lg:block absolute h-px pointer-events-none" style={{ top: 'calc(2rem + 34px)', left: 'calc(62.5% + 38px)', width: 'calc(25% - 76px)', background: 'rgba(200,155,83,0.3)' }} />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                data-step
                className="flex flex-col items-center text-center px-6 py-2 group"
                style={{
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: 'opacity 0.7s ease, transform 0.7s ease',
                }}
              >
                {/* Number circle */}
                <div
                  className="relative w-[68px] h-[68px] rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-105"
                  style={{
                    border: '1px solid rgba(200,155,83,0.35)',
                    background: 'rgba(200,155,83,0.04)',
                    boxShadow: '0 0 0 8px rgba(200,155,83,0.03)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(200,155,83,0.2), 0 0 0 8px rgba(200,155,83,0.06)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,155,83,0.6)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 8px rgba(200,155,83,0.03)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,155,83,0.35)';
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Poppins, serif',
                      fontWeight: 300,
                      fontSize: '1.5rem',
                      color: '#C89B53',
                      opacity: 0.9,
                    }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-5">
                  <Icon size={26} strokeWidth={1} style={{ color: '#C89B53', opacity: 0.75 }} />
                </div>

                {/* Title */}
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 400,
                    fontSize: '1.25rem',
                    lineHeight: '1.3',
                    color: '#F5F1EA',
                  }}
                >
                  {step.title}
                </h3>

                {/* Desc */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.83rem',
                    lineHeight: '1.75',
                    color: '#B7B7B7',
                    maxWidth: '220px',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div
          className="mt-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-8 md:px-12 py-10"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(200,155,83,0.22)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '14px',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <div className="flex items-center gap-6">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
              style={{
                border: '1px solid rgba(200,155,83,0.3)',
                background: 'rgba(200,155,83,0.06)',
              }}
            >
              <Heart size={22} strokeWidth={1} style={{ color: '#C89B53' }} />
            </div>
            <div>
              <h4
                className="mb-1"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 400,
                  fontSize: '1.35rem',
                  color: '#C89B53',
                }}
              >
                Acolhimento em cada etapa
              </h4>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  lineHeight: '1.6',
                  color: '#B7B7B7',
                  maxWidth: '420px',
                }}
              >
                Mais do que um serviço, oferecemos cuidado, presença e respeito quando você mais precisa.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 shrink-0">
            <a
              href="tel:08000000000"
              className="flex items-center gap-3 px-8 py-4 transition-all duration-300"
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
                whiteSpace: 'nowrap',
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
              <Phone size={15} strokeWidth={1.5} />
              Falar com um consultor 24h
            </a>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.68rem',
                color: '#B7B7B7',
                letterSpacing: '0.12em',
                opacity: 0.7,
              }}
            >
              Atendimento imediato &nbsp;•&nbsp; 24 horas &nbsp;•&nbsp; Sem burocracia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
