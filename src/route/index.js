const express = require("express");
const home = require("./Home.router");

const route = (app) => {
  app.use("/", home);
};

module.exports = route;
