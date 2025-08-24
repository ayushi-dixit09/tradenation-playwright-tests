class TradeNationLoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = ('#username');
    this.passwordInput = ('#password');
    this.loginBtn = ('#login');
    this.errorMessage = page.locator('text=Wrong email or password');
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

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginBtn);
  }

  async getErrorMessage() {
    return await
    this.errorMessage.textContent();
    
  }
}

module.exports = { TradeNationLoginPage };