const eventsController = require('../controllers').events;

module.exports = (app) => {
    //event
    app.get('/events', function(req, res) {
        eventsController.index(req, res)
    });

    app.post('/event/create', function(req, res) {
        eventsController.create(req, res)
    });
};
