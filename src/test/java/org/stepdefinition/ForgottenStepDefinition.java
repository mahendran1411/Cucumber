package org.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.utilities.BaseClass;
import org.utilities.LoginPojo;

import io.cucumber.java.en.*;

public class ForgottenStepDefinition extends BaseClass{
	@Given("User should open edge browser and load url")
	public void userShouldOpenEdgeBrowserAndLoadUrl() {
		launchEdge();
		loadUrl("https://www.facebook.com");
		winMax();
	}

	@When("User should click the forgotten password link")
	public void userShouldClickTheForgottenPasswordLink() {
		 LoginPojo l = new LoginPojo();
		 WebElement faceforgotten = l.getFaceforgotten();
		 btnClick(faceforgotten);
	}

	@When("User should input invalid mobilenumber on the textbox")
	public void userShouldInputInvalidMobilenumberOnTheTextbox() {
		 LoginPojo l = new LoginPojo();
		 WebElement fbforgotmob = l.getFbforgotmob();
		 fill(fbforgotmob, "0123456789");
	}

	@When("User should click the search button")
	public void userShouldClickTheSearchButton() {
		LoginPojo l = new LoginPojo();
		WebElement fbforgotsubmit = l.getFbforgotsubmit();
		btnClick(fbforgotsubmit);
	}

	@Then("User should navigate to recover page")
	public void userShouldNavigateToRecoverPage() {
	    String url = driver.getCurrentUrl();
	    Assert.assertTrue("Forgotton Success", url.contains("recover"));
//	    closeEdge();
	}


}
