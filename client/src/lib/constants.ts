// Contact Information
export const CONTACT_INFO = {
  whatsapp: '5512982971670',
  phone: '(12) 98297-1670',
  email: 'laurameirafisio22@gmail.com',
  address: 'Lagoa Santa, MG',
  addressShort: 'Lagoa Santa',
  city: 'Lagoa Santa',
  state: 'MG',
  hours: '13h às 17h',
} as const;

// Social Media Links
export const SOCIAL_MEDIA = {
  instagram: 'https://www.instagram.com/laurameirafisio',
  facebook: 'https://www.facebook.com/laurameirafisio',
  linkedin: 'https://br.linkedin.com/in/laurameirafisio',
  youtube: 'https://www.youtube.com/@laurameirafisio',
  google: 'https://share.google/laurameirafisio',
} as const;

// Google Maps
export const GOOGLE_MAPS = {
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.3829!2d-43.8!3d-19.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLagoa%20Santa%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890',
  mapsLink: 'https://maps.app.goo.gl/lagoa-santa-mg',
  shareLink: 'https://share.google/laurameirafisio',
} as const;

// WhatsApp Messages
export const WHATSAPP_MESSAGES = {
  floatingButton: 'Oi, vim do seu site e gostaria de mais informações sobre seus serviços de fisioterapia!',
  pilates1x: 'Gostaria de agendar Pilates 1x na semana. Qual é a disponibilidade?',
  pilates2x: 'Tenho interesse em Pilates 2x na semana. Pode me informar sobre disponibilidade?',
  pilates3x: 'Gostaria de agendar Pilates 3x na semana. Qual seria o melhor horário?',
  reabilitacaoNeuro: 'Tenho interesse em Reabilitação Neurofuncional. Pode me ajudar?',
  pediatria: 'Gostaria de informações sobre atendimento pediátrico. Como funciona?',
  adolescente: 'Tenho interesse em atendimento para adolescentes. Qual seria o melhor tratamento?',
  contact: 'Olá! Entrei em contato através do formulário de contato do seu site.',
  acompanhamentoDomiciliar: 'Tenho interesse em acompanhamento domiciliar. Como funciona?',
} as const;

// Navigation Items
export const NAVIGATION_ITEMS = [
  { label: 'Início', href: '#home', icon: 'Home' },
  { label: 'Sobre', href: '#about', icon: 'User' },
  { label: 'Serviços', href: '#services', icon: 'Briefcase' },
  { label: 'Contato', href: '#contact', icon: 'Mail' },
] as const;

// Services
export const SERVICES = [
  {
    id: 'pilates-1x',
    title: 'Pilates 1x na Semana',
    description: 'Sessão semanal de Pilates para manutenção da saúde, flexibilidade e fortalecimento muscular.',
    price: 'R$ 150,00',
    icon: 'Activity',
    message: 'Gostaria de agendar Pilates 1x na semana. Qual é a disponibilidade?',
    image: 'pilates_1x',
  },
  {
    id: 'pilates-2x',
    title: 'Pilates 2x na Semana',
    description: 'Programa intensivo de Pilates com resultados mais rápidos e progressão constante.',
    price: 'R$ 260,00',
    icon: 'Activity',
    message: 'Tenho interesse em Pilates 2x na semana. Pode me informar sobre disponibilidade?',
    image: 'pilates_2x',
  },
  {
    id: 'pilates-3x',
    title: 'Pilates 3x na Semana',
    description: 'Programa completo de Pilates com máximo de benefícios e transformação corporal.',
    price: 'R$ 360,00',
    icon: 'Activity',
    message: 'Gostaria de agendar Pilates 3x na semana. Qual seria o melhor horário?',
    image: 'pilates_3x',
  },
  {
    id: 'reabilitacao-neuro',
    title: 'Reabilitação Neurofuncional',
    description: 'Atendimento especializado para pacientes com disfunções neurológicas em todas as faixas etárias.',
    price: 'À Consultar',
    icon: 'Stethoscope',
    message: 'Tenho interesse em Reabilitação Neurofuncional. Pode me ajudar?',
    image: 'reabilitacao',
  },
  {
    id: 'pediatria',
    title: 'Pediatria e Saúde Adolescente',
    description: 'Reabilitação neurofuncional especializada para crianças e adolescentes.',
    price: 'À Consultar',
    icon: 'Heart',
    message: 'Gostaria de informações sobre atendimento pediátrico. Como funciona?',
    image: 'pediatria',
  },
] as const;

// Company Info
export const COMPANY_INFO = {
  name: 'Laura Meira Fisioterapia',
  title: 'Fisioterapeuta',
  tagline: 'Recuperando movimento, aliviando dores e melhorando qualidade de vida',
  year: new Date().getFullYear(),
  developedBy: 'Apezato Marketing',
  developedByUrl: 'https://www.apezatomarketing.com.br',
} as const;

// Animation Timings (in ms)
export const ANIMATION_TIMINGS = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 800,
  stagger: 80,
} as const;

// Gallery Images
export const GALLERY_IMAGES = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `/assets/images/Fotos (${i + 1}).jpeg`,
  alt: `Galeria Laura Meira ${i + 1}`,
}));

// Featured Images
export const FEATURED_IMAGES = {
  home: '/assets/images/logo.png',
  aboutHighlight: '/assets/images/logo.png',
  aboutAchievement: '/assets/images/logo.png',
  pilates1x: '/assets/images/pilates_1x.jpg',
  pilates2x: '/assets/images/pilates_2x.jpg',
  pilates3x: '/assets/images/pilates_3x.jpg',
  reabilitacao: '/assets/images/servico_reabilitacao_neuro.jpg',
  pediatria: '/assets/images/servico_pediatria.jpg',
} as const;

// Videos
export const VIDEOS = {
  home: 'https://evaoqyroqmmlojtzrulj.supabase.co/storage/v1/object/public/videos/video%20inicio.mp4',
  mounjaro: 'https://evaoqyroqmmlojtzrulj.supabase.co/storage/v1/object/public/videos/video_mounjaro.mp4',
} as const;

// Documents
export const DOCUMENTS = {
  relatorioServicos: '/assets/documents/relatorio_servicos.pdf',
} as const;

// Footer Links
export const FOOTER_LINKS = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Contato', href: '#contact' },
] as const;

// Policy Links
export const POLICY_LINKS = [
  { label: 'Política de Privacidade', href: '#privacy' },
  { label: 'Termos de Uso', href: '#terms' },
  { label: 'Política de Cookies', href: '#cookies' },
] as const;
