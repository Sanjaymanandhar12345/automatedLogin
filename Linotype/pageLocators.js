var linotypeTest=function () {
    browser.ignoreSynchronization = true;

    this.loginE = element(by.css('div.field-wrapper > #email'));
    this.loginP = element(by.css('div.field-wrapper > #password'));
    this.loginButton=element(by.xpath('//div/button/div/span[@class="button-text"]'));
    this.company=element(by.css('input[name="identity[OrganizationName]"]'));
    this.firstName=element(by.css('input[name="primaryAddress[FirstName]"]'));
    this.street=element(by.css('input[name="primaryAddress[Address1]"]'));
    this.zip=element(by.css('input[name="primaryAddress[PostalCode]"]'));
    this.lastName=element(by.css('input[name="primaryAddress[LastName]"]'));
    this.city=element(by.css('input[name="primaryAddress[City]"]'));
    this.emailId=element(by.css('input[name="primaryAddress[Email]"]'));
    this.password=element(by.css('input[name="settings[password]"]'));
    this.cpassword=element(by.css('input[name="settings[passwordConfirm]"]'));
    this.country=element(by.css('select[name="primaryAddress[CountryCode]"]'));
    this.button=element(by.css('button[name="editCustomer"]'));
    this.searchButton=element(by.id('page-search-input-in'));
   // this.familyPage=element(by.css('a[href="/99692/frutiger-capitalis-family.html"]'));
   // this.desktopButton=element(by.id('99695-1-checkbox'));
    //this.addTOcart=element(by.css('a[class="catalog-font-family arrow-anchor-box-shadow active"]'));

};
module.exports=new linotypeTest();