#  TradeNation Playwright Tests for Assesment

This project contains automated tests for the TradeNation website using **Playwright** and **JavaScript** with **Page Object Model (POM)**.

---

#  Prerequisites

-  VS Code
- Node.js (v16 or above)
- npm (v8 or above)
- Git (for version control)

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tradenation-playwright-tests.git
cd tradenation-playwright-tests




npm install

3. Install Playwright browsers:



npx playwright install


---

Project Structure

/pages
    TradeNationHomePage.js           # POM for Home Page
    TradeNationLoginPage.js          # POM for Login Page
/tests
    TradeNationHomePage.spec.js      # Positive test
    TradeNationLoginPage.spec.js       # Negative test
playwright.config.js
package.json
README.md


---

Running Tests

1. Run all tests:



npx playwright test

2. Run a single test:



npx playwright test tests/TradeNationHomePage.js
npx playwright test tests/TradeNationLoginpage.js

3. Run tests in headed mode (playwright runner visible):



npx playwright test --ui

4. Run tests in a specific browser:



npx playwright test --headed --project=chromium


---

Tests Details

Test 1: TradeNationHomePage (Positive Test)

Open https://tradenation.com/en-gb/markets/#forex

Click on the Trade Nation logo

Verify the current page title


Test 2: TradeNationLoginPage (Negative Test)

Click on "Sign up / Log in"

Click on "Log in here"


Enter invalid credentials

Verify validation error message

Desktop viewport: 1280x800



---

Notes

All tests use Page Object Model for maintainability.

Designed to run in desktop viewport for responsive testing.
