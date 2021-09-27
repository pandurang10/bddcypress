/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed
// .\node_modules\.bin\cypress  run --spec cypress\integration\examples\BDD\*.feature --headed
let cricketerName

//Navigate to Google Search Page
Given('Navigate to Google Search Page', () => {
    cy.log('https://www.google.com/')
    cy.visit('https://www.google.com/')    
})

When('Search for Cricketer name as {string}', (cricketer) => {
    cy.log(cricketer)
    cricketerName = cricketer
    cy.get('.gLFyf').type(cricketer)
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()   
})
When('Click on wikipedia link',function(){
  /*  let updatedStr = cricketerName.replace(" ", "_");
    let linkStr = "https://en.wikipedia.org/wiki/" + updatedStr 
    cy.get("[href=" + linkStr + "]").click()
*/
    // According to docs you cant have 2 different superdomains as a part of a single test.
})
When('Should display cricker name',function(){
    cy.log('cricketerName' ,cricketerName)
})

Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('#txtUsername').type(username)
    cy.get('#txtPassword').type(password)
})

And('User clicks on login button', () => {
    cy.get('#btnLogin').click()
})

Then('User is able to successfully login to the Website', () => {
    cy.get('#welcome').should('be.visible', {timeout: 10000})
})