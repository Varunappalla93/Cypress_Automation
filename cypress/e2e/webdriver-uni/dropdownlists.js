/// <reference types="Cypress"/>

describe("Handle drop down lists", () => {
    it("select specific values from dropdown lists", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

        cy.get("#dropdowm-menu-1").select("Python").should('have.value','python') 
        // select by index, value or visible text
        cy.get("#dropdowm-menu-1").select("Python").contains('Pyt') 

        


    })


})    