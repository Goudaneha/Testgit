Feature: Welcome to online shopping

Scenario Outline: Welcome to E-Commerce Website

Given User is on Registration page 
When User clicks on Signin <"signin">
Then User has to provide "<email>" 
And click on <"createacc">
When User enters "<firstname>"
And name "<lastname>"
Then  clicks on <"Reg">

Examples:
|signin|email             |createacc|firstname|lastname|Reg|
|signin|apples77@gamil.com|createacc|Smith    |Tom     |Reg|