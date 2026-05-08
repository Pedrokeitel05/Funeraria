import { Phone } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Planos', href: '#planos' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden"
      style={{
        background: '#030508',
        borderTop: '1px solid rgba(200,155,83,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-16" style={{ borderBottom: '1px solid rgba(200,155,83,0.08)' }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4C19 4 12 11 12 18C12 22.4183 15.134 26 19 26C22.866 26 26 22.4183 26 18C26 11 19 4 19 4Z" stroke="#C89B53" strokeWidth="0.8" fill="none" strokeOpacity="0.7"/>
                <path d="M19 26V34" stroke="#C89B53" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.7"/>
                <path d="M14 30H24" stroke="#C89B53" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.7"/>
                <circle cx="19" cy="18" r="3" stroke="#C89B53" strokeWidth="0.6" fill="none" strokeOpacity="0.7"/>
              </svg>
              <div className="flex flex-col">
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 400,
                    fontSize: '1.05rem',
                    letterSpacing: '0.16em',
                    color: '#F5F1EA',
                  }}
                >
                  Espírito Santo
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.5rem',
                    letterSpacing: '0.26em',
                    color: '#C89B53',
                    opacity: 0.8,
                  }}
                >
                  CUIDADO QUE ACOLHE
                </span>
              </div>
            </div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.82rem',
                lineHeight: '1.75',
                color: '#B7B7B7',
                maxWidth: '280px',
                opacity: 0.8,
              }}
            >
              Mais de 25 anos cuidando com respeito, humanidade e dedicação das famílias que mais precisam.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                color: '#C89B53',
                opacity: 0.8,
              }}
            >
              NAVEGAÇÃO
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.83rem',
                      color: '#B7B7B7',
                      transition: 'color 0.3s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = '#C89B53';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = '#B7B7B7';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                color: '#C89B53',
                opacity: 0.8,
              }}
            >
              ATENDIMENTO 24H
            </p>
            <a
              href="tel:08000000000"
              className="flex items-center gap-3 mb-3 group"
            >
              <Phone size={14} strokeWidth={1.5} style={{ color: '#C89B53' }} />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '1.1rem',
                  color: '#F5F1EA',
                  transition: 'color 0.3s',
                  letterSpacing: '0.04em',
                }}
              >
                0800 000 0000
              </span>
            </a>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.78rem',
                color: '#B7B7B7',
                lineHeight: '1.6',
                opacity: 0.7,
                marginBottom: '16px',
              }}
            >
              Rua das Magnólias, 100<br />
              São Paulo — SP
            </p>
            <a
              href="tel:08000000000"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 transition-all duration-300"
              style={{
                border: '1px solid rgba(200,155,83,0.3)',
                color: '#C89B53',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,83,0.06)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,155,83,0.6)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,155,83,0.3)';
              }}
            >
              FALE CONOSCO
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '0.72rem',
              color: '#B7B7B7',
              opacity: 0.5,
              letterSpacing: '0.04em',
            }}
          >
            © {new Date().getFullYear()} Espírito Santo. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '0.72rem',
              color: '#B7B7B7',
              opacity: 0.4,
              letterSpacing: '0.04em',
            }}
          >
            Privacidade &nbsp;·&nbsp; Termos de uso
          </p>
        </div>
      </div>
    </footer>
  );
}
