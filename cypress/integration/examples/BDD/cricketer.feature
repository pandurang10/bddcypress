#   .\node_modules\.bin\cypress  run --spec cypress\integration\examples\BDD\cricketer.feature --headed
#  Run single feature file

    Feature: End to end Cricker Search 

    Scenario Outline: Outline Scenario example
    Given Navigate to Google Search Page
    Then Search for Cricketer name as "<cricketer>"
    ##When Click on wikipedia link
    Then Should display cricker name
        Examples:
            |cricketer|
            | Sachin Tendulkar |
            | Rahul Dravid     |
            | Anil Kumble      |
            | Virat Kohli      |
            | Rohit Sharma     |
