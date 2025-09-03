
import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/playwrightHome.page';


test('has title', async ({ page }) => {
  const home = new PlaywrightHomePage(page);
  await home.goto();
  await expect(page).toHaveTitle(/Playwright/);
});


test('get started link', async ({ page }) => {
  const home = new PlaywrightHomePage(page);
  await home.goto();
  await home.clickGetStarted();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
