const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT;

(async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Server Connect To DB Successfully");
})();

//token
app.get("/", (req, res) => {
  res.json(req.header("authorization").split(" ")[1]);
});

app.listen(port, () => {
  console.log(`Server Running On Port ${port} `);
});
