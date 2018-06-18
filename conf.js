exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
       home:'forRegistrationMock/send.js'
    },
    capabilities: {
    'browserName': 'chrome'
    }
};