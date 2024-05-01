/** Generated from: tests\features\change_name.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("Change Name", () => {

  test("Verify user is able to change name", async ({ Given, ecomLoginPage, And, When, Then, ecomChangePage }) => {
    await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage });
    await And("I click on My account", null, { ecomLoginPage });
    await And("I enter E-Mail Address \"pranav@testroverautomation.com\"", null, { ecomLoginPage });
    await And("I enter password \"Test1234\"", null, { ecomLoginPage });
    await When("I click on submit button", null, { ecomLoginPage });
    await Then("I should verify url contains \"route=account/account\"", null, { ecomLoginPage });
    await When("I click on Edit your account information", null, { ecomChangePage });
    await And("I change first name to \"SRK\"", null, { ecomChangePage });
    await And("I change last name to \"Jawaan\"", null, { ecomChangePage });
    await And("I click on continue button", null, { ecomChangePage });
    await Then("I should see the success message \"Success: Your account has been successfully updated.\"", null, { ecomChangePage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\change_name.feature"),
});

const testMetaMap = {
  "Verify user is able to change name": {"pickleLocation":"3:1"},
};