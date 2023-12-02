const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xk38hp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
