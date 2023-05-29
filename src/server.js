const express = require("express");
const configViewEngine = require("./config/configView"); //config ViewEngine

const app = express(); // sử dụng các tính năng của thằng express
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => console.log("Listening port " + PORT));
