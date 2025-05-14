const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const submissions = [];


// Temporary in-memory data for events
const events = [
  {
    name: "Community Meetup",
    date: "May 20, 2025",
    location: "Community Hall",
    description: "A gathering for all community members to discuss upcoming projects."
  },
  {
    name: "Charity Run",
    date: "June 5, 2025",
    location: "Central Park",
    description: "A 5K run to raise funds for local charities."
  },
  {
    name: "Farmers Market",
    date: "May 23, 2025",
    location: "The Bryant Park",
    description: "A community-initiated farmer's market."
  },
  // add more events here...
];



router.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home', events });
});

router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About' });
});

router.get('/events', (req, res) => {
  res.render('pages/events', { title: 'Events', events });
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact', errors: [], old: {} });
});

router.get('/thankyou', (req, res) => {
    const { name } = req.query
    res.render('pages/thankyou', { title: 'Thank You', name });
});

router.post('/contact', contactController.handleContact);

module.exports = router;