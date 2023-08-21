/// <reference types="Cypress"/>

describe("Validate webdriver university homepahge links", () => {
    it("Confirm links redirect to correct pages", () => {

        cy.visit("https://webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('include','contactus')
        

        cy.go('back')
        cy.reload(true) // reloads without using cache
        cy.go('forward')
        cy.url().should('include','contactus')
        

        cy.go('back')
        cy.get("#login-portal").invoke('removeAttr','target').click({force:true})

        cy.url().should('include','Login-Portal')
        cy.go('back')
        })
    })

