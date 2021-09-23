import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import Login from "./PageObjectModel/pgm";

let userName;
let shirt,colors;
const login= new Login();

Given('Open the Url', function() {
    login.url() 
    login.dismissnote()
})

And('Click on MyAccount',function(){
    login.myaccount()
})

And('entering username as {string} and password as {string}',(username,password) =>{
    userName=username
    cy.get('.u-column1 > .woocommerce-form > :nth-child(1) > label').type(username)
    cy.get('#password').type(password)
    console.log(username);
    console.log(password);
})
And ('Click on logging button',function(){
    login.loggInBtn()
})

When('Click on Search & Enter product as {string}',(product) =>{
    shirt =product
    login.search()
    cy.get('.form-control').type(product).type('{enter}')
})
And('Click on product',function(){
   login.product() 
})
And('Select Color as {string} and Size as {string} of product',function(Color,Size){
    colors =Color
    cy.scrollTo(0, 500)
    cy.get('#pa_color').select(Color)
    cy.get('#pa_size').select(Size)
})
And('Click on Add to cart',function(){
    login.addcart()
})
And('Click on Shop cart',function(){
    login.shopcart()
})
And('Validate the order',function(){
    login.validateOrder()
})
And('Click to proceed ',function(){
    login.proceed()
})
