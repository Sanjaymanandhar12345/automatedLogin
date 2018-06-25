exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    suites: {
       //home:'studentHelper/inquiry.js',
       home: 'Linotype/testCase.js',

    },
    capabilities: {
    'browserName': 'chrome'
    },


};