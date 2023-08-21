class HomePage_PO {

    visitHomePage() {
        cy.visit(Cypress.env("webdriver_uni_homepage"),{timeout:60000})
    }

    clickContactusbuton()
    {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true},{timeout:7000})
    }


}

export default HomePage_PO