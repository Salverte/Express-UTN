var express = require('express');
var router = express.Router();

const api = require('../api');

/* GET home page. */
router.get('/', async (req, res) => {
  // Llamamos a la función getBooks que está dentro de api
  const libros = await api.getBooks();
  console.log(libros);
  // res.send(libros);
  res.render('index', {title: 'EXPRESS', libros});
});

router.get('/libro/:id', async (req, res) => {
  // params
  const libro= await api.getBookById(req.params.id);
  // console.log(libro);

  // res.send(`Estás viendo el libro ${req.params.id}`);
  res.render('pages/libro', {libro});
});

router.get('/autores', async (req, res) => {
    const autores = await api.getAuthors();
  res.send(autores);
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


/* GET Agregar */
router.get('/agregar', (req, res) => {
  res.render('pages/agregar');
});


/* Post Agregar_libro */
router.post('/agregar-libro', (req, res) => {
  //conseguir lo que el usuario tipeo
  console.log(req.body);
  let {titulo, autor, precio} = req.body;
  res.send( `Agregaron ${titulo} ${autor} ${precio}`);
});
module.exports = router;
