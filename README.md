# 💎 Velluto - E-commerce de Joias em React

![Velluto Banner](https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80)

## 📌 Sobre o Projeto

Velluto é um e-commerce moderno e elegante especializado em joias, desenvolvido com React e Supabase. O projeto oferece uma experiência de compra premium, com foco em usabilidade e design refinado.

### ✨ [Demo ao Vivo](https://velluto.netlify.app)

## 🚀 Principais Funcionalidades

- **🔐 Autenticação Segura**
  - Login e registro de usuários
  - Gerenciamento de sessão
  - Recuperação de senha

- **🛍️ Experiência de Compra**
  - Catálogo de produtos com filtros
  - Carrinho de compras persistente
  - Lista de favoritos
  - Busca em tempo real

- **💳 Checkout Completo**
  - Múltiplas formas de pagamento
  - Cálculo de frete automático
  - Cupons de desconto
  - Endereços salvos

- **👤 Área do Cliente**
  - Histórico de pedidos
  - Gerenciamento de endereços
  - Lista de favoritos
  - Acompanhamento de pedidos

## 🔧 Tecnologias Utilizadas

### Frontend
- ⚛️ React 18
- 🎨 Tailwind CSS
- 📡 React Router DOM
- 🔄 Zustand (Gerenciamento de Estado)
- 🎯 TypeScript
- 🚀 Vite

### Backend & Serviços
- 🗃️ Supabase (Backend as a Service)
  - Autenticação
  - Banco de Dados PostgreSQL
  - Row Level Security
- 🚀 Netlify (Hospedagem)

### Ferramentas de Desenvolvimento
- 📦 pnpm (Gerenciador de Pacotes)
- 🧹 ESLint
- 💅 Prettier
- 🧪 Vitest

## 📂 Estrutura do Projeto

```
src/
├── components/        # Componentes React
│   ├── auth/         # Componentes de autenticação
│   ├── checkout/     # Componentes do processo de compra
│   ├── products/     # Componentes relacionados a produtos
│   └── shared/       # Componentes compartilhados
├── lib/              # Utilitários e configurações
│   ├── supabase.ts   # Cliente e configuração do Supabase
│   ├── store.ts      # Store do Zustand
│   └── types.ts      # Tipos TypeScript
├── styles/           # Estilos globais
└── App.tsx           # Componente principal

supabase/
└── migrations/       # Migrações do banco de dados
```

## ⚙️ Configuração e Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/velluto.git
   cd velluto
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```
   Preencha as variáveis necessárias:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

5. **Acesse o projeto**
   ```
   http://localhost:5173
   ```

## 🎨 Demonstração

### Página Inicial
![Home](https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80)

### Catálogo de Produtos
![Catalog](https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80)

### Checkout
![Checkout](https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80)

## 🔒 Segurança

- Autenticação segura via Supabase
- Row Level Security (RLS) no banco de dados
- Proteção contra CSRF
- Sanitização de inputs
- Validação de dados no frontend e backend

## 🚀 Performance

- Lazy loading de imagens e componentes
- Otimização de bundle com Vite
- Caching eficiente
- Compressão de assets
- Score alto no Lighthouse

## 📈 Roadmap

- [ ] Implementação de PWA
- [ ] Integração com mais gateways de pagamento
- [ ] Sistema de avaliações e reviews
- [ ] Painel administrativo
- [ ] Suporte a múltiplos idiomas

## 🤝 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit de suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Leonardo Oliveira** - *Desenvolvedor Front end* - [LinkedIn](https://www.linkedin.com/in/leogocontato/)

## 📞 Contato

- Email: seu.email@exemplo.com
- LinkedIn: [Seu Perfil](https://www.linkedin.com/in/leogocontato/)
- GitHub: [@seu-usuario](https://github.com/Lewxg)


<p align="center">
  Feito com ❤️ por Lewxg
</p>
