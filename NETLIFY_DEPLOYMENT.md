# Guia de Deploy no Netlify - Susi Farias Nutricionista

## 1. Preparação para Deploy

### 1.1 Pré-requisitos

- Conta no Netlify (netlify.com)
- Repositório GitHub com o código do projeto
- Variáveis de ambiente configuradas
- Build do projeto testado localmente

### 1.2 Build Local

```bash
cd /home/ubuntu/susifariasnutri
pnpm build
```

## 2. Variáveis de Ambiente para Netlify

### 2.1 Tabela de Variáveis de Ambiente

| Variável | Valor | Descrição | Obrigatória |
|----------|-------|-----------|-------------|
| `VITE_APP_TITLE` | Susi Farias - Nutricionista | Título da aplicação | ✅ |
| `VITE_APP_LOGO` | /logo.svg | URL do logotipo | ✅ |
| `VITE_SUPABASE_URL` | https://seu-projeto.supabase.co | URL do Supabase | ✅ |
| `VITE_SUPABASE_ANON_KEY` | eyJhbGc... | Chave anônima do Supabase | ✅ |
| `SUPABASE_SERVICE_ROLE_KEY` | eyJhbGc... | Chave service role do Supabase | ✅ |
| `DATABASE_URL` | postgresql://... | URL do banco de dados | ✅ |
| `VITE_WHATSAPP_NUMBER` | 5512991363030 | Número WhatsApp | ✅ |
| `VITE_GOOGLE_MAPS_API_KEY` | AIzaSy... | Chave da API Google Maps | ✅ |
| `JWT_SECRET` | sua-chave-secreta-aqui | Chave para JWT | ✅ |
| `VITE_OAUTH_PORTAL_URL` | https://oauth.manus.im | URL do portal OAuth | ✅ |
| `VITE_APP_ID` | seu-app-id | ID da aplicação | ✅ |
| `VITE_FRONTEND_FORGE_API_KEY` | sua-chave-frontend | Chave da API Frontend | ✅ |
| `VITE_FRONTEND_FORGE_API_URL` | https://api.manus.im | URL da API Frontend | ✅ |
| `VITE_ANALYTICS_WEBSITE_ID` | seu-id | ID do website para analytics | ❌ |
| `VITE_ANALYTICS_ENDPOINT` | https://analytics.manus.im | Endpoint de analytics | ❌ |

### 2.2 Descrição das Variáveis

**Variáveis Obrigatórias:**

- **VITE_APP_TITLE**: Nome da aplicação exibido no navegador
- **VITE_APP_LOGO**: Caminho para o logotipo (arquivo público)
- **VITE_SUPABASE_URL**: URL do projeto Supabase (obtida em Settings > API)
- **VITE_SUPABASE_ANON_KEY**: Chave pública do Supabase (obtida em Settings > API)
- **SUPABASE_SERVICE_ROLE_KEY**: Chave privada para operações backend
- **DATABASE_URL**: String de conexão PostgreSQL do Supabase
- **VITE_WHATSAPP_NUMBER**: Número WhatsApp para integração (sem formatação)
- **VITE_GOOGLE_MAPS_API_KEY**: Chave da API Google Maps (obter em console.cloud.google.com)
- **JWT_SECRET**: Chave secreta para assinatura de tokens JWT
- **VITE_OAUTH_PORTAL_URL**: URL do portal de autenticação
- **VITE_APP_ID**: ID único da aplicação
- **VITE_FRONTEND_FORGE_API_KEY**: Chave para chamadas de API frontend
- **VITE_FRONTEND_FORGE_API_URL**: URL base da API

**Variáveis Opcionais:**

- **VITE_ANALYTICS_WEBSITE_ID**: Para rastreamento de analytics
- **VITE_ANALYTICS_ENDPOINT**: Endpoint para envio de dados de analytics

## 3. Configuração no Netlify

### 3.1 Conectar Repositório GitHub

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Selecione GitHub como provedor
4. Autorize o Netlify a acessar seus repositórios
5. Selecione o repositório `susifariasnutri`

### 3.2 Configurar Build

Na página de configuração do site:

- **Build command**: `pnpm build`
- **Publish directory**: `dist`
- **Node version**: 22.13.0

### 3.3 Adicionar Variáveis de Ambiente

1. Vá para **Site settings** > **Build & deploy** > **Environment**
2. Clique em "Edit variables"
3. Adicione todas as variáveis da tabela acima
4. Clique em "Save"

### 3.4 Configurar Domínio Customizado

1. Vá para **Site settings** > **Domain management**
2. Clique em "Add custom domain"
3. Digite seu domínio (ex: susifarias.com.br)
4. Siga as instruções para configurar DNS

## 4. Configuração de SSL/TLS

Netlify fornece certificados SSL gratuitos automaticamente. Para ativar:

1. Vá para **Site settings** > **Domain management** > **HTTPS**
2. Clique em "Verify DNS configuration"
3. Aguarde a verificação (pode levar até 24 horas)

## 5. Redirecionamentos e Reescrita de URL

Crie um arquivo `netlify.toml` na raiz do projeto:

```toml
[build]
  command = "pnpm build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22.13.0"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 6. Deploy

### 6.1 Deploy Automático

Após conectar o repositório GitHub, o Netlify fará deploy automático a cada push para a branch `main`.

### 6.2 Deploy Manual

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod
```

## 7. Monitoramento e Logs

### 7.1 Acessar Logs

1. Vá para **Deploys**
2. Clique no deploy mais recente
3. Veja os logs de build e deploy

### 7.2 Verificar Status

- **Builds**: Vá para **Deploys** para ver o histórico
- **Performance**: Use **Analytics** para ver métricas
- **Erros**: Verifique **Functions** para erros de backend

## 8. Otimizações de Performance

### 8.1 Compressão de Assets

Netlify comprime automaticamente:
- JavaScript e CSS
- Imagens (WebP)
- Fontes

### 8.2 Cache de Assets

Configure cache headers em `netlify.toml`:

```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

## 9. Checklist de Deploy

- [ ] Repositório GitHub criado e sincronizado
- [ ] Todas as variáveis de ambiente configuradas
- [ ] Build local testado com sucesso
- [ ] Netlify conectado ao repositório GitHub
- [ ] Build settings configurados corretamente
- [ ] Domínio customizado configurado (opcional)
- [ ] SSL/TLS verificado
- [ ] Deploy inicial realizado com sucesso
- [ ] Site acessível via URL
- [ ] Testes de funcionalidade realizados
- [ ] Analytics configurado (opcional)

## 10. Troubleshooting

### Build falha

1. Verifique se todas as variáveis de ambiente estão configuradas
2. Verifique logs de build no Netlify
3. Teste build localmente: `pnpm build`

### Site não carrega

1. Verifique se o domínio está apontando para Netlify
2. Limpe cache do navegador (Ctrl+Shift+Del)
3. Verifique logs de deploy

### Funcionalidades não funcionam

1. Verifique se as variáveis de ambiente estão corretas
2. Verifique console do navegador (F12)
3. Verifique logs de função (se houver)

## 11. Referências

- [Documentação Netlify](https://docs.netlify.com)
- [Netlify CLI](https://cli.netlify.com)
- [Netlify Build Configuration](https://docs.netlify.com/configure-builds/overview)
- [Environment Variables](https://docs.netlify.com/configure-builds/environment-variables)
