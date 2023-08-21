/// <reference types="Cypress"/>

describe("Handle radio buttons", () => {
    it("check and uncheck radio buttons", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

        cy.get("#radio-buttons").find("input[type='radio']").first().check()
        
        cy.get("#radio-buttons").find("input[type='radio']").eq(3).check()


    })

    it("Validate states of radio buttons", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

        cy.get("input[value='lettuce']").check().should('be.checked')
        
        cy.get("input[value='pumpkin']").should('not.be.checked')

        cy.get("input[value='cabbage']").should('be.disabled')


    })
})    