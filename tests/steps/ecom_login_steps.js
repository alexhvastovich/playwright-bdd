import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture.js'

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ ecomLoginPage }, url) => {
    await ecomLoginPage.navigateToUrl(url)
});

Given('I click on My account', async ({ ecomLoginPage }) => {
    await ecomLoginPage.clickOnMyAccount()
});

Given('I enter E-Mail Address {string}', async ({ ecomLoginPage }, email_address) => {
    await ecomLoginPage.enterEmailAddress(email_address)
});

Given('I enter password {string}', async ({ ecomLoginPage }, password) => {
    await ecomLoginPage.enterPassword(password)
});

When('I click on submit button', async ({ ecomLoginPage }) => {
    await ecomLoginPage.clickOnSubmit()
});

Then('I should verify url contains {string}', async ({ ecomLoginPage }, logger_url) => {
    await ecomLoginPage.verifyUserLandOnAccountPage(logger_url)
});

Then('I should verify user is not able to login and url contains {string}', async ({ecomLoginPage}, login_url) => {
    await ecomLoginPage.verifyUserIsNotAbleToLogin(login_url)
  });