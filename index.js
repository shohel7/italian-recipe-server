const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const italianChefs = require("./data/chefs.json");
const recipeCategories = require("./data/categories.json");
const testimonial = require("./data/testimonials.json");

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

// all testimonial Api
app.get("/testimonials", (req, res) => {
  res.send(testimonial);
});

// Single chef Api
app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleChef = italianChefs.find((chef) => parseInt(chef.id) === id);
  res.send(singleChef);
});

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
