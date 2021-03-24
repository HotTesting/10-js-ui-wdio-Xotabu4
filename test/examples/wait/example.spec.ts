describe('Wait', function () {

    it('1', function () {
        console.time('waitTook')
        try {
            browser.waitUntil(() => {
                console.count('Wait iteration#')
                try {
                    return $('nonexist').isPresent()
                } catch {
                    return false
                }
            }, { timeoutMsg: `Expected $('nonexist') to exist`, timeout: 5000, interval: 1000 })
            expect($('nonexist')).toBeExisting()
        } finally {
            console.timeEnd('waitTook')
        }  
        
    })

    it.skip('1', function () {
        while(true) {
            console.count('#')
            $('body').click()
        }
    })
})