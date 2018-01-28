const express = require('express');
const router = express.Router();
const log = require('../custom_modules/log');
const random = require('../custom_modules/random');
const photos = require('../custom_modules/photos');
const csrf = require('csurf');
let csrfProtection = csrf();
router.use(csrfProtection);

// Home view
router.get('/', (req, res) => {
    
    res.render('index', {title:'EGA Project'});
});

// About view
router.get('/about', (req, res) => {
    let imgs = [];
    for (let i = 0; i < 24; i++) {
        // let photo = photos[i];
        imgs.push(random.member(photos));
    }
    
    res.render('about', {title:'About Us', photos:imgs});
});

// Contact view
router.get('/contact', (req, res) => {
    
    res.render('contact', {title:'Contact Us'});
});

// Search view
router.get('/search', (req, res) => {
    
    res.render('search', { title:'Search', csrfToken: req.csrfToken, submitted: false });
});

// Find route
router.post('/find',  (req, res) => {
    const value = req.body.keyterm;
    
    log(`Searched ${value}`);
    res.render('search', { title: 'Searched', submitted: true, status: value });
});

module.exports = router;