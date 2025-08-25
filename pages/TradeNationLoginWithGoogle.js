class TradeNationLoginWithGoogle {
    constructor(page) {
        this.page = page;
        this.googleLoginButton = page.locator('text=Log in with Google');
        this.emailInput = page.locator('input[type="email"]');   // Google email field
        this.nextButton = page.locator('.VfPpkd-vQzf8d'); // Google next button
        this.passwordInput = page.locator('input[type="password"]');
        this.errorMessage = page.locator('div.o6cuMc'); // Google invalid login error
        this.acceptCookiesBtn = '#onetrust-accept-btn-handler';
    }

    async goto() {
        await this.page.goto('https://tradenation.com/login');
    }

    async acceptCookies() {
    if (await this.page.locator(this.acceptCookiesBtn).isVisible()) {
      await this.page.click(this.acceptCookiesBtn);
    }
  }

    async navigateToGoogleLogin() {
        
        await this.googleLoginButton.click();
    }

    async invalidGoogleLogin(email, password) {
        
        const popup = await this.page.waitForEvent('popup');
        await popup.locator('input[type="email"]').fill(email);
        await popup.locator('.VfPpkd-vQzf8d').click();

        // Wait for password field
        await popup.locator('input[type="password"]').fill(password);
        await popup.locator('.VfPpkd-vQzf8d').click();

        return popup;
    }

    async getErrorMessage(popup) {
        return await popup.locator('div.o6cuMc').textContent(); // Google invalid login error text
    }
}

module.exports = { TradeNationLoginWithGoogle };
