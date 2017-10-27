var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET uploaded files page. */
router.get('/uploads', function(req, res, next) {
  res.render('uploads', { title: 'Express' });
});

module.exports = router;
