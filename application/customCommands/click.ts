

export const registerClickFunction = () => {
    browser.overwriteCommand("click", function (origClick, wait = true) {
        // `this` is return value of $(selector)
        if (wait) {
            console.log('waiting!')
            expect(this).toBeDisplayed()
        }
        console.log('clicking!')
        origClick()
    } as any, true)
}