const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    senderOneID: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    senderTwoID: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("chats", schema);

module.exports = model;
