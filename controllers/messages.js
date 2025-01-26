const messagesModel = require("./../models/messages");
const chatsModel = require("./../models/chats");
const { isValidObjectId } = require("mongoose");

exports.create = async (req, res) => {
  const { body, friendID } = req.body;

  if (!isValidObjectId(friendID)) {
    return res.status(409).json({
      message: "Friend ID Not Valid",
    });
  }

  if (friendID === req.user._id.toString()) {
    return res.status(403).json({
      message: "You Can't Send Message For YourSelf",
    });
  }

  const isChatExist = await chatsModel
    .findOne({
      $or: [
        { userOneID: req.user._id, userTwoID: friendID },
        { userOneID: friendID, userTwoID: req.user._id },
      ],
    })
    .lean();

  if (!isChatExist) {
    return res.status(403).json({
      message: "Chat Is Not Valid",
    });
  }
  const message = await messagesModel.create({
    body,
    chatID: isChatExist._id,
    senderID: req.user._id,
  });

  return res.status(201).json(message);
};

exports.getAll = async (req, res) => {
  const chat = await chatsModel
    .findOne({
      $or: [{ userOneID: req.user._id }, { userTwoID: req.user._id }],
    })
    .lean();

  const messages = await messagesModel
    .find({ chatID: chat._id }, "body userID")
    .populate("senderID", "name")
    .lean();

  return res.status(200).json(messages);
};
