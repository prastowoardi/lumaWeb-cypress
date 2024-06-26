const faker = require('@faker-js/faker')
const tees = "Desiree Fitness Tee"

describe ('Checkout barang', () => {
    beforeEach ('', () => {
        cy.visit('')
        cy.get('.panel > .header').contains('Sign In').click()
        cy.login()
    })

    afterEach ('Take screenshot when test failed',function (){
        if (this.currentTest.state === "failed") {
            const testName = this.currentTest.title.replace(/\s+/g, '-') // Ganti spasi dengan '-' untuk nama file
            cy.log('Test Failed')
            cy.screenshot('case: ' + testName, { capture: 'runner' })
        }
    })

    it ('Sudah ada barang di keranjang belanja', () => {
        cy.get('.showcart').click()

        cy.get('.item-info > .item').invoke('text').then((text) => {
            const lines = text.split('\n')
            let productName = ''

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim()
            
                if (line.includes('Radiant Tee')) {
                    productName = line
                    break
                }
            }
            cy.log('Nama produk yang ada di keranjang: ' + productName)
        })         

        cy.wait(2000)
        cy.get('strong > .price').invoke('text').then((text) => {
            const grandTotal = text.replace(/[^\d.]/g, '')
            cy.log('Total yang harus dibayarkan: $' + grandTotal)
        })

        cy.get('.methods > :nth-child(1) > .action').click()

        cy.wait(7000)
        cy.get('.shipping-address-item.not-selected-item .action-select-shipping-item').click()
        // Mengisi Alamat Pengiriman jika belum ada
        cy.get('.new-address-popup > .action').click()
        cy.get('[name="company"]').type(faker.faker.company.name())
        cy.get('[name="street[0]"]').type(faker.faker.location.streetAddress())
        cy.get('[name="city"]').type(faker.faker.location.city())
        cy.get('[name="region_id"]').select('Virginia')
        cy.get('[name="postcode"]').type(faker.faker.location.zipCode())
        cy.get('[name="country_id"]').select('Uganda')
        cy.get('[name="telephone"]').type(faker.faker.phone.number())
        
        // cy.get('#shipping-save-in-address-book').click()
        cy.get('.modal-footer > .primary').contains('Ship here').click()

        cy.get('.button').contains('Next').click()

        cy.wait(1000)
        // Review and Payments
        cy.get('#billing-address-same-as-shipping-checkmo').click()
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()

        cy.get('.checkout-success > :nth-child(1)').invoke('text').then((text) => {
                const orderNumber = text.split(' ')
                cy.log('Your Order Number is: ' + orderNumber[4])
        })

        cy.url().should('eq', 'https://magento.softwaretestingboard.com/checkout/onepage/success/')
    })

    it ('Tidak ada barang di keranjang belanja', () => {
        cy.get('.showcart').click()
        // cy.get('#ui-id-1').should('be.visible')
        cy.get('.cart-empty').invoke('text').then((text) => {
            const splitText = text.split('\n')
            expect(text).to.include(splitText[1])
        })

        cy.addToCart(tees)
    
        // Awal mula checkout
        cy.get('.showcart').click()

        cy.get('.item-info > .item').invoke('text').then((text) => {
            const lines = text.split('\n')
            let productName = ''

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim()
            
                if (line.includes(tees)) {
                    productName = line
                    break
                }
            }
            cy.log('Nama produk yang ada di keranjang: ' + productName)
        })

        cy.wait(2000)
        cy.get('strong > .price').invoke('text').then((text) => {
            const grandTotal = text.replace(/[^\d.]/g, '')
            cy.log('Total yang harus dibayarkan: $' + grandTotal)
        })

        cy.get('.methods > :nth-child(1) > .action').click()

        cy.wait(7000)
        cy.get('.shipping-address-item.not-selected-item .action-select-shipping-item').click()

        // Mengisi Alamat Pengiriman jika belum ada
        cy.get('.new-address-popup > .action').click()
        cy.get('[name="company"]').type(faker.faker.company.name())
        cy.get('[name="street[0]"]').type(faker.faker.location.streetAddress())
        cy.get('[name="city"]').type(faker.faker.location.city())
        cy.get('[name="region_id"]').select('Virginia')
        cy.get('[name="postcode"]').type(faker.faker.location.zipCode())
        cy.get('[name="country_id"]').select('Uganda')
        cy.get('[name="telephone"]').type(faker.faker.phone.number())
        
        // cy.get('#shipping-save-in-address-book').click()
        cy.get('.modal-footer > .primary').contains('Ship here').click()

        cy.get('.button').contains('Next').click()

        cy.wait(1000)
        // Review and Payments
        cy.get('#billing-address-same-as-shipping-checkmo').click()
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()

        cy.get('.checkout-success > :nth-child(1)').invoke('text').then((text) => {
                const orderNumber = text.split(' ')
                cy.log('Your Order Number is: ' + orderNumber[4])
        })

        cy.url().should('eq', 'https://magento.softwaretestingboard.com/checkout/onepage/success/')
    })
})