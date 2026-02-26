# Architecture Decision Record (ADR) & System Map

Este documento delineia as decisões arquiteturais da aplicação, o fluxo de dados, padrões estabelecidos de injeção de dependências e regras lógicas globais. Agentes (especialmente `architecture` e os especialistas Back/Front) leem rigorosamente este arquivo.

---

## 🗺️ 1. Mapa de Diretórios
*(A IA deverá preencher essa seção detalhando a estrutura raiz após rodar o init do framework)*

```
[Estrutura de pastas do projeto gerado]
/src
  /components
  /app
/docs (Documentação auxiliar)
/.agent (Regras da IA)
```

## 🔄 2. Fluxo de Dados e Estado Global
*(Como os dados trafegam do cliente para o banco e vice-versa)*

*   **State Management Dinâmico:** [Ex: Zustand / Redux / React Context / N/A]
*   **Gerenciamento de Cache de Rede:** [Ex: React Query / Nuxt Apollo / SWR]
*   **Formato de Transporte Padrão:** [Ex: JSON RestFull APIs / GraphQL / Protocol Buffers]

## 🔐 3. Padrões de Autenticação e Autorização
*   **Padrão de Senhas:** [Ex: Hashing via bcrypt/argon2]
*   **Sessão:** [Ex: JWT via cookies HTTP-only / Supabase Auth Tokens]
*   **Gestão de Permissões (RBAC):** [Regras de perfis de usuário, ex: Admin vs Guest]

## 🗄️ 4. Estratégia de Banco de Dados
*   **Modelagem de Dados de Referência:** (Descreva a estrutura macro aqui ou referencie o arquivo `schema.prisma` caso exista).
*   **Decisão de Índices e Performance:** (Tabelas gigantes que requerem índices especiais, restrições estrangeiras).

## 🚀 5. Esteira de Deploy (CI/CD)
*   **Automação (CI):** [Ex: GitHub Actions forçando ESLint, Prettier e Run de Testes]
*   **Lançamento (CD):** [Ex: Auto-deploy na main branch via Vercel / Deploy Blue/Green via Docker Swarm]

---

## ⛔ 6. Convenções "Hard-Coded" da Equipe (Invioláveis)
*(Pontos que a equipe ou CTO decidiu e que a IA está proibida de contornar ou opinar contra nestes quesitos).*

1.  **Regra de Componentes UI:** Não gere CSS puro nas frentes. Apenas classes Tailwind utilitárias ou Tokens do sistema integrado (Ex: Shadcn).
2.  **Regra de Nomenclatura:** Nomes de pastas em `kebab-case`, nomes de componentes em `PascalCase`.
3.  **Variáveis de Ambiente:** Nenhuma chave (`sk_test_...`) crua no código cliente sob justificativa alguma. Depender apenas do arquivo `.env`.
