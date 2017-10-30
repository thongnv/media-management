var express = require('express');
var router = express.Router();

const mediaController = require('../controllers').medias;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* POST submit files. */
router.post('/new', mediaController.create);

module.exports = router;
