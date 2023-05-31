const express = require("express");
const configViewEngine = require("./config/configView"); //config ViewEngine
require("dotenv").config();
const app = express(); // sử dụng các tính năng của thằng express
const PORT = process.env.PORT || 3030;
const methodOverride = require("method-override");
var fs = require("fs");
var dir = "./uploads";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const route = require("./route");

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configViewEngine(app); //setup view engine
route(app); //init route

app.listen(PORT, () => console.log("Listening port " + PORT));
