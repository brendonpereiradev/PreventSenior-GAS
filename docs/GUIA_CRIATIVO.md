## 1. Identidade Visual

### 🎨 Paleta de Cores
A paleta prioriza tons de azul para transmitir confiança, serenidade e profissionalismo, com toques de dourado para denotar qualidade e exclusividade.

#### Cores Primárias (Azuis Institucionais)
Utilizadas em fundos, cabeçalhos e textos principais.
- **Blue Dark**: `#0a1628` (Fundo Hero, Rodapé)
- **Blue Deep**: `#0d2137` (Transições, Seções Escuras)
- **Blue Brand**: `#003399` (Cor Principal da Marca)

#### Cores de Ação e Destaque
Utilizadas em botões, links e elementos interativos.
- **Blue Mid**: `#0055cc` (Botões, Hover)
- **Blue Light**: `#3377dd` (Gradientes, Detalhes)
- **Blue Accent**: `#4d8fef` (Ícones, Sublinhados, Foco)
- **Blue Glow**: `#6aa3f5` (Efeitos de Brilho)

#### Cores Auxiliares
- **Gold**: `#f0b429` (Estrelas de Avaliação, Ícones Premium)
- **WhatsApp Green**: `#25D366` (CTA Principal)
- **WhatsApp Dark**: `#128C7E` (Hover WhatsApp)

#### Neutros e Superfícies
- **White**: `#ffffff` (Fundo de Cards, Texto em Fundo Escuro)
- **Gray 50**: `#f8fafc` (Fundo de Seções Claras)
- **Gray 100**: `#f1f5f9` (Bordas Sutis)
- **Gray 500**: `#475569` (Texto Secundário)
- **Gray 700**: `#334155` (Texto Principal)

### ✍️ Tipografia
A família tipográfica escolhida é a **Montserrat**. Ela é moderna, geométrica e altamente legível, funcionando bem tanto para títulos de impacto quanto para leitura em dispositivos móveis.

- **Fonte**: Montserrat (Google Fonts)
- **Pesos Utilizados**:
    - **Regular (400)**: Texto corrido, parágrafos.
    - **Medium (500)**: Menus, subtítulos menores.
    - **SemiBold (600)**: Links, botões, destaques.
    - **Bold (700)**: Títulos de seções, CTAs.
    - **ExtraBold (800+)**: Títulos principais (Hero), números de destaque.

## 2. Elementos de UI

### Botões e CTAs
Os botões são projetados para serem altamente clicáveis, com bordas arredondadas (`border-radius: 50px`) e efeitos de profundidade.

- **Botão Primário**: Gradiente linear (`--blue-brand` para `--blue-mid`), sombra suave (`box-shadow`), transform no hover.
- **Botão WhatsApp**: Ícone visível, cor verde característica, flutuante ou fixo em seções estratégicas.
- **Botão Secundário**: Fundo transparente, borda sutil, usado para ações menos urgentes (ex: "Conhecer Benefícios").

### Cards e Superfícies
- **Estilo**: Clean, fundo branco sobre fundo cinza claro (`Gray 50`).
- **Bordas**: Arredondadas (`8px`, `12px`, `20px` dependendo do tamanho).
- **Profundidade**: Sombras suaves (`--shadow-md`) que aumentam ao passar o mouse (`--shadow-lg`), criando uma sensação tátil.
- **Microinterações**: Sutil elevação (`translateY`) e realce de borda ou detalhe colorido no hover.

### Ícones
- **Estilo**: Minimalista, traços finos (`stroke-width: 2`), geralmente em SVG inline para performance e nitidez.
- **Cores**: Acompanham a paleta (Azul, Dourado ou Verde), muitas vezes com um fundo circular suave para criar contraste.

## 3. Tom de Voz e Mensagem

A comunicação deve ser:
1.  **Confiável e Segura**: Reforçar a solidez da Prevent Senior (+50 anos, Rede Própria).
2.  **Clara e Direta**: Evitar "medicês". Explicar carências, reajustes e coberturas de forma simples.
3.  **Acolhedora**: Focar no bem-estar e na tranquilidade do beneficiário e da família.
4.  **Persuasiva (sem ser agressiva)**: Destacar os diferencias únicos (sem reajuste, rede premium) para incentivar o contato.

### Palavras-Chave
*   **Segurança**, **Tranquilidade**, **Sem Reajuste**, **Rede Própria**, **Excelência**, **Cuidado**, **Família**.

## 4. Diretrizes de Imagens
- **Fotografia**: Imagens reais das unidades e hospitais sempre que possível, transmitindo modernidade e limpeza.
- **Logotipos**: Uso Híbrido e Estratégico:
    - **Header**: Versão SVG (`.svg`) com filtro CSS (`brightness(0) invert(1)`) para exibição totalmente branca sobre fundo escuro. A camada de fundo branco do SVG original foi removida para garantir transparência total.
    - **Seção Corretora**: Versão PNG (`.png`) para garantir a renderização fiel das cores originais (azul e verde) sobre o fundo claro, sem interferência de filtros.
- **Backgrounds**: Uso de gradientes sutis e formas orgânicas ("ondas") para suavizar a transição entre seções, evitando bloqueios visuais rígidos.


