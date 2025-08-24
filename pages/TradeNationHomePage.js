class TradeNationHomePage {
  constructor(page) {
    this.page = page;
    this.logo = ('[data-testid="logo"]');   // logo selector
    this.acceptCookiesBtn = '#onetrust-accept-btn-handler';
  }

  async goto() {
    await this.page.goto('https://tradenation.com/en-gb/markets/#forex');
  }

  async acceptCookies() {
    if (await this.page.locator(this.acceptCookiesBtn).isVisible()) {
      await this.page.click(this.acceptCookiesBtn);
    }
  }

  async clickLogo() {
    await this.page.click(this.logo);
  }

  async getPageTitle() {
    return this.page.title();
  }
}

module.exports = { TradeNationHomePage };







