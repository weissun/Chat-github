const express = require("express");
const chatsController = require("./../controllers/chats");
const authMiddleware = require("./../middlewares/auth");

const router = express.Router();

router.route("/").post(authMiddleware, chatsController.create);

module.exports = router;
