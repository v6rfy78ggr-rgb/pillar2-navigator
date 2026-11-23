# Publication verification

Date: 23 November 2026. Public source package: v2.

`node test.cjs` passed 449 assertions on rule boundaries, missing values, three-language rendering, language-switch state invariance, report content and HTML escaping. The rendering harness uses a minimal DOM stub; it is not a full browser acceptance test.

Source was retrieved from the latest available saved Site repository and compared with the local v2 delivery. Hosting identity, private history and credentials are excluded. Screening rules are unchanged. The source-review baseline remains 4 November 2026.

An in-app browser smoke test loaded the fictional example, switched from Chinese to German and opened its report. The report retained the example company, 2025 fiscal year, two threshold years and the separate filing-review items. This was a limited interaction check; a new native PDF was not exported.

Remaining limits include individual legal interpretation, subsequent legal changes, non-calendar financial years, full foreign-country treatment and complete native-browser PDF coverage. Tests do not determine a real taxpayer's liability.
