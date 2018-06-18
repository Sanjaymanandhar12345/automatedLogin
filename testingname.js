describe('demo',function () {
    it('check name',function () {
        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('sanjay');
        expect(element(by.binding('yourName')).getText()).toEqual('Hello sanjay!');
    });
});