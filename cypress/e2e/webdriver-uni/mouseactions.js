/// <reference types="Cypress"/>

describe("Handle mouse actions", () => {
    it("scroll element into view", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })



    })

    it("drag and drop", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get("#draggable").trigger("mousedown", { which: 1 });
        cy.get("#droppable").trigger("mousemove").trigger("mouseup", { force: true });



    })
    it("drag and drop", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get("#draggable").trigger("mousedown", { which: 1 });
        cy.get("#droppable").trigger("mousemove").trigger("mouseup", { force: true });



    })

    it("double click", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get("#double-click").dblclick();


    })

    it("click and hold", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get("#click-box").trigger("mousedown",{which:1}).then(($ele)=>
        {
            expect($ele).to.have.css('background-color','rgb(0, 255, 0)')
        })


    })

})    