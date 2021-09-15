Feature: End to end Basic Calculator validation
    As User, I want to verify all operation, so that we can enjoy the Basic Calculator application with diffrent build number

    @Smoke
    Scenario: Verify Add operation
        Given I open Basic Calculator Page
        When Select Build number
            | build |
            | 1     |
        And Enter first and second number
            | first | second |
            | 10    | 20     |
        And Select Operation
            | operation |
            | Add       |
        Then Validate Result
            | result |
            | 30     |

    @Smoke
    Scenario: Verify Substract operation
        Given I open Basic Calculator Page
        When Select Build number
            | build |
            | 1     |
        And Enter first and second number
            | first | number |
            | 10    | 20     |
        And Select Operation
            | operation |
            | Sub       |
        Then Validate Result
            | result |
            | -10    |


    @Smoke
    Scenario: Verify Multiplication operation
        Given I open Basic Calculator Page
        When Select Build number
            | build |
            | 1     |
        And Enter first and second number
            | first | number |
            | 10    | 20     |
        And Select Operation
            | operation |
            | Multiply  |
        Then Validate Result
            | result |
            | 200    |

    @Smoke
    Scenario: Verify Multiplication operation
        Given I open Basic Calculator Page
        When Select Build number
            | build |
            | 1     |
        And Enter first and second number
            | first | number |
            | 20    | 20     |
        And Select Operation
            | operation |
            | Multiply  |
        Then Validate Result
            | result |
            | 200    |