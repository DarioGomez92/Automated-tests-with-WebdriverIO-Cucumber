@homeTest
Feature: try different options for the home page

  Background: Open the website
    Given he opens the website to do home page test
    
  Scenario: try to subscription
    Given he tries to subscription with an email
    Then he sees a subscription success message
  
  Scenario: try to use the scroll up arrow
    Given he goes to the bottom of the page and scrolls up to the top using the up arrow
    Then he sees a logo of the website

