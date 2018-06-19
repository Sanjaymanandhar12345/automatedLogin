exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    suites: {
       home:'Linotype/passValue.js',
        signup: 'Linotype/functions.js'
    },
    capabilities: {
    'browserName': 'chrome'
    },


};