const eventsController = require('../controllers').events;

module.exports = (app) => {
    //event
    app.get('/api/events', function(req, res) {
        eventsController.index(req, res)
    });

    app.post('api//event/create', function(req, res) {
        eventsController.create(req, res)
    });
};
