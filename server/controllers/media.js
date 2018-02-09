let moment = require('moment');
const sequelize = require("sequelize");

const Media = require('../models').Media;

module.exports = {
    create(req, res) {
        console.log(req.body, req.files);
        let filePath = req.files.file_data.path;
        let fileName = filePath.replace(/^.*[\\\/]/, '');
        return Media
            .create({
                name: fileName,
            })
            .then(media => res.status(201).send(media))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Media
            .all()
            .then(medias => {
                let records = medias.slice(req.query.offset, req.query.offset + req.query.perPage * req.query.page);
                let data = {
                    queryRecordCount: medias.length,
                    totalRecordCount: medias.length,
                    records: []
                };
                for (let i = 0; i < records.length; i++) {
                    let record = records[i].dataValues;
                    record.date = '03/07/2017'; // just fake it for now
                    record.download = "<a href=" + record.name + " download><i class='fa fa-download' aria-hidden='true'></i></a>";
                    record.delete = "<a data-id=" + record.id + "><i class='fa fa-trash-o'></i></a>";
                    data.records.push(record);
                }

                res.status(200).json(data);
            })
            .catch(error => res.status(400).send(error.stack));
    },
};