exports.config = {
    specs: [
        "../Tests/startingPage.spec.js",
        "../Tests/communitySearch.spec.js"],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: "chrome",
        unexpectedAlertBehaviour: "accept",
        chromeOptions: {
            'w3c': false,
            args: ["--disable-browser-side-navigation",
                //"--headless", 
                "--disable-gpu", "--window-size=1920,1080",
                '--no-sandbox', '--disable-dev-shm-usage'
            ]
        }
    },
    params: {
        systemUnderTestUrl: "https://community-z.com"
    },
    framework: "jasmine2",
    getPageTimeout: 240000,
    allScriptsTimeout: 240000,
    jasmineNodeOpts: { defaultTimeoutInterval: 600000, shoColor: true, showTiming: true },
    restartBrowserBetweenTests: false,
    logLevel: 'DEBUG'
};
