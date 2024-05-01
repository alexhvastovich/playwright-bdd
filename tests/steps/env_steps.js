import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';

const { Given, When, Then } = createBdd(test);

// 1. Missing step definition for "tests\features\environment.feature:10:1"
Given('I navigate to home page', async ({ ecomLoginPage, page }) => {
    // await page.pause()
    await ecomLoginPage.navigateToUrl(process.env.URL)

});

// 2. Missing step definition for "tests\features\environment.feature:12:1"
Given('I enter E-Mail Address and Password', async ({ ecomLoginPage }) => {
    await ecomLoginPage.enterEmailAddress(process.env.EMAIL)
    await ecomLoginPage.enterPassword(process.env.PASSWORD)
});