const usersModel = require("./../models/users");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req.header("Authorization")?.split(" ");

  if (authHeader?.length !== 2) {
    return res.status(403).json({
      message: "This Route Is Proteced and You Can't Have Access To It",
    });
  }
  const token = authHeader[1];

  try {
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await usersModel.findOne({ _id: jwtPayload.id }).lean();

    req.user = user;

    next();
  } catch (err) {
    return res.json(err);
  }
};
