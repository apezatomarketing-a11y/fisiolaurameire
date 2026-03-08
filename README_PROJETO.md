# Susi Farias - Nutricionista | Website Profissional

## 🎯 Visão Geral

Site profissional e moderno para Susi Farias, nutricionista clínica e esportiva, desenvolvido com tecnologias de ponta para oferecer uma experiência premium aos visitantes.

## ✨ Características Principais

### 🎨 Design e UX
- **Tema Dark/Light**: Sistema de tema com persistência de preferência do usuário
- **Design Responsivo**: Totalmente otimizado para mobile, tablet e desktop
- **Animações Premium**: Animações 60 FPS usando transform/opacity
- **Interface Moderna**: Componentes elegantes com Tailwind CSS 4
- **Acessibilidade**: Navegação por teclado, contraste adequado

### 📱 Páginas Principais

1. **Início (Home)**
   - Banner com frase de efeito
   - Vídeo de apresentação
   - Seção de conquistas
   - Link para Google Maps
   - Botão WhatsApp destacado

2. **Sobre Mim**
   - Foto destaque
   - Texto descritivo
   - Galeria animada com 37 fotos
   - Seção de conquistas profissionais

3. **Nutrição Clínica**
   - Diabetes
   - Hipertensão
   - Menopausa
   - Ovário Policístico
   - Saúde da Mulher
   - Menarca
   - Baixo Libido

4. **Nutrição Esportiva**
   - Otimização de desempenho
   - Nutrição pré/pós-treino
   - Suplementação esportiva
   - Planejamento nutricional

5. **Mounjaro**
   - Informações sobre o tratamento
   - Vídeo explicativo
   - Benefícios e indicações
   - Plano personalizado

6. **Serviços**
   - Consulta Avulsa
   - Pacotes (3, 6 e 12 meses)
   - Bioimpedância
   - Florais de Minas
   - Suplementação

7. **Contato**
   - Formulário de contato
   - Google Maps integrado
   - Informações de contato
   - Envio direto para WhatsApp

### 🔧 Funcionalidades

- **Integração WhatsApp**: Botão flutuante com animação de pulsar
- **Google Maps**: Localização exata integrada
- **Formulário de Contato**: Envio formatado via WhatsApp
- **Galeria Animada**: 37 fotos com scroll automático
- **Menu Lateral**: Navegação fixa e responsiva
- **Botão Voltar ao Topo**: Com animação suave
- **Rodapé Premium**: Links, redes sociais, políticas

## 🛠️ Stack Tecnológico

### Frontend
- **React 19**: Framework UI moderno
- **TypeScript**: Tipagem estática
- **Tailwind CSS 4**: Estilização utilitária
- **Vite**: Build tool rápido
- **Wouter**: Roteamento leve

### Backend
- **Express 4**: Servidor Node.js
- **tRPC 11**: RPC type-safe
- **Drizzle ORM**: Query builder SQL
- **PostgreSQL**: Banco de dados (via Supabase)

### Serviços Externos
- **Supabase**: Database + Storage
- **Google Maps API**: Mapas integrados
- **Google Gemini API**: IA para conteúdo
- **Resend**: Serviço de email
- **Netlify**: Hosting e deployment

## 📁 Estrutura do Projeto

```
susifariasnutri/
├── client/
│   ├── public/
│   │   ├── assets/
│   │   │   ├── images/      # Imagens estáticas
│   │   │   └── videos/      # Vídeos
│   │   └── logo.svg
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── pages/           # Páginas
│   │   ├── lib/             # Utilitários e constantes
│   │   ├── contexts/        # React Contexts
│   │   ├── _core/           # Hooks customizados
│   │   ├── App.tsx          # Componente principal
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais
│   └── index.html
├── server/
│   ├── routers.ts           # Rotas tRPC
│   ├── db.ts                # Queries do banco
│   └── _core/               # Configuração interna
├── drizzle/
│   └── schema.ts            # Schema do banco
├── shared/
│   └── const.ts             # Constantes compartilhadas
├── storage/
│   └── index.ts             # Helpers S3
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── netlify.toml
├── ENVIRONMENT_VARIABLES.md # Variáveis de ambiente
├── DEPLOYMENT_GUIDE.md      # Guia de deploy
├── DATABASE_SCHEMA.md       # Schema SQL
├── SUPABASE_SETUP.md        # Configuração Supabase
└── NETLIFY_DEPLOYMENT.md    # Deploy Netlify
```

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 22.13.0+
- pnpm 10.4.1+
- Git

### Instalação

```bash
# Clonar repositório
git clone https://github.com/apezatomarketing-a11y/susifariasnutri.git
cd susifariasnutri

# Instalar dependências
pnpm install

# Criar arquivo .env.local
cp .env.example .env.local

# Adicionar variáveis de ambiente
# (Ver ENVIRONMENT_VARIABLES.md)
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# Acessar em http://localhost:3000
```

### Build

```bash
# Build para produção
pnpm build

# Preview do build
pnpm preview
```

### Testes

```bash
# Executar testes
pnpm test

# Testes com watch
pnpm test:watch
```

## 📊 Performance

- **Lighthouse Score**: >90 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Otimizado
- **Animações**: 60 FPS (transform/opacity)
- **Bundle Size**: ~150KB (gzipped)

## 🔐 Segurança

- **HTTPS**: Certificado SSL automático (Netlify)
- **CORS**: Configurado corretamente
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **Row Level Security**: Habilitado no Supabase
- **Variáveis Sensíveis**: Gerenciadas via Netlify Secrets

## 📚 Documentação

- **[ENVIRONMENT_VARIABLES.md](./ENVIRONMENT_VARIABLES.md)** - Variáveis de ambiente
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Guia completo de deploy
- **[DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md)** - Schema SQL
- **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** - Configuração Supabase
- **[NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md)** - Deploy Netlify

## 🔄 Workflow de Desenvolvimento

### Adicionar Nova Página

1. Criar arquivo em `client/src/pages/NovaPage.tsx`
2. Adicionar rota em `client/src/App.tsx`
3. Atualizar menu em `client/src/lib/constants.ts`
4. Testar localmente
5. Fazer commit e push

### Modificar Banco de Dados

1. Editar `drizzle/schema.ts`
2. Executar `pnpm db:push`
3. Atualizar `server/db.ts` com queries
4. Criar testes em `server/*.test.ts`
5. Fazer commit e push

### Deploy

1. Fazer push para branch `main`
2. Netlify faz deploy automático
3. Verificar em https://susifariasnutri.netlify.app
4. Acessar via domínio customizado

## 🐛 Troubleshooting

### Erro de Build
```bash
# Limpar cache
rm -rf node_modules pnpm-lock.yaml dist
pnpm install
pnpm build
```

### Erro de Conexão Supabase
```bash
# Verificar variáveis de ambiente
cat .env.local

# Testar conexão
pnpm test
```

### Erro no Deploy Netlify
1. Verificar logs em Netlify Dashboard
2. Verificar variáveis de ambiente
3. Fazer novo push para GitHub

## 📞 Contato e Suporte

- **GitHub**: https://github.com/apezatomarketing-a11y/susifariasnutri
- **Netlify**: https://app.netlify.com/sites/susifariasnutri
- **Supabase**: https://app.supabase.com/

## 📄 Licença

Propriedade de Susi Farias - Nutricionista

## 🙏 Créditos

Desenvolvido por **Apezato Marketing** com suporte de **Manus AI**

---

**Última atualização**: 28 de Janeiro de 2026
**Versão**: 1.0.0
**Status**: ✅ Pronto para Deploy
