@Sanity
Feature: Validate the forgotten password functionality
Scenario: Validate the forgotton with invalid mobilenumber
#Given User should open edge browser and load url
When User should click the forgotten password link
And User should input invalid mobilenumber on the textbox
And User should click the search button
Then User should navigate to recover page

