import { useState } from 'react';
import { useLocation } from 'wouter';
import { Instagram, Facebook, Linkedin, Youtube, Mail } from 'lucide-react';
import { FOOTER_LINKS, POLICY_LINKS, SOCIAL_MEDIA, COMPANY_INFO, CONTACT_INFO } from '@/lib/constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function Footer() {
  const [, navigate] = useLocation();
  const [openPolicy, setOpenPolicy] = useState<string | null>(null);

  const handleNavigation = (href: string) => {
    navigate(href);
    window.scrollTo(0, 0);
  };

  const policyContent = {
    privacy: `Política de Privacidade

Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.

1. Coleta de Informações
Coletamos informações que você nos fornece voluntariamente através de formulários de contato, como nome, email e telefone.

2. Uso das Informações
Usamos suas informações para:
- Responder suas consultas
- Agendar consultas
- Enviar informações sobre nossos serviços
- Melhorar nossa experiência

3. Proteção de Dados
Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado.

4. Contato
Para questões sobre privacidade, entre em contato conosco através do email ou WhatsApp.`,
    terms: `Termos de Uso

Bem-vindo ao site de Susi Farias Nutricionista. Ao acessar este site, você concorda com os seguintes termos:

1. Uso Autorizado
Este site é fornecido apenas para fins informativos e educacionais. Você concorda em usar este site apenas para fins legais.

2. Isenção de Responsabilidade
As informações fornecidas neste site não substituem o aconselhamento profissional. Sempre consulte um profissional de saúde.

3. Limitação de Responsabilidade
Susi Farias não será responsável por danos indiretos, incidentais ou consequentes resultantes do uso deste site.

4. Modificações
Reservamos o direito de modificar estes termos a qualquer momento.

5. Lei Aplicável
Estes termos são regidos pelas leis do Brasil.`,
    cookies: `Política de Cookies

Este site utiliza cookies para melhorar sua experiência.

1. O que são Cookies?
Cookies são pequenos arquivos de texto armazenados no seu dispositivo que ajudam a personalizar sua experiência.

2. Tipos de Cookies
- Cookies Essenciais: Necessários para o funcionamento do site
- Cookies de Preferência: Lembram suas preferências
- Cookies de Análise: Ajudam a entender como você usa o site

3. Controle de Cookies
Você pode controlar cookies através das configurações do seu navegador.

4. Cookies de Terceiros
Este site pode conter links para serviços de terceiros que usam seus próprios cookies.`,
  };

  return (
    <>
      <footer className="bg-card border-t border-border mt-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />
        
        <div className="container py-16 px-6 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center lg:text-left">
            {/* Brand */}
            <div className="flex flex-col items-center lg:items-start group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 cursor-pointer">
                <span className="text-white font-bold text-2xl">SF</span>
              </div>
              <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{COMPANY_INFO.name}</h3>
              <p className="text-sm text-muted-foreground font-medium max-w-[200px]">{COMPANY_INFO.tagline}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-xs">Navegação</h4>
              <nav className="space-y-3">
                {FOOTER_LINKS.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavigation(link.href)}
                    className="block w-full lg:w-auto text-sm text-muted-foreground hover:text-primary hover:pl-2 transition-all duration-300 font-medium"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-xs">Conecte-se</h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {[
                  { icon: Instagram, url: SOCIAL_MEDIA.instagram, label: 'Instagram' },
                  { icon: Facebook, url: SOCIAL_MEDIA.facebook, label: 'Facebook' },
                  { icon: Linkedin, url: SOCIAL_MEDIA.linkedin, label: 'LinkedIn' },
                  { icon: Youtube, url: SOCIAL_MEDIA.youtube, label: 'YouTube' },
                  { icon: Mail, url: `mailto:${CONTACT_INFO.email}`, label: 'Email' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/5 hover:bg-primary text-primary hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-xs">Contato</h4>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-bold text-xs uppercase">WhatsApp</span>
                  <p className="font-medium">{CONTACT_INFO.phone}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-bold text-xs uppercase">Email</span>
                  <p className="font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="border-t border-border/50 pt-10 mb-10">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              {POLICY_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => setOpenPolicy(link.label.toLowerCase().split(' ')[0])}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-[10px] sm:text-xs text-muted-foreground/60 font-medium px-4">
            <p className="mb-3">
              © {COMPANY_INFO.year} {COMPANY_INFO.name}. Todos os direitos reservados.
            </p>
            <p>
              Design & Desenvolvimento por{' '}
              <a
                href={COMPANY_INFO.developedByUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-primary hover:underline transition-colors"
              >
                {COMPANY_INFO.developedBy}
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Policy Dialogs */}
      <Dialog open={openPolicy !== null} onOpenChange={(open) => !open && setOpenPolicy(null)}>
        <DialogContent className="max-w-[90vw] sm:max-w-lg max-h-[80vh] overflow-y-auto glass-effect border-primary/20 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-primary">
              {openPolicy === 'política' ? 'Política de Privacidade' : openPolicy === 'termos' ? 'Termos de Uso' : 'Política de Cookies'}
            </DialogTitle>
          </DialogHeader>
          <div className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed">
            {openPolicy === 'política' && policyContent.privacy}
            {openPolicy === 'termos' && policyContent.terms}
            {openPolicy === 'política' && policyContent.cookies}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
