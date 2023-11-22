const firstName = 'Joan'
const lastName = 'Dre'
const email = 'joan@yopmail.com'    

function generateRandomString(length) {
    let randomPass = '';
  
    for (let i = 0; i < length; i++) {
      const randomChar = String.fromCharCode(Math.floor(Math.random() * 93) + 33); // Karakter antara kode ASCII 33 hingga 125
      randomPass += randomChar;
    }
  
    return randomPass;
}
const randomPass = generateRandomString(16)

describe ('Profile Account', () => {
    beforeEach ('', () => {
        cy.visit('')
        cy.get('.panel > .header').contains('Sign In').click()
        cy.login()
    })

    afterEach ('Take screenshot when test failed',function (){
        if (this.currentTest.state === "failed") {
            const testName = this.currentTest.title.replace(/\s+/g, '-') // Ganti spasi dengan '-' untuk nama file
            cy.log('Test Failed')
            cy.screenshot('Gagal: ' + testName, { capture: 'runner' })
        }
    })
    
    it ('Edit Name', () => {
        cy.visit('customer/account')

        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()

        cy.get('#firstname').clear().type(firstName)
        cy.get('#lastname').clear().type(lastName)

        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

        cy.get('.message-success > div').invoke('text').then((text) => {
            expect(text).to.eq("You saved the account information.")
        })

        cy.get('.box-content > p').invoke('text').then((text) => {
            const splitText = text.split('\n')
            expect(text).to.include(splitText[1])
        })
    })

    it ('Edit Email', () => {
        cy.visit('customer/account')

        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()

        cy.get('#change-email').check()
        cy.get('#email').clear().type(email)
        cy.fixture("authentication/credentials.json").then((data) => {
            cy.get('#current-password').type(data.password)
        })

        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

        cy.get('.message-success > div').invoke('text').then((text) => {
            expect(text).to.eq("You saved the account information.")
        })

        cy.get('.box-content > p').invoke('text').then((text) => {
            const splitText = text.split('\n')
            expect(text).to.include(splitText[2])
        })
    })

    it ('Edit Password', () => {
        cy.visit('customer/account')

        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()

        cy.get('#change-password').check()
        cy.fixture("authentication/credentials.json").then((data) => {
            cy.get('#current-password').type(data.password)
        })

        cy.get('#password').type(randomPass)
        cy.get('#password-confirmation').type(randomPass)

        cy.get('#password-strength-meter').invoke('text').then((text) => {
            const splitText = text.split('\n')
            cy.log('Password Strenght: ' + splitText[2])
        })
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

        cy.get('.message-success > div').invoke('text').then((text) => {
            expect(text).to.eq("You saved the account information.")
        })
    })
})