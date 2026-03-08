import { useState } from 'react';
import { Instagram, Mail, Globe, ArrowUp } from 'lucide-react';
import { FOOTER_LINKS, POLICY_LINKS, SOCIAL_MEDIA, COMPANY_INFO, CONTACT_INFO } from '@/lib/constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [openPolicy, setOpenPolicy] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

Bem-vindo ao site de Laura Meira Fisioterapia. Ao acessar este site, você concorda com os seguintes termos:

1. Uso Autorizado
Este site é fornecido apenas para fins informativos e educacionais. Você concorda em usar este site apenas para fins legais.

2. Isenção de Responsabilidade
As informações fornecidas neste site não substituem o aconselhamento profissional. Sempre consulte um profissional de saúde.

3. Limitação de Responsabilidade
Laura Meira não será responsável por danos indiretos, incidentais ou consequentes resultantes do uso deste site.

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
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-30" />
        
        <div className="container py-20 px-6 relative z-10 max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center lg:text-left">
            {/* Brand */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start group"
            >
              <motion.div 
                className="w-20 h-20 flex items-center justify-center mb-8 transition-all duration-500 cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                onClick={scrollToTop}
              >
                <img src="/assets/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </motion.div>
              <div className="text-center lg:text-left">
                <h3 className="font-black text-2xl mb-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent leading-none tracking-tighter">Laura Meira</h3>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-80 mb-4">Fisioterapia Especializada</p>
                <p className="text-sm text-muted-foreground font-medium max-w-[250px] leading-relaxed">{COMPANY_INFO.tagline}</p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-black text-foreground mb-8 uppercase tracking-widest text-xs opacity-50">Navegação</h4>
              <nav className="space-y-4">
                {FOOTER_LINKS.map((link) => (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollToSection(link.label.toLowerCase())}
                    className="block w-full lg:w-auto text-base text-muted-foreground hover:text-blue-600 transition-all duration-300 font-bold cursor-pointer group relative text-center lg:text-left"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300" />
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-black text-foreground mb-8 uppercase tracking-widest text-xs opacity-50">Conecte-se</h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {[
                  { icon: Instagram, url: SOCIAL_MEDIA.instagram, label: 'Instagram', color: 'bg-pink-500/10 text-pink-500 hover:bg-pink-500 hover:text-white' },
                  { icon: Mail, url: `mailto:${CONTACT_INFO.email}`, label: 'Email', color: 'bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white' },
                  { icon: Globe, url: SOCIAL_MEDIA.google, label: 'Google', color: 'bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 ${social.color} rounded-2xl transition-all duration-500 shadow-sm cursor-pointer`}
                    title={social.label}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-black text-foreground mb-8 uppercase tracking-widest text-xs opacity-50">Contato</h4>
              <div className="space-y-6 text-sm text-muted-foreground">
                <div className="flex flex-col gap-2 items-center lg:items-start">
                  <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">WhatsApp</span>
                  <p className="font-bold text-lg text-foreground hover:text-blue-600 transition-colors duration-300 cursor-default">{CONTACT_INFO.phone}</p>
                </div>
                <div className="flex flex-col gap-2 items-center lg:items-start">
                  <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">Email</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-bold text-sm text-foreground hover:text-blue-600 transition-colors duration-300 cursor-pointer break-all">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Policies */}
          <div className="border-t border-border/50 pt-12 mb-12">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
              {POLICY_LINKS.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => setOpenPolicy(link.label.toLowerCase().split(' ')[0])}
                  className="text-muted-foreground hover:text-blue-600 transition-all duration-300 cursor-pointer group relative"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Copyright & Scroll to Top - CENTRALIZADO */}
          <div className="flex flex-col items-center justify-center gap-8 text-center text-[10px] sm:text-xs text-muted-foreground/60 font-bold uppercase tracking-widest">
            <div>
              <p className="mb-2">
                © {COMPANY_INFO.year} {COMPANY_INFO.name}. Todos os direitos reservados.
              </p>
              <p>
                Desenvolvido por{' '}
                <a
                  href={COMPANY_INFO.developedByUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600/80 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {COMPANY_INFO.developedBy}
                </a>
              </p>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="p-4 bg-blue-600/10 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-sm cursor-pointer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </footer>

      {/* Policy Dialogs */}
      <Dialog open={openPolicy !== null} onOpenChange={(open) => !open && setOpenPolicy(null)}>
        <DialogContent className="max-w-[90vw] sm:max-w-lg max-h-[80vh] overflow-y-auto glass-effect border-blue-600/20 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-blue-600 uppercase tracking-tighter">
              {openPolicy === 'política' ? 'Política de Privacidade' : openPolicy === 'termos' ? 'Termos de Uso' : 'Política de Cookies'}
            </DialogTitle>
          </DialogHeader>
          <div className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed font-medium">
            {openPolicy === 'política' && policyContent.privacy}
            {openPolicy === 'termos' && policyContent.terms}
            {openPolicy === 'cookies' && policyContent.cookies}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
