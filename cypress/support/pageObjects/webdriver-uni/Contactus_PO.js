class Contactus_PO {

    contactusformsubmission(firstname, lastname, email, comment, $selector, message)
    {
    cy.get('.feedback-input:nth-child(1)').type(firstname);
    cy.get('[name="last_name"]').type(lastname);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(comment);

    cy.get('[type="submit"]').click();
    cy.get($selector).contains(message,{timeout:8000})
    cy.screenshot()
    cy.screenshot("make a contact us form submission")
    }
}

export default Contactus_PO