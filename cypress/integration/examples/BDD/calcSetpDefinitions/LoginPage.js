class LoginPage{
    static loadHomepage(){
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    }
    static Input(datatable){
        
            cy.get("#txtUsername").type('Admin');
            cy.get("#txtPassword").type('admin123');
    
}
static login(){
    cy.get("#btnLogin").click()
}
static Title(){
    cy.get("div:nth-child(1) div:nth-child(3) div.box:nth-child(3) div.head > h1:nth-child(1)").should('contain.text','Dashboard')
}
}
export default LoginPage