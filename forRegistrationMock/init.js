var test=function () {
    var get=browser.get('https://mockola.com/#/register');
    var userName=element(by.model('vm.registerAccount.login'));
    var email=element(by.model('vm.registerAccount.email'));
    var passw=element(by.model('vm.registerAccount.password'));
    var cpassw=element(by.model('vm.confirmPassword'));
    var registerButton=element(by.css('button.btn.btn-primary'));
    this.loginPatternValidation=element(by.css('[ng-show-"form.login.$error.pattern"]'));
    this.loginMaxLengthValidation=element(by.css('[ng-show-"form.login.$error.maxlength"]'));
    this.got=function () {
        return get;
    };
            this.user=function (uname) {
            userName.sendKeys(uname);
            };
            this.mail=function (gmail) {
              email.sendKeys(gmail);
            };
            this.pas=function (pass) {
                passw.sendKeys(pass);
            };
            this.cpass=function (cpas) {
                cpassw.sendKeys(cpas);
                };
            this.butt=function () {
        registerButton.click();
    }

};
module.exports=new test();
