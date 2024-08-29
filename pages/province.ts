import { expect, type Locator, type Page } from '@playwright/test';
import { OfficePage } from './office'
export class ProvincePage {
    readonly page: Page;
    readonly officePage: OfficePage;
    readonly buttonAccept: Locator;
    readonly buttonExit: Locator;
    readonly dropdownProvinceSelection: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.officePage = new OfficePage(page);
      this.buttonAccept = page.locator('#btnAceptar');
      this.buttonExit = page.locator('#btnVolver');
      this.dropdownProvinceSelection = page.locator('#form');
    }
  
    async open() {
      await this.page.goto('https://icp.administracionelectronica.gob.es/icpplus/index.html');
      await this.buttonAccept.waitFor({state: 'visible'})
      await this.buttonExit.waitFor({state: 'visible'})
      await expect(this.buttonAccept).toBeVisible();
    }
  
    async selectProvince(province: string) {
      await this.dropdownProvinceSelection.selectOption(province)
    }

    async proceedToOfficePage() {
      await this.buttonAccept.click()
      await this.officePage.waitForPageLoad()
    }
}