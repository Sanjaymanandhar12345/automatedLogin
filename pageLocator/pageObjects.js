var AngularHomepage=function () {
    var send=element(by.model('yourName'));
    var binding=element(by.binding('yourName'));
    this.get=function () {
        browser.get('http://www.angularjs.org');
    };
    this.keys=function (name) {
        send.sendKeys(name);
    };
    this.bind=function () {
       return binding.getText();
    };
    this.getGreeting=function () {
        return binding;
    };
};
module.exports=new AngularHomepage();