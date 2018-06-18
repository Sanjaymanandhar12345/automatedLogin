describe('demo', function () {
    var FN=element(by.model('first'));
    var SN=element(by.model('second'));
    var c=element(by.id('gobutton'));
    var last=element(by.binding('latest'));
    it('check',function () {
        browser.get('http://juliemr.github.io/protractor-demo/');

    });
    // it ('checks for title correctly',function () {
    //     expect(by.getTitle()).toEqual('Super Calculator');
    // })
    it('add 1 and 2', function () {
        FN.sendKeys(1);
        SN.sendKeys(2);
        c.click();
        expect(last.getText()).toEqual('3');
    })
    it('should read the value from an input', function() {
        FN.sendKeys(1);
        expect(FN.getAttribute('value')).toEqual('1');
    });
});