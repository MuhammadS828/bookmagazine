const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(require("./routes/books.rout"));
app.use(require("./routes/authors.rout"));
app.use(require("./routes/genres.rout"));
app.use(require("./routes/reviews.rout"));

mongoose.connect(
  "mongodb+srv://Magomed:Sup1001magomed@cluster1.om1j1fy.mongodb.net/Books",
  (err) => {
    if (err) {
      console.log("err");
    }
    console.log("db connection");
    app.listen(3000, () => {
      console.log("started");
    });
  }
);
