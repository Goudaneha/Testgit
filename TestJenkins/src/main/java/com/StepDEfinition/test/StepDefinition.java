package com.StepDEfinition.test;

import com.business.test.Business;
import com.pageobjects.test.PageObj;
import com.utility.test.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	@Given("^User is on Registration page$")
	public void user_is_on_Registration_page() throws InterruptedException {
		Business.setupbrowser();
		Thread.sleep(2000);
	}

	@When("^User clicks on Signin <\"([^\"]*)\">$")
	public void user_clicks_on_Signin(String signin) throws InterruptedException  {
		Thread.sleep(2000);
	    CommonMethods.clickmethod(PageObj.signin);
	    
	}

	@Then("^User has to provide \"([^\"]*)\"$")
	public void user_has_to_provide(String email) throws InterruptedException {
		
	   CommonMethods.sendmethod(PageObj.email,email);
	   Thread.sleep(2000);
	}

	@Then("^click on <\"([^\"]*)\">$")
	public void click_on(String createacc) throws InterruptedException {
		Thread.sleep(4000);
	    CommonMethods.clickmethod(PageObj.createacc);	    
	}

	@When("^User enters \"([^\"]*)\"$")
	public void user_enters(String firstname){
		CommonMethods.sendmethod(PageObj.firstname,firstname);
	}
	
	@When("^name \"([^\"]*)\"$")
	public void name(String lastname) {
		CommonMethods.sendmethod(PageObj.lastname,lastname);
	}

	@Then("^clicks on <\"([^\"]*)\">$")
	public void clicks_on(String Reg) {
		CommonMethods.clickmethod(PageObj.reg);
	}
}
