var call=require('./variab.js');
var ok=function () {
    this.ang=function (val) {
         return browser.waitForAngularEnabled(val);
    };
    this.url=function (u) {
        return browser.get(u);
    };
    this.first=function (para) {
        call.registerName.sendKeys(para);
    };
    this.last=function (para) {
        call.registerSecondName.sendKeys(para);
    };
    this.remail=function (para) {
        call.registerEmail.sendKeys(para);
    };
    this.pass=function (para) {
        call.registerPassword.sendKeys(para);
    };
    this.cpass=function (para) {
        call.registerCpassword.sendKeys(para);
    };
    this.butt=function(){
        call.registerButton.click();
    };
    this.inqName=function (para) {
        call.inquiryName.sendKeys(para);
    };
    this.signN=function (para) {
        call.signName.sendKeys(para);
    };
    this.signP=function (para) {
        call.signPass.sendKeys(para);
    };
    this.checkBox=function () {
        call.checkB.click();
    };
    this.signIn=function () {
        call.but.click();
    }

};
module.exports=new ok();