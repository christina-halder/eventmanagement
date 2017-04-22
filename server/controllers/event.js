const Event = require('../models').event;

module.exports = {
    // all_users(req, res) {
    //     return User.all().
    //         then(user => res.status(201).send()).
    //     catch(error => res.status(400).send(error))
    // },
    create(req, res) {
        return Event.create({
                name: req.body.name,
                description: req.body.description,
                year: req.body.year,
                month: req.body.month,
                date: req.body.date,
            }).
            then(user => res.status(201).send(event)).
        catch(error => res.status(400).send(error));
    },
};


