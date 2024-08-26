import { test, expect } from '@playwright/test';
import { ProvincePage } from '../pages/province';

test.describe('Check cita availability', () => {
  test('Select province', async ({ page }) => {
    const provincePage = new ProvincePage(page);
    await provincePage.open();
    await provincePage.selectProvince('Castellón');
    await page.pause();
  });
})

