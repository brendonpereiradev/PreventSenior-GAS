# PLAN-privacy-header

## Goal Description
Centralizar os elementos do cabeçalho (Logo, Link de Retorno, Botão CTA) na página de Política de Privacidade, mantendo a distribuição "espalhada" (space-between) mas reduzindo a largura total para que fiquem visualmente mais centralizados, alinhados com o conteúdo de texto da página.

**Contexto:**
- O container padrão tem `max-width: 1200px`.
- O conteúdo de texto tem `max-width: 800px`.
- O usuário solicitou que a mudança seja exclusiva para esta página.

## User Review Required
> [!NOTE]
> A alteração será feita apenas no arquivo `politica-de-privacidade.html` usando estilos locais (`<style>` interno) para sobrescrever o comportamento padrão do `.header .container` apenas nesta página, conforme solicitado.

## Proposed Changes

### Frontend

#### [MODIFY] [politica-de-privacidade.html](file:///c:/Users/Admin/Documents/Projects/Antigravity%20Projects/Landing%20Page%20%28Vendas%29/politica-de-privacidade.html)
1. **Top Bar (`.topbar-social`)**:
   - Mover o link "Voltar ao Início" (atualmente na `<nav>`) para dentro de `.topbar-inner`.
   - Ajustar `.topbar-inner` para que os elementos (Contador e Link) fiquem alinhados (flex-row, gap adequada). A solicitação "Centralize...com..." sugere que fiquem juntos no centro.

2. **Header (`.header`)**:
   - Remover a `<nav class="nav-menu">` pois o link saiu de lá.
   - Manter o ajuste de `max-width: 900px` (feito anteriormente) para Logo e CTA.
   - O header ficará apenas com Logo (esquerda) e CTA (direita) dentro do container de 900px.

3. **Estilos (`<style>`)**:
   - Adicionar regras para estilizar o "Voltar ao Início" quando estiver na topbar (fonte menor, cor branca/clara para contrastar com o fundo azul escuro da topbar).

## Verification Plan

### Manual Verification
- Verificar se "Voltar ao Início" aparece na barra fixa superior, ao lado de "X pessoas...".
- Verificar se estão alinhados verticalmente (mesma linha).
- Verificar se o Header principal mantém o Logo e CTA alinhados e centralizados (bloco 900px).
