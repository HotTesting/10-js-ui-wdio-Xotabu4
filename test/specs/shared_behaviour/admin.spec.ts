import {shared} from './user.spec'

describe('Admin', function () {

    it('can do some admin stuff', function () {
        console.log('admin')
        //...
    })

    shared({username: 'Admin'})
})