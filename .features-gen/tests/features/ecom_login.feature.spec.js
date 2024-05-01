/** Generated from: tests\features\ecom_login.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("Verify login", () => {

  test("Verify user is able to login with valid credentials", async ({ Given, ecomLoginPage, And, When, Then }) => {
    await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage });
    await And("I click on My account", null, { ecomLoginPage });
    await And("I enter E-Mail Address \"pranav@testroverautomation.com\"", null, { ecomLoginPage });
    await And("I enter password \"Test1234\"", null, { ecomLoginPage });
    await When("I click on submit button", null, { ecomLoginPage });
    await Then("I should verify url contains \"route=account/account\"", null, { ecomLoginPage });
  });

  test.describe("verify user is not able to login with following credentials", () => {

    test("Example #1", async ({ Given, ecomLoginPage, And, When, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage });
      await And("I click on My account", null, { ecomLoginPage });
      await And("I enter E-Mail Address \"xzy@gmail.com\"", null, { ecomLoginPage });
      await And("I enter password \"TesMeTest\"", null, { ecomLoginPage });
      await When("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to login and url contains \"route=account/login\"", null, { ecomLoginPage });
    });

    test("Example #2", async ({ Given, ecomLoginPage, And, When, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage });
      await And("I click on My account", null, { ecomLoginPage });
      await And("I enter E-Mail Address \"srk@gogo.com\"", null, { ecomLoginPage });
      await And("I enter password \"What is this\"", null, { ecomLoginPage });
      await When("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to login and url contains \"route=account/login\"", null, { ecomLoginPage });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\ecom_login.feature"),
});

const testMetaMap = {
  "Verify user is able to login with valid credentials": {"pickleLocation":"4:3"},
  "verify user is not able to login with following credentials|Example #1": {"pickleLocation":"22:7"},
  "verify user is not able to login with following credentials|Example #2": {"pickleLocation":"23:7"},
};