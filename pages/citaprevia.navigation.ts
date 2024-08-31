import { expect, type Locator, type Page } from '@playwright/test';
import { CitaPreviaAvailabilityPage } from './citaprevia.availability';

export class CitaPreviaNavigationPage {
    readonly page: Page;
    readonly citaPreviaAvailabilityPage: CitaPreviaAvailabilityPage;
    readonly buttonGetCita: Locator;
    readonly buttonCancelCita: Locator;
    readonly buttonExit: Locator;

    constructor(page: Page) {
      this.page = page;
      this.citaPreviaAvailabilityPage = new CitaPreviaAvailabilityPage(page);
      this.buttonGetCita = page.locator('[value="Solicitar Cita"]');
      this.buttonCancelCita = page.locator('[value="Anular Cita"]');
      this.buttonExit = page.locator('#btnSalir');
    }

    async waitForPageLoad() {
        await this.buttonGetCita.waitFor()
        await this.buttonCancelCita.waitFor()
    }

    async proceedToCitaPreviaAvailabilityPage() {
      await this.buttonGetCita.click({delay: 1000})
      await this.citaPreviaAvailabilityPage.waitForPageLoad()
  }
}