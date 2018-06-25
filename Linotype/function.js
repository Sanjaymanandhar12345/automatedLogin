var call=require('./pageLocators.js');
var func=function(){
this.url=function (para) {
    browser.get(para);
};
this.loginEmail = function (email) {

    call.loginE.sendKeys(email);
};
this.loginPassword = function (password) {
    call.loginP.sendKeys(password);
};
this.c=function (co) {
    call.company.sendKeys(co);
};
this.f=function (fi) {
    call.firstName.sendKeys(fi);
};
this.s=function (st) {
    call.street.sendKeys(st);
};
this.l=function (la) {
    call.lastName.sendKeys(la);
};
this.e=function (em) {
    call.emailId.sendKeys(em);
};
this.p=function (pa) {
    call.password.sendKeys(pa);
};
this.cp=function (cpa) {
    call.cpassword.sendKeys(cpa);
};
this.z=function (zi) {
    call.zip.sendKeys(zi);
};
this.ci=function (cit) {
    call.city.sendKeys(cit);
};
this.cou=function (coun) {
    call.country.sendKeys(coun);
};
this.butt=function () {
    call.button.click();
};
this.loginB=function () {
    call.loginButton.click();
};
};
module.exports=new func();