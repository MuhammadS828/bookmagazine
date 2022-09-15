const { Router } = require("express");
const { reviewsController } = require("../controllers/review.controller");

const router = Router();

router.post("/reviews", reviewsController.addReview);
router.delete("/reviews/:id", reviewsController.deleteReview);
router.get("reviews/books/:id", reviewsController.getAllReviewsByBook);

module.exports = router;
