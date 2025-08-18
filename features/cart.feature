@cartTest
Feature: try different options for the cart

  Background: Open the website
    Given he opens the website to do cart test

  Scenario: try to add a product to the cart
    Given he goes to the products page to add product to the cart
    When he adds a product to the cart
    Then he sees a pop-up window with a success message

  Scenario: try to add some product to the cart
    Given he goes to the products page to add product to the cart
    When he adds four product to the cart clicking on the button continue shopping
    Then he sees four product in the cart

  Scenario: try to proceed to checkout without logging in
    Given he goes to the products page to add product to the cart
    When he adds a product to the cart and tries to proceed to checkout
    Then he sees a message to logging in first

  Scenario: try to proceed to checkout with logging in
    Given he logging in and goes to the products page to add product to the cart
    When he adds a product to the cart and tries to proceed to checkout
    Then he sees a page with address details

  Scenario: try to place order
    Given he logging in and goes to the products page to add product to the cart
    When he adds a product to the cart and tries to place an order
    Then he sees a page with a confirmation message