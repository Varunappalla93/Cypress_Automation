/// <reference types="Cypress"/>

describe("Handle checkboxes", () => {
    it("check and uncheck checkboxes", () => {

        // cy.visit("http://www.webdriveruniversity.com")

        // from cypress.config file
        // cy.visit("/")

        // or from custom commands
        // cy.navigatetowebdriverhomepage();
        cy.navigateto_checkboxpage()

        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option1')

        cy.get('@option1').check().should('be.checked')


        cy.get('#checkboxes > :nth-child(5) > input').as('option3')

        cy.get('@option3').uncheck().should('not.be.checked')

        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked')


        
    })
})    