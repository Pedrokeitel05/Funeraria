import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-bg-main"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="absolute right-0 top-0 h-full w-full lg:w-[58%] object-cover opacity-40"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070Bee] to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/40" />
      </div>

      {/* Gold cinematic glow */}
      <div className="absolute left-[-250px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#C89B4E]/10 blur-[160px]" />

      <div className="absolute right-[-250px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#C89B4E]/10 blur-[160px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 lg:px-12">
        <div className="mx-auto flex max-w-[900px] flex-col items-center pt-32 pb-24 text-center">

          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 inline-flex items-center gap-3 rounded-full border border-[#C89B4E]/20 bg-white/[0.03] px-6 py-3 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-[#C89B4E]" />

            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#C89B4E]">
              Atendimento 24h • Acolhimento Premium
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-white"
            style={{
              fontSize: 'clamp(4.5rem, 8vw, 7.5rem)',
              lineHeight: '.92',
              letterSpacing: '-0.05em',
            }}
          >
            Honrando <span className="italic text-[#C89B4E]">
              memórias
            </span>
            <br />
            com respeito e dignidade.
            <br />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: .2 }}
            className="mt-10 max-w-[720px] text-center font-sans text-lg font-light leading-relaxed text-[#CFCFCF] lg:text-xl"
          >
            Em momentos delicados, oferecemos suporte completo com elegância,
            empatia e cuidado em cada detalhe para trazer tranquilidade à sua família.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: .4 }}
            className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <a
              href="tel:08000000000"
              className="group flex items-center justify-center gap-3 rounded-full bg-[#C89B4E] px-10 py-5 font-sans text-sm font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-[1.02]"
              style={{
                boxShadow: '0 0 40px rgba(200,155,78,.25)',
              }}
            >
              <Phone size={18} />

              Atendimento imediato
            </a>

            <a
              href="#plans"
              className="flex items-center justify-center gap-3 rounded-full border border-[#C89B4E]/20 bg-white/[0.03] px-10 py-5 font-sans text-sm font-medium uppercase tracking-[0.15em] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05]"
            >
              Conhecer planos

              <ArrowRight size={18} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}