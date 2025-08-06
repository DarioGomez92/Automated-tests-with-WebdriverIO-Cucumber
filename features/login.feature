@loginTest
Feature: try diferent type of logins

  Background: Open the website
    Given he opens the website to do login test

  Scenario: try a good login
    Given he goes to the login page
    When he tries to login with correct user
    Then he sees a logout button

  Scenario: try a bad login
    Given he tries to loogout and login with incorrect user
    Then he sees a incorrect login message
