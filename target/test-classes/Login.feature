@smoke
Feature: Validate the login Functionality of Facebook Page
Background:
#Given User should launch the edge browser and load the url

@Yellow @Pink
Scenario: Validate the login with invalid username and invalid password

When User should input invalid username and invalid passworD in the textbox
              #2D list
              #|Kumar |Kumar@123 |Vinay |Vinay@123 |Praveen|Praveen@123|
              #|Yellow|Yellow@123|Greens|Greens@123|Black  |Black@123  |
              #|Apple |Apple@123 |Orange|Orange@123|Grapes |Grapes@123 |
              
              #2D Map --> Header
              |Person|Colour|Fruits|
              |Ajay  |Greens|Apple |
              |Kumar |Pink  |Grapes|
              |Kavin |Red   |Hello |
              |Vimal |Yellow|How   |
And User should click the login button
And User should print the title of page
And User should print the current url of my page
#Then User should navigate to incorrect credential page

@Yellow @Hello
Scenario: Validate the login with valid username and invalid password

When User should input valid username and invalid password in the textbox
And User should click the login button
And User should print the title of page
And User should print the current url of my page
Then User should navigate to incorrect credential page 

@Red
Scenario Outline: Validate the login with invalid username and valid password
When User should input invalid username "<Fruits>" and valid password"<Colours>" in  the textbox
And User should click the login button
And User should print the title of page
And User should print the current url of my page
#Then User should navigate to incorrect credential page 
Examples:
            |Fruits|Colours|
            |Apple |Greens |
            |Orange|Yellow |
            |Grapes|Black  |

