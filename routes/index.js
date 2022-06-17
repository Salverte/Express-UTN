var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Splinter' });
});

/* GET Nosotros. */
router.get('/nosotros', function(req, res, next) {
  res.render('pages/nosotros');
});

/* GET Contacto */
router.get('/contacto', function(req, res, next) {
  res.render('pages/contacto');
});
module.exports = router;
