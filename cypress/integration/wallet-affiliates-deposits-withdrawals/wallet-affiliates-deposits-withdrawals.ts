import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = 'http://admin-staging.aonewallet.com/'
Given ('admin is logged in to wallet staging site', () => {
    cy.visit(url); 
    cy.get('[name="username"]').type('admin117');
    cy.get('[name="password"]').type('password');
    cy.get('[data-target="signin-button"]').click();
    cy.get('.sc-eZuTdo').should('exist');
  })

//Scenario: Admin views Affiliate Programme
When('admin clicks affiliates-affiliate programme',() => {
  cy.get('[title="Affiliates"]').click();
  cy.get('[id="affiliates$Menu"]').should('exist');
  cy.get('.ant-menu-item').contains('affiliate programme').click();
})

Then('admin can view the affiliate programme page', () => {
  cy.get('.sc-erkbxa').should('exist');
  cy.get('.d-flex').should('exist');
})