// Write step definitions using const { When, Then } = require("@badeball/cypress-cucumber-preprocessor"); for feature "Feature: View a List of Items
// Here is the updated step definitions with Cypress commands for each step:

const {When, Then, Given} = require("@badeball/cypress-cucumber-preprocessor");
//const linkText: String = "List of Items"

Given('the user is on the home page', () => {
    cy.visit('http://127.0.0.1:5173/');
});

/*When('the user clicks on the {List of Items} link', (linkText: any) => {
    cy.contains('a', 'List of Items').click();
}); */

When(/^the user clicks on the "List of Items" link$/, function () {
    cy.get("a#listOfItems").click();
});
Then(/^the user is redirected to the list of items page$/, function () {
    // Check that the user is redirected to the list of items page
    cy.url().should("include", "/items");
});

Then('the user should see a list of items in a table format', () => {
    cy.get('table').should('be.visible');
});

