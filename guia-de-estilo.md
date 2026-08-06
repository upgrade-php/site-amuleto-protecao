# Guia de Estilo — Amuleto de Proteção

Paleta de cores e tipografia usadas em `index.html`. Cores em **hexadecimal** (conversão a partir dos valores `oklch` do site).

---

## Tipografia

Duas famílias serif, hospedadas localmente em `assets/fonts/`. Fallback: `serif`.

### Cormorant Garamond — títulos

Uso: headlines, títulos de seção, FAQ summary, destaques tipográficos.

| Peso | Estilo | Arquivo |
| --- | --- | --- |
| 400 | normal | `cormorant-garamond-400.woff2` |
| 400 | italic | `cormorant-garamond-400-italic.woff2` |
| 500 | normal | `cormorant-garamond-500.woff2` |
| 600 | normal | `cormorant-garamond-600.woff2` |

```css
font-family: "Cormorant Garamond", serif;
```

### EB Garamond — corpo e UI

Uso: parágrafos, listas, CTAs, kickers, taglines, textos de apoio.

| Peso | Estilo | Arquivo |
| --- | --- | --- |
| 400 | normal | `eb-garamond-400.woff2` |
| 400 | italic | `eb-garamond-400-italic.woff2` |
| 500 | normal | `eb-garamond-500.woff2` |
| 600 | normal | `eb-garamond-600.woff2` |

```css
font-family: "EB Garamond", serif;
```

### Hierarquia tipográfica (referência)

| Papel | Fonte | Tamanho / peso típico |
| --- | --- | --- |
| Título principal (hero) | Cormorant Garamond | grande, 500–600 |
| Título de seção | Cormorant Garamond | `clamp(20px, 3.8vw, 24px+)` · 500 |
| Kicker / eyebrow | EB Garamond | ~13px · uppercase · `letter-spacing: 0.25em` |
| Corpo | EB Garamond | ~18px · line-height 1.6 |
| CTA | EB Garamond | 17px · 600 · uppercase · `letter-spacing: 0.06em` |
| Tagline sob CTA | EB Garamond | 16px · italic |

---

## Paleta de cores

### Famílias

| Família | Hex de referência | Papel |
| --- | --- | --- |
| Ouro / âmbar | `#724000` | Accent principal, links, CTA gold, highlights |
| Vinho / terracotta | `#90101a` / `#7a1f1f` | Hero banner, seções wine, theme-color |
| Neutro quente | `#2e2722` | Textos e fundos |
| Verde | `#286f2f` | CTA green |

### Neutros e texto

| Papel | Hex |
| --- | --- |
| Fundo página | `#ffffff` |
| Texto escuro / títulos | `#0e0a07` |
| Texto corpo | `#2e2722` |
| Texto secundário | `#534b46` |
| Texto em fundo escuro | `#f9f4f0` |
| Texto em fundo escuro (alt.) | `#fcf8f4` |

### Accent — ouro

| Papel | Hex |
| --- | --- |
| Link / accent | `#724000` |
| Link hover | `#602f00` |
| Highlight `.hl` (fundo claro) | `#7b3900` |
| Highlight `.hl` (fundo escuro) | `#eeb154` |
| Kicker em dark | `#ddae6c` |
| Ouro UI (bordas / ícones) | `#c5a059` |
| Mark | `rgba(236, 201, 128, 0.45)` · `#ecc98073` |
| Seleção | `rgba(138, 87, 0, 0.3)` · `#8a57004d` |

### Accent — vinho

| Papel | Hex |
| --- | --- |
| Theme color (meta) | `#7a1f1f` |
| Barra superior / banner | `#90101a` |
| Overlay hero | `rgba(5, 3, 2, 0.72)` → `rgba(5, 3, 2, 0.8)` |

### CTAs

**Gold** (`.cta-btn-gold`)

| Estado | Texto | Fundo |
| --- | --- | --- |
| Default | `#fdf8f1` | `linear-gradient(135deg, #905d00, #663e00)` |
| Hover | `#ffffff` (aprox. `#fdf8f1`+) | `linear-gradient(135deg, #a06700, #754700)` |
| Sombra | — | `rgba(102, 62, 0, 0.35)` |

**Green** (`.cta-btn-green`)

| Estado | Texto | Fundo |
| --- | --- | --- |
| Default | `#f4faf4` | `linear-gradient(135deg, #286f2f, #104a17)` |
| Hover | `#f4faf4`+ | `linear-gradient(135deg, #2e7c35, #15561d)` |
| Sombra | — | `rgba(12, 71, 20, 0.35)` |

### Fundos de seção (zebra)

| Classe | Tipo | Gradiente principal |
| --- | --- | --- |
| `.zebra-warm` | Creme | `#faf0e5` → `#f4e7db` (+ radial `rgba(253, 244, 231, 0.9)`) |
| `.zebra-wine` | Rosa-pálido | `#ffe8e4` → `#fbdfdc` (+ radial `rgba(254, 219, 215, 0.55)`) |
| `.zebra-dark` | Escuro quente | `#140b07` → `#080302` → `#100605` |

---

## Tokens resumidos (cópia rápida)

```css
/* Tipografia */
--font-display: "Cormorant Garamond", serif;
--font-body: "EB Garamond", serif;

/* Neutros */
--bg: #ffffff;
--text-strong: #0e0a07;
--text-body: #2e2722;
--text-muted: #534b46;
--text-on-dark: #f9f4f0;

/* Ouro */
--gold: #724000;
--gold-hover: #602f00;
--gold-hl: #7b3900;
--gold-hl-dark: #eeb154;
--gold-hex: #c5a059;

/* Vinho */
--wine: #90101a;
--wine-theme: #7a1f1f;

/* CTA */
--cta-gold-from: #905d00;
--cta-gold-to: #663e00;
--cta-green-from: #286f2f;
--cta-green-to: #104a17;

/* Zebra */
--zebra-warm-from: #faf0e5;
--zebra-warm-to: #f4e7db;
--zebra-wine-from: #ffe8e4;
--zebra-wine-to: #fbdfdc;
--zebra-dark-from: #140b07;
--zebra-dark-mid: #080302;
--zebra-dark-to: #100605;
```

> Nota: as variáveis CSS acima são documentação — o site hoje aplica os valores em `oklch` inline / em regras CSS, sem custom properties centralizadas. Os hex aqui são equivalentes convertidos.
