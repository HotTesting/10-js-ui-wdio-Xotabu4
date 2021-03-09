
export class ConfirmationPage {

    isOpened(): boolean {
        return $('h1=Your order has been placed!').isDisplayed()
    }
}