import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://admin-staging.aonewallet.com/'
Given('I open Wallet Staging admin site', () => {
  cy.visit(url)
})

Then('I see the Login input fields', () => {
    cy.title().should('include', 'Onewallet')
})

// describe('Loading Wallet Staging Admin site', () => {
//   beforeEach(() => {
  
//     cy.visit('http://admin-staging.aonewallet.com/')
//   })

//   it('Wallet title is showing', () => {
//     cy.title().should('include', 'Onewallet')
//   })
// })