const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require("path");


function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false, // for navigating to different domain URL's.
    // excludeSpecPattern:"cypress/e2e/other/*.js",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    baseUrl: "http://www.webdriveruniversity.com",
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    // video:false,
    // videoCompression:5
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: 'cypress-multi-reporter',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    retries:
    {
      runMode:0,
      openMode:1,
    },
    env:
    {
      "firstname": "QAAA",
      "webdriver_uni_homepage": "http://www.webdriveruniversity.com/"
    }
  },
});

// to run from cmd, and this overrides the env set variables with cmd given env variable values.

// ./node_modules/.bin/cypress run --browser chrome --spec cypress/e2e/webdriver-uni/contact-us.js --env first_name=Bill
// -- env webdriver_uni_homepage=https://automationteststore.com/



// npm run triggerAllTests-headless -  to run scripts from package.json file.