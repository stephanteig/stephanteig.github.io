# STAF Films — test site

Subpage of stephanteig.github.io that runs the full STAF Films site as if it had its own domain.
Live (after merge): https://stephanteig.github.io/staf/

## Structure

```
staf/
  index.html                         Home: showreel hero (reel → end card → single film) + sections
  work/                              All work
  films/the-king-in-yellow/          Film page (in development)
  films/et-ekko-av-henne/            Film page (completed)
  films/cut/                         CUT! Glemmen Filmfestival (event, not a STAF film)
  journal/, journal/00-introduction/ Development journal
  about/, about/stephan/, about/aron/
  contact/, press/, privacy/
  assets/css/staf.css                Fonts, hover/focus states, hero, small-screen overrides
  assets/js/staf.js                  Video loading from Google Drive, hero player, contact mailto
  assets/fonts/                      Alte Haas Grotesk Bold (woff2)
  assets/img/                        All images and logos (webp/png/svg)
  assets/videos.json                 Google Drive file IDs for every video
```

Plain HTML/CSS/JS, no build step. Page layout lives inline in each page; shared rules are in `staf.css`.
All internal links are absolute and start with `/staf/`.

## Brand

Ink `#111310` · Snow `#F4F3ED` · Paper `#E6E4DA` · King Yellow `#C8A83E` (used only for The King in Yellow).
Display: Alte Haas Grotesk Bold. Body: Inter. Labels: IBM Plex Mono.

## Videos (Google Drive, not GitHub)

Videos are never committed. `assets/videos.json` maps a key to a Drive file:

1. Upload the file named in `videos.json` to Drive (`02_Film & Media/STAF Films/Nettside-video` (https://drive.google.com/drive/folders/1sZTA21bOHk2YW24mdL1dC34_xc0kKd9w)).
2. Share it as "Anyone with the link can view".
3. Copy the ID from the share link (`https://drive.google.com/file/d/<ID>/view`) into `drive_id`.

A key with an empty `drive_id` shows its poster image, so the page never looks broken.
Use H.264 MP4 (not HEVC/MOV) and keep clips small: Drive throttles large files and is not a streaming host.
If playback is unreliable, move the files to a proper video host and swap `driveUrl()` in `staf.js`.

## Moving to its own domain

1. Copy `staf/` to the root of the new repo/host.
2. Replace every `/staf/` with `/` in the `.html`, `.css`, `.js` files.
3. Update the `og:image` URL and remove `<meta name="robots" content="noindex,nofollow">` when it should be public.
