export const config = {
    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1, 
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'ebac-qe',
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebac.shop.apks`,
        'appium:appWaitActivity': '.MainActivity',
        'appium:disableIdlocatorAutocompletion': true
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    framework: 'mocha',
    reporters: [
        'spec', // Corrigido de 'spesc'
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
};

