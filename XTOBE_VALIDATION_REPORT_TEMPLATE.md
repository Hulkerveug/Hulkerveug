# APEX 4.1 validation report template

Use this template to record the local build, accessibility, and verification checks required for the APEX 4.1 milestone. Do not publish this report until you have confirmed all items and removed any confidential artifacts.

Repository: Hulkerveug/Hulkerveug
Branch: xtobe-profile-redesign
Prototype folder: xtobe-website-prototype

- Date:
- Operator:

1) Build
- Command: `npm install` then `npm run build`
- Result: [record build success/failure and stdout snippet]

2) Development server
- Command: `npm run dev`
- Result: [record server start and URL]

3) Type check
- Command: `npx tsc --noEmit`
- Result: [pass/fail]

4) Lint (if configured)
- Command: `npx eslint .`
- Result: [pass/fail]

5) Accessibility
- Tool: a11y browser extension or Lighthouse accessibility audit
- Result: [record score and issues]

6) Secret scan
- Tool: `git-secrets` or similar
- Result: [none found / issues found]

7) Screenshots
- Desktop: capture 1440x900
- Tablet: 768x1024
- Mobile: 375x812
- Attach file paths or links to local screenshots

8) Remaining blockers
- [list items]

Signature:

