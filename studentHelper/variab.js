var declare=function(){
    this.inquiryName=element(by.css('input[name="sender_name"]'));
    this.signName=element(by.css('input[name="email"]'));
    this.signPass=element(by.css('input[name="password"]'));
    this.checkB=element(by.css('label[for="brand1"]'));
    this.but=element(by.css('input[value="Sign In"]'));
    this.registerName=element(by.css('input[name="name"]'));
    this.registerSecondName=element(by.css('input[name="username"]'));
    this.registerEmail=element(by.css('input[name="email"]'));
    this.registerPassword=element(by.css('input[name="password"]'));
    this.registerCpassword=element(by.css('input[name="password_confirmation"]'));
    this.registerButton=element(by.css('input[value="Register Now"]'));
};
module.exports=new declare();