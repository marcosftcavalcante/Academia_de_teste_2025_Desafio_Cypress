const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.feature',
    //baseUrl: 'https://sampleapp.tricentis.com/101/app.php',
    baseUrl: 'https://sampleapp.tricentis.com/101/index.php',

    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
      // implement node event listeners here
    },
  },
});
