// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
res.render('home', {title: 'Home'});
});

router.get('/about', (req, res) => {
res.render('about', {title: 'About'});
});

router.get('/events', (req, res) => {
res.render('events', {title: 'Events'});
});

router.get('/contact', (req, res) => {
res.render('contact', {title: 'Contact'});
});

router.get('/thankyou', (req, res) => {
res.render('thankyou', {title: 'Thank You'});
});

module.exports = router;
