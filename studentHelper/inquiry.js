describe('demo',function () {
    it('should login', function () {
        browser.ignoreSynchronization=true;
        browser.get('https://test.linotype.com/account/login');

        element(by.css('div.field-wrapper > #email')).sendKeys('fdc.howdy.qa.sanjay.uba@gmail.com');
        element(by.css('div.field-wrapper > #password')).sendKeys('radhika12345');

    });
})