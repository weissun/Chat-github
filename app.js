const express = require("express");

const usersRouter = require("./routes/users");
const chatsRouter = require("./routes/chats");
const messageRouter = require("./routes/messages");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/chats", chatsRouter);
app.use("/messages", messageRouter);

module.exports = app;
