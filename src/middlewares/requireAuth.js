const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const SECRET_KEY = "MY SECRET KEY";

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization === 'Bearer eyJhbGciOiJIUzI1NiIsInR5c'

  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, SECRET_KEY, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in." });
    }

    const { userId } = payload;

    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};
