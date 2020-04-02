describe('User Can Navigate', () => {
  before('', () => {
    cy.viewport('iphone-x')
    cy.visit('http://localhost:19006/')
  })

  it('Between Default Screens', () => {
    cy.get('body').should('contain', 'How to get started')

    cy.get('div').contains('Resources').click()
    cy.get('body').should('contain', 'Links to learn more')
  });
});