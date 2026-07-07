# CLAUDE.md

> **Til Claude (og alle fremtidige Claude-instanser):**
> Denne filen og GitHub-repoet er den **eneste** konteksten du har. Hver ny chat starter blank — du har ingen hukommelse fra forrige økt. Les denne filen først, hver gang.
>
> **Du må selv vedlikeholde denne filen.** Når du gjør endringer i kodebasen som påvirker arkitektur, innhold, regler, design-tokens, prosjektlister, ferdigheter, eller arbeidsflyt — **oppdater CLAUDE.md i samme PR**. Hvis du legger til et nytt prosjekt i `index.html`, legg det til i prosjekt-tabellen her. Hvis du endrer en design-token, oppdater token-listen her. Hvis en oppgave fra `cv-oppdateringer.md` er fullført, fjern den derfra og reflekter status her.
>
> Behandle dette som **single source of truth**. Hvis det er konflikt mellom denne filen og hukommelse/antakelser — denne filen vinner. Hvis det er konflikt mellom denne filen og faktisk kode i repoet — koden vinner, og du oppdaterer denne filen til å matche.

---

## 1. Prosjektoversikt

CV-/portfolio-nettside for **Stephan Teig**, hostet på GitHub Pages.

- **Live:** https://stephanteig.github.io
- **Repo:** https://github.com/stephanteig/stephanteig.github.io
- **Branch:** `main` (produksjon)
- **Eier:** Stephan Teig — film, medieproduksjon, webutvikling
- **Kontakt:** teig.stephan@gmail.com
- **Født:** 09. juni 2008 (Fredrikstad/Sarpsborg, Norge)

---

## 2. Regler — følg alltid

1. **Alltid PR for kodeendringer.** Ingen direkte push til `main`, uansett størrelse. Eneste unntak: opprettelse av et helt nytt repo fra scratch.
2. **Branch-navn:** beskrivende, kebab-case (f.eks. `oppdater-prosjekter`, `fix-alder-funksjon`).
3. **Commit-meldinger:** kort imperativ på norsk eller engelsk, én logisk enhet per commit.
4. **Språk:**
   - Norsk i UI-tekster, kommentarer i CV-objektet, og brukervendte strenger.
   - Engelsk i variabelnavn, funksjonsnavn, og teknisk dokumentasjon i kode.
5. **Oppdater CLAUDE.md** i samme PR som kodeendringen når endringen påvirker noe som er beskrevet her.
6. **Test lokalt** før PR: åpne `index.html` i nettleser, sjekk at konsollen er feilfri, verifiser at endringen rendrer korrekt på både desktop og mobilbredde.
7. **Ikke rør render-logikken** (`render()`-funksjonen og JS under `<script>`-blokken etter `CV`-objektet) med mindre oppgaven eksplisitt krever det. Alle innholdsendringer skjer i `CV`-objektet.

---

## 3. Tech stack

- **Vanilla HTML/CSS/JavaScript.** Ingen rammeverk, ingen build-steg, ingen package.json.
- **Single-file:** all kode og innhold er i `index.html`.
- **Eksterne avhengigheter:** kun Google Fonts (Inter, Instrument Serif, JetBrains Mono).
- **Hosting:** GitHub Pages (Settings → Pages → Source: `main` / root).
- **Kontaktskjema:** Formspree, ID `mwvrraez`.

---

## 4. Arkitektur

`index.html` består av tre deler:

1. **`<head>`** — fonter, `CV`-objekt (linje ~15–200), inline CSS. Favicon: SVG-emblem primær (`Media/StephanteigCVLogo/v5-farger-mørk-emblem.svg`), PNG-fallback (`Media/favicon.png`).
2. **`<body>`** — HTML-skjelett: sidebar (inkl. `.sb-logo` øverst), top-nav, fire `.page`-seksjoner (home, resume, works, contact), lightbox, mobile nav.
3. **`<script>` (bunn)** — render-logikk som tar `CV`-objektet og bygger DOM. Inneholder typewriter, språkbytter, prosjektfilter, kontaktskjema-handler, lightbox.

