var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Home', page: 'index' });
});


// Render the About Me page when someone visits /about.
router.get('/about', function (req, res) {
  res.render('layout', { title: 'About Me', page: 'about' });
});

router.get('/projects', function (req, res) {
  res.render('layout', { title: 'Projects', page: 'projects' });
});

router.get('/contact', function (req, res) {
  res.render('layout', { title: 'Contact Me', page: 'contact' });
});
module.exports = router;