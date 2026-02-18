# Social Proof Top Bar

Barra fixa acima do header que exibe um número fictício de pessoas visualizando a página em tempo real, criando prova social e senso de urgência.

## Resultado Visual

```
┌──────────────────────────────────────────────────┐
│  👁 9 pessoas estão visualizando agora           │  ← Top Bar (32px, always visible)
├──────────────────────────────────────────────────┤
│  [Logo]    Benefícios  Preços  ...  [CTA]        │  ← Header (pushed down by top bar)
└──────────────────────────────────────────────────┘
```

## Especificações

| Item | Detalhe |
|------|---------|
| **Texto** | `"X pessoas estão visualizando agora"` |
| **Range** | 7 a 11 (aleatório ao carregar) |
| **Atualização** | A cada 15-30s, o número varia ±1 (dentro do range 7-11) |
| **Visibilidade** | Sempre visível (fixo no topo) |
| **Ícone** | Olho (👁) ou pulsing dot verde |
| **Altura** | ~32px |

## Proposta de Implementação

### Arquivos Afetados

| Arquivo | Alteração |
|---------|-----------|
| `index.html` | Novo `<div class="topbar-social">` antes do `<header>` |
| `styles.css` | Estilos da top bar + `header { top: 32px }` |
| `script.js` | Lógica de geração aleatória + atualização periódica |

---

### 1. HTML (`index.html`)

Inserir **antes** do `<header>`:

```html
<div class="topbar-social" id="topbar-social">
  <span class="topbar-pulse"></span>
  <span><strong id="viewer-count">9</strong> pessoas estão visualizando agora</span>
</div>
```

### 2. CSS (`styles.css`)

- `.topbar-social`: `position: fixed`, `top: 0`, `z-index: 1001`, `height: 32px`, background escuro semi-transparente
- `.topbar-pulse`: Bolinha verde com animação `pulse` (keyframe)
- `.header`: Alterar `top: 0` → `top: 32px` para empurrar o header abaixo da top bar
- `.hero`: Ajustar padding-top se necessário para compensar a altura extra

### 3. JavaScript (`script.js`)

```
1. No DOMContentLoaded: gerar número aleatório entre 7-11
2. Inserir no #viewer-count
3. setInterval (15-30s aleatório): variar ±1, clamped entre 7-11
4. Animação sutil de fade no número ao atualizar
```

## Verificação

- [ ] Top bar aparece acima do header em desktop e mobile
- [ ] Número muda sutilmente a cada ~20s
- [ ] Header e hero section não ficam desalinhados
- [ ] Top bar visível após scroll
- [ ] Mobile: texto não quebra linha
