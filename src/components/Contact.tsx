import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{ background: '#080C14' }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(200,155,83,0.05) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left */}
          <div>
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
              FALE CONOSCO
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
              Estamos aqui
              <br />
              <em style={{ fontStyle: 'italic', color: '#C89B53' }}>para você.</em>
            </h2>

            <p
              className="mb-12"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: '#B7B7B7',
                maxWidth: '420px',
              }}
            >
              Não importa o momento — estamos disponíveis 24 horas por dia,
              7 dias por semana, prontos para ouvir você e oferecer todo o suporte necessário.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { icon: Phone, label: 'Telefone 24h', value: '0800 000 0000', href: 'tel:08000000000' },
                { icon: Mail, label: 'E-mail', value: 'contato@espiritosanto.com.br', href: 'mailto:contato@espiritosanto.com.br' },
                { icon: MapPin, label: 'Endereço', value: 'Rua das Magnólias, 100 — São Paulo, SP', href: '#' },
                { icon: Clock, label: 'Horário de atendimento', value: '24 horas, todos os dias', href: '#' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-5 group"
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className="w-11 h-11 flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        border: '1px solid rgba(200,155,83,0.25)',
                        background: 'rgba(200,155,83,0.04)',
                      }}
                    >
                      <Icon size={16} strokeWidth={1} style={{ color: '#C89B53' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.7rem', letterSpacing: '0.12em', color: '#C89B53', marginBottom: '2px' }}>
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 300,
                          fontSize: '0.9rem',
                          color: '#F5F1EA',
                          transition: 'color 0.3s',
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right — Emergency CTA */}
          <div className="flex flex-col gap-6">
            {/* Urgent contact card */}
            <div
              className="p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(200,155,83,0.08) 0%, rgba(200,155,83,0.03) 100%)',
                border: '1px solid rgba(200,155,83,0.3)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(200,155,83,0.5), transparent)' }}
              />

              <p
                className="mb-3"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.7rem',
                  letterSpacing: '0.22em',
                  color: '#C89B53',
                }}
              >
                ATENDIMENTO DE EMERGÊNCIA
              </p>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 300,
                  fontSize: '2rem',
                  lineHeight: '1.1',
                  color: '#F5F1EA',
                }}
              >
                Precisa de ajuda
                <br />
                <em style={{ fontStyle: 'italic', color: '#C89B53' }}>agora?</em>
              </h3>
              <p
                className="mb-8"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  lineHeight: '1.7',
                  color: '#B7B7B7',
                }}
              >
                Nossa equipe está pronta para atender você imediatamente.
                Ligue agora e cuide de tudo sem burocracia.
              </p>

              <a
                href="tel:08000000000"
                className="w-full flex items-center justify-center gap-3 py-4 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #C89B53, #E0B56D)',
                  color: '#05070B',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  letterSpacing: '0.04em',
                  boxShadow: '0 0 40px rgba(200,155,83,0.25)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(200,155,83,0.5)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(200,155,83,0.25)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <Phone size={17} strokeWidth={2} />
                0800 000 0000 — Ligar agora
              </a>
            </div>

            {/* Planning card */}
            <div
              className="p-8"
              style={{
                background: 'rgba(11,16,22,0.6)',
                border: '1px solid rgba(200,155,83,0.12)',
              }}
            >
              <h4
                className="mb-3"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 400,
                  fontSize: '1.4rem',
                  color: '#F5F1EA',
                }}
              >
                Quer se planejar?
              </h4>
              <p
                className="mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.83rem',
                  lineHeight: '1.7',
                  color: '#B7B7B7',
                }}
              >
                Conheça nossos planos de previdência e garanta tranquilidade para
                sua família no futuro, com condições exclusivas.
              </p>
              <a
                href="#planos"
                className="inline-flex items-center gap-2 transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  color: '#C89B53',
                  borderBottom: '1px solid rgba(200,155,83,0.3)',
                  paddingBottom: '3px',
                }}
              >
                VER PLANOS DE PREVIDÊNCIA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
