const { Router } = require("express");
const { booksController } = require("../controllers/books.controllers");

const router = Router();

router.post("/books", booksController.addBook);
router.delete("/books/:id", booksController.deleteBook);
router.patch("books/:id", booksController.apduteBooks);
router.get("/books/:id", booksController.getBooksById);
router.get("/books", booksController.getAllBooks);
router.get("/books/genres/:id", booksController.getBooksByGenre);

module.exports = router;
