/// <reference types="Cypress"/>

describe("Iterate over elements", () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()

    })

    it("Log info of all hair care products", () => {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " and element : " + $el.text())
            // cy.log($list.text()) // prints all items header text
        })

    })

    it("Add specific product to cart", () => {


        // cy.get(".fixed_wrapper").each(($el, index, $list) => {
        //     if ($el.text().includes("Curls to straight Shampoo")) {
        //         // $el.click() // jquery command
        //         cy.wrap($el).click()
        //     }
        // })

        // from custom commands
        cy.selectProduct("Eau Parfumee au The Vert Shampoo")
        cy.get(".cart").click()
    })
})