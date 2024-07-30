const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var homeSchema = new Schema({
  imgs: Array,
  name: String,
  category: String,
});

module.exports = mongoose.model("homeimg", homeSchema);
