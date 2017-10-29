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
    res.json(req.files.file_data.path);
});

module.exports = router;
