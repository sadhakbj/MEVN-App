const AuthController = require('./controllers/AuthController')
const AuthPolicy = require('./policies/AuthPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
    app.post('/register',
        AuthPolicy.register,
        AuthController.register)

    app.post('/login', AuthController.login)

    //Songs
    app.get('/songs', SongsController.index)
    app.post('/songs', SongsController.store)
}