/// <reference types="Cypress" />
import CalPage from '../../../../support/pageObjects/CalPage'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed
// .\node_modules\.bin\cypress  run --spec cypress\integration\examples\BDD\*.feature --headed
const calPage = new CalPage()

let name
let buildNumber

// I open Basic Calculator Page
Given('I open Basic Calculator Page', () => {
    cy.log(Cypress.env('url'))
    cy.visit(Cypress.env('url'))    
})

// When Select Build number
When('Select Build number', function (dataTable) {
    buildNumber = dataTable.rawTable[1][0]
    calPage.getBuildNumberSel().select(buildNumber)
    calPage.getBuildNumberSel().should('have.value', buildNumber)
    /*
    Ex: Want use below loop 
    this.data.productName.forEach(function (element) {
        cy.selectProduct(element)
    });
    productPage.checkOutButton().click()
    */
})
//When Select Operation
When('Select Operation', function (dataTable) {
    name = dataTable.rawTable[1][0]
    if(name == 'Add'){
        calPage.getOperationSel().select('0')
    }else if(name == 'Sub'){
        calPage.getOperationSel().select('1')
    }else if(name = 'Multiply'){
        calPage.getOperationSel().select('2')
    }
    cy.get('#calculateButton').click()  
})
// Then Validate Result
Then('Validate Result', function (dataTable) {
    let ans = dataTable.rawTable[1][0]
    cy.get("#numberAnswerField").should('have.value', ans)
})

// Then Enter first and second number
Then('Enter first and second number', function (dataTable) {
    let fristNumber = dataTable.rawTable[1][0]
    calPage.getFirstNumberTxt().as('firstNo')        
    cy.get('@firstNo').type(fristNumber)
    cy.get("@firstNo").should('have.value', fristNumber)

    let secondNumber = dataTable.rawTable[1][1]
    calPage.getSecondNumberTxt().as('secondNo')
    cy.get('@secondNo').type(secondNumber)
    cy.get("@secondNo").should('have.value', secondNumber)
})
