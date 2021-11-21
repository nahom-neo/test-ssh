const express = require("express");
const app = express();
const PORT = process.env.PORT || "3000";

app.get('/about', (req,res)=>{
    res.send("About Page!")
})

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.listen(PORT);

module.exports = app;
