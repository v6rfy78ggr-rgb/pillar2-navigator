# Pillar 2 Navigator v2

[English](README.md) · [Deutsch](README.de.md) · [简体中文](README.zh-CN.md)

[Projektübersicht](https://v6rfy78ggr-rgb.github.io/v6rfy78ggr-rgb/de.html) · [Kurzer Einstieg](TRY_IT.md) · [Versionen](https://github.com/v6rfy78ggr-rgb/pillar2-navigator/releases) · [Demo öffnen](https://v6rfy78ggr-rgb.github.io/pillar2-navigator/)

Ein lokal im Browser laufender Prototyp zur Vorprüfung deutscher Pillar-Two-Pflichten und zur Dokumentation offener Sachverhaltsfragen. Die deutsche, englische und chinesische Oberfläche verwendet dieselbe Regelbasis.

## Ausprobieren

Über **Code → Download ZIP** herunterladen und entpacken. `python3 -m http.server 8000 --directory dist` ausführen und <http://localhost:8000> öffnen. Das integrierte Beispiel laden, die fünf Schritte durchgehen und den Bericht drucken. Für `node test.cjs` genügt Node.js ab Version 20; zusätzliche Laufzeitpakete sind nicht erforderlich.

## Funktionsumfang

- Vorprüfung der Umsatzgrenze mit ausdrücklich unbekannten Werten sowie einer vereinfachten Beteiligungsstruktur.
- Prüfung des temporären CbCR Safe Harbour anhand bestätigter qualifizierter Daten, Anpassungen und Nutzungshistorie.
- Getrennte Hinweise zur Gruppenträgermeldung, zum Mindeststeuer-Bericht (GIR) und zur deutschen Steuererklärung.
- Dreisprachiges Glossar, Erläuterungen und Druckbericht für den PDF-Export. Ein Sprachwechsel erhält die laufende Sitzung.

## Grenzen und Nachweise

Abgedeckt sind ausschließlich reguläre Kalendergeschäftsjahre **2024–2026**; Beträge werden in **Mio. EUR** eingegeben. Abweichende Wirtschaftsjahre, Umstrukturierungen, ausgeschlossene Einheiten, Joint Ventures und ungeklärte Angaben benötigen eine gesonderte Prüfung. Ausländische IIR-Anwendung und Austauschvereinbarungen sind jahresbezogen zu bestätigen. Der SBIE-Betrag wird extern ermittelt.

Das Werkzeug berechnet keine Ergänzungssteuer, stellt keine ausländische Erklärungspflicht abschließend fest und erzeugt weder GIR/XML noch eine elektronische Einreichung. Unbekannte Daten begründen keine Entwarnung. Angezeigte Termine berücksichtigen keine Wochenenden, Feiertage oder individuellen Fristverlängerungen.

Quellenstand: **4. November 2026**. Version v2: **5. November 2026**. Am **23. November 2026** bestanden **449 Assertions** zu Grenzfällen, fehlenden Angaben, Sprachkonsistenz und sicherer Berichtsausgabe. Damit sind spätere Rechtsänderungen und Einzelfälle nicht abschließend geprüft. Amtliche Quellen, darunter MinStG und Richtlinie (EU) 2022/2523, sind in der Anwendung verlinkt.

## Daten und Rückmeldungen

Kein Anwendungsserver, keine Analyse-Tracker und keine dauerhafte Speicherung von Geschäftsdaten. Ein Neuladen löscht die Sitzung. Ausdrucke enthalten die Eingaben und sind vertraulich zu behandeln. Hosting-Anbieter können gewöhnliche Seitenaufrufe protokollieren.

Hilfreich sind fiktive Beteiligungsketten, Schwellen- und Datenlückenfälle mit tatsächlichem und erwartetem Ergebnis, Geschäftsjahr und konkreter Rechtsquelle. Regeln stehen in `dist/engine.js`, reproduzierbare Prüfungen in `test.cjs`.

## Mitwirken

[Fehler melden oder Verbesserung vorschlagen](https://github.com/v6rfy78ggr-rgb/pillar2-navigator/issues/new/choose). Rückmeldungen auf Deutsch, Englisch und Chinesisch sind willkommen. Ausschließlich fiktive Daten verwenden; Issues sind öffentlich. Zum Prüfprozess siehe [CONTRIBUTING.md](CONTRIBUTING.md), zur MIT-Lizenz [LICENSE](LICENSE).
