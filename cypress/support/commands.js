// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("selectProduct", productName => {
    cy.get(".fixed_wrapper").each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            // $el.click() // jquery command
            cy.wrap($el).click()
        }
    })
})



Cypress.Commands.add("webDriverUni_contactusform_submission", (firstname, lastname, email, comment, $selector, message) => {

    cy.get('.feedback-input:nth-child(1)').type(firstname);
    cy.get('[name="last_name"]').type(lastname);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(comment);

    cy.get('[type="submit"]').click();
    cy.get($selector).contains(message)
})



Cypress.Commands.add("addItemstoBasket", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.log(`${$el.text()}`);
            cy.get('.productcart').eq(index).trigger('mouseover').click({ force: true });
        };
    });
});



Cypress.Commands.add("navigatetowebdriverhomepage", () => {
    cy.visit("/")

})


Cypress.Commands.add("navigateto_checkboxpage", () => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html")

})
