class AutoStore_HairCare_PO {
    addhaircareprodstoCart() {
        globalThis.data.productName.forEach(function (element) {
            cy.addItemstoBasket(element)

            /*
            .then(()=>
            {
                debugger
            })
            */
        })

        cy.get('.dropdown-toggle > .fa').click();
    //or use debug().click() to debug
    }
}

export default AutoStore_HairCare_PO
