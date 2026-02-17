# Example-Install

This directory shows what is available right after running the playwright installer.


## run tests
- default: `npx playwright test`
- with browser window: `npx playwright test --headed`
- single project: `npx playwright test --project=chromium`
- single file: `npx playwright test tests/example.spec.ts`

## show test report
`npx playwright show-report`

## ui mode
default:  
`npx playwright test --ui`
browser:  
`npx playwright test --ui-host=0.0.0.0 --ui-port=8089`

## generate tests
- "Testing" sidebar -> press record
    - assert visibility
    - assert text
    - assert value
    - pick locator
- Record at cursor
- Running codegen: `npx playwright codegen demo.playwright.dev/todomvc`

## emulate:
- viewport: `npx playwright codegen --viewport-size="800,600" playwright.dev`
- device: `npx playwright codegen --device="iPhone 13" playwright.dev`
- color-scheme: `npx playwright codegen --color-scheme=dark playwright.dev`
- geolocation: `npx playwright codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" bing.com/maps`

## auth state:
- auth.json: `npx playwright codegen github.com/microsoft/playwright --save-storage=auth.json`
only use locally!
    - gitignore
    - delete after use
    - .env
- use auth: `npx playwright codegen --load-storage=auth.json github.com/microsoft/playwright`