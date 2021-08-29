# Simple userscript

This is a as-simple-as-possible userscript which sets the background color of the main search field of DuckDuckGo to dark gray and that functionality is being tested via Jest.

## How to test

```
❯ npm install

added 327 packages, and audited 328 packages in 2s

25 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
❯ npx jest
(node:106018) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  __tests__/ddg-input.spec.js
  ✓ Check input field background changed (17 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.618 s
Ran all test suites.
```
