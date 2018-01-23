var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {title:'EGA Project', korn: 'I seen it all'});
});

module.exports = router;