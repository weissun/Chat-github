const express = require("express");
const authMiddleware = require("./../middlewares/auth");
const messagesController = require("./../controllers/messages");

const router = express.Router();

router.route("/").post(authMiddleware, messagesController.create);

router.route("/").get(authMiddleware, messagesController.getAll);

module.exports = router;
