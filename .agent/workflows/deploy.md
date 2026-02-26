---
description: Deployment command for production releases. Pre-flight checks and deployment execution.
---

# /deploy - Production Deployment

## Pre-Deploy Checklist

### Code Quality
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] ESLint passing (`npx eslint .`)
- [ ] All tests passing (`npm test`)

### Security
- [ ] No hardcoded secrets
- [ ] Environment variables documented
- [ ] Dependencies audited (`npm audit`)

### Performance
- [ ] Bundle size acceptable
- [ ] No console.log statements
- [ ] Images optimized

### Documentation
- [ ] README updated
- [ ] CHANGELOG updated
- [ ] API docs current

### Atualização do código no Github
- [ ] Código atualizado

## Build da aplicação

Faça o build da aplicação localmente (`npm run build`).

- **Se houver algum problema no build:** Corrija o problema, faça um novo build para validar a correção e avise para o usuário testar se está tudo funcionando corretamente. Quando o usuário responder que está tudo certo, peça para ele atualizar o código no GitHub. Depois da confirmação de atualização, **comece novamente** o processo de deploy desde o início.
- **Se não houver nenhum problema:** Siga com o deploy no ambiente.

**Ação Obrigatória:**
Se o código não estiver atualizado no GitHub, confirme com o usuário se deve seguir ou se ele deseja atualizar primeiro. Após a confirmação do usuário (de que o código está atualizado ou de que pode seguir), prossiga para a próxima etapa.

## Deploy no ambiente de produção

Se todas as verificações anteriores passarem e o build for bem-sucedido, realize o deploy:

| Plataforma | Comando | Ação no Servidor |
|----------|---------|-------|
| Easypanel | `npm run deploy` | Dispara webhook: http://72.61.42.171:3000/api/deploy/74751b6d29e84ed1fdc567567ef48e41fa087aa042277f86 |

*(Nota: Executar `npm run deploy` ou fazer a requisição do webhook diretamente, dependendo de como os scripts do projeto estão configurados para acionar o webhook).*