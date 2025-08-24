const { test, expect } = require('@playwright/test');
const { TradeNationHomePage } = require('../pages/TradeNationHomePage');

test.describe('Trade Nation Home Page Tests', () => {

  test('Click on Trade Nation logo', async ({ page }) => {
    const homePage = new TradeNationHomePage(page);

    await homePage.goto();
    await homePage.acceptCookies();

    await homePage.clickLogo();

    await expect(page).toHaveURL(/tradenation\.com/);
  });

  test('Verify page title', async ({ page }) => {
    const homePage = new TradeNationHomePage(page);

    await homePage.goto();
    await homePage.acceptCookies();

    const title = await homePage.getPageTitle();
    console.log("Page Title: ", title);

    await expect(title).toContain('Trade Nation');
  });

});











