const chatsModel = require("./../models/chats");

exports.create = async (req, res) => {
  const { senderTwoID } = req.body;
  const chatExist = await chatsModel
    .findOne({
      senderOneID: req.user._id,
      senderTwoID,
    })
    .lean();

  if (chatExist) {
    return res.status(403).json({
      message: "You Can't Create Because Chat Is In Your DB",
    });
  }

  if (senderTwoID === req.user._id.toString()) {
    return res.json({
      message: "Choose AnyOne For Chat, No YouSelf",
    });
  }

  const chat = await chatsModel.create({
    senderOneID: req.user._id,
    senderTwoID,
  });
  return res.status(201).json(chat);
};
