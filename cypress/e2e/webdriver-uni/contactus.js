/// <reference types="Cypress"/>
import Contactus_PO from "../../support/pageObjects/webdriver-uni/Contactus_PO";
import HomePage_PO from "../../support/pageObjects/webdriver-uni/HomePage_PO";

describe("Test webdriveruni contact us form page", () => {

    Cypress.config('defaultCommandTimeout', 20000) // apply command timeout to this entire test

    const homepage = new HomePage_PO();
    const contactus = new Contactus_PO();

    beforeEach(function () {
        // from base url
        // cy.visit("/"+"/Contact-Us/contactus.html")
        //or
        // cy.get('#contact-us').invoke('removeAttr', 'target').click()

        // or from env variables
        // cy.visit(Cypress.env("webdriver_uni_homepage")+"/Contact-Us/contactus.html")

        // from pageobjects
        homepage.visitHomePage()
        // cy.wait(3000) // to wait for 3 secs
        homepage.clickContactusbuton()
        // cy.pause(); // to pause on that step




    })

    // to use fixtures
    before(() => {
        cy.fixture("example").then(function (data) {
            // this.data=data;
            globalThis.data = data;
        })
    })
    it.only("Should be able to Submit form successfully", () => {
        // cy.get("http://www.webdriveruniversity.com")
        // cy.click("#contact-us").click({force:true})


        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")

        // handle multiple tabs, handles from beforeEach hook
        // cy.visit("http://www.webdriveruniversity.com")
        // cy.get('#contact-us').invoke('removeAttr', 'target').click()


        cy.url().should('include', 'contactus')
        cy.title().should('include', 'WebDriver')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')


        // used fixtures to send data 
        // cy.get('.feedback-input:nth-child(1)').type(data.firstname);
        // cy.get('[name="last_name"]').type(data.lastname);
        // cy.get('[name="email"]').type("joe_blogs123@gmail.com");
        // cy.get('textarea.feedback-input').type("How can I learn Cypress?");

        // cy.get('[type="submit"]').click();
        // cy.get('h1').contains('Thank You')

        // from custom command and fixture data
        // cy.webDriverUni_contactusform_submission(data.firstname, data.lastname, data.email, "How can I learn Cypress?", 'h1', "Thank You")


        // from env variables
        // cy.webDriverUni_contactusform_submission(Cypress.env("firstname"), data.lastname, " ", "How can I learn Cypress?", 'body', "Error")

        // from pageobjects
        contactus.contactusformsubmission(data.firstname, data.lastname, data.email, "How can I learn Cypress?", 'h1', "Thank You")

    });

    it.skip("Should not be able to submit form successfully", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('.feedback-input:nth-child(1)').type("Varun");
        // cy.get('[name="last_name"]').type("blogs");
        // cy.get('textarea.feedback-input').type("How can I learn Cypress?");
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains('Error')

        // from custom command and fixture data
        // cy.webDriverUni_contactusform_submission(data.firstname, data.lastname, " ", "How can I learn Cypress?", 'body', "Error")

        // from pageobjects
        contactus.contactusformsubmission(data.firstname, data.lastname, " ", "How can I learn Cypress?", 'body', "Error")

    });


});

// run tests from cmd, videos will be saved in separate folder.
// ./node_modules/.bin/cypress run

// run tests from cmd with electron browser
// ./node_modules/.bin/cypress run --headed

// run tests from cmd with chrome browser
// ./node_modules/.bin/cypress run --browser chrome

// run specific tests from cmd headless by default electron browser
// ./node_modules/.bin/cypress run --spec cypress/e2e/webdriver-uni/contactus.js

// run all tests in folder from cmd headless by default electron browser
// ./node_modules/.bin/cypress run --spec cypress/e2e/webdriver-uni/*


// to open cyress app using config folders.
// npx cypress open --env configFile=staging


// to run tests using config folders.
// npx cypress run --spec cypress/e2e/webdriver-uni/* --env configFile=staging --headed

