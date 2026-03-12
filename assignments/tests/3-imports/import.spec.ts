import { test, expect } from "@playwright/test";
import { Page } from "@playwright/test";
import campsiteData from "./data/campsite_data.json";
// TODO: add the imports for the url that is exported in "utils/utils.ts" here so the "has title" test passes
// hint: your IDE might be able to "Quick Fix" if you hover the "url" variable in the test

test("has title", async ({ page }) => {
  await page.goto(url);
  await expect(page).toHaveTitle(/Praegus Travels/);
});

// TODO: Move the fillCampsiteFields function in the utils.ts and import it at the top of this file
//       Then make sure the test still passes
test("add campsite", async ({ page }) => {
  await page.goto(url);
  await page.getByRole("link", { name: "List Your Campsite" }).click();
  await fillCampsiteFields(page, campsiteData);
  await page.getByRole("button", { name: "Create Campsite" }).click();
  await expect(page.getByText("Campsite created successfully")).toBeVisible();
});

async function fillCampsiteFields(page: Page, data: any) {
  await page.getByRole("textbox", { name: "Name *" }).fill(data.name);
  await page.getByRole("textbox", { name: "Location *" }).fill(data.location);
  await page.getByLabel("Campsite Type *").selectOption(data.campsiteType);
  await page.getByLabel("Terrain Type *").selectOption(data.terrainType);
  await page
    .getByRole("spinbutton", { name: "Price per Night ($) *" })
    .fill(data.pricePerNight);
  await page
    .getByRole("spinbutton", { name: "Capacity *" })
    .fill(data.capacity);
  await page
    .getByLabel("Accessibility Level *")
    .selectOption(data.accessibilityLevel);
}

/*
Bonus 1:
Making the "add campsite" test more specific
- add a const variable to the utils.ts file called "newCampsiteUrl"
- declare the value with the url for adding a new campsite
- import it in this file
- use it in the "add campsite" test to reduce the number of actions required

Bonus2:
Making the "add campsite" test more complete
- Look at the data being imported from campsite_data.json
- Look at which data is being used by the "fillCampsiteFields" function
- Choose any number of unused data:
  - Extend the current "fillCampsiteFields" function in utils.ts to also fill in that data
  - Use Playwright (codegen, or Testing tab) to find your locators
*/
