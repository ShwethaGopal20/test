/// <reference types="cypress"/>


describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/');

      cy.title().should('include', 'Swag Labs');

      cy.get('[data-test="username"]').type('standard_user');

      cy.get('[data-test="password"]').type('secret_sauce');

      cy.get('[data-test="login-button"]').click();

      cy.get('#item_4_img_link > .inventory_item_img').click(); //clicking on one particular image

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); //adding it to cart

      cy.get('[data-test="remove-sauce-labs-backpack"]').click(); //removeing from the cart
    })
  })