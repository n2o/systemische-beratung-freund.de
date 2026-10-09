# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Menschen im Raum Remscheid / Bergisches Land, die in einer belastenden Lebenslage Unterstützung suchen: Einzelpersonen, Paare, Familien, Teams (Organisationen) sowie Menschen nach einem stationären Aufenthalt. Sie besuchen die Seite meist privat, oft unsicher und mit hoher Hemmschwelle. Job: herausfinden, ob diese Therapeutin zu ihnen passt, was es kostet und wie sie unkompliziert Kontakt aufnehmen.

## Product Purpose

Website der Praxis für Systemische Beratung und -Therapie Lisa Freund. Sie erklärt Angebot, Ablauf und Honorar transparent und führt zum kostenlosen telefonischen Informationsgespräch. Erfolg: Besucher rufen an, schreiben eine SMS oder E-Mail.

## Positioning

Systemische Beratung und Therapie einer einzelnen, persönlich sichtbaren Therapeutin: Sitzungen in der Praxis, beim Klienten zu Hause oder in Bewegung draußen; auf Wunsch tiergestützt mit Labrador Lasse (geb. 2018). Kreative, alltagsnahe Methoden, konkrete Impulse für zwischen den Sitzungen.

## Operating Context

- Erstkontakt per Telefon, SMS oder E-Mail; kostenfreies Informationsgespräch bis 60 Minuten.
- Kein Kontaktformular (bewusste Entscheidung, kein Backend).
- Keine Kassenleistung; Abrechnung privat (bar oder Überweisung binnen 14 Tagen).
- Absagefrist 48 Stunden.

## Capabilities and Constraints

- Next.js App Router, Tailwind CSS v4, statische Inhalte, Deployment auf Vercel (Vercel Analytics).
- Deutschsprachig, Anrede „Sie“.
- Kontaktdaten, Preise, Dauer/Rhythmus und Leistungen: einzige Quelle ist src/config/site.ts (nicht hier duplizieren).

## Brand Commitments

- Name: „Praxis für Systemische Beratung und -Therapie Lisa Freund“.
- Logo: Rosette (stilisierte Blüte mit Stiel und sechs Punkten), bereinigte Fassung „A“ gewählt am 2026-10-09; Quelle src/components/Logo.tsx und src/app/icon.svg. Verworfene Entwürfe in .impeccable/mocks/logo/.
- Stimme: warm, ermutigend, persönlich, ohne Werbesprech.

## Evidence on Hand

- Fotos: src/images/lisa.webp (Porträt), src/images/lisa-mit-lasse.webp (s/w, Waldweg), src/images/lasse.webp (Hund).
- Kein echtes Praxisfoto vorhanden (der frühere Platzhalter wurde entfernt).
- Qualifikationen: Systemische Therapeutin und Beraterin (KiB), M.A. Rehabilitationswissenschaften, B.A. Rehabilitationspädagogik, Therapeutin und Behandlungsleitung in einer Jugendhilfeeinrichtung mit Fachklinik.
- Keine Testimonials, Bewertungen oder Siegel vorhanden; nicht erfinden.

## Product Principles

1. Hemmschwelle senken: Kontaktweg immer sichtbar, ohne Druck.
2. Transparenz vor Überzeugung: Preise, Ablauf, Rahmenbedingungen klar und auffindbar.
3. Die Person ist das Angebot: Lisa (und Lasse) sichtbar machen, nicht hinter Stock-Ästhetik verstecken.
4. Ruhe statt Effekt: nichts, was bei einer belasteten Person Stress erzeugt.

## Accessibility & Inclusion

WCAG 2.2 AA. Besucher sind teils emotional belastet: ruhige Bewegung, prefers-reduced-motion respektieren, gut lesbare Schriftgrößen, große Touch-Ziele für Telefon/E-Mail.
