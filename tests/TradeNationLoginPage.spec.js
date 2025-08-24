const { test, expect } = require('@playwright/test');
const { TradeNationLoginPage } = require('../pages/TradeNationLoginPage');

test.describe('Trade Nation Login Tests', () => {

  test('Invalid login should show error message', async ({ page }) => {
    const loginPage = new TradeNationLoginPage(page);

    await loginPage.goto();
    await loginPage.acceptCookies();

    await loginPage.login('user@email.com', 'wrongpassword123');

    const error = await loginPage.getErrorMessage();
    console.log("Error Message: ", error);

    await expect(error).toContain('Wrong email or password');
  });

});
