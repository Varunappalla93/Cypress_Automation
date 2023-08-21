/// <reference types="Cypress"/>

describe("Handle webdriveruni JS alerts", () => {
    it("Confirm js alert contains correct text", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()

        cy.get("#button1").click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });

    it("Confirm js alert works correctly when clicked OK", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()

        cy.get("#button4").click()

        cy.on('window:alert', (str) => {
            return true;
        })
        cy.get("#confirm-alert-text").contains("OK")


    });
    it("Confirm js alert works correctly when clicked Cancel", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()

        cy.get("#button4").click()

        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get("#confirm-alert-text").contains("Cancel")


    });




// 'window:confirm' for clicking OK or Cancel button

it("Confirm js alert using stub", () => {

    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click()


    const stub = cy.stub()
    cy.on('window:confirm', stub)

    cy.get("#button4").click().then(()=>
    {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!")
    }).then(()=>
        {
                return true;
        }).then(()=>
        {
            cy.get("#confirm-alert-text").contains("OK")
        })
    })
});