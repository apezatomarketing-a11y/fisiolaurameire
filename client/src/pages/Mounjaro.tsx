import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { WHATSAPP_MESSAGES, CONTACT_INFO, FEATURED_IMAGES } from '@/lib/constants';
import { MessageCircle, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';

export default function Mounjaro() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const benefits = [
    'Redução do apetite',
    'Melhor controle glicêmico',
    'Perda de peso sustentável',
    'Melhora da saúde cardiovascular',
    'Aumento de energia',
    'Melhor qualidade de vida',
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_70%)]" />
        <div className="container relative z-10 text-center space-y-8 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-bounce-slow">
            <Sparkles size={20} className="text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">Inovação Médica</span>
          </div>
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
              Mounjaro
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            O tratamento revolucionário que está transformando o controle de peso e saúde metabólica com tecnologia de ponta.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 md:py-32 bg-muted/30 relative">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Video Container */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-primary/20 rounded-[4rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 blur-2xl" />
              <div className="relative aspect-[9/16] max-w-[400px] mx-auto rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl bg-black">
                <video
                  controls
                  className="w-full h-full object-contain"
                  poster={FEATURED_IMAGES.home}
                >
                  <source src="/assets/videos/mounjaro_local.mp4" type="video/mp4" />
                  Seu navegador não suporta reprodução de vídeo.
                </video>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-10 order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-tight">Entenda a Ciência</h2>
              <div className="space-y-8 text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                <p>
                  Mounjaro (Tirzepatida) é o primeiro e único agonista dos receptores GIP e GLP-1, atuando de forma sinérgica no organismo para resultados sem precedentes.
                </p>
                <p>
                  Diferente de outros tratamentos, ele oferece um mecanismo duplo que otimiza a saciedade e melhora significativamente a resposta insulínica.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.mounjaro)}
                    className="w-full md:w-auto px-12 py-6 bg-primary text-white rounded-2xl font-black text-xl hover:scale-110 transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-4"
                  >
                    <MessageCircle size={28} />
                    Quero saber mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter mb-6">Principais Benefícios</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">Por que este protocolo é o padrão ouro na atualidade?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-10 bg-card border border-border rounded-[3rem] hover-lift group shadow-sm"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-black leading-tight">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 md:py-32 bg-destructive/5">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto p-12 md:p-20 bg-card border-2 border-destructive/20 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <ShieldAlert size={200} className="text-destructive" />
            </div>
            <div className="relative z-10 space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-destructive flex items-center gap-6">
                <ShieldAlert size={56} />
                Atenção e Segurança
              </h2>
              <p className="text-xl md:text-2xl font-bold text-foreground/80 leading-relaxed">
                O uso do Mounjaro deve ser rigorosamente acompanhado por profissionais de saúde qualificados. Não é indicado para gestantes ou pacientes com condições específicas pré-existentes.
              </p>
              <div className="pt-6 border-t border-destructive/10">
                <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-8">Avaliação Obrigatória Inclui:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Exames Laboratoriais Completos', 'Histórico Clínico Detalhado', 'Análise de Perfil Metabólico', 'Suporte Nutricional Contínuo'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 font-black text-lg">
                      <div className="w-3 h-3 bg-destructive rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container text-center max-w-5xl mx-auto space-y-12 px-6 md:px-8 lg:px-12">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">Pronto para sua melhor versão?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">Combine a tecnologia do Mounjaro com um plano nutricional de elite desenhado especificamente para você.</p>
          <button
            onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.mounjaro)}
            className="px-16 py-8 bg-primary text-white rounded-3xl font-black text-2xl hover:scale-110 transition-all shadow-2xl shadow-primary/20 active:scale-95"
          >
            Agendar Avaliação
          </button>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
