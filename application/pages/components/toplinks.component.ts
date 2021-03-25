import { step } from "../../utils/allureStep"

export class TopLinks {
    private get root(): WebdriverIO.Element {
        return $('nav#top')
    }

    @step('open checkout')
    openCheckout() {
        this.root.$('a[title="Checkout"]').click()
        browser.pause(1000)
    }
    
}