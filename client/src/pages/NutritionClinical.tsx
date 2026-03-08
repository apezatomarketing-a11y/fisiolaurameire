import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { WHATSAPP_MESSAGES, CONTACT_INFO } from '@/lib/constants';
import { MessageCircle, Activity, Heart, Thermometer, User, Flower2, Zap } from 'lucide-react';

export default function NutritionClinical() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const conditions = [
    {
      title: 'Diabetes',
      icon: Activity,
      description: 'Controle glicêmico através de uma alimentação estratégica e personalizada.',
      details: ['Monitoramento de carboidratos', 'Controle de índice glicêmico', 'Educação alimentar contínua'],
    },
    {
      title: 'Hipertensão',
      icon: Heart,
      description: 'Redução de sódio e otimização de nutrientes para controle da pressão arterial.',
      details: ['Redução de sódio', 'Aumento de potássio', 'Controle de peso'],
    },
    {
      title: 'Menopausa',
      icon: Thermometer,
      description: 'Nutrição adequada para aliviar sintomas e manter qualidade de vida.',
      details: ['Aumento de cálcio', 'Fitoestrógenos', 'Vitaminas e minerais'],
    },
    {
      title: 'Ovário Policístico',
      icon: Flower2,
      description: 'Alimentação anti-inflamatória e hormonal para SOP.',
      details: ['Redução de inflamação', 'Controle de insulina', 'Suplementação adequada'],
    },
    {
      title: 'Saúde da Mulher',
      icon: User,
      description: 'Nutrição específica para cada fase da vida da mulher.',
      details: ['Ciclo menstrual', 'Gravidez e lactação', 'Prevenção de doenças'],
    },
    {
      title: 'Metabolismo',
      icon: Zap,
      description: 'Otimização metabólica e melhora da disposição diária.',
      details: ['Perfil lipídico', 'Energia celular', 'Equilíbrio hormonal'],
    },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_70%)]" />
        <div className="container relative z-10 text-center space-y-8 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
              Nutrição Clínica
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Tratamento nutricional baseado em evidências para o controle e prevenção de patologias com foco em resultados reais.
          </p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="group p-10 md:p-12 bg-card border border-border rounded-[3rem] hover-glow transition-all duration-500 flex flex-col shadow-sm"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <condition.icon size={40} />
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors">{condition.title}</h3>
                <p className="text-lg text-muted-foreground font-medium mb-8 leading-relaxed">{condition.description}</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {condition.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-base font-bold text-foreground/70">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionClinical)}
                  className="w-full flex items-center justify-center gap-4 px-8 py-5 bg-muted hover:bg-primary hover:text-white text-foreground rounded-2xl transition-all duration-300 font-black text-lg"
                >
                  <MessageCircle size={24} />
                  Saber Mais
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="relative p-16 md:p-32 bg-primary rounded-[5rem] overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">Sua saúde não pode esperar.</h2>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-relaxed">Agende uma consulta clínica e inicie seu protocolo de tratamento personalizado hoje mesmo.</p>
            <button
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionClinical)}
              className="px-16 py-8 bg-white text-primary rounded-3xl font-black text-2xl hover:scale-110 transition-all shadow-2xl active:scale-95"
            >
              Agendar Agora
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
