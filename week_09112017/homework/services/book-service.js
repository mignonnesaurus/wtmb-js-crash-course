const BookModel = require('../models/book-model');
const AuthorService = require('./author-service')

async function findAll() {
    return BookModel.find().populate('author');
}

async function find(id) {
    return BookModel.findOne({ book_id: id }).populate('author');
}

async function add(book) {
    const author = await AuthorService.find(book.authorId);
    book.author = author.id
    return BookModel.create(book);
}

async function del(id) {
    return BookModel.remove({ book_id: id });
}

module.exports = {
    findAll,
    find,
    add,
    del
}