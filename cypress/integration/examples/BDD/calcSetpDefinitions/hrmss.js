/// <reference types="Cypress" />
import LoginPage from './LoginPage'
import Hrms1page from './Hrms1page'
import ViewEmployeeList from './ViewEmployeeList';
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";



Given(' User is at the login page',()=>{
   
LoginPage.loadHomepage();

})

When('User entering userid and pass',()=>{
LoginPage.Input();
})

And('User clicks on login button',()=>{
    LoginPage.login();

})
Then('User is able to successfully login to the Website',()=>{
    LoginPage.Title();

})

And('Click on PIM option',()=>{
    Hrms1page.PIM();

})

And('Click on Employee list option',()=>{
    ViewEmployeeList.ClickEmployeeList();
})

And('Enter Employee Name',()=>{
ViewEmployeeList.SearchEmp();
})
And('Click on Search Button',()=>{
    ViewEmployeeList.ClickOnSearch();
})

