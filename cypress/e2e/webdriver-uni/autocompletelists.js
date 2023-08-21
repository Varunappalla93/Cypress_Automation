/// <reference types="Cypress"/>

describe("Handle auto complete lists", () => {
    it("select specific product from auto complete list", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })

        cy.get("#myInput").type("A")

        cy.get("div[id='myInputautocomplete-list'] div:nth-child(n)").each(($el, index, $list) => {
            const fooditem = $el.text()
            const prodtoSelect = "Avacado"

            if (fooditem === prodtoSelect) {
                // $el.click() // deprecated
                $el.trigger("click")
                cy.get("#submit-button").click()
                cy.url().should('include', prodtoSelect)

            }
        }).then(() => {
            cy.get("#myInput").type("G")

            cy.get("div[id='myInputautocomplete-list'] div:nth-child(n)").each(($el, index, $list) => {
                const fooditem = $el.text()
                const prodtoSelect = "Grapes"

                if (fooditem === prodtoSelect) {
                    // $el.click() // deprecated
                    $el.trigger("click")
                    cy.get("#submit-button").click()
                    cy.url().should('include', prodtoSelect)

                }
            })

        })


    })


})    