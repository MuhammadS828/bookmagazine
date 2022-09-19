const Author = require("../models/Author.model");
module.exports.authorsControllers = {
  addAuthors: async (req, res) => {
    const { name, discraption } = req.body;
    try {
      const author = await Author.create({
        name,
        discraption,
      });
      res.json(author);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteAuthors: async (req, res) => {
    try {
      await Author.findByIdAndDelete(req.params.id);
      res.json("added author");
    } catch (error) {
      res.json(error.message);
    }
  },
};
