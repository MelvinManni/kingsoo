require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let Client = require("./../modules/client.model");

// GET ALL Client
router.route("/:id").get((req, res) => {
  const { id } = req.params;
  console.log(id);
  Client.find({user_id: id}).then((client) => {
    
      res.json(client);
    
  });
});

// ADD Client
router.route("/add").post((req, res) => {
  const { company, accronym, user_id } = req.body;

  Client.findOne({ company }).then((client) => {
    if (client) return res.status(400).json("Client already exists");
    const newUser = new Client({
      company,
      user_id,
      accronym,
    });

    newUser
      .save()
      .then((client) => {
        res.json("Client created successfully");
      })
      .catch((err) => res.status(400).json("ERROR: " + err.message));
  });
});

module.exports = router;
