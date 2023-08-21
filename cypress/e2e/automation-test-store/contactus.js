/// <reference types="Cypress"/>
 /// <reference types="cypress-xpath"/ >

    describe("Test automation test store contact us form page", () => {
        it("Should be able to Submit form successfully", {
            retries:

            {
                runMode: 2,
                openMode: 2,
            }
        }, () => {

            // cy.viewport(550,750) // modify view port


            cy.visit("https://automationteststore.com/")
            cy.get("a[href*='content/contact']").click().then((contactus) => {
                cy.log("contact us Link is " + contactus.text())
            })

            // using xpath
            // cy.xpath("//a[contains(@href,'contact')]").click()

            cy.get('#ContactUsFrm_first_name').type("Joe");

            cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
            cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')

            cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
            cy.get('.col-md-6 > .btn').click();

            cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')

            // cypress commands are asynchronous in nature
            console.log("Test is completed")
            // prints on browser console first without completing the test as it is non-cypress command,
            // hence order of execution is not guaranteed, hence we need to use promises
            // and then to handle execution of commands.

            // prints on cypress test runner, as cy.log() is cypress command, hence order of execution is guaranteed.
            cy.log("Test completed")
        });

    });
