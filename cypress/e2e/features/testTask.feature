Feature: Test task for Gemicle

  Scenario: Application login negative
    Given I successfully browse to the application
    When I input username "standard_user"
    When I input password "1234"
    When I try to login
    Then I receive error message that starts from "Epic sadface"

  Scenario: Application login positive
    Given I successfully browse to the application
    When I input username "standard_user"
    When I input password "secret_sauce"
    When I try to login
    Then I redirect to inventory page

  Scenario: Add goods to cart
    Given I successfully logged in the application
    When I add to cart Sauce Labs Backpack
    When I redirect to cart page
    Then I see Sauce Labs Backpack at this page

  Scenario: Remove goods from a cart
    Given I successfully logged in the application
    Given I added Sauce Labs Backpack to the cart
    Given I redirected to cart page
    When I remove Sauce Labs Backpack
    Then the cart is empty