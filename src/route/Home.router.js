const express = require("express");

const router = express.Router();
const HomeController = require("../controllers/HomeController");

router.get("/user/detail/:id", HomeController.getUserDetail);
router.get("/user/edit/:id", HomeController.getEditUser);
router.get("/", HomeController.getHomePage);

module.exports = router;
