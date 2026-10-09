---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Startseite (und gesamte Website)

Scope: alle Routen der Praxis-Website; Startseite ist die erste Fläche. Modus: Persuade.
Publikum: belastete Menschen im Raum Remscheid, Paare, Familien, Teams. Aktion: Anruf/SMS/E-Mail für kostenfreies Informationsgespräch.
Belege: Lisas Fotos, Qualifikationen, transparente Honorare. Keine Testimonials erfinden.
Constraints: shadcn/ui, WCAG 2.2 AA, SEO (Metadata, JSON-LD, Sitemap), Kontaktdaten aus einer Config.
Logo: Entwurf A „Rosette, bereinigt“ gewählt (src/components/Logo.tsx, src/app/icon.svg). Offen: echtes Praxisfoto fehlt.

## Direction contract

THESIS: Die Seite denkt wie systemische Arbeit: Menschen sind Knoten, Beziehungen sind Linien, „Sie“ stehen in der Mitte. Verweigert wird die Branchen-Norm aus Salbei-Karten, Serifen-Headline und Stock-Ruhe.

OWN-WORLD: Kühles Weiß als Grund, Tannengrün (#0E3F29) als einzige Tinte für Text und Linien, Salbei für Nebenlinien, Gelb (#F2B33D) nur für den „Sie“-Knoten und den primären Anruf. Eine Strichstärke (1,5px), Kreise als Knoten, keine Schatten, keine Kartenraster; Zustände wechseln Linienart (durchgezogen → doppelt), nie nur Farbe.

STORY: Besucher sehen sofort, wofür die Praxis da ist (Einzel, Paar, Familie, Team), erkennen sich im gezeichneten System wieder, sehen Lisa und Lasse als echte Menschen, verstehen Ablauf und Preis ohne Suchen und rufen an.

FIRST VIEWPORT: Links Headline „Systemische Beratung und Therapie in Remscheid“ groß, darunter ein Satz und der gelbe Anruf-Button mit Nummer plus E-Mail-Link. Rechts ein gezeichnetes Systemdiagramm: gelber Knoten „Sie“, Linien zu Partner, Familie, Team, Neubeginn und Lasse; jeder Knoten verlinkt die Leistung. Linien zeichnen sich einmal ein.

FORM: Systemische Notation (Genogramm-Sprache), Kandidat 3 der eigenen Liste; Seed-Key 85b8628f. Raises: Linienart statt Farbe für Zustände; Knoten als Links (Überblick → Detail); Ablauf als beschriftete Phasen; strenges Liniensystem; einmaliges Einzeichnen.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
