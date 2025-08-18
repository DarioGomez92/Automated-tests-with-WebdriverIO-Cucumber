@productsTest
Feature: try diferent type of products

  Background: Open the website
    Given he opens the website to do products test

  Scenario: find women product using the categorys
    Given he goes to the products page
    When he tries search the tops women category
    Then he finds a especific top

  Scenario: find men product using the categorys
    Given he goes to the products page
    When he tries search the jeans men category
    Then he finds a especific jean

  Scenario: find kids product using the categorys
    Given he goes to the products page
    When he tries search the dress kids category
    Then he finds a especific dress
  
  Scenario: find madame products using the brands
    Given he goes to the products page
    When he tries search the madame products
    Then he finds a especific madame product

  Scenario: find babyhug products using the brands
    Given he goes to the products page
    When he tries search the babyhug products
    Then he finds a especific babyhug product

  Scenario: find biba products using the brands
    Given he goes to the products page
    When he tries search the biba products
    Then he finds a especific biba product

  Scenario: look one view product from women category
    Given he goes to the products page
    When he tries to search for a product from the womens category
    Then he sees at the product view

  Scenario: look one view product from men category
    Given he goes to the products page
    When he tries to find a product in the mens category
    Then he views the product and finds the add to cart button

  Scenario: send a message about a product
    Given he goes to the products page
    When he tries to search for a product from the womens category and sends a success message
    Then he sees a success alert

  Scenario: send a empty message about a product
    Given he goes to the products page
    When he he tries to search for a product from the womens category and sends a empty message
    Then he sees a success alert