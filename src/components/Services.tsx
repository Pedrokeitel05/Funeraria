import { useEffect, useRef } from 'react';
import { Star, Shield, FileText, Truck, Flower2, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    desc: 'Nossa equipe especializada oferece suporte emocional e prático em cada etapa, com presença e cuidado genuíno.',
  },
  {
    icon: FileText,
    title: 'Assessoria Documental',
    desc: 'Cuidamos de toda a documentação e processos burocráticos com agilidade e transparência, para você não se preocupar.',
  },
  {
    icon: Flower2,
    title: 'Cerimônias Personalizadas',
    desc: 'Organizamos cerimônias que honram a história e os valores de cada pessoa, com elegância e sensibilidade.',
  },
  {
    icon: Truck,
    title: 'Traslado e Logística',
    desc: 'Serviço completo de traslado local, intermunicipal e interestadual com todo o respeito e cuidado necessários.',
  },
  {
    icon: Shield,
    title: 'Planos de Previdência',
    desc: 'Planejamento preventivo para garantir tranquilidade à sua família no futuro, com condições especiais e personalizadas.',
  },
  {
    icon: Star,
    title: 'Suporte Pós-Cerimônia',
    desc: 'Continuamos presentes após a cerimônia, oferecendo apoio e orientação para a família nos dias seguintes.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll<HTMLElement>('[data-card]').forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 100);
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
      id="servicos"
      ref={sectionRef}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #05070B 0%, #080C14 50%, #05070B 100%)' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(200,155,83,0.03) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-xl mb-16 lg:mb-24">
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
            NOSSOS SERVIÇOS
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              lineHeight: '1.1',
              color: '#F5F1EA',
            }}
          >
            Cuidado completo
            <br />
            <em style={{ fontStyle: 'italic', color: '#C89B53' }}>em cada detalhe.</em>
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '0.95rem',
              lineHeight: '1.8',
              color: '#B7B7B7',
            }}
          >
            Oferecemos um serviço completo e humanizado, do primeiro contato ao acompanhamento pós-cerimônia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(200,155,83,0.06)' }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-card
                className="group p-10 transition-all duration-500 cursor-default"
                style={{
                  background: '#05070B',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.7s ease, transform 0.7s ease, background 0.4s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,83,0.04)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#05070B';
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-7 transition-all duration-500 group-hover:scale-110"
                  style={{
                    border: '1px solid rgba(200,155,83,0.25)',
                    background: 'rgba(200,155,83,0.04)',
                  }}
                >
                  <Icon size={20} strokeWidth={1} style={{ color: '#C89B53' }} />
                </div>

                {/* Title */}
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 400,
                    fontSize: '1.3rem',
                    lineHeight: '1.25',
                    color: '#F5F1EA',
                  }}
                >
                  {service.title}
                </h3>

                {/* Divider */}
                <div
                  className="mb-5 w-8 h-px"
                  style={{ background: 'rgba(200,155,83,0.4)' }}
                />

                {/* Desc */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.83rem',
                    lineHeight: '1.75',
                    color: '#B7B7B7',
                  }}
                >
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
