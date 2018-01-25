const express = require('express');
const router = express.Router();
const log = require('../custom_modules/log');
const csrf = require('csurf');
const csrfProtection = csrf();

// Home view
router.get('/', (req, res) => {
    
    res.render('index', {title:'EGA Project'});
});

// About view
router.get('/about', (req, res) => {
    
    res.render('about', {title:'About Us'});
});

// Contact view
router.get('/contact', (req, res) => {
    
    res.render('contact', {title:'Contact Us'});
});

// Search view
router.get('/search', csrfProtection, (req, res) => {
    
    res.render('search', {title:'Search', csrfToken: req.csrfToken(), submitted: false});
});

// Find route
router.post('/find', csrfProtection, (req, res) => {
    const value = req.body.keyterm;
    log(`Searched ${value}`);

    // res.render('search', {title:'Found', csrfToken: req.csrfToken()});
    res.status(200);
});

module.exports = router;