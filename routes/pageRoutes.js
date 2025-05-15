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
    description: "A gathering for all community members to discuss upcoming projects.",
    image: "/images/meetup.png"
  },
  {
    name: "Charity Run",
    date: "June 5, 2025",
    location: "Central Park",
    description: "A 5K run to raise funds for local charities.",
    image: "/images/charityRun.png"
  },
  {
    name: "Farmers Market",
    date: "May 23, 2025",
    location: "The Bryant Park",
    description: "A community-initiated farmer's market.",
    image: "/images/farmersMarket.png"
  },
];

const members = [
  {
    name: "Francois Vorster",
    position: "Team Leader",
    description: "Guides and instructs the group towards a common goal, overseeing progress, delegating work, and providing support to team members."
  },
  {
    name: "Armand Snyman",
    position: "Data Manager",
    description: "Oversees the entire lifecycle of data within the organization, from collection and storage to analysis and security"
  },
  {
    name: "Moegammad Allan Hendricks",
    position: "Front-End Developer",
    description: "Designs, builds and improves website software that meets the community needs."
  },
    {
    name: "Kailesen Rangasamy",
    position: "Documentation Manager",
    description: "Ensures that the organization's documentation is organized, accessible, and compliant with regulations and internal policies"
  },
];


router.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home', events });
});

router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About', members });
});

router.get('/events', (req, res) => {
  res.render('pages/events', { title: 'Events', events });
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact' });
});

router.post('/contact', contactController.handleContact);

router.get('/thankyou', (req, res) => {
    const { name } = req.query
    res.render('pages/thankyou', { title: 'Thank You', name });
});

router.use((req, res) => {
    res.status(404).render('pages/404', { title: 'Page Not Found' });
});



module.exports = router;