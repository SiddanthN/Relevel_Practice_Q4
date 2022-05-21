const authCtrl = require('../controllers/auth.controller');

module.exports = (app) => {

    // for user signup
    // POST - /dunzo/api/v1/users/signup
    app.post("/dunzo/api/v1/users/signup", authCtrl.signup);

    // for user login
    // POST - /dunzo/api/v1/users/login
    app.post("/dunzo/api/v1/users/login", authCtrl.signin);
}
    