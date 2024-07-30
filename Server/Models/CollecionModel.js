const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var collectionSchema = new Schema({
  img: String,
  category: String,
});

module.exports = mongoose.model("collection", collectionSchema);
