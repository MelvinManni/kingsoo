const mongoose = require("mongoose");

// CREATING USER SCHEMA FOR USER COLLECTION IN THE DB

const Schema = mongoose.Schema;

const clientSchema = Schema({
//   id: { type: String, required: true, unique: true, min: 1 },
  user_id: { type: String, required: true},
  company: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
    trim: true,
  },
  accronym: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
});

const Client = mongoose.model("client", clientSchema);

module.exports = Client;
