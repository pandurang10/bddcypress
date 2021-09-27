Feature: Login

    Scenario: Login to Orange CRM Website

       Given User is at the login page
     When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Then User is able to successfully login to the Website
        Examples:
            | username | password |
            | Admin    | admin123 |

Scenario: Employee search
        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And Click on PIM option
        And Click on Employee list option
        And Enter Employee Name
 
            | EmpName            |
            | Peter Mac Anderson |
 
        And Click on Search Button
        Then Validate Emplyee deatils
            | Id   | FirstName | LastName |
            | 0007 | Peter Mac | Anderson |