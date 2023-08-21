/// <reference types="Cypress"/>

describe("Handle Franes", () => {
    it("Hnndle iframe and modals", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#frame').then(($frame)=>
        {
            const body=$frame.contents().find("body")
            cy.wrap(body).as('iframe')
        })


        cy.get('@iframe').find("button[id='button-find-out-more']").click()

        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').then(($exptext)=>
        {
            expect($exptext.text()).to.include("we sell a wide range of electrical goods")
        })

        cy.get('@modal').contains('Close').click()

    })
})