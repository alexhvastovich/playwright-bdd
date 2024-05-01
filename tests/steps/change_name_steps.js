import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture.js';

const { Given, When, Then } = createBdd(test); 

// 1. Missing step definition for "tests\features\change_name.feature:12:5"
When('I click on Edit your account information', async ({ecomChangePage}) => {
  await ecomChangePage.clickOnEditAccount();
});

// 2. Missing step definition for "tests\features\change_name.feature:13:5"
When('I change first name to {string}', async ({ecomChangePage}, firstname) => {
  await ecomChangePage.changeFirstName(firstname);
});

// 3. Missing step definition for "tests\features\change_name.feature:14:5"
When('I change last name to {string}', async ({ecomChangePage}, lastname) => {
  await ecomChangePage.changeLastName(lastname);
});

// 4. Missing step definition for "tests\features\change_name.feature:15:5"
When('I click on continue button', async ({ecomChangePage}) => {
    await ecomChangePage.clickOnContinue();
});

// 5. Missing step definition for "tests\features\change_name.feature:16:5"
Then('I should see the success message {string}', async ({ecomChangePage}, message) => {
    await ecomChangePage.verifySuccessMessage(message);
});
