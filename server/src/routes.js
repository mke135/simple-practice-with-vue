const AuthController = require('./controllers/AuthController')
const AuthContrillerPolicy = require('./policies/AuthControlPolicy')

module.exports = (app) => {
    app.post('/register',
        AuthContrillerPolicy.register,
        AuthController.register)
}
