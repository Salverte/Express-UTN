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
router.get('/buscar', async (req, res) => {
  //query
  //guardar en una variable lo que escribió el usuario en el campo
  let { termino }= req.query;
  console.log(termino); 
 
  const resultados = await api.findBookByTitle(termino);
  // //mostrarlo en la terminal
  res.send(resultados);
});


/* GET Contacto */
router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});


/* GET Agregar */
router.get('/agregar', async (req, res) => {
  const autores = await api.getAuthors();

  res.render('pages/agregar', {autores});
});


/* Post Agregar_libro */
router.post('/agregar-libro', async (req, res) => {
  //conseguir lo que el usuario tipeo
  console.log(req.body);

  let {titulo, autor, precio} = req.body;
  
  //insertBook = async (titulo, precio, portada, autorId)
  const libro = await api.insertBook(titulo, precio, "", autor)
  res.redirect('/');
  //res.send( `Agregaron ${titulo} ${autor} ${codigoPais} ${precio}`);
});

module.exports = router;
