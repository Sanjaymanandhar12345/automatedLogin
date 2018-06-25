// describe('demo',function () {
//     it('should login', function () {
//         browser.ignoreSynchronization=true;
//         browser.get('http://www.studenthelper.info/register');
//         element(by.css('input[name="name"]')).sendKeys('sanjay');
//         browser.sleep(10000);
//
//     });
// })
var pass=require('./funct.js');
describe('pass value',function () {
    it('should pass name', function () {
        pass.ang(false);
        pass.url('http://www.studenthelper.info/register');
        pass.first('sanjay');
        pass.last('manan');
        pass.remail('sanjay.manandhar123456789@gmail.com');
        pass.pass('radhika12345');
        pass.cpass('radhika12345');
        pass.butt();
        //browser.sleep(10000);
    });
});