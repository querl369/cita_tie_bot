import { expect, type Locator, type Page } from '@playwright/test';

export class ProvincePage {
    readonly page: Page;
    readonly buttonAccept: Locator;
    readonly buttonExit: Locator;
    readonly dropdownProvinceSelection: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.buttonAccept = page.locator('#btnAceptar');
      this.buttonExit = page.locator('##btnVolver');
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
}