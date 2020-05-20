package com.ruuner.test;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C://Users//nehaashokj//TestJenkins//src//test//java//E-Commerce.feature",
		plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.json"},//extent report
		glue ={"com.StepDEfinition.test"},
		format = {"pretty","html:html_ouput/cucumber.html","json:json_output/cucumber.json"},
		monochrome = true,
		strict = true,
		dryRun = false
		)
public class Runner {

}
