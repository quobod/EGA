const express = require('express');
const router = express.Router();
const log = require('../custom_modules/log');

router.get('/', (req, res) => {
    
    res.render('index', {title:'EGA Project', korn: 'I seen it all'});
});

module.exports = router;