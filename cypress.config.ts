import { defineConfig } from "cypress";
module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'https://www.swisscom.ch/en',
    viewportWidth: 1200,
    viewportHeight: 960,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: true,
    defaultCommandTimeout: 10000,
    includeShadowDom: true,
    chromeWebSecurity: false,
    video: true,
    retries:{
      runMode:1,
      openMode:1
    }
  },
});
