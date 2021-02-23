
describe('Website', function () {

    it('should be alive', function () {
        browser.url('/');
        expect($('#logo')).toBeDisplayed()
    })
})