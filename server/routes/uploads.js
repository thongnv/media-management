let express = require('express');
let fs = require('fs');
let router = express.Router();
const mediaController = require('../controllers').medias;

/*------------- PAGE Rendering -------------*/

/* GET uploaded files page. */
router.get('/', function (req, res, next) {
    let data = fs.readFileSync('public/data/sample-table-data.json', 'utf8');
    let obj = JSON.parse(data);
    let records = obj.records;
    res.render('upload', {records: records, queryRecordCount: records.length, totalRecordCount: obj.records.length});
});

/*------------- APIs -------------*/

/* GET uploaded files listing. */
router.get('/files', mediaController.list);

/* DELETE an uploaded file. */
router.delete('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.json(req.params.id);
    next();
});

module.exports = router;
