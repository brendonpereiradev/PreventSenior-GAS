# Projeto de Termos de Uso e Privacidade

## Overview
Criar e atualizar as páginas legais para a GAS Corretora (autorizada Prevent Senior). A intenção é definir o "Rules of Engagement" através dos "Termos de Uso" (estabelecendo limites e responsabilidades) e "The Data Architecture Declaration" através da "Política de Privacidade" (explicando como os dados são tratados e as integrações de marketing).

## Project Type
WEB

## Success Criteria
- Página de "Termos de Uso" (`termos-de-uso.html`) criada no mesmo padrão visual do site.
- Página de "Política de Privacidade" (`politica-de-privacidade.html`) atualizada/reformulada para contemplar a declaração de arquitetura de dados correta.
- Ambas devem explicitar claramente que trata-se de um site de uma Corretora Autorizada (GAS Corretora) e não o oficial da operadora (Prevent Senior).
- Informar que os dados dos formulários vão direto via Whatsapp e uso restrito a GTM/GA/Meta para cookies/rastreamento.

## Tech Stack
- HTML5
- CSS (Puxando a folha `styles.css` existente)

## File Structure
- `termos-de-uso.html` [NOVO]
- `politica-de-privacidade.html` [MODIFICADO]
- `index.html` [MODIFICADO - Inserir link dos Termos no rodapé]

## Task Breakdown

### 1. Atualizar e criar base de Política de Privacidade
- **Task ID**: `privacy_policy_update`
- **Agent**: `frontend-specialist`
- **Skills**: `clean-code`
- **Priority**: P1
- **Dependencies**: Nenhuma
- **Ação**: Reformular a página `politica-de-privacidade.html` aplicando textos claros focados na arquitetura de dados. Explicar a captura restrita (Nome, Idade, Whatsapp), destino e uso de cookies analíticos (somente GTM/Analytics).
- **INPUT**: `politica-de-privacidade.html` e as diretrizes do usuário.
- **OUTPUT**: `politica-de-privacidade.html` reformulado.
- **VERIFY**: Ler o conteúdo e verificar a consistência.

### 2. Criar Documento de Termos de Uso
- **Task ID**: `terms_of_use_creation`
- **Agent**: `frontend-specialist`
- **Skills**: `clean-code`
- **Priority**: P1
- **Dependencies**: Nenhuma
- **Ação**: Criar do zero a página `termos-de-uso.html` usando a base visual das outras. Abordar responsabilidade da cotação, revenda autorizada da marca e isenções da Prevent Senior.
- **INPUT**: Diretrizes do usuário e layout padrão.
- **OUTPUT**: Novo arquivo `termos-de-uso.html`.
- **VERIFY**: Verificar no navegador a exibição correta e textos.

### 3. Atualizar navegação do Rodapé para incluir os Termos
- **Task ID**: `footer_terms_link`
- **Agent**: `frontend-specialist`
- **Skills**: `clean-code`
- **Priority**: P2
- **Dependencies**: 2
- **Ação**: Incluir o link de Termos de Uso no Footer de `index.html` (e caso exista em outros arquivos, padronizar).
- **INPUT**: `index.html`, `politica-de-privacidade.html`
- **OUTPUT**: Footer atualizado.
- **VERIFY**: Menu navegável entre todas as páginas.

## ✅ PHASE X (Verification Checklist)
- [ ] P0 Lint / Checker (Verificar se há HTML malformado em ambas as páginas).
- [ ] P1 Teste de UX (Assegurar que botões de voltar e footer estão presentes).
- [ ] Segurança/LGPD (Verificar se textos expostos concordam com a lei).
