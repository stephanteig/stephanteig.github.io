# stephanteig.github.io

Personlig CV- og portfolio-nettside for **Stephan Teig** — film, medieproduksjon og webutvikling fra Fredrikstad.

### 🌐 Live: **[stephanteig.github.io](https://stephanteig.github.io)**

---

## Om prosjektet

En enkeltsides (single-page) CV-/portfolio-nettside som viser erfaring, verv, utdanning,
ferdigheter og prosjekter. Hele siden er bygget i **én fil** (`index.html`) med vanilla
HTML, CSS og JavaScript — ingen rammeverk og ingen byggesteg.

- **Eier:** Stephan Teig
- **Kontakt:** teig.stephan@gmail.com
- **Hosting:** GitHub Pages (`main`-branch, root)

## Funksjoner

- 🇳🇴🇬🇧 **Tospråklig** — bytt sømløst mellom norsk og engelsk (NO/EN-toggle).
- ⌨️ **Typewriter-effekt** i hero-seksjonen.
- 🎬 **Prosjektgalleri** med filterkategorier (`film`, `foto`, `tech`, `esport`) og
  lightbox for YouTube-/Google Drive-videoer.
- 🧱 **Tidslinjer** for erfaring, verv og utdanning.
- 📊 **Hero-statistikk** der prosjektantallet beregnes automatisk.
- 📨 **Kontaktskjema** via [Formspree](https://formspree.io/).
- 📱 **Responsivt design** — sidebar på desktop, bunnav på mobil.
- ✨ Grain-texture, fade-up-animasjoner og glow-effekter.
- 🎂 **Auto-beregnet alder** fra fødselsdato.

## Teknologi

| | |
|---|---|
| Markup/logikk | Vanilla HTML, CSS, JavaScript (ingen build) |
| Fonter | Google Fonts — Inter, Instrument Serif, JetBrains Mono |
| Kontaktskjema | Formspree |
| Hosting | GitHub Pages |
| Avhengigheter | Ingen npm / node_modules / package.json |

## Arkitektur

Alt ligger i `index.html`, delt i tre:

1. **`<head>`** — fonter, `CV`-objektet (all innholdsdata) og inline CSS.
2. **`<body>`** — HTML-skjelett: sidebar, top-nav, fire sider (home, resume, works, contact),
   lightbox og mobilnav.
3. **`<script>` (bunn)** — deklarativ render-logikk som bygger DOM fra `CV`-objektet.

> **All innholdsredigering skjer i `CV`-objektet.** Render-laget skal normalt ikke røres.

### Seksjoner i `CV`-objektet

| Nøkkel | Innhold |
|---|---|
| `navn`, `tittel`, `sted`, `epost`, `telefon`, `nettside` | Personlig info |
| `bio`, `fraser`, `stats` | Hero-tekst, typewriter-fraser og statistikk |
| `nav` | Navigasjon |
| `ferdigheter`, `sprak`, `sosiale` | Sidebar-innhold |
| `erfaring`, `verv`, `utdanning` | Tidslinjer |
| `prosjekter` | Prosjektkort med filter, type og thumbnail |
| `ui` | Alle UI-tekster (no/en) |
| `aksent` | Accentfarge |

## Rediger innhold

Åpne `index.html` og rediger feltene i `CV`-objektet (øverst i `<head>`, ca. linje 39–360).
99 % av endringer er rene datafelt.

- Tekstfelter er tospråklige: `{ no: "...", en: "..." }`.
- Bio bruker template literal med `${beregnAlder()}` — må stå i backticks.
- Nytt prosjekt legges til i `prosjekter`-arrayet (se prosjektskjema i `CLAUDE.md`).

## Kjør lokalt

```bash
# Alternativ 1: åpne filen direkte
start index.html        # Windows

# Alternativ 2: enkel lokal server
python3 -m http.server 8080
# → åpne http://localhost:8080
```

Sjekk at nettleserkonsollen er feilfri, test NO/EN-bytte og responsiv layout.

## Media

Ligger i `Media/`:

- `IMG_3340.JPG` — portrettbilde
- `StephanTeigCV.pdf` — nedlastbar CV
- `StephanteigCVLogo/` — offisielle logo-varianter (favicon + sidebar-logo)
- `respawn-ostfold-banner.svg` — thumbnail for Respawn Østfold-prosjektet

## Deploy

GitHub Pages publiserer automatisk fra `main`:

> Settings → Pages → Source: **main / root** → Save

Endringer er live ca. 60 sekunder etter merge til `main`.

## Bidra / arbeidsflyt

- **Alltid PR** for kodeendringer — ingen direkte push til `main`.
- Beskrivende branch-navn i kebab-case.
- Test lokalt før PR (feilfri konsoll + begge språk + mobil).
- Se **[`CLAUDE.md`](CLAUDE.md)** for fullstendige konvensjoner, design-tokens,
  datamodeller og innholds-snapshot — det er prosjektets single source of truth.

---

*Laget av Stephan Teig · [stephanteig.github.io](https://stephanteig.github.io)*
