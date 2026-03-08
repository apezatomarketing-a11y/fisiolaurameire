import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { SERVICES, CONTACT_INFO, DOCUMENTS } from '@/lib/constants';
import { MessageCircle, Stethoscope, Package, Activity, Flower2, Pill, FileText, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope size={48} />,
  Package: <Package size={48} />,
  Activity: <Activity size={48} />,
  Flower2: <Flower2 size={48} />,
  Pill: <Pill size={48} />,
};

export default function Services() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--secondary),0.1),transparent_70%)]" />
        <div className="container relative z-10 text-center space-y-8 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
              Serviços
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Soluções nutricionais completas e personalizadas para cada objetivo de vida, unindo ciência e cuidado humano.
          </p>
        </div>
      </section>

      {/* Report Section - High Visibility */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto p-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-[4rem] shadow-2xl animate-gradient-text">
            <div className="bg-card rounded-[3.9rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
              <div className="p-8 bg-primary/10 rounded-[3rem] text-primary">
                <FileText size={80} />
              </div>
              <div className="flex-1 text-center md:text-left space-y-6">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">Relatório de Metodologia</h2>
                <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                  Baixe nosso guia completo sobre como funciona o acompanhamento nutricional e o que esperar da sua jornada de transformação.
                </p>
                <a
                  href={DOCUMENTS.relatorioServicos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20"
                >
                  Ver PDF Completo
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group p-10 md:p-12 bg-card border border-border rounded-[3rem] hover-glow transition-all duration-500 flex flex-col shadow-sm"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {ICON_MAP[service.icon as keyof typeof ICON_MAP]}
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-lg text-muted-foreground font-medium mb-10 flex-1 leading-relaxed">{service.description}</p>
                <button
                  onClick={() => handleWhatsApp(service.message)}
                  className="w-full flex items-center justify-center gap-4 px-8 py-5 bg-muted hover:bg-primary hover:text-white text-foreground rounded-2xl transition-all duration-300 font-black text-lg"
                >
                  <MessageCircle size={24} />
                  Consultar Detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 md:py-32 bg-muted/20">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto text-center space-y-16">
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter">Por que escolher meu acompanhamento?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {[
              { t: 'Personalização Real', d: 'Nada de dietas de gaveta. Tudo é feito do zero para sua realidade biológica e rotina.' },
              { t: 'Suporte Contínuo', d: 'Dúvidas pelo WhatsApp e ajustes sempre que necessário para manter a adesão.' },
              { t: 'Tecnologia de Ponta', d: 'Bioimpedância de última geração e aplicativos de suporte para monitoramento.' },
              { t: 'Resultados Sustentáveis', d: 'Foco na saúde duradoura e mudança de hábitos definitiva para a vida toda.' },
            ].map((item, i) => (
              <div key={i} className="p-10 bg-card rounded-[3rem] border border-border text-left hover-lift shadow-sm">
                <h4 className="text-2xl font-black text-primary mb-4">{item.t}</h4>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container text-center max-w-5xl mx-auto space-y-12 px-6 md:px-8 lg:px-12">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">Dúvidas sobre qual serviço escolher?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">Entre em contato para uma breve conversa e identificaremos o melhor caminho para seus objetivos.</p>
          <button
            onClick={() => handleWhatsApp('Olá! Gostaria de uma orientação sobre qual serviço seria ideal para o meu caso.')}
            className="px-16 py-8 bg-primary text-white rounded-3xl font-black text-2xl hover:scale-110 transition-all shadow-2xl active:scale-95 shadow-primary/20"
          >
            Falar com Susi
          </button>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
