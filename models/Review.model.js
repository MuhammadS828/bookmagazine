const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: String,
  text: String,
  _bookId: { ref: "Book", type: mongoose.SchemaTypes.ObjectId },
});

const Review = mongoose.model("Rewiew", reviewSchema);

module.exports = Review;
