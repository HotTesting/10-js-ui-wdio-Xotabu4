export class BillingAddressPanel {

    constructor(private root: () => WebdriverIO.Element = () => $('#collapse-payment-address')) {

    }

    fillForm(data: { firstName: string, lastName: string, address1: string, city: string, region: string }) {
        this.root().$('#input-payment-firstname').setValue(data.firstName)
        this.root().$('#input-payment-lastname').setValue(data.lastName)
        this.root().$('#input-payment-address-1').setValue(data.address1)
        this.root().$('#input-payment-city').setValue(data.city)
        this.root().$('#input-payment-country').selectByVisibleText(data.city)
        this.root().$('#input-payment-zone').selectByVisibleText(data.region)
    }
}