const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});

module.exports = mongoose.model("User", userSchema);
