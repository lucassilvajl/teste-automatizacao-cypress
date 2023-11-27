/// <reference types="cypress" />


context('Funcionalidade para adicionar um produto no carrinho', () => {

    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve adicionar um produto ao carrinho', () => {
        
        cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
    });

    it('Deve adicionar vários produtos ao carrinho', () => {

        cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-2934 > .product-block > .caption > .meta > .infor > .name').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type('4')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
    });
});