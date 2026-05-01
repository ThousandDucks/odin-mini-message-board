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

app.get("/messages/:id", (req, res) => {
    const id = req.params.id;
    const message = messages[id];

    res.render("messageDetail", { message });
});

app.use(express.urlencoded({ extended: true }));

app.post("/new", (req, res) => {
    
    const newMessage = {
        text: req.body.messageText,
        user: req.body.username,
        added: new Date()
    };

    messages.push(newMessage);
    res.redirect("/")
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});