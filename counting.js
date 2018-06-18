describe('demo',function () {
    var FN=element(by.model('first'));
    var SN=element(by.model('second'));
    var go=element(by.id('gobutton'));
    function add (a,b) {
        FN.sendKeys(a);
        SN.sendKeys(b);
        go.click();
    };
    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });
    it('main', function () {
        add(1,2);
        add(5,6);
        expect(element.all(by.repeater('result in memory')).count()).toEqual(2);
        
        expect(element.all(by.repeater('result in memory')).last().getText()).toContain('1 + 2');
        expect(element.all(by.repeater('result in memory')).first().getText()).toContain('5 + 6');
    });
});