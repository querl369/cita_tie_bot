import { test, expect } from '@playwright/test';
import { ProvincePage } from '../pages/province';
import { OfficePage } from '../pages/office';
import { CitaPreviaInfoPage } from '../pages/citaprevia.info';
import { CitaPreviaNiePage } from '../pages/citaprevia.nie';

test.describe('Check cita availability', () => {
  test('Select province', async ({ page }) => {
    const provincePage = new ProvincePage(page);
    const officePage = new OfficePage(page);
    const citaPreviaInfoPage = new CitaPreviaInfoPage(page);
    const citaPreviaNiePage = new CitaPreviaNiePage(page);

    await provincePage.open();
    await provincePage.selectProvince('Castellón');
    await provincePage.proceedToOfficePage()
    
    await officePage.selectOffice()
    await officePage.selectCardOption()
    await officePage.proceedToCitaPreviaInfoPage()

    await citaPreviaInfoPage.proceedToCitaPreviaNiePage()

    //TODO: add ability to pass and set env variable to this form
    await citaPreviaNiePage.fillForm('Test nie', 'Test test')
  });
})

