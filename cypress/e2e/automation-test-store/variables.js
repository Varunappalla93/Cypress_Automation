/// <reference types="Cypress"/>

describe("Verifying variables, cypress and jquery commands", () => {
    it("Navigate to specific product pages", () => {

        cy.visit("https://automationteststore.com/")
        // const makeuppage = cy.get('a[href*="product/category&path="]').contains("Makeup")
        // makeuppage.click()

        // const skincarepage = cy.get('a[href*="product/category&path="]').contains("Skincare")
        // skincarepage.click()

        cy.get('a[href*="product/category&path="]').contains("Makeup").click()
        cy.get(".maintext").then(($headerText) => {
            const headertext = $headerText.text()
            cy.log("Make up header text is " + headertext)
            expect(headertext).is.eq("Makeup")
        })
    })

    it("validate contact us page properties", () => {

        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        // cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find("label[for='ContactUsFrm_first_name']")
            .should('contain', 'First name:')


        // jquery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then((text) => {
            const firstname = text.find("label[for='ContactUsFrm_first_name']").text()
            cy.log("first name label text is " + firstname)
            expect(firstname).to.contain("First name")

            //embedded commands(closure)
            cy.get("label[for='ContactUsFrm_first_name']").then((fritext) => {
                cy.log("first name label text is " + fritext.text())

            })
        })

    })
})



