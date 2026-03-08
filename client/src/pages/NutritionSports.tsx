import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { WHATSAPP_MESSAGES, CONTACT_INFO } from '@/lib/constants';
import { MessageCircle, Zap, Dumbbell, Timer, Droplets, Target, TrendingUp } from 'lucide-react';

export default function NutritionSports() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const topics = [
    {
      title: 'Pré-Treino',
      icon: Timer,
      description: 'Estratégias para maximizar energia e foco durante o exercício.',
      tips: ['Carboidratos estratégicos', 'Proteína funcional', 'Timing nutricional'],
    },
    {
      title: 'Pós-Treino',
      icon: TrendingUp,
      description: 'Recuperação acelerada e síntese proteica otimizada.',
      tips: ['Janela de recuperação', 'Reposição de glicogênio', 'Aminoácidos essenciais'],
    },
    {
      title: 'Suplementação',
      icon: Zap,
      description: 'Uso inteligente de suplementos com comprovação científica.',
      tips: ['Creatina e Beta-alanina', 'Whey e Caseína', 'Vitaminas esportivas'],
    },
    {
      title: 'Hidratação',
      icon: Droplets,
      description: 'Equilíbrio hidroeletrolítico para performance máxima.',
      tips: ['Reposição de sais', 'Isotônicos naturais', 'Controle de desidratação'],
    },
    {
      title: 'Hipertrofia',
      icon: Dumbbell,
      description: 'Protocolos específicos para ganho de massa muscular magra.',
      tips: ['Superávit controlado', 'Divisão de macros', 'Consistência anabólica'],
    },
    {
      title: 'Periodização',
      icon: Target,
      description: 'Nutrição adaptada ao seu ciclo de treinamento.',
      tips: ['Fase de força', 'Fase de cutting', 'Manutenção atlética'],
    },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--secondary),0.1),transparent_70%)]" />
        <div className="container relative z-10 text-center space-y-8 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
              Nutrição Esportiva
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Leve seu desempenho ao próximo nível com estratégias de nutrição de elite desenhadas para atletas e entusiastas.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="group p-10 md:p-12 bg-card border border-border rounded-[3rem] hover-glow transition-all duration-500 flex flex-col shadow-sm"
              >
                <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <topic.icon size={40} />
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-secondary transition-colors">{topic.title}</h3>
                <p className="text-lg text-muted-foreground font-medium mb-8 leading-relaxed">{topic.description}</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {topic.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-base font-bold text-foreground/70">
                      <Zap size={18} className="text-secondary" />
                      {tip}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionSports)}
                  className="w-full flex items-center justify-center gap-4 px-8 py-5 bg-muted hover:bg-secondary hover:text-white text-foreground rounded-2xl transition-all duration-300 font-black text-lg"
                >
                  <MessageCircle size={24} />
                  Otimizar Treino
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-24 md:py-32 bg-secondary/5 border-y border-secondary/10">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter mb-20">O Atleta de Elite Nutre seu Sucesso</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {['Força Extrema', 'Foco Mental', 'Recuperação 2x', 'Energia Infinita'].map((b, i) => (
              <div key={i} className="space-y-4">
                <div className="text-2xl md:text-4xl font-black text-secondary">{b}</div>
                <div className="h-2 w-16 bg-secondary mx-auto rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="relative p-16 md:p-32 bg-secondary rounded-[5rem] overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">Alcance seu auge físico.</h2>
            <p className="text-xl md:text-2xl text-secondary-foreground/80 font-medium leading-relaxed">Protocolos esportivos personalizados para quem não aceita menos que o topo absoluto.</p>
            <button
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionSports)}
              className="px-16 py-8 bg-white text-secondary rounded-3xl font-black text-2xl hover:scale-110 transition-all shadow-2xl active:scale-95"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
