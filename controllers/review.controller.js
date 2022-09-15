const Review = require("../models/Review.model");

module.exports.reviewsController = {
  addReview: async (req, res) => {
    const { name, text, _bookId } = req.body;
    try {
      const reviews = await Review.create({
        name,
        text,
        _bookId,
      });
      res.json(reviews);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteReview: async (req, res) => {
    try {
      await Review.findByIdAndDelete(req.params.id);
      res.json("reviews deleted");
    } catch (error) {
      res.json(error.message);
    }
  },
  getAllReviewsByBook: async (req, res) => {
    try {
      const reviews = await Review.find({ _bookId: req.params.id }).populate(
        "_bookId"
      );
      res.json(reviews);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
