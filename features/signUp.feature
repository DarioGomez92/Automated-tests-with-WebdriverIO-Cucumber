@signUpTest
Feature: try diferent type of sign up

  Background: Open the website
    Given he opens the website to do sign up test

  Scenario: try a good sign up
    Given he tries to acept cookies and register with good name and email
    When he completes all the details on the form
    Then he sees a success message

  Scenario: try a sign up with a same email
    Given he tries to register with a name and email already registered
    Then he sees a error message

  Scenario: try a sign up whit a long name
    Given he tries to register with a long name
    Then he can sign up

  Scenario: try a sig up with incorrect email format
    Given he tries to register with a incorrect email format
    Then he can sign up

  Scenario: try a sig up with only spaces in the name
    Given he tries to register with only spaces in the name
    Then he can sign up

  Scenario: try a complete the form of sing up with only obligatory datas
    Given he tries to register with good name and email
    When he tries to complete the form with only obligatory datas
    Then he sees a success message

  Scenario: try a complete the form of sing up only with only spaces on the inputs
    Given he logs out and tries to register with good name and email
    When he tries to complete the form with only spaces on the inputs
    Then he sees a success message

  Scenario: try to create an account and then delete it
    Given he logs out and tries to register with good name and email
    When he tries to complete the form with only obligatory datas and go to the homepage
    And he tries to delete the account
    Then he sees a success delete message