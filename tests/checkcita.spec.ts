import { test, expect, chromium } from '@playwright/test';
import { ProvincePage } from '../pages/province';
import { OfficePage } from '../pages/office';
import { CitaPreviaInfoPage } from '../pages/citaprevia.info';
import { CitaPreviaNiePage } from '../pages/citaprevia.nie';
import { CitaPreviaAvailabilityPage } from '../pages/citaprevia.availability';

try {
  test('Check cita availability', async ({ page }) => {
    //TODO: figure out how to pass ES locale to browser object 
    const browser = await chromium.launch({
      args: ['--lang=es-ES']
    });

    const provincePage = new ProvincePage(page);
    const officePage = new OfficePage(page);
    const citaPreviaInfoPage = new CitaPreviaInfoPage(page);
    const citaPreviaNiePage = new CitaPreviaNiePage(page);
    const citaPreviaAvailabilityPage = new CitaPreviaAvailabilityPage(page);
  


    await provincePage.open();
    await provincePage.selectProvince('Castellón');
    await provincePage.proceedToOfficePage()
    
    await officePage.selectOffice()
    await officePage.selectCardOption()
    await officePage.proceedToCitaPreviaInfoPage()
  
    await citaPreviaInfoPage.proceedToCitaPreviaNiePage()
  
    //TODO: add ability to pass and set env variable to this form
    await citaPreviaNiePage.fillForm('test', 'Test test')
    await citaPreviaNiePage.proceedToCitaPreviaNavigationPage()
  
    await expect(citaPreviaAvailabilityPage.noAvailableCitasBlock).not.toBeVisible({timeout: 20000})
    //TODO: send success message to Telegram that cita is available
  });
} catch {
  // trigger function or cron job to retry the script
  console.log('Cita was not found')
}


