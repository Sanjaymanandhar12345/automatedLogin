var linotypeTest=function () {
    browser.ignoreSynchronization = true;
    var loginE = element(by.css('div.field-wrapper > #email'));
    var loginP = element(by.css('div.field-wrapper > #password'));
    var company=element(by.css('input[name="identity[OrganizationName]"]'));
    var firstName=element(by.css('input[name="primaryAddress[FirstName]"]'));
    var street=element(by.css('input[name="primaryAddress[Address1]"]'));
    var zip=element(by.css('input[name="primaryAddress[PostalCode]"]'));
    var lastName=element(by.css('input[name="primaryAddress[LastName]"]'));
    var city=element(by.css('input[name="primaryAddress[City]"]'));
    var emailId=element(by.css('input[name="primaryAddress[Email]"]'));
    var password=element(by.css('input[name="settings[password]"]'));
    var cpassword=element(by.css('input[name="settings[passwordConfirm]"]'));
    var button=element(by.css('button[name="editCustomer"]'));
    this.loginEmail = function (email) {

        loginE.sendKeys(email);
    };
    this.loginPassword = function (password) {
        loginP.sendKeys(password);
    };
    this.c=function (co) {
        company.sendKeys(co);
    };
    this.f=function (fi) {
        firstName.sendKeys(fi);
    };
    this.s=function (st) {
        street.sendKeys(st);
    };
    this.l=function (la) {
        lastName.sendKeys(la);
    };
    this.e=function (em) {
        emailId.sendKeys(em);
    };
    this.p=function (pa) {
        password.sendKeys(pa);
    };
    this.cp=function (cpa) {
        cpassword.sendKeys(cpa);
    };
    this.z=function (zi) {
        zip.sendKeys(zi);
    };
    this.ci=function (cit) {
        city.sendKeys(cit);
    };
    this.butt=function () {
        button.click();
    }
};
module.exports=new linotypeTest();