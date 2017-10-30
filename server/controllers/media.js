const Media = require('../models').Media;

module.exports = {
    create(req, res) {
        return Media
            .create({
                name: req.body.name,
            })
            .then(media => res.status(201).send(media))
    .catch(error => res.status(400).send(error));
    },
};