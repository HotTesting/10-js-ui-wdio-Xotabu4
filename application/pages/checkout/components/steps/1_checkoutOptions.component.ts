
export class CheckoutOptionsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-checkout-option').parentElement()
    }

    selectGuestCheckout() {
        const guestCheckoutRadio = this.root.$('input[type="radio"][value="guest"]')
        expect(guestCheckoutRadio).toBeClickable({ message: 'Expected Guest Checkout radio button to be visible. Make sure you are not logged in' })
        guestCheckoutRadio.click()
    }

    continue() {
        browser.pause(500)
        const continueButton = this.root.$('input[type="button"][value="Continue"]#button-account')
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' })
        continueButton.click()
    }
}