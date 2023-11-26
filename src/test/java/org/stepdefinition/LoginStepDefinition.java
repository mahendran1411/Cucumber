package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.utilities.BaseClass;
import org.utilities.LoginPojo;

import io.cucumber.java.en.*;

public class LoginStepDefinition extends BaseClass{
	@Given("User should launch the edge browser and load the url")
	public void user_should_launch_the_edge_browser_and_load_the_url() {
//		launchEdge();
//		loadUrl("https://www.facebook.com");
//		winMax();
//	    
	}

	@When("User should input invalid username and invalid password in the textbox")
	public void user_should_input_invalid_username_and_invalid_password_in_the_textbox() {
	   LoginPojo l = new LoginPojo();
	   WebElement txtUser = l.getTxtUser();
	   WebElement txtpass = l.getTxtpass();
	   fill(txtUser, "Greens");
	   fill(txtpass, "Greens@123");
	   
	}

	@When("User should click the login button")
	public void user_should_click_the_login_button() throws InterruptedException {
		 LoginPojo l = new LoginPojo();
		 WebElement btnLogin = l.getBtnLogin();
		 btnClick(btnLogin);
		 Thread.sleep(2000);
	}

	@Then("User should navigate to incorrect credential page")
	public void user_should_navigate_to_incorrect_credential_page() {
	   String Url = driver.getCurrentUrl();
	   Assert.assertTrue("Check Login Page", Url.contains("privacy"));
	   System.out.println("Test Case Pass");
//	   closeEdge();
	}
	@When("User should print the title of page")
	public void userShouldPrintTheTitleOfPage() {
	   printTitle();
	}

	@When("User should print the current url of my page")
	public void userShouldPrintTheCurrentUrlOfMyPage() {
	   printCurrentUrl();
	}

	@When("User should input valid username and invalid password in the textbox")
	public void userShouldInputValidUsernameAndInvalidPasswordInTheTextbox() {
	    LoginPojo l = new LoginPojo();
	    WebElement txtUser = l.getTxtUser();
		   WebElement txtpass = l.getTxtpass();
		   fill(txtUser, "Ajay");
		   fill(txtpass, "Greens@123");
//		   closeEdge();
	}
	@When("User should input invalid username {string} and valid password{string} in  the textbox")
	public void userShouldInputInvalidUsernameAndValidPasswordInTheTextbox(String s1, String s2) {
		LoginPojo l = new LoginPojo();
	    WebElement txtUser = l.getTxtUser();
		   WebElement txtpass = l.getTxtpass();
		   fill(txtUser, s1);
		   fill(txtpass, s2);
//		  closeEdge();
	}
	@When("User should input invalid username and invalid passworD in the textbox")
	public void userShouldInputInvalidUsernameAndInvalidPassworDInTheTextbox(io.cucumber.datatable.DataTable d) throws InterruptedException {
		       LoginPojo l = new LoginPojo();
		       WebElement txtUser = l.getTxtUser();
			   WebElement txtpass = l.getTxtpass();
//			   List<String> li = d.asList();   //-------> 1D LIST
//			   String uservalue = li.get(2); //Vinay
//			   String passvalue = li.get(5); //Praveen@123
			   
//			   List<List<String>> li = d.asLists(); //All rows  ----->2DLIST
//			   List<String> a = li.get(1);
//			   String uservalue = a.get(4); //Black
//			   List<String> b = li.get(2);
//			   String passvalue = b.get(3); //Orange@123
			   
			   // 1D--> Map --> With Header
//			   Map<String, String> mp = d.asMap(String.class, String.class);
//			   
//			   //mp.get(key);
//			   String uservalue = mp.get("Fruits"); //Apple
//			   String passvalue = mp.get("Person"); //Kumar
			   
//			   // 2D-->Map-->With Header
			   List<Map<String, String>> mp = d.asMaps();
			   //mp.get(key)
			   Map<String, String> m = mp.get(2); //Red
			   String uservalue = m.get("Colour");
			   
			   Map<String, String> x= mp.get(0); //Apple
			   String passvalue = x.get("Fruits");
			   
			   
			   fill(txtUser, uservalue);
			   fill(txtpass, passvalue); 
			   Thread.sleep(2000);
	}


}
