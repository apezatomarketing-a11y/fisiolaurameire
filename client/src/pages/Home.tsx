import { CONTACT_INFO, FEATURED_IMAGES, WHATSAPP_MESSAGES, SERVICES, COMPANY_INFO } from '@/lib/constants';
import { MapPin, MessageCircle, Star, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getServiceImage = (serviceId: string) => {
    const imageMap: { [key: string]: string } = {
      'pilates-1x': FEATURED_IMAGES.pilates1x,
      'pilates-2x': FEATURED_IMAGES.pilates2x,
      'pilates-3x': FEATURED_IMAGES.pilates3x,
      'reabilitacao-neuro': FEATURED_IMAGES.reabilitacao,
      'pediatria': FEATURED_IMAGES.pediatria,
    };
    return imageMap[serviceId] || FEATURED_IMAGES.reabilitacao;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 pt-32 md:pt-24">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.05),transparent_70%)]" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[120px]" 
        />

        <div className="container relative z-10 px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600/10 rounded-full border border-blue-600/20 cursor-default"
              >
                <Star size={16} className="text-blue-600 fill-blue-600 animate-pulse" />
                <p className="text-xs md:text-sm font-black text-blue-600 uppercase tracking-[0.2em]">Fisioterapia Especializada</p>
              </motion.div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.95]">
                  Recupere o movimento, alivie a dor e melhore sua <br />
                  <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
                    qualidade de vida.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Atendimento fisioterapêutico personalizado voltado para pacientes com disfunções neurológicas, com foco em recuperação funcional, alívio de dores e promoção da qualidade de vida.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.floatingButton)}
                  className="group relative px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black text-xl overflow-hidden transition-all shadow-2xl shadow-blue-600/30 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative flex items-center gap-3 justify-center">
                    <MessageCircle size={24} />
                    Agendar Agora
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(var(--primary), 0.05)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('services')}
                  className="px-10 py-5 bg-card border-2 border-blue-600/20 rounded-[2rem] font-black text-xl transition-all flex items-center justify-center gap-3 cursor-pointer hover:border-blue-600/40"
                >
                  Ver Serviços
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Featured Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative order-1 lg:order-2 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-[3rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-700 blur-xl" />
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl bg-muted">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="text-8xl mb-6"
                    >
                      👩‍⚕️
                    </motion.div>
                    <p className="text-muted-foreground font-black uppercase tracking-widest text-sm">Foto em breve</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                
                {/* Floating Info Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute bottom-8 left-8 right-8 p-8 glass-effect rounded-[2rem] border border-white/20 shadow-2xl cursor-default"
                >
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-600/30">
                      <Award size={32} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Especialista</p>
                      <p className="font-black text-xl leading-tight">Fisioterapia Neurofuncional</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-48 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-600/5 border-y border-blue-600/10">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Text Content */}
            <motion.div 
              {...fadeInUp}
              className="space-y-10 text-center lg:text-left order-2 lg:order-1"
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Conheça a profissional por trás do cuidado
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                <p>
                  Laura Meira é fisioterapeuta dedicada ao cuidado integral do paciente, com foco na recuperação funcional, alívio de dores e promoção da qualidade de vida.
                </p>
                <p>
                  Seu atendimento é baseado em avaliação individualizada, identificação da causa da dor e aplicação das técnicas mais adequadas para cada caso.
                </p>
                <p className="text-foreground font-black">
                  O objetivo não é apenas tratar sintomas, mas restaurar movimento, prevenir novas lesões e devolver autonomia ao paciente.
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="text-2xl font-black tracking-tight">Nossos Diferenciais:</h3>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {[
                    'Atendimento humanizado',
                    'Avaliação individualizada',
                    'Plano de tratamento personalizado',
                    'Foco na causa da dor',
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl group cursor-default shadow-sm hover:shadow-md hover:border-blue-600/30 transition-all"
                    >
                      <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-foreground font-bold">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-[4rem] opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative aspect-square rounded-[4rem] overflow-hidden border-8 border-card shadow-2xl bg-muted group-hover:shadow-3xl transition-all duration-700">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="text-9xl mb-8"
                    >
                      👩‍⚕️
                    </motion.div>
                    <p className="text-muted-foreground font-black uppercase tracking-[0.3em] text-sm">Laura Meira</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 md:py-48 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Serviços</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-bold">Atendimentos especializados para sua recuperação e bem-estar.</p>
          </motion.div>

          <div className="space-y-24 md:space-y-40">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center`}
              >
                {/* Image - alternates position */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`relative group ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-[3rem] opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl bg-muted group-hover:shadow-3xl transition-all duration-700">
                    <img
                      src={getServiceImage(service.id)}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>

                {/* Content - alternates position */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "80px" }}
                      className="h-2 bg-blue-600 rounded-full"
                    />
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleWhatsApp(service.message)}
                    className="group flex items-center gap-4 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-600/20 cursor-pointer"
                  >
                    <MessageCircle size={24} />
                    Agendar via WhatsApp
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 md:py-48 relative overflow-hidden bg-muted/20">
        <div className="container relative z-10 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { label: 'Anos de Exp.', val: '10+', icon: Award, color: 'text-blue-600' },
              { label: 'Pacientes', val: '200+', icon: Users, color: 'text-blue-500' },
              { label: 'Satisfação', val: '100%', icon: Star, color: 'text-blue-600' },
              { label: 'Especialidades', val: '5+', icon: CheckCircle2, color: 'text-blue-500' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group p-10 bg-card border border-border rounded-[3rem] text-center shadow-sm hover:shadow-2xl hover:border-blue-600/30 transition-all duration-500 cursor-default"
              >
                <div className={`w-20 h-20 ${stat.color} bg-blue-600/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500`}>
                  <stat.icon size={40} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-5xl md:text-6xl font-black mb-2 group-hover:text-blue-600 transition-colors">{stat.val}</div>
                <p className="text-sm font-black text-muted-foreground uppercase tracking-[0.2em] group-hover:text-blue-600 transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 md:py-48 bg-muted/10">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 items-center">
            <motion.div 
              {...fadeInUp}
              className="space-y-12"
            >
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Agende sua Avaliação</h2>
              <div className="space-y-10">
                <motion.div 
                  whileHover={{ x: 15 }}
                  className="flex gap-8 group cursor-default"
                >
                  <div className="p-6 bg-blue-600 text-white rounded-3xl h-fit shadow-xl shadow-blue-600/20 group-hover:rotate-6 transition-all duration-500">
                    <MapPin size={40} />
                  </div>
                  <div>
                    <p className="font-black text-3xl mb-3 group-hover:text-blue-600 transition-colors">Localização</p>
                    <p className="text-xl text-muted-foreground font-bold leading-relaxed">{CONTACT_INFO.address}</p>
                    <p className="text-lg text-blue-600 font-black mt-3 uppercase tracking-widest">Horário: {CONTACT_INFO.hours}</p>
                  </div>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.floatingButton)}
                  className="w-full md:w-auto px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30 cursor-pointer"
                >
                  Falar no WhatsApp agora
                </motion.button>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-[4rem] opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative h-[600px] rounded-[4rem] overflow-hidden border-8 border-card shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.3829!2d-43.8!3d-19.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLagoa%20Santa%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative p-20 md:p-40 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-[5rem] overflow-hidden text-center text-white shadow-2xl hover:shadow-3xl transition-all duration-700 group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)] opacity-50 group-hover:scale-110 transition-transform duration-1000" />
          <div className="relative z-10 space-y-12 max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">Comece sua Transformação</h2>
            <p className="text-2xl md:text-3xl text-blue-50/90 font-bold leading-relaxed">Agende sua avaliação e dê o primeiro passo para uma vida com mais movimento e melhor qualidade de vida.</p>
            <motion.button
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.floatingButton)}
              className="px-20 py-10 bg-white text-blue-600 rounded-[2.5rem] font-black text-3xl transition-all shadow-2xl hover:shadow-white/20 active:scale-95 cursor-pointer"
            >
              Agendar via WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