**All innholdsredigering skjer i `CV`-objektet.** Render-laget er deklarativt: gi det data, så bygger det UI.

Rett etter `CV`-objektets avsluttende `};` kjøres:
```js
CV.stats[1].tall = String(CV.prosjekter.length);
```
Dette holder prosjektantallet i hero-stats automatisk synkronisert med `CV.prosjekter`-arrayet.

### Seksjoner i `CV`-objektet

| Nøkkel | Innhold |
|---|---|
| `navn`, `tittel`, `sted`, `epost`, `telefon`, `nettside` | Personlig info |
| `bilde`, `cvPdf` | Media-stier (`Media/IMG_3340.JPG`, `Media/StephanTeigCV.pdf`) |
| `formspreeId` | `mwvrraez` |
| `bio` | Hero-biografi (no/en). Bruker template literal med `${beregnAlder()}` for dynamisk alder |
| `fraser` | Typewriter-fraser (no/en) |
| `stats` | 3 statistikk-bokser på hero |
| `nav` | Navigasjonspunkter (home, resume, works, contact) |
| `ferdigheter` | Skills med prosentbar (sidebar) |
| `sprak` | Språk med 1–5 dot-indikator (sidebar) |
| `sosiale` | Sosiale medier-lenker (sidebar) |
| `erfaring` | Tidslinje — jobber |
| `verv` | Tidslinje — verv/roller |
| `utdanning` | Tidslinje — utdanning |
| `prosjekter` | Prosjektkort med filter (works-side) |
| `ui` | Alle UI-tekster (no/en) — knapper, headers, placeholders |
| `aksent` | Accentfarge hex (`#7c5cfc`), propageres til CSS-variabelen `--av` |

### Toppnivå-funksjoner utenfor `CV`

- **`beregnAlder()`** — defineres **før** `const CV = {`. Returnerer alder basert på fødselsdato 09.06.2008. Må være definert før `CV` siden template literals i objektet evalueres ved parse-tid.

### Logo-assets

Mappen `Media/StephanteigCVLogo/` inneholder offisielle logo-varianter:

| Fil | Bakgrunn | Bruk |
|---|---|---|
| `v5-farger-mørk-emblem.svg/.png` | Hvit | Favicon (SVG er primær) |
| `v5-farger-mørk.svg/.png/.jpg` | Mørk | Sidebar-logo (`.sb-logo`) |
| `v5-farger-lys-emblem.svg/.png` | Transparent/lys | Lys bakgrunn |
| `v5-farger-lys.svg/.png/.jpg` | Lys | Lys bakgrunn |

Sidebar bruker `v5-farger-mørk.svg` via `.sb-logo`-klassen (CSS: `width: 75%; max-width: 160px; border-radius: 10px`).

---

## 5. Design-tokens

```css
--bg:    #0b0b0f   /* Sidebakgrunn */
--bg-r:  #111118   /* Sidebar */
--bg-s:  #16161f   /* Kort/input */
--bd:    #1e1e2a   /* Border subtil */
--bd-ui: #2a2a3a   /* Border UI-elementer */
--text:  #f0f0f5   /* Primærtekst */
--muted: #8888a8   /* Sekundærtekst */
--dim:   #52526a   /* Dempet tekst */
--av:    #7c5cfc   /* Accent violet (primær) */
--ap:    #d44fa8   /* Accent pink */
--ac:    #4ae3d1   /* Accent cyan */
--ag:    rgba(124,92,252,.14)  /* Accent glow */
```

### Fonter

- **Inter** (300–700) — UI/brødtekst.
- **Instrument Serif italic** — hero display (etternavn, kontakt-headline).
- **JetBrains Mono** (400, 500) — labels, kode-aktige UI-elementer, nav.

### Visuelle effekter

