Feature: View a List of Items

  Scenario: User views a list of items
    Given the user is on the home page
    When the user clicks on the "List of Items" link
    Then the user should see a list of items in a table format

  Scenario: No items found
    Given the user is on the home page
    When the user clicks on the "List of Items" link
    Then the user should see a message "No items found"

  Scenario: Error retrieving items
    Given the user is on the home page
    When the user clicks on the "List of Items" link
    And there is an error retrieving items from the server
    Then the user should see an error message