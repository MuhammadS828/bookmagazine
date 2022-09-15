const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  _authorId: {
    ref: "Author",
    type: mongoose.SchemaTypes.ObjectId,
  },
  _genreId: {
    ref: "Genre",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
