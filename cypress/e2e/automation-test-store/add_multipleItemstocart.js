/// <reference types="Cypress"/>
import AutoStore_HairCare_PO from "../../support/pageObjects/automationtest-store/AutoStore_HairCare_PO";
import AutoStore_HomePage_PO from "../../support/pageObjects/automationtest-store/autostore_homepage_po";

describe("Add multiple items to cart", () => {
    const autostore_homepage_po = new AutoStore_HomePage_PO()
    const autostore_haircare_po = new AutoStore_HairCare_PO()

    beforeEach(() => {
        // cy.visit("https://automationteststore.com/")
        // cy.get('a[href*="product/category&path="]').contains("Hair Care").click()

        cy.clearLocalStorage()
        cy.clearCookies()

        // from pageobjects
        autostore_homepage_po.accessHomePage()
        autostore_homepage_po.clickonHairCare_link()

    })

    before(() => {
        cy.fixture('products').then((data) => {
            globalThis.data = data;
        })

    })

    it("Add specific items to basket", () => {
        // data.productName.forEach(function (element) {
        //     cy.addItemstoBasket(element)
        // })
        // cy.get('.dropdown-toggle > .fa').click();

        // from pageobjects
        autostore_haircare_po.addhaircareprodstoCart()
    });
});