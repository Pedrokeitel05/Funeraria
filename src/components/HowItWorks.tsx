import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Contato Inicial',
    description: 'Basta uma ligação. Nossa equipe estará à disposição para ir até você imediatamente e iniciar o suporte.',
  },
  {
    number: '02',
    title: 'Resolução Burocrática',
    description: 'Cuidamos de toda a documentação necessária de forma ágil, poupando a família de trâmites exaustivos.',
  },
  {
    number: '03',
    title: 'Preparação & Cerimônia',
    description: 'Preparamos o cerimonial com o máximo de respeito e dignidade, respeitando as crenças e desejos da família.',
  },
  {
    number: '04',
    title: 'Acolhimento Contínuo',
    description: 'Oferecemos orientação para os próximos passos e suporte para lidar com o processo de luto.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#080C14] section-padding relative overflow-hidden">
      {/* Subtle glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-theme px-6 lg:px-12 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-24"
        >
          <span className="text-gold tracking-[0.2em] text-xs font-sans uppercase mb-4">Como Funciona</span>
          <h2 className="text-text-warm font-serif text-4xl lg:text-5xl mb-6">
            O processo em <span className="text-gold italic">4 etapas.</span>
          </h2>
          <p className="text-text-secondary font-sans text-lg font-light max-w-2xl">
            Desenhamos um fluxo transparente e descomplicado para que a família possa focar no que realmente importa: a despedida e as lembranças.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-1/4 right-1/4 h-px bg-gold/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center mb-8 relative z-10 border-gold/30 bg-[#080C14]">
                <span className="text-gold font-serif text-3xl">{step.number}</span>
              </div>
              <h3 className="text-text-warm font-serif text-2xl mb-4">{step.title}</h3>
              <p className="text-text-secondary font-sans text-sm font-light leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
