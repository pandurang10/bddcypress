Feature: Login

    Scenario: Login to Orange CRM Website

        Given User is at the login page
        When User entering userid and pass
            | username | password |
            | Admin    | admin123 |
        And User clicks on login button
        Then User is able to successfully login to the Website
      

      Scenario: Employee search
        
        Given User is at the login page
        When User entering userid and pass
        And User clicks on login button
        Then User is able to successfully login to the Website
        And Click on PIM option
     And Click on Employee list option 
       And Enter Employee Name
         And Click on Search Button
        
