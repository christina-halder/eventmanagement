const usersController = require('../controllers').users;
const eventsController = require('../controllers').events;

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

    //event
    app.get('/event/new', function(req, res) {
        res.render('events/new', { title: 'create new event' });
    });

    app.post('/event/create', function(req, res) {
        eventsController.create(req, res)
    });
};
