Feature: try diferent type of logins

  Background: Open the website
    Given he opens the website

  Scenario: try a good login
    Given he try to login with correct user
    Then he sees a logout button