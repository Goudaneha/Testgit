$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/nehaashokj/TestJenkins/src/test/java/E-Commerce.feature");
formatter.feature({
  "line": 1,
  "name": "Welcome to online shopping",
  "description": "",
  "id": "welcome-to-online-shopping",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Welcome to E-Commerce Website",
  "description": "",
  "id": "welcome-to-online-shopping;welcome-to-e-commerce-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Signin \u003c\"signin\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User has to provide \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on \u003c\"createacc\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "name \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicks on \u003c\"Reg\"\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "welcome-to-online-shopping;welcome-to-e-commerce-website;",
  "rows": [
    {
      "cells": [
        "signin",
        "email",
        "createacc",
        "firstname",
        "lastname",
        "Reg"
      ],
      "line": 14,
      "id": "welcome-to-online-shopping;welcome-to-e-commerce-website;;1"
    },
    {
      "cells": [
        "signin",
        "apples77@gamil.com",
        "createacc",
        "Smith",
        "Tom",
        "Reg"
      ],
      "line": 15,
      "id": "welcome-to-online-shopping;welcome-to-e-commerce-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Welcome to E-Commerce Website",
  "description": "",
  "id": "welcome-to-online-shopping;welcome-to-e-commerce-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Signin \u003c\"signin\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User has to provide \"apples77@gamil.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on \u003c\"createacc\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters \"Smith\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "name \"Tom\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicks on \u003c\"Reg\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_Registration_page()"
});
formatter.result({
  "duration": 50077350400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 24
    }
  ],
  "location": "StepDefinition.user_clicks_on_Signin(String)"
});
formatter.result({
  "duration": 7264661700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apples77@gamil.com",
      "offset": 21
    }
  ],
  "location": "StepDefinition.user_has_to_provide(String)"
});
formatter.result({
  "duration": 10939640300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createacc",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click_on(String)"
});
formatter.result({
  "duration": 4298695500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_enters(String)"
});
formatter.result({
  "duration": 6084498900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 6
    }
  ],
  "location": "StepDefinition.name(String)"
});
formatter.result({
  "duration": 36021700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Reg",
      "offset": 12
    }
  ],
  "location": "StepDefinition.clicks_on(String)"
});
formatter.result({
  "duration": 569695000,
  "status": "passed"
});
});