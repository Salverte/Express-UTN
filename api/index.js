const db = require('../models');

const getBooks = async () => {
    const libros = await db.libro.findAll({
                            include: db.autor
                        })
                        .then(results => {
                        return results;
                        });

    return libros;
}




const getAuthors = async () => {
    const authors = await db.autor.findAll()
                        .then(results => {
                        return results;
                        });

    return authors;
}

const getBookById = async (id) => {
    // console.log('Recibiste', id);
   
    
    const book = await db.libro.findByPk(id, {include: db.autor})
                        .then(results => {
                            return results;
                        });

    return book;
};

module.exports = {
    getBooks,
    getAuthors,
    getBookById
}