
describe('Mock example', function () {


    it('1', function () {
        const mock = browser.mock('https://todobackend-challenge.herokuapp.com/', {
            method: 'get'
        })

        // mock.respond([{
        //     title: 'Injected (non) completed Todo',
        //     order: null,
        //     completed: false
        // }, {
        //     title: 'Injected completed Todo',
        //     order: null,
        //     completed: true
        // }])


        const puppeteer = browser.getPuppeteer()
        

        browser.url('https://todobackend.com/client/index.html?https://todobackend-challenge.herokuapp.com/')

        expect($('#todo-list li')).toBeDisplayed()
        console.log($$('#todo-list li').map(el => el.getText()))

        browser.pause(5000)
        // outputs: "[ 'Injected (non) completed Todo', 'Injected completed Todo' ]"

    })
})

