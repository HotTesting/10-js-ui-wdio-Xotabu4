// import * as crypto from 'crypto'

describe('Website', function () {
    const locator = '.logo'
    const locator2 = '.logo'

    it.skip('should be alive', function () {
        browser.url('/');

        $(locator + locator2)
        expect($('#logo')).toBeDisplayed()
    })

    it('should allow user to register', function () {
        browser.url('/index.php?route=account/register')
        
        expect($('#content')).toBeDisplayed({
            wait: 10000
        })

        const content = $('#content')

        const firstName = content.$('#input-firstname')
        firstName.setValue('Test')

        const lastName = content.$('#input-lastname')
        lastName.setValue('Test')

        const email = content.$('#input-email')
        const emailString = `test+${Date.now()}@test.com`
        email.setValue(emailString)

        const telephone = content.$('#input-telephone')
        telephone.setValue('123123123')

        const password = content.$('#input-password')
        password.setValue('123456')
        
        const confirmPassword = content.$('#input-confirm')
        confirmPassword.setValue('123456')
        
        const agreePolicy = content.$('input[type="checkbox"][name="agree"]')
        agreePolicy.click()

        const submitButton = content.$('input[type="submit"][value="Continue"]')
        submitButton.click()

        expect(content.$('h1')).toHaveText('Your Account Has Been Created!')
    })
})