describe('demo', function () {
    it('demo test case', function () {
        browser.get('http://www.angularjs.org')
        element(by.model('yourName')).sendKeys('Sanjay');
        var greeting=element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Sanjay!');
    })
})