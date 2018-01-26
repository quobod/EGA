const express = require('express');
const router = express.Router();
const log = require('../custom_modules/log');
const csrf = require('csurf');
let csrfProtection = csrf();
router.use(csrfProtection);

// Home view
router.get('/', (req, res) => {
    
    res.render('index', {title:'EGA Project', submitted: false});
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
router.get('/search', (req, res) => {
    
    res.render('search', { title:'Search', csrfToken: req.csrfToken });
});

// Find route
router.post('/find',  (req, res) => {
    const value = req.body.keyterm;
    
    log(`Searched ${value}`);
    res.render('index', { title: 'Searched', submitted: true, status: value });
});

module.exports = router;