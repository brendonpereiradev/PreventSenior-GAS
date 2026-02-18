# Contexto Completo do Projeto: Prevent Senior Landing Page (Vendas)

Este arquivo consolida toda a documentação, diretrizes criativas e detalhes técnicos do projeto para facilitar a análise.

---

## 1. Visão Geral (README)

# Landing Page (Vendas) - Prevent Senior

Landing page de vendas focada na captação de leads para planos de saúde da Prevent Senior, com ênfase no público do Rio de Janeiro. O projeto visa fornecer informações claras, tabela de preços e um canal direto de contato via WhatsApp.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

Não há pré-requisitos complexos. Você precisa apenas de um navegador moderno (Chrome, Firefox, Edge, Safari).

### Instalação e Execução

1.  Clone o repositório:
    ```bash
    git clone [URL_DO_REPOSITORIO]
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd "Landing Page (Vendas)"
    ```
3.  Abra o arquivo `index.html` diretamente no seu navegador ou use uma extensão como "Live Server" no VS Code.

## 🛠️ Tecnologias Utilizadas

*   **HTML5** - Estrutura semântica da página.
*   **CSS3** - Estilização e layout responsivo.
*   **JavaScript (Vanilla)** - Interatividade, como carrosséis e manipulação do DOM.
*   **Design System** - Tipografia fluida (`clamp()`) e paleta de cores consistente.
*   **Assets Otimizados** - Uso estratégico de SVG (vetor) e PNG para máxima nitidez e performance.

## ⚙️ Funcionalidades

*   **Apresentação do Plano:** Destaques dos benefícios da Prevent Senior.
*   **Tabela de Preços:** Valores atualizados por faixa etária e categoria.
*   **Rede Credenciada:** Carrossel interativo mostrando hospitais e unidades (separado por RJ e SP).
*   **Botão WhatsApp:** CTA (Chamada para Ação) flutuante e fixo para contato direto com o corretor.
*   **Responsividade:** Layout adaptável para Celulares, Tablets e Desktops.

## 📂 Estrutura de Arquivos

*   `index.html`: Arquivo principal com a estrutura da página.
*   `styles.css`: Folha de estilos contendo todo o design visual.
*   `script.js`: Lógica para o carrossel e comportamentos dinâmicos.
*   `assets/`: Diretório contendo imagens e ícones.

---

## 2. Guia Criativo e de Estilo

# Guia Criativo e de Estilo - Prevent Senior Landing Page

Este documento define as diretrizes visuais e criativas para a Landing Page de Vendas da Prevent Senior. O objetivo é garantir consistência, credibilidade e uma experiência de usuário premium e acessível.

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

---

## 3. Documentação Técnica

# Documentação Técnica - Prevent Senior Landing Page

Este documento detalha a arquitetura técnica, as decisões de implementação e a estrutura de código do projeto Landing Page de Vendas da Prevent Senior.

## 1. Estrutura do Projeto

O projeto segue uma estrutura de arquivos simples e plana, típica de landing pages de alta performance, para minimizar requisições e complexidade de build.

```
/
├── assets/                 # Imagens, ícones (SVG/WebP) e favicons
├── docs/                   # Documentação do projeto
│   ├── GUIA_CRIATIVO.md    # Diretrizes de design e marca
│   └── DOCUMENTACAO_TECNICA.md # Este arquivo
├── index.html              # Página principal (Single Page Application feel)
├── politica-de-privacidade.html # Página legal obrigatória
├── script.js               # Lógica de frontend (Vanilla JS)
├── styles.css              # Estilização global (Vanilla CSS)
└── README.md               # Visão geral do projeto
```

## 2. Arquitetura HTML (`index.html`)

O HTML foi estruturado com foco em **Semântica**, **Acessibilidade** e **SEO**.

### Destaques de Implementação:
*   **Meta Tags**: Configuração completa de Viewport, Description, Canonical URL e Open Graph para compartilhamento em redes sociais.
*   **Schema.org (JSON-LD)**: Implementação de dados estruturados para `MedicalBusiness`, `FAQPage` e `InsuranceAgency` para melhorar a indexação em rich snippets do Google.
*   **Security Headers**: `Meta tag` simulando Content-Security-Policy (CSP) para mitigar XSS, permitindo apenas scripts e estilos de origens confiáveis (self, Google Fonts, Vercel).
*   **Preconnect**: Otimização de conexão para Google Fonts.
*   **Gestão de Assets (SVG vs PNG)**:
    *   **SVG (Header/Apps)**: O arquivo `logo-gas-nova.svg` foi limpo programaticamente para remover camadas de fundo branco (`fill="#FDFDFD"` etc.), permitindo que filtros CSS (`brightness(0) invert(1)`) funcionem corretamente para criar uma versão "branca" sem artefatos.
    *   **PNG (Seção Corretora)**: Utiliza-se `logo-gas-nova.png` nesta seção específica para garantir a fidelidade das cores originais (azul e verde) e evitar complexidade excessiva de manipulação de SVG/CSS em fundos claros.