- Grain texture overlay (SVG turbulence) på `body::before`, `opacity: 0.035`, `mix-blend-mode: overlay`.
- Fade-up animasjoner via `IntersectionObserver` (klasse `.fade-up` → `.vis`).
- Glow-effekter på accent-elementer (text-shadow med rgba av accent-fargene).
- Lineær gradient violet → pink på primær-knapper og statistikk-tall.

### Responsivt

- Desktop: sidebar (280px) + main.
- Tablet (`<900px`): sidebar smalere (240px).
- Mobil (`<680px`): sidebar skjult, top-nav skjult, mobil-bunnav vises.
- Mobil landscape: bunnav skjules, top-nav vises igjen.

---

## 6. Prosjektkort — datamodell

```js
{
  tittel: "string",                          // Vises alltid (ikke oversatt)
  rolle:  { no: "string", en: "string" },    // eller bare "string"
  tekst:  { no: "string", en: "string" },    // valgfri beskrivelse under tittel
  type:   "youtube" | "drive" | "ingen",     // bestemmer thumbnail og klikk-oppførsel
  embed:  "youtube-id | drive-fil-id",       // påkrevd hvis type !== "ingen"
  filter: "film" | "foto" | "tech" | "esport", // bestemmer hvilken filter-chip kortet vises under
  badge:  true,                              // valgfri — viser "// in development"-chip
  lenke:  "https://...",                     // ekstern lenke (gjør hele kortet klikkbart hvis ikke type=youtube/drive)
  github: "https://github.com/...",          // valgfri GitHub-lenke-knapp under tekst
  thumbnail: "Media/...jpg",                 // valgfri custom thumbnail (overstyrer auto-thumbnail)
}
```

**Type-oppførsel:**
- `youtube`: thumbnail hentes fra `img.youtube.com/vi/{embed}/mqdefault.jpg`, klikk åpner lightbox med embed.
- `drive`: gradient thumbnail, klikk åpner lightbox med Google Drive preview.
- `ingen`: kode-ikon thumbnail (cyan/violet gradient). Klikk åpner `lenke` hvis satt; ellers ingen klikk-oppførsel.

---

## 7. Innhold — sist kjente snapshot

> Oppdater disse listene når innhold endres i `index.html`.

### Prosjekter

| Tittel | Type | Filter | Notater |
|---|---|---|---|
| Respawn Østfold | ingen | esport | Lenke til turneringsside, custom thumbnail `Media/respawn-ostfold-banner.svg` |
| Et ekko av henne | drive | film | — |
| Reshoot | youtube | film | — |
| Reshoot Del 2 — Valg 1 | youtube | film | — |
| Reshoot Del 2 — Valg 2 | youtube | film | — |
| TEDx Fredrikstad | youtube | foto | — |
| MÆD Musikkvideo | youtube | film | — |
| Red Bull Reklame | drive | film | — |
| Like Him — Kolberg Volleyball | drive | film | — |
| Hvordan er det å gå på CIS Sarpsborg | drive | film | — |
| Trace | ingen | tech | Har lenke + github |
| Shotlist Planner | ingen | tech | badge: true, har github-lenke |
| Color Preview | ingen | tech | Obsidian-plugin, PR #12013 |

### Ferdigheter (sidebar)

| Ferdighet | Prosent |
|---|---|
| Kamera & filming | 90 |
| Videoredigering | 88 |
| DaVinci Resolve | 90 |
| Fargegradering | 85 |
| Lyddesign | 75 |
| Innholdsproduksjon | 85 |
| Fotografi | 70 |
| OBS Studio | 85 |
| Live produksjon | 80 |

*(Premiere Pro er fjernet fra denne listen.)*

### Sosiale medier

- YouTube: `@StephanTeig` — https://www.youtube.com/@StephanTeig
- Instagram: `@stephanteig` — https://www.instagram.com/stephanteig
- TikTok: `@stephan.teig` — https://www.tiktok.com/@stephan.teig
- LinkedIn: `stephan-teig-727a8428b` — https://www.linkedin.com/in/stephan-teig-727a8428b/

