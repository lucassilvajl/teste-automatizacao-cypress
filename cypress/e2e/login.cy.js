/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    it('Deve fazer login com sucesso', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ls.teste@teste.com')
        cy.get('#password').type('teste@teste.ls1234', {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        
    });

    it('Deve aparecer um erro de e-mail não cadastrado', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ls_teste@teste.com')
        cy.get('#password').type('teste@teste.ls1234', {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        
    });

    it('Deve aparecer um erro de senha incorreta', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ls.teste@teste.com')
        cy.get('#password').type('teste.teste.ls1234', {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail ls.teste@teste.com está incorreta. Perdeu a senha?')

        
    });
});