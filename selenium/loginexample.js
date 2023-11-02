const { Builder, By, Key, until } = require('selenium-webdriver');

// testLoginUser
async function testUserLogin() {
  // Initialize the WebDriver
  const driver = new Builder().forBrowser('firefox').build();

  try {
    // Navigate to the login page
    await driver.get('http://the-internet.herokuapp.com/login');

    // Locate the username and password input fields and the login button
    const usernameField = await driver.findElement(By.id('username'));
    const passwordField = await driver.findElement(By.id('password'));
    const loginButton = await driver.findElement(By.xpath("//i[contains(text(),'Login')]"));
    // test case steps
    await usernameField.sendKeys('your_username');
    await passwordField.sendKeys('your_password');
    await loginButton.click();
    try {
    const wronguser = await driver.findElement(By.xpath("//div[contains(text(),'Your username is invalid!')]"));
    // assertions
        const isElementDisplayed = await wronguser.isDisplayed();
        if (isElementDisplayed) {
            console.log('UserLogin test case passed!');
        } else {
            console.log('UserLogin test case failed!');
        }
    // Successful
    console.log('Login scenario 1 passed!');
    } catch (error) {
        if (error.name === 'NoSuchElementError') {
            console.log('Element not found at scenario 1. Handling this error.');
            console.error('Login scenario 1 failed:', error);
        } else {
            console.error('Unexpected error:', error.message);
            // Handle other unexpected errors
        }
    }
  } catch (error) {
    // Errors
    console.error('Login scenario 1 failed:', error);
  } finally {
    // Close the browser window
    await driver.quit();
  }
}

// testPasswdUser
async function testUserPassswd() {
  // Initialize the WebDriver
  const driver = new Builder().forBrowser('firefox').build();

  try {
    // Navigate to the login page
    await driver.get('http://the-internet.herokuapp.com/login');
    // Locate the username and password input fields and the login button
    const usernameField = await driver.findElement(By.id('username'));
    const passwordField = await driver.findElement(By.id('password'));
    const loginButton = await driver.findElement(By.xpath("//i[contains(text(),'Login')]"));
    // test case steps
    await usernameField.sendKeys('tomsmith');
    await passwordField.sendKeys('your_password');
    await loginButton.click();
    try {
    const wrongpasswd = await driver.findElement(By.xpath("//div[contains(text(),'Your password is invalid!')]"));
    // assertions
        const isElementDisplayed = await wrongpasswd	.isDisplayed();
        if (isElementDisplayed) {
            console.log('UserPassswd test case passed!');
        } else {
            console.log('UserPassswd test case failed!');
        }
    // Successful
    console.log('Login scenario 2 passed!');
    } catch (error) {
        if (error.name === 'NoSuchElementError') {
            console.log('Element not found at scenario 2. Handling this error.');
            console.error('Login scenario 2 failed:', error);
        } else {
            console.error('Unexpected error:', error.message);
            // Handle other unexpected errors
        }
    }
  } catch (error) {
    // Errors
    console.error('Login scenario 2 failed:', error);
  } finally {
    // Close the browser window
    await driver.quit();
  }
}

// testPasswdUser
async function testLoginSuccesful() {
  // Initialize the WebDriver
  const driver = new Builder().forBrowser('firefox').build();

  try {
    // Navigate to the login page
    await driver.get('http://the-internet.herokuapp.com/login');
    // Locate the username and password input fields and the login button
    const usernameField = await driver.findElement(By.id('username'));
    const passwordField = await driver.findElement(By.id('password'));
    const loginButton = await driver.findElement(By.xpath("//i[contains(text(),'Login')]"));
    // test case steps
    await usernameField.sendKeys('tomsmith');
    await passwordField.sendKeys('SuperSecretPassword!');
    await loginButton.click();
    try {
    const correctuserandpasswd = await driver.findElement(By.xpath("//div[contains(text(),'You logged into a secure area!')]"));
    // assertions
        const isElementDisplayed = await correctuserandpasswd.isDisplayed();
        if (isElementDisplayed) {
            console.log('LoginSuccesful test case passed!');
        } else {
            console.log('LoginSuccesful test case failed!');
        }
    // Successful
    console.log('Login scenario 3 passed!');
    } catch (error) {
        if (error.name === 'NoSuchElementError') {
            console.log('Element not found at scenario 3. Handling this error.');
            console.error('Login scenario 3 failed:', error);
        } else {
            console.error('Unexpected error:', error.message);
            // Handle other unexpected errors
        }
    }
  } catch (error) {
    // Errors
    console.error('Login scenario 3 failed:', error);
  } finally {
    // Close the browser window
    await driver.quit();
  }
}

// Run the scenarios
testUserLogin();
testUserPassswd();
testLoginSuccesful();