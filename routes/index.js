var express = require('express');
var router = express.Router();
var path = require('path'),
    fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* POST submit files. */
router.post('/new', function (req, res, next) {
    console.log(req.body, req.files);
    var filePath = req.files.file_data.path;
    var fileName = filePath.replace(/^.*[\\\/]/, '');
    // TODO
    // collect file info

    // save to db
    res.json({name: fileName});
});

module.exports = router;
