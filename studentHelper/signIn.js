var sign=require('./funct.js');
describe('sign In',function () {
    it('sign in check', function () {
        sign.ang(false);
        sign.url('http://www.studenthelper.info/bookstorelogin');
        sign.signN('sanjay.manandhar123456789@gmail.com');
        sign.signP('radhika12345');
        sign.checkBox();
        sign.signIn();
        browser.sleep(10000);
    });
});
