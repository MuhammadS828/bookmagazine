const Book = require("../models/Book.model");

module.exports.booksController = {
  addBook: async (req, res) => {
    const { name, _authorId, _genreId } = req.body;
    try {
      const books = await Book.create({
        name,
        _authorId,
        _genreId,
      });
      res.json(books);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json("books deleted");
    } catch (error) {
      req.json(error.message);
    }
  },
  apduteBooks: async (req, res) => {
    const { name, _authorId, _genreId } = req.body;
    try {
      const books = await Book.findByIdAndUpdate(req.params.id, {
        name,
        _authorId,
        _genreId,
      });
      res.json(books);
    } catch (error) {
      res.json(error.message);
    }
  },
  getBooksById: async (req, res) => {
    try {
      const books = await Book.findById(req.params.id).populate(
        "name",
        "_authorId",
        "_genreId"
      );
      res.json(books);
    } catch (error) {
      res.json(error.message);
    }
  },
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find({}).populate(
        "name",
        "_authorId",
        "_genreId"
      );
      res.json(books);
    } catch (error) {
      res.json(error.message);
    }
  },
  getBooksByGenre: async (req, res) => {
    try {
      const books = await Book.find({ _genreId: req.params.id }).populate(
        "name",
        "_authorId",
        "_genreId"
      );
    } catch (error) {
      res.json(error.message);
    }
  },
};
