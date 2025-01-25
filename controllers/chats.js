const chatsModel = require("./../models/chats");

exports.create = async (req, res) => {
  const { userTwoID } = req.body;
  const chatExist = await chatsModel
    .findOne({
      userOneID: req.user._id,
      userTwoID,
    })
    .lean();

  if (chatExist) {
    return res.status(403).json({
      message: "You Can't Create Because Chat Is In Your DB",
    });
  }

  if (userTwoID === req.user._id.toString()) {
    return res.json({
      message: "Choose AnyOne For Chat, No YouSelf",
    });
  }

  const chat = await chatsModel.create({ userOneID: req.user._id, userTwoID });
  return res.status(201).json(chat);
};
