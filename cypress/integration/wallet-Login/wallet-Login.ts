import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = 'http://admin-staging.aonewallet.com/'
Given('browser is at Onewallet admin staging site', () => {
  cy.visit(url);
  cy.location().should((loc) => {
    expect(loc.href).to.eq(url + 'signin');
  });
  cy.title().should('include', 'Onewallet');
  cy.get('[name="username"]').should('exist');
  cy.get('[name="password"]').should('exist');
  cy.get('.ant-btn').contains('Sign in as Operator').should('exist');
  cy.get('[data-target="signin-button"]').should('exist');
})

//Scenario: Sign In validation for invalid signin
When('admin clicks Signin button with both username and password fields blank', () => {
  cy.get('[name="username"]').clear();
  cy.get('[name="password"]').clear();
  cy.get('[data-target="signin-button"]').click();
})

Then('validation error messages for blank username and password appears', () => {
  cy.get('.ant-legacy-form-explain').contains('Please enter your Username');
  cy.get('.ant-legacy-form-explain').contains('Please enter your Password');
})

//Scenario: Sign In validation wrong username or password
When('admin signs in with wrong username or password', () => {
  cy.get('[name="username"]').type('wrong');
  cy.get('[name="password"]').type('wrong');
  cy.get('[data-target="signin-button"]').click();
})

Then('an error message pops up "Invalid Username or Password"', () => {
  cy.get('.ant-message-notice').contains('Invalid username or password');
})

//Scenario: Log in successful
When('admin enters correct username and password',() => {
  cy.get('[name="username"]').type('admin117');
  cy.get('[name="password"]').type('password');
  cy.get('[data-target="signin-button"]').click();
})

Then('admin signs in successfully and redirects to default page', () => {
  cy.location().should((loc) => {
    expect(loc.href).to.eq(url);
  });
  cy.get('[data-target="profile-username"]').contains('admin117');
  cy.get('[role="menuitem"]').contains('Dashboard');
})

