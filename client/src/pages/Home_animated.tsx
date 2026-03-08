import { CONTACT_INFO, FEATURED_IMAGES, WHATSAPP_MESSAGES, SERVICES, COMPANY_INFO } from '@/lib/constants';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { MapPin, MessageCircle, Star, Users, Award, CheckCircle2 } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 pt-32 md:pt-24">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.05),transparent_70%)]" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[120px] animate-pulse-slow" />

        <div className="container relative z-10 px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Star size={16} className="text-blue-600 fill-blue-600 animate-spin-slow" />
                <p className="text-xs md:text-sm font-bold text-blue-600 uppercase tracking-widest">Fisioterapia Especializada</p>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-[1.1] animate-in fade-in slide-in-from-left-10 duration-1000">
                  Recupere o movimento, alivie a dor e melhore sua <br />
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
                    qualidade de vida.
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
                  Atendimento fisioterapêutico personalizado voltado para pacientes com disfunções neurológicas, com foco em recuperação funcional, alívio de dores e promoção da qualidade de vida.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.floatingButton)}
                  className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20 cursor-pointer hover:shadow-2xl hover:shadow-blue-600/40"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2 justify-center">
                    <MessageCircle size={22} />
                    Agendar Agora
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-card border border-border rounded-2xl font-bold text-lg hover:bg-muted transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg"
                >
                  Ver Serviços
                </button>
              </div>
            </div>

            {/* Featured Image Container */}
            <div className="relative order-1 lg:order-2 group animate-in fade-in zoom-in duration-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-[2rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-card shadow-2xl bg-muted">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👩‍⚕️</div>
                    <p className="text-muted-foreground font-medium">Foto em breve</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                
                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-effect rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/20 rounded-xl">
                      <Award className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-blue-600 uppercase">Especialista</p>
                      <p className="font-bold">Fisioterapia Neurofuncional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-blue-600/10 via-blue-400/5 to-blue-600/10 border-y border-blue-600/10">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1 animate-in fade-in slide-in-from-left-10 duration-1000">
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-tight bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Conheça a profissional por trás do cuidado
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Laura Meira é fisioterapeuta dedicada ao cuidado integral do paciente, com foco na recuperação funcional, alívio de dores e promoção da qualidade de vida.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Seu atendimento é baseado em avaliação individualizada, identificação da causa da dor e aplicação das técnicas mais adequadas para cada caso.
              </p>
              <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                O objetivo não é apenas tratar sintomas, mas restaurar movimento, prevenir novas lesões e devolver autonomia ao paciente.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold">Diferenciais:</h3>
                <div className="space-y-3">
                  {[
                    'Atendimento humanizado',
                    'Avaliação individualizada',
                    'Plano de tratamento personalizado',
                    'Foco na causa da dor, não apenas nos sintomas',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group cursor-default hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle2 className="text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <span className="text-foreground font-medium group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative group order-1 lg:order-2 animate-in fade-in zoom-in duration-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl bg-muted group-hover:shadow-3xl transition-shadow duration-500">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👩‍⚕️</div>
                    <p className="text-muted-foreground font-medium">Foto em breve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20 animate-in fade-in slide-in-from-top-10 duration-1000">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Serviços</h2>
              <p className="text-xl text-muted-foreground font-medium">Atendimentos especializados para sua recuperação e bem-estar.</p>
            </div>
          </div>

          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-in fade-in slide-in-from-bottom-10 duration-1000`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image - alternates position */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl bg-muted group-hover:shadow-3xl transition-all duration-500 cursor-default">
                    <img
                      src={getServiceImage(service.id)}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content - alternates position */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} animate-in fade-in slide-in-from-left-10 duration-1000`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">{service.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-black text-blue-600">{service.price}</div>
                  </div>

                  <button
                    onClick={() => handleWhatsApp(service.message)}
                    className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20 w-full sm:w-auto cursor-pointer hover:shadow-2xl hover:shadow-blue-600/40"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center gap-2 justify-center">
                      <MessageCircle size={20} />
                      Agendar via WhatsApp
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-muted/20">
        <div className="container relative z-10 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: 'Anos de Exp.', val: '10+', icon: Award, color: 'text-blue-600' },
              { label: 'Pacientes', val: '200+', icon: Users, color: 'text-blue-500' },
              { label: 'Satisfação', val: '100%', icon: Star, color: 'text-blue-600' },
              { label: 'Especialidades', val: '5+', icon: CheckCircle2, color: 'text-blue-500' },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="group p-8 md:p-10 bg-card border border-border rounded-[2.5rem] hover-lift text-center shadow-sm hover:shadow-lg hover:border-blue-600/30 transition-all duration-300 cursor-default hover:-translate-y-2"
              >
                <stat.icon className={`${stat.color} mx-auto mb-4 group-hover:scale-125 transition-transform duration-300`} size={40} />
                <div className="text-4xl md:text-5xl font-black mb-1 group-hover:text-blue-600 transition-colors duration-300">{stat.val}</div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-tighter group-hover:text-blue-600 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-muted/10">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-10 animate-in fade-in slide-in-from-left-10 duration-1000">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Agende sua Avaliação</h2>
              <div className="space-y-8">
                <div className="flex gap-6 group cursor-default hover:translate-x-2 transition-transform duration-300">
                  <div className="p-5 bg-blue-600/10 rounded-2xl h-fit group-hover:bg-blue-600/20 transition-colors duration-300">
                    <MapPin className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-2xl mb-2 group-hover:text-blue-600 transition-colors duration-300">Localização</p>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed">{CONTACT_INFO.address}</p>
                    <p className="text-lg text-muted-foreground font-medium mt-2">Horário: {CONTACT_INFO.hours}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.floatingButton)}
                  className="w-full md:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-blue-600/20 cursor-pointer hover:shadow-2xl hover:shadow-blue-600/40"
                >
                  Falar no WhatsApp
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="relative group animate-in fade-in zoom-in duration-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative h-[500px] rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.3829!2d-43.8!3d-19.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLagoa%20Santa%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="relative p-16 md:p-32 bg-gradient-to-r from-blue-600 to-blue-500 rounded-[5rem] overflow-hidden text-center text-white shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">Comece sua Transformação</h2>
            <p className="text-xl md:text-2xl text-blue-50/80 font-medium">Agende sua avaliação e dê o primeiro passo para uma vida com mais movimento e melhor qualidade de vida.</p>
            <button
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.floatingButton)}
              className="px-16 py-8 bg-white text-blue-600 rounded-3xl font-black text-2xl hover:scale-110 transition-all shadow-2xl active:scale-95 cursor-pointer hover:shadow-3xl"
            >
              Agendar via WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
