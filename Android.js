const { remote } = require('webdriverio');

const opts = {
  port: 4723,
  capabilities: {
    'appium:platformName': "Android",
    'appium:platformVersion': "14",
    'appium:deviceName': "emulator-5554",
    'appium:app': "C:\\Users\\marye\\Downloads\\testproject-demo-app.apk",
    'appium:automationName': "UiAutomator2"
  }
};

async function main() {
    const driver = await remote(opts);

    const name = await driver.$("id:io.testproject.demo:id/name");
    await name.addValue("Mary En");

    const password = await driver.$("id:io.testproject.demo:id/password");
    await password.addValue("12345");

    const loginBtn = await driver.$("id:io.testproject.demo:id/login");
    await loginBtn.click();

    const country = await driver.$("id:io.testproject.demo:id/country");
    await country.addValue("Canada");

    const address = await driver.$("id:io.testproject.demo:id/address");
    await address.addValue("Planet Earth");

    const email = await driver.$("id:io.testproject.demo:id/email");
    await email.addValue("someemail@gmail.com");

    const phone = await driver.$("id:io.testproject.demo:id/phone");
    await phone.addValue("070675339");

    const saveBtn = await driver.$("id:io.testproject.demo:id/save");
    await saveBtn.click();

    const logout = await driver.$("id:io.testproject.demo:id/logout");
    await logout.click();

    await driver.deleteSession();  // End the session
}

main();
