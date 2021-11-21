const express = require("express");
const app = express();
const PORT = process.env.PORT | "3000";

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.listen(PORT);

module.exports = app;
