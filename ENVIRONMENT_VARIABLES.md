# Variáveis de Ambiente - Susi Farias Nutricionista

## 1. Variáveis para Netlify

Copie e cole a tabela abaixo no painel de variáveis de ambiente do Netlify (Site settings > Build & deploy > Environment).

### Tabela de Variáveis de Ambiente - Netlify

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `VITE_APP_TITLE` | `Susi Farias - Nutricionista` | Título da aplicação |
| `VITE_APP_LOGO` | `/logo.svg` | URL do logotipo |
| `VITE_SUPABASE_URL` | `https://evaoqyroqmmlojtzrulj.supabase.co` | URL do Supabase |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzNjgyOTIsImV4cCI6MjA4NDk0NDI5Mn0.KBAsny0JD9Er0dh_48bmK-1KEkqpxx0Uz3P1-cmmypE` | Chave anônima do Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTM2ODI5MiwiZXhwIjoyMDg0OTQ0MjkyfQ.1qsvuXA4uriWbWUjn_ZEZNZmg12DyMfPoLUxyvK1USU` | Chave service role do Supabase |
| `DATABASE_URL` | `postgresql://postgres:[PASSWORD]@db.evaoqyroqmmlojtzrulj.supabase.co:5432/postgres` | URL do banco de dados PostgreSQL |
| `VITE_WHATSAPP_NUMBER` | `5512991363030` | Número WhatsApp (sem formatação) |
| `VITE_GOOGLE_MAPS_API_KEY` | `AIzaSyC7-akywRnxoOLxbLzwSTq_7B9fj6jWQu0` | Chave da API Google Maps |
| `VITE_GEMINI_API_KEY` | `AIzaSyBg353Ko7lHT-DnThBqU2wr_9YjQ4N7OE8` | Chave da API Gemini (Google AI Studio) |
| `RESEND_API_KEY` | `re_3jmawcpY_4b6iGtiQsZVT1Z7Vy6MjrWsJ` | Chave da API Resend (para emails) |
| `JWT_SECRET` | `sua-chave-secreta-jwt-aqui-min-32-caracteres` | Chave para assinatura de JWT |
| `NODE_ENV` | `production` | Ambiente de execução |
| `VITE_APP_ID` | `susifariasnutri` | ID da aplicação |
| `VITE_OAUTH_PORTAL_URL` | `https://oauth.manus.im` | URL do portal OAuth |
| `OAUTH_SERVER_URL` | `https://auth.manus.im` | URL do servidor de autenticação |
| `OWNER_OPEN_ID` | `[SEU_OPEN_ID]` | Seu ID de administrador |

## 2. Variáveis para Supabase

As variáveis do Supabase já estão configuradas. Você pode acessá-las em:
**Settings > API > Project URL e API Keys**

### Credenciais Supabase

| Item | Valor |
|------|-------|
| **Project URL** | `https://evaoqyroqmmlojtzrulj.supabase.co` |
| **Anon Public Key** | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzNjgyOTIsImV4cCI6MjA4NDk0NDI5Mn0.KBAsny0JD9Er0dh_48bmK-1KEkqpxx0Uz3P1-cmmypE` |
| **Service Role Key** | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTM2ODI5MiwiZXhwIjoyMDg0OTQ0MjkyfQ.1qsvuXA4uriWbWUjn_ZEZNZmg12DyMfPoLUxyvK1USU` |
| **Database URL** | `postgresql://postgres:[PASSWORD]@db.evaoqyroqmmlojtzrulj.supabase.co:5432/postgres` |

## 3. Configuração de Storage no Supabase

### Buckets Necessários

| Bucket | Tipo | Tamanho Máximo | Descrição |
|--------|------|----------------|-----------|
| `gallery` | Public | 50 MB | Galeria com 37 fotos |
| `videos` | Public | 500 MB | Vídeos de apresentação |
| `documents` | Public | 100 MB | PDFs e documentos |

### URLs de Acesso

```
https://evaoqyroqmmlojtzrulj.supabase.co/storage/v1/object/public/gallery/
https://evaoqyroqmmlojtzrulj.supabase.co/storage/v1/object/public/videos/
https://evaoqyroqmmlojtzrulj.supabase.co/storage/v1/object/public/documents/
```

## 4. Configuração no Arquivo .env.local (Local)

Para desenvolvimento local, crie um arquivo `.env.local` na raiz do projeto:

```env
# Supabase
VITE_SUPABASE_URL=https://evaoqyroqmmlojtzrulj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzNjgyOTIsImV4cCI6MjA4NDk0NDI5Mn0.KBAsny0JD9Er0dh_48bmK-1KEkqpxx0Uz3P1-cmmypE
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTM2ODI5MiwiZXhwIjoyMDg0OTQ0MjkyfQ.1qsvuXA4uriWbWUjn_ZEZNZmg12DyMfPoLUxyvK1USU

# Database
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.evaoqyroqmmlojtzrulj.supabase.co:5432/postgres

# APIs
VITE_WHATSAPP_NUMBER=5512991363030
VITE_GOOGLE_MAPS_API_KEY=AIzaSyC7-akywRnxoOLxbLzwSTq_7B9fj6jWQu0
VITE_GEMINI_API_KEY=AIzaSyBg353Ko7lHT-DnThBqU2wr_9YjQ4N7OE8
RESEND_API_KEY=re_3jmawcpY_4b6iGtiQsZVT1Z7Vy6MjrWsJ

# Security
JWT_SECRET=sua-chave-secreta-jwt-aqui-min-32-caracteres

# App
VITE_APP_TITLE=Susi Farias - Nutricionista
VITE_APP_LOGO=/logo.svg
NODE_ENV=development
```

## 5. Instruções de Configuração no Netlify

### Passo 1: Acessar Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Faça login na sua conta
3. Selecione o site "susifariasnutri"

### Passo 2: Acessar Variáveis de Ambiente
1. Clique em **Site settings** (no topo)
2. Vá para **Build & deploy** > **Environment**
3. Clique em **Edit variables**

### Passo 3: Adicionar Variáveis
1. Clique em **Add variable**
2. Copie cada linha da tabela acima (Variável | Valor)
3. Cole o nome da variável em "Key"
4. Cole o valor em "Value"
5. Repita para todas as variáveis

### Passo 4: Salvar
1. Clique em **Save**
2. Aguarde o novo deploy automático

## 6. Checklist de Configuração

- [ ] Variáveis adicionadas no Netlify
- [ ] Supabase Storage configurado com 3 buckets
- [ ] Arquivo `.env.local` criado localmente
- [ ] Build local testado com sucesso
- [ ] Deploy no Netlify realizado
- [ ] Site acessível via URL
- [ ] WhatsApp funcionando
- [ ] Google Maps funcionando
- [ ] Formulário de contato testado

## 7. Troubleshooting

### Variáveis não funcionam
- Verifique se foram salvas no Netlify
- Faça um novo deploy (Settings > Deploys > Trigger deploy)
- Limpe cache do navegador (Ctrl+Shift+Del)

### Erro de conexão com Supabase
- Verifique se a URL e chaves estão corretas
- Teste a conexão localmente primeiro
- Verifique firewall/CORS

### WhatsApp não funciona
- Verifique o número: deve estar sem formatação (ex: 5512991363030)
- Teste em um navegador diferente
- Verifique console do navegador (F12)

## 8. Referências

- [Documentação Netlify - Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/)
- [Documentação Supabase - API Keys](https://supabase.com/docs/guides/api)
- [Google Maps API](https://developers.google.com/maps)
- [Resend Email API](https://resend.com/docs)
