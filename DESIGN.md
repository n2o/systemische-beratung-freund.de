---
name: Praxis für Systemische Beratung und -Therapie Lisa Freund
description: Systemische Notation – Menschen als Knoten, Beziehungen als Linien, „Sie“ in der Mitte.
colors:
  fir: "#0e3f29"
  sun: "#f2b33d"
  paper: "#f5f7f6"
  ink: "#14201a"
  mist: "#e6ece8"
  muted-ink: "#4a5c52"
  line: "#5e7a6a"
  sage: "#8fa89a"
  hairline: "color-mix(in oklab, #0e3f29 15%, transparent)"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.5rem + 1.5vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  lead:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
rounded:
  lg: "8px"
  full: "9999px"
spacing:
  stroke: "1.5px"
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "32px"
  container: "72rem"
  header: "80px"
  section-y: "5rem"
  section-y-md: "7rem"
components:
  button-call:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.fir}"
    rounded: "{rounded.full}"
    height: "52px"
    padding: "0 24px"
  button-call-compact:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.fir}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 20px"
  button-fir:
    backgroundColor: "{colors.fir}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 20px"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.fir}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 20px"
  button-icon:
    textColor: "{colors.fir}"
    rounded: "{rounded.full}"
    size: "44px"
  nav-link:
    textColor: "{colors.fir}"
    typography: "{typography.body}"
  photo:
    rounded: "{rounded.lg}"
  footer:
    backgroundColor: "{colors.fir}"
    textColor: "{colors.paper}"
---

# Design System: Praxis für Systemische Beratung und -Therapie Lisa Freund

## Overview

**Creative North Star: "Systemische Notation"**

Die Seite zeichnet, wie systemische Arbeit denkt: Menschen sind Knoten, Beziehungen sind Linien, und „Sie“ stehen in der Mitte. Die Sprache ist die des Genogramms. Kreise stehen für Personen, eine Klammer für Partnerschaft, eine Raute für Lasse, ein Doppelkreis für die Indexperson. Diese Zeichen tragen Navigation, Ablauf und Leistungen, nicht Dekoration.

Der Grund ist kühles Papier, die einzige Tinte ist Tannengrün. Alles ist mit einer einzigen Strichstärke gezeichnet. Tiefe gibt es nicht: keine Schatten, keine Karten, keine Kacheln. Flächen werden durch Haarlinien und einen einzigen Tonwechsel (Nebel) gegliedert. Ein warmes Gelb markiert genau die Stellen, an denen die Besucherin selbst vorkommt oder handeln kann. Bewegung ist ruhig: Linien zeichnen sich einmal ein, und Zustände zeigen sich durch eine andere Linienart.

Die Dichte ist großzügig, die Schrift groß und gut lesbar (Atkinson Hyperlegible Next, Fließtext 17px). Bewusst abgelehnt wird die Branchen-Norm aus Salbei-Karten, Serifen-Headlines und Stock-Ruhe.

**Key Characteristics:**
- Eine Tinte (Tannengrün) für Text und bedeutungstragende Linien; Gelb nur für „Sie“ und den Anruf.
- Eine Strichstärke (1,5px) für Rahmen, Trennlinien, Icons und gezeichnete Diagramme.
- Kreise als Knoten, Linien als Beziehungen; Genogramm-Glyphen statt generischer Icons.
- Zustände wechseln die Linienart (keine → einfach → doppelt, gestrichelt für Fokus), nie nur die Farbe.
- Flach: Haarlinien und eine Nebel-Fläche statt Schatten und Karten.
- Linien zeichnen sich einmal ein, mit Rücksicht auf `prefers-reduced-motion`.

## Colors

Kühles Papier, eine tannengrüne Tinte, ein sonniger Akzent und eine kleine Familie gedämpfter Grüntöne für Nebenrollen.

### Primary
- **Tannengrün** (fir): Die einzige Tinte. Alle Überschriften, Links, Navigation, Button-Text, Rahmen von Outline-Buttons und Knoten, die Kanten des Systemdiagramms, Fokusring, Fußzeilen-Fläche und `theme-color`.

### Secondary
- **Sonnengelb** (sun): Markiert die Besucherin und ihre Handlung. Füllung des „Sie“-Knotens (Startseite, Kontaktseite) und des Anruf-Buttons. Außerdem Textauswahl (`::selection`, mit Tannengrün darauf) und der Skip-Link. Trägt nie selbst Text; darauf steht immer Tannengrün.

