describe('Mifos', () => {

  it('Verify user is able to login with valid username and valid password', () => {
    cy.ValidCredentials()
  })

  it('Verify user is not able to Login with valid username and invalid password', () => {
    cy.InvalidPassword()
  })

  it('Verify user is not able to Login with invalid username and valid password', () => {
    cy.InvalidUsername()
  })

  it('Verify user is not able to Login with invalid username and invalid password', () => {
    cy.InvalidCredentials()
  })

  it('Verify user is able to create a loan account for a client', () => {
    cy.LoanAccount()
  })

  it('Verify user is able to approve a loan application', () => {
    cy.LoanApproval()
  })

  it('Verify user is able to initiate loan repayment', () => {
    cy.LoanRepayment()
  })
  
})