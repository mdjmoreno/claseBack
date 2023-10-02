"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("./models");
const router = express_1.default.Router();
router.post('/books', (req, res) => {
    const { title, chapters, pages, authorIds } = req.body;
    if (!title || !chapters || !pages || !authorIds) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    const bookId = models_1.books.length + 1;
    const authorsToAdd = [];
    for (const authorId of authorIds) {
        const author = models_1.authors.find((a) => a.id === authorId);
        if (!author) {
            return res.status(404).json({ error: `Autor con ID ${authorId} no encontrado` });
        }
        authorsToAdd.push(author);
    }
    const newBook = {
        id: bookId,
        title,
        chapters,
        pages,
        authors: authorsToAdd,
    };
    models_1.books.push(newBook);
    res.status(201).json(newBook);
});
router.get('/books', (req, res) => {
    res.json(models_1.books);
});
router.post('/authors', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'El nombre del autor es requerido' });
    }
    const authorId = models_1.authors.length + 1;
    const newAuthor = { id: authorId, name };
    models_1.authors.push(newAuthor);
    res.status(201).json(newAuthor);
});
router.get('/authors', (req, res) => {
    const authorsWithBooks = models_1.authors.map((author) => {
        const authorBooks = models_1.books.filter((book) => book.authors.some((a) => a.id === author.id));
        return Object.assign(Object.assign({}, author), { books: authorBooks });
    });
    res.json(authorsWithBooks);
});
router.get('/books/:id/average-pages-per-chapter', (req, res) => {
    const { id } = req.params;
    const book = models_1.books.find((b) => b.id === Number(id));
    if (!book) {
        return res.status(404).json({ error: `Libro con ID ${id} no encontrado` });
    }
    const averagePagesPerChapter = (book.pages / book.chapters).toFixed(2);
    res.json({ id: book.id, averagePagesPerChapter });
});
exports.default = router;
