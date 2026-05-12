import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import pombo from '../../icones/pombo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Coroas de Flores', href: '#coroas' },
    { label: 'Planos', href: '#planos' },
    { label: 'Sobre Nós', href: '#sobre' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#05070B]/90 backdrop-blur-md border-b border-[rgba(200,155,83,0.12)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={pombo} alt="" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
          </div>
          <div className="flex flex-col">
            <span
              className="text-[#F5F1EA] tracking-widest leading-tight transition-colors duration-300 group-hover:text-[#C89B53]"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '1.15rem', letterSpacing: '0.18em' }}
            >
              Espírito Santo
            </span>
            <span
              className="text-[#C89B53] tracking-[0.28em] leading-none"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.52rem' }}
            >
              ASSISTÊNCIA FUNERAL
            </span>
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#B7B7B7] hover:text-[#C89B53] transition-colors duration-300 text-sm tracking-wider relative group"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, letterSpacing: '0.06em' }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C89B53] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:08000000000"
            className="flex items-center gap-2 text-[#B7B7B7] hover:text-[#C89B53] transition-colors duration-300"
          >
            <Phone size={15} strokeWidth={1.5} className="text-[#C89B53]" />
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.85rem', letterSpacing: '0.06em' }}>
              0800 000 0000
            </span>
          </a>
          <a
            href="#contato"
            className="px-6 py-2.5 border border-[rgba(200,155,83,0.5)] text-[#C89B53] text-sm tracking-wider hover:bg-[#C89B53] hover:text-[#05070B] transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.08em', fontSize: '0.8rem' }}
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-[#C89B53]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#05070B]/98 backdrop-blur-md border-t border-[rgba(200,155,83,0.12)] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#B7B7B7] hover:text-[#C89B53] transition-colors duration-300 text-base tracking-wider"
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[rgba(200,155,83,0.12)] flex flex-col gap-4">
            <a href="tel:08000000000" className="flex items-center gap-2 text-[#B7B7B7]">
              <Phone size={15} strokeWidth={1.5} className="text-[#C89B53]" />
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.9rem' }}>0800 000 0000</span>
            </a>
            <a
              href="#contato"
              className="w-full text-center py-3 border border-[rgba(200,155,83,0.5)] text-[#C89B53] text-sm tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.08em' }}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
