var newz=require('./function.js');
describe('login credentials',function () {
    it('should check for login', function () {
        newz.url('https://test.linotype.com/account/login');

        newz.loginEmail('fdc.howdy.qa.sanjay.uba@gmail.com');
        newz.loginPassword('radhika12345');
        newz.loginB();
        browser.sleep(10000);


    });
});


