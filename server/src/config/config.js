const path = require('path')

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'mySite',
        user: process.env.DB_USER || 'mySite',
        password: process.env.DB_PASS || 'mySite',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './mySite.sqlite'
        }
    }
}
