Feature: Shopping on Tools QA
    I want to shop on Tools QA Shopping Website

    Scenario: Placing Order for 2 Shirts

        Given Open the Url
        And Click on MyAccount
        And entering username as "Niketan" and password as "niketan123!@#"
        And Click on logging button
        When Click on Search & Enter product as "Shirt"
        And Click on product
        And Select Color as "Pink" and Size as "36" of product
        And Click on Add to cart
        And Click on Shop cart
        And Validate the order
        And Click to proceed 
        