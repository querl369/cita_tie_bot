import { expect, type Locator, type Page } from '@playwright/test';
import { CitaPreviaNiePage } from './citaprevia.nie'

export class CitaPreviaInfoPage {
    readonly page: Page;
    readonly citaPreviaNiePage: CitaPreviaNiePage;
    readonly buttonEnter: Locator;
    readonly buttonExit: Locator;

    constructor(page: Page) {
      this.page = page;
      this.citaPreviaNiePage = new CitaPreviaNiePage(page);
      this.buttonEnter = page.locator('#btnEntrar');
      this.buttonExit = page.locator('#btnVolver');
    }

    async waitForPageLoad() {
        await this.buttonEnter.waitFor()
        await this.buttonEnter.waitFor()
    }

    async proceedToCitaPreviaNiePage() {
        await this.buttonEnter.click({delay: 1000})
        await this.citaPreviaNiePage.waitForPageLoad()
    }
}