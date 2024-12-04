export const config = {
  user: 'oauth-ls.corporativo18-b3013',
  key: 'dccdb8f4-3d8d-4a75-bd66-7ef239c9d046',
  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  baseUrl: 'wd/hub',

  specs: [
      './test/specs/**/*.js'
  ],
  maxInstances: 1, 
  capabilities: [
      {
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'sauce:options': {
           build: 'appium-build-ebacshop-test',
           name: 'Ebac Shop Teste',
           deviceOrientation: 'PORTRAIT',
         },
       }
    ],
  logLevel: 'info',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  framework: 'mocha',
  reporters: [
      'spec', 
      ['allure', {
          outputDir: 'allure-results',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: true,
      }]
  ],
  mochaOpts: {
      ui: 'bdd',
      timeout: 60000
  },

  // Hook to run before the session starts
  beforeSession: async () => {
      global.driver = await remote({
        user: 'oauth-ls.corporativo18-b3013',
        key: 'dccdb8f4-3d8d-4a75-bd66-7ef239c9d046',
        hostname: 'ondemand.us-west-1.saucelabs.com',
        port: 443,
        baseUrl: 'wd/hub',
      });
  },

  // Hook to clean up after the session
  afterSession: async () => {
      const jobStatus = 'passed'; // or 'failed'
      await global.driver.execute('sauce:job-result=' + jobStatus);
      await global.driver.deleteSession();
  },
};