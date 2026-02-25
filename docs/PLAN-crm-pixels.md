# Plano: Adição de Pixels do CRM (Google Tag Manager)

**Visão Geral:** O usuário precisa adicionar os scripts do Google Tag Manager (GTM) no `<head>` e `<body>` do site para a gestão do CRM.
**Tipo de Projeto:** WEB
**Critérios de Sucesso:** As tags do GTM (`GTM-5KQ5BVDB`) devem estar presentes e no local correto (início do `<head>` e logo após a abertura do `<body>`) nas páginas HTML.
**Stack:** HTML estático.

## Estrutura de Arquivos Afetada
- `/index.html`
- `/politica-de-privacidade.html` (A confirmar com o usuário)

## Divisão de Tarefas (Task Breakdown)

### 1. Adicionar GTM ao `<head>`
- **Agent/Skill:** `frontend-specialist` / `clean-code`
- **INPUT:** Arquivos HTML (`index.html` e demais páginas necessárias) e código do GTM (script).
- **OUTPUT:** Código inserido o mais alto possível dentro da tag `<head>`.
- **VERIFY:** Checar o código estrutural para confirmar a formatação e a presença da tag `<script>` do GTM sem quebrar tags existentes.

### 2. Adicionar GTM (noscript) ao `<body>`
- **Agent/Skill:** `frontend-specialist` / `clean-code`
- **INPUT:** Arquivos HTML.
- **OUTPUT:** Código inserido imediatamente após a tag de abertura `<body ...>`.
- **VERIFY:** Checar se a tag `<noscript>` está no topo da tag body.

## ✅ PHASE X COMPLETE (Pendente)
- [ ] Lint: Pendente
- [ ] Security: Pendente
- [ ] Build & Test: Pendente
