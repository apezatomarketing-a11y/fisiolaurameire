# Configuração do Supabase para Susi Farias Nutricionista

## Visão Geral

Este documento descreve como configurar o Supabase para o projeto Susi Farias Nutricionista, incluindo banco de dados, storage e variáveis de ambiente.

## 1. Criação do Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Faça login ou crie uma conta
3. Clique em "New Project"
4. Preencha os dados:
   - **Project Name**: susifariasnutri
   - **Database Password**: Use uma senha forte
   - **Region**: Selecione a região mais próxima (ex: South America - São Paulo)
5. Clique em "Create new project"

## 2. Configuração do Banco de Dados

### 2.1 Criar Tabelas

Acesse o SQL Editor no Supabase e execute os seguintes comandos:

```sql
-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Consultas
CREATE TABLE IF NOT EXISTS consultations (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL, -- 'avulsa', 'pacote_3m', 'pacote_6m', 'pacote_12m'
  status VARCHAR(50) DEFAULT 'agendada', -- 'agendada', 'realizada', 'cancelada'
  scheduled_date TIMESTAMP,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Agendamentos
CREATE TABLE IF NOT EXISTS appointments (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date TIMESTAMP NOT NULL,
  type VARCHAR(50) NOT NULL,
  status VARCHAR(50) DEFAULT 'pendente',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Contatos (formulário)
CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'novo',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Serviços
CREATE TABLE IF NOT EXISTS services (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  duration_minutes INTEGER,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Pacotes
CREATE TABLE IF NOT EXISTS packages (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  duration_months INTEGER NOT NULL,
  price DECIMAL(10, 2),
  consultations_included INTEGER,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2.2 Habilitar Row Level Security (RLS)

```sql
-- Habilitar RLS em todas as tabelas
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso (exemplo para usuários)
CREATE POLICY "Users can view their own data" ON users
  FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update their own data" ON users
  FOR UPDATE USING (auth.uid()::text = id::text);
```

## 3. Configuração do Storage

### 3.1 Criar Buckets

No Supabase Dashboard, vá para **Storage** e crie os seguintes buckets:

1. **gallery** - Para as 37 fotos da galeria
   - Tipo: Public
   - Tamanho máximo: 50MB

2. **videos** - Para vídeos de apresentação
   - Tipo: Public
   - Tamanho máximo: 500MB

3. **documents** - Para PDFs e documentos
   - Tipo: Public
   - Tamanho máximo: 100MB

### 3.2 Configurar Políticas de Acesso

```sql
-- Políticas de Storage (executar no SQL Editor)

-- Gallery bucket
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'gallery');

-- Videos bucket
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'videos');

-- Documents bucket
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'documents');
```

## 4. Variáveis de Ambiente

### 4.1 Obter Credenciais do Supabase

1. No Supabase Dashboard, clique em **Settings** > **API**
2. Copie:
   - **Project URL** (SUPABASE_URL)
   - **anon public** (SUPABASE_ANON_KEY)
   - **service_role secret** (SUPABASE_SERVICE_ROLE_KEY)

### 4.2 Configurar no Projeto

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Supabase
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
SUPABASE_SERVICE_ROLE_KEY=sua-chave-service-role

# Database
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[REGION].supabase.co:5432/postgres

# WhatsApp
VITE_WHATSAPP_NUMBER=5512991363030

# Google Maps
VITE_GOOGLE_MAPS_API_KEY=sua-chave-google-maps
```

## 5. Integração com o Projeto

### 5.1 Instalar Supabase Client

```bash
pnpm add @supabase/supabase-js
```

### 5.2 Criar Cliente Supabase

Crie o arquivo `client/src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

## 6. Upload de Arquivos

### 6.1 Estrutura de Pastas no Storage

```
gallery/
  ├── foto-galeria-1.jpg
  ├── foto-galeria-2.jpg
  └── ... (37 fotos)

videos/
  ├── video-inicio.mp4
  └── video-mounjaro.mp4

documents/
  ├── relatorio-servicos.pdf
  └── politica-privacidade.pdf
```

### 6.2 Script de Upload

```typescript
import { supabase } from '@/lib/supabase';

export async function uploadFile(bucket: string, path: string, file: File) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file);

  if (error) throw error;
  return data;
}

export function getPublicUrl(bucket: string, path: string) {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);
  return data.publicUrl;
}
```

## 7. Checklist de Configuração

- [ ] Projeto criado no Supabase
- [ ] Tabelas SQL criadas
- [ ] Row Level Security habilitado
- [ ] Buckets de storage criados
- [ ] Políticas de acesso configuradas
- [ ] Variáveis de ambiente adicionadas
- [ ] Cliente Supabase instalado e configurado
- [ ] Arquivos de mídia enviados para storage
- [ ] Testes de conexão realizados

## 8. Referências

- [Documentação Supabase](https://supabase.com/docs)
- [Supabase Storage](https://supabase.com/docs/guides/storage)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [JavaScript Client](https://supabase.com/docs/reference/javascript)
