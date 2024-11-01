Cypress.Commands.add('ValidCredentials', () => {
    cy.visit('https://demo.mifos.io/')
    cy.get('[id="uid"]').type('mifos')
    cy.get('[id="pwd"]').type('password')
    cy.get('[id="login-button"]').click()
    cy.contains('Welcome, mifos')

})

Cypress.Commands.add('InvalidPassword', () => {
    cy.visit('https://demo.mifos.io/')
    cy.get('[id="uid"]').type('mifos')
    cy.get('[id="pwd"]').type('pasword')
    cy.get('[id="login-button"]').click()
    cy.get('[ng-show="authenticationFailed"]').contains('Invalid credentials. Please try again.')

})

Cypress.Commands.add('InvalidUsername', () => {
    cy.visit('https://demo.mifos.io/')
    cy.get('[id="uid"]').type('mfos')
    cy.get('[id="pwd"]').type('password')
    cy.get('[id="login-button"]').click()
    cy.get('[ng-show="authenticationFailed"]').contains('Invalid credentials. Please try again.')

})

Cypress.Commands.add('InvalidCredentials', () => {
    cy.visit('https://demo.mifos.io/')
    cy.get('[id="uid"]').type('mfos')
    cy.get('[id="pwd"]').type('pasword')
    cy.get('[id="login-button"]').click()
    cy.get('[ng-show="authenticationFailed"]').contains('Invalid credentials. Please try again.')

})

Cypress.Commands.add('LoanAccount', () => {
    cy.visit('https://demo.mifos.io/')
    cy.get('[id="uid"]').type('mifos')
    cy.get('[id="pwd"]').type('password')
    cy.get('[id="login-button"]').click()
    cy.contains('Welcome, mifos')
    cy.get('li:nth-of-type(11) > .black').click()
    cy.get("li[ng-if='!groupid'] a[class='ng-binding']").click()
    cy.get('tbody [total-items="totalClients"]:nth-of-type(2)').click()
    cy.get('[href="#/newclientloanaccount/10/"]').click()
    cy.get('[id="productId"]').select("Amare Loan")
    cy.get('.chosen-single > span').click()
    cy.get('.chosen-search > input').type('WORKING CAPITAL')
    // cy.get('#externalId').type('12597')
    cy.get('select#loanOfficerId').select("Employee, New")
    cy.get('[id="fundId"]').select("Mid loan funds")
    cy.get('input#expectedDisbursementDate').click()
    cy.get('form[name="Details"] > fieldset > table:nth-of-type(1) > tbody > tr:nth-of-type(3) > td:nth-of-type(4) > .dropdown-menu.ng-empty.ng-scope.ng-valid.ng-valid-date.ng-valid-date-disabled  .ng-isolate-scope.ng-scope > tbody > tr:nth-of-type(6) > .text-center  .ng-binding').click()
    cy.get('.current > .form-inline > fieldset > .btn.pull-right').click()
    cy.get('form[name="Terms"]  .btn.btn-default.pull-right').click()
    cy.get('form[name="Charges"]  .btn.btn-default.pull-right').click()
    cy.get('#save').click()

})

Cypress.Commands.add('LoanApproval', () => {
    cy.visit('https://demo.mifos.io/')
    cy.get('[id="uid"]').type('mifos')
    cy.get('[id="pwd"]').type('password')
    cy.get('[id="login-button"]').click()
    cy.contains('Welcome, mifos')
    cy.get('li:nth-of-type(11) > .black').click()
    cy.get("li[ng-if='!groupid'] a[class='ng-binding']").click()
    cy.get('tbody [total-items="totalClients"]:nth-of-type(2)').click()
    cy.get('[data-ng-show="openLoan"] > tbody > :nth-child(6) > :nth-child(1)').click()
    cy.get('.col-md-12.col-sm-12.primarydiv > .btn-group.pull-right > a:nth-of-type(2)').click()
    cy.get('#note').type('Approved')
    // cy.get('#save').click()



})

Cypress.Commands.add('LoanRepayment', () => {
    cy.visit('https://demo.mifos.io/')
    cy.get('[id="uid"]').type('mifos')
    cy.get('[id="pwd"]').type('password')
    cy.get('[id="login-button"]').click()
    cy.contains('Welcome, mifos')
    cy.get('li:nth-of-type(11) > .black').click()
    cy.get("li[ng-if='!groupid'] a[class='ng-binding']").click()
    cy.get('tbody [total-items="totalClients"]:nth-of-type(2)').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
    cy.get('[data-ng-show="openLoan"] > tbody > :nth-child(2) > :nth-child(1)').click()
    cy.get('.primarydiv > .pull-right > :nth-child(4)').click()
    cy.get('#note').type('Paid')
    // cy.get('#save').click()


})


