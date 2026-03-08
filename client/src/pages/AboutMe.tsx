import Gallery from '@/components/Gallery';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { FEATURED_IMAGES } from '@/lib/constants';
import { Award, BookOpen, Heart, ShieldCheck, Trophy, Target } from 'lucide-react';

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(var(--secondary),0.05),transparent_70%)]" />
        
        <div className="container relative z-10 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Featured Image Container */}
            <div className="relative order-2 lg:order-1 group">
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src={FEATURED_IMAGES.aboutHighlight}
                  alt="Susi Farias - Nutricionista"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Heart size={16} className="text-secondary fill-secondary" />
                <p className="text-xs md:text-sm font-bold text-secondary uppercase tracking-widest">Minha História</p>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
                  Susi Farias
                </span>
              </h1>
              
              <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                <p className="animate-in fade-in slide-in-from-right-10 duration-700 delay-100">
                  Prazer, eu sou Susi Farias, nutricionista com mais de <span className="text-foreground font-bold">duas décadas de atuação na área da saúde</span>, especialista em Nutrição Clínica, Nutrição Esportiva, Obesidade e Emagrecimento.
                </p>
                <p className="animate-in fade-in slide-in-from-right-10 duration-700 delay-200">
                  Além da formação em Nutrição, também sou enfermeira e técnica de enfermagem, o que amplia meu olhar clínico e fortalece meu compromisso com um cuidado integral, seguro e responsável.
                </p>
                <p className="animate-in fade-in slide-in-from-right-10 duration-700 delay-300">
                  Minha missão é ajudar mulheres a recuperarem a saúde metabólica, hormonal e emocional, promovendo emagrecimento consciente, melhora da autoestima e qualidade de vida. Acredito que saúde vai muito além da balança — envolve equilíbrio físico, mental e emocional.
                </p>
                <p className="animate-in fade-in slide-in-from-right-10 duration-700 delay-400">
                  Sou também <span className="text-foreground font-bold">atleta amadora há 8 anos e ultramaratonista</span>, e escolhi o esporte como estilo de vida. Levo para o consultório não apenas a teoria, mas a vivência real de disciplina, superação e performance.
                </p>
                <p className="animate-in fade-in slide-in-from-right-10 duration-700 delay-500">
                  Meu atendimento é humanizado, individualizado e baseado em ciência. Cada paciente é único, e o plano alimentar precisa respeitar rotina, preferências, limitações e objetivos pessoais.
                </p>
                <p className="animate-in fade-in slide-in-from-right-10 duration-700 delay-600">
                  Estou em constante atualização, participando de cursos, congressos e formações, sempre buscando oferecer o que há de mais atual e seguro para quem confia no meu trabalho.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: ShieldCheck, text: 'Abordagem Humanizada' },
                    { icon: Award, text: 'Especialista em Clínica' },
                    { icon: BookOpen, text: 'Base Científica' },
                    { icon: Heart, text: 'Foco no Bem-estar' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors shadow-sm">
                      <item.icon className="text-primary" size={20} />
                      <span className="text-sm font-bold text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Trophy size={16} className="text-primary fill-primary" />
                <p className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">Conquistas</p>
              </div>
              
              <h2 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter">Minha Trajetória Profissional</h2>
              
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                Minha trajetória profissional é construída com dedicação, estudo contínuo e resultados reais na vida dos meus pacientes.
              </p>
              
              <div className="space-y-6">
                <div className="p-8 md:p-10 bg-card border border-border rounded-[2.5rem] hover-lift shadow-sm">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Award className="text-primary" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">Reconhecimentos</h3>
                      <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                        Fui homenageada com o título de <span className="text-foreground font-bold">Nutricionista do Ano</span> por votação popular e também recebi o reconhecimento por mérito de atendimento, na cidade de São José dos Campos.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 bg-card border border-border rounded-[2.5rem] hover-lift shadow-sm">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-secondary/10 rounded-2xl">
                      <Trophy className="text-secondary" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Conquistas Esportivas</h3>
                      <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                        Como atleta amadora e ultramaratonista, acumulo troféus em competições de corrida de rua, incluindo provas de meia maratona e ultramaratonas.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-10 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-[3rem] shadow-sm">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-primary/20 rounded-2xl">
                      <Target className="text-primary" size={32} />
                    </div>
                    <div>
                      <p className="text-foreground font-bold text-xl md:text-2xl leading-relaxed">
                        Cada conquista profissional e esportiva fortalece o meu propósito: transformar vidas por meio da saúde, do equilíbrio e do cuidado integral.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary/20 rounded-[4rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 blur-xl" />
              <div className="relative rounded-[4rem] overflow-hidden border-8 border-card shadow-2xl">
                <img
                  src={FEATURED_IMAGES.aboutAchievement}
                  alt="Conquista Profissional"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Animada com Loop Infinito */}
      <section className="py-24 md:py-32 overflow-hidden bg-background">
        <div className="container mb-20 text-center px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter mb-6">Galeria de Conquistas</h2>
          <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto">Momentos que marcaram minha trajetória e o sucesso dos meus pacientes.</p>
        </div>
        <Gallery />
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="container text-center max-w-5xl mx-auto space-y-10 px-6 md:px-8 lg:px-12">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">Vamos escrever sua história de sucesso?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">Estou pronta para te guiar nessa jornada de transformação.</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-16 py-8 bg-primary text-white rounded-3xl font-black text-2xl hover:scale-110 transition-all shadow-2xl shadow-primary/20 active:scale-95"
          >
            Agendar Consulta
          </a>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
