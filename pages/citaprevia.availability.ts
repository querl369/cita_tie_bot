import { expect, type Locator, type Page } from '@playwright/test';

export class CitaPreviaAvailabilityPage {
    readonly page: Page;
    readonly noAvailableCitasBlock: Locator;
    // readonly buttonCancelCita: Locator;
    readonly buttonExit: Locator;

    constructor(page: Page) {
      this.page = page;
      this.noAvailableCitasBlock = page.locator('[class*=paragraph-header] + p');
    //   this.buttonCancelCita = page.locator('[value="Anular Cita"]');
      this.buttonExit = page.locator('#btnSalir');
    }

    async waitForPageLoad() {
        await this.buttonExit.waitFor()
    }
}