# Guia Completo de Deploy - Susi Farias Nutricionista

## 📋 Resumo Executivo

Este guia fornece instruções passo a passo para fazer o deploy do site Susi Farias Nutricionista no Netlify com todas as configurações necessárias.

**Status do Projeto:**
- ✅ Código desenvolvido e testado
- ✅ Repositório GitHub atualizado
- ✅ Documentação completa
- ⏳ Aguardando deploy no Netlify

## 1. Pré-requisitos

Antes de começar, certifique-se de ter:

- [ ] Conta no Netlify (https://netlify.com)
- [ ] Acesso ao repositório GitHub (apezatomarketing-a11y/susifariasnutri)
- [ ] Credenciais do Supabase
- [ ] Chaves de API (Google Maps, Gemini, Resend)
- [ ] Número WhatsApp da Susi

## 2. Conectar Repositório GitHub no Netlify

### Passo 1: Criar Novo Site
1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Add new site"** > **"Import an existing project"**
3. Selecione **GitHub** como provedor
4. Autorize o Netlify a acessar seus repositórios GitHub

### Passo 2: Selecionar Repositório
1. Procure por **"susifariasnutri"**
2. Clique em **"Install"** e selecione o repositório
3. Clique em **"Deploy site"**

### Passo 3: Configurar Build
Na página de configuração:

| Campo | Valor |
|-------|-------|
| **Owner** | apezatomarketing-a11y |
| **Repository** | susifariasnutri |
| **Branch to deploy** | main |
| **Build command** | `pnpm build` |
| **Publish directory** | `dist` |
| **Node version** | 22.13.0 |

## 3. Adicionar Variáveis de Ambiente

### Passo 1: Acessar Settings
1. No site do Netlify, clique em **"Site settings"** (topo direito)
2. Vá para **"Build & deploy"** > **"Environment"**

### Passo 2: Adicionar Variáveis
Clique em **"Edit variables"** e adicione cada variável da tabela abaixo:

| Chave | Valor |
|-------|-------|
| `VITE_APP_TITLE` | `Susi Farias - Nutricionista` |
| `VITE_APP_LOGO` | `/logo.svg` |
| `VITE_SUPABASE_URL` | `https://evaoqyroqmmlojtzrulj.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzNjgyOTIsImV4cCI6MjA4NDk0NDI5Mn0.KBAsny0JD9Er0dh_48bmK-1KEkqpxx0Uz3P1-cmmypE` |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTM2ODI5MiwiZXhwIjoyMDg0OTQ0MjkyfQ.1qsvuXA4uriWbWUjn_ZEZNZmg12DyMfPoLUxyvK1USU` |
| `DATABASE_URL` | `postgresql://postgres:[PASSWORD]@db.evaoqyroqmmlojtzrulj.supabase.co:5432/postgres` |
| `VITE_WHATSAPP_NUMBER` | `5512991363030` |
| `VITE_GOOGLE_MAPS_API_KEY` | `AIzaSyC7-akywRnxoOLxbLzwSTq_7B9fj6jWQu0` |
| `VITE_GEMINI_API_KEY` | `AIzaSyBg353Ko7lHT-DnThBqU2wr_9YjQ4N7OE8` |
| `RESEND_API_KEY` | `re_3jmawcpY_4b6iGtiQsZVT1Z7Vy6MjrWsJ` |
| `JWT_SECRET` | `sua-chave-secreta-jwt-aqui-min-32-caracteres` |
| `NODE_ENV` | `production` |

### Passo 3: Salvar
Clique em **"Save"** e aguarde o novo deploy.

## 4. Configurar Domínio Customizado

### Passo 1: Acessar Domain Management
1. Em **Site settings**, vá para **"Domain management"**
2. Clique em **"Add custom domain"**

### Passo 2: Adicionar Domínio
1. Digite seu domínio (ex: susifarias.com.br)
2. Clique em **"Verify"**
3. Siga as instruções para configurar DNS

### Passo 3: Configurar DNS
Você receberá registros DNS para adicionar ao seu provedor de domínio:

```
Tipo: ALIAS/ANAME
Nome: susifarias.com.br
Valor: susifariasnutri.netlify.app
```

Ou:

```
Tipo: CNAME
Nome: www
Valor: susifariasnutri.netlify.app
```

## 5. Configurar SSL/TLS

Netlify fornece certificados SSL gratuitos automaticamente:

1. Em **Domain management**, vá para **"HTTPS"**
2. Clique em **"Verify DNS configuration"**
3. Aguarde a verificação (pode levar até 24 horas)

## 6. Configurar Redirects (netlify.toml)

O arquivo `netlify.toml` já está configurado no repositório com:

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
```

## 7. Monitoramento de Deploy

### Ver Status do Deploy
1. Clique em **"Deploys"** no topo
2. Você verá o histórico de deploys
3. Clique em um deploy para ver logs detalhados

### Logs de Build
Se houver erro:
1. Clique no deploy com erro
2. Vá para **"Deploy log"**
3. Procure pela mensagem de erro
4. Corrija no repositório GitHub
5. Faça um novo push (deploy automático)

## 8. Testes Pós-Deploy

### Testes Funcionais

- [ ] Site carrega sem erros
- [ ] Menu lateral funciona
- [ ] Tema dark/light alterna
- [ ] Todas as páginas acessíveis
- [ ] WhatsApp abre corretamente
- [ ] Google Maps funciona
- [ ] Formulário de contato envia
- [ ] Galeria carrega e anima
- [ ] Links internos funcionam
- [ ] Links externos abrem em nova aba

### Testes de Performance

1. Acesse [PageSpeed Insights](https://pagespeed.web.dev/)
2. Digite a URL do site
3. Verifique scores (objetivo: >90)

### Testes de Segurança

1. Acesse [Security Headers](https://securityheaders.com/)
2. Digite a URL do site
3. Verifique se headers estão configurados

## 9. Configuração do Supabase Storage

### Criar Buckets

1. Acesse [Supabase Dashboard](https://app.supabase.com/)
2. Vá para **Storage**
3. Clique em **"New bucket"** e crie:
   - **gallery** (público, 50MB)
   - **videos** (público, 500MB)
   - **documents** (público, 100MB)

### Upload de Arquivos

```bash
# Instalar Supabase CLI
npm install -g supabase

# Fazer login
supabase login

# Upload de arquivos
supabase storage upload gallery foto-1.jpg --project-id evaoqyroqmmlojtzrulj
```

## 10. Checklist Final de Deploy

### Antes do Deploy
- [ ] Código testado localmente
- [ ] Repositório GitHub atualizado
- [ ] Todas as variáveis de ambiente prontas
- [ ] Supabase configurado
- [ ] Domínio adquirido (opcional)

### Durante o Deploy
- [ ] Site criado no Netlify
- [ ] Repositório GitHub conectado
- [ ] Variáveis de ambiente adicionadas
- [ ] Build executado com sucesso
- [ ] Site acessível via URL do Netlify

### Após o Deploy
- [ ] Domínio customizado configurado (opcional)
- [ ] SSL/TLS verificado
- [ ] Testes funcionais passaram
- [ ] Performance testada
- [ ] Segurança verificada
- [ ] Analytics configurado (opcional)

## 11. Troubleshooting

### Build falha no Netlify

**Erro:** `pnpm: command not found`
- Solução: Adicione `NODE_VERSION=22.13.0` em variáveis de ambiente

**Erro:** `Cannot find module '@supabase/supabase-js'`
- Solução: Verifique se `pnpm install` foi executado antes do build

### Site não carrega

**Erro:** Página em branco
- Verifique console (F12) para erros
- Verifique se variáveis de ambiente estão corretas
- Faça um novo deploy

**Erro:** 404 em rotas
- Verifique se `netlify.toml` está configurado corretamente
- Faça um novo deploy

### WhatsApp não funciona

**Erro:** Link não abre
- Verifique número: `5512991363030` (sem formatação)
- Teste em navegador diferente
- Verifique console (F12)

### Google Maps não funciona

**Erro:** Mapa não carrega
- Verifique chave da API: `AIzaSyC7-akywRnxoOLxbLzwSTq_7B9fj6jWQu0`
- Verifique se a chave está habilitada em Google Cloud Console
- Verifique restrições de domínio

## 12. Próximas Ações

1. **Upload de Mídia**
   - Fazer upload das 37 fotos da galeria no Supabase Storage
   - Fazer upload dos vídeos (início e Mounjaro)

2. **Conteúdo**
   - Adicionar mais depoimentos de pacientes
   - Atualizar informações de serviços conforme necessário

3. **Marketing**
   - Configurar Google Analytics
   - Integrar com redes sociais
   - Criar estratégia de SEO

4. **Manutenção**
   - Monitorar performance
   - Atualizar dependências regularmente
   - Fazer backups do banco de dados

## 13. Contato e Suporte

Para dúvidas sobre o deploy:
- GitHub: https://github.com/apezatomarketing-a11y/susifariasnutri
- Netlify: https://app.netlify.com/
- Supabase: https://app.supabase.com/

## 14. Referências

- [Netlify Documentation](https://docs.netlify.com/)
- [Supabase Documentation](https://supabase.com/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
