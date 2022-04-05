import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = 'http://admin-staging.aonewallet.com/'
Given ('admin is logged in to wallet staging site', () => {
    cy.visit(url); 
    cy.get('[name="username"]').type('admin117');
    cy.get('[name="password"]').type('password');
    cy.get('[data-target="signin-button"]').click();
    cy.get('.sc-eZuTdo').should('exist');
  })

//Scenario: Admin views Account Management
When('admin clicks operators-account management',() => {
  cy.get('[title="Operators"]').click();
  cy.get('[id="operators$Menu"]').should('exist');
  cy.get('.ant-menu-item').contains('Account Management').click();
})

Then('admin can view the account management page', () => {
  cy.get('.sc-erkbxa').should('exist');
  cy.get('.d-flex').should('exist');
})

//Scenario: Admin views Permission Group
When('admin clicks operators-permission group',() => {
  cy.get('[title="Operators"]').click();
  cy.get('[id="operators$Menu"]').should('exist');
  cy.get('.ant-menu-item').contains('Permission Group').click();
})

Then('admin can view the permission group page', () => {
  cy.get('.ant-table-tbody').should('exist');
  cy.get('.sidebar-shrink').should('exist');
})

//Scenario: Admin views Member Management
When('admin clicks members-member management',() => {
    cy.get('[title="Members"]').click();
    cy.get('[id="members$Menu"]').should('exist');
    cy.get('.ant-menu-item').contains('Member Management').click();
  })

  Then('admin can view the member management page', () => {
    cy.get('#members-table').should('exist');
    cy.get('.sidebar-left-nav').should('exist');
  })

//Scenario: Admin views member marker management
When('admin clicks members-member marker management',() => {
  cy.get('[title="Members"]').click();
  cy.get('[id="members$Menu"]').should('exist');
  cy.get('.ant-menu-item').contains('Member Marker Management').click();
})

Then('admin can view the member marker management page', () => {
  cy.get('.ant-table-tbody').should('exist');
  cy.get('.sidebar-shrink').should('exist');
})

//Scenario: Admin views label management
When('admin clicks members-label management',() => {
  cy.get('[title="Members"]').click();
  cy.get('[id="members$Menu"]').should('exist');
  cy.get('.ant-menu-item').contains('Label Management').click();
})

Then('admin can view the label management page', () => {
  cy.get('[type="button"]').contains('Create new label').should('exist');
})

//Scenario: Admin views members online
When('admin clicks members-members online',() => {
  cy.get('[title="Members"]').click();
  cy.get('[id="members$Menu"]').should('exist');
  cy.get('.ant-menu-item').contains('Members Online').click();
})

Then('admin can view the members online page', () => {
  cy.get('.ant-table-wrapper').should('exist');
})

//Scenario: Admin views profile setting
When('admin clicks members-profile setting',() => {
  cy.get('[title="Members"]').click();
  cy.get('[id="members$Menu"]').should('exist');
  cy.get('.ant-menu-item').contains('Profile Setting').click();
})

Then('admin can view the profile setting page', () => {
  cy.get('#members-table').should('exist');
  cy.get('.sidebar-left-nav').should('exist');
})

//Scenario: Admin views member management config
When('admin clicks members-member management config',() => {
  cy.get('[title="Members"]').click();
  cy.get('[id="members$Menu"]').should('exist');
  cy.get('.ant-menu-item').contains('Member Management Config').click();
})

Then('admin can view the member management config page', () => {
  cy.get('#members-table').should('exist');
  cy.get('.sidebar-left-nav').should('exist');
})

