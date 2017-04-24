const Event = require('../models').event;

module.exports = {
    index(req, res) {
        return Event.all().
            then(events => res.status(200).send(events)).
        catch(error => res.status(400).send(error))
    },
    create(req, res) {
        return Event.create({
                name: req.body.name,
                description: req.body.description,
                year: req.body.year,
                month: req.body.month,
                date: req.body.date,
            }).
            then(event => res.status(200).send(event)).
        catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return Event.destroy({
            id: req.params.id
        }.
        then(event => res.status((200).send(event)).
        catch(error => res.status(400).send(error));
    }
};
