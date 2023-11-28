/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

const perfil = require('../fixtures/login.json')

const site = require('../fixtures/baseUrl.json')

context('Funcionalidade para validar cadastros', () => {
    
    beforeEach(() => {

        cy.visit(site.minhaConta)

    });

    it('Deve realizar cadastro com sucesso', () => {

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste.ls1234', {log: false})
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

        
    });

    it('Deve informar que ja tem e-mail cadastrado', () => {

        cy.get('#reg_email').type(perfil.login)
        cy.get('#reg_password').type(perfil.Senha, {log: false})
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
    });
});