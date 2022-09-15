const { Router } = require("express");
const { genresControllers } = require("../controllers/genres.controllers");

const router = Router();

router.post("/genres", genresControllers.addGenres);
router.delete("/genres/:id", genresControllers.deleteGenres);
router.get("/genres", genresControllers.getAllGenres);

module.exports = router;
