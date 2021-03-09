
export class TopLinks {
    private get root(): WebdriverIO.Element {
        return $('nav#top')
    }

    openCheckout() {
        this.root.$('a[title="Checkout"]').click()
        browser.pause(1000)
    }
    
}