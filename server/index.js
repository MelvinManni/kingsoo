require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5500;

// ADDING MIDDLEWARE

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONNECTING DB
const dbUri = process.env.DB;

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Successfully connected to MongoDB database");
});

// IMPORTING ROUTE FOR USERS

const userRoute = require("./routes/user");
app.use("/user", userRoute);

// SETTING UP SERVER
app.listen(port, () => {
  console.log("Server is runnng on port " + port);
});
