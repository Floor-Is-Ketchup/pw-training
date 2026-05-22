import { test, expect } from "@playwright/test";

test.describe("actual tests", () => {
  test.beforeEach("test setup", async ({ page }) => {
    await page.goto("https://travels.praegus.nl");
  });

  test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Praegus Travels/);
  });

  test("add campsite", async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });

  test("can't create a campsite without data", async ({ page }) => {
    await expect(page.getByText("Featured Campsites$45/")).toHaveScreenshot();
  });

  test("check title", async ({ page }) => {});
});
