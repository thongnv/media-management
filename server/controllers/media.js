const Media = require('../models').Media;

module.exports = {
    create(req, res) {
        console.log(req.body, req.files);
        var filePath = req.files.file_data.path;
        var fileName = filePath.replace(/^.*[\\\/]/, '');
        return Media
            .create({
                name: fileName,
            })
            .then(media => res.status(201).send(media))
            .catch(error => res.status(400).send(error));
    },
};