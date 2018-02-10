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
        const Op = sequelize.Op;
        let query = req.query;
        let queries = query.queries;
        let results = [];
        if (queries) {
            results = Media.findAll({
                offset: query.offset, limit: query.perPage,
                where: {
                    name: {
                        [Op.iLike]: '%' + queries.search + '%'
                    }
                },
            })
        } else {
            results = Media.findAll({offset: query.offset, limit: query.perPage});
        }
        return results.then(medias => {
            Media.count().then(total => {
                let data = {
                    queryRecordCount: total,
                    totalRecordCount: total,
                    records: []
                };
                for (let i = 0; i < medias.length; i++) {
                    let record = medias[i].dataValues;
                    record.date = '03/07/2017'; // just fake it for now
                    record.download = "<a href=" + record.name + " download><i class='fa fa-download' aria-hidden='true'></i></a>";
                    record.delete = "<a data-id=" + record.id + "><i class='fa fa-trash-o'></i></a>";
                    data.records.push(record);
                }
                res.status(200).json(data);
            })
        }).catch(error => {
            console.log(error);
            res.status(400).send(error.stack)
        });
    }
};