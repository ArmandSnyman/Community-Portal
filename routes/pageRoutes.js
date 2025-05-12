// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const submissions = [];

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
const {name} = req.query
res.render('thankyou', {title: 'Thank You', name});
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const newSubmission = {
    name,
    email,
    message,
  };

  submissions.push(newSubmission);
  
res.redirect(`/thankyou?name=${encodeURIComponent(name)}`);

console.log(`Submmited: ${name}, ${email}, ${message}`)
});

module.exports = router;
