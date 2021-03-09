

/**
 * product-layout product-grid
 */
export class ProductCard {

    constructor(private root: WebdriverIO.Element) {

    }

    addToCart() {
        const addToCartButton = this.root.$('.button-group').$('button=Add to Cart')
        expect(addToCartButton).toBeVisible()
        addToCartButton.click()
    }

    addToWishList() {
        throw new Error(`Not implemented`)
    }

    compareThisProduct() {
        throw new Error(`Not implemented`)
    }
}