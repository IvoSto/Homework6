package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import utilities.Browser;

public class AdminLogin {
    private static final By LOC_USERNAME_FIELD = By.id("input-username");
    private static final By LOC_PASSWORD_FIELD = By.id("input-password");
    private static final By LOC_LOGIN_BUTTON = By.cssSelector("div.panel-body button.btn.btn-primary");
    private static final By LOC_LOGIN_FORM_VALIDATION_MESSAGE = By.cssSelector("div.alert-danger");

    /**
     * This method opens the administration login page
     */
    public static void open() {
        Browser.driver.get("http://shop.pragmatic.bg/admin");
    }

    /**
     * This method iserts the username for logging in
     * @param username - the username for log in
     */
    public static void insertUsername(String username) {
        Browser.driver.findElement(LOC_USERNAME_FIELD).sendKeys(username);
    }

    /**
     * This method iserts the password for logging in
     * @param password - the password for logging in
     */
    public static void insertPassword(String password) {
        Browser.driver.findElement(LOC_PASSWORD_FIELD).sendKeys(password);
    }

    /**
     * This method submits the iserted credentials
     */
    public static void submit() {
        Browser.driver.findElement(LOC_LOGIN_BUTTON).click();
    }

    /**
     * Verifies the validation message present in the login page after
     * unsuccessful attempt to login
     *
     * @param expectedValidationMessage the validation message you would expect to be present
     * @param messageOnFailure the message that will appear in the report in case of failures
     */
    public static void verifyLoginFormValidationMessage(String expectedValidationMessage, String messageOnFailure) {
        String actualValidationMessage = Browser.driver.findElement(LOC_LOGIN_FORM_VALIDATION_MESSAGE).getText();

        Assert.assertTrue(messageOnFailure, actualValidationMessage.contains(expectedValidationMessage));
    }
}
