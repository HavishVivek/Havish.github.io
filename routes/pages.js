const express = require("express");
const router = express.Router();
const db = require("./routes/db-config");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", (req, res) => {
  res.sendFile("register.html", { root: "./public" });
});

router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public/" });
});

module.exports = router;
