# Schema do Banco de Dados - Susi Farias Nutricionista

## Visão Geral

Este documento descreve o schema completo do banco de dados PostgreSQL para o projeto Susi Farias Nutricionista, hospedado no Supabase.

## 1. Tabelas Principais

### 1.1 Tabela: users

Armazena informações dos usuários/pacientes.

```sql
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  date_of_birth DATE,
  gender VARCHAR(10), -- 'M', 'F', 'Outro'
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(2),
  zip_code VARCHAR(10),
  medical_history TEXT,
  allergies TEXT,
  medications TEXT,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_active ON users(active);
```

### 1.2 Tabela: consultations

Armazena informações de consultas realizadas.

```sql
CREATE TABLE consultations (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL, -- 'avulsa', 'pacote_3m', 'pacote_6m', 'pacote_12m'
  status VARCHAR(50) DEFAULT 'agendada', -- 'agendada', 'realizada', 'cancelada', 'faltou'
  scheduled_date TIMESTAMP NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  notes TEXT,
  recommendations TEXT,
  attachments JSONB, -- URLs de documentos anexados
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_consultations_user_id ON consultations(user_id);
CREATE INDEX idx_consultations_status ON consultations(status);
CREATE INDEX idx_consultations_scheduled_date ON consultations(scheduled_date);
```

### 1.3 Tabela: appointments

Armazena agendamentos futuros.

```sql
CREATE TABLE appointments (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  consultation_id BIGINT REFERENCES consultations(id) ON DELETE SET NULL,
  date TIMESTAMP NOT NULL,
  time TIME NOT NULL,
  type VARCHAR(50) NOT NULL, -- 'consulta', 'retorno', 'avaliacao'
  status VARCHAR(50) DEFAULT 'confirmado', -- 'confirmado', 'pendente', 'cancelado'
  notes TEXT,
  reminder_sent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_appointments_user_id ON appointments(user_id);
CREATE INDEX idx_appointments_date ON appointments(date);
CREATE INDEX idx_appointments_status ON appointments(status);
```

### 1.4 Tabela: contacts

Armazena mensagens do formulário de contato.

```sql
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'novo', -- 'novo', 'em_andamento', 'respondido', 'fechado'
  response TEXT,
  responded_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created_at ON contacts(created_at);
```

### 1.5 Tabela: services

Armazena informações dos serviços oferecidos.

```sql
CREATE TABLE services (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL, -- 'consulta', 'avaliacao', 'suplementacao', 'florais'
  price DECIMAL(10, 2),
  duration_minutes INTEGER,
  active BOOLEAN DEFAULT TRUE,
  order_index INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dados padrão
INSERT INTO services (name, description, category, price, duration_minutes, order_index) VALUES
  ('Consulta Avulsa', 'Consulta individualizada com análise completa', 'consulta', 150.00, 60, 1),
  ('Bioimpedância', 'Avaliação de composição corporal', 'avaliacao', 100.00, 30, 2),
  ('Suplementação', 'Recomendações de suplementos', 'suplementacao', 50.00, 30, 3),
  ('Florais de Minas', 'Complementação com florais', 'florais', 75.00, 30, 4);
```

### 1.6 Tabela: packages

Armazena informações dos pacotes de atendimento.

```sql
CREATE TABLE packages (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  duration_months INTEGER NOT NULL,
  price DECIMAL(10, 2),
  consultations_included INTEGER,
  bioimpedance_included BOOLEAN DEFAULT FALSE,
  active BOOLEAN DEFAULT TRUE,
  order_index INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dados padrão
INSERT INTO packages (name, description, duration_months, price, consultations_included, bioimpedance_included, order_index) VALUES
  ('Pacote 3 Meses', 'Acompanhamento trimestral', 3, 450.00, 3, TRUE, 1),
  ('Pacote 6 Meses', 'Acompanhamento semestral', 6, 800.00, 6, TRUE, 2),
  ('Pacote 12 Meses', 'Acompanhamento anual', 12, 1400.00, 12, TRUE, 3);
```

### 1.7 Tabela: nutrition_types

Armazena tipos de nutrição oferecidos.

```sql
CREATE TABLE nutrition_types (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  slug VARCHAR(100) UNIQUE NOT NULL,
  icon VARCHAR(50),
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dados padrão
INSERT INTO nutrition_types (name, description, slug) VALUES
  ('Nutrição Clínica', 'Tratamento de condições clínicas', 'clinical'),
  ('Nutrição Esportiva', 'Otimização de desempenho atlético', 'sports');
```

### 1.8 Tabela: clinical_conditions

Armazena condições clínicas tratadas.

