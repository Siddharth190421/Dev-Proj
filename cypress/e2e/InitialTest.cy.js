

describe('template spec', () => {

  it('passes', () => {

    cy.visit('http://localhost:4200/')
    cy.get('.select-button').click({force:true})
    cy.contains('Dark').click()


  })

  it('Fails', () => {

    cy.visit('http://localhost:4200/')
    cy.get('.select-button').click({force:true})
    cy.contains('Out').click()


  })


})