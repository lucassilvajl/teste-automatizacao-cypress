/// <reference types="cypress" />

import { faker, fakerPT_BR } from '@faker-js/faker'

const perfil = require('../fixtures/login.json')

const site = require('../fixtures/baseUrl.json')

context('Funcionalidade para realização de cadastro', () => {

    beforeEach(() => {
    
        cy.visit(site.minhaConta)
        cy.cadastro(perfil.login, perfil.Senha)
    });

    it('Deve realizar as alterações de cadastro com sucesso', () => {

        cy.get('#billing_first_name').clear().type(fakerPT_BR.person.firstName('male'))
        cy.get('#billing_last_name').clear().type(fakerPT_BR.person.lastName('male'))
        cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
        cy.get('#billing_address_1').clear().type(fakerPT_BR.location.streetAddress(true))
        cy.get('#billing_city').clear().type(fakerPT_BR.location.city())
        cy.get('#select2-billing_state-container').click().type(fakerPT_BR.location.state() + '{enter}')
        cy.get('#billing_postcode').clear().type(fakerPT_BR.location.zipCode())
        cy.get('#billing_phone').clear().type(faker.phone.number('92 99###-####'))
        cy.get(':nth-child(2) > .button').click()
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });
});