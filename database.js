const mongoose = require("mongoose");
const url = "mongodb://localhost/emp";

//Connection with mongodb
const mongodbConnection = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongodbConnection;
