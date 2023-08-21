/// <reference types="Cypress" />
describe("Handling file uploads via webdriver uni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
        
    })

    it("upload a file", () => {
        cy.get("#myFile").selectFile("cypress/fixtures/laptop.png")
        cy.get("#submit-button").click()
    })

    it("upload no file", () => {
        cy.get("#submit-button").click()
    })

})