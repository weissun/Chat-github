const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userOneID: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    userTwoID: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("chats", schema);

module.exports = model;
