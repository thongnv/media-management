let express = require('express');
let fs = require('fs');
let router = express.Router();

const mediaController = require('../controllers').medias;

/*------------- APIs -------------*/

/* GET uploaded files listing. */
router.get('/', mediaController.list);

/* POST submit files. */
router.post('/new', mediaController.create);

/* DELETE an uploaded file. */
router.delete('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.json(req.params.id);
    next();
});

module.exports = router;
