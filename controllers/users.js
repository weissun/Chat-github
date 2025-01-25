const usersModel = require("./../models/users");
const jwt = require("jsonwebtoken");

exports.create = async (req, res) => {
  const { name, phone } = req.body;

  const user = await usersModel.create({ name, phone });

  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "5 day",
  });

  return res.status(201).json({ user, accessToken });
};
