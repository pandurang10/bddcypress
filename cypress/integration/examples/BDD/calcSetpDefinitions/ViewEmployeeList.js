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
static Validate(){
    cy.get("div.box.noHeader:nth-child(2) div.inner table.table.hover tbody:nth-child(2) tr.odd td.left:nth-child(2) > a:nth-child(1)").should("contain.text","0007")
    cy.get("div.box.noHeader:nth-child(2) div.inner table.table.hover tbody:nth-child(2) tr.odd td.left:nth-child(3) > a:nth-child(1)").should("contain.text","Peter Mac")
    cy.get("div.box.noHeader:nth-child(2) div.inner table.table.hover tbody:nth-child(2) tr.odd td.left:nth-child(4) > a:nth-child(1)").should("contain.text","Anderson")
}

}
export default ViewEmployeeList