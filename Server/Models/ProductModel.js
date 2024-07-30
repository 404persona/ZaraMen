const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var productSchema = new Schema({
  imgs: Array,
  name: String,
  price: Number,
  description: String,
  category: String,
  stock: Number,
});

module.exports = mongoose.model("product", productSchema);
