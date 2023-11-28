/// <reference types="cypress" />

const perfil = require('../fixtures/login.json')

const site = require('../fixtures/baseUrl.json')

context('Funcionalidade Login', () => {

    beforeEach(() => {
        
        cy.visit(site.minhaConta)
    });

    it('Deve fazer login com sucesso', () => {
 
        cy.get('#username').type(perfil.login, {log: false})
        cy.get('#password').type(perfil.Senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        
    });

    it('Deve aparecer um erro de e-mail não cadastrado', () => {

        cy.get('#username').type(perfil.loginErrado)
        cy.get('#password').type(perfil.Senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        
    });

    it('Deve aparecer um erro de senha incorreta', () => {

        cy.get('#username').type(perfil.login)
        cy.get('#password').type(perfil.SenhaIncorreta, {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail ls.teste@teste.com está incorreta. Perdeu a senha?')

        
    });
});