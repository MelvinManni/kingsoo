const mongoose = require("mongoose");

// CREATING USER SCHEMA FOR USER COLLECTION IN THE DB

const Schema = mongoose.Schema;

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },
  role: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
