newz=require('./function.js');
describe('sign up', function () {
    it('should check for signup', function () {


        newz.url('https://test.linotype.com/account/login?tab=new');
        newz.c('Uba');
        newz.ci('bkt');
        newz.p('radhika12345');
        newz.cp('radhika12345');
        newz.e('sanjay.manandhar123456789@gmail.com');
        newz.f('sanjay');
        newz.l('manandhar');
        newz.s('deipokhari');
        newz.z('44600');
        newz.cou('Nepal');
        newz.butt();
        browser.sleep(20000);


    });
});
