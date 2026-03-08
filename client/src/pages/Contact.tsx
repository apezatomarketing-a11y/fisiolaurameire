import { useState } from 'react';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { CONTACT_INFO, GOOGLE_MAPS } from '@/lib/constants';
import { MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Meu nome é ${formData.name}. Email: ${formData.email}. Telefone: ${formData.phone}. Mensagem: ${formData.message}`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    
    window.open(url, '_blank');
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_70%)]" />
        <div className="container relative z-10 text-center space-y-8 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
              Contato
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Estou pronta para te ouvir. Escolha o canal que preferir e vamos iniciar sua jornada hoje mesmo.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { icon: Phone, title: 'Telefone', val: CONTACT_INFO.phone, link: `tel:${CONTACT_INFO.phone}`, label: 'Ligar agora' },
              { icon: Mail, title: 'Email', val: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}`, label: 'Enviar email' },
              { icon: MapPin, title: 'Endereço', val: CONTACT_INFO.addressShort, link: GOOGLE_MAPS.mapsLink, label: 'Ver no mapa' },
            ].map((item, i) => (
              <div key={i} className="p-10 bg-card border border-border rounded-[3rem] shadow-2xl hover-lift text-center group">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-lg text-muted-foreground font-medium mb-8 line-clamp-1">{item.val}</p>
                <a
                  href={item.link}
                  target={item.title === 'Endereço' ? '_blank' : undefined}
                  rel={item.title === 'Endereço' ? 'noopener noreferrer' : undefined}
                  className="inline-block w-full py-4 bg-muted hover:bg-primary hover:text-white rounded-2xl font-black text-lg transition-all"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div className="p-12 md:p-16 bg-card border border-border rounded-[4rem] shadow-2xl">
              <div className="mb-12">
                <h2 className="text-4xl font-black tracking-tighter mb-4">Envie uma Mensagem</h2>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">Preencha os dados e fale diretamente comigo para orientações personalizadas.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">Nome</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="h-16 rounded-2xl bg-muted/50 border-none focus:ring-2 ring-primary/20 text-lg px-6"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="h-16 rounded-2xl bg-muted/50 border-none focus:ring-2 ring-primary/20 text-lg px-6"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">Telefone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(12) 99999-9999"
                    className="h-16 rounded-2xl bg-muted/50 border-none focus:ring-2 ring-primary/20 text-lg px-6"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">Mensagem</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como posso te ajudar hoje?"
                    className="rounded-3xl bg-muted/50 border-none focus:ring-2 ring-primary/20 min-h-[180px] text-lg p-6"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-20 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-xl shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 flex gap-4"
                >
                  <Send size={24} />
                  Enviar via WhatsApp
                </Button>
                {submitted && (
                  <p className="text-lg text-secondary font-black text-center animate-bounce">
                    Mensagem enviada com sucesso!
                  </p>
                )}
              </form>
            </div>

            {/* Map */}
            <div className="space-y-8 flex flex-col">
              <div className="flex-1 min-h-[500px] rounded-[4rem] overflow-hidden border-8 border-card shadow-2xl relative">
                <iframe
                  src={GOOGLE_MAPS.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
