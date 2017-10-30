var moment  = require('moment');
var parseFormat = require('moment-parseformat');
const sequelize = require("sequelize");

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
    list(req, res) {
        return Media
            .all()
            .then(medias => {
                // TODO
                // get records from db

                var data = {
                    "records": [],
                    "queryRecordCount": 50,
                    "totalRecordCount": 3000
                };
                for (var i = 0; i < medias.length; i++) {
                    var record = medias[i].dataValues;
                    // var date = record.createdAt;
                    // var month = date.getMonth();
                    // moment.utc(this.getDataValue('regDate')).format('YYYY-MM-DD');
                    record.date = '03/07/2017';
                    record.download = "<a href=" + record.name + " download><i class='fa fa-download' aria-hidden='true'></i></a>";
                    record.delete = "<a data-id=" + record.id + "><i class='fa fa-trash-o'></i></a>";
                    data.records.push(record);
                }
                data.queryRecordCount = data.records.length;
                data.totalRecordCount = data.records.length;
                res.status(200).json(data);
            })
            .catch(error => res.status(400).send(error.stack));
    },
};