describe('Execute javascript on page', function () {

    it.skip('register user: return from script', function () {
        browser.url('/index.php?route=account/register')

        const result = browser.execute(function () {
            console.log('REGISTRATION!')
            const user = {
                firstName: 'Test',
                lastName: 'Test',
                email: `test+${Date.now().toString()}@test.com`,
                password: '123456',
                confirmPasword: '123456',
                telephone: '123456',
                acceptTermsAndConditions: true,
            }
            document.querySelector('input#input-firstname').value = user.firstName;
            document.querySelector('input#input-lastname').value = user.lastName;
            document.querySelector('input#input-email').value = user.email;
            document.querySelector('input#input-telephone').value = user.telephone;
            document.querySelector('input#input-password').value = user.password;
            document.querySelector('input#input-confirm').value = user.confirmPasword;

            if (user.acceptTermsAndConditions) {
                // @ts-ignore
                document.querySelector('input[type="checkbox"][name="agree"]').click();
            }
            // @ts-ignore
            document.querySelector('input[type="submit"][value="Continue"]').click();

            return user
        })

        console.log('User was created: ', result)

        //browser.pause(30000)
    })

    it.skip('register user: pass data to script', function () {
        browser.url('/index.php?route=account/register')

        const user = {
            firstName: 'Test',
            lastName: 'Test',
            email: `test+${Date.now().toString()}@test.com`,
            password: '123456',
            confirmPasword: '123456',
            telephone: '123456',
            acceptTermsAndConditions: true,

            // this property won't be transfered to browser side. JSON.stringify removes it.
            someFunction: function () {
                console.log('test')
            }
        }
        browser.pause(10000)
        browser.execute(function (_user) {
            console.dir(_user)

            document.querySelector('input#input-firstname').value = _user.firstName;
            document.querySelector('input#input-lastname').value = _user.lastName;
            document.querySelector('input#input-email').value = _user.email;
            document.querySelector('input#input-telephone').value = _user.telephone;
            document.querySelector('input#input-password').value = _user.password;
            document.querySelector('input#input-confirm').value = _user.confirmPasword;

            if (_user.acceptTermsAndConditions) {
                // @ts-ignore
                document.querySelector('input[type="checkbox"][name="agree"]').click();
            }
            // @ts-ignore
            // document.querySelector('input[type="submit"][value="Continue"]').click();

        }, user)

        browser.pause(10000)

        browser.execute(`document.querySelector('input[type="submit"][value="Continue"]').click();`)

        console.log('User was created: ', user)

        browser.pause(30000)
    })

    it.skip('register user: async script', function () {

        const email = `test+${Date.now().toString()}@test.com`;

        const result = browser.executeAsync(function (_email, _done) {        
            fetch("http://93.126.97.71:10082/index.php?route=account/register", {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7",
                    "cache-control": "max-age=0",
                    "content-type": "multipart/form-data; boundary=----WebKitFormBoundary9opD1undOzBp8L0D",
                    "upgrade-insecure-requests": "1"
                },
                "referrer": "http://93.126.97.71:10082/index.php?route=account/register",
                "body": `------WebKitFormBoundary9opD1undOzBp8L0D\r\nContent-Disposition: form-data; name=\"customer_group_id\"\r\n\r\n1\r\n------WebKitFormBoundary9opD1undOzBp8L0D\r\nContent-Disposition: form-data; name=\"firstname\"\r\n\r\ntest\r\n------WebKitFormBoundary9opD1undOzBp8L0D\r\nContent-Disposition: form-data; name=\"lastname\"\r\n\r\ntest\r\n------WebKitFormBoundary9opD1undOzBp8L0D\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\n${_email}\r\n------WebKitFormBoundary9opD1undOzBp8L0D\r\nContent-Disposition: form-data; name=\"telephone\"\r\n\r\n123456\r\n------WebKitFormBoundary9opD1undOzBp8L0D\r\nContent-Disposition: form-data; name=\"password\"\r\n\r\n123456\r\n------WebKitFormBoundary9opD1undOzBp8L0D\r\nContent-Disposition: form-data; name=\"confirm\"\r\n\r\n123456\r\n------WebKitFormBoundary9opD1undOzBp8L0D\r\nContent-Disposition: form-data; name=\"newsletter\"\r\n\r\n0\r\n------WebKitFormBoundary9opD1undOzBp8L0D\r\nContent-Disposition: form-data; name=\"agree\"\r\n\r\n1\r\n------WebKitFormBoundary9opD1undOzBp8L0D--\r\n`,
                "method": "POST",
            }).then(
                () => _done('RETURN VALUE')
            )
            
        }, email)

        browser.pause(30000)

        console.log(result)
    })
})