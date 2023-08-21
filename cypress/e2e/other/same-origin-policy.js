/// <reference types="Cypress"/>
// After Cypress v12 it's now possible to visit multiple origins in a single test without the cy.origin() command

describe("Cypress web security", () => {
    it("Validate two different domains", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.visit("https://automationteststore.com/")



    });
    it("Validate two different domains using user actions", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#automation-test-store").invoke('removeAttr', 'target').click()



    });

    it.skip("Origin command to navigate to different URL's", () => {

        cy.origin("webdriveruniversity.com", () => {
            cy.visit("/");
        })
        cy.origin("automationteststore.com", () => {
            cy.visit("/")
        })
    })
})