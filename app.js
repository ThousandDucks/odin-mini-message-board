const express = require("express");
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages })
});

app.get("/new", (req, res) => {
    res.render("form")
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});