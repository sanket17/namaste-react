const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.baseUrl = "http://localhost:1234";
      config.defaultCommandTimeout = 8000;
      return config;
    },
  },
});
