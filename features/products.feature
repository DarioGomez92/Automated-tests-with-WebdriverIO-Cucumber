@productsTest
Feature: try diferent type of products

  Background: Open the website
    Given he opens the website to do products test

  Scenario: find women product using the categorys
    Given he goes to the products page
    When he tries search the tops women category
    Then he founds a especific top

  Scenario: find men product using the categorys
    Given he goes to the products page
    When he tries search the jeans men category
    Then he founds a especific jean

  Scenario: find kids product using the categorys
    Given he goes to the products page
    When he tries search the dress kids category
    Then he founds a especific dress
