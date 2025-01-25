const express = require("express");
const usersController = require("./../controllers/users");

const router = express.Router();

router.route("/").post(usersController.create);

module.exports = router;
