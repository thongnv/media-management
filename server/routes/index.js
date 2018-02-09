var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('files', {title: 'Media Management'});
});

/* GET uploaded files page. */
router.get('/upload', function (req, res, next) {
    res.render('upload', {title: 'Upload new media files'});
});

module.exports = router;
