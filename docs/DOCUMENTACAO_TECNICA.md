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
    *   **PNG (Seção Corretora)**: Utiliza-se `logo-gas-nova.png` nesta seção específica para garantir a fidelidade das cores originais (azul/verde) e evitar complexidade excessiva de manipulação de SVG/CSS em fundos claros.

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
