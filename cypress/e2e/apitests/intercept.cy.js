Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test on uncaught exceptions
    return false;
  });

/// <reference types="cypress"/>

describe('intercept with cypress examples', () => {

    it('Test API with simple intercept',function()
    {
      
        cy.visit('https://jsonplaceholder.typicode.com');
        cy.intercept(
        {
            path: '/posts',
        }).as('Posts');
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click();
        cy.wait('@Posts').then((inter) =>
            {
                cy.log(JSON.stringify(inter));
                console.log(JSON.stringify(inter));
            })
    })
})