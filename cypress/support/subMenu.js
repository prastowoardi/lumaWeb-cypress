// Custom command untuk mengklik submenu dan memeriksa URL
Cypress.Commands.add('clickSubMenuAndCheckURL', (selector, submenuText, expectedURL) => {
    cy.scrollTo('top')
    cy.contains(submenuText).invoke('text').then((text) => {
        expect(text).include(submenuText)
    })
    cy.get(selector).click()
    cy.url().should('eq', expectedURL)
})

Cypress.Commands.add('topCewek', () => {
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-9').trigger('mouseover')
})

Cypress.Commands.add('bottomCewek', () => {
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-10').trigger('mouseover')
})

Cypress.Commands.add('topCowok', () => {
    cy.get('#ui-id-5').trigger('mouseover')
    cy.get('#ui-id-17').trigger('mouseover')
})

Cypress.Commands.add('bottomCowok', () => {
    cy.get('#ui-id-5').trigger('mouseover')
    cy.get('#ui-id-18').trigger('mouseover')
})


// Custom command filter bag
Cypress.Commands.add('bag', () => {
    cy.get('#ui-id-6').trigger('mouseover')
    cy.get('#ui-id-25').invoke('text').then((text) => {
        expect(text).to.equal("Bags")
    })
    cy.get('#ui-id-25').click()
})
// Custom command filter fitness equipment
Cypress.Commands.add('fitness', () => {
    cy.get('#ui-id-6').trigger('mouseover')
    cy.get('#ui-id-26').invoke('text').then((text) => {
        expect(text).to.equal("Fitness Equipment")
    })
    cy.get('#ui-id-26').click()
})
// Custom command filter watches
Cypress.Commands.add('watches', () => {
    cy.get('#ui-id-6').trigger('mouseover')
    cy.get('#ui-id-27').invoke('text').then((text) => {
        expect(text).to.equal("Watches")
    })
    cy.get('#ui-id-27').click()
})