const express = require("express");

const app = express();

app.get("/", (reques, response) => {
  response.send("Hi, there!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
