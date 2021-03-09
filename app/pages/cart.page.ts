

export class CartPage {
    open() {
        browser.url('/index.php?route=checkout/cart')
    }

    private get checkoutButton() {
        return $('a=Checkout')
    }

    checkout() {
        expect(this.checkoutButton).toBeVisible()
        this.checkoutButton.click()
    }


}