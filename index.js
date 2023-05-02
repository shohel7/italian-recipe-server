const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const italianChefs = require("./data/chefs.json");
const recipeCategories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Italian Recipe is running");
});

// all Italian chefs Api
app.get("/allChefs", (req, res) => {
  res.send(italianChefs);
});

// all Recipe categories Api
app.get("/categories", (req, res) => {
  res.send(recipeCategories);
});

// // Single category Api
// app.get("/categories/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   if (id === 0) {
//     res.send(news);
//   } else {
//     const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
//     res.send(categoryNews);
//   }
// });

// // all news api
// app.get("/news", (req, res) => {
//   res.send(news);
// });

// // single news Api
// app.get("/news/:id", (req, res) => {
//   const id = req.params.id;
//   // console.log(id);
//   const selectedNews = news.find((n) => n._id === id);
//   res.send(selectedNews);
// });

app.listen(port, (req, res) => {
  console.log(`Italian recipe server is running at ${port}`);
});
