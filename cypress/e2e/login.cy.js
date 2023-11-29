/// <reference types="cypress" />

const perfil = require('../fixtures/login.json')

const site = require('../fixtures/baseUrl.json')

context('Funcionalidade Login', () => {

    beforeEach(() => {
        
        cy.visit(site.minhaConta)
        
    });

    it('Deve fazer login com sucesso', () => {
        
        cy.login(perfil.login, perfil.Senha)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        
    });

    it('Deve aparecer um erro de e-mail não cadastrado', () => {

        cy.login(perfil.loginErrado, perfil.Senha)
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        
    });

    it('Deve aparecer um erro de senha incorreta', () => {

       cy.login(perfil.login, perfil.SenhaIncorreta)
        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')

        
    });
});