# TEAMPARO — Site institucional

Site institucional da **TEAMPARO**, ONG de apoio a pessoas autistas e com outras
neurodivergências e suas famílias (Guaranésia-MG). Construído em **Angular 17 (standalone)**
com um **design system próprio**, acessibilidade como prioridade e SEO estruturado.

## Como rodar

```bash
npm install
npm start        # http://localhost:4200
npm run build    # build de produção em dist/teamparo
```

## Estrutura

```
src/
  styles/                 # Design system (tokens, base, mixins)
    _tokens.scss          # cores, tipografia, espaçamento, raio, sombras, movimento
    _base.scss            # reset + primitivas (.tp-btn, .tp-card, .tp-grid, tabelas admin)
    _mixins.scss
  app/
    core/
      models/             # interfaces de conteúdo e admin
      services/           # SeoService, AccessibilityService, ContentService, AdminDataService
    shared/
      ui/                 # ButtonComponent, SectionHeadingComponent
      components/         # SiteHeader, SiteFooter, A11yBar
    features/
      site/               # layout público + página Home (todas as seções)
      admin/              # esqueleto da área administrativa (/admin)
```

## Design system

- **Tipografia:** Atkinson Hyperlegible (corpo — alta legibilidade, Braille Institute) + Baloo 2 (display acolhedor).
- **Paleta:** teal (confiança/calma), damasco (acolhimento), verde e violeta compondo o espectro da neurodiversidade. Tons de baixo brilho para conforto sensorial.
- **Tokens** expostos como CSS custom properties — permitem alto contraste e escala de fonte em runtime.

## Acessibilidade

- Barra com **alto contraste** e **aumentar texto** (persistem via `localStorage`).
- **VLibras** integrado (`index.html`).
- Link "pular para o conteúdo", foco de teclado visível, marcos semânticos, `prefers-reduced-motion` respeitado.
- Símbolo do **infinito da neurodiversidade** como marca (em vez da peça de quebra-cabeça).

## SEO

- JSON-LD `schema.org/NGO` em `index.html`.
- `SeoService` atualiza title e meta tags (description / Open Graph) por rota.

## Área administrativa (`/admin`)

Esqueleto com Painel, Eventos, Doações e Voluntários usando `AdminDataService` (dados mockados).
Cada método já devolve `Observable`, então a migração para o back-end **Spring Boot** é só trocar
o `of(...)` por `HttpClient` (ex.: `this.http.get<Evento[]>('/api/eventos')`).

## Pontos a preencher antes de publicar

- [ ] Confirmar a **chave Pix / CNPJ** em `core/services/content.service.ts`.
- [ ] Inserir os **textos oficiais** de missão, visão e valores.
- [ ] Telefone, e-mail, endereço e patrocinadores reais.
- [ ] Trocar os números de impacto e os documentos de transparência pelos verdadeiros.
- [ ] Adicionar autenticação/guard nas rotas `/admin`.
