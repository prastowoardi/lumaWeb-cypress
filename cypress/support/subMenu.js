// Custom command filter jaket women
Cypress.Commands.add('jaketCewek', () => {
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-9').trigger('mouseover')
    cy.get('#ui-id-11').invoke('text').then((text) => {
        expect(text).to.equal("Jackets")
    })
    cy.get('#ui-id-11').click()
})
// Custom command filter hoodie women
Cypress.Commands.add('hoodieCewek', () => {
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-9').trigger('mouseover')
    cy.get('#ui-id-12').invoke('text').then((text) => {
        expect(text).to.equal("Hoodies & Sweatshirts")
    })
    cy.get('#ui-id-12').click()
})
// Custom command filter tees women
Cypress.Commands.add('teesCewek', () => {
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-9').trigger('mouseover')
    cy.get('#ui-id-13').invoke('text').then((text) => {
        expect(text).to.equal("Tees")
    })
    cy.get('#ui-id-13').click()
})
// Custom command filter bra women
Cypress.Commands.add('braCewek', () => {
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-9').trigger('mouseover')
    cy.get('#ui-id-14').invoke('text').then((text) => {
        expect(text).to.equal("Bras & Tanks")
    })
    cy.get('#ui-id-14').click()
})
// Custom command filter celana women
Cypress.Commands.add('pantsCewek', () => {
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-10').trigger('mouseover')
    cy.get('#ui-id-15').invoke('text').then((text) => {
        expect(text).to.equal("Pants")
    })
    cy.get('#ui-id-15').click()
})
// Custom command filter shorts women
Cypress.Commands.add('shortsCewek', () => {
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-10').trigger('mouseover')
    cy.get('#ui-id-16').invoke('text').then((text) => {
        expect(text).to.equal("Shorts")
    })
    cy.get('#ui-id-16').click()
})

// Custom command filter jaket pria
Cypress.Commands.add('jaketCowok', () => {
    cy.get('#ui-id-5').trigger('mouseover')
    cy.get('#ui-id-17').trigger('mouseover')
    cy.get('#ui-id-19').invoke('text').then((text) => {
        expect(text).to.equal("Jackets")
    })
    cy.get('#ui-id-19').click()
})
// Custom command filter hoodie women
Cypress.Commands.add('hoodieCowok', () => {
    cy.get('#ui-id-5').trigger('mouseover')
    cy.get('#ui-id-17').trigger('mouseover')
    cy.get('#ui-id-20').invoke('text').then((text) => {
        expect(text).to.equal("Hoodies & Sweatshirts")
    })
    cy.get('#ui-id-20').click()
})
// Custom command filter tees women
Cypress.Commands.add('teesCowok', () => {
    cy.get('#ui-id-5').trigger('mouseover')
    cy.get('#ui-id-17').trigger('mouseover')
    cy.get('#ui-id-21').invoke('text').then((text) => {
        expect(text).to.equal("Tees")
    })
    cy.get('#ui-id-21').click()
})
// Custom command filter bra women
Cypress.Commands.add('tanksCowok', () => {
    cy.get('#ui-id-5').trigger('mouseover')
    cy.get('#ui-id-17').trigger('mouseover')
    cy.get('#ui-id-22').invoke('text').then((text) => {
        expect(text).to.equal("Tanks")
    })
    cy.get('#ui-id-22').click()
})

// Custom command filter celana pria
Cypress.Commands.add('pantsCowok', () => {
    cy.get('#ui-id-5').trigger('mouseover')
    cy.get('#ui-id-18').trigger('mouseover')
    cy.get('#ui-id-23').invoke('text').then((text) => {
        expect(text).to.equal("Pants")
    })
    cy.get('#ui-id-23').click()
})
// Custom command filter shorts pria
Cypress.Commands.add('shortsCowok', () => {
    cy.get('#ui-id-5').trigger('mouseover')
    cy.get('#ui-id-18').trigger('mouseover')
    cy.get('#ui-id-24').invoke('text').then((text) => {
        expect(text).to.equal("Shorts")
    })
    cy.get('#ui-id-24').click()
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