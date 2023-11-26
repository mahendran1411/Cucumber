$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Forgotten.feature");
formatter.feature({
  "name": "Validate the forgotten password functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Validate the forgotton with invalid mobilenumber",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should click the forgotten password link",
  "keyword": "When "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldClickTheForgottenPasswordLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should input invalid mobilenumber on the textbox",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldInputInvalidMobilenumberOnTheTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldClickTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to recover page",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldNavigateToRecoverPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Login.feature");
formatter.feature({
  "name": "Validate the login Functionality of Facebook Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Yellow"
    },
    {
      "name": "@Pink"
    }
  ]
});
formatter.step({
  "name": "User should input invalid username and invalid passworD in the textbox",
  "rows": [
    {
      "cells": [
        "Person",
        "Colour",
        "Fruits"
      ]
    },
    {
      "cells": [
        "Ajay",
        "Greens",
        "Apple"
      ]
    },
    {
      "cells": [
        "Kumar",
        "Pink",
        "Grapes"
      ]
    },
    {
      "cells": [
        "Kavin",
        "Red",
        "Hello"
      ]
    },
    {
      "cells": [
        "Vimal",
        "Yellow",
        "How"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputInvalidUsernameAndInvalidPassworDInTheTextbox(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheTitleOfPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfMyPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Yellow"
    },
    {
      "name": "@Hello"
    }
  ]
});
formatter.step({
  "name": "User should input valid username and invalid password in the textbox",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputValidUsernameAndInvalidPasswordInTheTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheTitleOfPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfMyPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Red"
    }
  ]
});
formatter.step({
  "name": "User should input invalid username \"\u003cFruits\u003e\" and valid password\"\u003cColours\u003e\" in  the textbox",
  "keyword": "When "
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Fruits",
        "Colours"
      ]
    },
    {
      "cells": [
        "Apple",
        "Greens"
      ]
    },
    {
      "cells": [
        "Orange",
        "Yellow"
      ]
    },
    {
      "cells": [
        "Grapes",
        "Black"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Red"
    }
  ]
});
formatter.step({
  "name": "User should input invalid username \"Apple\" and valid password\"Greens\" in  the textbox",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputInvalidUsernameAndValidPasswordInTheTextbox(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheTitleOfPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfMyPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Red"
    }
  ]
});
formatter.step({
  "name": "User should input invalid username \"Orange\" and valid password\"Yellow\" in  the textbox",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputInvalidUsernameAndValidPasswordInTheTextbox(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheTitleOfPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfMyPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Red"
    }
  ]
});
formatter.step({
  "name": "User should input invalid username \"Grapes\" and valid password\"Black\" in  the textbox",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputInvalidUsernameAndValidPasswordInTheTextbox(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheTitleOfPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfMyPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});