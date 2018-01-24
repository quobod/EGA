const express = require('express');
const router = express.Router();
const log = require('../custom_modules/log');

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
router.get('/search', (req, res) => {
    
    res.render('search', {title:'Search'});
});

module.exports = router;