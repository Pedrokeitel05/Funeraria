import { useEffect, useRef } from 'react';

const stats = [
  { num: '25+', label: 'Anos de experiência' },
  { num: '12k+', label: 'Famílias atendidas' },
  { num: '24h', label: 'Disponibilidade total' },
  { num: '100%', label: 'Compromisso com o cuidado' },
];

export default function About() {
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
      { threshold: 0.1 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{ background: '#080C14' }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(200,155,83,0.035) 0%, transparent 60%)' }}
      />

      {/* Large decorative circle */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(200,155,83,0.05)' }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(200,155,83,0.04)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left text */}
          <div>
            <p
              data-reveal
              className="mb-5"
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
              SOBRE NÓS
            </p>

            <h2
              data-reveal
              className="mb-8"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                lineHeight: '1.1',
                color: '#F5F1EA',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
              }}
            >
              Uma tradição de cuidado
              <br />
              <em style={{ fontStyle: 'italic', color: '#C89B53' }}>e humanidade.</em>
            </h2>

            <div
              data-reveal
              className="h-px w-16 mb-8"
              style={{
                background: 'rgba(200,155,83,0.4)',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
              }}
            />

            <p
              data-reveal
              className="mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.95rem',
                lineHeight: '1.85',
                color: '#B7B7B7',
                maxWidth: '500px',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
              }}
            >
              Há mais de 25 anos, a Espírito Santo tem sido a mão estendida para famílias
              em momentos de perda. Nossa missão vai além da prestação de serviços —
              acreditamos que cada despedida merece ser tratada com a mais profunda
              dignidade e respeito.
            </p>

            <p
              data-reveal
              className="mb-10"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.95rem',
                lineHeight: '1.85',
                color: '#B7B7B7',
                maxWidth: '500px',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
              }}
            >
              Nossa equipe é treinada não apenas para a excelência técnica, mas para
              oferecer presença humana e acolhimento verdadeiro. Porque quando você
              mais precisa, cuidar de você é nossa maior responsabilidade.
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
                href="#contato"
                className="inline-flex items-center gap-3 transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.83rem',
                  letterSpacing: '0.12em',
                  color: '#C89B53',
                  borderBottom: '1px solid rgba(200,155,83,0.3)',
                  paddingBottom: '4px',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(200,155,83,0.8)';
                  (e.currentTarget as HTMLElement).style.letterSpacing = '0.16em';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(200,155,83,0.3)';
                  (e.currentTarget as HTMLElement).style.letterSpacing = '0.12em';
                }}
              >
                CONHEÇA NOSSA HISTÓRIA
                <span style={{ fontSize: '1rem' }}>→</span>
              </a>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-px" style={{ background: 'rgba(200,155,83,0.08)' }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-reveal
                className="flex flex-col justify-center p-10 transition-all duration-500"
                style={{
                  background: '#080C14',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s, background 0.4s ease`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,83,0.04)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#080C14';
                }}
              >
                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 300,
                    fontSize: '3rem',
                    lineHeight: '1',
                    color: '#C89B53',
                    marginBottom: '8px',
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.78rem',
                    letterSpacing: '0.08em',
                    color: '#B7B7B7',
                    lineHeight: '1.5',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
