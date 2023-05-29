const express = require("express");
const configViewEngine = require("./config/configView"); //config ViewEngine
require("dotenv").config();
const app = express(); // sử dụng các tính năng của thằng express
const PORT = process.env.PORT || 3030;
const route = require("./route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configViewEngine(app); //setup view engine
route(app); //init route

app.listen(PORT, () => console.log("Listening port " + PORT));
