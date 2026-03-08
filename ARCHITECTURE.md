# Arquitetura do Site - Susi Farias Nutricionista

## Estrutura de Diretórios

```
client/
├── public/
│   ├── assets/
│   │   ├── images/          # 37 fotos da galeria + fotos destacadas
│   │   └── videos/          # video inicio.MOV, video mounjaro.MOV
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── SidebarMenu.tsx       # Menu lateral esquerdo fixo
│   │   ├── FloatingButtons.tsx   # Botões WhatsApp e Voltar ao Topo
│   │   ├── Footer.tsx            # Rodapé com links e redes sociais
│   │   ├── Gallery.tsx           # Galeria animada (37 fotos)
│   │   ├── VideoPlayer.tsx       # Player para vídeos
│   │   ├── ContactForm.tsx       # Formulário de contato
│   │   └── ui/                   # Componentes shadcn/ui
│   ├── pages/
│   │   ├── Home.tsx              # Página Início
│   │   ├── AboutMe.tsx           # Página Sobre Mim
│   │   ├── NutritionClinical.tsx # Nutrição Clínica
│   │   ├── NutritionSports.tsx   # Nutrição Esportiva
│   │   ├── Mounjaro.tsx          # Página Mounjaro
│   │   ├── Services.tsx          # Página Serviços
│   │   ├── Contact.tsx           # Página Contato
│   │   └── NotFound.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx      # Contexto para tema claro/escuro
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useScrollToTop.ts
│   ├── lib/
│   │   ├── trpc.ts
│   │   └── constants.ts          # URLs, mensagens WhatsApp, etc.
│   ├── App.tsx                   # Roteamento principal
│   ├── main.tsx
│   └── index.css                 # Estilos globais e CSS variables
├── index.html
└── vite.config.ts

server/
├── routers.ts                    # Procedures tRPC
├── db.ts                         # Queries do banco de dados
└── _core/                        # Framework core (não editar)

drizzle/
├── schema.ts                     # Definição de tabelas
└── migrations/                   # Migrações do banco

shared/
├── const.ts                      # Constantes compartilhadas
└── types.ts                      # Tipos compartilhados
```

## Paleta de Cores

**Dark Mode (Padrão):**
- Fundo Principal: `#0A0A0A` (Preto muito escuro)
- Fundo Secundário: `#1A1A1A`
- Texto Principal: `#FFFFFF`
- Texto Secundário: `#B0B0B0`
- Destaque Azul: `#00D2FF` ou `#0066FF`
- Destaque Verde: `#00D97E` ou `#00C853`
- Borda: `rgba(255, 255, 255, 0.05)`

**Light Mode:**
- Fundo Principal: `#FFFFFF`
- Fundo Secundário: `#F5F5F5`
- Texto Principal: `#0A0A0A`
- Texto Secundário: `#666666`
- Destaque Azul: `#0066FF`
- Destaque Verde: `#00C853`
- Borda: `rgba(0, 0, 0, 0.1)`

## Tipografia

- **Font Family:** Inter, Montserrat, ou similar sans-serif moderna
- **Títulos:** font-weight 700-800
- **Corpo:** font-weight 400-500
- **Tamanhos:** Responsive com breakpoints (mobile, tablet, desktop)

## Animações e Performance

### Princípios
- Usar apenas `transform` e `opacity` para 60 FPS
- Aplicar `will-change` para otimização preditiva
- Usar `cubic-bezier` customizadas para movimentos orgânicos
- Implementar `AnimatePresence` para transições entre rotas

### Efeitos Principais
1. **Menu Hover:** opacity 60% → 100%, scale 1.1x, 300ms
2. **Cards Hover:** elevação 10px, brilho de borda, glow interno
3. **Galeria:** auto-scroll horizontal direita → esquerda, 80ms stagger
4. **Botões Flutuantes:** animação de pulsar contínua
5. **Voltar ao Topo:** fade-in suave ao scroll down

## Estrutura de Dados (Supabase)

### Tabelas Principais
1. **contacts** - Formulários de contato
2. **appointments** - Agendamentos
3. **services** - Serviços oferecidos
4. **testimonials** - Depoimentos/conquistas

### Storage
- `images/gallery/` - Fotos da galeria
- `images/featured/` - Fotos destacadas
- `videos/` - Vídeos de apresentação

## Fluxo de Navegação

```
Início
├── Sobre Mim
├── Nutrição
│   ├── Nutrição Clínica
│   └── Nutrição Esportiva
├── Mounjaro
├── Serviços
└── Contato
```

Cada página tem acesso ao menu lateral, botões flutuantes e rodapé.

## Integração com APIs Externas

1. **Google Maps:** Localização em Contato e link em Início
2. **WhatsApp:** Botões flutuantes com mensagens personalizadas
3. **Redes Sociais:** Links no rodapé (Instagram, Facebook, LinkedIn, YouTube, Google)

## Variáveis de Ambiente (Netlify)

```
VITE_APP_TITLE=Susi Farias - Nutricionista
VITE_APP_LOGO=/assets/logo.png
DATABASE_URL=mysql://...
SUPABASE_URL=https://evaoqyroqmmlojtzrulj.supabase.co
SUPABASE_KEY=...
JWT_SECRET=...
GOOGLE_MAPS_API_KEY=...
```

## Checklist de Implementação

- [ ] Configurar tema claro/escuro
- [ ] Implementar SidebarMenu com navegação
- [ ] Criar todas as páginas
- [ ] Implementar galeria animada
- [ ] Adicionar vídeos
- [ ] Implementar botões flutuantes
- [ ] Criar formulário de contato
- [ ] Integrar Google Maps
- [ ] Implementar animações premium
- [ ] Testar responsividade
- [ ] Validar performance (60 FPS)
- [ ] Configurar Supabase
- [ ] Deploy no Netlify
