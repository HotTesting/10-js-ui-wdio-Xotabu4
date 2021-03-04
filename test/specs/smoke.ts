import {config} from '../../wdio.conf'

describe('Website', function () {
    const locator = '.logo'
    const locator2 = '.logo'

    it.skip('should be alive', function () {
        this.timeout(120000)

        browser.url('/');

        $(locator + locator2)
        expect($('#logo')).toBeDisplayed()
    })

    it.skip('should allow user to register', function () {
        browser.url('/index.php?route=account/register')
        
        expect($('#content')).toBeDisplayed({
            wait: 10000,
            message: "Oops expected content to be displayed!"
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

        expect(content.$('h1')).toHaveText('Your Account Has Been Created!', {
            wait: 10000,
            interval: 1000,
            message: "Expected registration to be successful"
        })
    })

    it.skip('should reload my session with current capabilities', function () {
        console.log(browser.sessionId)
        console.time('Session restart took') 
        browser.reloadSession()
        console.log(browser.sessionId) 
        console.timeEnd('Session restart took') 
    })

    it('how to clear local storage', function () {
        browser.pause(5000)
        try {
            browser.execute(function () {
                window.localStorage.clear();
                window.sessionStorage.clear();
            })
        } catch(err) {
            console.error('Failed to clear local and session storage')
        }
        // browser.setWindowSize(width, height)

        let windows = browser.getWindowHandles()

        browser.newWindow('test.com');
        browser.pause(1000)

        windows = browser.getWindowHandles()

        browser.switchToWindow(windows[1])
        browser.pause(1000)

        browser.switchToWindow(windows[0])
    })

    
    it.skip('should be alive', function () {
        // 'http://ip-6147.proline.net.ua:10082/'
        // 'http://prefix.proline.net.ua:10082/'
        const url = config.baseUrl
        browser.url('/');

        
        $(locator + locator2)
        expect($('#logo')).toBeDisplayed()

        const a = $('div').getAttribute('test')

        expect(10 > 5).toBe(true)

        browser.execute(function () {
            document.querySelector('div').click()
        })

        expect($('div span #id').$('a=There is no product that matches the search criteria.')).toBeDisplayed()
    })
})