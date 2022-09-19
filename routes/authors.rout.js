const { Router } = require("express");
const { authorsControllers } = require("../controllers/authors.controllers");

const router = Router();

router.post("/authors", authorsControllers.addAuthors);
router.delete("/authors", authorsControllers.deleteAuthors);

module.exports = router;
