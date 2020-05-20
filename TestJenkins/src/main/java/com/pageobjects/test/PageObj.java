package com.pageobjects.test;

import org.openqa.selenium.By;

public class PageObj {

	public static By signin = By.xpath("//a[@title='Log in to your customer account']");
	public static By email = By.xpath("//input[@id='email_create']");
	public static By createacc = By.xpath("//i[@class='icon-user left']");
	public static By firstname = By.xpath("//input[@id='customer_firstname']");
	public static By lastname = By.xpath("//input[@id='customer_lastname']");
	public static By reg = By.xpath("//span[contains(text(),'Register')]");
}
