/// <reference types="Cypress" />
describe("Handling date picker via webdriver uni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        cy.get("#datepicker").click();
    })


    it("select date from date picker", () => {
        let date = new Date();
        date.setDate(date.getDate() + 365);

        let futureYear = date.getFullYear()
        let futureMonth = date.toLocaleString("default", { month: "long" })
        let futureDay = date.getDate()

        function selectMonthandYear() {
            cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then((currentDate) => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get(".next").first().click();
                    selectMonthandYear()

                }
            }).then(() => {
                cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then((currentDate) => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get(".next").first().click();
                        selectMonthandYear()
                    }
                })
            })

        }

        function selectfutureDay() {
            cy.get("[class='day']").contains(futureDay).click()
        }

        selectMonthandYear()
        selectfutureDay()


    })


})