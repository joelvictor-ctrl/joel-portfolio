var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Render the About Me page when someone visits /about.
router.get('/about', function (req, res) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function (req, res) {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', function (req, res) {
  res.render('contact', { title: 'Contact Me' });
});
module.exports = router;