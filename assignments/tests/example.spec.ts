import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // TODO: Manually edit this test to go to"https://travels.praegus.nl/" and check it has the title "Praegus Travels"
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// TODO: edit the "name" of this test, and using the record (from here) function, make a test for adding a new campsite
// NB: make sure you check the newly added campsite !
test('get started link', async ({ page }) => {
  await page.goto('https://travels.praegus.nl/');

  //TODO: add recorded logic to test adding a new campsite

});


//TODO: After finishing this excercise, also rename the example.spec.ts file to something more fitting