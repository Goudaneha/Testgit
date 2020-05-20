package com.utility.test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BrowserConfig {

private static WebDriver driver;
	
public static WebDriver browsername(String browser) {
	if(browser.equalsIgnoreCase("gecko")) {
		System.setProperty("webdriver.gecko.driver","D://driver//geckodriver.exe");
		driver = new FirefoxDriver();	
		}
	else if(browser.equals("chrome")){
		System.setProperty("webdriver.chrome.driver","‪D://chromedriver_win32//chromedriver.exe");
		driver = new ChromeDriver();
		}
	driver.get("http://automationpractice.com/index.php");
	driver.manage().deleteAllCookies();
	driver.manage().window().maximize();
	
	driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	
		return driver;
		}
}
