import { expect, type Locator, type Page } from '@playwright/test';
import { CitaPreviaNavigationPage } from './citaprevia.navigation';
import { CitaPreviaAvailabilityPage } from './citaprevia.availability';

export class CitaPreviaNiePage {
    readonly page: Page;
    readonly citaPreviaNavigationPage: CitaPreviaNavigationPage;
    readonly citaPreviaAvailabilityPage: CitaPreviaAvailabilityPage;
    readonly inputNie: Locator;
    readonly inputFirstLastName: Locator;
    readonly buttonAccept: Locator;
    readonly buttonExit: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.citaPreviaNavigationPage = new CitaPreviaNavigationPage(page);
      this.citaPreviaAvailabilityPage = new CitaPreviaAvailabilityPage(page);
      this.inputNie = page.locator('#txtIdCitado');
      this.inputFirstLastName = page.locator('[title="Nombre y apellidos"]');
      this.buttonAccept = page.locator('#btnEnviar');
      this.buttonExit = page.locator('#btnVolver');
    }

    async waitForPageLoad() {
        await this.inputNie.waitFor()
        await this.inputFirstLastName.waitFor()
    }

    async fillForm(nie: string, firstLastName: string) {
        await this.inputNie.fill(nie)
        await this.inputFirstLastName.fill(firstLastName)
    }

    async proceedToCitaPreviaNavigationPage() {
        await this.buttonAccept.click({delay: 1000})
        await this.page.pause()
        await this.citaPreviaAvailabilityPage.waitForPageLoad()
    }
}