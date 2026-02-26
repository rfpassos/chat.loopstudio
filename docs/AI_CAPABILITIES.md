# Antigravity AI Capabilities & Skills

Este documento lista as principais capacidades, agentes e "skills" disponíveis no diretório `.agent` do projeto. Ele serve como catálogo e referência para a equipe entender do que a IA é capaz, como ela toma decisões arquiteturais e quais ferramentas estão no seu "cinto de utilidades".

---

## 🤖 Agentes Principais (Especialistas)
Os agentes são as personas primárias que a IA assume dependendo do domínio da sua solicitação. A IA faz o roteamento inteligente automático para o agente mais capacitado.

*   **`orchestrator`**: O gerente principal. Coordena tarefas complexas que exigem análises em diferentes domínios e de múltiplos agentes.
*   **`project-planner`**: Planejador de projetos focados em metodologia estruturada (Fases: Análise, Planejamento, Solução, Implementação).
*   **`frontend-specialist`**: Especialista em UI/UX para aplicações e ecossistema front-end.
*   **`backend-specialist`**: Especialista na arquitetura de servidores, APIs e banco de dados.
*   **`mobile-developer`**: Especialista em aplicativos móveis (iOS, Android, React Native, Flutter).
*   **`security-auditor`**: Hacker ético / Especialista em cibersegurança focado em blindagem de aplicações.
*   **`debugger`**: Agente analítico focado exclusivamente em caçar e resolver bugs e falhas lógicas pela raiz.
*   **`game-developer`**: Orquestrador focado estritamente na lógica e arquitetura de desenvolvimento de jogos virtuais.

---

## 🛠️ Skills Disponíveis (Habilidades Injetáveis)
As skills são módulos de conhecimento profundo. Em vez de simplesmente gerar códigos genéricos, essas skills ensinam a IA *princípios, filosofias e como pensar* sobre o problema a ser resolvido em um contexto específico.

### 🎨 Design & UI/UX
*   **`frontend-system-design`**: Focado em sistemas web densos, painéis administrativos, tabelas e processos complexos de SaaS (Hierarquia de dados, consistência, facilidade de uso repetitivo).
*   **`frontend-creative-design`**: Focado em sites promocionais, landing pages e peças de impacto estético extremo ("Wow factor", assimetria, tipografia expressiva e quebra de convenções genéricas de IA).
*   **`mobile-design`**: Padrões focados no fluxo de toque "Mobile-First" e em convenções das plataformas integradas.
*   **`shadcn-ui`**: Módulo especialista em integração, arquitetura e personalização da biblioteca de UI Shadcn.
*   **`brand-identity-extractor`**: Capaz de clonar a identidade visual de imagens e URLs completas para garantir que as novas UIs respeitem a marca.
*   **`web-design-guidelines`**: Habilidade ativada como "Auditor" logo após a codificação do CSS para verificar os quesitos de acessibilidade de tela do usuário.

### ⚙️ Engenharia & Arquitetura de Software
*   **`architecture`**: Traz metodologias de análise de trade-offs arquiteturais antes de montar estruturas e desenhar grandes APIs.
*   **`clean-code`**: Impõe os padrões rigorosos de legibilidade contemporânea da engenharia (sem comentários soltos desnecessários nem engenharia super-complicada).
*   **`database-design`**: Escolhas de ORM, otimização das querys, índices de buscas complexas e arquitetura Serverless de DB.
*   **`api-patterns`**: Paradigmas e design de endpoints adequados: Rest VS GraphQL VS tRPC, cache e formatos de respostas (JSON standards).
*   **`creating-api-endpoints`**: A IA como uma fábrica de "Builders": construção direta e fluida de CRUDs, APIs completas em frameworks em validação estrutural no backend (Zod).

### 🧪 Testes e Depuração
*   **`testing-patterns`**: Decisões em relação à mockagem em nível unitário ou E2E (Integração pesada).
*   **`webapp-testing`**: Validação de ponta a ponta na experiência real e profunda da tela visual com utilitários como *Playwright*.
*   **`tdd-workflow`**: Obriga a IA no modelo metódico test-driven: "Escreve Teste Vermelho -> Resolve Teste Para o Verde -> Refatora".
*   **`systematic-debugging`**: Quando você tem erros graves, exige o encerramento do improviso: impõe que a IA adote as 4 fases sistemáticas da Análise de Causa Raíz usando fatos.

