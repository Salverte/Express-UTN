const { Op } = require("sequelize");

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
    const authors = await db.autor.findAll({
        order: ['nombreCompleto'],
        }).then(results => {
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

const findBookByTitle = async (termino) => {
    const books = await db.libro.findAll({
    where:{
        titulo: {
            [Op.substring]: termino,
        }
    }
    }).then(results => {
        return results;
    });
    return books;
};

const insertBook = async (titulo, precio, portada, autorId) => {
    const libro = await db.libro.create({
        titulo, precio, portada, autorId
    });
    return libro;
}

module.exports = {
    getBooks,
    getAuthors,
    getBookById,
    findBookByTitle,
    insertBook
}