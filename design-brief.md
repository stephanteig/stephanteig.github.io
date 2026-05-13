# Design Brief — stephanteig.github.io

Detaljert brief for redesign-forslag og UI-forbedringer. Bruk denne filen som kontekst når du genererer nye designideer med Claude Design eller andre AI-designverktøy.

**Foretrukket komponentreferanse:**  
**[daisyui.com/components/](https://daisyui.com/components/)** — preferred component reference for UI work.

---

## 1. Prosjektoversikt

**Eier:** Stephan Teig  
**Formål:** Personlig CV- og portefølje-nettside  
**URL:** https://stephanteig.github.io  
**Stack:** Vanilla HTML + CSS + JavaScript, ingen rammeverk, ingen build-steg, single-file (`index.html`)

### Målgruppe
- Produksjonsselskaper og regissører (ser etter filmkamera-ferdigheter)
- Musikere og band (musikkvideo-produksjon)
- Tech-rekrutterere og startups (webutvikling, verktøybygging)
- Fotografer og kreative byråer
- Festivalorganisatorer (TEDx, events)

### Brukerens profil
- Alder: 17 år (født 09.06.2008), Fredrikstad/Sarpsborg, Norge
- Roller: Filmskaper, fargekorrigerer, webutvikler, Ju-Jitsu-instruktør
- Lærling hos Studio Wallin (foto, video, brand, podkast)
- Ønsker å fremstå: autentisk, kompetent, kreativ — ikke overdrevet eller selvhøytidelig

---

## 2. Design-tokens

### Fargepalett

| Variabel | Hex | Bruksområde |
|---|---|---|
| `--bg` | `#0b0b0f` | Sidebakgrunn |
| `--bg-r` | `#111118` | Sidebar-bakgrunn |
| `--bg-s` | `#16161f` | Kort, input-felter, kort-bakgrunn |
| `--bd` | `#1e1e2a` | Subtil border (separatorer) |
| `--bd-ui` | `#2a2a3a` | UI-element border (input, kort) |
| `--text` | `#f0f0f5` | Primærtekst |
| `--muted` | `#8888a8` | Sekundærtekst, labels, metadata |
| `--dim` | `#52526a` | Dempet tekst, placeholder |
| `--av` | `#7c5cfc` | Accent violet (primær) |
| `--ap` | `#d44fa8` | Accent pink |
| `--ac` | `#4ae3d1` | Accent cyan |
| `--ag` | `rgba(124,92,252,.14)` | Accent glow (bakgrunn på hover/active) |

**Regler:**
- Mørkt tema alltid — ingen light mode
- Gradient primæraksjoner: `linear-gradient(135deg, #7c5cfc, #d44fa8)`
- Cyan brukes sparsomt (tech-elementer, badges, kode-ikoner)
- Hvit brukes aldri som bakgrunn

### Typografi

| Font | Vekter | Bruksområde |
|---|---|---|
| **Inter** | 300, 400, 500, 600, 700 | UI-tekst, brødtekst, navigasjon |
| **Instrument Serif italic** | regular italic | Hero display (etternavn, kontakt-headline, dekorative headings) |
| **JetBrains Mono** | 400, 500 | Labels, kode-aktige UI-elementer, nav-tekst, badges |

**Typografisk hierarki (desktop):**
- Hero-navn: ~52px Instrument Serif italic
- Seksjonstitler: ~28–32px Inter 600
- Korttitler: ~17px Inter 600
- Brødtekst: 15px Inter 400
- Labels/meta: 12–13px JetBrains Mono 500
- Muted text: 13px Inter 400, `--muted`

**Typografisk hierarki (mobil):**
- Hero-navn: ~36px
- Seksjonstitler: ~22px
- Resten skalerer ned ca. 10–15%

---

## 3. Layout-system

### Desktop (> 900px)
```
┌─────────────────────────────────────────────────┐
│  SIDEBAR (280px fixed)  │  MAIN CONTENT          │
│  - Profilbilde          │  - Top nav             │
│  - Navn + tittel        │  - .page seksjoner     │
│  - Ferdighetsbar        │    home / resume /     │
│  - Språk-dots           │    works / contact     │
│  - Sosiale lenker       │                        │
└─────────────────────────────────────────────────┘
```

### Tablet (< 900px)
- Sidebar smalner til 240px
- Kortere nav-labels

### Mobil (< 680px)
- Sidebar skjult
- Top nav skjult
- Bunnav vises (home, resume, works, contact)
- Enkeltkolonne layout

### Mobil landscape
- Bunnav skjules
- Top nav vises igjen

### Fire sider (single-page, JS-navigert)
1. **home** — hero, bio, stats, typewriter
2. **resume** — erfaring, verv, utdanning (tidslinje)
3. **works** — prosjektkort med filter-chips
4. **contact** — kontaktskjema + info

---

## 4. Komponenter — nåværende tilstand

### Hero (home-side)
- **Typewriter-effekt** på tittelfraser (kamera, kode, historiefortelling)
- **Stats-bokser:** 3 bokser med stor tall + label (År i bransjen, Prosjekter, Jiu-Jitsu)
- **Bio:** 2–3 setninger, dynamisk alder via `beregnAlder()`
- **CTA-knapper:** "Se prosjekter" (primær, gradient) + "Last ned CV" (sekundær, outline)
- **DaisyUI-referanse:** `stat`, `hero`, `btn`

**Optimaliseringsmuligheter:**
- Stats-boksene kan visuelt styrkes (større tall, mer luft)
- CTA-knappene kan ha bedre hover-animasjon (f.eks. glow-pulse)
- Bio-teksten trenger mer whitespace under

---

### Sidebar
- **Profilbilde:** sirkulært, `border: 2px solid --av`, hover-glow
- **Navn:** Inter 600 + Instrument Serif italic for etternavn
- **Tittel:** JetBrains Mono, `--muted`
- **Ferdighetsbar:** label + prosentbar, animert ved første visning
- **Språk-dots:** 1–5 dots (fylt/tom) per språk
- **Sosiale lenker:** ikon + handle, `--muted` → `--text` på hover
- **DaisyUI-referanse:** `menu`, `avatar`, `progress`, `badge`

**Optimaliseringsmuligheter:**
- Ferdighetsbar-animasjon kan forbedres (easing, delay per bar)
- Sosiale lenker kan ha bedre hover-state (bakgrunn-flash)

---

### Tidslinje (resume-side)
- **Tre seksjoner:** Erfaring / Verv / Utdanning
- **Hvert element:** dato-range, tittel, organisasjon, beskrivelse
- **Visuell linje** ned midten med prikk per element
- **DaisyUI-referanse:** `timeline`

**Optimaliseringsmuligheter:**
- Dato-labelen kan bruke JetBrains Mono for å skille seg mer ut
- Hover-state på tidslinjeelementer mangler
- Liten gap mellom seksjonene

---

### Prosjektkort (works-side)
- **Filter-chips:** film / foto / tech (klikk filtrerer synlige kort)
- **Thumbnail-typer:**
  - YouTube: hentes fra `img.youtube.com/vi/{id}/mqdefault.jpg`
  - Drive: gradient-bakgrunn
  - Tech/ingen: kode-ikon (cyan/violet gradient)
- **Klikk-oppførsel:**
  - YouTube/Drive: åpner lightbox med embed
  - Lenke: åpner ekstern URL
  - Ingen: ikke klikkbart
- **Badge:** `// in development`-chip på prosjekter under utvikling
- **DaisyUI-referanse:** `card`, `badge`, `tabs` (for filter), `modal` (for lightbox)

**Optimaliseringsmuligheter:**
- Kortene trenger bedre visuell rytme (nå: alle like store)
- Featured-prosjekt kan ha større kort (full-bredde eller 2×høyde)
- Filter-chips kan ha bedre active-state animasjon
- Lightbox-overlay kan ha blur-bakgrunn
- Thumbnail-hover bør ha scale + overlay-tekst

---

### Kontaktskjema (contact-side)
- **Formspree** backend (ID: `mwvrraez`)
- **Felter:** Navn, e-post, melding
- **DaisyUI-referanse:** `form-control`, `input`, `textarea`, `btn`

**Optimaliseringsmuligheter:**
- Input-felter mangler focus-ring i accent-farge
- Success/error-state kan forbedres (toast-notifikasjon)

---

### Lightbox
- Overlay med blur/dim
- Embed (YouTube iframe / Google Drive preview)
- Lukk-knapp
- **DaisyUI-referanse:** `modal`

---

### Navigasjon
- **Desktop:** top-nav med fire lenker, JetBrains Mono
- **Mobil:** bunnav med ikon + label
- **Aktiv side:** underline / accent-farge indikator
- **DaisyUI-referanse:** `navbar`, `dock` (bunnav)

---

## 5. Visuelle effekter

| Effekt | Implementering | Intensitet |
|---|---|---|
| Grain overlay | `body::before`, SVG turbulence filter | `opacity: 0.035`, `mix-blend-mode: overlay` |
| Fade-up inngang | `IntersectionObserver`, klasse `.fade-up` → `.vis` | 0.5s ease |
| Glow på accent | `text-shadow` med rgba av `--av` | Subtil |
| Gradient tekst | `background-clip: text` på stats-tall og primærknapper | Violet → pink |
| Hover-glow på profilbilde | `box-shadow` med `--ag` | Lav |

**Retning for nye effekter:**
- Micro-interactions på knapper (ripple, scale 1.02 på hover)
- Kort-hover: `translateY(-4px)` + skarp `box-shadow`
- Typing-cursor-animasjon på typewriter kan forbedres
- Scroll-progress-indikator (violet linje øverst) er valgfritt men passende

---

## 6. Optimaliseringsmål — prioritert

### Høy prioritet
1. **Works-siden — kortvisualisering:** Bedre visuell rytme, featured-kort, hover-effekter
2. **Hero CTA-knapper:** Tydeligere kall-til-handling, bedre hover-state
3. **Mobil typografi:** Skalering og luft mellom elementer

### Middels prioritet
4. **Lightbox:** Bakgrunnsblur, glattere åpne/lukke-animasjon
5. **Kontaktskjema:** Focus-ringer, toast-notifikasjon ved innsending
6. **Filter-chips:** Bedre active-state, smooth filter-animasjon (fade/reflow)

### Lav prioritet / utforsk
7. **Scroll-progress-bar** (violet linje øverst i nettleser)
8. **Ferdighetsbar:** Stagger-animasjon (delayed per bar)
9. **Tidslinje:** Hover-states, bedre dato-typografi
10. **Cursor custom** (subtil, enkel) — bare hvis det ikke forstyrrer UX

---

## 7. Ting som IKKE skal endres

- Mørkt tema er eneste modus — ingen light-mode-toggle
- Single-file-arkitektur — ingen rammeverk, ingen build-steg
- Språkbytter NO/EN skal beholdes
- `beregnAlder()` må forbli definert før `CV`-objektet
- Render-logikken er deklarativ — data inn, DOM ut
- Google Fonts er eneste CDN-avhengighet

---

## 8. Inspirasjon og referanser

**Estetisk retning:**
- Mørk, granulær, editorial — ikke corporate eller "portfolio template"
- Nær: Vercel-dark-theme møter filmtidsskrift
- Typografisk blanding: tech (Mono) + humanistisk (Serif) er bevisst og skal beholdes

**Komponentbibliotek å referere:**
- **[daisyui.com/components/](https://daisyui.com/components/)** — preferred component reference for UI work
- Spesielt relevante komponenter:
  - `card`, `stat`, `badge`, `btn` — daglig bruk
  - `timeline` — resume-siden
  - `tabs` — filter på works
  - `modal` — lightbox
  - `dock` — mobil bunnav
  - `progress` — ferdighetsbar
  - `avatar` — profilbilde
  - `form-control`, `input`, `textarea` — kontaktskjema
  - `toast` — notifikasjoner

---

## 9. Eksempel på prompt til Claude Design

> "Redesign prosjektkortseksjonen på stephanteig.github.io. Bruk design-tokens fra design-brief.md. Mørkt tema, violet/pink/cyan aksentfarger. DaisyUI `card`-komponent som base. Det første kortet skal være featured (2× høyde eller full bredde). Alle kort skal ha smooth hover: `translateY(-4px)`, skarp `box-shadow` i `--av`. Filter-tabs øverst med DaisyUI `tabs`. Ingen rammeverk — ren HTML/CSS/JS."

---

*Sist oppdatert: 2026-05-13*
