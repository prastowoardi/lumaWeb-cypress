import tesData from "../../fixtures/authentication/register.json"
const faker = require('@faker-js/faker')

describe ('Membuat akun untuk login', () => {
    beforeEach ('Klik tombol create account', () => {
        cy.visit('/')
        cy.get('.panel > .header').contains('Create an Account').click()
    })

    afterEach ('Take screenshot when test failed',function (){
        if (this.currentTest.state === "failed") {
            const testName = this.currentTest.title.replace(/\s+/g, '-') // Ganti spasi dengan '-' untuk nama file
            cy.log('Test Failed')
            cy.screenshot('case: ' + testName, { capture: 'runner' })
        }
    })

    it ('Cek user ada dihalaman register', () => {
        cy.get('.base').invoke('text').then((text) => {
            expect(text).to.equal("Create New Customer Account")
        })
        
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
    })

    tesData.negatif.forEach((test) => {
        // Looping Fixture
        it('[Negatif] - Membuat akun untuk login dengan kondisi: ' + test.case, function () {
            const fields = [
                { id: 'firstname', value: test.firstName },
                { id: 'lastname', value: test.lastName },
                { id: 'email_address', value: test.email },
                { id: 'password', value: test.password },
                { id: 'password-confirmation', value: test.confirmPW }
            ]
    
            // Mengisi semua input
            fields.forEach(field => {
                if (field.value !== null) {
                    cy.get(`#${field.id}`).type(field.value)
                }
            })
    
            // Button create account
            cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    
            // Memeriksa error messages
            fields.forEach(field => {
                if (field.value === null || (field.id === 'password-confirmation' && field.value !== test.password)) {
                    cy.get(`#${field.id}-error`).invoke('text').then((text) => {
                        if (field.value === null) {
                            expect(text).to.equal('This is a required field.')
                        } else if (field.id === 'password-confirmation') {
                            expect(text).to.equal('Please enter the same value again.')
                        }
                    })
                }
            })
        })
    })
    
    it ('[Positif] Membuat akun untuk login', () => {
        const password = faker.faker.internet.password(12)

        cy.get('#firstname').type(faker.faker.name.firstName())
        cy.get('#lastname').type(faker.faker.name.lastName())
        cy.get('#email_address').type(faker.faker.internet.email())
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(password)

        // Button create account
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

        cy.get('.message-success').invoke('text').then((text) => {
            expect(text).to.include("Thank you for registering with Main Website Store.")
        })

        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
    })
})