### 💻 Linguagens e Ecossistemas
*   **`nextjs-react-expert`**: Padrões de otimização de renderização extremas vindos da equipe de engenharia da Vercel. Evita *Waterfalls* e excessos nos bundles do cliente usando RSCs (React Server Components).
*   **`nodejs-best-practices`**: Padronização avançada de assincronicidade no fluxo de eventos e event-loops no NodeJS.
*   **`python-patterns`**: Uso rigoroso de Type Hinting contemporâneo (Checagens de tipo estrito do Python).
*   **`rust-pro`**: Sistemas sofisticados na borda do bare-metal (Tokio, threads de memória, async functions escalares).
*   **`gemini-api-dev`**: Domínio especializado para lidar com o uso da inteligência oficial multimodal na última geração dos SDKs `google-genai` do Google.
*   **`remotion-best-practices`**: Conhecimentos voltados ao motor gráfico paramétrico (Remotion) usado em aplicações baseadas em vídeo.

### 🔒 Segurança, DevOps & Infraestrutura
*   **`deployment-procedures`**: Foca em fluxos *shift-left* da CI/CD, deploys blue/green em produção e scripts seguros pré-lançamentos.
*   **`vulnerability-scanner`**: Traz o escopo das listas modernas do projeto de cibersegurança do OWASP Top10.
*   **`red-team-tactics`**: Injeta nas ações da IA manobras simuladas com táticas e técnicas de invasão da MITRE ATT&CK.
*   **`performance-profiling`**: Analisa dados métricos de onde estão gargalos lógicos puros nos fluxogramas visuais/backend.
*   **`server-management`**: Boas práticas na escala vertical ou horizontal de contêineres e na leitura de painéis de telemetria base.
*   **`bash-linux`** e **`powershell-windows`**: Uso assertivo em nível de Kernel dos sistemas operacionais (Pipings do powershell e do binário linux).

### 🧠 Inteligência Prática (Processos e Metodologia)
*   **`brainstorming` (Portal Socrático)**: Essa "skill" é crucial, ela OBRIGA a IA a parar sua impulsividade e fazer ao usuário de 2 a 3 perguntas analíticas na gestão de funcionalidades complexas antes de tocar no código, avaliando sempre os riscos marginais (edge-cases).
*   **`plan-writing`**: Habilidade focada apenas na formulação clara, sequencial e com marcações ricas dos ciclos do seu projeto de Software.
*   **`maintaining-docs`**: Operações de fundo da Inteligência: Sempre que finalizar features lógicas, obriga formalmente à atualização dos dados dos artefatos `CONTEXT.md` ou `SYSTEM.md` de forma silenciosa e assertiva.
*   **`i18n-localization`**: Busca metódica de strings "chumbadas" no HTML visual forçando a injeção em camadas JSON fluentes na lógica React.
*   **`seo-fundamentals`** e **`geo-fundamentals`**: Conhecimento na busca amigável clássica (motores de rastreamento Google Crawler) e estratégias GEO atuais p/ mecanismos conversacionais como ChatGPT e Claude.

### 🏗️ Construção e Orquestrações
*   **`app-builder`**: O fluxo matriz usado para instanciar novos softwares plenos do Zero Absoluto interagindo nas ferramentas *Tech.*
*   **`generating-components`**: Criador pontual diário de artefatos Tailwind / Interface Base para os projetos visuais sem perder os Tokens de design ativos.
*   **`mcp-builder`**: Skill dedicada para compor e forjar *Model Context Protocol* customizados, injetando conhecimento cruzado via local servers (MCP).
*   **`skill-creator`**: Permite o autogerenciamento evolutivo: a IA é capacitada a redigir logicamente do zero Novas *Skills* para sua própria biblioteca `.agent`.

---

## 🚀 Scripts Executáveis e Auditorias
A arquitetura do kit oferece scripts nativos p/ engatilhar validações rápidas. A própria inteligência, por padrão, roda as validações usando ferramentas CLI e emite os relatórios:
*   `verify_all.py` / `checklist.py`: Bateria completa e principal das checagens p/ aprovação das rotinas antes de merges práticos.
*   `ux_audit.py` e `accessibility_checker.py`: Focados diretamente no UI design audit para UX.
*   `security_scan.py` e `dependency_analyzer.py`: Verifica chaves abertas ou lib legadas em pacotes do Json/Py.
*   `lighthouse_audit.py` e `bundle_analyzer.py`: Usada antes dos "Deploys" na plataforma Vercel para inspecionar sobrecargas JavaScript na árvore final do Webpack.
