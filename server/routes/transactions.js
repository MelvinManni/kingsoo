require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let Client = require("./../modules/client.model");

// GET ALL USERS
router.route("/").get((req, res) => {
  Client.find().then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    res.json(user);
  });
});

// ADD USER
router.route("/add").post((req, res) => {
  const { company, accronym } = req.body;

  Client.findOne({ company }).then((client) => {
    if (client) return res.status(400).json("Client already exists");
    const newUser = new Client({
      company,
      accronym,
    });

    newUser
      .save()
      .then((client) => {
        res.json(client);
      })
      .catch((err) => res.status(400).json("ERROR: " + err.message));
  });
});

module.exports = router;
