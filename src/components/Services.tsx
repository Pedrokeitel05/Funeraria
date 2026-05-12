import { motion } from 'framer-motion';
import { Shield, HeartHandshake, Users, ClipboardList } from 'lucide-react';

const services = [
  {
    icon: <Shield size={24} />,
    title: 'Segurança & Confiança',
    description: 'Nossa equipe atua com total transparência e seriedade, garantindo que tudo seja feito com a máxima segurança para sua família.',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Acolhimento Humano',
    description: 'Cada atendimento é único. Nossa prioridade é oferecer um ombro amigo e todo o suporte emocional necessário.',
  },
  {
    icon: <ClipboardList size={24} />,
    title: 'Cuidado Completo',
    description: 'Resolvemos toda a burocracia e detalhes práticos, para que você não precise se preocupar com nada além de estar com sua família.',
  },
  {
    icon: <Users size={24} />,
    title: 'Equipe Especializada',
    description: 'Profissionais experientes, discretos e altamente preparados para atuar com respeito em todas as etapas.',
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-bg-main section-padding relative">
      <div className="max-w-theme px-6 lg:px-12 w-full">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-gold tracking-[0.2em] text-xs font-sans uppercase mb-4 block">Nossos Diferenciais</span>
          <h2 className="text-text-warm font-serif text-4xl lg:text-5xl mb-6">
            Compromisso com o seu <span className="text-gold italic">bem-estar.</span>
          </h2>
          <p className="text-text-secondary font-sans text-lg font-light">
            Entendemos a delicadeza do momento. Por isso, nossos pilares são baseados no respeito e na dedicação integral a você.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 mb-8 text-gold group-hover:bg-gold group-hover:text-[#111] transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-text-warm font-serif text-2xl mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-secondary font-sans text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
