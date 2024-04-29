/** Generated from: features\ecomlogin.feature */
import { test } from "playwright-bdd";

test.describe("Verify login", () => {

  test("Verify user is able to login with valid credentials", async ({ Given, page, And, When, Then }) => {
    await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { page });
    await And("I click on \" My account\"", null, { page });
    await And("I enter E-Mail Address \"pranav@testroverautomation.com\"", null, { page });
    await And("I enter password \"Test1234\"", null, { page });
    await When("I click on submit button", null, { page });
    await Then("I should verify url contains \"route=account/account\"", null, { page });
  });

  test.describe("verify user is not able to login with following credentials", () => {

    test("Example #1", async ({ Given, page, And, When, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { page });
      await And("I click on \" My account\"", null, { page });
      await And("I enter E-Mail Address \"xzy@gmail.com\"", null, { page });
      await And("I enter password \"TesMeTest\"", null, { page });
      await When("I click on submit button", null, { page });
      await Then("I should verify user is not able to login and url contains \"route=account/login\"", null, { page });
    });

    test("Example #2", async ({ Given, page, And, When, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { page });
      await And("I click on \" My account\"", null, { page });
      await And("I enter E-Mail Address \"srk@gogo.com\"", null, { page });
      await And("I enter password \"What is this\"", null, { page });
      await When("I click on submit button", null, { page });
      await Then("I should verify user is not able to login and url contains \"route=account/login\"", null, { page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\ecomlogin.feature"),
});

const testMetaMap = {
  "Verify user is able to login with valid credentials": {"pickleLocation":"4:3"},
  "verify user is not able to login with following credentials|Example #1": {"pickleLocation":"23:5"},
  "verify user is not able to login with following credentials|Example #2": {"pickleLocation":"24:5"},
};