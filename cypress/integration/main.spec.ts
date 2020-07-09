
describe('Main', function() {

  it('Homepage has "ngExcel" header text', () => {
    cy.visit('http://localhost:4200/')

    cy.contains('ngExcel')
  })
  
})