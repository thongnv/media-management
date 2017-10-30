var express = require('express');
var router = express.Router();
const mediaController = require('../controllers').medias;

/* PAGE Rendering */

/* GET uploaded files page. */
router.get('/', function(req, res, next) {
    res.render('upload', { title: 'Express' });
});

/* APIs */

/* GET uploaded files listing. */
router.get('/files', mediaController.list);

/* DELETE an uploaded file. */
router.delete('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.json(req.params.id);
});

module.exports = router;
