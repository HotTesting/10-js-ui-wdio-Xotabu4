

export class ApiClient {

    createNewUser() {
        return browser.call(async () => await got(''));
    }
}