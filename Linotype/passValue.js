var newz=require('./pageLocators.js');
describe('login credentials',function () {
    it('should check for login', function () {
        browser.get('https://test.linotype.com/account/login');

        newz.loginEmail('fdc.howdy.qa.sanjay.uba@gmail.com');
        newz.loginPassword('radhika12345');

    });
});


