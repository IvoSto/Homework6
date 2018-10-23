package login;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.After;
import org.openqa.selenium.WebDriver;
import pages.AdminLogin;
import utilities.Browser;
import utilities.verificators.CommonVerifications;

public class LoginTest {

    private WebDriver driver;

    @Before
    public void setup() {
        Browser.open("chrome");
    }


    @Given("^the user is on Login page$")
    public void theUserIsOnLoginPage() {
        AdminLogin.open();
    }


    @When("^he enters \"([^\"]*)\" as username$")
    public void heEntersAsUsername(String username) {
        AdminLogin.insertUsername(username);
    }

    @And("^he enters \"([^\"]*)\" as password$")
    public void heEntersAsPassword(String password) {
        AdminLogin.insertPassword(password);
    }

    @And("^he submits request for login$")
    public void heSubmitsRequestForLogin() {
        AdminLogin.submit();
    }

    @Then("^ensure the user is successfully logged in$")
    public void ensureTheUserIsSuccessfullyLoggedIn() {
        CommonVerifications.verifyTitle("Dashboard",
                "The title was not present, so we are NOT logged in. BUUUG! ");
    }

    @Then("^ensure a login failure message \"([^\"]*)\" is displayed$")
    public void ensureALoginFailureMessageIsDisplayed(String expected_failure_message) {
        AdminLogin.verifyLoginFormValidationMessage("Invalid token session. Please login again.",
                "The expected validation message for wrong credentials was not present, BUUUUUG");
    }

    @cucumber.api.java.After
    public void tearDown() {
        Browser.quit();
    }


}


