
import { test, expect } from '@playwright/test';
import { HomePage, SearchResultsPage } from '../pages/automationPractice.page';

test('Search for T-shirts and verify result', async ({ page }) => {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);

  await home.goto();
  await home.searchFor('T-shirts');
  await expect(results.getResultHeading('Faded Short Sleeve T-shirts')).toBeVisible();
});
