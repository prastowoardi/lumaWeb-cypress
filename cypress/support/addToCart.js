Cypress.Commands.add('addToCart', (searchKey) => {
    cy.get('#search').type(searchKey + '{enter}')

        // Cari produk lalu klik produk sesuai searchKey
        cy.contains('.products > .item', searchKey).within(() => {
            cy.get('.product-item-info > .details > .name > .product-item-link').click()
        })
        cy.wait(1000)
        cy.get('#option-label-size-143-item-168').click()
        cy.wait(1000)
        cy.get('#option-label-color-93-item-56').click()
        cy.wait(1000)
        cy.get('#product-addtocart-button').click()

        cy.get('.message-success > div').invoke('text').then((text) => {
            cy.log(text)
            expect(text).to.include('You added Radiant Tee to your shopping cart.')
        })
})