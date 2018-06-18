
var naya=require('../forRegistrationMock/init.js');

describe('pass value',function () {
    // var mainPage=new naya();
    beforeEach( function()
    {
        naya.got();
    });


        // it('should disable', function () {
        //     expect(naya.butt.isEnabled()).toBe(false);
        // });
        //
        //
        // it('should show', function () {
        //     expect(naya.loginPatternValidation.isDisplayed()).toBe(true);
        // });




    it('final passing',function () {
        naya.got();
        naya.user('SanjayManandhar');
        naya.mail('sanjay.manandhar@thamescollege.edu.np');
        naya.pas('Radhika12345');
        naya.cpass('Radhika12345');
        // console.log(naya.button);
        naya.butt();
    });

});