# Pillar 2 Navigator v2

[English](README.md) · [Deutsch](README.de.md) · [简体中文](README.zh-CN.md)

[Project hub](https://v6rfy78ggr-rgb.github.io/v6rfy78ggr-rgb/) · [One-minute first look](TRY_IT.md) · [Version downloads](https://github.com/v6rfy78ggr-rgb/pillar2-navigator/releases) · [Open demo](https://v6rfy78ggr-rgb.github.io/pillar2-navigator/)

A browser-local prototype for screening German Pillar Two obligations and documenting the facts that still need professional review. English, German and Chinese interfaces share the same rule engine.

## Try it

Download and extract **Code → Download ZIP**. Run `python3 -m http.server 8000 --directory dist`, then open <http://localhost:8000>. Load the built-in example, move through the five steps and print the result. Node.js 20 or later is sufficient for `node test.cjs`; there are no runtime packages to install.

## What it covers

- Revenue-threshold screening, including unknown values, and a simplified ownership structure.
- Transitional CbCR Safe Harbour screening using user-confirmed qualified data, adjustments and eligibility history.
- Separate prompts for group-head notification, the GIR and the German tax return.
- A trilingual glossary, explanatory help and a print-to-PDF report. Language changes preserve the current session.

## Boundaries and evidence

Only standard calendar years **2024–2026**, with monetary inputs in **EUR millions**, are covered. Non-standard periods, reorganisations, excluded entities, joint ventures and uncertain facts need separate assessment. Foreign IIR status and exchange arrangements must be confirmed for the relevant year. SBIE is an external input.

This does not calculate top-up tax, establish foreign filing liability, generate GIR/XML or submit a return. Unknown data does not establish absence of an obligation. Displayed dates are nominal and do not apply weekend, holiday or individual-extension rules.

Source review baseline: **4 November 2026**. Version v2: **5 November 2026**. Publication checks on **23 November 2026** passed **449 assertions** covering boundaries, missing values, language consistency and report escaping. Legal updates and all individual cases are not certified by those tests. Sources are linked in the application, including the German Minimum Tax Act and Directive (EU) 2022/2523.

## Privacy and feedback

No application backend, analytics or business-data persistence is implemented. Refreshing clears the working session. Printouts contain entered facts; keep them private. Hosting providers may log ordinary requests.

Useful contributions: a fictional ownership chain, threshold boundary or missing-data case; the actual and expected result; fiscal year and a precise legal source. See `dist/engine.js` for rules and `test.cjs` for reproducible checks.

## Contribute

[Report an issue or suggest an improvement](https://github.com/v6rfy78ggr-rgb/pillar2-navigator/issues/new/choose). English, German and Chinese feedback is welcome. Use synthetic data only; public Issues are visible to everyone. See [CONTRIBUTING.md](CONTRIBUTING.md) for the review process and [LICENSE](LICENSE) for the MIT license.
