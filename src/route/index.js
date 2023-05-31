const express = require("express");
const home = require("./Home.router");
const api = require("./Api.router");

const route = (app) => {
  app.use("/api", api);
  app.use("/", home);
};

module.exports = route;
