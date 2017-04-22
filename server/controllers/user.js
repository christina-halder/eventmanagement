const User = require('../models').user;

module.exports = {
    // all_users(req, res) {
    //     return User.all().
    //         then(user => res.status(201).send()).
    //     catch(error => res.status(400).send(error))
    // },
    create(req, res) {
        return User.create({
                email: req.body.email,
            }).
            then(user => res.status(201).send(user)).
        catch(error => res.status(400).send(error));
    },
};


