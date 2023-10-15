describe ('Login ke web Luma', () => {
    beforeEach ('Klik tombol create account', () => {
        cy.visit('')
        cy.get('.panel > .header').contains('Sign In').click()
    })

    it ('Memasukkan credential', () => {
        cy.login()
        cy.visit('customer/account')

        cy.get('.box-content > p').invoke('text').then((text) => {
            cy.log(text)
            const arrayText = text.split(" ")
            cy.log("User login sebagai : " +arrayText[0])
        })
    })
})