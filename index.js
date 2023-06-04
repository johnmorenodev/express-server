const express = require("express");

const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO WORLDsss");
});

app.listen(port, () => {
  console.log("server is running");
});
