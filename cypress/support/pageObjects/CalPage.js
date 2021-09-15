class CalPage
{

getBuildNumberSel(){
    return cy.get('#selectBuild')
}    
getFirstNumberTxt()
{
    return cy.get('#number1Field')
}

getSecondNumberTxt()
{
    return cy.get('#number2Field')

}
getOperationSel()
{
  return  cy.get('#selectOperationDropdown')
}

getCalBtn()
{
   return cy.get('#calculateButton')
}
getValidateAnsTxt()
{
    return  cy.get("#numberAnswerField")
}

}

export default CalPage;
