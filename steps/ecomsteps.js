import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I navigate to {string}', async ({ page }, url) => {
    await page.goto(url)
});

Given('I click on {string}', async ({ page },  My_account) => {
    await page.getByRole('button', { name: My_account }).click()
});

Given('I enter E-Mail Address {string}', async ({ page }, email_address) => {
    await page.getByPlaceholder('E-Mail Address').fill(email_address)
});

Given('I enter password {string}', async ({ page }, password) => {
    await page.getByPlaceholder('Password').fill(password)
});

When('I click on submit button', async ({ page }) => {
    await page.locator("input[value='Login']").click()
});

Then('I should verify url contains {string}', async ({ page }, logger_url) => {
    await expect(page).toHaveURL(new RegExp(logger_url))
});

Then('I should verify user is not able to login and url contains {string}', async ({page}, logger_url) => {
    await expect(page).toHaveURL(new RegExp(logger_url))
  });