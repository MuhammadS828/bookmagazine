const { Router } = require("express");
const { authorControllers } = require("../controllers/author.controllers");

const router = Router();

router.post("/author", authorControllers.addAuthors);
router.delete("/author", authorControllers.deleteAuthors);

module.exports = router;
