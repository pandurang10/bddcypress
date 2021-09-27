class ViewEmployeeList{
    static ClickEmployeeList(){
       // cy.get('#menu_pim_viewEmployeeList').click();

    
    }
    static SearchEmp(){
        cy.get("#empsearch_employee_name_empName").click();
        cy.get('#empsearch_employee_name_empName').clear();
      cy.get('#empsearch_employee_name_empName').type("Pete")
      cy.get("body:nth-child(2) div.ac_results:nth-child(5) ul:nth-child(1) > li.ac_even.ac_over").click();
        
}
static ClickOnSearch(){
    cy.get("input[name=_search]").click();
}

}
export default ViewEmployeeList