### Neutral
- **Kühles Papier** (paper): Seitengrund, Header, mobiles Menü, Füllung von Knoten und Buttons. Auf der Fußzeile die Textfarbe.
- **Tiefe Tinte** (ink): Fließtext (`foreground`).
- **Gedämpfte Tinte** (muted-ink): Sekundärtext, Lead-Absätze unter Abschnittstiteln, Tabellenköpfe, Hinweiszeilen. Ca. 6,5:1 auf Papier.
- **Nebel** (mist): Die einzige getönte Fläche. Bänder, die einen Abschnitt absetzen (Willkommen, Leistungsnavigation), und der Hover-Grund des Ghost-Buttons.
- **Linie** (line): Aufzählungszeichen und Zähler in Fließtext (`prose-fir`).
- **Salbei** (sage): Nur für dekorative Nebenlinien, etwa die Verbindungslinie der Phasen und die Vita-Linie. Etwa 2,4:1 auf Papier, deshalb nie für Text oder bedeutungstragende Linien.
- **Haarlinie** (hairline): Standardfarbe aller Trennlinien (`--border`), 15 % Tannengrün auf transparent.

### Named Rules
**The One Ink Rule.** Text und bedeutungstragende Linien sind Tannengrün (Überschriften, Links, Kanten) oder Tiefe Tinte (Fließtext). Keine zweite Textfarbe außer der gedämpften Tinte für Sekundärtext.

**The Sie Rule.** Sonnengelb erscheint nur dort, wo die Besucherin gemeint ist oder handelt: der „Sie“-Knoten und der Anruf. Textauswahl und Skip-Link sind die einzigen Ausnahmen. Kein gelber Text, keine gelben Flächen als Schmuck.

**The Decorative Sage Rule.** Salbei ist zu hell für Bedeutung. Was gelesen oder angeklickt werden muss, ist nie salbeifarben.

## Typography

