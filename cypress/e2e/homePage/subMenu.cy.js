describe ('Cek fungsi dropdown menu sub menu pada halaman index', () => {
    beforeEach ('', () => {
        cy.visit('')
    })

    it ('Sub Menu: Jaket wanita', () => {
        cy.topCewek()
        cy.clickSubMenuAndCheckURL('#ui-id-11', 'Jackets', 'https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');
    })

    it ('Sub Menu: Hoodie wanita', () => {
        cy.topCewek()
        cy.clickSubMenuAndCheckURL('#ui-id-12', 'Hoodies & Sweatshirts', 'https://magento.softwaretestingboard.com/women/tops-women/hoodies-and-sweatshirts-women.html')
    })

    it ('Sub Menu: Tees wanita', () => {
        cy.topCewek()
        cy.clickSubMenuAndCheckURL('#ui-id-13', 'Tees', 'https://magento.softwaretestingboard.com/women/tops-women/tees-women.html')
    })

    it ('Sub Menu: Bra wanita', () => {
        cy.topCewek()
        cy.clickSubMenuAndCheckURL('#ui-id-14', 'Bras & Tanks', 'https://magento.softwaretestingboard.com/women/tops-women/tanks-women.html')
    })
    
    it ('Sub Menu: Celana wanita', () => {
        cy.bottomCewek()
        cy.clickSubMenuAndCheckURL('#ui-id-15', 'Pants', 'https://magento.softwaretestingboard.com/women/bottoms-women/pants-women.html')
    })
    
    it ('Sub Menu: Short wanita', () => {
        cy.bottomCewek()
        cy.clickSubMenuAndCheckURL('#ui-id-16', 'Shorts', 'https://magento.softwaretestingboard.com/women/bottoms-women/shorts-women.html')
    })

    it ('Sub Menu: Jaket pria', () => {
        cy.topCowok()
        cy.clickSubMenuAndCheckURL('#ui-id-19', 'Jackets', 'https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
    })

    it ('Sub Menu: Hoodie pria', () => {
        cy.topCowok()
        cy.clickSubMenuAndCheckURL('#ui-id-20', 'Hoodies & Sweatshirts', 'https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html')
    })

    it ('Sub Menu: Tees pria', () => {
        cy.topCowok()
        cy.clickSubMenuAndCheckURL('#ui-id-21', 'Tees', 'https://magento.softwaretestingboard.com/men/tops-men/tees-men.html')
    })

    it ('Sub Menu: Tanks pria', () => {
        cy.topCowok()
        cy.clickSubMenuAndCheckURL('#ui-id-22', 'Tanks', 'https://magento.softwaretestingboard.com/men/tops-men/tanks-men.html')
    })

    it ('Sub Menu: Celana pria', () => {
        cy.bottomCowok()
        cy.clickSubMenuAndCheckURL("#ui-id-23", 'Pants','https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html')
    })

    it ('Sub Menu: Shorts pria', () => {
        cy.bottomCowok()
        cy.clickSubMenuAndCheckURL('#ui-id-24', 'Shorts','https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html')
    })

    it ('Sub Menu: Gear - Bags', () => {
        cy.bag()
        cy.url().should('eq','https://magento.softwaretestingboard.com/gear/bags.html')
    })

    it ('Sub Menu: Gear - Fitness Equipment', () => {
        cy.fitness()
        cy.url().should('eq','https://magento.softwaretestingboard.com/gear/fitness-equipment.html')
    })

    it ('Sub Menu: Gear - Watches', () => {
        cy.watches()
        cy.url().should('eq','https://magento.softwaretestingboard.com/gear/watches.html')
    })
})