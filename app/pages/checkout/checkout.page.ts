import { BillingAddressPanel } from "./components/billingAddressPanel.component";

export class CheckoutPage {

    open() {
        browser.url('/index.php?route=checkout/checkout')
    }

    get billingAddressPanel() {
        return new BillingAddressPanel();
    }

    completeCheckout() {


    }
}