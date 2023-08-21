/// <reference types="Cypress" />
describe("Handling table data via webdriver uni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })

    it("Calculate age and assert total age of users", () => {
        let userdetails = [];
        let number = 0;
        cy.get("#thumbnail-1 td").each(($el, index, $list) => {
            userdetails[index] = $el.text()

        }).then(() => {
            let i;
            for (let i = 0; i < userdetails.length; i++) {
                if (Number(userdetails[i])) {
                    number = number + Number(userdetails[i]);
                }
                // cy.log(userdetails[i])

            }

            cy.log("Total age is "+number)
            expect(number).to.eq(322)
        })
    });
   
        it("Calculate and assert age based on last name", () => {

            cy.get("#thumbnail-1 td:nth-child(2)").each(($el,index,$list)=>
            {
                    const text=$el.text()
                    if (text.includes("Woods"))
                     {
                        cy.get("#thumbnail-1 td:nth-child(2)").eq(index).next().then((age)=>
                        {
                                const userage=age.text()
                                expect(userage).to.eq("80")
                        })
                    }
            })
        })
   

})