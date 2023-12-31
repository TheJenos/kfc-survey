describe('Redeem kfc survey', () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
  })

  it('Redeem', () => {
    cy.visit("https://s.kfcvisit.com/lka?AspxAutoDetectCookieSupport=1")
    cy.get('#InputCouponNum').type(Cypress.env('COUPON'))
    cy.get('#NextButton').click()
    cy.get('#FNSR001000 > .rbListContainer > .rbList > .Opt1 > .radioButtonHolder > .radioSimpleInput').click()
    cy.get('.Opt6 > .radioButtonHolder > .radioSimpleInput').click()
    cy.get('#NextButton').click()
    cy.get('.Opt5 > .radioSimpleInput').click()
    cy.get('#NextButton').click()
    cy.get('#FNSR020000 > .Opt5 > .radioSimpleInput').click()
    cy.get('#FNSR009000 > .Opt5 > .radioSimpleInput').click()
    cy.get('#FNSR000133 > .Opt5 > .radioSimpleInput').click()
    cy.get('#FNSR013000 > .Opt5 > .radioSimpleInput').click()
    cy.get('#FNSR024000 > .Opt5 > .radioSimpleInput').click()
    cy.get('#FNSR007000 > .Opt5 > .radioSimpleInput').click()
    cy.get('#FNSR032000 > .Opt5 > .radioSimpleInput').click()
    cy.get('#NextButton').click()
    cy.get('.Opt2 > .radioSimpleInput').click()
    cy.get('#NextButton').click()
    cy.get('#S081000').type("Grate price and Grate food")
    cy.get('#NextButton').click()
    cy.get('.Opt2 > .radioSimpleInput').click()
    cy.get('#NextButton').click()
    cy.get('.ValCode').should('have.value', 'Code')
    cy.screenshot()
  })
})