## 3. Arquitetura CSS (`styles.css`)

O CSS utiliza **Vanilla CSS Moderno**, sem dependência de pré-processadores ou frameworks pesados, garantindo carregamento instantâneo.

### Design System via Variáveis CSS (`:root`)
Todas as cores, sombras, espaçamentos e transições são definidos em variáveis globais para facilitar a manutenção e garantir consistência (Ver `docs/GUIA_CRIATIVO.md`).

```css
:root {
  --blue-brand: #003399; /* Cor primária */
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16); /* Profundidade */
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Animação fluida */
}
```

### Estratégias de Layout
*   **Flexbox & Grid**: Utilizados extensivamente para layouts responsivos (ex: `benefits-grid`, `pricing-grid`).
*   **Clamp()**: Função utilizada para tipografia fluida (`font-size: clamp(...)`), dispensando múltiplos breakpoints de mídia para ajustes de fonte.
*   **Mobile-First**: Estilos base focados em mobile, com `@media (min-width: ...)` para adaptações desktop.
*   **Consistência Tipográfica (.broker-info)**: A seção da corretora foi ajustada para seguir os padrões globais do site:
    *   Título: Utiliza a mesma função `clamp()` das demais seções.
    *   Descrição: Tamanho de fonte padronizado para `1.05rem`.
    *   Logo: Tamanho aumentado (90px) para melhor legibilidade.

## 4. Lógica JavaScript (`script.js`)

O JavaScript é modular (dentro de um único arquivo para performance) e não possui dependências externas (como jQuery).

### Módulos Principais:

#### 1. Carrossel Infinito (`initCarousel`)
Uma implementação customizada de carrossel que suporta:
*   **Loop Infinito**: Clona os primeiros cards e os adiciona ao final para criar uma ilusão de continuidade ao navegar "para a direita".
*   **Touch Events**: Suporte nativo a gestos de "swipe" em dispositivos móveis.
*   **Responsividade**: Ajusta o número de itens visíveis (1 no mobile, 3 no desktop) dinamicamente no `resize`.
*   **Auto-play**: Pausa ao passar o mouse (hover) para melhor experiência do usuário.

#### 2. Geolocalização Inteligente (`localizeContent`)
Personaliza a experiência do usuário baseada na localização IP (via API `ipapi.co`).
*   **Lógica**: Se o usuário estiver em "São Paulo" (SP Region), a ordem dos carrosséis é invertida (SP aparece antes do RJ) e o título da Hero é ajustado.
*   **Cache**: Utiliza `sessionStorage` para armazenar a região e evitar requisições repetidas à API na mesma sessão.
*   **Fallback**: Se a API falhar ou demorar (>2s), o site carrega o padrão (RJ primeiro).

#### 3. Widget de Acessibilidade
Ferramenta flutuante que permite ao usuário ajustar o tamanho da fonte.
*   **Persistência**: Salva a preferência do usuário em `localStorage` para manter o ajuste em futuras visitas.

#### 4. Formulário de Cotação (WhatsApp API)
*   **Interceptação**: Previne o envio padrão do formulário.
*   **Formatação**: Captura os dados (Nome, Telefone, Idade), formata uma mensagem amigável com quebras de linha e abre diretamente a API do WhatsApp (`wa.me`) em nova aba.

#### 5. Performance (Intersection Observer)
*   Utiliza a API `IntersectionObserver` para disparar animações de entrada (`fade-in`) apenas quando o elemento entra na viewport, economizando recursos de processamento.

## 5. Integrações Externas

*   **Google Fonts**: Fontes carregadas via CDN otimizada.
*   **IPAPI**: API gratuita para geolocalização simples baseada em IP.
*   **WhatsApp API**: Integração via URL Scheme para comunicação direta.

## 6. Performance e Otimização

*   **Lazy Loading**: Atributo `loading="lazy"` em todas as imagens abaixo da dobra.
*   **Formatos Modernos**: Uso de WebP para imagens pesadas (logos, fotos de unidades).
*   **Minificação**: O código foi escrito de forma concisa, pronto para minificação em processos de deploy (ex: Vercel).
