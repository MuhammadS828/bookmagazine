const Genre = require("../models/Genre.model");

module.exports.genresControllers = {
  addGenres: async (req, res) => {
    const { name, discraption } = req.body;
    try {
      const genres = await Genre.create({
        name,
        discraption,
      });
      res.json(genres);
    } catch (error) {
      res.json(error);
    }
  },
  deleteGenres: async (req, res) => {
    try {
      await Genre.findByIdAndDelete(req.params.id);
      res.json("genre added");
    } catch (error) {
      res.json(error.message);
    }
  },
  getAllGenres: async (req, res) => {
    try {
      const genres = await Genre.find({});
      res.json(genres);
    } catch (error) {
      res.json(error.message);
    }
  },
};
