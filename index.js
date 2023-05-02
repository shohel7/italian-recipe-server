const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Dragon is running");
});

// all categories Api
// app.get("/categories", (req, res) => {
//   res.send(categories);
// });

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
  console.log(`Dragon is running at ${port}`);
});
