var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Splinter' });
});

/* GET Nosotros. */
router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

/* GET buscar. */
router.get('/buscar', (req, res) => {
  //query
  //guardar en una variable lo que escribió el usuario en el campo
  let { termino }= req.query;
  
  console.log(termino); 
  //mostrarlo en la terminal
  res.send('Estas en buscar');
});

/* GET Contacto */
router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});
module.exports = router;
