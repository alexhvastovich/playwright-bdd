/** Generated from: tests\features\environment.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("Verify login with different environment", () => {

  test("Verify user is able to login with qa", async ({ Given, ecomLoginPage, page, And, When, Then }) => {
    await Given("I navigate to home page", null, { ecomLoginPage, page });
    await And("I click on My account", null, { ecomLoginPage });
    await And("I enter E-Mail Address and Password", null, { ecomLoginPage });
    await When("I click on submit button", null, { ecomLoginPage });
    await Then("I should verify url contains \"route=account/account\"", null, { ecomLoginPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\environment.feature"),
});

const testMetaMap = {
  "Verify user is able to login with qa": {"pickleLocation":"9:1"},
};