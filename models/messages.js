const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    chatID: {
      type: mongoose.Types.ObjectId,
      ref: "chats",
      required: true,
    },
    senderID: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("messages", schema);

module.exports = model;
