const faker = require('@faker-js/faker')

describe ('Forgot Password', () => {
    beforeEach ('', () => {
        cy.visit('')
        cy.get('.panel > .header').contains('Sign In').click()
    })
    
    afterEach ('Take screenshot when test failed',function (){
        if (this.currentTest.state === "failed") {
            const testName = this.currentTest.title.replace(/\s+/g, '-') // Ganti spasi dengan '-' untuk nama file
            cy.log('Test Failed')
            cy.screenshot('case: ' + testName, { capture: 'runner' })
        }
    })

    it ('[Negatif] - Forgot Password', () => {
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span').click()

        cy.url().should('eq','https://magento.softwaretestingboard.com/customer/account/forgotpassword/')

        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-error').contains('Please enter your email.')
    })

    it ('[Positif] - Forgot Password', () => {
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span').click()

        cy.url().should('eq','https://magento.softwaretestingboard.com/customer/account/forgotpassword/')

        cy.get('#email_address').type('hazz@yopmail.com')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-success').invoke('text').then((text) => {
            expect(text).to.include(`If there is an account associated with hazz@yopmail.com you will receive an email with a link to reset your password.`)
        })

        // Buka email
        // cy.visit('https://yopmail.com/')
        // cy.get('#login').type('hazz@yopmail.com{enter}')
        // cy.get('button.lm').contains('CustomerSupport');

    })
})