### Stats (hero)

- "7+" — År i bransjen *(siden 2019, produksjonsassistent på TV)*
- Auto-beregnet — Prosjekter *(`CV.stats[1].tall = String(CV.prosjekter.length)` kjøres etter CV-objektet — oppdateres automatisk)*
- "1.dan" — Jiu-Jitsu

---

## 8. Gjenstående oppgaver

Ingen kjente gjenstående oppgaver.

---

## 9. Arbeidsflyt for en typisk endring

1. **Les** denne CLAUDE.md og `cv-oppdateringer.md` (hvis den finnes).
2. **Forstå** hvor i `CV`-objektet endringen hører hjemme. 99% av endringer er datafelt — ikke render-logikk.
3. **Branch:** `git checkout -b beskrivende-navn`.
4. **Rediger** kun `index.html` (og media-filer hvis bilder/PDF byttes).
5. **Test lokalt:**
   - Åpne `index.html` direkte i nettleser (eller via `python3 -m http.server`).
   - Sjekk konsollen for JS-feil.
   - Bytt språk (NO/EN-toggle) og verifiser oversettelser.
   - Test responsiv layout (DevTools → mobil-emulator).
6. **Oppdater CLAUDE.md** hvis endringen påvirker tabeller, regler eller arkitektur her.
7. **Commit** logiske enheter separat.
8. **Push** branch og åpne PR mot `main`. PR-beskrivelse skal liste endringer + lenke til relevant seksjon i `cv-oppdateringer.md` hvis aktuelt.
9. **Ikke merge selv** — vent på review fra Stephan.

---

## 10. Vanlige fallgruver

- **`beregnAlder()` MÅ defineres før `const CV = {`.** Template literals i objektet evalueres synkront under parsing — funksjonen må allerede være i scope.
- **Bio-strenger må bruke backticks** (`` ` ``), ikke vanlige anførselstegn, for at `${beregnAlder()}` skal interpoleres.
- **`type: "ingen"` + ingen `lenke`** = ikke-klikkbart kort (`.no-click`-klasse legges til automatisk i render). Det er OK for prosjekter som ennå ikke har en synlig demo.
- **YouTube-ID er kun ID-en**, ikke hele URL-en (ikke `https://youtube.com/watch?v=abc`, kun `abc`).
- **Drive-fil-ID** er strengen mellom `/d/` og `/view` i en Google Drive-URL.
- **`filter`-feltet** må matche en av de eksisterende kategoriene (`film`, `foto`, `tech`, `esport`) — eller ny kategori vil legges til som chip automatisk.
- **Render-funksjonen kalles én gang per språkbytte**, så alle DOM-elementer regenereres. Ikke bind state til DOM-noder utenfor `CV`-objektet.
- **`document.title`** er hardkodet til "Stephan Teig — Film & Code" i render-funksjonen. Endring av navn/tittel krever endring der.

---

## 11. Vedlikehold av denne filen

**Hver gang du som Claude gjør en endring i repoet:**

1. Spør deg selv: *påvirker dette noe som er beskrevet i CLAUDE.md?*
2. Hvis ja, oppdater relevant seksjon i samme PR.
3. Hvis du oppdager at CLAUDE.md er **utdatert** i forhold til faktisk kode (selv om du ikke gjorde endringen) — oppdater den. Koden er sannheten.
4. Hvis du oppdager at en regel her **ikke gir mening lenger**, eller en bedre praksis har dukket opp — foreslå endring til Stephan i PR-beskrivelsen før du endrer den selv.

Ikke la denne filen råtne. En utdatert CLAUDE.md er verre enn ingen CLAUDE.md, fordi den misleder fremtidige Claude-instanser.

---

*Sist oppdatert: 2026-07-07 — Google Drive-embeds lagt inn for Kolberg Volleyball, CIS Sarpsborg og Red Bull Reklame; begge TODO-embed-IDer fjernet, ingen gjenstående oppgaver.*
