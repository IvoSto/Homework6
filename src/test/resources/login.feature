Feature: Customer Login
  As a client,
  I want to login

  @success
  Scenario: Valid Login
    Given the user is on Login page
    When he enters "admin" as username
    And he enters "parola123!" as password
    And he submits request for login
    Then ensure the user is successfully logged in

  @fail1
  Scenario: Invalid Login
    Given the user is on Login page
    When he enters "user" as username
    And he enters "parola" as password
    And he submits request for login
    Then ensure a login failure message "Invalid token session. Please login again." is displayed

  @fail2
  Scenario: Invalid Login
    Given the user is on Login page
    When he enters "u" as username
    And he enters "p" as password
    And he submits request for login
    Then ensure a login failure message "Invalid token session. Please login again." is displayed


  @loginTest @wip
  Scenario Outline: Login negative
    Given the user is on Login page
    When he enters "<username>" as username
    And he enters "<password>" as password
    And he submits request for login
    Then ensure a login failure message "<expected_failure_message>" is displayed
    Examples:
      | username | password | expected_failure_message                   |
      | user     | parola   | Invalid token session. Please login again. |
      | u        | p        | Invalid token session. Please login again. |