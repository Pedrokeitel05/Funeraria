import { useEffect, useRef } from 'react';
import { Check, Phone } from 'lucide-react';

const plans = [
  {
    name: 'Essencial',
    subtitle: 'Para quem precisa de apoio imediato',
    price: 'Sob consulta',
    features: [
      'Atendimento 24 horas',
      'Assessoria documental completa',
      'Traslado local',
      'Preparação e cerimônia',
      'Suporte à família',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    subtitle: 'O mais escolhido pelas famílias',
    price: 'Sob consulta',
    features: [
      'Tudo do plano Essencial',
      'Cerimônia personalizada',
      'Traslado intermunicipal',
      'Floricultura especial',
      'Suporte pós-cerimônia',
      'Assessor dedicado',
    ],
    featured: true,
  },
  {
    name: 'Previdência',
    subtitle: 'Planejamento para o futuro',
    price: 'A partir de R$ 89/mês',
    features: [
      'Cobertura completa garantida',
      'Sem carência',
      'Reajuste protegido',
      'Extensível a dependentes',
      'Atendimento prioritário',
      'Condições especiais',
    ],
    featured: false,
  },
];

export default function Plans() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll<HTMLElement>('[data-plan]').forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 150);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="planos"
      ref={sectionRef}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: '#05070B' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(200,155,83,0.04) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p
            className="mb-5"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              color: '#C89B53',
            }}
          >
            PLANOS E COBERTURAS
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              lineHeight: '1.1',
              color: '#F5F1EA',
            }}
          >
            Escolha o plano
            <br />
            <em style={{ fontStyle: 'italic', color: '#C89B53' }}>ideal para você.</em>
          </h2>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              data-plan
              className="relative flex flex-col p-10 transition-all duration-500"
              style={{
                background: plan.featured ? 'rgba(11,16,22,0.9)' : 'rgba(11,16,22,0.5)',
                border: `1px solid ${plan.featured ? 'rgba(200,155,83,0.4)' : 'rgba(200,155,83,0.12)'}`,
                boxShadow: plan.featured ? '0 0 60px rgba(200,155,83,0.1), inset 0 0 40px rgba(200,155,83,0.03)' : 'none',
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
              }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div
                  className="absolute -top-px left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #C89B53, transparent)' }}
                />
              )}

              {plan.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1"
                  style={{
                    background: 'linear-gradient(135deg, #C89B53, #E0B56D)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    color: '#05070B',
                    whiteSpace: 'nowrap',
                  }}
                >
                  MAIS ESCOLHIDO
                </div>
              )}

              {/* Plan name */}
              <div className="mb-8">
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 400,
                    fontSize: '1.7rem',
                    color: plan.featured ? '#C89B53' : '#F5F1EA',
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.78rem',
                    color: '#B7B7B7',
                    lineHeight: '1.5',
                  }}
                >
                  {plan.subtitle}
                </p>
              </div>

              {/* Divider */}
              <div
                className="mb-8 h-px"
                style={{ background: `rgba(200,155,83,${plan.featured ? '0.3' : '0.12'})` }}
              />

              {/* Price */}
              <div className="mb-8">
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 300,
                    fontSize: '1.1rem',
                    color: '#C89B53',
                    fontStyle: 'italic',
                  }}
                >
                  {plan.price}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check
                      size={13}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0"
                      style={{ color: '#C89B53', opacity: 0.8 }}
                    />
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 300,
                        fontSize: '0.83rem',
                        lineHeight: '1.5',
                        color: '#B7B7B7',
                      }}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="tel:08000000000"
                className="flex items-center justify-center gap-2 py-3.5 transition-all duration-300"
                style={{
                  background: plan.featured ? 'linear-gradient(135deg, #C89B53, #E0B56D)' : 'transparent',
                  border: plan.featured ? 'none' : '1px solid rgba(200,155,83,0.35)',
                  color: plan.featured ? '#05070B' : '#C89B53',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: plan.featured ? 500 : 300,
                  fontSize: '0.82rem',
                  letterSpacing: '0.06em',
                  boxShadow: plan.featured ? '0 0 25px rgba(200,155,83,0.2)' : 'none',
                }}
                onMouseEnter={e => {
                  if (plan.featured) {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(200,155,83,0.4)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                  } else {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,83,0.06)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,155,83,0.6)';
                  }
                }}
                onMouseLeave={e => {
                  if (plan.featured) {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(200,155,83,0.2)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  } else {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,155,83,0.35)';
                  }
                }}
              >
                <Phone size={13} strokeWidth={1.5} />
                Falar com um especialista
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className="text-center mt-10"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: '0.78rem',
            color: '#B7B7B7',
            opacity: 0.6,
            letterSpacing: '0.04em',
          }}
        >
          Todos os planos incluem atendimento 24 horas e suporte completo à família.
          Entre em contato para uma proposta personalizada.
        </p>
      </div>
    </section>
  );
}