**Display Font:** Atkinson Hyperlegible Next (Fallback `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Atkinson Hyperlegible Next (dieselbe Familie)

**Character:** Eine einzige, auf Lesbarkeit gebaute Grotesk für alles. Hierarchie entsteht durch Größe und Gewicht (400 / 600 / 700), nicht durch eine zweite Familie. Groß gesetzt wirkt sie freundlich und klar, nicht klinisch.

### Hierarchy
- **Display** (600, fluid 40–68px, Zeilenhöhe 1.04, -0.025em): Genau ein h1 pro Seite. Startseiten-Headline und Seitentitel (`PageHeader`), max. ca. 48rem breit.
- **Headline** (600, fluid 30–44px, 1.1, -0.02em): Abschnittstitel (h2) auf allen Seiten.
- **Title** (600, 20px): Leistungsnamen in der Liste, Menüeinträge im mobilen Menü, hervorgehobene Kernsätze in Tannengrün. h3 wird uneinheitlich gesetzt: 18px in Phasen und Vita, 24px in den Honorar-Modalitäten.
- **Lead** (400, 18–20px, 1.625): Einleitungsabsatz unter Display und Headline, meist in gedämpfter Tinte, max. 42rem.
- **Body** (400, 17px, 1.625): Fließtext, max. `65ch` (`max-w-prose`). Silbentrennung in langen Texten über `prose-fir`.
- **Label** (400–600, 14px): Hinweiszeilen unter Kontakt-Buttons, Tabellenköpfe, Fußzeilen-Copyright.

Alle h1–h3 sind Tannengrün, halbfett und `text-wrap: balance`; Absätze `text-wrap: pretty`.

### Named Rules
**The One Family Rule.** Atkinson Hyperlegible Next für alles. Keine Serifen-Headline, keine zweite Display-Schrift.

**The Seventeen Rule.** Fließtext beginnt bei 17px (1.0625rem). Kleiner als 14px nur im Logo-Untertitel auf Mobil.

## Layout

Ein zentrierter Container (max. 72rem) mit seitlichen Abständen von 16 / 24 / 32px (Mobil / ab 640px / ab 1024px). Inhalte sind Spalten mit Text und Zeichnung, keine Kartenraster. Der Hero teilt sich ab 1024px in Text links und Systemdiagramm rechts (1fr / 1.1fr); darunter steht das kompakte Diagramm unter dem Text. Zweispaltige Abschnitte nutzen asymmetrische Verhältnisse (3fr/2fr, 2fr/3fr) und fallen auf Mobil auf eine Spalte zurück.

Vertikaler Rhythmus über `section-y`: 5rem Abstand oben und unten, ab 768px 7rem. Abschnitte trennen sich durch eine Haarlinie oder durch das Nebel-Band, nie durch beides plus Schatten. Der Header ist 80px hoch und sticky; Anker springen mit 6rem `scroll-padding-top`. Breakpoints sind die Tailwind-Standards (640 / 768 / 1024px); die Hauptnavigation erscheint ab 1024px, darunter ein Menü-Sheet von rechts.

## Elevation & Depth

Das System ist flach. Es gibt keine Schatten und keine gestapelten Flächen. Tiefe und Gliederung entstehen ausschließlich durch Haarlinien (1,5px, 15 % Tannengrün), das Nebel-Band als einzigen Tonwechsel und die tannengrüne Fußzeile als dunklen Abschluss.

### Named Rules
**The Flat Paper Rule.** Keine `box-shadow`, keine schwebenden Karten. Eine Fläche hebt sich nur durch eine Linie oder durch Nebel ab.

## Shapes

Die Formensprache ist Kreis und Linie. Buttons sind Pillen (voll gerundet), Knoten sind Kreise, Aufzählungen sind kleine Kreise auf einer Linie. Gerade Haarlinien trennen Zeilen, Tabellen und Abschnitte. Fotos sind das einzige Rechteck mit sichtbarer Rundung: leicht abgerundete Ecken (8px), Hochformat 4:5.

Jede Linie hat eine einzige Strichstärke (`--stroke`, 1,5px): Rahmen über `hairline`, Lucide-Icons und gezeichnete SVGs über `stroke-system` mit `vector-effect: non-scaling-stroke`, sodass die Linie bei jeder Größe gleich bleibt. Unterstreichungen haben dieselbe Stärke. Ausgenommen ist nur das Logo, ein eigenständiges Markenzeichen mit eigener Strichstärke.

### Named Rules
**The One Stroke Rule.** Jede Linie ist 1,5px stark: Trennlinie, Button-Rahmen, Icon, Diagrammkante, Unterstreichung. Dicker wird eine Linie nur als Zustand (Hover-Kante im Diagramm), und auch dann als zwei parallele Linien.

**The Node Rule.** Personen sind Kreise. Ein Doppelkreis markiert die Indexperson („Sie“, erster Schritt im Ablauf).

## Components

### Buttons
Ruhige Pillen mit Tannengrün-Rahmen, die sich bei Hover verdoppeln statt einzufärben.
- **Shape:** voll gerundet (9999px), Rahmen 1,5px.
- **Anruf (`sun`):** Sonnengelbe Füllung, Tannengrün-Text und -Rahmen, Telefon-Icon plus Nummer. Groß (52px hoch, 24px Innenabstand, 18px Text) im Hero und am Seitenende, normal (44px) im Header; auf Mobil im Header nur als 44px-Icon-Kreis.
- **Outline:** Papier mit Tannengrün-Rahmen und -Text. E-Mail neben dem Anruf, Leistungsnavigation (mit Genogramm-Glyphe), Menü-Button (44px-Kreis).
- **Default (`fir`):** Tannengrüne Füllung, Papier-Text. Im Code vorhanden, auf den Seiten derzeit nicht eingesetzt.
- **Hover:** Ein zweiter Ring 1,5px in 3px Abstand erscheint (Outline-Farbe wechselt von transparent zu Tannengrün): die einfache Linie wird doppelt. 200ms Übergang.
- **Focus:** 2px Tannengrün-Outline mit 3px Abstand (global für `:focus-visible`).
- **Ghost:** Tannengrün-Text ohne Rahmen, Hover auf Nebel. Nur für den Schließen-Button im Menü; der reine Farbwechsel verletzt die Linienart-Regel und ist kein Vorbild.

### Navigation
- **Header:** Papier, Haarlinie unten, sticky, 80px. Logo links, Links halbfett in Tannengrün, Anruf-Button rechts.
- **Zustände:** Ruhe ohne Unterstreichung; Hover einfache Unterstreichung; aktuelle Seite doppelte Unterstreichung (`aria-current="page"`), 0.4em Abstand.
- **Mobil:** Menü-Sheet von rechts (Papier, 3/4 Breite, max. 24rem), Einträge 20px halbfett zwischen Haarlinien, darunter die Kontakt-Buttons.
- **Fußzeile:** Tannengrüne Fläche, Papier-Text, Logo-Zeichen, Adresse mit unterstrichenen Kontaktlinks, Seitenlinks mit Unterstreichung bei Hover, Haarlinie in 20 % Papier über dem Copyright.

### Textlinks
Halbfett, Tannengrün, einfach unterstrichen (1,5px, 0.2em Abstand); bei Hover doppelt unterstrichen (`link-fir`).

### Systemdiagramm (Signatur)
Das Genogramm der Besucherin: ein sonnengelber Doppelkreis „Sie“ in der Mitte, sechs Leistungsknoten im Kreis darum, jeder mit Genogramm-Glyphe und halbfetter Beschriftung, verbunden durch tannengrüne Kanten. Jeder Knoten ist ein Link. Hover/Fokus macht die Kante doppelt (7px Tannengrün mit 4px Papier-Kern), unterstreicht die Beschriftung, und bei Tastaturfokus erscheint ein gestrichelter Ring um den Knoten. Die Kanten zeichnen sich beim Laden einmal ein (1,6s, 90ms versetzt). Zwei Fassungen: breit (640×560) ab 1024px, kompakt (360×400) darunter.

### Leistungsliste
Gestapelte Form des Diagramms, zweispaltig ab 768px. Zeile mit Haarlinie unten: 56px-Glyphe, Leistungsname (20px, halbfett, Tannengrün), Kurzbeschreibung in gedämpfter Tinte, Pfeil rechts. Hover: Name doppelt unterstrichen, Pfeil rückt 4px nach rechts.

### Phasen
Der Ablauf als beschriftete Knoten auf einer Linie: 24px-Kreise mit Tannengrün-Rahmen auf Papier, verbunden durch eine Salbei-Linie (waagerecht ab 768px, senkrecht darunter). Der erste Knoten trägt den Doppelring der Indexperson.

### Vita-Linie
Eine senkrechte Salbei-Linie mit 10px-Kreisen (Tannengrün-Rahmen) für jede Station.

### Honorartabelle
Tabelle ohne Rahmen, nur Haarlinien zwischen den Zeilen. Erste Spalte: Glyphe und Leistungsname in Tannengrün, halbfett. Beträge in Tabellenziffern. Auf Mobil werden Dauer und Rhythmus unter den Namen gezogen.

### Fotos
Echte Fotos von Lisa und Lasse, Hochformat 4:5, 8px Ecken, ohne Rahmen oder Schatten.

## Do's and Don'ts

### Do:
- **Do** zeichne jede Linie mit `--stroke` (1,5px): `hairline-*` für Rahmen, `stroke-system` für SVG.
- **Do** zeige Zustände über die Linienart: keine → einfach (Hover) → doppelt (aktiv/Hover bei Buttons und Listen), gestrichelt für den Fokus auf Diagrammknoten.
- **Do** setze Sonnengelb nur für den „Sie“-Knoten und den Anruf, immer mit Tannengrün-Text und -Rahmen.
- **Do** verwende die Genogramm-Glyphen (Kreis = Person, Klammer = Paar, Raute = Lasse) für Leistungen, auch in Tabellen und Navigation.
- **Do** gliedere Abschnitte mit `section-y`, Haarlinien oder dem Nebel-Band.
- **Do** lass neue gezeichnete Linien höchstens einmal einzeichnen (`draw-in`) und respektiere `prefers-reduced-motion`.
- **Do** halte Kontaktwege groß: Touch-Ziele mindestens 44px.

### Don't:
- **Don't** verwende Schatten oder schwebende Karten; das System ist flach.
- **Don't** baue Kartenraster oder Salbei-Kacheln für Leistungen; Leistungen sind Knoten und Listenzeilen.
- **Don't** setze eine Serifen- oder zweite Display-Schrift ein.
- **Don't** zeige einen Zustand nur durch Farbwechsel.
- **Don't** nutze Salbei für Text, Icons oder bedeutungstragende Linien.
- **Don't** setze Text in Sonnengelb oder Gelb als Schmuckfläche.
- **Don't** mische Strichstärken; Ausnahme ist allein das Logo.