```sql
CREATE TABLE clinical_conditions (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  slug VARCHAR(100) UNIQUE NOT NULL,
  details JSONB, -- Informações adicionais em JSON
  active BOOLEAN DEFAULT TRUE,
  order_index INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dados padrão
INSERT INTO clinical_conditions (name, slug, order_index) VALUES
  ('Diabetes', 'diabetes', 1),
  ('Hipertensão', 'hypertension', 2),
  ('Menopausa', 'menopause', 3),
  ('Ovário Policístico', 'pcos', 4),
  ('Saúde da Mulher', 'womens_health', 5),
  ('Menarca', 'menarche', 6),
  ('Baixo Libido', 'low_libido', 7);
```

### 1.9 Tabela: testimonials

Armazena depoimentos de pacientes.

```sql
CREATE TABLE testimonials (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES users(id) ON DELETE SET NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  message TEXT NOT NULL,
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_testimonials_approved ON testimonials(approved);
CREATE INDEX idx_testimonials_rating ON testimonials(rating);
```

### 1.10 Tabela: media

Armazena informações de mídia (imagens, vídeos).

```sql
CREATE TABLE media (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL, -- 'image', 'video', 'document'
  bucket VARCHAR(100) NOT NULL, -- 'gallery', 'videos', 'documents'
  path VARCHAR(500) NOT NULL,
  url TEXT NOT NULL,
  size_bytes BIGINT,
  mime_type VARCHAR(100),
  alt_text VARCHAR(255),
  uploaded_by VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_media_bucket ON media(bucket);
CREATE INDEX idx_media_type ON media(type);
```

## 2. Políticas de Row Level Security (RLS)

```sql
-- Habilitar RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Políticas para users
CREATE POLICY "Users can view their own data" ON users
  FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update their own data" ON users
  FOR UPDATE USING (auth.uid()::text = id::text);

-- Políticas para consultations
CREATE POLICY "Users can view their consultations" ON consultations
  FOR SELECT USING (user_id = (SELECT id FROM users WHERE auth.uid()::text = id::text));

-- Políticas para appointments
CREATE POLICY "Users can view their appointments" ON appointments
  FOR SELECT USING (user_id = (SELECT id FROM users WHERE auth.uid()::text = id::text));

-- Políticas para contacts (público)
CREATE POLICY "Anyone can create contacts" ON contacts
  FOR INSERT WITH CHECK (true);

-- Políticas para testimonials (público)
CREATE POLICY "Anyone can view approved testimonials" ON testimonials
  FOR SELECT USING (approved = true);

CREATE POLICY "Anyone can create testimonials" ON testimonials
  FOR INSERT WITH CHECK (true);
```

## 3. Triggers e Funções

```sql
-- Função para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para atualizar updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_consultations_updated_at BEFORE UPDATE ON consultations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_packages_updated_at BEFORE UPDATE ON packages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```

## 4. Views Úteis

```sql
-- View de próximas consultas
CREATE OR REPLACE VIEW upcoming_consultations AS
SELECT 
  c.id,
  u.name,
  u.email,
  u.phone,
  c.scheduled_date,
  c.type,
  c.duration_minutes
FROM consultations c
JOIN users u ON c.user_id = u.id
WHERE c.scheduled_date > CURRENT_TIMESTAMP
  AND c.status = 'agendada'
ORDER BY c.scheduled_date;

-- View de estatísticas
CREATE OR REPLACE VIEW statistics AS
SELECT 
  (SELECT COUNT(*) FROM users) as total_users,
  (SELECT COUNT(*) FROM consultations WHERE status = 'realizada') as completed_consultations,
  (SELECT COUNT(*) FROM appointments WHERE status = 'confirmado' AND date > CURRENT_TIMESTAMP) as upcoming_appointments,
  (SELECT COUNT(*) FROM contacts WHERE status = 'novo') as new_contacts;
```

## 5. Backup e Restauração

### 5.1 Backup

```bash
# Fazer backup do banco de dados
pg_dump postgresql://user:password@host:5432/database > backup.sql
```

### 5.2 Restauração

```bash
# Restaurar banco de dados
psql postgresql://user:password@host:5432/database < backup.sql
```

## 6. Checklist de Implementação

- [ ] Todas as tabelas criadas
- [ ] Índices criados para performance
- [ ] Row Level Security habilitado
- [ ] Políticas de acesso configuradas
- [ ] Triggers para updated_at funcionando
- [ ] Views criadas
- [ ] Dados padrão inseridos
- [ ] Backup testado
- [ ] Testes de conexão realizados

## 7. Referências

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Supabase Database Guide](https://supabase.com/docs/guides/database)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
