var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET uploaded files list. */
router.get('/uploads', function (req, res, next) {
    var data = {
        "records": [
            {
                "id": "154deef455",
                "name": "img20171023164046051.jpg",
                "date": "03/07/2017",
                "download": "<a href='uploads/img20171023164046051.jpg' download><i class='fa fa-download' aria-hidden='true'></i></a>",
                "delete": "<i class='fa fa-trash-o'></i>"
            },
            {
                "id": "584delo455",
                "name": "studio-imac-1508994216711.jpg",
                "date": "03/07/2017",
                "download": "<i class='fa fa-download' aria-hidden='true'></i>",
                "delete": "<i class='fa fa-trash-o'></i>"
            }
        ],
        "queryRecordCount": 50,
        "totalRecordCount": 3000
    };
    res.json(data);
});

/* GET uploaded files page. */
router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});

module.exports = router;
