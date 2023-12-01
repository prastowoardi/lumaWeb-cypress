describe ('Cek fungsi dropdown menu sub menu pada halaman index', () => {
    beforeEach ('', () => {
        cy.visit('')
    })

    afterEach ('Take screenshot when test failed',function (){
        if (this.currentTest.state === "failed") {
            const testName = this.currentTest.title.replace(/\s+/g, '-') // Ganti spasi dengan '-' untuk nama file
            cy.log('Test Failed')
            cy.screenshot('Gagal Akses: ' + testName, { capture: 'runner' })
        }
    })

    const testSubMenu = (category, subMenuType, subMenuId, subMenuText, expectedUrl) => {
        it(`Sub Menu (${category}): ${subMenuText}`, () => {
            if (category === 'women') {
                cy[`${subMenuType}Cewek`]()
            } else if (category === 'men') {
                cy[`${subMenuType}Cowok`]()
            }
    
            cy.clickSubMenuAndCheckURL(subMenuId, subMenuText, expectedUrl)
        })
    }
    
    // Women Sub Menus
    testSubMenu('women', 'top', '#ui-id-11', 'Jackets', 'https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
    testSubMenu('women', 'top', '#ui-id-12', 'Hoodies & Sweatshirts', 'https://magento.softwaretestingboard.com/women/tops-women/hoodies-and-sweatshirts-women.html')
    testSubMenu('women', 'top', '#ui-id-13', 'Tees', 'https://magento.softwaretestingboard.com/women/tops-women/tees-women.html')
    testSubMenu('women', 'top', '#ui-id-14', 'Bras & Tanks', 'https://magento.softwaretestingboard.com/women/tops-women/tanks-women.html')
    testSubMenu('women', 'bottom', '#ui-id-15', 'Pants', 'https://magento.softwaretestingboard.com/women/bottoms-women/pants-women.html')
    testSubMenu('women', 'bottom', '#ui-id-16', 'Shorts', 'https://magento.softwaretestingboard.com/women/bottoms-women/shorts-women.html')
    
    // Men Sub Menus
    testSubMenu('men', 'top', '#ui-id-19', 'Jackets', 'https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
    testSubMenu('men', 'top', '#ui-id-20', 'Hoodies & Sweatshirts', 'https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html')
    testSubMenu('men', 'top', '#ui-id-21', 'Tees', 'https://magento.softwaretestingboard.com/men/tops-men/tees-men.html')
    testSubMenu('men', 'top', '#ui-id-22', 'Tanks', 'https://magento.softwaretestingboard.com/men/tops-men/tanks-men.html')
    testSubMenu('men', 'bottom', '#ui-id-23', 'Pants', 'https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html')
    testSubMenu('men', 'bottom', '#ui-id-24', 'Shorts', 'https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html')

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