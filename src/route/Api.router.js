const express = require("express");

const router = express.Router();
const ApiController = require("../controllers/ApiController");

router.post("/user/addUser", ApiController.addNewUser); //API add new user in db
router.put("/user/edit/:userId", ApiController.editUser); //API edit new user in db
router.delete("/user/delete/:userId", ApiController.deleteUser); //API delete user in db
router.get("/user/:userId", ApiController.getUserDetail);  //API get user by userId
router.get("/", ApiController.getUsers); //API Get all user in database

module.exports = router;
