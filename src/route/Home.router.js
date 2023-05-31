const express = require("express");

const router = express.Router();
const HomeController = require("../controllers/HomeController");
const upload = require("../middleware/upload");
router.post(
  "/user/addUser/store",
  upload.single("image"),
  HomeController.addNewUser
);
router.put("/user/edit/:userId", HomeController.editUser);
router.delete("/user/delete/:userId", HomeController.deleteUser);

router.get("/user/detail/:id", HomeController.getUserDetail);
router.get("/user/edit/:id", HomeController.getEditUser);
router.get("/user/addUser", HomeController.getAddUSer);
router.get("/", HomeController.getHomePage);

module.exports = router;
