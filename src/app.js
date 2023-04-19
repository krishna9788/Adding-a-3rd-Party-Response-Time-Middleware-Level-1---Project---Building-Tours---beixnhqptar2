const express = require("express");
const responseTime = require("response-time");
const app = express();

app.use(express.json());

app.use(responseTime());

app.get("/", function (req, res) {
  res.send("Checing response time");
});

app.listen(5000, function () {
  console.log("Server started on port 5000");
});

module.exports = app;
