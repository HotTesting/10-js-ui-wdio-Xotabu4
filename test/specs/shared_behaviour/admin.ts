import {shared} from './user'

describe('Admin', function () {

    it('can do some admin stuff', function () {
        console.log('admin')
        //...
    })

    shared({username: 'Admin'})
})