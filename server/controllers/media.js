let moment  = require('moment');
let parseFormat = require('moment-parseformat');
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
                // TODO
                // get records from db

                let data = {
                    "records": [],
                    "queryRecordCount": 50,
                    "totalRecordCount": 3000
                };
                for (let i = 0; i < medias.length; i++) {
                    let record = medias[i].dataValues;
                    record.date = '03/07/2017';
                    record.download = "<a href=" + record.name + " download><i class='fa fa-download' aria-hidden='true'></i></a>";
                    record.delete = "<a data-id=" + record.id + "><i class='fa fa-trash-o'></i></a>";
                    data.records.push(record);
                }
                data.queryRecordCount = 1000; //data.records.length;
                data.totalRecordCount = 300000; //data.records.length;
                res.status(200).json(data);
            })
            .catch(error => res.status(400).send(error.stack));
    },
};