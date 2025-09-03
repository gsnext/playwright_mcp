import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole('textbox', { name: 'Search' });
    this.searchButton = page.getByRole('button', { name: // });
  }

  async goto() {
    await this.page.goto('http://www.automationpractice.pl/index.php');
  }

  async searchFor(text: string) {
    await this.searchBox.fill(text);
    await this.searchBox.press('Enter');
  }
}

export class SearchResultsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getResultHeading(product: string) {
    return this.page.locator('#center_column').getByRole('heading', { name: product });
  }
}
