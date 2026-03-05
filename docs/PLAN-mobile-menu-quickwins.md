# PLAN: Mobile Menu Quick Wins

> Refinamento do menu hambúrguer mobile com overlay, CTA, animações stagger, info de contato e scroll lock.

---

## Contexto

O menu mobile atual (drawer lateral) funciona, mas carece de polimento visual e de UX. A **Option A (Quick Wins)** do brainstorm envolve 6 melhorias focadas que não alteram a estrutura do drawer, apenas agregam qualidade.

### Arquivos Afetados

| Arquivo | Tipo de Alteração |
|---------|-------------------|
| `index.html` | Adicionar overlay div + CTA + contato no `nav-menu` |
| `styles.css` | Estilos do overlay, stagger, hover states, CTA mobile |
| `script.js` | Overlay toggle, body scroll lock, fechar ao clicar overlay |

---

## Tarefas

### 1. Overlay Escuro com Clique para Fechar
**Arquivo:** `index.html` (linha ~134) + `styles.css` + `script.js`

- Adicionar `<div class="nav-overlay" id="nav-overlay"></div>` logo antes do `</header>` (dentro do `.container`)
- CSS: fundo `rgba(0, 0, 0, 0.5)`, position fixed, fullscreen, z-index 1099 (abaixo do menu 1100), opacity 0 → 1 com transição
- JS: toggle class `.show` no overlay junto com o `nav-menu`, fechar menu ao clicar no overlay

---

### 2. Botão CTA "Solicitar Cotação" no Menu
**Arquivo:** `index.html` (dentro de `#nav-menu`, após o `</ul>`)

- Adicionar link CTA com ícone WhatsApp após a `nav-list` e antes do `nav-close`
- Reutilizar a classe `.header-cta` com modificador `.nav-menu-cta` para espaçamento específico
- CSS: margin-top auto no `.nav-menu-cta` para empurrar para baixo, width 100%, text-align center

---

### 3. Informações de Contato no Rodapé do Drawer
**Arquivo:** `index.html` (dentro de `#nav-menu`, após o CTA)

- Adicionar `<div class="nav-contact">` com:
  - Telefone: `(21) 99737-6154` com link `tel:`
  - Texto: "Atendimento seg-sex, 9h às 18h"
- CSS: posicionar no final do drawer com font-size 0.85rem, cor gray-300, padding-top 24px, border-top sutil

---

### 4. Stagger Animation nos Links
**Arquivo:** `styles.css` (dentro do `@media (max-width: 1024px)`)

- Adicionar `opacity: 0; transform: translateX(20px)` nos `.nav-link` dentro do mobile
- Quando `.nav-menu.show`, cada `.nav-item:nth-child(n)` recebe um `transition-delay` incremental (0s, 0.05s, 0.1s, 0.15s, 0.2s)
- `opacity: 1; transform: translateX(0)` no estado `.show`

---

### 5. Hover/Tap States Aprimorados
**Arquivo:** `styles.css`

- Adicionar `border-left: 3px solid var(--blue-accent)` + `padding-left: 12px` no hover/focus dos `.nav-link` no mobile
- Transição suave para o efeito

---

### 6. Body Scroll Lock
**Arquivo:** `script.js`

- Quando o menu abre: `document.body.style.overflow = 'hidden'`
- Quando o menu fecha (por close, link click ou overlay): `document.body.style.overflow = ''`

---

## Ordem de Implementação

```
1. HTML: overlay div + CTA + contato (estrutura primeiro)
2. CSS: overlay, stagger, hover states, CTA mobile, contato
3. JS: overlay toggle, scroll lock, fechar ao clicar overlay
```

---

## Plano de Verificação

### Teste Visual no Navegador (Manual)
1. Abrir `http://127.0.0.1:5500` no navegador
2. Usar DevTools → Toggle Device (Ctrl+Shift+M) → selecionar **iPhone SE (375px)** e **Galaxy S8 (360px)**
3. Verificar cada item:

| # | Verificação | Como Testar |
|---|-------------|-------------|
| 1 | Overlay aparece ao abrir menu | Clicar no hambúrguer → overlay escuro deve aparecer atrás do drawer |
| 2 | Overlay fecha o menu | Clicar no overlay → menu e overlay devem sumir |
| 3 | CTA visível no menu | Abrir menu → botão "Solicitar Cotação" deve estar presente |
| 4 | CTA funcional | Clicar no CTA → deve abrir WhatsApp em nova aba |
| 5 | Contato visível | Abrir menu → telefone e horário visíveis no rodapé do drawer |
| 6 | Stagger animation | Abrir menu → links devem entrar um após o outro (sequencialmente) |
| 7 | Hover state | Tocar/hover em link → borda azul lateral deve aparecer |
| 8 | Scroll lock | Abrir menu → tentar rolar a página → NÃO deve rolar |
| 9 | Scroll restore | Fechar menu → página deve voltar a ser rolável |
| 10 | Desktop intacto | Redimensionar para 1200px+ → menu desktop não deve ser afetado |

### Checklist de Performance
- [ ] Nenhum layout shift ao abrir/fechar menu
- [ ] Transições suaves (sem jank)
- [ ] Sem backdrop-filter pesado (overlay usa apenas rgba, sem blur)

---

## Estimativa

| Item | Tempo |
|------|-------|
| HTML (overlay + CTA + contato) | ~15 min |
| CSS (overlay + stagger + hover + CTA) | ~30 min |
| JS (overlay toggle + scroll lock) | ~15 min |
| Testes visuais | ~15 min |
| **Total** | **~1h15** |
