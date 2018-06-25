var call=require('./pageLocators.js');



describe('test cases',function () {
    it('check desktop license for any family', function () {
    browser.get('https://test.linotype.com');

    //call.searchButton.sendKeys('');
    element(by.css('form[id="pageSearchForm"]')).submit();
    element(by.css('a[href="/99692/frutiger-capitalis-family.html"]')).click();
    // element(by.css('a[href="/cart/99703/FrutigerCapitalisSigns.html"].span[class="txt"]')).click();
        
    element(by.xpath('//div/div/div/div/div/a[@class="desktop-cart-btn catalog-font-family arrow-anchor-box-shadow add-to-cart"]/span[@class="txt"]')).click();
    browser.sleep(20000);


    });
//     it('should check for pop up', function () {
//         browser.manage().timeouts().implicitlyWait(30000);//waits for 30 seconds
//         browser.get('http://chercher.tech/practice/hidden-division-popup');
//         element(by.css('a[class="cd-popup-trigger"]')).click();
//         element(by.css('input[type="text"]')).sendKeys('sanaj');
//        // element(by.css('button[class="close"]'));
//         var path = require('path');
//         var image='../Linotype/bug1.png';
//         absolutePath = path.resolve(__dirname, image);
//         element(by.css('input[type="file"]')).sendKeys(absolutePath);
//         browser.sleep(10000);
//     });
});