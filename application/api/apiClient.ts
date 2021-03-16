const fetch = require('node-fetch');

export class ApiClient {

    createNewUser(email = `test+${Date.now()}@test.com`) {
        browser.call(async () => {
            await fetch("http://93.126.97.71:10082/index.php?route=account/register", {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7",
                    "cache-control": "max-age=0",
                    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryoeR9uymAxaAZJaat",
                    "upgrade-insecure-requests": "1",
                },
                "referrer": "http://93.126.97.71:10082/index.php?route=account/register",
                "body": `------WebKitFormBoundaryoeR9uymAxaAZJaat\r\nContent-Disposition: form-data; name=\"customer_group_id\"\r\n\r\n1\r\n------WebKitFormBoundaryoeR9uymAxaAZJaat\r\nContent-Disposition: form-data; name=\"firstname\"\r\n\r\ntest\r\n------WebKitFormBoundaryoeR9uymAxaAZJaat\r\nContent-Disposition: form-data; name=\"lastname\"\r\n\r\ntest\r\n------WebKitFormBoundaryoeR9uymAxaAZJaat\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\n${email}\r\n------WebKitFormBoundaryoeR9uymAxaAZJaat\r\nContent-Disposition: form-data; name=\"telephone\"\r\n\r\n123123123\r\n------WebKitFormBoundaryoeR9uymAxaAZJaat\r\nContent-Disposition: form-data; name=\"password\"\r\n\r\n123456\r\n------WebKitFormBoundaryoeR9uymAxaAZJaat\r\nContent-Disposition: form-data; name=\"confirm\"\r\n\r\n123456\r\n------WebKitFormBoundaryoeR9uymAxaAZJaat\r\nContent-Disposition: form-data; name=\"newsletter\"\r\n\r\n0\r\n------WebKitFormBoundaryoeR9uymAxaAZJaat\r\nContent-Disposition: form-data; name=\"agree\"\r\n\r\n1\r\n------WebKitFormBoundaryoeR9uymAxaAZJaat--\r\n`,
                "method": "POST",
            });
        })

        return { email: email }
    }
}