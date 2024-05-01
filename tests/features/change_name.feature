Feature: Change Name

Scenario: Verify user is able to change name
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    And I click on My account
    And I enter E-Mail Address "pranav@testroverautomation.com"
    And I enter password "Test1234"
    When I click on submit button
    Then I should verify url contains "route=account/account"
    When I click on Edit your account information
    And I change first name to "SRK"
    And I change last name to "Jawaan"
    And I click on continue button
    Then I should see the success message "Success: Your account has been successfully updated."