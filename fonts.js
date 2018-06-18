describe('fonts.com', function () {
    beforeEach (function() {
        browser.get('https://www.youtube.com/');
    })
    it('checks for title', function () {
        expect(by.getTitle()).toEqual('YouTube');
    });

});