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
            if (test.firstName) {
                cy.get('#firstname').type(test.firstName)
            }
            if (test.lastName) {
                cy.get('#lastname').type(test.lastName)
            }
            if (test.email) {
                cy.get('#email_address').type(test.email)
            }
            if (test.password) {
                cy.get('#password').type(test.password)
            }
            if (test.confirmPW) {
                cy.get('#password-confirmation').type(test.confirmPW)
            }
    
            // Button create account
            cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    
            // Check error messages
            if (test.firstName == null) {
                cy.get('#firstname-error').invoke('text').then((text) => {
                    expect(text).to.equal('This is a required field.');
                });
            }

            if (test.lastName == null) {
                cy.get('#lastname-error').invoke('text').then((text) => {
                    expect(text).to.equal('This is a required field.');
                });
            }

            if (test.email == null) {
                cy.get('#email_address-error').invoke('text').then((text) => {
                    expect(text).to.equal('This is a required field.');
                });
            }

            if (test.password == null) {
                cy.get('#password-error').invoke('text').then((text) => {
                    expect(text).to.equal('This is a required field.');
                });
            }

            if (test.confirmPW == null) {
                cy.get('#password-confirmation-error').invoke('text').then((text) => {
                    expect(text).to.equal('This is a required field.');
                });
            } else if (test.confirmPW !== test.password) {
                cy.get('#password-confirmation-error').invoke('text').then((text) => {
                    expect(text).to.equal('Please enter the same value again.');
                });
            }
        })
    })
    
    it.only ('[Positif] Membuat akun untuk login', () => {
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