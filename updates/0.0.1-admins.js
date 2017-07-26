const keystone = require('keystone')
const User = keystone.list('User')
 
module.exports = (done) => {
    
    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: 'admin@keystonejs.com',
        password: 'admin',
        canAccessKeystone: true
    }).save(done)
    
}