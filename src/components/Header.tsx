import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#services' },
    { label: 'Como Funciona', href: '#how-it-works' },
    { label: 'Planos', href: '#plans' },
    { label: 'Sobre Nós', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-main'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-theme px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-full group-hover:border-gold transition-colors duration-300">
            {/* Elegant simplistic logo icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L20 21H4L12 3Z" stroke="#C89B4E" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M12 9V17" stroke="#C89B4E" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span
              className="text-text-warm tracking-[0.15em] leading-tight transition-colors duration-300 group-hover:text-gold uppercase"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '1.25rem' }}
            >
              Espírito Santo
            </span>
            <span
              className="text-gold tracking-[0.3em] leading-none mt-1"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.6rem' }}
            >
              CUIDADO QUE ACOLHE
            </span>
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-secondary hover:text-gold transition-colors duration-300 text-sm tracking-[0.1em] relative group uppercase"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full opacity-50" />
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="tel:08000000000"
            className="flex items-center gap-3 text-text-secondary hover:text-gold transition-colors duration-300"
          >
            <Phone size={16} strokeWidth={1.5} className="text-gold" />
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.9rem', tracking: '0.05em' }}>
              0800 000 0000
            </span>
          </a>
          <a
            href="#contato"
            className="btn-secondary px-8 py-3 rounded-full text-sm tracking-[0.1em] uppercase"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-gold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[#05070B] border-t border-gold/10 px-6 py-8 flex flex-col gap-6 absolute top-full left-0 right-0 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary hover:text-gold transition-colors duration-300 text-base tracking-widest uppercase"
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 border-t border-gold/10 flex flex-col gap-6 mt-4">
              <a href="tel:08000000000" className="flex items-center gap-3 text-text-secondary hover:text-gold">
                <Phone size={18} strokeWidth={1.5} className="text-gold" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1rem' }}>0800 000 0000</span>
              </a>
              <a
                href="#contato"
                className="w-full text-center py-4 btn-primary rounded-full text-sm tracking-widest uppercase"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
