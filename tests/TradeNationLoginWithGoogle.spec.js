const { test, expect } = require('@playwright/test');
const { TradeNationLoginWithGoogle } = require('../pages/TradeNationLoginWithGoogle');

test.describe('Login with Google - Invalid Login Test', () => {

    test('Should show error for invalid Google login', async ({ page }) => {
        const loginGoogle = new TradeNationLoginWithGoogle(page);

        // Step 1: Open site
        await loginGoogle.goto();
        await loginGoogle.acceptCookies();


        // Step 2: Navigate to Google login
        await loginGoogle.navigateToGoogleLogin();

        // Step 3: Try invalid login
        const popup = await loginGoogle.invalidGoogleLogin('wrongemail@gmail.com', 'wrongpassword');

        // Step 4: Validate error message
        const errorMessage = await loginGoogle.getErrorMessage(popup);
        console.log('Error Message:', errorMessage);

        await expect(popup.locator('div.o6cuMc')).toBeVisible();
    });

});
