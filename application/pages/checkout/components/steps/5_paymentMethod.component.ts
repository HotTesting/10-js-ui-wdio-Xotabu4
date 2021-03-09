
export class PaymentMethodComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-payment-method').parentElement()
    }

    acceptTermsAndConditions() {
        const checkbox = $('input[type="checkbox"][name="agree"]')
        expect(checkbox).toBeVisible({ message: 'Expected accept terms and conditions checkbox to be visible' })
        checkbox.click()
    }

    continue() {
        const continueButton = this.root.$('input[type="button"][value="Continue"]#button-payment-method')
        expect(continueButton).toBeVisible({ message: 'Expected Continue button to be visible' })
        continueButton.click()
    }
}