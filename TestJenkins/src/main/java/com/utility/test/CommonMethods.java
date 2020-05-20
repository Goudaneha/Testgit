package com.utility.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.StepDEfinition.test.StepDefinition;
import com.business.test.Business;

public class CommonMethods extends StepDefinition {

	public static void clickmethod(By click) {
		WebElement clk = Business.getobject().findElement(click);
		clk.click();
		
	}
	public static void sendmethod(By send,String args) {
		WebElement element = Business.getobject().findElement(send);
		element.sendKeys(args);
	}

}
