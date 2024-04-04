describe ('Login ke web Luma', () => {
    beforeEach ('Klik tombol create account', () => {
        cy.visit('')
        cy.get('.panel > .header').contains('Sign In').click()
    })

    afterEach ('Take screenshot when test failed',function (){
        if (this.currentTest.state === 'failed') {
            const testName = this.currentTest.title.replace(/\s+/g, '-') // Ganti spasi dengan '-' untuk nama file
            cy.log('Test Failed')
            cy.screenshot('case: ' + testName, { capture: 'runner' })
        }
    })

    it ('Memasukkan credential', () => {
        cy.login()
        cy.visit('customer/account')

        cy.get('.box-content > p').invoke('text').then((text) => {
            const arrayText = text.split(" ")
            cy.log("User login sebagai : " +arrayText[0])
        })
    })
})