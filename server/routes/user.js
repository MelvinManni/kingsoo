require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let User = require("./../modules/user.model.js");

// GET ALL USERS
router.route("/").post((req, res) => {

  const { username, password } = req.body;
  User.findOne({ username }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // VALIDATE AND DECRYPT PASSWORD

    bcrypt.compare(password, user.password).then((match) => {
      if (!match) return res.status(400).json({ msg: "Incorrect password" });
      jwt.sign(
        { id: user.id },
        process.env.USER_JWT,
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.firstName,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

// ADD USER
router.route("/add").post((req, res) => {
  const { username, email, firstName, lastName, password } = req.body;

  User.findOne({ email }).then((mail) => {
    if (mail) return res.status(400).json("User with email already exists");
    User.findOne({ username }).then((user) => {
      if (user)
        return res.status(400).json("User with Username already exists");
      const newUser = new User({
        username,
        email,
        firstName,
        lastName,
        password,
      });

      // HASHING ^
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              console.log(user);
              jwt.sign(
                { id: user.id },
                process.env.USER_JWT,
                { expiresIn: 36000 },
                (err, token) => {
                  if (err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.firstName,
                      email: user.email,
                    },
                  });
                }
              );
            })
            .catch((err) => res.status(400).json("ERROR: " + err.message));
        });
      });
    });
  });
});

module.exports = router;
