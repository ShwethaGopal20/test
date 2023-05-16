/// <reference types="cypress"/>

describe('sauce demo website', () => {
    it('negative cases', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.title().should('include', 'Swag Labs');
      cy.get('[data-test="username"]').type('shwetha');
      cy.get('[data-test="password"]').type('shwetha@123');
      cy.get('[data-test="login-button"]').click();
      cy.get('#error-message').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    })
  })
