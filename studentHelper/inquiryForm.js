var form=require('./funct.js');
describe('inquiry',function () {
    it('should check name', function () {
        form.ang(false);
        form.url('http://www.studenthelper.info/');
        form.inqName('sanjay');
        browser.sleep(10000);
    });

});