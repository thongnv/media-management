var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* POST submit files. */
router.post('/uploads', function (req, res, next) {
    res.redirect('uploads')
});

module.exports = router;
