const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri =
  "mongodb+srv://admin:adminpassword@cluster0-lkrfn.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (error) => {
  console.error("Error connecting to mongo", error);
});

app.get("/", (request, response) => {
  response.send("Hi, there! This server is built with mongoDB and Express");
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
