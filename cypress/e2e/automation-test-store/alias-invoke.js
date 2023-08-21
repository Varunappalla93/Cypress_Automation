/// <reference types="Cypress"/>

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {

        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')

        cy.get('@productThumbnail').its('length').should('eq', 19)
        cy.get('@productThumbnail').its('length').should('be.gt', 10)
        cy.get('@productThumbnail').should('include', 'Seaweed')

    })

    it("Validate the thumbnails and add to cart text", () => {

        cy.visit("https://automationteststore.com/")
        cy.get("div[class='thumbnail']").as('thumbnail')
        cy.get('@thumbnail').should('have.length', 16)
        cy.get('@thumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')


    })

    it.only("Calculate total of non sale and sale products", () => {

        cy.visit("https://automationteststore.com/")
        cy.get("div[class='thumbnail']").as('thumbnail')
        // cy.get('@thumbnail').find('.oneprice').each(($el,index,$list)=>
        // {
        //     cy.log($el.text())
        // })

        cy.get('@thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        let totalitemsprice = 0;
        cy.get('@itemPrice').then(($linkText) => {
            let itemPricestotal = 0;
            let itemprice = $linkText.split('$')


            for (let i = 1; i < itemprice.length; i++) {
                cy.log("Prices are "+itemprice[i]);
                itemPricestotal = itemPricestotal + Number(itemprice[i])

            }

            cy.log("TOTAL NON SALE ITEMS PRICE ARE " + itemPricestotal)
            totalitemsprice = totalitemsprice + itemPricestotal
        })


        cy.get('@saleItemPrice').then(($linkText) => {
            let saleitemPricestotal = 0;
            let saleitemprice = $linkText.split('$')


            for (let i = 1; i < saleitemprice.length; i++) {
                cy.log("Prices are "+saleitemprice[i]);
                saleitemPricestotal = saleitemPricestotal + Number(saleitemprice[i])

            }
            cy.log("TOTAL SALE ITEMS PRICE ARE " + saleitemPricestotal)
            totalitemsprice = totalitemsprice + saleitemPricestotal


        }).then(()=>
        {
            cy.log("total price of sale and non sale items "+totalitemsprice)
            expect(totalitemsprice).to.equal(660.5)
        })


    })
})
