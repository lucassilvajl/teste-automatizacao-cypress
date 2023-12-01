// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuário, senha) => {

    cy.get('#username').type(usuário)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()

})

Cypress.Commands.add('cadastro', (usuário, senha, nome, sobrenome) => {

    cy.get('#reg_email').type(usuário)
    cy.get('#reg_password').type(senha, {log: false})
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()

})

Cypress.Commands.add('edit_endereco', (usuário, senha) => {

    cy.get('#username').type(usuário)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(1) > .title > .edit').click()

})