import { Page } from "@playwright/test";

export const url: string = "https://travels.praegus.nl"

async function fillCampsiteFields(page: Page, data: any) {
  await page.getByRole('textbox', { name: 'Name *' }).fill(data.name);
  await page.getByRole('textbox', { name: 'Location *' }).fill(data.location);
  await page.getByLabel('Campsite Type *').selectOption(data.campsiteType);
  await page.getByLabel('Terrain Type *').selectOption(data.terrainType);
  await page.getByRole('spinbutton', { name: 'Price per Night ($) *' }).fill(data.pricePerNight);
  await page.getByRole('spinbutton', { name: 'Capacity *' }).fill(data.capacity);
  await page.getByLabel('Accessibility Level *').selectOption(data.accessibilityLevel);
}