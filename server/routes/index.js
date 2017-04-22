const usersController = require('../controllers').users;

module.exports = (app) => {
    app.get('/users', function(req, res) {
        usersController.all_users(req, res)
    });

    app.get('/user/new', function(req, res) {
        res.render('users/new', { title: 'create new user' });
    });

    app.post('/user/create', function(req, res) {
        usersController.create(req, res)
    });
};
