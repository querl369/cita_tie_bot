import { expect, type Locator, type Page } from '@playwright/test';
import { CitaPreviaInfoPage } from './citaprevia.info';

export class OfficePage {
    readonly page: Page;
    readonly citaPreviaInfoPage: CitaPreviaInfoPage;
    readonly buttonAccept: Locator;
    readonly buttonExit: Locator;
    readonly dropdownOfficeSelection: Locator;
    readonly dropdownCardOptionSelection: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.citaPreviaInfoPage = new CitaPreviaInfoPage(page);
      this.buttonAccept = page.locator('#btnAceptar');
      this.buttonExit = page.locator('#btnVolver');
      this.dropdownOfficeSelection = page.locator('select#sede');
      this.dropdownCardOptionSelection = page.locator('select[name="tramiteGrupo[0]"]');
    }

    async waitForPageLoad() {
        await this.dropdownOfficeSelection.waitFor()
    }
  
    async selectOffice() {
      await this.dropdownOfficeSelection.selectOption('4')
    }

    async selectCardOption() {
        await this.dropdownCardOptionSelection.selectOption('4112')
    }

    async proceedToCitaPreviaInfoPage() {
      setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, 1000);
        await this.buttonAccept.click({delay: 1000})
        await this.citaPreviaInfoPage.waitForPageLoad()
    }
}