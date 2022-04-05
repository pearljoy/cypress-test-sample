import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = 'http://admin-staging.aonewallet.com/'
Given ('admin is logged in to wallet staging site', () => {
    cy.visit(url); 
    cy.get('[name="username"]').type('admin117');
    cy.get('[name="password"]').type('password');
    cy.get('[data-target="signin-button"]').click();
    cy.get('.sc-eZuTdo').should('exist');
  })

  //Scenario: Admin views member access audit history
When('admin clicks members-member reports-member access audit history',() => {
    cy.get('[title="Members"]').click();
    cy.get('[id="members$Menu"]').should('exist');
    cy.get('.ant-menu-submenu-title').contains('Member Reports').click();
    cy.get('[id="member-reports$Menu"]').should('exist').should('be.visible');
    cy.get('[role="menuitem"]').contains('Member Access Audit History').click();
  })
  
  Then('admin can view the member access audit history page', () => {
    cy.get('#members-table').should('exist');
    cy.get('.sidebar-left-nav').should('exist');
  })