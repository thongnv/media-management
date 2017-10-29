var express = require('express');
var router = express.Router();

/* APIs */

/* GET uploaded files listing. */
router.get('/files', function (req, res, next) {
    var data = {
        "records": [
            {
                "id": "154deef455",
                "name": "img20171023164046051.jpg",
                "date": "03/07/2017",
            },
            {
                "id": "584delo455",
                "name": "studio-imac-1508994216711.jpg",
                "date": "03/07/2017",
            }
        ],
        "queryRecordCount": 50,
        "totalRecordCount": 3000
    };
    var records = data.records;
    for(var i=0; i<records.length; i++) {
        var filePath = 'uploads/' + records[i].name;
        records[i].download = "<a href=" + filePath + " download><i class='fa fa-download' aria-hidden='true'></i></a>";
        records[i].delete = "<a data-id=" + records[i].id + "><i class='fa fa-trash-o'></i></a>"
    }
    res.json(data);
});

/* DELETE an uploaded file. */
router.delete('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.json(req.params.id);
});

/* PAGE Rendering */

/* GET uploaded files page. */
router.get('/', function(req, res, next) {
    res.render('upload', { title: 'Express' });
});

module.exports = router;
