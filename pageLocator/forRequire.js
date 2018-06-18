var check=require('./pageObjects')
describe('varkhar start', function () {
    it('greeting', function () {

            check.get();


             check.keys('Sanjay');
             expect(check.bind()).toEqual('Hello Sanjay!');

    });

});
